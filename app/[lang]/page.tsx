import { getDictionary } from '@/lib/dictionaries';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection lang={lang} dict={dict} />
      <AboutSection dict={dict} />
      <ProjectsSection dict={dict} />
      <SkillsSection dict={dict} />
      <ExperienceSection dict={dict} />
      <ContactSection dict={dict} />
    </>
  );
}
