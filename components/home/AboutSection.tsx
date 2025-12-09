"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-white font-heading mb-4">
            About Engiverse
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where Creativity Meets Precision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              ENGIVERSE is a forward-thinking engineering and technology company focused on delivering world-class design and software solutions. We bridge the gap between traditional engineering and modern digital innovation to build a smarter, sustainable future.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Serving Global Clients (USA, Europe, Middle East)",
                "Innovation-Driven Engineering Solutions",
                "Client-Centric Collaboration & Integrity"
              ].map((item, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A8CC]" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/about">
              <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2 px-8 shadow-md shadow-secondary/20">
                Read More <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-full min-h-[400px] w-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl group hidden md:block"
          >
            <Image
              src="/about.png"
              alt="About Engiverse"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
                <p className="text-white text-xl font-bold">Engineering Excellence</p>
                <p className="text-white/80 text-sm">Delivering world-class solutions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
