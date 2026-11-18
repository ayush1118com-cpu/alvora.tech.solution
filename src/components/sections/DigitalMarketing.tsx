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
} from "lucide-react";
import { marketingDivisionData } from "@/data/marketing";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
      className="py-20 bg-gradient-to-b from-[#123B8A] via-[#0F3275] to-[#123B8A] text-white relative overflow-hidden"
    >
      {/* Decorative background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#38A5FF]/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#1677E8]/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialized Division"
          title="Artful Creation —"
          highlightedText="Digital Marketing & Growth."
          description={marketingDivisionData.description}
          inverted={true}
        />

        {/* Division Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#38A5FF] font-semibold">
              Alvora Marketing Ecosystem
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Creative Brand Storytelling Backed By Performance Metrics
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-2xl">
              We align design aesthetics with conversion funnels so every marketing campaign generates qualified leads for your technology and business offerings.
            </p>
          </div>

          <Link
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-white text-[#123B8A] hover:bg-blue-50 font-bold text-sm shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Discuss Marketing Strategy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 7 Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {marketingDivisionData.services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/95 rounded-2xl p-6 text-slate-900 border border-white/20 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F5F8FC] border border-blue-100 flex items-center justify-center mb-5">
                  {iconMap[item.iconName] || (
                    <Sparkles className="w-5 h-5 text-[#1677E8]" />
                  )}
                </div>
                <h4 className="text-base font-bold text-[#101828] mb-2.5">
                  {item.title}
                </h4>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-[#1677E8] flex items-center gap-1">
                  <span>Included in Growth Retainers</span>
                </span>
              </div>
            </div>
          ))}

          {/* Bonus Value Card */}
          <div className="bg-gradient-to-br from-[#1677E8] to-[#38A5FF] rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between border border-white/30">
            <div>
              <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-base font-bold text-white mb-2.5">
                Full-Funnel Synergy
              </h4>
              <p className="text-xs text-blue-50 leading-relaxed">
                Connect your website, landing page analytics, and conversion tracking directly with Artful Creation&apos;s ad campaigns for unified reporting.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/20 text-xs font-semibold text-white">
              Complete ROI Transparency
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
