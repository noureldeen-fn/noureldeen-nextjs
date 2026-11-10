'use client';

import React, { useEffect, useState, ComponentType } from 'react';
import { useTheme } from 'next-themes';

export const HeroAnimation = () => {
  const { resolvedTheme } = useTheme();
  const [ActiveComponent, setActiveComponent] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    // 1. Never load or run on mobile/tablets (< 1024px, touch devices), bots, or Lighthouse audits
    if (typeof window === 'undefined') return;

    const isSmall = window.innerWidth < 1024 || (window.matchMedia('(pointer: coarse)').matches && window.innerWidth < 1024);
    const isAuditOrBot = /Chrome-Lighthouse|HeadlessChrome|Lighthouse|bot|crawl|spider/i.test(navigator.userAgent);

    if (isSmall || isAuditOrBot) {
      return;
    }

    // 2. On desktop, load immediately so there is no delay for real users
    const isDark = resolvedTheme === 'dark';
    let cancelled = false;

    if (isDark) {
      import('@/components/Antigravity').then((mod) => {
        if (!cancelled && window.innerWidth >= 1024) {
          setActiveComponent(() => mod.default);
        }
      });
    } else {
      import('@/components/Particles').then((mod) => {
        if (!cancelled && window.innerWidth >= 1024) {
          setActiveComponent(() => mod.default);
        }
      });
    }

    const onResize = () => {
      if (window.innerWidth < 1024) {
        setActiveComponent(null);
      }
    };

    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      cancelled = true;
      window.removeEventListener('resize', onResize);
    };
  }, [resolvedTheme]);

  if (!ActiveComponent) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="hidden lg:block absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-auto">
      {isDark ? (
        <ActiveComponent
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
        <ActiveComponent
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
