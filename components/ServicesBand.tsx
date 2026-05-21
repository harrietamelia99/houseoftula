import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { siteImages } from "@/lib/siteImages";
import { siteContentFrame } from "@/lib/siteLayout";

export type ServicesBandCard = {
  title: string;
  description: string;
  href: string;
};

type ServicesBandProps = {
  eyebrow?: string;
  heading: string;
  lead: string;
  columns: readonly ServicesBandCard[];
  detailsHref?: string;
  detailsLabel?: string;
};

export function ServicesBand({
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
            className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full border border-almond sm:h-20 sm:w-20"
          >
            <Image
              src={siteImages.monogramH}
              alt=""
              width={468}
              height={363}
              sizes="48px"
              className="h-9 w-auto max-w-[2.65rem] object-contain sm:h-10 sm:max-w-[2.85rem]"
            />
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
            <FadeIn key={column.title} delayMs={40 + index * 60} className="h-full">
              <article className="flex h-full min-h-[320px] flex-col bg-almond px-8 py-10 text-left transition-[transform,box-shadow] duration-layout ease-out-soft will-change-transform hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-20px_rgba(73,74,65,0.22)] motion-reduce:hover:translate-y-0">
                <p className="font-tag font-body text-[0.65rem] uppercase tracking-[0.36em] text-muted">{column.title}</p>
                <p className="mt-8 flex-1 font-body font-light leading-[1.8] text-text">{column.description}</p>
                <Link
                  href={column.href}
                  className="mt-auto pt-10 inline-flex font-tag font-body text-[0.58rem] uppercase tracking-[0.32em] text-forest transition-[color,opacity] duration-layout ease-out-soft hover:text-text hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/25 focus-visible:ring-offset-2 focus-visible:ring-offset-almond"
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
            className="inline-flex rounded-full border border-almond/65 bg-transparent px-9 py-3 font-tag font-body text-[0.65rem] uppercase tracking-[0.32em] text-almond transition-[transform,background-color,border-color,color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:bg-almond hover:text-forest active:translate-y-0 motion-reduce:hover:translate-y-0"
          >
            {detailsLabel}
          </Link>

          <p className="max-w-xl font-body text-sm font-light text-almond/70">
            Seasonal happenings also unfurl quietly  -  revisit them anytime on {""}
            <Link href="/events" className="border-b border-almond/35 pb-[1px] text-almond transition-colors duration-layout ease-out-soft hover:border-almond hover:text-almond">
              Events + pop-ups
            </Link>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
