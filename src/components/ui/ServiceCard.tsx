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
    <div className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#1677E8]/40 hover:-translate-y-1 transition-all duration-300">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#F5F8FC] border border-blue-100 flex items-center justify-center group-hover:bg-[#1677E8]/10 group-hover:border-[#1677E8]/30 transition-colors">
            {iconMap[service.iconName] || <Globe className="w-6 h-6 text-[#1677E8]" />}
          </div>
          <span className="font-mono text-xs font-semibold text-slate-400 group-hover:text-[#1677E8] transition-colors">
            {service.number}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-[#101828] group-hover:text-[#123B8A] transition-colors">
            {service.title}
          </h3>
          {service.badge && (
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#1677E8] border border-blue-200">
              {service.badge}
            </span>
          )}
        </div>

        <p className="text-sm text-[#667085] leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Feature bullets */}
        <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
          {service.detailedPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1677E8] mt-0.5 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer CTA link */}
      <div className="pt-2">
        <Link
          href="#contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1677E8] hover:text-[#123B8A] transition-colors group/link"
        >
          <span>Discuss {service.title}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
