'use client';

import React from 'react';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

interface ExperienceSectionProps {
  dict: {
    experience: {
      badge: string;
      title: string;
      timeline: Array<{
        role: string;
        company: string;
        period: string;
        description: string;
        tags: string[];
      }>;
    };
  };
}

export function ExperienceSection({ dict }: ExperienceSectionProps) {
  const { experience } = dict;

  return (
    <section id="experience" className="py-20 lg:py-28 bg-bg-alt/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-card-border bg-surface-card text-xs font-semibold text-brand-cta uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-text-primary tracking-tight leading-tight">
            {experience.title}
          </h2>
        </div>

        {/* Timeline using Strict Logical Properties (border-s, ms-, ps-) */}
        <div className="relative border-s-2 border-surface-card-border ms-4 sm:ms-8 ps-6 sm:ps-10 space-y-12">
          {experience.timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Dot positioned with start- / -translate-x */}
              <div className="absolute -start-[31px] sm:-start-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-brand-cta bg-bg-main group-hover:bg-brand-cta group-hover:scale-125 transition-all duration-300 shadow-sm" />

              {/* Card Body */}
              <div className="p-6 sm:p-8 rounded-2xl border border-surface-card-border bg-surface-card hover:bg-surface-hover transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-cta uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted">
                    <Building2 className="w-3.5 h-3.5 text-brand-cta" />
                    <span>{item.company}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-text-primary mb-3">
                  {item.role}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface-card-border/40 text-text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
