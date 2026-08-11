'use client';

import React from 'react';
import { Layers, Zap, Shield, Cpu, Activity, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  dict: {
    about: {
      badge: string;
      title: string;
      description: string;
      points: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}

export function AboutSection({ dict }: AboutSectionProps) {
  const { about } = dict;

  const icons = [
    <Zap key="0" className="w-6 h-6 text-brand-cta" />,
    <Layers key="1" className="w-6 h-6 text-brand-cta" />,
    <Shield key="2" className="w-6 h-6 text-brand-cta" />,
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-card-border bg-surface-card text-xs font-semibold text-brand-cta uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-text-primary tracking-tight leading-tight mb-6">
            {about.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {about.description}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {about.points.map((point, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-surface-card-border bg-surface-card hover:bg-surface-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-card-dark dark:hover:shadow-card-dark"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-cta/20 transition-all duration-300">
                {icons[index % icons.length]}
              </div>
              <h3 className="text-xl font-bold font-heading text-text-primary mb-3 group-hover:text-brand-cta transition-colors">
                {point.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {point.description}
              </p>
              {/* Subtle Bottom Glow line */}
              <div className="absolute inset-x-8 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand-cta/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
