export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedPoints: string[];
  iconName: string;
  badge?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    shortDescription:
      "Corporate websites, business websites, e-commerce platforms, and high-performance custom web experiences built for conversion.",
    detailedPoints: [
      "Custom Corporate Websites",
      "E-Commerce & Digital Storefronts",
      "High-Performance Landing Pages",
      "Next.js & Modern Static/SSR Stacks",
    ],
    iconName: "Globe",
    badge: "Core Service",
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web Applications",
    shortDescription:
      "Enterprise CRM, ERP systems, intuitive admin dashboards, and custom business management software designed for daily operations.",
    detailedPoints: [
      "Custom Enterprise Portals",
      "Operational Admin Dashboards",
      "Internal Business Tools & ERP",
      "Role-Based Access Management",
    ],
    iconName: "LayoutDashboard",
  },
  {
    id: "mobile-applications",
    number: "03",
    title: "Mobile Applications",
    shortDescription:
      "Native and cross-platform mobile apps for Android and iOS that deliver smooth, responsive user experiences.",
    detailedPoints: [
      "Android & iOS Applications",
      "React Native & Flutter Solutions",
      "Offline-First Architecture",
      "App Store & Play Store Deployment",
    ],
    iconName: "Smartphone",
  },
  {
    id: "ui-ux-design",
    number: "04",
    title: "UI/UX Design",
    shortDescription:
      "User-centric design systems, clickable wireframes, interactive prototypes, and elegant brand experiences that turn visitors into customers.",
    detailedPoints: [
      "Information Architecture",
      "High-Fidelity Wireframes & Prototypes",
      "Scalable Component Design Systems",
      "User Research & Usability Audits",
    ],
    iconName: "Palette",
  },
  {
    id: "saas-development",
    number: "05",
    title: "SaaS Development",
    shortDescription:
      "Multi-tenant architectures, subscription billing models, API-driven backends, and cloud-native software built to scale.",
    detailedPoints: [
      "Multi-Tenant Database Design",
      "Stripe & Razorpay Billing Workflows",
      "Automated Provisioning & Onboarding",
      "Cloud Infrastructure & Microservices",
    ],
    iconName: "Layers",
    badge: "Cloud Scaled",
  },
  {
    id: "automation",
    number: "06",
    title: "Automation",
    shortDescription:
      "Workflow automation and process improvements that eliminate repetitive tasks, connect third-party APIs, and reduce operational costs.",
    detailedPoints: [
      "Custom Workflow Pipelines",
      "API & Webhook Integrations",
      "Automated Notifications & Reports",
      "Data Synchronization Services",
    ],
    iconName: "Cpu",
  },
  {
    id: "maintenance-support",
    number: "07",
    title: "Maintenance & Support",
    shortDescription:
      "Continuous technical maintenance, security patches, bug fixes, performance monitoring, and proactive SLA-backed support.",
    detailedPoints: [
      "24/7 Uptime & Server Monitoring",
      "Security Audits & Patch Management",
      "Lighthouse & Speed Optimizations",
      "Ongoing Codebase Upgrades",
    ],
    iconName: "ShieldCheck",
  },
];
