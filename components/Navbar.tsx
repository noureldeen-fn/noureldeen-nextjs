'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LocaleSwitcher } from './LocaleSwitcher';

interface NavbarProps {
  lang: string;
  dict: {
    nav: {
      home: string;
      about: string;
      projects: string;
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `#home`, label: dict.nav.home },
    { href: `#about`, label: dict.nav.about },
    { href: `#projects`, label: dict.nav.projects },
    { href: `#skills`, label: dict.nav.skills },
    { href: `#experience`, label: dict.nav.experience },
    { href: `#contact`, label: dict.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <Link
            href={`/${lang}`}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cta to-[#610605] flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-wider text-text-primary group-hover:text-brand-cta transition-colors">
                NOURELDEEN<span className="text-brand-cta">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-text-muted font-medium">
                {lang === 'ar' ? 'معماري واجهات' : 'Principal Architect'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-surface-card-border bg-surface-card/60 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-text-primary hover:text-brand-cta hover:bg-surface-hover transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Locale Switcher & Theme Toggle & CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <LocaleSwitcher currentLang={lang} />
            <ThemeToggle labelDark={dict.theme.dark} labelLight={dict.theme.light} />

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-cta hover:bg-brand-cta-hover text-white font-medium text-xs tracking-wide uppercase shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
              className="p-2.5 rounded-xl border border-surface-card-border bg-surface-card text-text-primary hover:text-brand-cta"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[65px] bg-bg-main border-b border-surface-card-border px-6 py-6 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-text-primary hover:bg-surface-hover hover:text-brand-cta border border-transparent hover:border-surface-card-border transition-all"
              >
                {link.label}
              </a>
            ))}
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
