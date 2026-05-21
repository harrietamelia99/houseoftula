import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionRule } from "@/components/SectionRule";
import { eventsPage } from "@/data/content";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame } from "@/lib/siteLayout";

export const metadata = buildPageMeta({
  title: "Events + Pop-ups",
  description: eventsPage.seoDescription,
  path: "/events",
});

export default function EventsPage() {
  const happenings = [...eventsPage.events];

  return (
    <div className="bg-almond pb-section">
      <header className="pt-24 sm:pt-28">
        <div className={siteContentFrame}>
          <FadeIn>
            <h1 className="font-heading text-h2 font-light text-text">{eventsPage.title}</h1>

            <p className="mt-10 max-w-measure font-body font-light leading-[1.75] text-muted">{eventsPage.intro}</p>

            <SectionRule className="mt-12" />
          </FadeIn>
        </div>
      </header>

      <section className="pt-16">
        <div className={siteContentFrame}>
        {happenings.length === 0 ? (
          <FadeIn className="border border-border bg-surface/90 px-10 py-20 text-center sm:px-20">
            <p className="font-heading text-h3 font-normal italic text-olive-dark">{eventsPage.emptyState.title}</p>
            <p className="mx-auto mt-8 max-w-[36rem] font-body font-light leading-[1.75] text-muted">
              {eventsPage.emptyState.subtitle}
            </p>
            <Link
              href={eventsPage.emptyState.link.href}
              className="mt-10 inline-flex border-b border-olive/40 pb-[3px] font-body font-light text-olive-dark transition-colors hover:border-olive"
            >
              {eventsPage.emptyState.link.label}
            </Link>
          </FadeIn>
        ) : (
          <div className="space-y-10">
            {happenings.map((eventItem, idx) => (
              <FadeIn key={`${eventItem.title}-${idx}`}>
                <article className="border border-border px-10 py-12 sm:px-16">
                  <p className="font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-muted">{eventItem.date}</p>

                  <h2 className="font-heading mt-6 text-h3 font-medium text-text">{eventItem.title}</h2>
                  <p className="mt-6 font-body font-light leading-[1.75] text-muted">{eventItem.description}</p>

                  {eventItem.ctaHref ? (
                    <Link
                      href={eventItem.ctaHref}
                      className="mt-10 inline-flex border-b border-olive/40 pb-[3px] font-body font-light text-olive-dark transition-colors hover:border-olive"
                    >
                      {eventItem.ctaLabel ?? "Learn more softly"}
                    </Link>
                  ) : null}
                </article>
              </FadeIn>
            ))}
          </div>
        )}
        </div>
      </section>
    </div>
  );
}
