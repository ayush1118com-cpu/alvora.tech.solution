import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { PortfolioProject } from "@/data/portfolio";

interface ProjectCardProps {
  project: PortfolioProject;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "" }) => {
  return (
    <div className={`group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#1677E8]/50 hover:-translate-y-1 transition-all duration-300 ${className}`}>
      {/* Sleek, Flattened Image Banner (Compact Aspect Ratio) */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
        <Image
          src={project.imageUrl}
          alt={project.name}
          width={800}
          height={450}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
          loading="lazy"
        />
        {/* Subtle Dark Gradient at bottom of image for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-md text-[#123B8A] shadow-sm border border-slate-100">
            {project.category}
          </span>
        </div>
      </div>

      {/* Compact / Sleek Content Section */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#1677E8] transition-colors mb-1.5 leading-snug">
            {project.name}
          </h3>
          <p className="text-xs text-[#475569] leading-relaxed mb-3.5 line-clamp-2">
            {project.description}
          </p>

          {/* Compact Technology tags */}
          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F5F8FC] text-slate-700 border border-slate-200/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={project.projectUrl || "#contact"}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123B8A] group-hover:text-[#1677E8] transition-colors"
          >
            <span>View System Details</span>
            {project.projectUrl?.startsWith("http") ? (
              <ExternalLink className="w-3.5 h-3.5" />
            ) : (
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
