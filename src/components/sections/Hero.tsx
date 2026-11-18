import React from "react";
import { ArrowRight, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroDashboardMockup } from "@/components/ui/HeroDashboardMockup";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F8FC] via-white to-white"
    >
      {/* Background Subtle Gradient Blobs & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#1677E8]/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-[#38A5FF]/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#123B8A 1px, transparent 1px), radial-gradient(#1677E8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            backgroundPosition: "0 0, 16px 16px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 shadow-xs text-xs font-semibold text-[#123B8A]">
              <span className="w-2 h-2 rounded-full bg-[#1677E8] animate-pulse" />
              <span>Technology • Innovation • Digital Growth</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#101828] leading-[1.15]">
              Transforming Ideas Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#123B8A] via-[#1677E8] to-[#38A5FF]">
                Powerful Digital Solutions.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From innovative websites and mobile applications to intelligent SaaS platforms and business automation, we help businesses build, scale, and succeed in the digital world.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Start Your Project
              </Button>
              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Trust points */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-2 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#1677E8] shrink-0" />
                <span className="text-xs font-medium text-slate-700">Scalable Stacks</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#1677E8] shrink-0" />
                <span className="text-xs font-medium text-slate-700">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1677E8] shrink-0" />
                <span className="text-xs font-medium text-slate-700">Enterprise Code</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Mockup */}
          <div className="lg:col-span-6 w-full">
            <HeroDashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
