"use client";

import { KeyboardEvent as ReactKeyboardEvent, useEffect, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { SectionRule } from "@/components/SectionRule";
import type { Testimonial } from "@/content/testimonials";
import { siteContentFrame, siteSectionY } from "@/lib/siteLayout";

type Props = {
  testimonials: readonly Testimonial[];
};

export function Testimonials({ testimonials }: Props) {
  const length = testimonials.length;

  const [index, setIndex] = useState(0);
  const lastIndex = Math.max(length - 1, 0);
  const current = testimonials[Math.min(index, lastIndex)];

  useEffect(() => {
    setIndex((previous) => Math.min(previous, lastIndex));
  }, [lastIndex]);

  if (length === 0 || !current) return null;

  function go(direction: number) {
    setIndex((value) => {
      const candidate = value + direction;
      if (candidate < 0) return lastIndex;
      if (candidate > lastIndex) return 0;
      return candidate;
    });
  }

  function handleKey(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (length < 2) return;
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
        className={`relative isolate overflow-hidden border-t border-sienna/20 bg-almond text-text grain-backdrop ${siteSectionY}`}
        aria-labelledby="testimonials-heading"
      >
        <div
          className={`relative z-[1] flex flex-col gap-8 max-lg:text-center md:gap-12 lg:flex-row lg:gap-24 lg:text-left ${siteContentFrame}`}
        >
          <div className="flex flex-col max-lg:items-center lg:w-[30%]">
            <SectionRule className="max-lg:mx-auto max-lg:w-12" />
            <h2
              id="testimonials-heading"
              className="font-tag mt-8 font-body uppercase tracking-[0.28em] text-muted"
            >
              Testimonials
            </h2>
          </div>

          <div
            className="flex flex-1 flex-col outline-none max-lg:items-center"
            role="region"
            aria-roledescription={length > 1 ? "carousel" : undefined}
            aria-label="Testimonials"
            tabIndex={length > 1 ? 0 : undefined}
            onKeyDown={handleKey}
          >
            <blockquote
              key={current.quote}
              className="font-heading text-[clamp(1.5rem,2.6vw,1.925rem)] font-light italic leading-[1.1] text-forest"
              lang="en-GB"
            >
              “{current.quote}”
            </blockquote>

            <p className="mt-6 font-body text-sm font-light text-muted md:mt-8">{current.name}</p>

            {length >= 2 ? (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-lg:w-full md:mt-10 md:justify-start md:gap-x-12 md:gap-y-4 lg:justify-start">
                <button
                  type="button"
                  className="tap-target inline-flex items-center px-2 font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-muted underline decoration-transparent decoration-2 underline-offset-8 transition-[color,text-decoration-color] duration-layout ease-out-soft hover:text-forest hover:decoration-border md:-ml-2"
                  onClick={() => go(-1)}
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="tap-target inline-flex items-center px-2 font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-muted underline decoration-transparent decoration-2 underline-offset-8 transition-[color,text-decoration-color] duration-layout ease-out-soft hover:text-forest hover:decoration-border"
                  onClick={() => go(1)}
                >
                  Next
                </button>

                <p className="font-body text-sm font-light text-muted" aria-live="polite">
                  {Math.min(index, lastIndex) + 1} · {length}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
