'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LocaleSwitcher } from './LocaleSwitcher';
import { cn } from '@/lib/utils';

interface NavbarProps {
  lang: string;
  dict: {
    nav: {
      home: string;
      about: string;
      projects: string;
      certificates: string;
      skills: string;
      experience: string;
      contact: string;
      resume: string;
    };
    theme: {
      toggle: string;
      dark: string;
      light: string;
    };
    locale: {
      current: string;
      switch: string;
    };
  };
}

export function Navbar({ lang, dict }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Pure CSS sticky navbar: zero window.scrollY reads, zero forced reflows.
    // Use IntersectionObserver to determine active section asynchronously without layout reads
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'certificates', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    const observeSections = () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    };

    let idleHandle: number | null = null;
    let timeoutHandle: ReturnType<typeof setTimeout> | null = null;

    if ('requestIdleCallback' in window) {
      idleHandle = (window as any).requestIdleCallback(observeSections, { timeout: 1500 });
    } else {
      timeoutHandle = setTimeout(observeSections, 300);
    }

    return () => {
      if (idleHandle !== null && 'cancelIdleCallback' in window) {
        (window as any).cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle !== null) {
        clearTimeout(timeoutHandle);
      }
      observer.disconnect();
    };
  }, []);

  // Prevent background scroll when mobile menu is open and handle Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Handle initial hash in URL if present
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.substring(1);
      const target = document.getElementById(hashId);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      document.body.style.overflow = '';
    }
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
        setActiveSection(targetId);
      }
    }
  };

  const navLinks = [
    { href: `#home`, id: 'home', label: dict.nav.home },
    { href: `#about`, id: 'about', label: dict.nav.about },
    { href: `#skills`, id: 'skills', label: dict.nav.skills },
    { href: `#projects`, id: 'projects', label: dict.nav.projects },
    { href: `#experience`, id: 'experience', label: dict.nav.experience },
    // { href: `#certificates`, id: 'certificates', label: dict.nav.certificates },
  ];

  return (
    <header className="sticky top-0 inset-x-0 z-50 w-full py-3.5 border-b border-surface-card-border glass-nav shadow-sm outline-none ring-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <Link
            href={`/${lang}`}
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta rounded-lg p-1"
          >
            <span className="font-heading font-bold text-lg tracking-wider text-text-primary group-hover:text-brand-cta transition-colors">
              NOURELDEEN
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-surface-card-border bg-surface-card/60 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'text-brand-cta bg-accent-subtle font-semibold shadow-sm'
                      : 'text-text-primary hover:text-brand-cta hover:bg-surface-hover'
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Locale Switcher & Theme Toggle & Standalone Red CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <LocaleSwitcher currentLang={lang} />
            <ThemeToggle labelDark={dict.theme.dark} labelLight={dict.theme.light} />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-cta hover:bg-brand-cta-hover text-white font-semibold text-xs tracking-wide uppercase shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] font-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta"
            >
              <span>{dict.nav.contact}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle labelDark={dict.theme.dark} labelLight={dict.theme.light} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-surface-card-border bg-surface-card text-text-primary hover:text-brand-cta focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta transition-colors"
              aria-label="Toggle Mobile Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full inset-x-0 bg-bg-main/95 border-b border-surface-card-border px-6 py-6 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'px-4 py-3 rounded-xl text-base font-medium transition-all',
                    isActive
                      ? 'text-brand-cta bg-accent-subtle border border-brand-cta/25 font-semibold'
                      : 'text-text-primary hover:bg-surface-hover hover:text-brand-cta border border-transparent hover:border-surface-card-border'
                  )}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-surface-card-border flex items-center justify-between gap-3">
              <LocaleSwitcher currentLang={lang} className="w-full justify-center" />
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-cta text-white font-medium text-sm shadow-glow"
              >
                <span>{dict.nav.contact}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
