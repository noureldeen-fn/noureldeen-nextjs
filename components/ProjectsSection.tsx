'use client';

import React from 'react';
import { ExternalLink, Github, Sparkles, TrendingUp, Code2 } from 'lucide-react';

interface ProjectsSectionProps {
  dict: {
    projects: {
      badge: string;
      title: string;
      subtitle: string;
      items: Array<{
        id: string;
        title: string;
        category: string;
        description: string;
        metrics: string;
        tech: string[];
        link: string;
        github: string;
      }>;
    };
  };
}

export function ProjectsSection({ dict }: ProjectsSectionProps) {
  const { projects } = dict;

  return (
    <section id="projects" className="py-20 lg:py-28 bg-bg-alt/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-card-border bg-surface-card text-xs font-semibold text-brand-cta uppercase tracking-wider mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>{projects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-text-primary tracking-tight leading-tight mb-4">
            {projects.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {projects.subtitle}
          </p>
        </div>

        {/* 2x2 Grid of Featured Architectural Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.items.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between p-8 rounded-2xl border border-surface-card-border bg-surface-card hover:bg-surface-hover transition-all duration-300 hover:shadow-card-dark dark:hover:shadow-card-dark"
            >
              <div>
                {/* Category & Action Links */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-cta">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-surface-card-border bg-surface-card hover:bg-surface-hover text-text-primary hover:text-brand-cta transition-colors"
                      aria-label={`${item.title} Source Code`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-surface-card-border bg-surface-card hover:bg-surface-hover text-text-primary hover:text-brand-cta transition-colors"
                      aria-label={`${item.title} Live Preview`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold font-heading text-text-primary mb-3 group-hover:text-brand-cta transition-colors">
                  {item.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Metrics Callout */}
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-accent-subtle border border-brand-cta/15 text-xs font-medium text-text-primary mb-6">
                  <TrendingUp className="w-4 h-4 text-brand-cta flex-shrink-0" />
                  <span>{item.metrics}</span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-card-border">
                {item.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface-card-border/40 text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
