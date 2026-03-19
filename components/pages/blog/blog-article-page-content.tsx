import type { BlogPost } from '@/data/blog';
import { BlogArticleContent } from './blog-article-content';
import { BlogArticleHero } from './blog-article-hero';

type BlogArticlePageContentProps = {
  post: BlogPost;
};

export function BlogArticlePageContent({
  post,
}: BlogArticlePageContentProps) {
  return (
    <div
      className="blog-arabic min-h-screen bg-[#0a0a0f] text-[#e8e8f0]"
      dir="rtl"
      lang="ar"
    >
      <BlogArticleHero post={post} />
      <BlogArticleContent post={post} />
    </div>
  );
}
