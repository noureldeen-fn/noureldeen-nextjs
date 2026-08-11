'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';

interface LocaleSwitcherProps {
  currentLang: string;
  label?: string;
  className?: string;
}

export function LocaleSwitcher({ currentLang, label = 'Language', className = '' }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isArabic = currentLang === 'ar';
  const targetLocale = isArabic ? 'en' : 'ar';
  const targetLabel = isArabic ? 'English' : 'العربية';

  const handleSwitch = () => {
    // Set cookie for persistence
    document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Calculate new path
    if (!pathname) {
      router.push(`/${targetLocale}`);
      return;
    }

    const segments = pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'ar') {
      segments[1] = targetLocale;
    } else {
      segments.splice(1, 0, targetLocale);
    }
    const newPath = segments.join('/') || `/${targetLocale}`;
    router.push(newPath);
  };

  return (
    <button
      type="button"
      onClick={handleSwitch}
      className={`relative group flex items-center gap-2 px-3.5 py-2 rounded-xl border border-surface-card-border bg-surface-card hover:bg-surface-hover text-text-primary hover:text-brand-cta transition-all duration-300 font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cta shadow-sm ${className}`}
      aria-label={`${label}: ${targetLabel}`}
      title={`${label}: ${targetLabel}`}
    >
      <Globe className="w-4 h-4 text-brand-cta transition-transform duration-500 group-hover:rotate-45" />
      <span className="font-heading tracking-wide uppercase text-xs font-semibold">
        {targetLabel}
      </span>
      <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold rounded bg-brand-cta/15 text-brand-cta ms-1">
        {targetLocale.toUpperCase()}
      </span>
    </button>
  );
}
