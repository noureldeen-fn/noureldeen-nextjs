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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'projects', 'certificates', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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

  const navLinks = [
    { href: `#home`, id: 'home', label: dict.nav.home },
    { href: `#about`, id: 'about', label: dict.nav.about },
    { href: `#projects`, id: 'projects', label: dict.nav.projects },
    { href: `#certificates`, id: 'certificates', label: dict.nav.certificates },
    { href: `#skills`, id: 'skills', label: dict.nav.skills },
    { href: `#experience`, id: 'experience', label: dict.nav.experience },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,box-shadow,padding] duration-200 outline-none ring-0',
        scrolled
          ? 'glass-nav py-3 border-b border-surface-card-border shadow-lg shadow-black/20'
          : 'bg-transparent py-5 border-b border-transparent'
      )}
    >
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
                  onClick={() => setMobileMenuOpen(false)}
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
                onClick={() => setMobileMenuOpen(false)}
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
