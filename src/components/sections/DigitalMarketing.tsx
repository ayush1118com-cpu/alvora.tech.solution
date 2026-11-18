import React from "react";
import {
  Share2,
  Search,
  Target,
  Megaphone,
  Sparkles,
  PenTool,
  FileText,
  ArrowRight,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { marketingDivisionData } from "@/data/marketing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Share2: <Share2 className="w-5 h-5 text-[#1677E8]" />,
  Search: <Search className="w-5 h-5 text-[#1677E8]" />,
  Target: <Target className="w-5 h-5 text-[#1677E8]" />,
  Megaphone: <Megaphone className="w-5 h-5 text-[#1677E8]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#1677E8]" />,
  PenTool: <PenTool className="w-5 h-5 text-[#1677E8]" />,
  FileText: <FileText className="w-5 h-5 text-[#1677E8]" />,
};

export const DigitalMarketing: React.FC = () => {
  return (
    <section
      id="digital-marketing"
      className="py-24 bg-gradient-to-br from-[#0A2255] via-[#123B8A] to-[#0D2E6B] text-white relative overflow-hidden"
    >
      {/* Background Lighting & Grid with Continuous Float */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-10 w-[500px] h-[500px] rounded-full bg-[#38A5FF]/15 blur-[120px] animate-float" />
        <div className="absolute -bottom-40 left-10 w-[500px] h-[500px] rounded-full bg-[#1677E8]/20 blur-[120px] animate-float-reverse" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Specialized Growth Division"
            title="Artful Creation —"
            highlightedText="Digital Marketing & Performance."
            description={marketingDivisionData.description}
            inverted={true}
          />
        </ScrollReveal>

        {/* Division Highlight Banner with ScrollReveal */}
        <ScrollReveal direction="up" delay={150}>
          <div className="mt-14 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 group hover:border-white/40 transition-all duration-300">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-[#38A5FF] text-xs font-bold border border-blue-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38A5FF] animate-pulse" />
                <span>Full-Funnel Client Acquisition</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Data-Driven Growth Meets High-End Visual Design
              </h3>
              <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
                We align conversion-optimized landing pages with targeted Meta, Google Ads, and organic SEO campaigns so every dollar spent generates verified customer inquiries.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Link
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-white text-[#123B8A] hover:bg-blue-50 font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer btn-shine-effect"
              >
                <span>Discuss Campaign Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* 7 Services Grid with Staggered Entrance */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {marketingDivisionData.services.map((item, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={(idx % 4) * 100}
              className="h-full"
            >
              <div className="h-full bg-white rounded-2xl p-6 sm:p-7 text-slate-900 shadow-xl border border-white/80 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group card-glow-hover">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F5F8FC] border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-[#1677E8]/10 group-hover:border-[#1677E8]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {iconMap[item.iconName] || (
                      <Sparkles className="w-5 h-5 text-[#1677E8]" />
                    )}
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A] mb-2.5 group-hover:text-[#123B8A] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#1677E8] flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Growth Retainers</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1677E8] group-hover:translate-x-1.5 transition-all" />
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Unified Value Card */}
          <ScrollReveal direction="up" delay={marketingDivisionData.services.length % 4 * 100} className="h-full">
            <div className="h-full bg-gradient-to-br from-[#1677E8] to-[#38A5FF] rounded-2xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between border border-white/30 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-base font-bold text-white mb-2.5">
                  Measurable ROI Tracking
                </h4>
                <p className="text-xs text-blue-50 leading-relaxed">
                  Clear monthly analytics covering organic impression spikes, cost-per-acquisition (CPA), and qualified lead conversions.
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-white/20 text-xs font-bold text-white flex items-center justify-between">
                <span>End-To-End Growth Partnership</span>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
