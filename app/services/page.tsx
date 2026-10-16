import Link from "next/link";
import { ArchImage } from "@/components/ArchImage";
import { FadeIn } from "@/components/FadeIn";
import { PageHeader } from "@/components/PageHeader";
import { servicesPage } from "@/content/services";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame } from "@/lib/siteLayout";

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

        return (
          <section
            key={section.id}
            id={section.id}
            className={`${tinted ? "bg-surface/60" : "bg-almond"} py-20 md:py-32`}
            aria-labelledby={`${section.id}-heading`}
          >
            <div className={`${siteContentFrame} grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-28`}>
              <FadeIn className={`mx-auto w-full max-w-[22rem] md:max-w-[26rem] ${flip ? "md:order-2" : ""}`}>
                <ArchImage
                  src={section.image}
                  alt={section.imageAlt}
                  outline={!flip}
                  ratio="aspect-[4/5]"
                  sizes="(min-width: 768px) 36vw, 80vw"
                />
              </FadeIn>
              <FadeIn delayMs={80} className={flip ? "md:order-1" : ""}>
                <p className="font-heading text-[1.5rem] font-light italic text-olive">{section.number}</p>
                <h2
                  id={`${section.id}-heading`}
                  className="mt-4 font-heading text-[clamp(2.5rem,4.8vw,4.25rem)] font-light leading-[1] text-forest"
                >
                  {section.title}
                </h2>
                <div aria-hidden className="mt-8 h-px w-16 bg-olive" />
                <div className="mt-8 space-y-5 font-body text-[0.98rem] font-light leading-[1.85] text-muted">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.notes.length > 0 ? (
                  <ul className="mt-8 flex flex-wrap gap-3">
                    {section.notes.map((note) => (
                      <li
                        key={note}
                        className="rounded-full border border-forest/25 px-4 py-2 font-body text-[0.68rem] uppercase tracking-[0.2em] text-forest"
                      >
                        {note}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <Link
                  href={section.cta.href}
                  className="mt-10 inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-forest px-8 font-body text-[0.66rem] uppercase tracking-[0.26em] text-almond transition-[transform,background-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:bg-forest-slab"
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
