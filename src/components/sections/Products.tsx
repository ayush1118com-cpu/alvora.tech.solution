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
    <section id="products" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Proprietary Technology"
          title="Technology Products Built"
          highlightedText="For Real Businesses."
          description="We engineer purpose-built software platforms that solve acute operational bottlenecks. Explore our flagship restaurant technology suite."
        />

        {/* Product Highlight Box */}
        <div className="mt-14 space-y-12">
          {/* Main Product Header Card */}
          <div className="bg-[#F5F8FC] rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-100 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-blue-200/60">
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#123B8A] text-white">
                    {mainProduct.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300">
                    {mainProduct.statusBadge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101828]">
                  {mainProduct.name}
                </h3>
                <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                  {mainProduct.tagline}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1677E8] hover:bg-[#1264c5] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Pilot Demo</span>
                </Link>
              </div>
            </div>

            {/* Core Area Badges */}
            <div className="pt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
                Core Module Areas:
              </span>
              {mainProduct.coreAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white text-[#123B8A] border border-blue-200/80 shadow-2xs"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Software Dashboard Mockup Showcase */}
          <div>
            <div className="text-center mb-6">
              <h4 className="text-base font-bold text-[#101828]">
                Interactive Software Interface Preview
              </h4>
              <p className="text-xs text-slate-500">
                Explore the dual Counter POS, Kitchen Display Screen (KDS) & Multi-Outlet modules below:
              </p>
            </div>

            <RestaurantPosMockup />
          </div>

          {/* Features Grid: 8 core areas */}
          <div className="pt-8">
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-[#101828]">
                Integrated Features & Operational Workflows
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Every component is designed to eliminate order delays, speed up table turnover, and prevent revenue leakage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainProduct.features.map((feature) => (
                <div
                  key={feature.number}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#1677E8]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F5F8FC] border border-blue-100 flex items-center justify-center">
                        {iconMap[feature.iconName] || (
                          <Monitor className="w-5 h-5 text-[#1677E8]" />
                        )}
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {feature.number}
                      </span>
                    </div>
                    <h5 className="text-base font-bold text-[#101828] mb-2">
                      {feature.title}
                    </h5>
                    <p className="text-xs text-[#667085] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
