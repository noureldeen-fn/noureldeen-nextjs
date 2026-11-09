'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

const Antigravity = dynamic(() => import('@/components/Antigravity'), { ssr: false });
const Particles = dynamic(() => import('@/components/Particles'), { ssr: false });

export const HeroAnimation = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isSmallScreen = window.innerWidth < 1024;
      const isTouch = window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 1024;
      return isSmallScreen || isTouch;
    };

    setIsMobile(checkIsMobile());
    setMounted(true);

    const onResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  if (!mounted || isMobile) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="hidden lg:block absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-auto">
      {isDark ? (
        <Antigravity
          key="dark-canvas-active"
          colors={["#f63f3c", "#f40f0b", "#c30c09"]}
          count={1500}
          magnetRadius={9}
          ringRadius={7}
          particleSize={0.9}
          autoAnimate
          colorMode="conic"
          colorSpeed={0.05}
          particleShape="capsule"
          particleVariance={1}
          fieldStrength={10}
          waveAmplitude={1}
          waveCount={3}
          waveSpeed={0.4}
          rotationSpeed={1.2}
          pulseSpeed={3}
          depthFactor={1}
          ambient={0.23}
          lerpSpeed={0.05}
          interactive
          clickBurst
          intro={false}
          lightMode={false}
          className="w-full h-full"
        />
      ) : (
        <Particles
          key="light-canvas-active"
          particleCount={1000}
          particleSpread={15}
          speed={0.25}
          particleColors={['#C30C09', '#610605', '#220202']}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default HeroAnimation;
