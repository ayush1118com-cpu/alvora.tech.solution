import React from "react";
import {
  Monitor,
  Tv,
  BookOpen,
  ClipboardList,
  Receipt,
  CreditCard,
  BarChart3,
  Building2,
  Sparkles,
} from "lucide-react";
import { productsData } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RestaurantPosMockup } from "@/components/ui/RestaurantPosMockup";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-5 h-5 text-[#1677E8]" />,
  Tv: <Tv className="w-5 h-5 text-[#1677E8]" />,
  BookOpen: <BookOpen className="w-5 h-5 text-[#1677E8]" />,
  ClipboardList: <ClipboardList className="w-5 h-5 text-[#1677E8]" />,
  Receipt: <Receipt className="w-5 h-5 text-[#1677E8]" />,
  CreditCard: <CreditCard className="w-5 h-5 text-[#1677E8]" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-[#1677E8]" />,
  Building2: <Building2 className="w-5 h-5 text-[#1677E8]" />,
};

export const Products: React.FC = () => {
  const mainProduct = productsData[0];

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background radial accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#1677E8]/5 blur-3xl animate-float" />
        <div className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-[#38A5FF]/5 blur-3xl animate-float-reverse" />
        <div className="absolute inset-0 bg-dot-matrix opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Product Innovation"
            title="Technology Products Built"
            highlightedText="For Real Businesses."
            description="We engineer dedicated operational platforms that eliminate manual errors, accelerate turnaround times, and provide real-time business visibility."
          />
        </ScrollReveal>

        {/* Product Highlight Box */}
        <div className="mt-14 space-y-12">
          {/* Main Product Header Card with ScrollReveal */}
          <ScrollReveal direction="up" delay={100}>
            <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-100 shadow-sm relative overflow-hidden group hover:border-[#1677E8]/40 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-blue-200/60">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#123B8A] text-white">
                      {mainProduct.category}
                    </span>
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                      {mainProduct.statusBadge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] group-hover:text-[#123B8A] transition-colors">
                    {mainProduct.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                    {mainProduct.tagline}
                  </p>
                </div>

                <div className="shrink-0">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1677E8] hover:bg-[#1264c5] text-white font-bold text-sm shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer btn-shine-effect"
                  >
                    <Sparkles className="w-4 h-4 animate-spin-slow" />
                    <span>Request Pilot Demo</span>
                  </Link>
                </div>
              </div>

              {/* Core Area Badges */}
              <div className="pt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
                  Core Modules:
                </span>
                {mainProduct.coreAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-white text-[#123B8A] border border-blue-200/80 shadow-2xs hover:border-[#1677E8] hover:scale-105 transition-all cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Interactive Software Dashboard Mockup Showcase */}
          <ScrollReveal direction="up" delay={200}>
            <div>
              <div className="text-center mb-8">
                <h4 className="text-lg font-bold text-[#0F172A]">
                  Interactive Software Interface
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Toggle between the Counter POS terminal, Kitchen Display (KDS), and Multi-Outlet admin screens:
                </p>
              </div>

              <RestaurantPosMockup />
            </div>
          </ScrollReveal>

          {/* Features Grid: 8 core areas with Staggered Entrance */}
          <div className="pt-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="mb-10 text-center max-w-2xl mx-auto">
                <h4 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Integrated Features & Kitchen Workflows
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
                  Engineered to bring front-counter order taking and kitchen preparation into one connected system.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainProduct.features.map((feature, idx) => (
                <ScrollReveal
                  key={feature.number}
                  direction="up"
                  delay={(idx % 4) * 100}
                  className="h-full"
                >
                  <div className="h-full p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#1677E8]/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group card-glow-hover">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#F5F8FC] border border-blue-100 flex items-center justify-center group-hover:bg-[#1677E8]/10 group-hover:border-[#1677E8]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          {iconMap[feature.iconName] || (
                            <Monitor className="w-5 h-5 text-[#1677E8]" />
                          )}
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#1677E8] transition-colors">
                          {feature.number}
                        </span>
                      </div>
                      <h5 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#123B8A] transition-colors">
                        {feature.title}
                      </h5>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
