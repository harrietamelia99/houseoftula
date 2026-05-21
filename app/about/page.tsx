import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SitePhoto } from "@/components/SitePhoto";
import { SectionRule } from "@/components/SectionRule";
import { aboutPage } from "@/data/content";
import { buildPageMeta } from "@/lib/metadata";
import { siteImages } from "@/lib/siteImages";
import { siteContentFrame } from "@/lib/siteLayout";

export const metadata = buildPageMeta({
  title: "About",
  description: aboutPage.seoDescription,
  path: "/about",
});

export default function AboutPage() {
  const lead = aboutPage.story.slice(0, 3);
  const remainder = aboutPage.story.slice(3);

  return (
    <div className="bg-almond pb-section">
      <header className="pt-24 sm:pt-28">
        <div className={siteContentFrame}>
          <FadeIn>
            <h1 className="font-heading text-h2 font-light text-text">{aboutPage.title}</h1>
            <SectionRule className="mt-10" />
          </FadeIn>
        </div>
      </header>

      <section className="pt-section">
        <div className={siteContentFrame}>
          <FadeIn>
          <article className="gap-y-6 lg:columns-2 lg:gap-x-14">
            {lead.map((paragraph) => (
              <p
                key={paragraph}
                className="break-inside-avoid pb-8 font-body font-light leading-[1.75] text-muted first:mt-0"
              >
                {paragraph}
              </p>
            ))}

            <blockquote className="my-14 break-inside-avoid px-6 text-center [column-span:all]">
              <p className="font-heading text-[clamp(1.45rem,2.7vw,1.95rem)] font-normal italic leading-[1.12] text-olive-dark">
                “{aboutPage.pullQuote}”
              </p>
            </blockquote>

            {remainder.map((paragraph) => (
              <p
                key={paragraph}
                className="break-inside-avoid pb-8 font-body font-light leading-[1.75] text-muted"
              >
                {paragraph}
              </p>
            ))}
          </article>
          </FadeIn>
        </div>
      </section>

      <section className="mt-12" aria-labelledby="space-heading">
        <div className={siteContentFrame}>
        <SectionRule />

        <div className="mt-14 grid gap-16 lg:grid-cols-[1fr,1fr] lg:items-center">
          <FadeIn>
            <p id="space-heading" className="font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-muted">
              {aboutPage.space.heading}
            </p>

            <div className="mt-6 space-y-6 font-body font-light leading-[1.75] text-muted">
              {aboutPage.space.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delayMs={90}>
            <SitePhoto
              src={siteImages.studioDownwardDog}
              alt={aboutPage.space.imageAlt}
              aspect="landscape"
            />
          </FadeIn>
        </div>
        </div>
      </section>

      <section className="mt-24" aria-labelledby="philosophy-heading">
        <div className={siteContentFrame}>
        <FadeIn>
          <p id="philosophy-heading" className="font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-muted">
            Rhythm we return to
          </p>

          <div className="mt-10 divide-y divide-border border border-border bg-surface/90">
            {aboutPage.philosophy.map((item) => (
              <div key={`${item.line}-${item.counterpart}`} className="px-10 py-16 text-center lg:px-20">
                <p className="font-heading text-[clamp(1.8rem,3.4vw,2.85rem)] font-light italic text-text">{item.line}</p>
                <p className="font-heading mt-6 text-xl font-normal italic text-muted">{item.counterpart}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        </div>
      </section>

      <section className="mt-24" aria-labelledby="corporate-wellness-about">
        <div className={siteContentFrame}>
        <FadeIn className="border border-dashed border-border bg-almond px-10 py-12 sm:px-16">
          <h2 id="corporate-wellness-about" className="font-heading text-h3 font-medium text-text">
            {aboutPage.corporate.heading}
          </h2>
          <p className="mt-6 font-body font-light leading-[1.75] text-muted">{aboutPage.corporate.copy}</p>
          <Link
            href={aboutPage.corporate.link.href}
            className="mt-8 inline-flex border-b border-olive/40 pb-[3px] font-body font-light text-olive-dark transition-colors hover:border-olive"
          >
            {aboutPage.corporate.link.label}
          </Link>
        </FadeIn>
        </div>
      </section>
    </div>
  );
}
