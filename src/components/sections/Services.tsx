import React from "react";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#F5F8FC]/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Core Capabilities"
          title="Enterprise Technology &"
          highlightedText="Digital Solutions."
          description="Comprehensive software development, design, and technical engineering services designed to help businesses build resilient digital products and operate with agility."
        />

        {/* 7 Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
