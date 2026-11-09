"use client";

import React from "react";
import Image from "next/image";

export const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center select-none pointer-events-none">
      {/* 1. Ambient Glow Behind Circular Photo */}
      <div className="absolute inset-0 bg-brand-cta/20 blur-3xl rounded-full -z-10 scale-110" />

      {/* 2. Circular Photo Container - Matching mobile avatar style with desktop scale */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-[360px] xl:h-[360px] rounded-full shadow-2xl overflow-hidden flex items-center justify-center bg-surface-card">
        <Image
          alt="Noureldeen"
          className="object-cover object-center"
          fill
          priority
          sizes="(max-width: 1024px) 288px, (max-width: 1280px) 320px, 360px"
          src="/my-photo-portfolio.png"
        />
      </div>
    </div>
  );
};

export const Hero3DImage = HeroImage;

export default HeroImage;
