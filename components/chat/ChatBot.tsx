"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, X, Loader2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { Input } from "../ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! 👋 Welcome to Engiverse. I can help you find the right engineering service, get a quote, or book a consultation. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      const botMessage: Message = { role: "assistant", content: data.reply };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "assistant", content: "I'm having a bit of trouble connecting right now. Please try again later or email us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 w-[90vw] md:w-[400px] h-[500px] max-h-[80vh] shadow-2xl scale-100 origin-bottom-right"
          >
            <Card className="border-primary/20 bg-background/95 backdrop-blur-md shadow-xl overflow-hidden h-full flex flex-col">
              <CardHeader className="bg-primary/5 border-b border-border/50 p-4 flex flex-row items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                   <div className="relative">
                     <div className="w-2 h-2 rounded-full bg-green-500 absolute bottom-0 right-0 animate-pulse"></div>
                     <MessageCircle className="w-6 h-6 text-primary" />
                   </div>
                   <div>
                     <CardTitle className="text-sm font-bold">Engiverse AI Assistant</CardTitle>
                     <p className="text-xs text-muted-foreground">Online | Replies Instantly</p>
                   </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                  <Minimize2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-0 flex-1 flex flex-col min-h-0">
                <div className="flex flex-col h-full">
                  {/* Chat messages area with visible scrollbar */}
                  <div 
                    className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-800"
                    ref={scrollRef}
                    style={{ 
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#6b7280 #1f2937',
                      overscrollBehavior: 'contain' 
                    }}
                  >
                    <div className="space-y-4">
                      {messages.map((m, i) => (
                        <div
                          key={i}
                          className={cn(
                            "flex w-full",
                            m.role === "user" ? "justify-end" : "justify-start"
                          )}
                        >
                          <div
                            className={cn(
                              "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                              m.role === "user"
                                ? "bg-primary text-primary-foreground rounded-br-none"
                                : "bg-muted text-foreground rounded-bl-none"
                            )}
                          >
                            {m.role === "assistant" ? (
                              <div className="prose prose-sm dark:prose-invert max-w-none">
                                <ReactMarkdown
                                  components={{
                                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                    ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                                    ol: ({ children }) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
                                    li: ({ children }) => <li className="mb-1">{children}</li>,
                                    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                                    em: ({ children }) => <em className="italic">{children}</em>,
                                  }}
                                >
                                  {m.content.replace('||SHOW_LEAD_FORM||', '')}
                                </ReactMarkdown>
                                {m.content.includes('||SHOW_LEAD_FORM||') && (
                                  <LeadForm 
                                    onSuccess={() => {
                                       // Optional: add a success message to chat from user side
                                       setMessages(prev => [...prev, { role: "user", content: "I've submitted my details!" }, { role: "assistant", content: "Perfect! We've received your details and will call you shortly. 🚀" }]);
                                    }} 
                                  />
                                )}
                              </div>
                            ) : (
                              m.content
                            )}
                          </div>
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="bg-muted rounded-2xl rounded-bl-none px-4 py-2 flex items-center gap-2">
                             <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                             <span className="text-xs text-muted-foreground">Typing...</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-4 border-t border-border/50 bg-background">
                    <div className="flex gap-2 items-end">
                      <textarea
                        placeholder="Type a message... (Shift+Enter for new line)"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        className="flex-1 h-[60px] bg-muted/50 p-2 text-sm rounded-md border border-input focus:outline-none focus:ring-1 focus:ring-ring resize-none overflow-y-auto"
                        style={{
                          scrollbarWidth: 'thin',
                          scrollbarColor: '#6b7280 #1f2937'
                        }}
                      />
                      <Button onClick={sendMessage} size="icon" disabled={isLoading || !input.trim()}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-[10px] text-center text-muted-foreground mt-2">
                      Powered by Gemini 3.0 Pro
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 bg-primary text-primary-foreground p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </motion.button>
      )}
    </>
  );
}

function LeadForm({ onSuccess }: { onSuccess: () => void }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setTimeout(onSuccess, 1000); // Trigger generic success flow after viewing success state
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
     return (
       <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-center">
         <p className="text-green-500 font-bold text-sm">Details Sent! ✅</p>
         <p className="text-xs text-muted-foreground mt-1">We'll contact you soon.</p>
       </div>
     );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-4 bg-muted/30 border border-border rounded-lg space-y-3">
      <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Quick Contact Form</p>
      
      <Input 
        placeholder="Your Name" 
        required 
        value={formData.name}
        onChange={e => setFormData(prev => ({...prev, name: e.target.value}))}
        className="bg-background h-9 text-sm"
      />
      
      <Input 
        placeholder="Phone Number" 
        required 
        type="tel"
        value={formData.phone}
        onChange={e => setFormData(prev => ({...prev, phone: e.target.value}))}
        className="bg-background h-9 text-sm"
      />

      <Input 
        placeholder="Email Address (Optional)" 
        type="email"
        value={formData.email}
        onChange={e => setFormData(prev => ({...prev, email: e.target.value}))}
        className="bg-background h-9 text-sm"
      />

      <Button type="submit" className="w-full h-9 text-sm" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="w-3 h-3 mr-2 animate-spin" /> Sending...
          </>
        ) : (
          "Request Call Back"
        )}
      </Button>
      {status === "error" && <p className="text-xs text-red-500 text-center">Something went wrong. Try again.</p>}
    </form>
  );
}
