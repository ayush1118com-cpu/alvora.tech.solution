import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-white"
    >
      {/* Background Real Photography with High Clarity */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Real High-Clarity Enterprise Network Image */}
        <Image
          src="/images/hero-bg-real.webp"
          alt="Alvora Global Digital Infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85 scale-100 transition-transform duration-1000 ease-out"
        />

        {/* Clean, Light Minimal Tint (No foggy heavy white wash) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.45) 45%, rgba(255, 255, 255, 0.85) 100%)",
          }}
        />

        {/* Dynamic Animated Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-[#1677E8]/10 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-[#38A5FF]/10 blur-3xl animate-float-reverse pointer-events-none" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Top Centered Pill Badge with Live Pulse */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#1677E8]/35 shadow-xs text-xs font-bold text-[#123B8A] mb-8 hover:border-[#1677E8]/60 hover:shadow-md transition-all duration-300 group cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677E8] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1677E8]" />
          </span>
          <span>Technology • Innovation • Digital Growth</span>
          <span className="text-slate-300">|</span>
          <span className="text-[#1677E8] font-mono text-[11px] flex items-center gap-1">
            <Sparkles className="w-3 h-3 group-hover:rotate-12 transition-transform" />
            ISO-Ready Engineering
          </span>
        </div>

        {/* Main Headline (Centered, High Clarity with Gradient Animation) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight text-[#0F172A] leading-[1.12] max-w-4xl mx-auto drop-shadow-2xs">
          Transforming Ideas Into{" "}
          <span className="text-gradient-animate">
            Powerful Digital Solutions.
          </span>
        </h1>

        {/* Main Description (Centered, High Contrast) */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed max-w-3xl mx-auto font-medium">
          From innovative websites and mobile applications to intelligent SaaS platforms and business automation, we help businesses build, scale, and succeed in the digital world.
        </p>

        {/* Centered Action CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="#contact"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            className="w-full sm:w-auto px-8 py-4 text-base shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Start Your Project
          </Button>
          <Button
            href="#services"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 py-4 text-base bg-white/95 backdrop-blur-md hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] border-slate-300 shadow-xs transition-all"
          >
            Explore Our Services
          </Button>
        </div>

        {/* Feature Badges Strip (Centered with subtle hover highlight) */}
        <div className="mt-12 pt-8 border-t border-slate-300/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-slate-900">
          <div className="flex items-center gap-2 hover:text-[#1677E8] transition-colors">
            <CheckCircle2 className="w-4 h-4 text-[#1677E8] shrink-0" />
            <span>Scalable Cloud Stacks</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#1677E8] transition-colors">
            <Zap className="w-4 h-4 text-[#1677E8] shrink-0" />
            <span>Sub-Second TTFB Latency</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#1677E8] transition-colors">
            <ShieldCheck className="w-4 h-4 text-[#1677E8] shrink-0" />
            <span>Enterprise Code Quality</span>
          </div>
          <div className="flex items-center gap-2 hover:text-[#1677E8] transition-colors">
            <Globe2 className="w-4 h-4 text-[#1677E8] shrink-0" />
            <span>Edge Distribution</span>
          </div>
        </div>

        {/* Floating Metrics Highlights Card with Smooth Lift & Glow */}
        <div className="mt-10 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#1677E8]/30 transition-all duration-300">
          <div className="p-2.5 text-center border-r border-slate-100 last:border-r-0 hover:bg-blue-50/40 rounded-xl transition-colors">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Core Web Vitals
            </span>
            <span className="text-xl font-extrabold text-[#0F172A] mt-0.5 block">
              100/100
            </span>
            <span className="text-[10px] text-emerald-600 font-bold">Zero CLS Shift</span>
          </div>

          <div className="p-2.5 text-center border-r border-slate-100 last:border-r-0 hover:bg-blue-50/40 rounded-xl transition-colors">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Global SLA
            </span>
            <span className="text-xl font-extrabold text-[#0F172A] mt-0.5 block">
              99.99%
            </span>
            <span className="text-[10px] text-emerald-600 font-bold">High Availability</span>
          </div>

          <div className="p-2.5 text-center border-r border-slate-100 last:border-r-0 hover:bg-blue-50/40 rounded-xl transition-colors">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Stack Architecture
            </span>
            <span className="text-xl font-extrabold text-[#123B8A] mt-0.5 block">
              Next.js 16
            </span>
            <span className="text-[10px] text-[#1677E8] font-bold">React 19 & TypeScript</span>
          </div>

          <div className="p-2.5 text-center hover:bg-blue-50/40 rounded-xl transition-colors">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Security
            </span>
            <span className="text-xl font-extrabold text-[#0F172A] mt-0.5 block">
              SOC-2 Ready
            </span>
            <span className="text-[10px] text-emerald-600 font-bold">Verified Integrity</span>
          </div>
        </div>
      </div>
    </section>
  );
};
