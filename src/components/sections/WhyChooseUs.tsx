import React from "react";
import { Sliders, Code2, Server, Headphones } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
    <section id="why-us" className="py-20 bg-[#F5F8FC]/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Alvora"
          title="Engineering Standards Built On"
          highlightedText="Trust & Reliability."
          description="We take a transparent, engineering-driven approach to every digital product. Here is how our methodology safeguards your investment."
        />

        {/* 4 Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#1677E8]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F8FC] border border-blue-100 flex items-center justify-center mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-[#101828] mb-3">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6">
                  {reason.description}
                </p>
              </div>

              <ul className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                {reason.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1677E8]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
