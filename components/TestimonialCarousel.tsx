"use client";

import { KeyboardEvent as ReactKeyboardEvent, useEffect, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { SectionRule } from "@/components/SectionRule";
import { siteContentFrame } from "@/lib/siteLayout";

type Quote = {
  quote: string;
  attribution: string;
};

type Props = {
  testimonials: Quote[];
};

/** Placeholder carousel until Emma gathers live quotes. */

export function TestimonialCarousel({ testimonials }: Props) {
  const [index, setIndex] = useState(0);
  const length = testimonials.length;
  const lastIndex = Math.max(length - 1, 0);
  const current = testimonials[Math.min(index, lastIndex)];

  useEffect(() => {
    setIndex((previous) => Math.min(previous, lastIndex));
  }, [lastIndex]);

  function go(direction: number) {
    setIndex((value) => {
      const candidate = value + direction;
      if (candidate < 0) return lastIndex;
      if (candidate > lastIndex) return 0;
      return candidate;
    });
  }

  function handleKey(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  }

  return (
    <FadeIn delayMs={40}>
      <section
        className="relative isolate overflow-hidden border-t border-sienna/22 bg-almond pb-section pt-section text-text grain-backdrop"
        aria-labelledby="kind-words-heading"
      >
        <div className={`relative z-[1] flex flex-col gap-12 lg:flex-row lg:gap-24 ${siteContentFrame}`}>
          <div className="lg:w-[30%]">
            <SectionRule />
            <p
              id="kind-words-heading"
              className="font-tag mt-8 font-body uppercase tracking-[0.28em] text-muted"
            >
              Kind voices
            </p>
            <p className="font-heading mt-6 text-h3 font-medium italic text-forest">
              Tender reflections while final words gather.
            </p>
          </div>

          <div
            className="flex-1 outline-none"
            role="region"
            aria-roledescription="carousel"
            aria-label="Guest reflections"
            tabIndex={0}
            onKeyDown={handleKey}
          >
            <blockquote
              key={current.quote}
              className="font-heading text-[clamp(1.5rem,2.6vw,1.925rem)] font-light italic leading-[1.1] text-forest"
              lang="en-GB"
            >
              “{current.quote}”
            </blockquote>

            <p className="mt-8 font-body text-sm font-light italic text-muted">{current.attribution}</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-4">
              <button
                type="button"
                className="font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-muted underline decoration-transparent decoration-2 underline-offset-8 transition-[color,text-decoration-color] duration-layout ease-out-soft hover:text-forest hover:decoration-border"
                onClick={() => go(-1)}
              >
                Prev
              </button>
              <button
                type="button"
                className="font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-muted underline decoration-transparent decoration-2 underline-offset-8 transition-[color,text-decoration-color] duration-layout ease-out-soft hover:text-forest hover:decoration-border"
                onClick={() => go(1)}
              >
                Next
              </button>

              <p className="font-body text-sm font-light text-muted" aria-live="polite">
                {Math.min(index, lastIndex) + 1} · {length}
              </p>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
