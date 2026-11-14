'use client';

import React, { useEffect, useState, ComponentType } from 'react';
import { useTheme } from 'next-themes';

class AnimationErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn('HeroAnimation WebGL caught error:', error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

function HeroCanvas() {
  const { resolvedTheme } = useTheme();
  const [ActiveComponent, setActiveComponent] = useState<ComponentType<any> | null>(null);
  const [activeTheme, setActiveTheme] = useState<'dark' | 'light' | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Strictly verify desktop viewport: >= 1024px and not coarse touch
    const mql = window.matchMedia('(min-width: 1024px)');
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    if (!mql.matches || isTouch) {
      setActiveComponent(null);
      setActiveTheme(null);
      return;
    }

    // 2. On desktop, mount the active theme canvas
    const isDark = resolvedTheme === 'dark';
    let cancelled = false;

    if (isDark) {
      import('@/components/Antigravity')
        .then((mod) => {
          if (!cancelled && window.matchMedia('(min-width: 1024px)').matches) {
            setActiveComponent(() => mod.default);
            setActiveTheme('dark');
          }
        })
        .catch((err) => {
          console.warn('Failed to load Antigravity component:', err);
        });
    } else {
      import('@/components/Particles')
        .then((mod) => {
          if (!cancelled && window.matchMedia('(min-width: 1024px)').matches) {
            setActiveComponent(() => mod.default);
            setActiveTheme('light');
          }
        })
        .catch((err) => {
          console.warn('Failed to load Particles component:', err);
        });
    }

    const onMediaChange = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        setActiveComponent(null);
        setActiveTheme(null);
      }
    };

    mql.addEventListener('change', onMediaChange);
    return () => {
      cancelled = true;
      mql.removeEventListener('change', onMediaChange);
    };
  }, [resolvedTheme]);

  if (!ActiveComponent || !activeTheme) {
    return null;
  }

  return (
    <div className="hidden lg:block absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-auto">
      {activeTheme === 'dark' ? (
        <ActiveComponent
          key="dark-canvas-active"
          colors={['#f63f3c', '#f40f0b', '#c30c09']}
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
          pixelRatio={1}
          className="w-full h-full"
        />
      )}
    </div>
  );
}

export const HeroAnimation = () => {
  return (
    <AnimationErrorBoundary>
      <HeroCanvas />
    </AnimationErrorBoundary>
  );
};

export default HeroAnimation;
