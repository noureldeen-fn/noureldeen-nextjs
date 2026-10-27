"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SkillsSectionProps {
  dict?: any;
  lang?: string;
}

type CategoryType = "languages" | "automation" | "manualApi" | "frontend" | "tools";

interface SkillItem {
  name: string;
  category: CategoryType;
  icon: string;
}

export const SkillsSection = ({ dict, lang = "en" }: SkillsSectionProps) => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: lang === "ar" ? "الكل" : "All" },
    { id: "languages", label: lang === "ar" ? "لغات البرمجة" : "Languages" },
    { id: "automation", label: lang === "ar" ? "أتمتة الاختبارات" : "Test Automation" },
    { id: "manualApi", label: lang === "ar" ? "الاختبار اليدوي و API" : "Manual & API" },
    { id: "frontend", label: lang === "ar" ? "الواجهات (Frontend)" : "Frontend" },
    { id: "tools", label: lang === "ar" ? "الأدوات وبيئة العمل" : "Tools & OS" },
  ];

  const skillsList: SkillItem[] = [
    // 1. LANGUAGES
    {
      name: "Java",
      category: "languages",
      icon: "/skills/java.svg",
    },
    {
      name: "TypeScript",
      category: "languages",
      icon: "/skills/typescript.svg",
    },
    {
      name: "JavaScript",
      category: "languages",
      icon: "/skills/javascript.svg",
    },
    {
      name: "HTML5",
      category: "languages",
      icon: "/skills/html5.svg",
    },
    {
      name: "CSS3",
      category: "languages",
      icon: "/skills/css3.svg",
    },

    // 2. TEST AUTOMATION
    {
      name: "Selenium WebDriver",
      category: "automation",
      icon: "/skills/selenium.svg",
    },
    {
      name: "TestNG",
      category: "automation",
      icon: "/skills/testng.svg",
    },
    {
      name: "Apache Maven",
      category: "automation",
      icon: "/skills/maven.svg",
    },

    // 3. MANUAL & API TESTING
    {
      name: "Postman",
      category: "manualApi",
      icon: "/skills/postman.svg",
    },
    {
      name: "Jira Software",
      category: "manualApi",
      icon: "/skills/jira.svg",
    },
    {
      name: "Chrome DevTools",
      category: "manualApi",
      icon: "/skills/devtools.svg",
    },

    // 4. FRONTEND ENGINEERING
    {
      name: "React.js",
      category: "frontend",
      icon: "/skills/react.svg",
    },
    {
      name: "Next.js",
      category: "frontend",
      icon: "/skills/nextjs.svg",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: "/skills/tailwind.svg",
    },

    // 5. TOOLS & OS
    {
      name: "Git",
      category: "tools",
      icon: "/skills/git.svg",
    },
    {
      name: "GitHub",
      category: "tools",
      icon: "/skills/github.svg",
    },
    {
      name: "Docker",
      category: "tools",
      icon: "/skills/docker.svg",
    },
    {
      name: "Linux Mint",
      category: "tools",
      icon: "/skills/linuxmint.svg",
    },
    {
      name: "Bash",
      category: "tools",
      icon: "/skills/bash.svg",
    },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skillsList
      : skillsList.filter((item) => item.category === activeTab);

  return (
    <section id="skills" className="relative w-full py-20 lg:py-24 bg-[#161616] text-[#FBEBEB] overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FBEBEB] mb-3">
            {lang === "ar" ? "الترسانة التقنية والأدوات" : "Technical Arsenal & Tools"}
          </h2>
        </div>

        {/* 6 Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#F40F0B] text-white shadow-lg shadow-[#F40F0B]/40 scale-105"
                    : "bg-[#220202]/70 text-gray-400 border border-white/10 hover:border-[#F40F0B]/40 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Minimal Clean Grid: Icon + Name ONLY */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-2xl bg-[#220202]/40 border border-white/10 p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#F40F0B]/60 hover:bg-[#310302]/40 hover:-translate-y-1 shadow-lg cursor-default"
            >
              {/* Icon Container */}
              <div className="mb-3 transform transition-transform duration-300 group-hover:scale-110 flex items-center justify-center w-12 h-12">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  unoptimized
                />
              </div>

              {/* Name ONLY */}
              <span className="font-heading text-xs sm:text-sm font-semibold text-[#FBEBEB] group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
