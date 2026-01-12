"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolioData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-4">
            Our Work
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            See how we help businesses transform with smart engineering and digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-neutral-800 bg-neutral-900/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-colors flex flex-col group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
                    {item.category}
                  </div>
                  <CardTitle className="text-xl text-neutral-100 group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                   <p className="text-neutral-400 line-clamp-3 text-sm">
                     {item.description}
                   </p>
                </CardContent>
                <CardFooter className="flex justify-between gap-2 pt-0">
                  <Link href={`/portfolio/${item.id}`} className="flex-1">
                    <Button variant="outline" className="w-full border-neutral-700 hover:bg-neutral-800 text-neutral-300">
                      View Case Study
                    </Button>
                  </Link>
                  <Link href={item.link} target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost" className="text-neutral-400 hover:text-white">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <Link href="/portfolio">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
