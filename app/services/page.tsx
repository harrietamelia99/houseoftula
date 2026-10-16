import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { VeinDivider } from "@/components/VeinDivider";
import { servicesPage } from "@/content/services";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame, sitePageHeaderTop, siteSectionY } from "@/lib/siteLayout";

export const metadata = buildPageMeta({
  title: servicesPage.title,
  description: servicesPage.seoDescription,
  path: "/services",
});

const textCta =
  "tap-target mt-8 inline-flex min-h-[3rem] items-center justify-center rounded-full border border-forest/30 bg-forest px-8 py-3 font-tag font-body text-[0.65rem] uppercase tracking-[0.32em] text-almond transition-[transform,background-color,border-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:border-sienna hover:bg-sienna hover:text-almond";

export default function ServicesPage() {
  const { yoga, breath, treatments, wellnessAtWork } = servicesPage;

  return (
    <>
      <header className={`bg-almond ${sitePageHeaderTop} pb-2`}>
        <div className={siteContentFrame}>
          <FadeIn className="max-w-3xl">
            <p className="font-tag font-body uppercase tracking-[0.28em] text-muted">Services</p>
            <h1 className="font-heading mt-4 text-h2 font-light text-forest">What we offer</h1>
            <p className="mt-6 max-w-measure font-body font-light leading-[1.75] text-muted">{servicesPage.intro}</p>
          </FadeIn>
        </div>
      </header>


      <section id={yoga.id} className={`bg-almond ${siteSectionY} pt-0`}>
        <div className={siteContentFrame}>
          <FadeIn className="max-w-3xl">
            <h2 className="font-heading text-h2 font-light text-forest">{yoga.title}</h2>
            <p className="mt-6 max-w-measure font-body font-light leading-[1.75] text-muted">{yoga.body}</p>
            <Link href={yoga.cta.href} className={textCta}>
              {yoga.cta.label}
            </Link>
          </FadeIn>
        </div>
      </section>


      <section id={breath.id} className={`bg-surface ${siteSectionY}`}>
        <div className={siteContentFrame}>
          <FadeIn className="max-w-3xl">
            <h2 className="font-heading text-h2 font-light text-forest">{breath.title}</h2>
            <p className="mt-6 max-w-measure font-body font-light leading-[1.75] text-muted">{breath.body}</p>
            <ul className="mt-6 space-y-2 font-body font-light text-text">
              {breath.offerings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <VeinDivider />

      <section id={treatments.id} className={`bg-almond ${siteSectionY}`}>
        <div className={siteContentFrame}>
          <FadeIn className="max-w-3xl">
            <h2 className="font-heading text-h2 font-light text-forest">{treatments.title}</h2>
            <p className="mt-6 font-heading text-h3 font-light italic text-forest">{treatments.intro}</p>
            <div className="mt-10 space-y-10">
              <div>
                <h3 className="font-heading text-h3 font-light text-text">{treatments.facials.title}</h3>
                <p className="mt-4 max-w-measure font-body font-light leading-[1.75] text-muted">
                  {treatments.facials.body}
                </p>
              </div>
              <div>
                <h3 className="font-heading text-h3 font-light text-text">{treatments.massage.title}</h3>
                <p className="mt-4 max-w-measure font-body font-light leading-[1.75] text-muted">
                  {treatments.massage.body}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <VeinDivider />

      <section id={wellnessAtWork.id} className={`bg-surface ${siteSectionY}`}>
        <div className={siteContentFrame}>
          <FadeIn className="max-w-3xl">
            <h2 className="font-heading text-h2 font-light text-forest">{wellnessAtWork.title}</h2>
            <p className="mt-6 max-w-measure font-body font-light leading-[1.75] text-muted">{wellnessAtWork.body}</p>
            <Link href={wellnessAtWork.cta.href} className={textCta}>
              {wellnessAtWork.cta.label}
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
