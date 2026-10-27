"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Terminal } from "lucide-react";

interface ProjectsSectionProps {
  dict: any;
  lang?: string;
}

export const ProjectsSection = ({ dict, lang = "en" }: ProjectsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean>(false);

  const isRTL = lang === "ar" || dict?.locale?.current === "العربية";
  const rawProjects = dict?.projects?.items || [];

  const filteredProjects =
    activeCategory === "all"
      ? rawProjects
      : rawProjects.filter((p: any) => p.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    setImageError(false);
  };

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  const handlePrev = () => {
    setImageError(false);
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setImageError(false);
    setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  // Live screenshot via Microlink or local fallback
  const isFrontendWithLiveUrl = currentProject?.category === "frontend" && Boolean(currentProject?.liveUrl);
  const dynamicPreviewUrl = isFrontendWithLiveUrl
    ? `https://api.microlink.io/?url=${encodeURIComponent(currentProject.liveUrl)}&screenshot=true&meta=false&embed=screenshot.url`
    : currentProject?.image || "/projects/placeholder.jpg";

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "frontend":
        return isRTL ? "هندسة واجهات المستخدم" : "Frontend Engineering";
      case "automation":
        return isRTL ? "أتمتة الاختبارات" : "Automation Architecture";
      case "manualApi":
        return isRTL ? "الاختبار اليدوي وتدقيق الـ API" : "Manual & API Quality Assurance";
      default:
        return category;
    }
  };

  const getBadgeLabel = () => {
    if (isFrontendWithLiveUrl) {
      return dict?.projects?.liveStatus || (isRTL ? "لايف" : "Live");
    }
    if (currentProject?.category === "automation") {
      return isRTL ? "أتمتة الاختبارات" : "Automation Framework";
    }
    return dict?.projects?.qaStatus || (isRTL ? "هندسة جودة" : "Test Architecture");
  };

  return (
    <section id="projects" className="relative w-full py-16 lg:py-24 bg-[#161616] text-[#FBEBEB] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 -start-32 w-96 h-96 bg-[#220202] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -end-32 w-96 h-96 bg-[#F40F0B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FBEBEB]">
            {dict?.projects?.sectionTitle || dict?.projects?.title || (isRTL ? "المشاريع المميزة" : "Featured Projects")}
          </h2>
          {dict?.projects?.sectionSubtitle && (
            <p className="text-sm sm:text-base text-gray-400 font-body mt-3">
              {dict.projects.sectionSubtitle}
            </p>
          )}
        </div>

        {/* 4 Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {[
            { id: "all", label: dict?.projects?.filters?.all || (isRTL ? "الكل" : "All") },
            { id: "frontend", label: dict?.projects?.filters?.frontend || (isRTL ? "الواجهات" : "Frontend") },
            { id: "automation", label: dict?.projects?.filters?.automation || (isRTL ? "أتمتة الاختبارات" : "Test Automation") },
            { id: "manualApi", label: dict?.projects?.filters?.manualApi || (isRTL ? "الاختبار اليدوي و API" : "Manual & API") },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleCategoryChange(tab.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#F40F0B] text-white shadow-lg shadow-[#F40F0B]/40 scale-105"
                    : "bg-[#220202]/70 text-gray-400 border border-white/10 hover:border-[#F40F0B]/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Carousel Showcase Wrapper with External Side Arrows */}
        {currentProject && (
          <div className="relative flex items-center justify-center gap-4 lg:gap-6">
            {/* Left External Arrow */}
            <button
              type="button"
              onClick={isRTL ? handleNext : handlePrev}
              aria-label={isRTL ? "المشروع التالي" : "Previous Project"}
              className="hidden md:flex shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#220202]/80 border border-white/10 items-center justify-center text-white hover:border-[#F40F0B] hover:bg-[#F40F0B] transition-all shadow-xl hover:scale-110 cursor-pointer z-20"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* The Main 2-Column Responsive Card (Zero Vertical Overflow) */}
            <div className="w-full max-w-5xl rounded-3xl bg-[#220202]/60 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Side 1: Media Preview Container */}
                <div className="lg:col-span-6 relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center shadow-inner">
                  {/* Floating Indicator Badge */}
                  <div className="absolute top-3 end-3 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white shadow-lg">
                    {isFrontendWithLiveUrl ? (
                      <>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>{getBadgeLabel()}</span>
                      </>
                    ) : (
                      <>
                        <Terminal className="w-3.5 h-3.5 text-[#F40F0B]" />
                        <span>{getBadgeLabel()}</span>
                      </>
                    )}
                  </div>

                  {/* Image / Fallback */}
                  {!imageError ? (
                    <img
                      key={currentProject.id}
                      src={dynamicPreviewUrl}
                      alt={currentProject.title}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center text-gray-400">
                      <Terminal className="w-10 h-10 text-[#F40F0B] mb-2 opacity-80" />
                      <p className="font-heading text-sm text-gray-300 font-semibold">
                        {currentProject.title}
                      </p>
                      <span className="text-xs text-gray-500 mt-1">
                        {isRTL ? "المعاينة غير متاحة" : "Preview Unavailable"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Side 2: Content Breakdown */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Category Label */}
                    <span className="text-xs font-semibold text-[#F40F0B] uppercase tracking-wider block mb-2">
                      {getCategoryLabel(currentProject.category)}
                    </span>

                    {/* Project Title */}
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#FBEBEB] mb-4">
                      {currentProject.title}
                    </h3>

                    {/* Overview Paragraph */}
                    <p className="text-sm text-gray-300 font-body leading-relaxed mb-6 line-clamp-4 lg:line-clamp-5">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Actions & Tech Stack */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    {/* Live Demo CTA (Only rendered when liveUrl exists) */}
                    {currentProject.liveUrl && (
                      <div>
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F40F0B] text-white text-xs font-semibold hover:brightness-110 shadow-lg shadow-[#F40F0B]/30 transition-all cursor-pointer"
                        >
                          <span>{dict?.projects?.liveDemo || (isRTL ? "معاينة مباشرة" : "Live Demo")}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}

                    {/* Tech Tags */}
                    <div className="flex flex-wrap items-center gap-2">
                      {currentProject.tags?.map((tag: string, tIdx: number) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-[11px] font-mono text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right External Arrow */}
            <button
              type="button"
              onClick={isRTL ? handlePrev : handleNext}
              aria-label={isRTL ? "المشروع السابق" : "Next Project"}
              className="hidden md:flex shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#220202]/80 border border-white/10 items-center justify-center text-white hover:border-[#F40F0B] hover:bg-[#F40F0B] transition-all shadow-xl hover:scale-110 cursor-pointer z-20"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>
        )}

        {/* Mobile Navigation Controls (Visible on small screens) */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={isRTL ? handleNext : handlePrev}
            aria-label="Previous Project"
            className="w-10 h-10 rounded-full bg-[#220202] border border-white/10 flex items-center justify-center text-white hover:border-[#F40F0B] active:bg-[#F40F0B]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={isRTL ? handlePrev : handleNext}
            aria-label="Next Project"
            className="w-10 h-10 rounded-full bg-[#220202] border border-white/10 flex items-center justify-center text-white hover:border-[#F40F0B] active:bg-[#F40F0B]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {filteredProjects.map((_: any, idx: number) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setImageError(false);
                  setCurrentIndex(idx);
                }}
                aria-label={`Jump to project ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? "w-8 h-2.5 bg-[#F40F0B] shadow-md shadow-[#F40F0B]/50"
                    : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
