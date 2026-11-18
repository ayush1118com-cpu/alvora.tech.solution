import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  centered?: boolean;
  inverted?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedText,
  description,
  centered = true,
  inverted = false,
  className = "",
}) => {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 ${
            inverted
              ? "bg-white/15 text-white border border-white/20"
              : "bg-[#1677E8]/10 text-[#1677E8] border border-[#1677E8]/20"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {badge}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          inverted ? "text-white" : "text-[#101828]"
        }`}
      >
        {title}{" "}
        {highlightedText && (
          <span
            className={
              inverted
                ? "text-[#38A5FF] underline decoration-[#38A5FF]/40 decoration-wavy underline-offset-4"
                : "text-transparent bg-clip-text bg-gradient-to-r from-[#123B8A] via-[#1677E8] to-[#38A5FF]"
            }
          >
            {highlightedText}
          </span>
        )}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            inverted ? "text-blue-100" : "text-[#667085]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
