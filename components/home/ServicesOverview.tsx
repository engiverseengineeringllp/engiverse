"use client";

import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import {
  Box,
  FileText,
  Wind,
  Settings,
  Zap,
  Cpu,
  Code,
  Globe,
  Wifi,
} from "lucide-react";

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-background" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-white font-heading mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive engineering and software solutions tailored to your business needs.
          </p>
        </motion.div>
        
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[24rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
              href={item.href}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const Skeleton = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl overflow-hidden relative">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300" />
  </div>
);

const items = [
  {
    title: "Product Design & 3D Modeling",
    description: "Transforming ideas into tangible 3D models with precision and creativity.",
    header: <Skeleton src="/services/Product Design & 3D Modeling.png" alt="Product Design" />,
    icon: <Box className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    href: "/services/product-design-modeling"
  },
  {
    title: "Drafting & CAD Automation",
    description: "Automating drafting processes to increase efficiency and reduce errors.",
    header: <Skeleton src="/services/Drafting & CAD Automation.png" alt="Drafting" />,
    icon: <FileText className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    href: "/services/drafting-cad-automation"
  },
  {
    title: "FEA & CFD Simulation",
    description: "Advanced simulations to predict physical behavior and optimize performance.",
    header: <Skeleton src="/services/FEA & CFD Simulation.png" alt="Simulation" />,
    icon: <Wind className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    href: "/services/fea-cfd-simulation"
  },
  {
    title: "Mechanical Design",
    description: "Robust mechanical design solutions for complex engineering challenges.",
    header: <Skeleton src="/services/Mechanical Design.png" alt="Mechanical Design" />,
    icon: <Settings className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
    href: "/services/mechanical-design"
  },
  {
    title: "Electrical Design",
    description: "Comprehensive electrical systems design for industrial applications.",
    header: <Skeleton src="/services/Electrical Design.png" alt="Electrical Design" />,
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    href: "/services/electrical-design"
  },
  {
    title: "Electronics Design",
    description: "Cutting-edge electronics design from circuit boards to complete systems.",
    header: <Skeleton src="/services/Electronics Design.png" alt="Electronics Design" />,
    icon: <Cpu className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    href: "/services/electronics-design"
  },
  {
    title: "Custom Engineering Software",
    description: "Tailor-made software solutions to streamline your engineering workflows.",
    header: <Skeleton src="/services/Custom Engineering Software Development.png" alt="Custom Software" />,
    icon: <Code className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
    href: "/services/custom-engineering-software"
  },
  {
    title: "Web & App Development",
    description: "Modern web and mobile applications built with the latest technologies.",
    header: <Skeleton src="/services/Website & App Development.png" alt="Web Development" />,
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    href: "/services/web-app-development"
  },
  {
    title: "IoT & Embedded Systems",
    description: "Connecting devices and systems for smarter operations and data insights.",
    header: <Skeleton src="/services/IoT & Embedded Systems.png" alt="IoT" />,
    icon: <Wifi className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
    href: "/services/iot-embedded-systems"
  },
];
