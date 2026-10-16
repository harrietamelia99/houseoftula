import Link from "next/link";
import { ArchImage } from "@/components/ArchImage";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { servicesPage } from "@/content/services";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame } from "@/lib/siteLayout";
import { Lines } from "@/components/Lines";

export const metadata = buildPageMeta({
  title: servicesPage.title,
  description: servicesPage.seoDescription,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow={servicesPage.title}
        title={servicesPage.heading}
        kicker={servicesPage.kicker}
        intro={servicesPage.intro}
        image={servicesPage.headerImage}
      />

      {servicesPage.sections.map((section, index) => {
        const flip = index % 2 === 1;
        const tinted = index % 2 === 1;
        // Wellness at Work is the one warm Toasted Sienna band on this page.
        const warm = section.id === "wellness-at-work";

        return (
          <section
            key={section.id}
            id={section.id}
            className={`relative isolate overflow-hidden ${warm ? "bg-sienna text-almond" : tinted ? "bg-surface/60" : "bg-almond"} py-20 md:py-32`}
            aria-labelledby={`${section.id}-heading`}
          >
            <div className={`${siteContentFrame} grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-28`}>
              <FadeIn className={`mx-auto w-full max-w-[22rem] md:max-w-[26rem] ${flip ? "md:order-2" : ""}`}>
                <ArchImage
                  src={section.image}
                  alt={section.imageAlt}
                  outline={!flip && !warm}
                  ratio="aspect-[4/5]"
                  sizes="(min-width: 768px) 36vw, 80vw"
                />
              </FadeIn>
              <FadeIn delayMs={80} className={flip ? "md:order-1" : ""}>
                <h2
                  id={`${section.id}-heading`}
                  className={`font-heading text-[clamp(2.5rem,4.8vw,4.25rem)] font-light leading-[1] ${warm ? "text-almond" : "text-forest"}`}
                >
                  <Lines text={section.title} />
                </h2>
                <div aria-hidden className={`mt-8 h-px w-16 ${warm ? "bg-almond/50" : "bg-sienna"}`} />
                <div className={`mt-8 space-y-5 font-body text-[0.98rem] leading-[1.85] ${warm ? "font-normal text-almond" : "font-light text-muted"}`}>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.notes.length > 0 ? (
                  <p className={`mt-6 font-heading text-[1.2rem] font-light ${warm ? "text-almond" : "text-forest"}`}>
                    {section.notes.join(" · ")}
                  </p>
                ) : null}
                <Link
                  href={section.cta.href}
                  className={`mt-10 inline-flex min-h-[3.25rem] items-center justify-center rounded-full px-8 font-body text-[0.66rem] uppercase tracking-[0.26em] transition-[transform,background-color] duration-layout ease-out-soft hover:-translate-y-0.5 ${warm ? "bg-almond text-forest hover:bg-surface" : "bg-forest text-almond hover:bg-forest-slab"}`}
                >
                  {section.cta.label}
                </Link>
              </FadeIn>
            </div>
          </section>
        );
      })}
    </>
  );
}
