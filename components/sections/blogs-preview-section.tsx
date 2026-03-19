import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui/section';
import { posts } from '@/data/blog';

export function BlogsPreviewSection() {
  const featuredPosts = posts.slice(0, 2);

  return (
    <Section>
      <SectionHeader tag="From The Blog" title="Latest Articles" />

      <div className="grid gap-6 md:grid-cols-2">
        {featuredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group rounded-[28px] border border-[#2a2a3a] bg-[#111118] p-7 text-right shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between gap-4 text-sm">
              <span className="rounded-full bg-purple-500/10 px-4 py-2 font-semibold text-purple-200">
                {post.category}
              </span>
              <span className="text-[#8f8fa8]">{post.readTime}</span>
            </div>

            <h3 className="mb-3 blog-arabic text-2xl font-bold leading-snug text-white">
              {post.title}
            </h3>
            <p className="blog-arabic line-clamp-2 leading-relaxed text-[#b8b8c9]">
              {post.subtitle}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/40"
        >
          View All Blogs
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </Section>
  );
}
