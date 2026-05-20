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
        <div
          className={`${siteContentFrame} flex min-h-0 flex-1 flex-col gap-10 lg:flex-row lg:items-center lg:gap-y-0 lg:gap-x-14 xl:gap-x-[4.5rem]`}
        >
          <div className="relative z-[1] flex min-h-0 flex-1 flex-col justify-center overflow-y-auto overscroll-contain pb-10 pt-[clamp(2.75rem,7vw,5.5rem)] lg:max-w-[30rem] xl:max-w-[32rem] lg:flex-none lg:shrink-0 lg:overflow-visible lg:pb-16 lg:pr-1 lg:pt-[clamp(4rem,10vw,6.5rem)] xl:pr-3">
          <FadeIn delayMs={0}>
            <p className="font-tag font-body text-[0.65rem] uppercase tracking-[0.34em] text-almond/60">{hero.secondaryEyebrow}</p>
          </FadeIn>

          <FadeIn delayMs={60} className="mt-12">
            <h1 id="hero-heading" className="font-heading text-hero font-light leading-[1.12] tracking-tight text-almond">
              {hero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </FadeIn>

          <FadeIn delayMs={110} className="mt-12 max-w-[40ch] font-body font-light leading-[1.85] text-almond/82 lg:max-w-[38ch]">
            <p>{hero.subheading}</p>
          </FadeIn>

          <FadeIn delayMs={150} className="mt-14 flex flex-col gap-5 sm:mt-16 sm:flex-row sm:flex-wrap sm:gap-6">
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

          <FadeIn delayMs={180} className="mt-16 lg:hidden">
            <SitePhoto
              src={siteImages.heroFigure}
              alt={hero.figureAlt}
              aspect="portrait"
              className="mx-auto mt-2 max-h-[min(640px,85vh)] w-full max-w-[560px]"
            />
          </FadeIn>
        </div>

        <div className="relative hidden min-h-0 min-w-0 flex-[1.05] lg:flex lg:flex-col lg:items-end lg:justify-center lg:self-stretch lg:pl-2">
          <FadeIn delayMs={90} className="flex w-full max-w-[min(440px,42vw)] justify-end">
            <SitePhoto
              src={siteImages.heroFigure}
              alt={hero.figureAlt}
              aspect="portrait"
              priority
              className="w-full max-w-full max-h-[min(68vh,640px)] shadow-[0_28px_56px_-16px_rgba(0,0,0,0.38)]"
            />
          </FadeIn>
        </div>
        </div>
      </div>

      <HeroTicker phrases={hero.ticker} />
    </section>
  );
}
