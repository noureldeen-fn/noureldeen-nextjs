'use client';

import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

interface FooterProps {
  dict: {
    footer: {
      rights: string;
      builtWith: string;
      backToTop: string;
    };
  };
}

export function Footer({ dict }: FooterProps) {
  const { footer } = dict;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-surface-card-border bg-bg-alt/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-cta flex items-center justify-center text-white">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-bold text-sm text-text-primary tracking-wider">
                NOURELDEEN<span className="text-brand-cta">.</span>
              </span>
              <p className="text-xs text-text-muted mt-0.5">
                © {new Date().getFullYear()} {footer.rights}
              </p>
            </div>
          </div>

          {/* Built With Information */}
          <p className="text-xs text-text-muted text-center max-w-md">
            {footer.builtWith}
          </p>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-surface-card-border bg-surface-card hover:bg-surface-hover text-xs font-semibold text-text-primary hover:text-brand-cta transition-colors shadow-sm"
          >
            <span>{footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-cta" />
          </button>

        </div>
      </div>
    </footer>
  );
}
