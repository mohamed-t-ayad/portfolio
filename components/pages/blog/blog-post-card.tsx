import Link from 'next/link';
import { ArrowLeft, Clock3, FolderKanban } from 'lucide-react';
import type { BlogPost } from '@/data/blog';

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group rounded-[28px] border border-[#2a2a3a] bg-[#111118] p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-2xl"
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200">
          {post.category}
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-[#7f7fa1]">
          {post.heroTag}
        </span>
      </div>

      <h2 className="mb-4 text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-purple-200">
        {post.title}
      </h2>

      <p className="mb-6 line-clamp-3 leading-relaxed text-[#b8b8c9]">
        {post.subtitle}
      </p>

      <div className="flex flex-wrap items-center gap-4 text-sm text-[#8f8fa8]">
        <span className="inline-flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-purple-200" />
          {post.readTime}
        </span>
        <span className="inline-flex items-center gap-2">
          <FolderKanban className="h-4 w-4 text-purple-200" />
          {post.metaTopic}
        </span>
        <span>{post.date}</span>
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-200">
        اقرأ المقال
        <ArrowLeft className="h-4 w-4" />
      </div>
    </Link>
  );
}
