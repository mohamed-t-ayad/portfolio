import { Section } from '@/components/ui/section';
import { services } from '@/data/services';
import { ServiceCard } from './service-card';
import { ServicesPageHero } from './services-page-hero';

export function ServicesPageContent() {
  return (
    <div className="pt-24">
      <Section>
        <ServicesPageHero />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
    </div>
  );
}
