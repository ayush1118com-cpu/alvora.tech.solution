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
} from "lucide-react";

export const HeroDashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"metrics" | "pipeline" | "nodes">("metrics");

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden transition-all duration-300">
      {/* Chrome / Window Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          <span className="ml-2 text-xs font-mono font-medium text-slate-500 hidden sm:inline">
            cloud.alvoratech.io/telemetry
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            99.99% Uptime
          </span>
          <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
            v2.4-prod
          </span>
        </div>
      </div>

      {/* Mockup Navigation Tabs */}
      <div className="flex border-b border-slate-200 bg-white px-4 text-xs font-medium text-slate-600 gap-6">
        <button
          onClick={() => setActiveTab("metrics")}
          className={`py-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeTab === "metrics"
              ? "border-[#1677E8] text-[#123B8A] font-bold"
              : "border-transparent hover:text-slate-900"
          }`}
        >
          <Activity className="w-3.5 h-3.5 text-[#1677E8]" />
          Performance & Analytics
        </button>
        <button
          onClick={() => setActiveTab("pipeline")}
          className={`py-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeTab === "pipeline"
              ? "border-[#1677E8] text-[#123B8A] font-bold"
              : "border-transparent hover:text-slate-900"
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-[#1677E8]" />
          CI/CD Automation
        </button>
        <button
          onClick={() => setActiveTab("nodes")}
          className={`py-2.5 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeTab === "nodes"
              ? "border-[#1677E8] text-[#123B8A] font-bold"
              : "border-transparent hover:text-slate-900"
          }`}
        >
          <Server className="w-3.5 h-3.5 text-[#1677E8]" />
          Multi-Cloud Nodes
        </button>
      </div>

      {/* Main Canvas Area */}
      <div className="p-5 sm:p-6 bg-gradient-to-b from-white to-[#F5F8FC]/50">
        {activeTab === "metrics" && (
          <div className="space-y-4">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-1">
                  <span className="text-[11px] font-medium">Global Requests</span>
                  <Globe2 className="w-3.5 h-3.5 text-[#1677E8]" />
                </div>
                <div className="text-xl font-bold text-[#101828]">1.48M</div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium mt-1">
                  <TrendingUp className="w-3 h-3" /> +28.4% this week
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between text-slate-500 mb-1">
                  <span className="text-[11px] font-medium">Avg API Latency</span>
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <div className="text-xl font-bold text-[#101828]">24ms</div>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium mt-1">
                  <ShieldCheck className="w-3 h-3" /> Edge optimized
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs col-span-2 sm:col-span-1">
                <div className="flex items-center justify-between text-slate-500 mb-1">
                  <span className="text-[11px] font-medium">Conversion Lift</span>
                  <Activity className="w-3.5 h-3.5 text-[#38A5FF]" />
                </div>
                <div className="text-xl font-bold text-[#101828]">+34.8%</div>
                <div className="text-[10px] text-slate-500 mt-1">Lighthouse Score: 100</div>
              </div>
            </div>

            {/* Interactive Graph Simulation */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-xs font-bold text-[#101828]">Real-Time Traffic & Concurrency</h4>
                  <p className="text-[11px] text-slate-500">Live request processing across edge workers</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#1677E8] font-bold">
                  LIVE STREAM
                </span>
              </div>

              {/* SVG Area Chart */}
              <div className="w-full h-28 relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 110" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="heroGraphGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1677E8" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#1677E8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  <line x1="0" y1="25" x2="500" y2="25" stroke="#E2E8F0" strokeDasharray="3 3" />
                  <line x1="0" y1="55" x2="500" y2="55" stroke="#E2E8F0" strokeDasharray="3 3" />
                  <line x1="0" y1="85" x2="500" y2="85" stroke="#E2E8F0" strokeDasharray="3 3" />
                  
                  {/* Curve Path */}
                  <path
                    d="M0,85 Q60,70 120,40 T240,65 T360,20 T440,35 L500,15 L500,105 L0,105 Z"
                    fill="url(#heroGraphGrad)"
                  />
                  <path
                    d="M0,85 Q60,70 120,40 T240,65 T360,20 T440,35 L500,15"
                    fill="none"
                    stroke="#1677E8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Highlight dots */}
                  <circle cx="360" cy="20" r="4" fill="#38A5FF" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="500" cy="15" r="4" fill="#123B8A" stroke="#FFFFFF" strokeWidth="2" />
                </svg>
              </div>

              {/* Timeline labels */}
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2 pt-2 border-t border-slate-100">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
                <span className="text-[#1677E8] font-bold">Now</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "pipeline" && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-slate-800">Production Build & Deployment</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Ready in 42s
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#1677E8] h-full w-full rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 text-[11px] block">Test Coverage</span>
                <span className="font-bold text-slate-800 text-sm">98.4% Passed</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span className="text-slate-500 text-[11px] block">Bundle Size</span>
                <span className="font-bold text-slate-800 text-sm">48.2 KB (Gzipped)</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "nodes" && (
          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-semibold text-slate-800">ap-south-1 (Mumbai Hub)</span>
              </div>
              <span className="font-mono text-[11px] text-slate-500">12ms • 100% Healthy</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-slate-800">us-east-1 (N. Virginia)</span>
              </div>
              <span className="font-mono text-[11px] text-slate-500">78ms • 100% Healthy</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-semibold text-slate-800">eu-central-1 (Frankfurt)</span>
              </div>
              <span className="font-mono text-[11px] text-slate-500">84ms • 100% Healthy</span>
            </div>
          </div>
        )}
      </div>

      {/* Floating Trust Pill */}
      <div className="px-5 py-3 bg-[#F8FAFC] border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-[#1677E8]" />
          <span>Next.js Architecture</span>
          <span className="text-slate-300">•</span>
          <span>TypeScript Verified</span>
        </div>
        <span className="font-semibold text-[#123B8A]">Enterprise Ready</span>
      </div>
    </div>
  );
};
