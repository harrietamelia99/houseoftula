"use client";

import { useLayoutEffect, useRef, useState } from "react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger successive siblings (ms). */
  delayMs?: number;
};

/** Soft lift-in on reveal. Important: opacity stays at 100% so SSR, no‑JS and JS‑blocked previews are never blank. */

export function FadeIn({ children, className = "", delayMs = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useLayoutEffect(() => {
    const rootEl = ref.current;
    if (!rootEl || typeof window === "undefined") return;

    let done = false;
    const settle = () => {
      if (done) return;
      done = true;
      setEntered(true);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      settle();
      return undefined;
    }

    function overlapsViewport(anchor: HTMLDivElement) {
      const rect = anchor.getBoundingClientRect();
      const h = window.innerHeight ?? document.documentElement.clientHeight ?? 900;
      return rect.bottom > 0 && rect.top < h;
    }

    if (overlapsViewport(rootEl)) {
      settle();
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting || (entry?.intersectionRatio ?? 0) > 0) {
          settle();
          observer.disconnect();
        }
      },
      { threshold: [0, 0.05, 0.1], rootMargin: "12% 0px 12% 0px" },
    );

    observer.observe(rootEl);

    requestAnimationFrame(() => {
      if (overlapsViewport(rootEl)) settle();
    });

    const fallback = window.setTimeout(settle, 900);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`ease-out-soft transform-gpu transition-[transform] duration-[780ms] opacity-100 ${
        entered ? "translate-y-0" : "translate-y-3"
      } ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
