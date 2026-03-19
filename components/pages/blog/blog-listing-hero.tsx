export function BlogListingHero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111118] px-6 py-16 shadow-2xl md:px-12 md:py-24">
      <div className="absolute inset-x-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-600/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="mb-5 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200">
          المدونة
        </span>
        <h1 className="blog-hero-title mb-5 text-4xl font-black leading-tight md:text-6xl">
          مقالات تقنية
        </h1>
        <p className="text-lg leading-relaxed text-[#b8b8c9] md:text-xl">
          تجارب حقيقية، حلول عملية، من الكود للسيرفر
        </p>
      </div>
    </section>
  );
}
