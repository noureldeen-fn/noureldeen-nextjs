"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <section id="projects" className="relative w-full pt-24 pb-20 lg:pt-28 lg:pb-24 bg-bg-main text-text-primary overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 -start-32 w-96 h-96 rounded-full pointer-events-none [background:radial-gradient(circle,rgba(215,12,9,0.06)_0%,transparent_70%)]" />
      <div className="absolute bottom-10 -end-32 w-96 h-96 rounded-full pointer-events-none [background:radial-gradient(circle,rgba(34,2,2,0.08)_0%,transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-10">
          <h2 className="font-heading rtl:font-arabic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary">
            {dict?.projects?.sectionTitle || dict?.projects?.title || (isRTL ? "المشاريع المميزة" : "Featured Projects")}
          </h2>
          {dict?.projects?.sectionSubtitle && (
            <p className="text-sm sm:text-base text-text-muted font-body rtl:font-arabic mt-3">
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
                    ? "bg-brand-cta text-white shadow-lg shadow-brand-cta/40 scale-105"
                    : "bg-surface-card border border-surface-card-border text-text-muted hover:text-text-primary hover:bg-surface-hover hover:border-brand-cta/50 shadow-sm"
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
              className="hidden md:flex shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-surface-card border border-surface-card-border items-center justify-center text-text-primary hover:border-brand-cta hover:bg-brand-cta hover:text-white transition-all shadow-md hover:shadow-glow cursor-pointer z-20"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* The Main 2-Column Responsive Card (Zero Vertical Overflow) */}
            <div className="w-full max-w-5xl rounded-3xl bg-surface-card border border-surface-card-border p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-card-light dark:hover:shadow-card-dark transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Side 1: Media Preview Container */}
                <div className="lg:col-span-6 relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-surface-card border border-surface-card-border flex items-center justify-center shadow-inner">
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
                        <Terminal className="w-3.5 h-3.5 text-brand-cta" />
                        <span>{getBadgeLabel()}</span>
                      </>
                    )}
                  </div>

                  {/* Image / Fallback */}
                  {!imageError ? (
                    <Image
                      key={currentProject.id}
                      src={dynamicPreviewUrl}
                      alt={currentProject.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover object-top"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center text-text-muted">
                      <Terminal className="w-10 h-10 text-brand-cta mb-2 opacity-80" />
                      <p className="font-heading text-sm text-text-primary font-semibold">
                        {currentProject.title}
                      </p>
                      <span className="text-xs text-text-muted mt-1">
                        {isRTL ? "المعاينة غير متاحة" : "Preview Unavailable"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Side 2: Content Breakdown */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Category Label */}
                    <span className="text-xs font-semibold text-brand-cta uppercase tracking-wider block mb-2">
                      {getCategoryLabel(currentProject.category)}
                    </span>

                    {/* Project Title */}
                    <h3 className="font-heading rtl:font-arabic text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                      {currentProject.title}
                    </h3>

                    {/* Overview Paragraph */}
                    <p className="text-sm text-text-muted font-body rtl:font-arabic leading-relaxed mb-6 line-clamp-4 lg:line-clamp-5">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Actions & Tech Stack */}
                  <div className="space-y-4 pt-4 border-t border-surface-card-border">
                    {/* Live Demo CTA (Only rendered when liveUrl exists) */}
                    {currentProject.liveUrl && (
                      <div>
                        <a
                          href={currentProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cta text-white text-xs font-semibold hover:bg-brand-cta-hover shadow-lg shadow-brand-cta/30 transition-all cursor-pointer"
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
                          className="px-2.5 py-1 rounded-md bg-accent-subtle border border-surface-card-border text-[11px] font-mono text-text-muted"
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
              className="hidden md:flex shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-surface-card border border-surface-card-border items-center justify-center text-text-primary hover:border-brand-cta hover:bg-brand-cta hover:text-white transition-all shadow-md hover:shadow-glow cursor-pointer z-20"
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
            className="w-10 h-10 rounded-full bg-surface-card border border-surface-card-border flex items-center justify-center text-text-primary hover:border-brand-cta hover:text-brand-cta active:bg-brand-cta active:text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={isRTL ? handlePrev : handleNext}
            aria-label="Next Project"
            className="w-10 h-10 rounded-full bg-surface-card border border-surface-card-border flex items-center justify-center text-text-primary hover:border-brand-cta hover:text-brand-cta active:bg-brand-cta active:text-white"
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
                className="w-8 h-8 flex items-center justify-center cursor-pointer -mx-1"
              >
                <span
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? "w-8 h-2.5 bg-brand-cta shadow-md shadow-brand-cta/50"
                      : "w-2.5 h-2.5 bg-surface-card-border hover:bg-brand-cta/50"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
