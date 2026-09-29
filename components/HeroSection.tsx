'use client';

import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { HeroAnimation } from './HeroAnimation';

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
      className="relative w-full min-h-[85vh] overflow-hidden flex items-center justify-center py-12 lg:py-20"
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
      <div className="relative z-10 container mx-auto px-4 pointer-events-none">
        {/* 12-Column CSS Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-0 items-center w-full">
          
          {/* Column 1: Text Content Block (8 Columns on lg) */}
          <div className="col-span-12 lg:col-span-8 flex flex-col items-start text-start">

            {/* Greeting & Headline */}
            <div className="space-y-2 mb-6 pointer-events-auto select-text">
              <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-brand-cta font-heading">
                {hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.08] font-heading">
                {hero.name} <br />
                <span className="bg-gradient-to-r from-brand-cta via-[#FF4D4A] to-brand-cta-hover bg-clip-text text-transparent">
                  {hero.role}
                </span>
              </h1>
            </div>

            {/* Architectural Tagline */}
            <p className="text-base sm:text-lg lg:text-xl text-text-muted max-w-2xl font-normal leading-relaxed mb-8 pointer-events-auto select-text font-body">
              {hero.tagline}
            </p>

            {/* Primary & Secondary Call to Actions (Interactive) */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pointer-events-auto">
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

          {/* Column 2: Spacer Column (1 Column on lg) */}
          <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />

          {/* Column 3: Profile/Image Box Placeholder (Interactive) */}
          <div className="col-span-12 lg:col-span-3 flex items-center justify-center">
            <div className="pointer-events-auto aspect-[3/4] w-full max-w-[320px] lg:max-w-none rounded-2xl border border-surface-card-border glass-panel relative overflow-hidden flex flex-col items-center justify-center p-6 text-center group hover:border-brand-cta/40 transition-all duration-500 shadow-card-dark cursor-pointer">
              {/* Ambient inner glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-cta/10 via-transparent to-brand-cta/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Elegant Avatar Frame Placeholder */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-brand-cta/30 bg-surface-card flex items-center justify-center mb-4 group-hover:scale-105 group-hover:border-brand-cta transition-all duration-300 shadow-glow">
                <Sparkles className="w-10 h-10 text-brand-cta animate-pulse" />
              </div>

              <div className="relative z-10 space-y-1">
                <h3 className="font-heading font-bold text-base text-text-primary">
                  {hero.name}
                </h3>
                <p className="text-xs text-text-muted font-mono">
                  {hero.role}
                </p>
              </div>

              {/* Status Indicator */}
              <div className="relative z-10 mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-500 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>{lang === 'ar' ? 'معماري متفرغ' : 'Available for Work'}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
