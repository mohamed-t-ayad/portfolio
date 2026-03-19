import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogArticlePageContent } from '@/components/pages/blog/blog-article-page-content';
import { posts } from '@/data/blog';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = posts.find((entry) => entry.slug === params.slug);

  return {
    title: post ? `${post.title} | Mohamed Ayad` : 'Blog',
  };
}

export default function BlogArticlePage({ params }: PageProps) {
  const post = posts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogArticlePageContent post={post} />;
}
