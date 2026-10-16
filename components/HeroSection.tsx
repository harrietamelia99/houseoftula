import Link from "next/link";
import { ArchImage } from "@/components/ArchImage";
import { FadeIn } from "@/components/FadeIn";
import { homeContent } from "@/content/home";
import { siteContentFrame } from "@/lib/siteLayout";
import { Lines } from "@/components/Lines";

export function HeroSection() {
  const hero = homeContent.hero;

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-almond md:min-h-[calc(100svh_-_var(--site-header-height))]"
    >
      {/* Soft linen panel behind the arch */}
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[38%] bg-surface/55 md:block" />

      <div
        className={`${siteContentFrame} relative grid items-center gap-12 pb-16 pt-10 md:min-h-[calc(100svh_-_var(--site-header-height))] md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:py-16 lg:gap-20`}
      >
        <div className="order-2 text-center md:order-1 md:text-left">

          <FadeIn delayMs={60}>
            <h1
              id="hero-heading"
              className="whitespace-nowrap font-heading text-[clamp(2.75rem,5.6vw,5rem)] font-light leading-[1] tracking-[-0.01em] text-forest md:mt-10"
            >
              House of Tula
            </h1>
            <p className="mt-4 font-heading text-[clamp(1.2rem,1.7vw,1.45rem)] font-light text-muted">
              {hero.byline}, {hero.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delayMs={110}>
            <div aria-hidden className="mx-auto mt-10 h-px w-16 bg-olive md:mx-0" />
            <p className="mt-10 font-heading text-[clamp(1.45rem,2.3vw,1.95rem)] font-light leading-[1.25] text-text">
              <Lines text={hero.supporting} />
            </p>
          </FadeIn>

          <FadeIn
            delayMs={150}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5 md:justify-start"
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex min-h-[3.25rem] w-full max-w-xs items-center justify-center rounded-full bg-forest px-10 font-body text-[0.7rem] uppercase tracking-[0.28em] text-almond transition-[transform,background-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:bg-forest-slab sm:w-auto"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="group inline-flex min-h-[3.25rem] items-center gap-3 px-2 font-body text-[0.7rem] uppercase tracking-[0.28em] text-forest"
            >
              <span className="border-b border-forest/30 pb-1 transition-colors duration-layout group-hover:border-forest">
                {hero.secondaryCta.label}
              </span>
              <span aria-hidden className="transition-transform duration-layout group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </FadeIn>
        </div>

        <FadeIn delayMs={80} className="order-1 mx-auto w-full max-w-[20rem] sm:max-w-[24rem] md:order-2 md:max-w-[30rem]">
          <ArchImage
            src={hero.image}
            alt={hero.imageAlt}
            priority
            outline
            ratio="aspect-[4/5]"
           
            sizes="(min-width: 768px) 40vw, 85vw"
          />
        </FadeIn>
      </div>
    </section>
  );
}
