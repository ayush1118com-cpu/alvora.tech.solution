import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import {
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";
import { companyData } from "@/data/company";
import { servicesData } from "@/data/services";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white p-2.5 rounded-xl inline-block">
              <Image
                src="/logo/alvora-logo-nav.png"
                alt="Alvora Tech Solution"
                width={160}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              {companyData.shortDescription}
            </p>
            <div className="text-xs text-blue-300 font-mono">
              {companyData.tagline}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1677E8] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1677E8] transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1677E8] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1677E8] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Solutions & Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    href="#services"
                    className="hover:text-[#38A5FF] transition-colors flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {s.title}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#digital-marketing"
                  className="hover:text-[#38A5FF] transition-colors flex items-center gap-1 text-[#38A5FF] font-medium"
                >
                  <span>Artful Creation (Digital Marketing)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Company (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="#hero" className="hover:text-[#38A5FF] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#38A5FF] transition-colors">
                  About Alvora
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-[#38A5FF] transition-colors">
                  Restaurant POS & KDS
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-[#38A5FF] transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-[#38A5FF] transition-colors">
                  Meet The Team
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-[#38A5FF] transition-colors">
                  Portfolio Works
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#38A5FF] transition-colors">
                  Project Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Operations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider uppercase text-white">
              Contact & Support
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#38A5FF] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${companyData.phones[0].replace(/\s+/g, "")}`}
                    className="block hover:text-white transition-colors"
                  >
                    {companyData.phones[0]}
                  </a>
                  <a
                    href={`tel:${companyData.phones[1].replace(/\s+/g, "")}`}
                    className="block hover:text-white transition-colors text-slate-400"
                  >
                    {companyData.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38A5FF] shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {companyData.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38A5FF] shrink-0 mt-0.5" />
                <span>
                  {companyData.address.city}, {companyData.address.state}, {companyData.address.country}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#38A5FF] shrink-0 mt-0.5" />
                <span>{companyData.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {currentYear} {companyData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Static Export Ready</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Enterprise High-Performance Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
