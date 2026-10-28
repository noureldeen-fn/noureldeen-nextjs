"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, Award, Calendar, Hash } from "lucide-react";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  specialization: string;
  date: string;
  credentialId: string;
  link: string;
  image?: string;
}

interface CertificatesSectionProps {
  lang?: string;
  dict: any;
}

export const CertificatesSection = ({ lang = "en", dict }: CertificatesSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const isRTL = lang === "ar" || dict?.locale?.current === "العربية";
  const items: CertificateItem[] = dict?.certificates?.items || [];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const currentCert = items[currentIndex] || items[0];

  return (
    <section id="certificates" className="relative w-full py-16 lg:py-24 bg-[#161616] text-[#FBEBEB] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 -start-32 w-96 h-96 bg-[#220202] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -end-32 w-96 h-96 bg-[#F40F0B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Heading (No Subtitle as requested) */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FBEBEB]">
            {dict?.certificates?.title || (isRTL ? "الشهادات والاعتمادات" : "Verified Architectural Certifications")}
          </h2>
        </div>

        {/* Carousel Showcase Wrapper with External Side Arrows */}
        {currentCert && (
          <div className="relative flex items-center justify-center gap-4 lg:gap-6">
            {/* Left External Arrow */}
            <button
              type="button"
              onClick={isRTL ? handleNext : handlePrev}
              aria-label={isRTL ? "الشهادة التالية" : "Previous Certificate"}
              className="hidden md:flex shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#220202]/80 border border-white/10 items-center justify-center text-white hover:border-[#F40F0B] hover:bg-[#F40F0B] transition-all shadow-xl hover:scale-110 cursor-pointer z-20"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* The Main 2-Column Responsive Card (Zero Vertical Overflow) */}
            <div className="w-full max-w-5xl rounded-3xl bg-[#220202]/60 border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Side 1: Certificate Preview Container */}
                <div className="lg:col-span-6 relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/70 border border-white/10 flex flex-col items-center justify-center p-6 shadow-inner group">
                  {/* Floating Specialization Badge */}
                  <div className="absolute top-3 end-3 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white shadow-lg">
                    <Award className="w-3.5 h-3.5 text-[#F40F0B]" />
                    <span>{currentCert.specialization}</span>
                  </div>

                  {/* Cyber Credential Visual Seal */}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="relative mb-3 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-[#F40F0B]/20 blur-xl animate-pulse" />
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#220202] border border-[#F40F0B]/40 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <ShieldCheck className="w-9 h-9 sm:w-11 sm:h-11 text-[#F40F0B]" />
                      </div>
                    </div>

                    <h4 className="font-heading text-base sm:text-lg font-bold text-[#FBEBEB] max-w-xs mb-1 line-clamp-2">
                      {currentCert.title}
                    </h4>

                    <span className="text-xs text-gray-400 font-mono">
                      {currentCert.issuer}
                    </span>

                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>{isRTL ? "اعتماد رسمي موثق" : "Officially Verified Credential"}</span>
                    </div>
                  </div>
                </div>

                {/* Side 2: Certificate Breakdown */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Issuer Label */}
                    <span className="text-xs font-semibold text-[#F40F0B] uppercase tracking-wider block mb-2 font-mono">
                      {currentCert.issuer}
                    </span>

                    {/* Certificate Title */}
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#FBEBEB] mb-4">
                      {currentCert.title}
                    </h3>

                    {/* Meta Details Pills (Date & ID) */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-gray-300">
                        <Calendar className="w-3.5 h-3.5 text-[#F40F0B]" />
                        <span>{currentCert.date}</span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-gray-300">
                        <Hash className="w-3.5 h-3.5 text-[#F40F0B]" />
                        <span>{isRTL ? "المعرف: " : "ID: "}{currentCert.credentialId}</span>
                      </div>
                    </div>

                    {/* Specialization Callout */}
                    <div className="p-4 rounded-2xl bg-black/30 border border-white/10 mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                        {isRTL ? "مجال التخصص والخبرة المعمارية" : "Architectural Mastery & Specialization"}
                      </span>
                      <p className="text-sm font-semibold text-[#FBEBEB]">
                        {currentCert.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Actions & Verification */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={currentCert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F40F0B] text-white text-xs font-semibold hover:brightness-110 shadow-lg shadow-[#F40F0B]/30 transition-all cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>{dict?.certificates?.verify || (isRTL ? "التحقق من الشهادة" : "Verify Credential")}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <span className="text-xs font-mono text-gray-400">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right External Arrow */}
            <button
              type="button"
              onClick={isRTL ? handlePrev : handleNext}
              aria-label={isRTL ? "الشهادة السابقة" : "Next Certificate"}
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
            aria-label="Previous Certificate"
            className="w-10 h-10 rounded-full bg-[#220202] border border-white/10 flex items-center justify-center text-white hover:border-[#F40F0B] active:bg-[#F40F0B]"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono text-gray-400">
            {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={isRTL ? handlePrev : handleNext}
            aria-label="Next Certificate"
            className="w-10 h-10 rounded-full bg-[#220202] border border-white/10 flex items-center justify-center text-white hover:border-[#F40F0B] active:bg-[#F40F0B]"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {items.map((_: any, idx: number) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to certificate ${idx + 1}`}
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

export default CertificatesSection;
