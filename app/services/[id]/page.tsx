"use client";

import React, { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/servicesData";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServicePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ServiceDynamicPage({ params }: ServicePageProps) {
  const { id } = use(params);
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Back Button */}
        <div className="mb-8">
            <Link href="/services">
                <Button variant="ghost" className="gap-2 pl-0 hover:pl-2 transition-all">
                    <ArrowLeft className="w-4 h-4" /> Back to Services
                </Button>
            </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary dark:text-white font-heading mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {service.fullDescription}
            </p>

            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary dark:text-white">What We Offer:</h3>
                <div className="grid gap-4">
                    {service.subServices.map((subService, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start gap-3 p-4 rounded-lg bg-secondary/5 border border-secondary/10 hover:border-secondary/30 transition-colors"
                        >
                            <div className="mt-1 bg-secondary/10 p-1 rounded-full">
                                <CheckCircle2 className="w-4 h-4 text-secondary" />
                            </div>
                            <span className="text-foreground font-medium">{subService}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-10">
                <Link href="/contact">
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2">
                        Get a Quote for {service.title}
                    </Button>
                </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
          >
            {service.image ? (
                 <Image
                 src={service.image}
                 alt={service.title}
                 fill
                 className="object-cover"
               />
            ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                    No Image Available
                </div>
            )}
           
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
                <p className="text-white text-xl font-bold">{service.title}</p>
                <p className="text-white/80 text-sm">{service.shortDescription}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
