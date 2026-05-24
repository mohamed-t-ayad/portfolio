import type { Metadata } from 'next';
import { AboutPageContent } from '@/components/pages/about/about-page-content';

export const metadata: Metadata = {
  title: 'About | Mohamed Ayad',
  description:
    'Learn more about Mohamed Ayad, his professional background, education, certifications, and experience in Front-End development, custom eCommerce, and n8n automation.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
