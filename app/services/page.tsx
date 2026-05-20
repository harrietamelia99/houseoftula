import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionRule } from "@/components/SectionRule";
import { servicesPage } from "@/data/content";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame } from "@/lib/siteLayout";

function joinNaturally(items: readonly string[]) {
  if (!items.length) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  const last = items[items.length - 1];
  return `${items.slice(0, -1).join(", ")} and ${last}`;
}

export const metadata = buildPageMeta({
  title: "Services",
  description: servicesPage.seoDescription,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="bg-almond pb-section">
      <header className="pt-24 sm:pt-28">
        <div className={siteContentFrame}>
          <FadeIn>
            <h1 className="font-heading text-h2 font-light text-text">{servicesPage.title}</h1>

            <p className="mt-10 max-w-measure font-body font-light leading-[1.75] text-muted">
              {servicesPage.intro}
            </p>

            <SectionRule className="mt-12" />

            <p className="mt-12 max-w-[48rem] font-body text-sm font-light italic text-muted">{servicesPage.enquiryNote}</p>
          </FadeIn>
        </div>
      </header>

      <section className="mt-16" aria-labelledby="services-list-heading">
        <div className={`${siteContentFrame} flex flex-col`}>
        <span id="services-list-heading" className="sr-only">
          Offerings curated by Emma
        </span>

        {servicesPage.categories.map((category, idx) => (
          <FadeIn key={category.id} delayMs={Math.min(idx * 60, 240)}>
            <article id={category.id} className="border-t border-border py-14 first:border-t-0 lg:grid lg:grid-cols-[0.82fr_1fr] lg:gap-14 lg:py-20">
              <div>
                <h2 className="font-heading text-h3 font-medium text-text">{category.title}</h2>
              </div>
              <div className="mt-8 lg:mt-0">
                <p className="font-body font-light leading-[1.75] text-muted">{category.body}</p>
                <p className="mt-8 font-body font-light italic text-muted border-l border-border pl-6">{`Current focal points weave between ${joinNaturally(category.services)}, each unfolded at a humane pace.`}</p>
              </div>
            </article>
          </FadeIn>
        ))}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="services-cta-heading">
        <div className={siteContentFrame}>
        <FadeIn className="border border-border bg-surface/90 px-10 py-16 text-center sm:px-20">
          <h2 id="services-cta-heading" className="font-heading text-h2 font-light text-text">{servicesPage.cta.headline}</h2>

          <p className="mx-auto mt-6 max-w-measure font-body font-light text-muted">{servicesPage.cta.body}</p>

          <Link
            href={servicesPage.cta.link.href}
            className="mt-10 inline-flex border-b border-olive/50 pb-[3px] font-body font-light text-olive transition-colors hover:border-olive-dark hover:text-text"
          >
            {servicesPage.cta.link.label}
          </Link>
        </FadeIn>
        </div>
      </section>
    </div>
  );
}
