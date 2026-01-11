import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { servicesData } from "@/lib/servicesData";
import { createClient } from "@/utils/supabase/server"; // Re-use the SSR client creator, or create direct admin client if needed to bypass RLS for inserts if unauthenticated.
// Ideally, for saving leads from a public chat, we need a service role client or allow public inserts.
// Since we set up RLS for public inserts previously for contact_submissions, we can re-use that table or standard RLS.

// Create a Supabase client with Service Role for admin tasks if needed, 
// but sticking to standard server client for now which identifies as anon user.
// Ensure your table (contact_submissions or a new one) allows inserts from "anon".

// Check for API keys
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
if (!apiKey) {
  console.error("❌ API_KEY is missing. Please set GEMINI_API_KEY or GOOGLE_API_KEY in .env.local");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "" }); 

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ reply: "Invalid request format." }, { status: 400 });
    }
    // ... rest of the code
    const lastUserMessage = messages[messages.length - 1].content;

    // ... (rest of prompt generation) ...

    const servicesContext = servicesData
      .map((s) => `- ${s.title}: ${s.shortDescription}\n  Sub-services: ${s.subServices.join(", ")}`)
      .join("\n\n");

    const systemPrompt = `
      You are an AI Sales Assistant for "Engiverse Engineering LLP".
      Your goals are:
      1. Greet the user warmly if they say hi.
      2. Briefly answer their questions about our services.
      3. MOST IMPORTANT: Your primary goal is to collect their NAME, PHONE NUMBER, EMAIL, and SERVICE of interest.
      4. If the user wants to book an appointment or get a quote, DO NOT ask them to type their details.
      5. Instead, simply say: "Sure! Please fill out the form below to connect with our team." and append this EXACT code: ||SHOW_LEAD_FORM||
      6. Do not output JSON. Use the form code.

      Our Services:
      ${servicesContext}

      Current conversation history:
      ${messages.map((m: any) => `${m.role}: ${m.content}`).join("\n")}
    `;

    // 2. Call Gemini API
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview", 
      contents: [
        {
          role: "user",
          parts: [{ text: systemPrompt }]
        }
      ]
    });

    let reply = response.text || "";
    
    // 3. Lead Capture Logic (Smart Extraction)
    const leadBlockRegex = /\|\|LEAD\|(.*?)\|\|/;
    const match = reply.match(leadBlockRegex);
    
    if (match && match[1]) {
      try {
        const leadData = JSON.parse(match[1]);
        
        // Clean the reply by removing the hidden block
        reply = reply.replace(leadBlockRegex, "").trim();

        // Save to Supabase if we have at least a phone or email
        if (leadData.phone || leadData.email) {
          const supabase = await createClient();
          await supabase.from("contact_submissions").insert({
            name: leadData.name !== "null" ? leadData.name : "Chat User",
            phone: leadData.phone !== "null" ? leadData.phone : null,
            email: leadData.email !== "null" ? leadData.email : null,
            project_details: `Interested in: ${leadData.service !== "null" ? leadData.service : "General Enquiry"}`,
            source: "chatbot" 
          });
          console.log("✅ Lead Saved to Supabase:", leadData);
        }
      } catch (e) {
        console.error("Failed to parse lead data:", e);
      }
    }

    return NextResponse.json({ reply });

  } catch (error: any) {
    console.error("❌ Chat API Error Details:", error);
    // Return the actual error message in dev mode for easier debugging
    const errorMessage = process.env.NODE_ENV === "development" 
      ? `Error: ${error.message || "Unknown error"}`
      : "I'm having trouble connecting to the AI. Please try again.";
      
    return NextResponse.json(
      { reply: errorMessage },
      { status: 500 }
    );
  }
}
