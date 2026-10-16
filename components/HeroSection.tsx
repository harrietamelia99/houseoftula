import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { homeContent } from "@/content/home";
import { siteContentFrame } from "@/lib/siteLayout";

export function HeroSection() {
  const hero = homeContent.hero;

  return (
    <section
      id="hero-section"
      className="relative isolate flex min-h-[calc(100svh_-_var(--site-header-height))] flex-col bg-forest-soft text-almond"
    >
      {/* Full-bleed photography + read-through scrim (scale recesses the photo; low opacity keeps it soft) */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden" aria-hidden>
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="photo-muted object-cover object-[center_46%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-slab/75 via-forest-slab/55 to-forest-slab/80" />
      </div>

      <div aria-hidden className="grain-forest pointer-events-none absolute inset-0 z-0" />

      <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
        <div
          className={`${siteContentFrame} flex flex-1 flex-col justify-center py-10 text-center md:py-[clamp(2.75rem,7vw,5.5rem)]`}
        >
          <FadeIn delayMs={0}>
            <p className="font-tag font-body text-[0.65rem] uppercase tracking-[0.34em] text-almond/65">
              {hero.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delayMs={60} className="mt-7 md:mt-12">
            <h1
              id="hero-heading"
              className="font-heading mx-auto max-w-[min(100%,36rem)] text-hero font-light leading-[1.06] tracking-tight text-almond"
            >
              {hero.title}
            </h1>
            <p className="mt-4 font-heading text-h3 font-light italic text-almond/90">{hero.byline}</p>
          </FadeIn>

          <FadeIn delayMs={110} className="mt-6 md:mt-8">
            <p className="mx-auto max-w-[min(100%,36rem)] font-heading text-[clamp(1.35rem,3vw,2.05rem)] font-light leading-[1.2] text-almond/90">
              {hero.supporting}
            </p>
          </FadeIn>

          <FadeIn
            delayMs={150}
            className="mx-auto mt-9 flex w-full max-w-sm flex-col items-center gap-3 sm:mt-16 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6"
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex min-h-[3rem] w-full items-center justify-center rounded-full bg-almond px-9 py-2.5 text-center font-body text-sm font-light leading-none text-forest transition-[transform,background-color,box-shadow] duration-layout ease-out-soft hover:-translate-y-0.5 hover:bg-surface hover:shadow-[0_12px_32px_-18px_rgba(0,0,0,0.25)] active:translate-y-0 motion-reduce:hover:translate-y-0 sm:min-h-[52px] sm:w-auto sm:min-w-[12rem] sm:py-0"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex min-h-[3rem] w-full items-center justify-center rounded-full border border-almond/60 px-9 py-2.5 text-center font-body text-sm font-light leading-none text-almond transition-[transform,border-color,background-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:border-almond hover:bg-almond/20 active:translate-y-0 motion-reduce:hover:translate-y-0 sm:min-h-[52px] sm:w-auto sm:min-w-[12rem] sm:py-0"
            >
              {hero.secondaryCta.label}
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
