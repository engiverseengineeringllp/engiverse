import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
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
  CheckCircle,
  Server,
  Cloud,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering & Software Services | Engiverse",
  description: "Explore our comprehensive range of engineering design and software development services tailored for global businesses.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary dark:text-white font-heading mb-6">
          Our Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We offer a wide spectrum of engineering and software solutions, combining technical expertise with innovative thinking to deliver exceptional results.
        </p>
      </section>

      {/* Engineering Services */}
      <section className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-10 w-1 bg-[#00A8CC] rounded-full" />
          <h2 className="text-3xl font-bold text-primary dark:text-white font-heading">
            Engineering Design Services
          </h2>
        </div>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
          {engineeringServices.map((item, i) => (
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
      </section>

      {/* Software Services */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-10 w-1 bg-[#00A8CC] rounded-full" />
          <h2 className="text-3xl font-bold text-primary dark:text-white font-heading">
            Software Services
          </h2>
        </div>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
          {softwareServices.map((item, i) => (
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
      </section>
    </main>
  );
}

const Skeleton = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl overflow-hidden relative group">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const engineeringServices = [
  {
    title: "Product Design & 3D Modeling",
    description: "From concept to reality. We create detailed 3D models and product designs ready for manufacturing.",
    header: <Skeleton src="/services/Product Design & 3D Modeling.png" alt="Product Design" />,
    icon: <Box className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    href: "/services/product-design-modeling"
  },
  {
    title: "Drafting & CAD Automation",
    description: "High-quality 2D drafts and automated CAD processes to speed up your design workflow.",
    header: <Skeleton src="/services/Drafting & CAD Automation.png" alt="Drafting" />,
    icon: <FileText className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    href: "/services/drafting-cad-automation"
  },
  {
    title: "FEA & CFD Simulation",
    description: "Validate your designs with advanced Finite Element Analysis and Computational Fluid Dynamics.",
    header: <Skeleton src="/services/FEA & CFD Simulation.png" alt="Simulation" />,
    icon: <Wind className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    href: "/services/fea-cfd-simulation"
  },
  {
    title: "Mechanical Design",
    description: "Robust mechanical systems designed for performance, reliability, and manufacturability.",
    header: <Skeleton src="/services/Mechanical Design.png" alt="Mechanical Design" />,
    icon: <Settings className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
    href: "/services/mechanical-design"
  },
  {
    title: "Electrical Design",
    description: "Schematics, wiring diagrams, and panel layouts for industrial and commercial electrical systems.",
    header: <Skeleton src="/services/Electrical Design.png" alt="Electrical Design" />,
    icon: <Zap className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    href: "/services/electrical-design"
  },
  {
    title: "Electronics Design",
    description: "PCB design, circuit analysis, and prototyping for modern electronic devices.",
    header: <Skeleton src="/services/Electronics Design.png" alt="Electronics Design" />,
    icon: <Cpu className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-3",
    href: "/services/electronics-design"
  },
];

const softwareServices = [
  {
    title: "Custom Engineering Software",
    description: "Bespoke software tools developed to solve specific engineering problems and automate tasks.",
    header: <Skeleton src="/services/Custom Engineering Software Development.png" alt="Custom Software" />,
    icon: <Code className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
    href: "/services/custom-engineering-software"
  },
  {
    title: "Web & App Development",
    description: "Scalable and responsive web and mobile applications using the latest tech stacks.",
    header: <Skeleton src="/services/Website & App Development.png" alt="Web Development" />,
    icon: <Globe className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    href: "/services/web-app-development"
  },
  {
    title: "IoT & Embedded Systems",
    description: "End-to-end IoT solutions connecting hardware to the cloud for real-time monitoring and control.",
    header: <Skeleton src="/services/IoT & Embedded Systems.png" alt="IoT" />,
    icon: <Wifi className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
    href: "/services/iot-embedded-systems"
  },
  {
    title: "Software Testing & Deployment",
    description: "Rigorous testing and seamless deployment strategies to ensure software quality and reliability.",
    header: <Skeleton src="/services/Software Testing & Deployment.png" alt="Testing" />,
    icon: <Server className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
    href: "/services/software-testing-deployment"
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description: "Building reliable and scalable cloud solutions with modern DevOps practices and automation.",
    header: <Skeleton src="/services/DevOps & Cloud Infrastructure.png" alt="DevOps" />,
    icon: <Cloud className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
    href: "/services/devops-cloud-infrastructure"
  },
];
