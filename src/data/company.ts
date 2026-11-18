export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  phones: string[];
  email: string;
  address: {
    city: string;
    state: string;
    country: string;
    label: string;
  };
  socialLinks: {
    linkedin: string;
    twitter: string;
    github: string;
    instagram: string;
  };
  workingHours: string;
}

export const companyData: CompanyInfo = {
  name: "Alvora Tech Solution",
  legalName: "Alvora Tech Solution Pvt. Ltd.",
  tagline: "Technology. Innovation. Digital Growth.",
  shortDescription:
    "Helping businesses transform ideas into powerful digital products through modern web development, mobile applications, scalable SaaS solutions, automation, and performance marketing.",
  fullDescription:
    "Alvora Tech Solution is a technology-driven company focused on building modern digital experiences and scalable software solutions. We combine technology, creativity, and strategic thinking to help businesses solve real-world problems.",
  phones: ["+91 83859 73582", "+91 78190 26008"],
  email: "alvora.tech.solution@gmail.com",
  address: {
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    label: "India & Global Operations",
  },
  socialLinks: {
    linkedin: "https://linkedin.com/company/alvora-tech-solution",
    twitter: "https://twitter.com/alvoratech",
    github: "https://github.com/alvora-tech-solution",
    instagram: "https://instagram.com/alvoratechsolution",
  },
  workingHours: "Monday – Saturday: 9:30 AM – 7:00 PM IST",
};
