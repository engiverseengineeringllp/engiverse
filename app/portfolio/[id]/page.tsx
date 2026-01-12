import React from "react";
import { notFound } from "next/navigation";
import { portfolioData } from "@/lib/portfolioData";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Spotlight } from "@/components/ui/spotlight";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioData.map((item) => ({
    id: item.id,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = portfolioData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background relative pt-36 pb-20">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Link href="/portfolio" className="inline-flex items-center text-neutral-400 hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    {project.title}
                </h1>
                
                <div className="mb-8 relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-neutral-800">
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover"
                    />
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <ReactMarkdown
                        components={{
                            h1: ({children}) => <h1 className="text-3xl font-bold text-primary mt-8 mb-4">{children}</h1>,
                            h2: ({children}) => <h2 className="text-2xl font-bold text-neutral-100 mt-8 mb-4 border-b border-neutral-800 pb-2">{children}</h2>,
                            h3: ({children}) => <h3 className="text-xl font-semibold text-neutral-200 mt-6 mb-3">{children}</h3>,
                            p: ({children}) => <p className="text-neutral-400 mb-4 leading-relaxed">{children}</p>,
                            ul: ({children}) => <ul className="list-none space-y-2 mb-6">{children}</ul>,
                            li: ({children}) => (
                                <li className="flex items-start text-neutral-300">
                                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                                    <span>{children}</span>
                                </li>
                            ),
                            blockquote: ({children}) => (
                                <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-neutral-400 bg-neutral-900/50 rounded-r my-6">
                                    {children}
                                </blockquote>
                            ),
                        }}
                    >
                        {project.content}
                    </ReactMarkdown>
                </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1">
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 sticky top-24">
                    <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                    
                    <div className="space-y-4 mb-6">
                        <div>
                            <p className="text-sm text-neutral-500 mb-1">Category</p>
                            <p className="text-neutral-200 font-medium">{project.category}</p>
                        </div>
                        <div>
                            <p className="text-sm text-neutral-500 mb-1">Client Result</p>
                            <p className="text-green-400 font-medium">+28% Leads, $14k+ ROI</p>
                        </div>
                    </div>

                    <p className="text-neutral-400 text-sm mb-6">
                        {project.description}
                    </p>

                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                            Visit Live Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>

                    <div className="mt-8 border-t border-neutral-800 pt-6">
                        <h4 className="text-white font-semibold mb-3">Want similar results?</h4>
                        <Link href="/contact">
                            <Button variant="outline" className="w-full border-neutral-700 hover:bg-neutral-800 text-neutral-300">
                                Get a Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
