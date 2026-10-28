"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import type { Testimonial } from "@/content/testimonials";
import { siteContentFrame } from "@/lib/siteLayout";

type Props = {
  testimonials: readonly Testimonial[];
};

function Stars() {
  return (
    <div className="flex gap-1.5 text-sienna" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} aria-hidden viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 1.6l2.47 5.3 5.8.68-4.3 3.96 1.15 5.73L10 14.4l-5.12 2.87 1.15-5.73-4.3-3.96 5.8-.68z" />
        </svg>
      ))}
    </div>
  );
}

/** A quote that shows the first few lines, with "Read more" for longer ones. */
function Quote({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const long = text.length > 170;
  return (
    <>
      <blockquote
        className={`mt-6 font-heading text-[1.2rem] font-light italic leading-[1.55] text-forest md:text-[1.3rem] ${long && !open ? "line-clamp-5" : ""}`}
        lang="en-GB"
      >
        &ldquo;{text}&rdquo;
      </blockquote>
      {long ? (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 self-start border-b border-sienna/40 pb-0.5 font-body text-[0.65rem] uppercase tracking-[0.28em] text-sienna-deep transition-colors duration-layout hover:border-sienna-deep"
        >
          {open ? "Read less" : "Read more"}
        </button>
      ) : null}
    </>
  );
}

/** Guest words as cards: three across on desktop, stacked on mobile. */
export function Testimonials({ testimonials }: Props) {
  if (testimonials.length === 0) return null;

  return (
    <section
      className="border-t border-sienna/20 bg-almond py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className={siteContentFrame}>
        <FadeIn className="text-center">
          <h2
            id="testimonials-heading"
            className="font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.05] text-forest"
          >
            Testimonials
          </h2>
          <div aria-hidden className="mx-auto mt-7 h-px w-16 bg-sienna" />
        </FadeIn>

        <ul className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((item, index) => (
            <li key={item.quote} className="flex">
              <FadeIn delayMs={index * 60} className="flex w-full">
                <figure className="flex w-full flex-col rounded-[2px] border border-sienna/20 bg-white/60 p-8 md:p-10">
                  <Stars />
                  <Quote text={item.quote} />
                  <figcaption className="mt-auto pt-8 font-body text-[0.7rem] uppercase tracking-[0.28em] text-muted">
                    {item.name}
                  </figcaption>
                </figure>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
