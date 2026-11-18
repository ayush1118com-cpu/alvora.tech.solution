import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { PortfolioProject } from "@/data/portfolio";

interface ProjectCardProps {
  project: PortfolioProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1677E8]/40 transition-all duration-300">
      {/* Project image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={project.imageUrl}
          alt={project.name}
          width={600}
          height={375}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#123B8A] shadow-sm border border-slate-100">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#101828] group-hover:text-[#1677E8] transition-colors mb-2">
            {project.name}
          </h3>
          <p className="text-sm text-[#667085] leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Technology badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#F5F8FC] text-slate-700 border border-slate-200/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={project.projectUrl || "#contact"}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123B8A] group-hover:text-[#1677E8] transition-colors"
          >
            <span>Learn More Details</span>
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
