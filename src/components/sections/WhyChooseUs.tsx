import React from "react";
import { Sliders, Code2, Server, Headphones, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const reasons = [
  {
    icon: <Sliders className="w-6 h-6 text-[#1677E8]" />,
    title: "Tailored Solutions",
    description:
      "We build software custom-fitted to your specific workflow and industry requirements rather than forcing off-the-shelf templates that restrict your operations.",
    points: [
      "Custom business logic & schema design",
      "Tailored UI matching your exact brand",
      "Flexible workflow integrations",
    ],
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#1677E8]" />,
    title: "Modern Technology",
    description:
      "We utilize stable, high-performance tech stacks including Next.js App Router, TypeScript, React, and cloud-native frameworks engineered for speed and longevity.",
    points: [
      "Zero legacy technical debt",
      "Clean, modular, documented codebases",
      "Lighthouse 100 & Core Web Vitals focus",
    ],
  },
  {
    icon: <Server className="w-6 h-6 text-[#1677E8]" />,
    title: "Scalable Architecture",
    description:
      "Engineered to effortlessly accommodate growing user traffic, multi-branch operations, and database volume without performance degradation.",
    points: [
      "Serverless & static edge distribution",
      "Optimized query & caching layers",
      "Multi-tenant & multi-location readiness",
    ],
  },
  {
    icon: <Headphones className="w-6 h-6 text-[#1677E8]" />,
    title: "Reliable Support",
    description:
      "Our team provides dependable post-launch assistance, continuous system monitoring, security updates, and direct communication channels.",
    points: [
      "Dedicated developer communication",
      "Proactive issue resolution",
      "Clear milestones & transparent delivery",
    ],
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[#1677E8]/5 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#38A5FF]/5 blur-3xl animate-float-reverse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Why Alvora"
            title="Engineering Standards Built On"
            highlightedText="Trust & Reliability."
            description="We take a transparent, engineering-driven approach to every digital product. Here is how our methodology safeguards your investment."
          />
        </ScrollReveal>

        {/* 4 Cards Grid with Staggered Entrance */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={idx * 120}
              className="h-full"
            >
              <div className="h-full bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#1677E8]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group card-glow-hover">
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-[#F5F8FC] border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-[#1677E8]/10 group-hover:border-[#1677E8]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#123B8A] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                    {reason.description}
                  </p>
                </div>

                <ul className="space-y-2.5 border-t border-slate-100 pt-5 text-xs text-slate-600">
                  {reason.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#1677E8] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
