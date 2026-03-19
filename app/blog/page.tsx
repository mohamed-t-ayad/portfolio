import type { Metadata } from 'next';
import { BlogPageContent } from '@/components/pages/blog/blog-page-content';

export const metadata: Metadata = {
  title: 'المدونة | Mohamed Ayad',
};

export default function BlogPage() {
  return <BlogPageContent />;
}
