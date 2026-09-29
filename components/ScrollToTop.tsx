"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 end-6 z-50 flex items-center justify-center w-12 h-12 rounded-full overflow-hidden border border-surface-card-border bg-[#161616]/90 shadow-2xl transition-all duration-300 group cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* 1. Inner Vertical Fill Layer (Rises from bottom to top) */}
      <div
        className="absolute bottom-0 inset-x-0 bg-brand-cta transition-[height] duration-150 ease-out pointer-events-none"
        style={{ height: `${scrollProgress}%` }}
      />

      {/* 2. Centered Upward Arrow (Always on top) */}
      <ArrowUp className="relative z-10 w-5 h-5 text-white transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};

export default ScrollToTop;
