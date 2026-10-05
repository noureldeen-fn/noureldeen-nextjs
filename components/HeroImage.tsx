"use client";

import React from "react";
import Image from "next/image";

export const HeroImage = () => {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[2/3] flex items-end justify-center select-none pointer-events-none">
      {/* 1. Pure Ambient Glow Behind Silhouette */}
      <div className="absolute inset-0 bg-brand-cta/15 blur-3xl rounded-full -z-10 scale-90" />

      {/* 2. Standalone Photo - Absolutely NO card, NO border, NO tilt/rotation */}
      <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
        <Image
          alt="Noureldeen"
          className="object-cover object-top"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
          src="/my-photo-portfolio.jpg"
        />
      </div>
    </div>
  );
};

export default HeroImage;
