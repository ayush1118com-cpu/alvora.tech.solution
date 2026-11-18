"use client";

import React, { useState } from "react";
import {
  Activity,
  CheckCircle2,
  Cpu,
  Globe2,
  Server,
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowUpRight,
} from "lucide-react";

export const HeroDashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"metrics" | "pipeline" | "nodes">("metrics");

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Decorative ambient glow underneath */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#1677E8] to-[#38A5FF] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition duration-1000 -z-10 animate-glow" />

      {/* Floating Pill Top Left */}
      <div className="absolute -top-5 -left-4 sm:-left-6 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg text-xs font-semibold text-slate-800 animate-float">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
        <span>Live Production Engine</span>
        <span className="text-slate-400">•</span>
        <span className="text-[#1677E8] font-mono">100/100 Core Web Vitals</span>
      </div>

      {/* Floating Pill Bottom Right */}
      <div className="absolute -bottom-5 -right-4 sm:-right-6 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg text-xs font-semibold text-slate-800 animate-float-reverse">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>Enterprise Scalability</span>
        <span className="text-[10px] font-mono text-slate-400">AWS & Vercel Edge</span>
      </div>

      {/* Main Console Box */}
      <div className="rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_rgba(18,59,138,0.12)] overflow-hidden">
        {/* Titlebar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 bg-slate-50/90 border-b border-slate-200/80">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-2xs" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-2xs" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-2xs" />
            </div>
            <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />
            <span className="text-xs font-mono font-medium text-slate-600 hidden sm:inline">
              alvora.io/console/overview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              99.99% Guaranteed SLA
            </span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-5 text-xs font-semibold text-slate-500 overflow-x-auto">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab("metrics")}
              className={`py-3 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "metrics"
                  ? "border-[#1677E8] text-[#123B8A] font-bold"
                  : "border-transparent hover:text-slate-900"
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-[#1677E8]" />
              <span>Real-Time Telemetry</span>
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`py-3 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "pipeline"
                  ? "border-[#1677E8] text-[#123B8A] font-bold"
                  : "border-transparent hover:text-slate-900"
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-[#1677E8]" />
              <span>CI/CD Automation</span>
            </button>
            <button
              onClick={() => setActiveTab("nodes")}
              className={`py-3 border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "nodes"
                  ? "border-[#1677E8] text-[#123B8A] font-bold"
                  : "border-transparent hover:text-slate-900"
              }`}
            >
              <Server className="w-3.5 h-3.5 text-[#1677E8]" />
              <span>Edge Cloud Nodes</span>
            </button>
          </div>
        </div>

        {/* Console Screen Canvas */}
        <div className="p-5 sm:p-6 bg-gradient-to-b from-white via-white to-[#F5F8FC]/60">
          {activeTab === "metrics" && (
            <div className="space-y-4">
              {/* 3 Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#1677E8]/40 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Processed Calls
                    </span>
                    <Globe2 className="w-3.5 h-3.5 text-[#1677E8]" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                    2.48M+
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-bold mt-1">
                    <TrendingUp className="w-3 h-3" /> +32.4% MoM
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#1677E8]/40 transition-colors">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Edge Response
                    </span>
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                    18ms
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-bold mt-1">
                    <ShieldCheck className="w-3 h-3" /> Sub-second TTFB
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#1677E8]/40 transition-colors col-span-2 sm:col-span-1">
                  <div className="flex items-center justify-between text-slate-400 mb-1">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Conversion Lift
                    </span>
                    <Activity className="w-3.5 h-3.5 text-[#38A5FF]" />
                  </div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                    +41.6%
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-1">
                    Zero CLS Layout Shifts
                  </div>
                </div>
              </div>

              {/* Real-Time SVG Trajectory Graph */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A]">
                      Live Traffic & Concurrency Throughput
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Synchronized across all global edge workers
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                    REAL-TIME STREAM
                  </span>
                </div>

                {/* SVG Graph */}
                <div className="w-full h-32 relative">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 500 120"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="glowArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1677E8" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#1677E8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="#F1F5F9" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="0" y1="65" x2="500" y2="65" stroke="#F1F5F9" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="0" y1="100" x2="500" y2="100" stroke="#F1F5F9" strokeWidth="1.5" strokeDasharray="4 4" />

                    {/* Gradient fill */}
                    <path
                      d="M0,95 Q50,75 100,50 T220,70 T340,30 T430,45 L500,20 L500,120 L0,120 Z"
                      fill="url(#glowArea)"
                    />
                    {/* Crisp stroke */}
                    <path
                      d="M0,95 Q50,75 100,50 T220,70 T340,30 T430,45 L500,20"
                      fill="none"
                      stroke="#1677E8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Nodes */}
                    <circle cx="340" cy="30" r="4.5" fill="#38A5FF" stroke="#FFFFFF" strokeWidth="2.5" />
                    <circle cx="500" cy="20" r="5" fill="#123B8A" stroke="#FFFFFF" strokeWidth="2.5" />
                  </svg>
                </div>

                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2 pt-2 border-t border-slate-100">
                  <span>00:00</span>
                  <span>06:00</span>
                  <span>12:00</span>
                  <span>18:00</span>
                  <span className="text-[#1677E8] font-bold">Now (Peak)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "pipeline" && (
            <div className="space-y-3.5">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-slate-800">Static Export & Edge Asset Optimization</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Compiled in 1.4s
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#123B8A] via-[#1677E8] to-[#38A5FF] h-full w-full rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">
                    Type Safety
                  </span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                    100% Strict TypeScript
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block">
                    Initial Bundle
                  </span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                    Zero Bloat / Clean JS
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "nodes" && (
            <div className="space-y-2.5 text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-bold text-slate-800">ap-south-1 (Mumbai Hub)</span>
                </div>
                <span className="font-mono text-xs text-slate-500">12ms • Operational</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-bold text-slate-800">us-east-1 (N. Virginia)</span>
                </div>
                <span className="font-mono text-xs text-slate-500">74ms • Operational</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-bold text-slate-800">eu-central-1 (Frankfurt)</span>
                </div>
                <span className="font-mono text-xs text-slate-500">82ms • Operational</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Info Strip */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-medium">
            <Cpu className="w-4 h-4 text-[#1677E8]" />
            <span>Next.js 16 + React 19 Engine</span>
            <span className="text-slate-300">•</span>
            <span>Static First</span>
          </div>
          <span className="font-bold text-[#123B8A] inline-flex items-center gap-1">
            <span>Explore Architecture</span>
            <ArrowUpRight className="w-3 h-3 text-[#1677E8]" />
          </span>
        </div>
      </div>
    </div>
  );
};
