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
      <HeroSection lang={lang} dict={dict} />
      <AboutSection lang={lang} dict={dict} />
      <SkillsSection dict={dict} lang={lang} />
      <ProjectsSection dict={dict} lang={lang} />
      <ExperienceSection dict={dict} />
      <CertificatesSection lang={lang} dict={dict} />
      <ContactSection lang={lang} dict={dict} />
      <ScrollToTop />
    </>
  );
}
