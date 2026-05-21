import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { HeroSection } from "@/components/HeroSection";
import { ServicesBand } from "@/components/ServicesBand";
import { StudioTriptych } from "@/components/StudioTriptych";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { homeContent } from "@/data/content";
import { buildPageMeta } from "@/lib/metadata";
import { siteImages } from "@/lib/siteImages";
import { siteContentFrame, siteSectionY } from "@/lib/siteLayout";

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

      <section className={`bg-surface ${siteSectionY}`} aria-label="Introducing balance">
        <div className={siteContentFrame}>
          <FadeIn className="mx-auto max-w-[48rem] text-center">
            <div className="mx-auto mb-6 flex justify-center md:mb-10" aria-hidden>
              <Image
                src={siteImages.monogramHCircle}
                alt=""
                width={240}
                height={240}
                sizes="80px"
                className="h-[4.5rem] w-[4.5rem] object-contain sm:h-20 sm:w-20"
              />
            </div>
            <p className="font-heading text-[clamp(1.35rem,5vw,2.35rem)] font-light leading-[1.08] text-forest">
              {homeContent.pullQuoteLines.map((line, index) => (
                <span key={line} className={index > 0 ? "block" : undefined}>
                  {line}
                </span>
              ))}
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

      <section className={`bg-surface ${siteSectionY}`} aria-labelledby="pause-heading">
        <div className={siteContentFrame}>
          <FadeIn className="flex w-full flex-col items-center text-center">
            <h2 id="pause-heading" className="font-heading text-h2 font-light text-text">
              {homeContent.closingCta.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-measure font-body font-light leading-[1.75] text-muted md:mt-6">
              {homeContent.closingCta.body}
            </p>

            <Link
              href={homeContent.closingCta.link.href}
              className="tap-target mt-7 inline-flex min-h-[3rem] items-center justify-center rounded-full border border-forest/35 bg-transparent px-10 py-3 font-tag font-body text-[0.65rem] uppercase tracking-[0.32em] text-forest transition-[transform,background-color,border-color,color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:border-forest hover:bg-almond active:translate-y-0 motion-reduce:hover:translate-y-0 md:mt-10"
            >
              {homeContent.closingCta.link.label}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
