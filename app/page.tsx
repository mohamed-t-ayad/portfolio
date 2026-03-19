import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section';
import { ServicesPreviewSection } from '@/components/sections/services-preview-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { Testimonials } from '@/components/sections/testimonialsSection';
import { BlogsPreviewSection } from '@/components/sections/blogs-preview-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <ServicesPreviewSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <Testimonials />
      <BlogsPreviewSection />
      <ContactSection />
    </>
  );
}
