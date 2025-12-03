import React from "react";
import { Metadata } from "next";
import { 
  Target, 
  Lightbulb, 
  Globe, 
  Award, 
  Users, 
  Leaf, 
  Cpu, 
  Wrench, 
  Rocket,
  Heart
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us | Engiverse Engineering LLP",
  description: "Learn about Engiverse's vision, mission, and commitment to engineering excellence and digital innovation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Hero / About Section */}
      <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-white font-heading mb-8">
            About ENGIVERSE
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            ENGIVERSE is a forward-thinking engineering and technology company focused on delivering
            world-class design and software solutions to global industries. By blending
            engineering precision with digital innovation, we aim to empower clients with
            smarter, faster, and more sustainable solutions — from product concept to implementation.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Lightbulb className="w-32 h-32 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary dark:text-white font-heading mb-4 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-primary" /> Our Vision
            </h2>
            <p className="text-lg text-foreground/90 italic">
              “To become India’s most trusted hub for integrated engineering and digital innovation — where creativity meets precision to build a smarter, sustainable, and technologically empowered future.”
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
              <Target className="w-32 h-32 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary dark:text-white font-heading mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" /> Our Mission
            </h2>
            <p className="text-lg text-foreground/90">
              To build long-term partnerships with clients by offering value-driven and future-ready solutions. We strive to bridge the gap between traditional engineering and modern digital technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <h2 className="text-3xl font-bold text-center text-primary dark:text-white font-heading mb-12">
          Core Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  {value.icon}
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Infrastructure & Tools */}
      <section className="bg-muted/30 py-16 md:py-24 mb-16 md:mb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-primary dark:text-white font-heading mb-12">
            Infrastructure & Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Wrench className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Engineering Tools</h3>
              <p className="text-muted-foreground">AutoCAD, SolidWorks, CATIA, ANSYS</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Cpu className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Software Tools</h3>
              <p className="text-muted-foreground">Python, MATLAB, JavaScript, C++</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">Collaboration</h3>
              <p className="text-muted-foreground">Microsoft Teams, Zoom, Slack, Google Workspace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets & Growth */}
      <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary dark:text-white font-heading mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6" /> Target Markets
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 mt-2 rounded-full bg-secondary shrink-0" />
                <span className="text-muted-foreground"><strong>International Clients:</strong> Primary focus on USA, Europe, and Middle East.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 mt-2 rounded-full bg-secondary shrink-0" />
                <span className="text-muted-foreground"><strong>Client Types:</strong> OEMs, Engineering Firms, EPC Companies, Startups.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary dark:text-white font-heading mb-6 flex items-center gap-2">
              <Rocket className="w-6 h-6" /> Future Growth Plans
            </h2>
            <ul className="space-y-4">
              {[
                "Register the company officially under MCA (India).",
                "Obtain ISO 9001 & ISO 27001 certifications.",
                "Expand into global engineering and software markets.",
                "Build proprietary digital engineering platforms.",
                "Recruit and train specialised technical teams."
              ].map((plan, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="h-2 w-2 mt-2 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

const coreValues = [
  {
    title: "Innovation",
    description: "Continuously improving and adopting emerging technologies to deliver smart engineering solutions.",
    icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
  },
  {
    title: "Quality",
    description: "Ensuring precision, reliability, and excellence in every design and software project.",
    icon: <Award className="w-5 h-5 text-blue-500" />,
  },
  {
    title: "Integrity",
    description: "Building trust through transparency and ethical business practices.",
    icon: <Users className="w-5 h-5 text-green-500" />,
  },
  {
    title: "Collaboration",
    description: "Working closely with clients and partners to achieve mutual growth and success.",
    icon: <Users className="w-5 h-5 text-purple-500" />,
  },
  {
    title: "Sustainability",
    description: "Committing to responsible engineering that supports a greener and more efficient future.",
    icon: <Leaf className="w-5 h-5 text-emerald-500" />,
  },
  {
    title: "Customer Success",
    description: "Prioritizing our clients' needs and delivering solutions that drive real business value.",
    icon: <Heart className="w-5 h-5 text-red-500" />,
  },
];
