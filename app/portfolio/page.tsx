"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolioData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-36">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <div className="container mx-auto px-4 relative z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-6">
            Our Portfolio
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg md:text-xl">
            Explore our latest work and see how we solve complex problems with innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link href={`/portfolio/${item.id}`}>
                        <Button variant="secondary" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            View Case Study
                        </Button>
                      </Link>
                  </div>
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
                      Read More
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
      </div>
    </div>
  );
}
