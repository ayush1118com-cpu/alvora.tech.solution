import React from "react";
import { teamData } from "@/data/team";
import { TeamCard } from "@/components/ui/TeamCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Info } from "lucide-react";

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

        {/* Notice explaining static placeholder architecture */}
        <div className="mt-8 max-w-2xl mx-auto p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/60 flex items-center gap-3 text-xs text-[#123B8A]">
          <Info className="w-4 h-4 text-[#1677E8] shrink-0" />
          <p>
            Static team profiles are maintained in an editable data model (<code>src/data/team.ts</code>) ready for individual photos and bios as the team expands.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};
