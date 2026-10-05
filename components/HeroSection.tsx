'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { HeroAnimation } from './HeroAnimation';
import { HeroImage } from './HeroImage';

interface HeroSectionProps {
  lang: string;
  dict: {
    hero: {
      status: string;
      greeting: string;
      name: string;
      role: string;
      tagline: string;
      ctaPrimary: string;
      ctaSecondary: string;
      stats: Array<{ value: string; label: string }>;
    };
  };
}

export function HeroSection({ lang, dict }: HeroSectionProps) {
  const { hero } = dict;

  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Absolute Background WebGL Layer with pointer-events-auto */}
      <HeroAnimation />

      {/* Decorative Radial Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Relative Content Container with pointer-events-none pass-through */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        {/* 12-Column CSS Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-0 items-center w-full">
          
          {/* Column 1: Text Content Block (Desktop: 8 Cols | Mobile: Full Width) */}
          <div className="col-span-12 lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-start pointer-events-auto select-text">
            
            {/* 1. Greeting */}
            <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-brand-cta font-heading mb-2">
              {hero.greeting}
            </p>

            {/* 2. Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.08] font-heading">
              {hero.name}
            </h1>

            {/* 3. Mobile-Only Avatar (Circular under Name, Hidden on Desktop) */}
            <div className="block lg:hidden my-6 w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-brand-cta/40 shadow-2xl relative overflow-hidden flex items-center justify-center">
              <Image
                src="/my-photo-portfolio.jpg"
                alt={hero.name}
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-cover object-top"
              />
            </div>

            {/* 4. Role Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-cta font-heading mt-2">
              {hero.role}
            </h2>

            {/* 5. Description / Architectural Tagline */}
            <p className="text-base sm:text-lg lg:text-xl text-text-muted max-w-2xl font-normal leading-relaxed mt-4 mb-8 font-body">
              {hero.tagline}
            </p>

            {/* 6. Action Buttons (CTAs) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-cta hover:bg-brand-cta-hover text-white font-semibold text-sm tracking-wide shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta font-heading"
              >
                <span>{hero.ctaPrimary}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-surface-card-border bg-surface-card/80 backdrop-blur-md hover:bg-surface-hover text-text-primary hover:text-brand-cta font-semibold text-sm transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta font-heading"
              >
                <Sparkles className="w-4 h-4 text-brand-cta" />
                <span>{hero.ctaSecondary}</span>
              </a>
            </div>

          </div>

          {/* Column 2: Standalone Static Photo (Desktop: 4 Cols shifted slightly to the left | Mobile: Hidden) */}
          <div className="col-span-12 lg:col-span-4 hidden lg:flex items-center justify-center lg:-translate-x-12 rtl:lg:translate-x-12 pointer-events-auto">
            <HeroImage />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
