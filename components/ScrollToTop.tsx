"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const visible = (window.scrollY || 0) > 300;
          setIsVisible((prev) => (prev !== visible ? visible : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{ backgroundColor: "#D70C09" }}
      className={`fixed bottom-6 end-6 z-50 flex items-center justify-center w-12 h-12 rounded-full text-white shadow-xl shadow-[#D70C09]/40 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 text-white stroke-[2.5]"/>
    </button>
  );
};

export default ScrollToTop;
