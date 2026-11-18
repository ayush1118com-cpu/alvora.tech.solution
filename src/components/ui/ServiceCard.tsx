import React from "react";
import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Palette,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { ServiceItem } from "@/data/services";
import Link from "next/link";

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-[#1677E8]" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-[#1677E8]" />,
  Smartphone: <Smartphone className="w-6 h-6 text-[#1677E8]" />,
  Palette: <Palette className="w-6 h-6 text-[#1677E8]" />,
  Layers: <Layers className="w-6 h-6 text-[#1677E8]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#1677E8]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#1677E8]" />,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs card-glow-hover">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-13 h-13 rounded-2xl bg-[#F5F8FC] border border-blue-100/80 flex items-center justify-center group-hover:bg-[#1677E8]/10 group-hover:border-[#1677E8]/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xs">
            {iconMap[service.iconName] || <Globe className="w-6 h-6 text-[#1677E8]" />}
          </div>
          <span className="font-mono text-xs font-bold text-slate-300 group-hover:text-[#1677E8] group-hover:scale-110 transition-all">
            {service.number}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-2.5">
          <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#123B8A] transition-colors">
            {service.title}
          </h3>
          {service.badge && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#1677E8] border border-blue-200">
              {service.badge}
            </span>
          )}
        </div>

        <p className="text-sm text-[#475569] leading-relaxed mb-6 font-normal">
          {service.shortDescription}
        </p>

        {/* Feature bullets */}
        <ul className="space-y-2.5 mb-6 border-t border-slate-100 pt-5">
          {service.detailedPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2.5 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-[#1677E8] mt-0.5 shrink-0" />
              <span className="leading-tight">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer CTA link */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#1677E8] group-hover:text-[#123B8A] transition-colors"
        >
          <span>Inquire About {service.title}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
