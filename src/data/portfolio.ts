export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  isUpcoming?: boolean;
  featured?: boolean;
}

export const portfolioData: PortfolioProject[] = [
  {
    id: "restaurant-pos-kds",
    name: "Restaurant POS & Kitchen Display System",
    category: "Hospitality SaaS & POS",
    description:
      "A complete hospitality platform featuring Counter POS order booking, real-time Kitchen Display System dispatch, dynamic menu management, and integrated billing workflows.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebSocket", "Node.js Architecture"],
    imageUrl: "/images/portfolio/restaurant-pos-real.webp",
    projectUrl: "#products",
    featured: true,
  },
  {
    id: "corporate-digital-solution",
    name: "Corporate Web Experience & Digital Identity",
    category: "Web Development",
    description:
      "Modern high-speed static corporate website built with Next.js App Router, accessible semantic HTML, WCAG 2.2 AA compliance, and server-side lead pipeline.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO Architecture"],
    imageUrl: "/images/portfolio/corporate-web-real.webp",
    projectUrl: "#contact",
    featured: true,
  },
  {
    id: "artful-creation-marketing",
    name: "Artful Creation — Digital Marketing & Growth Suite",
    category: "Digital Marketing & Branding",
    description:
      "Comprehensive digital marketing initiative covering performance marketing campaigns across Meta & Google Ads, search engine optimization (SEO), and cohesive brand design.",
    technologies: ["SEO Optimization", "Meta Ads", "Google Ads", "Brand Identity", "Analytics"],
    imageUrl: "/images/portfolio/digital-marketing-real.webp",
    projectUrl: "#digital-marketing",
    featured: true,
  },
  {
    id: "enterprise-crm-erp",
    name: "Enterprise Workflow & Management System",
    category: "Web Applications & Automation",
    description:
      "Scalable administrative dashboard and workflow automation system built to streamline business process management, track records, and eliminate repetitive tasks.",
    technologies: ["React", "TypeScript", "REST APIs", "Tailwind CSS", "Role-Based Auth Ready"],
    imageUrl: "/images/portfolio/enterprise-app-real.webp",
    projectUrl: "#contact",
  },
];
