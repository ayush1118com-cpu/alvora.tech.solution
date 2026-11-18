import React from "react";
import Image from "next/image";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#1677E8]/50 hover:-translate-y-1 transition-all duration-300">
      {/* Top placeholder badge */}
      {member.isPlaceholder && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#123B8A] border border-blue-200">
            Profile Role
          </span>
        </div>
      )}

      <div>
        {/* Avatar */}
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-[#F8FAFC] border border-blue-100 mb-5 group-hover:scale-105 group-hover:border-[#1677E8]/40 transition-all shadow-2xs">
          <Image
            src={member.avatarUrl}
            alt={member.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1677E8] block mb-1">
          {member.category}
        </span>
        <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#123B8A] transition-colors">
          {member.name}
        </h3>
        <p className="text-xs font-semibold text-slate-500 mb-3">
          {member.role}
        </p>
        <p className="text-xs text-[#475569] leading-relaxed mb-6 font-normal">
          {member.bio}
        </p>
      </div>

      {/* Footer / LinkedIn */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#0077B5] transition-colors"
          aria-label={`${member.name} LinkedIn Profile`}
        >
          <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
          <span>LinkedIn Network</span>
        </a>
      </div>
    </div>
  );
};
