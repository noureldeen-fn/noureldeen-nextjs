'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Antigravity from '@/components/Antigravity';
import Particles from '@/components/Particles';

export const HeroAnimation = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-bg-main -z-10" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-auto">
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
          intro
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
