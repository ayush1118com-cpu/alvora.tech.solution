import React from "react";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#F8FAFC]/70 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-[#1677E8]/5 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#38A5FF]/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <SectionHeading
            badge="Our Core Capabilities"
            title="Enterprise Technology &"
            highlightedText="Digital Solutions."
            description="Comprehensive software development, design, and technical engineering services designed to help businesses build resilient digital products and operate with agility."
          />
        </ScrollReveal>

        {/* 7 Services Grid with Staggered Entrance */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => (
            <ScrollReveal
              key={service.id}
              direction="up"
              delay={(idx % 3) * 120}
              className="h-full"
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
