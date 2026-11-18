"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    // Estimate active index based on card width + gap
    const cardWidth = (scrollRef.current.firstElementChild as HTMLElement)?.offsetWidth || 380;
    const gap = 24;
    const idx = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(portfolioData.length - 1, Math.max(0, idx)));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = (scrollRef.current.firstElementChild as HTMLElement)?.offsetWidth || 380;
    const gap = 24;
    const scrollAmount = (cardWidth + gap);

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#F8FAFC]/60 border-t border-slate-200/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#1677E8]/5 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-[#38A5FF]/5 blur-3xl animate-float-reverse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header with Slider Navigation Controls */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              badge="Featured Works"
              title="Turning Ideas Into"
              highlightedText="Digital Experiences."
              description="A showcase of platforms, systems, and specialized digital solutions developed by Alvora Tech Solution."
              centered={false}
              className="max-w-2xl"
            />

            {/* Slider Prev / Next Controls with Subtle Pulse */}
            <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
              <span className="text-xs font-semibold text-slate-400 hidden sm:inline mr-2">
                Swipe or scroll to explore
              </span>
              <button
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#123B8A] hover:bg-slate-50 hover:border-[#1677E8] hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#123B8A] hover:bg-slate-50 hover:border-[#1677E8] hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Scrollable Horizontal Cards Track */}
        <ScrollReveal direction="up" delay={150}>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-2 px-1 scroll-smooth select-none cursor-grab active:cursor-grabbing no-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {portfolioData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="w-[275px] sm:w-[320px] md:w-[360px] lg:w-[385px] shrink-0 snap-start"
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom Pagination Dots / Pills with Smooth Transition */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {portfolioData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeIndex === index
                  ? "w-8 h-2.5 bg-[#1677E8] shadow-sm"
                  : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 hover:scale-125"
              }`}
              aria-label={`Go to project slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
