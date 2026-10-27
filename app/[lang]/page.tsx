import { getDictionary } from '@/lib/dictionaries';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { CertificatesSection } from '@/components/CertificatesSection';
import { ContactSection } from '@/components/ContactSection';

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
    </>
  );
}
