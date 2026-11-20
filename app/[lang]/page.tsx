import dynamic from "next/dynamic";
import { getDictionary } from '@/lib/dictionaries';
import HeroSection from "@/components/HeroSection";

const AboutSection = dynamic(() => import("@/components/AboutSection"));
const SkillsSection = dynamic(() => import("@/components/SkillsSection"));
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));
const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"));
const CertificatesSection = dynamic(() => import("@/components/CertificatesSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"));

export default async function Page(
  props: {
    params: Promise<{ lang: string }>;
  }
) {
  const params = await props.params;

  const {
    lang
  } = params;

  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection lang={lang} dict={{ hero: dict.hero }} />
      <AboutSection lang={lang} dict={{ about: dict.about }} />
      <SkillsSection dict={{ skills: dict.skills }} lang={lang} />
      <ProjectsSection dict={{ projects: dict.projects, locale: dict.locale }} lang={lang} />
      <ExperienceSection dict={{ experience: dict.experience }} />
      {/* <CertificatesSection lang={lang} dict={{ certificates: dict.certificates, locale: dict.locale }} /> */}
      <ContactSection lang={lang} dict={{ contact: dict.contact, locale: dict.locale }} />
      <ScrollToTop />
    </>
  );
}
