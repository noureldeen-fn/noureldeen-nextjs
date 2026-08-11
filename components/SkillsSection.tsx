'use client';

import React from 'react';
import { Cpu, CheckCircle } from 'lucide-react';

interface SkillsSectionProps {
  dict: {
    skills: {
      badge: string;
      title: string;
      categories: Array<{
        name: string;
        skills: string[];
      }>;
    };
  };
}

export function SkillsSection({ dict }: SkillsSectionProps) {
  const { skills } = dict;

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-card-border bg-surface-card text-xs font-semibold text-brand-cta uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-text-primary tracking-tight leading-tight">
            {skills.title}
          </h2>
        </div>

        {/* 4-Category Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.categories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-surface-card-border bg-surface-card flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold font-heading text-brand-cta mb-4 pb-3 border-b border-surface-card-border">
                  {category.name}
                </h3>
                <ul className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 text-xs sm:text-sm text-text-primary">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-cta flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
