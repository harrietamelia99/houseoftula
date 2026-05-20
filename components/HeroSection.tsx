import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { HeroTicker } from "@/components/HeroTicker";
import { homeContent } from "@/data/content";
import { siteImages } from "@/lib/siteImages";
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
          src={siteImages.heroFigure}
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-[1.08] object-cover object-[center_28%] opacity-[0.28] sm:scale-110 sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-slab/92 via-forest-soft/90 to-forest-soft/95" />
      </div>

      <div aria-hidden className="grain-forest pointer-events-none absolute inset-0 z-0" />

      <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
        <div
          className={`${siteContentFrame} flex flex-1 flex-col justify-center py-[clamp(2.75rem,7vw,5.5rem)] text-center`}
        >
          <FadeIn delayMs={0}>
            <p className="font-tag font-body text-[0.65rem] uppercase tracking-[0.34em] text-almond/65">
              {hero.secondaryEyebrow}
            </p>
          </FadeIn>

          <FadeIn delayMs={60} className="mt-12">
            <h1
              id="hero-heading"
              className="font-heading mx-auto max-w-[min(100%,36rem)] text-hero font-light leading-[1.12] tracking-tight text-almond"
            >
              {hero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </FadeIn>

          <FadeIn delayMs={110} className="mt-12">
            <p className="mx-auto max-w-[min(100%,42rem)] font-body font-light leading-[1.85] text-almond/88">
              {hero.subheadingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </FadeIn>

          <FadeIn
            delayMs={150}
            className="mt-14 flex flex-col items-center gap-5 sm:mt-16 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6"
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-almond px-9 py-2.5 text-center font-body text-sm font-light leading-none text-forest transition-colors hover:bg-surface sm:min-h-[52px] sm:min-w-[12rem] sm:py-0"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.reservationCta.href}
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-almond/60 px-9 py-2.5 text-center font-body text-sm font-light leading-none text-almond transition-colors hover:border-almond hover:bg-almond/15 sm:min-h-[52px] sm:min-w-[12rem] sm:py-0"
            >
              {hero.reservationCta.label}
            </Link>
          </FadeIn>
        </div>
      </div>

      <HeroTicker phrases={homeContent.services.map((s) => s.title)} />
    </section>
  );
}
