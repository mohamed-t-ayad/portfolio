import { posts } from '@/data/blog';
import { BlogListingHero } from './blog-listing-hero';
import { BlogPostCard } from './blog-post-card';

export function BlogPageContent() {
  return (
    <div
      className="blog-arabic min-h-screen bg-[#0a0a0f] px-4 pb-24 pt-28 text-[#e8e8f0]"
      dir="rtl"
      lang="ar"
    >
      <div className="mx-auto max-w-6xl">
        <BlogListingHero />

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </section>
      </div>
    </div>
  );
}
