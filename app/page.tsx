import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { Testimonials } from '@/components/sections/testimonialsSection';
import { EducationSection } from '@/components/sections/education-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <EducationSection />
      <Testimonials />
      <ContactSection />
    </>
  );
}
