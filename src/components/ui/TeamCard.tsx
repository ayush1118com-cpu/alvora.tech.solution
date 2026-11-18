import React from "react";
import Image from "next/image";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#1677E8]/40 hover:-translate-y-1 transition-all duration-300">
      {/* Top placeholder pill */}
      {member.isPlaceholder && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
            Open Role Profile
          </span>
        </div>
      )}

      <div>
        {/* Avatar */}
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-[#F5F8FC] border border-blue-100 mb-5 group-hover:border-[#1677E8]/40 transition-colors">
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
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1677E8] block mb-1">
          {member.category}
        </span>
        <h3 className="text-lg font-bold text-[#101828] group-hover:text-[#123B8A] transition-colors">
          {member.name}
        </h3>
        <p className="text-xs font-medium text-slate-500 mb-3">
          {member.role}
        </p>
        <p className="text-xs text-[#667085] leading-relaxed mb-5">
          {member.bio}
        </p>
      </div>

      {/* Footer / LinkedIn */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0077B5] transition-colors"
          aria-label={`${member.name} LinkedIn Profile`}
        >
          <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
          <span>LinkedIn Network</span>
        </a>
      </div>
    </div>
  );
};
