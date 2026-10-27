"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Terminal } from "lucide-react";

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

  // Determine Image Source
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
      return dict?.projects?.liveStatus || (isRTL ? "موقع لايف" : "Live Site");
    }
    if (currentProject?.category === "automation") {
      return isRTL ? "أتمتة الاختبارات" : "Automation Framework";
    }
    return dict?.projects?.qaStatus || (isRTL ? "هندسة جودة" : "Quality Assurance");
  };

  return (
    <section id="projects" className="relative w-full py-20 lg:py-28 bg-[#161616] text-[#FBEBEB] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 -start-32 w-96 h-96 bg-[#220202] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -end-32 w-96 h-96 bg-[#F40F0B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FBEBEB]">
            {dict?.projects?.sectionTitle || dict?.projects?.title || (isRTL ? "المشاريع المميزة" : "Featured Projects")}
          </h2>
        </div>

        {/* 4 Centered Filter Buttons */}
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
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
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

        {/* Big Showcase Carousel Card */}
        {currentProject && (
          <div className="relative group rounded-3xl bg-[#220202]/50 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300">
            {/* Top Bar: Title + Links + Nav Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-semibold text-[#F40F0B] uppercase tracking-wider block mb-1">
                  {getCategoryLabel(currentProject.category)}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#FBEBEB]">
                  {currentProject.title}
                </h3>
              </div>

              {/* Action Links & Slider Controls */}
              <div className="flex items-center gap-3">
                {currentProject.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#F40F0B] hover:bg-[#F40F0B]/10 transition-colors"
                    aria-label="GitHub Repository"
                    title={dict?.projects?.githubRepo || "Repository"}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-[#F40F0B]/20 border border-[#F40F0B]/40 text-[#F40F0B] hover:bg-[#F40F0B] hover:text-white transition-all shadow-sm"
                    aria-label="Live Demo"
                    title={dict?.projects?.liveDemo || "Live Demo"}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}

                {/* Slider Nav Arrows */}
                <div className="flex items-center gap-2 ms-2 ps-3 border-s border-white/10">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous Project"
                    className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#F40F0B] hover:bg-[#F40F0B]/20 transition-all text-white cursor-pointer"
                  >
                    {isRTL ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                  </button>
                  <span className="text-xs font-mono text-gray-400 px-1 select-none">
                    {String(currentIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next Project"
                    className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#F40F0B] hover:bg-[#F40F0B]/20 transition-all text-white cursor-pointer"
                  >
                    {isRTL ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Media Container (Live Screenshot or Testing Mockup) */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-black/60 border border-white/10 mb-8 flex items-center justify-center shadow-inner">
              {/* Top-Right Status Badge */}
              <div className="absolute top-4 end-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-xs font-medium text-white shadow-lg">
                {isFrontendWithLiveUrl ? (
                  <>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-sans font-medium">{getBadgeLabel()}</span>
                  </>
                ) : (
                  <>
                    <Terminal className="w-3.5 h-3.5 text-[#F40F0B]" />
                    <span className="font-sans font-medium">{getBadgeLabel()}</span>
                  </>
                )}
              </div>

              {/* Render Image / Fallback */}
              {!imageError ? (
                <img
                  key={currentProject.id}
                  src={dynamicPreviewUrl}
                  alt={currentProject.title}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center text-gray-400">
                  <div className="w-14 h-14 rounded-2xl bg-[#220202]/80 border border-[#F40F0B]/30 flex items-center justify-center mb-3">
                    <Terminal className="w-7 h-7 text-[#F40F0B]" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {isRTL ? "المعاينة غير متاحة" : "Preview Unavailable"}
                  </span>
                  <p className="font-heading text-sm sm:text-base text-gray-200 font-semibold max-w-md">
                    {currentProject.title}
                  </p>
                  <span className="text-xs text-gray-500 mt-1 font-mono">
                    {isRTL ? "المستودع البرمجي متاح للمراجعة عبر GitHub" : "Verified Architecture & Source Code Available on GitHub"}
                  </span>
                </div>
              )}
            </div>

            {/* Deep Description */}
            <div className="mb-8">
              <h4 className="font-heading text-xs sm:text-sm uppercase tracking-wider text-[#F40F0B]/90 font-semibold mb-2">
                {isRTL ? "نظرة عامة على الحل والتنفيذ" : "Architectural Overview & Implementation"}
              </h4>
              <p className="text-sm sm:text-base text-gray-300 font-body leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            {/* Tech Stack Pills Footer */}
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/10">
              {currentProject.tags?.map((tag: string, tIdx: number) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-gray-300 hover:border-[#F40F0B]/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
