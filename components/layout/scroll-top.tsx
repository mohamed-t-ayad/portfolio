"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";

type ScrollToTopProps = {
  threshold?: number;
  className?: string;
};

export default function ScrollToTop({
  threshold = 300,
  className = "",
}: ScrollToTopProps) {
  const [visible, setVisible] = React.useState(false);
  const rafId = React.useRef<number | null>(null);

  React.useEffect(() => {
    const update = () => setVisible(window.scrollY > threshold);

    const onScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = window.requestAnimationFrame(() => {
        rafId.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (rafId.current !== null) window.cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  const scrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={[
        "group fixed z-50",
        "bottom-5 right-5 sm:bottom-7 sm:right-7",
        "rounded-full p-3 sm:p-3.5",
        "text-white",
        "border border-white/15",
        "shadow-[0_18px_50px_-24px_rgba(0,0,0,0.95)]",
        "backdrop-blur-md",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:scale-[1.06] hover:shadow-[0_24px_70px_-30px_rgba(0,0,0,0.95)] hover:border-white/25",
        "active:scale-95 active:translate-y-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40",
        visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-3 scale-95 pointer-events-none",
        className,
      ].join(" ")}
      style={{
        background: "linear-gradient(135deg, #667db6 0%, #0082c8 100%)",
      }}
    >
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-0 rounded-full",
          "opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100",
        ].join(" ")}
        style={{
          background:
            "radial-gradient(120px 120px at 30% 20%, rgba(255,255,255,0.35), transparent 55%)",
        }}
      />
      <span
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-0 rounded-full",
          "opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100",
        ].join(" ")}
        style={{
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)",
        }}
      />
      <ArrowUp
        className="relative h-5 w-5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </button>
  );
}