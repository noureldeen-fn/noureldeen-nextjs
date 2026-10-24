import React from "react";
import { Code2, Cpu, GitBranch, Layers, ShieldCheck } from "lucide-react";

interface AboutSectionProps {
  dict: any;
  lang: string;
}

export const AboutSection = ({ dict, lang }: AboutSectionProps) => {
  const isRTL = lang === "ar";

  return (
    <section id="about" className="relative w-full py-20 lg:py-28 bg-[#161616] text-[#FBEBEB] overflow-hidden border-t border-white/10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -start-32 w-96 h-96 bg-[#F40F0B]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-10 -end-32 w-96 h-96 bg-[#220202] rounded-full blur-[128px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <h2 className="font-heading rtl:font-arabic text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight rtl:tracking-normal text-[#FBEBEB] mb-4 sm:mb-5 leading-tight">
            {dict.about.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-body rtl:font-arabic">
            {dict.about.leadParagraph}
          </p>
        </div>

        {/* 3 Interactive Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
          {/* Pillar 1: SDET */}
          <div className="group relative rounded-2xl bg-[#220202]/70 border border-white/10 p-8 shadow-xl transition-all duration-300 hover:border-brand-cta/50 hover:bg-[#310302]/50 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F40F0B]/10 border border-[#F40F0B]/20 flex items-center justify-center text-[#F40F0B] mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading rtl:font-arabic text-xl font-bold text-[#FBEBEB] mb-3 rtl:tracking-normal">
              {dict.about.pillars.sdet.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-body rtl:font-arabic">
              {dict.about.pillars.sdet.description}
            </p>
          </div>

          {/* Pillar 2: Frontend Engineering */}
          <div className="group relative rounded-2xl bg-[#220202]/70 border border-white/10 p-8 shadow-xl transition-all duration-300 hover:border-brand-cta/50 hover:bg-[#310302]/50 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F40F0B]/10 border border-[#F40F0B]/20 flex items-center justify-center text-[#F40F0B] mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="font-heading rtl:font-arabic text-xl font-bold text-[#FBEBEB] mb-3 rtl:tracking-normal">
              {dict.about.pillars.frontend.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-body rtl:font-arabic">
              {dict.about.pillars.frontend.description}
            </p>
          </div>

          {/* Pillar 3: Synergy Advantage */}
          <div className="group relative rounded-2xl bg-[#220202]/70 border border-white/10 p-8 shadow-xl transition-all duration-300 hover:border-brand-cta/50 hover:bg-[#310302]/50 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#F40F0B]/10 border border-[#F40F0B]/20 flex items-center justify-center text-[#F40F0B] mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-heading rtl:font-arabic text-xl font-bold text-[#FBEBEB] mb-3 rtl:tracking-normal">
              {dict.about.pillars.synergy.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-body rtl:font-arabic">
              {dict.about.pillars.synergy.description}
            </p>
          </div>
        </div>

        {/* Bottom Technical DNA Strip */}
        <div className="rounded-xl bg-[#1d0303]/50 border border-white/10 p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-white/10">
            <div className="first:pt-0 pt-4 md:pt-0 md:ps-0 md:pe-6">
              <div className="flex items-center gap-2 mb-2 text-[#F40F0B]">
                <Layers className="w-5 h-5 flex-shrink-0" />
                <span className="font-heading rtl:font-arabic text-sm font-semibold tracking-wider rtl:tracking-normal uppercase rtl:normal-case text-[#FBEBEB]">
                  {dict.about.metrics.automationTitle}
                </span>
              </div>
              <p className="text-sm text-gray-400 font-body rtl:font-arabic leading-relaxed">
                {dict.about.metrics.automationDesc}
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-6">
              <div className="flex items-center gap-2 mb-2 text-[#F40F0B]">
                <Code2 className="w-5 h-5 flex-shrink-0" />
                <span className="font-heading rtl:font-arabic text-sm font-semibold tracking-wider rtl:tracking-normal uppercase rtl:normal-case text-[#FBEBEB]">
                  {dict.about.metrics.frontendTitle}
                </span>
              </div>
              <p className="text-sm text-gray-400 font-body rtl:font-arabic leading-relaxed">
                {dict.about.metrics.frontendDesc}
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pe-0 md:ps-6">
              <div className="flex items-center gap-2 mb-2 text-[#F40F0B]">
                <GitBranch className="w-5 h-5 flex-shrink-0" />
                <span className="font-heading rtl:font-arabic text-sm font-semibold tracking-wider rtl:tracking-normal uppercase rtl:normal-case text-[#FBEBEB]">
                  {dict.about.metrics.methodologyTitle}
                </span>
              </div>
              <p className="text-sm text-gray-400 font-body rtl:font-arabic leading-relaxed">
                {dict.about.metrics.methodologyDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
