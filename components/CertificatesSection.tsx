'use client';

import React from 'react';
import { ExternalLink, ShieldCheck, Image as ImageIcon } from 'lucide-react';

interface CertificatesSectionProps {
  lang: string;
  dict: {
    certificates: {
      badge: string;
      title: string;
      subtitle: string;
      verify: string;
      items: Array<{
        id: string;
        title: string;
        issuer: string;
        specialization: string;
        date: string;
        credentialId: string;
        link: string;
      }>;
    };
  };
}

export function CertificatesSection({ lang, dict }: CertificatesSectionProps) {
  const { certificates } = dict;

  return (
    <section id="certificates" className="relative w-full py-20 lg:py-28 overflow-hidden bg-bg-main">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-text-primary tracking-tight leading-tight mb-4">
            {certificates.title}
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed font-body">
            {certificates.subtitle}
          </p>
        </div>

        {/* Horizontal Snap-Scroll Showcase */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-surface-card-border">
          {certificates.items.map((item) => (
            <div
              key={item.id}
              className="snap-center min-w-[320px] sm:min-w-[420px] md:min-w-[480px] lg:min-w-[540px] flex-shrink-0 relative rounded-2xl border border-surface-card-border glass-panel p-6 flex flex-col justify-between group hover:border-brand-cta/40 transition-all duration-300 shadow-sm hover:shadow-card-light dark:hover:shadow-card-dark"
            >
              {/* Top Row: Title, Issuer & Specialization Badge */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold font-heading text-text-primary group-hover:text-brand-cta transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-muted font-medium mt-1">
                    {item.issuer}
                  </p>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-brand-cta/10 text-brand-cta border border-brand-cta/30 flex-shrink-0">
                  {item.specialization}
                </span>
              </div>

              {/* Image Area Placeholder (Ready for image drop-in) */}
              <div className="w-full aspect-[16/10] my-4 rounded-xl border-2 border-dashed border-surface-card-border bg-black/10 dark:bg-black/30 flex flex-col items-center justify-center text-text-muted text-sm group-hover:border-brand-cta/30 transition-colors relative overflow-hidden">
                <ImageIcon className="w-10 h-10 text-text-muted/40 mb-2 group-hover:scale-110 group-hover:text-brand-cta transition-all duration-300" />
                <span className="font-mono text-xs text-text-muted/70">
                  {lang === 'ar' ? '[ معاينة وثيقة الاعتماد ]' : '[ Certificate Image Drop-In ]'}
                </span>
                <span className="text-[10px] text-text-muted/40 mt-1 font-mono">
                  {lang === 'ar' ? 'معاينة بنسبة 16:10' : '16:10 Aspect Ratio Preview'}
                </span>
              </div>

              {/* Footer Row: Date / Credential ID & Verification Link */}
              <div className="flex items-center justify-between pt-3 border-t border-surface-card-border/60 text-xs">
                <div className="flex flex-col gap-0.5 font-mono text-[11px] text-text-muted">
                  <span>{item.date}</span>
                  <span className="text-text-muted/60">
                    {lang === 'ar' ? 'المعرّف: ' : 'ID: '}{item.credentialId}
                  </span>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-surface-card-border bg-surface-card hover:bg-surface-hover text-text-primary hover:text-brand-cta transition-colors font-medium font-mono text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-cta" />
                  <span>{certificates.verify}</span>
                  <ExternalLink className="w-3 h-3 text-text-muted" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CertificatesSection;
