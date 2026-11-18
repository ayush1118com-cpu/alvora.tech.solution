export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "Leadership" | "Engineering" | "Design" | "Marketing";
  bio: string;
  avatarUrl: string;
  avatarFallback: string;
  linkedinUrl: string;
  isPlaceholder?: boolean;
}

export const teamData: TeamMember[] = [
  {
    id: "founder-leadership",
    name: "Founder & Managing Director",
    role: "Leadership & Strategy",
    category: "Leadership",
    bio: "Guiding the technology vision, executive direction, and client partnerships across Alvora Tech Solution and its subsidiaries.",
    avatarUrl: "/images/team/placeholder-leadership.svg",
    avatarFallback: "AL",
    linkedinUrl: "https://www.linkedin.com/company/alvora-tech-solution",
    isPlaceholder: true,
  },
  {
    id: "technical-lead",
    name: "Technical Lead & Solutions Architect",
    role: "Software Architecture & Cloud",
    category: "Engineering",
    bio: "Directing engineering roadmaps, scalable cloud infrastructure, code quality standards, and system security practices.",
    avatarUrl: "/images/team/placeholder-techlead.svg",
    avatarFallback: "TL",
    linkedinUrl: "https://www.linkedin.com/company/alvora-tech-solution",
    isPlaceholder: true,
  },
  {
    id: "full-stack-developer",
    name: "Senior Full Stack Engineer",
    role: "Web & SaaS Development",
    category: "Engineering",
    bio: "Specializing in React, Next.js, TypeScript, RESTful/GraphQL APIs, and resilient full-stack application development.",
    avatarUrl: "/images/team/placeholder-fullstack.svg",
    avatarFallback: "FS",
    linkedinUrl: "https://www.linkedin.com/company/alvora-tech-solution",
    isPlaceholder: true,
  },
  {
    id: "ui-ux-designer",
    name: "Lead UI/UX Designer",
    role: "Product Design & Brand Systems",
    category: "Design",
    bio: "Crafting modern, accessible, and intuitive user interfaces backed by research-driven design systems and interaction patterns.",
    avatarUrl: "/images/team/placeholder-uiux.svg",
    avatarFallback: "UX",
    linkedinUrl: "https://www.linkedin.com/company/alvora-tech-solution",
    isPlaceholder: true,
  },
  {
    id: "digital-marketing-specialist",
    name: "Digital Marketing Specialist",
    role: "Growth & Brand Strategy — Artful Creation",
    category: "Marketing",
    bio: "Managing multi-channel performance marketing, SEO, Meta & Google ad campaigns, and brand creative narratives.",
    avatarUrl: "/images/team/placeholder-marketing.svg",
    avatarFallback: "DM",
    linkedinUrl: "https://www.linkedin.com/company/alvora-tech-solution",
    isPlaceholder: true,
  },
];
