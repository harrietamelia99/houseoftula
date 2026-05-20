import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { siteContentFrame } from "@/lib/siteLayout";

export type ServicesBandCard = {
  title: string;
  description: string;
  href: string;
};

type ServicesBandProps = {
  monogram?: string;
  eyebrow?: string;
  heading: string;
  lead: string;
  columns: readonly ServicesBandCard[];
  detailsHref?: string;
  detailsLabel?: string;
};

export function ServicesBand({
  monogram = "T",
  eyebrow,
  heading,
  lead,
  columns,
  detailsHref = "/services",
  detailsLabel = "View the full wording",
}: ServicesBandProps) {
  return (
    <section
      aria-labelledby="services-band-heading"
      className="relative isolate overflow-hidden bg-sienna pb-section pt-section text-almond"
    >
      <div aria-hidden className="grain-sienna pointer-events-none absolute inset-0 -z-10" />

      <div className={`${siteContentFrame} text-center`}>
        {eyebrow ? (
          <p className="font-tag font-body text-[0.65rem] uppercase tracking-[0.34em] text-almond/65">{eyebrow}</p>
        ) : null}

        <div className="mx-auto mt-10 flex justify-center">
          <div
            aria-hidden
            className="flex h-16 w-16 items-center justify-center rounded-full border border-almond/35 font-heading text-3xl font-light text-almond"
          >
            {monogram}
          </div>
        </div>

        <FadeIn delayMs={20}>
          <h2 id="services-band-heading" className="font-heading mx-auto mt-10 max-w-4xl text-h2 font-light leading-tight text-almond">
            {heading}
          </h2>

          <p className="mx-auto mt-8 max-w-[40rem] font-body font-light leading-[1.8] text-almond/85">{lead}</p>
        </FadeIn>

        <div className="mt-16 grid gap-14 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-16">
          {columns.map((column, index) => (
            <FadeIn key={column.title} delayMs={40 + index * 60}>
              <article className="flex flex-col border border-almond/30 bg-almond/12 px-8 py-10 text-left lg:min-h-[320px]">
                <p className="font-tag font-body text-[0.65rem] uppercase tracking-[0.36em] text-almond/65">{column.title}</p>
                <p className="mt-8 font-body font-light leading-[1.8] text-almond/82">{column.description}</p>
                <Link
                  href={column.href}
                  className="mt-10 inline-flex rounded-full border border-almond/40 px-6 py-2 font-tag font-body text-[0.58rem] uppercase tracking-[0.32em] text-almond transition-colors hover:border-almond hover:bg-almond/18 focus-visible:bg-almond focus-visible:text-forest"
                >
                  Learn gently
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delayMs={120} className="mt-16 flex flex-col items-center gap-6">
          <Link
            href={detailsHref}
            className="inline-flex rounded-full border border-almond/65 bg-transparent px-9 py-3 font-tag font-body text-[0.65rem] uppercase tracking-[0.32em] text-almond transition-colors hover:bg-almond hover:text-forest"
          >
            {detailsLabel}
          </Link>

          <p className="max-w-xl font-body text-sm font-light text-almond/70">
            Seasonal happenings also unfurl quietly — revisit them anytime on {""}
            <Link href="/events" className="border-b border-almond/35 pb-[1px] text-almond transition-colors hover:border-almond">
              Events + pop-ups
            </Link>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
