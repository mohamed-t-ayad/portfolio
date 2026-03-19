import Link from 'next/link';
import {
  ArrowLeft,
  Globe2,
  ImageIcon,
  KeyRound,
  Package,
  Tag,
  Wrench,
} from 'lucide-react';
import type { BlogPost } from '@/data/blog';

const challengeIconMap = {
  wrench: Wrench,
  tag: Tag,
  key: KeyRound,
  globe: Globe2,
  image: ImageIcon,
  package: Package,
};

type BlogArticleContentProps = {
  post: BlogPost;
};

export function BlogArticleContent({ post }: BlogArticleContentProps) {
  return (
    <article className="mx-auto max-w-[780px] px-4 pb-24">
      {post.sections.map((section, sectionIndex) => (
        <section key={section.num} className="mb-[72px]">
          <span className="blog-section-num">{section.num}</span>
          <h2 className="relative mt-3 pr-5 text-3xl font-extrabold leading-tight text-white before:absolute before:bottom-1 before:right-0 before:top-1 before:w-1 before:rounded before:bg-gradient-to-b before:from-[#6c63ff] before:to-[#00d4aa]">
            {section.heading}
          </h2>

          <div className="mt-6 space-y-6">
            {section.blocks.map((block, blockIndex) => {
              if (block.type === 'paragraph') {
                return (
                  <p
                    key={blockIndex}
                    className="text-lg leading-9 text-[#c8c8d8]"
                    dangerouslySetInnerHTML={{ __html: block.content }}
                  />
                );
              }

              if (block.type === 'callout') {
                return (
                  <div key={blockIndex} className={`blog-callout ${block.calloutType}`}>
                    <div className="mb-2 text-xs font-bold tracking-[0.16em] opacity-80">
                      {block.label}
                    </div>
                    <p className="mb-0 leading-8">{block.content}</p>
                  </div>
                );
              }

              if (block.type === 'code') {
                return (
                  <div key={blockIndex} className="blog-code-block">
                    <div className="blog-code-header">{block.filename}</div>
                    <pre>{block.code}</pre>
                  </div>
                );
              }

              if (block.type === 'timeline') {
                return (
                  <div key={blockIndex} className="blog-timeline">
                    {block.items.map((item) => (
                      <div key={item.title} className="blog-timeline-item">
                        <div className="blog-timeline-dot" />
                        <div>
                          <h3 className="mb-2 text-lg font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="mb-0 text-sm leading-7 text-[#8888aa]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              if (block.type === 'challenge-grid') {
                return (
                  <div key={blockIndex} className="grid gap-4">
                    {block.challenges.map((challenge) => {
                      const Icon = challengeIconMap[challenge.icon];

                      return (
                        <div
                          key={challenge.title}
                          className="flex items-start gap-4 rounded-2xl border border-[#2a2a3a] bg-[#111118] px-6 py-5"
                        >
                          <div className="mt-0.5 text-purple-200">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="mb-2 text-lg font-bold text-white">
                              {challenge.title}
                            </h3>
                            <p className="mb-0 text-sm leading-7 text-[#8888aa]">
                              {challenge.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              }

              return (
                <div
                  key={blockIndex}
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                >
                  {block.results.map((result) => (
                    <div
                      key={result.label}
                      className="rounded-2xl border border-[#2a2a3a] bg-[#111118] px-5 py-6 text-center"
                    >
                      <span className="blog-result-num">{result.number}</span>
                      <div className="mt-2 text-sm text-[#8888aa]">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          {sectionIndex < post.sections.length - 1 && (
            <hr className="mt-[60px] border-[#2a2a3a]" />
          )}
        </section>
      ))}

      <footer className="mt-20 rounded-2xl border border-[#2a2a3a] bg-[#111118] p-8 text-center">
        <p className="mx-auto mb-6 max-w-2xl text-base leading-8 text-[#8888aa]">
          {post.footerCta}
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-emerald-500 px-8 py-4 font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
        >
          تواصل معي
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </footer>
    </article>
  );
}
