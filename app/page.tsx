import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { HeroSection } from "@/components/HeroSection";
import { ServicesBand } from "@/components/ServicesBand";
import { StudioTriptych } from "@/components/StudioTriptych";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { homeContent } from "@/data/content";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame } from "@/lib/siteLayout";

export const metadata = buildPageMeta({
  title: "Home",
  description:
    "Sink into slower yoga, breathwork and restorative treatments nestled in Chew Magna with House of Tula.",
  path: "/",
});

export default function HomePage() {
  const pillars = homeContent.services.slice(0, 3);

  return (
    <>
      <HeroSection />

      <section className="border-border border-y bg-almond py-section" aria-label="Introducing balance">
        <div className={siteContentFrame}>
          <FadeIn className="mx-auto max-w-[48rem] text-center">
            <p className="font-heading text-[clamp(1.55rem,2.8vw,2.35rem)] font-light italic leading-snug text-forest">
              {homeContent.pullQuote}
            </p>
          </FadeIn>
        </div>
      </section>

      <StudioTriptych
        eyebrow={homeContent.aboutTeaser.studioEyebrow}
        title={homeContent.aboutTeaser.heading}
        paragraphs={homeContent.aboutTeaser.body}
        link={homeContent.aboutTeaser.link}
        imageAltWide={homeContent.aboutTeaser.imageAlt}
        imageAltNarrow={homeContent.aboutTeaser.imageAltFlank}
      />

      <ServicesBand heading={homeContent.servicesHeading} lead={homeContent.servicesBandLead} columns={pillars} />

      <TestimonialCarousel testimonials={[...homeContent.testimonials]} />

      <section className="bg-burnt-orange pb-section pt-section" aria-labelledby="pause-heading">
        <div className={siteContentFrame}>
          <FadeIn className="flex w-full flex-col items-center py-20 text-center sm:py-24">
            <h2 id="pause-heading" className="font-heading text-h2 font-light text-almond">
              {homeContent.closingCta.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-measure font-body font-light leading-[1.75] text-almond/88">
              {homeContent.closingCta.body}
            </p>

            <Link
              href={homeContent.closingCta.link.href}
              className="mt-12 inline-flex rounded-full border border-almond/75 bg-transparent px-10 py-3 font-tag font-body text-[0.65rem] uppercase tracking-[0.32em] text-almond transition-colors hover:border-almond hover:bg-almond/15"
            >
              {homeContent.closingCta.link.label}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
