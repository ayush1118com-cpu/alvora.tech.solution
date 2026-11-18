import React from "react";
import { teamData } from "@/data/team";
import { TeamCard } from "@/components/ui/TeamCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Core Talent"
          title="Meet The People"
          highlightedText="Behind Alvora."
          description="A multidisciplinary team of software architects, developers, designers, and growth strategists dedicated to delivering high-impact solutions."
        />

        {/* Team Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
