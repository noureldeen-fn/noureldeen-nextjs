'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import LineWaves from '@/components/LineWaves';
import Particles from '@/components/Particles';

export const HeroAnimation = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 bg-main -z-10" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-auto">
      {isDark ? (
        <LineWaves
          key="dark-canvas-active"
          speed={0.2}
          innerLineCount={16}
          outerLineCount={17}
          warpIntensity={0.5}
          rotation={50}
          edgeFadeWidth={1}
          colorCycleSpeed={0.1}
          brightness={0.1}
          color1="#C30C09"
          color2="#920907"
          color3="#610605"
          enableMouseInteraction={true}
          mouseInfluence={1.8}
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
