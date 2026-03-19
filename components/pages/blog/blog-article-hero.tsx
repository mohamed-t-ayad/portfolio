import { Clock3, FolderKanban } from 'lucide-react';
import type { BlogPost } from '@/data/blog';

const badgeStyles = {
  old: 'border-red-400/20 bg-red-500/10 text-red-200',
  new: 'border-emerald-400/20 bg-emerald-500/10 text-emerald-200',
  neutral: 'border-white/10 bg-white/5 text-[#d6d6e7]',
};

type BlogArticleHeroProps = {
  post: BlogPost;
};

export function BlogArticleHero({ post }: BlogArticleHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 text-center">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/30 blur-3xl" />
      <div className="absolute bottom-12 right-12 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <span className="mb-6 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold text-purple-200">
          {post.heroTag}
        </span>

        <h1 className="blog-hero-title mb-6 text-4xl font-black leading-tight md:text-6xl">
          {post.title}
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-[#b8b8c9] md:text-2xl">
          {post.subtitle}
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-[#9d9db4]">
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-purple-200" />
            وقت القراءة: {post.readTime}
          </span>
          <span className="text-purple-300">●</span>
          <span className="inline-flex items-center gap-2">
            <FolderKanban className="h-4 w-4 text-purple-200" />
            {post.metaTopic}
          </span>
          <span className="text-purple-300">●</span>
          <span>{post.audience}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {post.stackBadges.map((badge) => (
            <span
              key={badge.label}
              className={`rounded-lg border px-4 py-2 text-sm font-medium ${badgeStyles[badge.type]}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
