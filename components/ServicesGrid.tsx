import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SectionRule } from "@/components/SectionRule";
import { siteContentFrame, siteSectionY } from "@/lib/siteLayout";

export type ServicesGridCard = {
  title: string;
  description: string;
  href: string;
};

type ServicesGridProps = {
  eyebrow?: string;
  heading: string;
  intro: string;
  services: readonly ServicesGridCard[];
};

export function ServicesGrid({ eyebrow = "Offering", heading, intro, services }: ServicesGridProps) {
  return (
    <section className={`bg-almond ${siteSectionY}`}>
      <div className={siteContentFrame}>
        <FadeIn className="max-w-xl">
          <p className="font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-muted">
            {eyebrow}
          </p>
          <h2 className="font-heading mt-6 max-w-4xl text-h2 font-light text-text">
            {heading}
          </h2>
          <p className="mt-6 max-w-measure font-body font-light leading-[1.7] text-muted">
            {intro}
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.title} delayMs={90 * index} className="flex flex-col border border-border bg-surface/60 px-8 py-10 transition-[transform,box-shadow,background-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:bg-surface hover:shadow-[0_16px_40px_-24px_rgba(73,74,65,0.15)] motion-reduce:hover:translate-y-0">
              <h3 className="font-heading text-h3 font-medium text-text">{service.title}</h3>
              <p className="mt-6 font-body font-light leading-[1.7] text-muted">
                {service.description}
              </p>

              <div className="mt-10 mt-auto pt-10">
                <SectionRule />
                <Link
                  href={service.href}
                  className="inline-flex mt-8 border-b border-transparent pb-[2px] font-body font-light text-olive transition-[border-color,color] duration-layout ease-out-soft hover:border-olive"
                >
                  Read more softly
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delayMs={120} className="mt-16">
          <Link
            href="/services"
            className="border-b border-olive/40 pb-[2px] font-body font-light text-olive-dark transition-[border-color,color] duration-layout ease-out-soft hover:border-olive"
          >
            View the fuller services wording
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
