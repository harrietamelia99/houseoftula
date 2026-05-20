import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { HeroTicker } from "@/components/HeroTicker";
import { SitePhoto } from "@/components/SitePhoto";
import { homeContent } from "@/data/content";
import { siteImages } from "@/lib/siteImages";
import { siteContentFrame } from "@/lib/siteLayout";

export function HeroSection() {
  const hero = homeContent.hero;

  return (
    <section
      id="hero-section"
      className="relative flex h-[calc(100svh_-_var(--site-header-height))] min-h-0 flex-col bg-forest-slab text-almond"
    >
      <div aria-hidden className="grain-forest pointer-events-none absolute inset-0 -z-10" />

      <div className="flex min-h-0 flex-1 flex-col">
        <div className={`${siteContentFrame} flex min-h-0 flex-1 flex-col lg:flex-row lg:items-stretch`}>
          <div className="relative z-[1] flex min-h-0 flex-1 flex-col justify-center overflow-y-auto overscroll-contain pb-8 pt-[clamp(2.5rem,6vw,5rem)] lg:max-w-[58%] lg:overflow-visible lg:pb-16 lg:pt-[clamp(5rem,12vw,7.5rem)]">
          <FadeIn delayMs={0}>
            <p className="font-tag font-body text-[0.65rem] uppercase tracking-[0.34em] text-almond/60">{hero.secondaryEyebrow}</p>
          </FadeIn>

          <FadeIn delayMs={60} className="mt-10">
            <h1 id="hero-heading" className="font-heading text-hero font-light leading-[1.1] tracking-tight text-almond">
              {hero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </FadeIn>

          <FadeIn delayMs={110} className="mt-8 max-w-[40ch] font-body font-light leading-[1.8] text-almond/82">
            <p>{hero.subheading}</p>
          </FadeIn>

          <FadeIn delayMs={150} className="mt-12 flex flex-col gap-5 sm:flex-row sm:flex-wrap">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex justify-center rounded-full bg-almond px-9 py-3 text-center font-body text-sm font-light text-forest transition-colors hover:bg-surface sm:min-h-[52px] sm:min-w-[12rem]"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.reservationCta.href}
              className="inline-flex justify-center rounded-full border border-almond/60 px-9 py-3 text-center font-body text-sm font-light text-almond transition-colors hover:border-almond hover:bg-almond/15 sm:min-h-[52px] sm:min-w-[12rem]"
            >
              {hero.reservationCta.label}
            </Link>
          </FadeIn>

          <FadeIn delayMs={180} className="mt-14 lg:hidden">
            <SitePhoto
              src={siteImages.heroFigure}
              alt={hero.figureAlt}
              aspect="portrait"
              className="mx-auto max-h-[min(640px,85vh)] w-full max-w-[560px]"
            />
          </FadeIn>
        </div>

        <div className="relative hidden lg:flex lg:min-h-0 lg:flex-[0.85] lg:flex-row lg:items-center lg:justify-end lg:self-stretch lg:py-10">
          <FadeIn delayMs={90} className="w-full max-w-[560px]">
            <SitePhoto
              src={siteImages.heroFigure}
              alt={hero.figureAlt}
              aspect="portrait"
              priority
              className="max-h-[min(640px,78vh)] w-full"
            />
          </FadeIn>
        </div>
        </div>
      </div>

      <HeroTicker phrases={hero.ticker} />
    </section>
  );
}
