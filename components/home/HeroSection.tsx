"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Code2, Cpu, Globe, Layers } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f0fdfa] dark:bg-background pt-20 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 hidden dark:block"
        fill="#00A8CC"
      />

      {/* Light Mode Background Gradient */}
      <div className="absolute inset-0 -z-20 h-full w-full dark:hidden bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,168,204,0.15),rgba(255,255,255,0))]"></div>

      {/* Light Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808040_1px,transparent_1px),linear-gradient(to_bottom,#80808040_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-[#00A8CC] mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(0,168,204,0.2)]"
        >
          <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
          Engineering Excellence Redefined
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none text-foreground font-heading mb-6"
        >
          Smart Engineering & <br className="hidden md:block" />
          <span className="text-[#00A8CC]">
            Software Solutions
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg text-muted-foreground md:text-xl mb-10 leading-relaxed"
        >
          We help companies worldwide with CAD design, 3D modeling,
          simulation, and custom software development. Fast, reliable, and
          affordable engineering solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button size="lg" className="h-12 px-8 text-base bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/25 hover:shadow-secondary/40 transition-all duration-300">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 backdrop-blur-sm bg-background/50">
            Our Services
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground mb-20"
        >
            <div className="flex items-center">
                <CheckCircle2 className="mr-2 h-4 w-4 text-secondary" />
                <span>Global Standards</span>
            </div>
            <div className="flex items-center">
                <CheckCircle2 className="mr-2 h-4 w-4 text-secondary" />
                <span>ISO Certified Process</span>
            </div>
            <div className="flex items-center">
                <CheckCircle2 className="mr-2 h-4 w-4 text-secondary" />
                <span>24/7 Support</span>
            </div>
        </motion.div>



      </div>
    </section>
  );
}
