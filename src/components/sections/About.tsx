import React from "react";
import { Lightbulb, Target, Cpu, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-[#1677E8]/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#38A5FF]/5 blur-3xl animate-float-reverse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="About Alvora"
            title="Building Digital Experiences"
            highlightedText="That Drive Growth."
            description="Alvora Tech Solution is a technology-driven company focused on building modern digital experiences and scalable software solutions. We combine technology, creativity, and strategic thinking to help businesses solve real-world problems."
          />
        </ScrollReveal>

        {/* 3 Pillars Grid with Staggered ScrollReveal */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={idx * 150}
              className="h-full"
            >
              <div className="group h-full bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200/80 hover:border-[#1677E8]/50 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-blue-100 flex items-center justify-center shadow-xs mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#1677E8]/40 group-hover:bg-[#1677E8]/5 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#123B8A] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#1677E8]">
                  <Check className="w-4 h-4 text-[#1677E8]" />
                  <span>Engineered for Production Stability</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Banner with Animated Shimmer Accent */}
        <ScrollReveal direction="up" delay={250}>
          <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#123B8A] via-[#1677E8] to-[#0A2660] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
            {/* Ambient decorative glow inside banner */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10 blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />

            <div className="space-y-2 max-w-2xl text-center md:text-left z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-200 flex items-center gap-1.5 justify-center md:justify-start">
                <ShieldCheck className="w-4 h-4 text-[#38A5FF]" />
                End-To-End Development & Consulting
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Accelerate your product roadmap with Alvora.
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed pt-1">
                From enterprise SaaS and restaurant workflows to digital marketing pipelines with Artful Creation, we help you execute with confidence.
              </p>
            </div>
            <Link
              href="#contact"
              className="shrink-0 px-7 py-3.5 rounded-xl bg-white text-[#123B8A] font-bold text-sm hover:bg-blue-50 transition-all shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer z-10 btn-shine-effect"
            >
              <span>Consult Our Solutions Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
