import { ReactNode } from 'react';

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  subServices: string[];
  image?: string;
}

export const servicesData: ServiceData[] = [
  // 1. Product Design & 3D Modeling
  {
    id: "product-design-modeling",
    title: "Product Design & 3D Modeling",
    shortDescription: "Turning concepts into manufacturing-ready 3D models with precision and creativity.",
    fullDescription: "Our Product Design & 3D Modeling service covers the entire lifecycle of unique product creation. From initial concept sketches to high-fidelity 3D rendering and DFMA (Design for Manufacturing & Assembly) studies, we ensure your product is not only visually stunning but also functional and manufacturable.",
    subServices: [
        "Product Concept Development",
        "Mechanical Product Design",
        "3D Modeling (SolidWorks, AutoCAD, Fusion, CATIA)",
        "Enclosure Design",
        "Wearable & Consumer Product Design",
        "Prototyping Support",
        "Design for Manufacturing (DFM)",
        "Reverse Engineering"
    ],
    image: "/services/Product Design & 3D Modeling.png" 
  },
  // 2. Drafting & CAD Automation
  {
    id: "drafting-cad-automation",
    title: "Drafting & CAD Automation",
    shortDescription: "High-quality 2D drafts and automated CAD workflows for error-free documentation.",
    fullDescription: "We provide comprehensive 2D drafting services that adhere to international standards (GD&T, ANSI, ISO). Additionally, we implement CAD automation scripts to speed up repetitive tasks, ensuring consistency and reducing time-to-market for engineering teams.",
    subServices: [
        "CAD Drafting (2D Drawings)",
        "Shop Floor Drawings",
        "As-Built Documentation",
        "BOM (Bill of Materials) Generation",
        "CAD Customization & Scripting",
        "Legacy Data Conversion (2D to 3D)",
        "Standardization of CAD Libraries"
    ],
    image: "/services/Drafting & CAD Automation.png"
  },
  // 3. FEA & CFD Simulation
  {
    id: "fea-cfd-simulation",
    title: "FEA & CFD Simulation",
    shortDescription: "Advanced engineering analysis to validate and optimize designs before physical testing.",
    fullDescription: "Our Analysis & Simulation services utilize industry-leading software to predict physical behavior. We help you identify potential failures, optimize material usage, and ensure thermal and fluid performance meet stringent requirements.",
    subServices: [
        "Structural Analysis (FEA)",
        "Thermal Analysis",
        "Computational Fluid Dynamics (CFD)",
        "Motion Simulation",
        "Design Optimization",
        "Fatigue & Durability Analysis",
        "Vibration & Modal Analysis",
        "Performance Validation"
    ],
    image: "/services/FEA & CFD Simulation.png"
  },
  // 4. Mechanical Design
  {
    id: "mechanical-design",
    title: "Mechanical Design",
    shortDescription: "Robust mechanical systems and machinery designed for performance and reliability.",
    fullDescription: "We specialize in the design of complex mechanical systems, industrial machinery, and heavy equipment. Our team ensures that every mechanism is engineered for reliability, safety, and operational efficiency.",
    subServices: [
        "Machine Design (Custom & SPM)",
        "Industrial Equipment Design",
        "Hydraulic & Pneumatic Systems",
        "Material Handling System Design",
        "Jigs & Fixtures Design",
        "Conveyor System Design",
        "Piping & Layout Design",
        "HVAC & Utility System Design"
    ],
    image: "/services/Mechanical Design.png"
  },
  // 5. Electrical Design
  {
    id: "electrical-design",
    title: "Electrical Design",
    shortDescription: "Comprehensive electrical planning, from schematics to panel layouts.",
    fullDescription: "Our electrical design services power industrial and commercial projects. We deliver detailed schematics, wiring diagrams, and load calculations to ensure your electrical infrastructure is safe, efficient, and code-compliant.",
    subServices: [
        "Electrical Schematics & Wiring Diagrams",
        "Control Panel & Cabinet Design",
        "Power Distribution System Design",
        "Instrumentation Layout",
        "Load Calculation & Sizing",
        "Cable Tray & Routing Design",
        "Lighting & Earthing Layouts",
        "Automation System Layout"
    ],
    image: "/services/Electrical Design.png"
  },
  // 6. Electronics Design
  {
    id: "electronics-design",
    title: "Electronics Design",
    shortDescription: "Modern PCB and circuit design for connected, smart electronic devices.",
    fullDescription: "We bring electronic concepts to life with professional PCB design and circuit analysis. Whether it's a consumer gadget or an industrial controller, we design for signal integrity, thermal management, and manufacturability.",
    subServices: [
        "Electronics / Embedded Design",
        "IoT Device Hardware Design",
        "PCB Layout & Routing",
        "Circuit Simulation & Analysis",
        "Component Selection & Sourcing",
        "Firmware Integration Support",
        "Electrical/Electronic Product Design",
        "Prototype Testing & Debugging"
    ],
    image: "/services/Electronics Design.png"
  },
  // 7. Custom Engineering Software
  {
    id: "custom-engineering-software",
    title: "Custom Engineering Software",
    shortDescription: "Tailor-made software solutions to solve niche engineering and operational challenges.",
    fullDescription: "Off-the-shelf software doesn't always fit. We build custom software tools that integrate with your engineering workflows, automate calculations, manage data, and visualize complex metrics.",
    subServices: [
        "Dashboard Design (IoT / Analytics / ERP)",
        "Engineering Data Management Tools",
        "Automated Reporting Systems",
        "Workflow Automation Scripts",
        "Internal Resource Management Tools",
        "Inventory & Supply Chain Solutions",
        "Legacy One-off Software Modernization"
    ],
    image: "/services/Custom Engineering Software Development.png"
  },
  // 8. Web & App Development
  {
    id: "web-app-development",
    title: "Web & App Development",
    shortDescription: "Scalable, responsive, and user-centric digital experiences for web and mobile.",
    fullDescription: "Transform your storage and customer engagement with our full-stack web and app development services. We focus on modern frameworks, responsive UI/UX, and scalable backends.",
    subServices: [
        "Full Website Design & Development",
        "Website UI/UX Design",
        "Mobile App Interface Design",
        "App UI/UX Design",
        "E-commerce Platforms",
        "Progressive Web Apps (PWA)",
        "Cross-Platform Mobile Apps (React Native)",
        "API Development & Integration"
    ],
    image: "/services/Website & App Development.png"
  },
  // 9. IoT & Embedded Systems
  {
    id: "iot-embedded-systems",
    title: "IoT & Embedded Systems",
    shortDescription: "Connecting hardware to the cloud for real-time monitoring and smart control.",
    fullDescription: "We bridge the physical and digital worlds. Our IoT services cover everything from firmware development for embedded sensors to cloud architecture for data logging and remote device management.",
    subServices: [
        "IoT Device Design (Firmware & Hardware)",
        "Embedded System Programming",
        "Real-time Monitoring Dashboards",
        "Sensor Integration & Calibration",
        "Wireless Communication Protocols (BLE, WiFi, LoRa)",
        "Edge Computing Solutions",
        "Smart Home & Industrial IoT (IIoT)",
        "Remote Control Systems"
    ],
    image: "/services/IoT & Embedded Systems.png"
  },
  // 10. Software Testing & Deployment
  {
    id: "software-testing-deployment",
    title: "Software Testing & Deployment",
    shortDescription: "Ensuring reliability through rigorous QA and seamless DevOps deployment.",
    fullDescription: "Quality is non-negotiable. Our QA team performs automated and manual testing to catch bugs early, while our DevOps engineers ensure your software is deployed securely and scales effortlessly.",
    subServices: [
        "Automated Test Scripting",
        "Performance & Load Testing",
        "Security Vulnerability Assessment",
        "CI/CD Pipeline Setup",
        "Cloud Infrastructure Management (AWS, Azure)",
        "User Acceptance Testing (UAT)",
        "Mobile App Testing",
        "Server Monitoring & Maintenance"
    ],
    image: "/services/Software Testing & Deployment.png"
  }
];
