'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  labelDark?: string;
  labelLight?: string;
  className?: string;
}

export function ThemeToggle({
  labelDark = 'Dark Theme',
  labelLight = 'Light Theme',
  className = '',
}: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-10 h-10 rounded-xl border border-surface-card-border bg-surface-card flex items-center justify-center text-text-muted ${className}`}
        aria-hidden="true"
      >
        <span className="w-4 h-4 rounded-full bg-surface-card-border animate-pulse" />
      </div>
    );
  }

  const isDark = (resolvedTheme || theme) === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative group flex items-center justify-center w-10 h-10 rounded-xl border border-surface-card-border bg-surface-card hover:bg-surface-hover transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta text-text-primary hover:text-brand-cta shadow-sm ${className}`}
      aria-label={isDark ? labelLight : labelDark}
      title={isDark ? labelLight : labelDark}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-5 h-5 transition-all duration-500 transform ${
            isDark
              ? 'scale-0 -rotate-90 opacity-0 absolute'
              : 'scale-100 rotate-0 opacity-100 text-brand-cta'
          }`}
        />
        <Moon
          className={`w-5 h-5 transition-all duration-500 transform ${
            isDark
              ? 'scale-100 rotate-0 opacity-100 text-brand-cta'
              : 'scale-0 rotate-90 opacity-0 absolute'
          }`}
        />
      </div>
      {/* Subtle Glow on Hover */}
      <span className="absolute inset-0 rounded-xl bg-brand-cta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </button>
  );
}
