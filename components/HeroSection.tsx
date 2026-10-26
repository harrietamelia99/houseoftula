import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Lines } from "@/components/Lines";
import { homeContent } from "@/content/home";
import { siteContentFrame } from "@/lib/siteLayout";

/**
 * Homepage opener: Emma's "Welcome to House of Tula" banner of the studio doors,
 * full width, with the tagline and buttons underneath.
 */
export function HeroSection() {
  const hero = homeContent.hero;

  return (
    <section id="hero-section" className="bg-almond" aria-labelledby="hero-heading">
      <h1 id="hero-heading" className="sr-only">
        {hero.title}
      </h1>

      {/* Fills the screen below the header on tablet and desktop; keeps the banner's own shape on phones so the lettering isn't cropped. */}
      <div className="relative aspect-[1179/500] w-full overflow-hidden bg-surface md:aspect-auto md:h-[calc(100svh-var(--site-header-height))] md:min-h-[28rem]">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="photo-soft object-cover object-[30%_50%]"
        />
      </div>

      <div className={`${siteContentFrame} py-14 text-center md:py-20`}>
        <FadeIn>
          <p className="font-heading text-[clamp(1.15rem,1.6vw,1.4rem)] font-light text-muted">
            {hero.byline}, {hero.eyebrow}
          </p>
          <div aria-hidden className="mx-auto mt-8 h-px w-16 bg-sienna" />
          <p className="mx-auto mt-8 max-w-[40rem] font-heading text-[clamp(1.9rem,3.6vw,3rem)] font-light leading-[1.15] text-forest">
            <Lines text={hero.supporting} />
          </p>
        </FadeIn>

        <FadeIn
          delayMs={80}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5"
        >
          <Link
            href={hero.primaryCta.href}
            className="inline-flex min-h-[3.25rem] w-full max-w-xs items-center justify-center rounded-full bg-sienna px-10 font-body text-[0.7rem] uppercase tracking-[0.28em] text-almond transition-[transform,background-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:bg-sienna-deep sm:w-auto"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="group inline-flex min-h-[3.25rem] items-center gap-3 whitespace-nowrap px-2 font-body text-[0.7rem] uppercase tracking-[0.28em] text-forest"
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
    </section>
  );
}
