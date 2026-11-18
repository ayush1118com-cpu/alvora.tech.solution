import React from "react";
import { Lightbulb, Target, Cpu, Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";

const pillars = [
  {
    icon: <Lightbulb className="w-6 h-6 text-[#1677E8]" />,
    title: "Innovation First",
    description:
      "We adopt modern tech stacks and modern architectural patterns so your digital products stay competitive, fast, and adaptable.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#1677E8]" />,
    title: "Business-Focused Solutions",
    description:
      "Every line of code and UI screen is engineered around your business goals, user engagement, and measurable return on investment.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#1677E8]" />,
    title: "Scalable Technology",
    description:
      "Engineered from day one for seamless growth, whether scaling from initial product launch to thousands of daily active users.",
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Alvora"
          title="Building Digital Experiences"
          highlightedText="That Drive Growth."
          description="Alvora Tech Solution is a technology-driven company focused on building modern digital experiences and scalable software solutions. We combine technology, creativity, and strategic thinking to help businesses solve real-world problems."
        />

        {/* 3 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group bg-[#F5F8FC] rounded-2xl p-8 border border-slate-200/80 hover:border-[#1677E8]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-white border border-blue-100 flex items-center justify-center shadow-xs mb-6 group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-[#101828] mb-3 group-hover:text-[#123B8A] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#1677E8]">
                <Check className="w-4 h-4 text-[#1677E8]" />
                <span>Engineered for excellence</span>
              </div>
            </div>
          ))}
        </div>

        {/* Value narrative banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#123B8A] to-[#1677E8] p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Ready to modernize your digital infrastructure?
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              From web applications and hospitality systems to full performance marketing with Artful Creation, we are your end-to-end digital partner.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-lg bg-white text-[#123B8A] font-bold text-sm hover:bg-slate-50 transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <span>Consult Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
