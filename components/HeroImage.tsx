"use client";

import React from "react";
import Image from "next/image";

export const HeroImage = () => {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px] aspect-square flex items-end justify-center select-none pointer-events-none">
      {/* Standalone Cutout Photo - Pure image, NO circle, NO background disk, NO border */}
      <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
        <Image
          alt="Noureldeen"
          className="object-contain object-bottom"
          fill
          priority
          sizes="(max-width: 1024px) 288px, (max-width: 1280px) 420px, 460px"
          src="/my-photo-portfolio.png"
        />
      </div>
    </div>
  );
};

export const Hero3DImage = HeroImage;

export default HeroImage;
