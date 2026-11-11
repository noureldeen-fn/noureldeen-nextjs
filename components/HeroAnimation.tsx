'use client';

import React, { useEffect, useState, ComponentType } from 'react';
import { useTheme } from 'next-themes';

export const HeroAnimation = () => {
  const { resolvedTheme } = useTheme();
  const [ActiveComponent, setActiveComponent] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Strictly verify desktop viewport: >= 1024px and not coarse touch
    const mql = window.matchMedia('(min-width: 1024px)');
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    if (!mql.matches || isTouch) {
      return;
    }

    // 2. On desktop, mount the active theme canvas
    const isDark = resolvedTheme === 'dark';
    let cancelled = false;

    if (isDark) {
      import('@/components/Antigravity').then((mod) => {
        if (!cancelled && window.matchMedia('(min-width: 1024px)').matches) {
          setActiveComponent(() => mod.default);
        }
      });
    } else {
      import('@/components/Particles').then((mod) => {
        if (!cancelled && window.matchMedia('(min-width: 1024px)').matches) {
          setActiveComponent(() => mod.default);
        }
      });
    }

    const onMediaChange = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        setActiveComponent(null);
      }
    };

    mql.addEventListener('change', onMediaChange);
    return () => {
      cancelled = true;
      mql.removeEventListener('change', onMediaChange);
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
          count={450}
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
          particleCount={350}
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
