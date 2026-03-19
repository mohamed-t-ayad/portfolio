import { Section } from '@/components/ui/section';
import { AboutBioSection } from './about-bio-section';
import { AboutEducationSection } from './about-education-section';
import { AboutHero } from './about-hero';

export function AboutPageContent() {
  return (
    <div className="pt-24">
      <Section>
        <AboutHero />
      </Section>

      <Section gray>
        <AboutBioSection />
      </Section>

      <Section>
        <AboutEducationSection />
      </Section>
    </div>
  );
}
