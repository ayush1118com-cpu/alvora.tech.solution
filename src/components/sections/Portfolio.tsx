import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-[#F5F8FC]/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Works"
          title="Turning Ideas Into"
          highlightedText="Digital Experiences."
          description="A showcase of platforms, systems, and specialized digital solutions developed by Alvora Tech Solution."
        />

        {/* Portfolio Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
