import Image from "next/image";
import Link from "next/link";
import { ArchImage } from "@/components/ArchImage";
import { Eyebrow } from "@/components/Eyebrow";
import { FadeIn } from "@/components/FadeIn";
import { HeroSection } from "@/components/HeroSection";
import { ImageBand } from "@/components/ImageBand";
import { Testimonials } from "@/components/Testimonials";
import { VeinDivider } from "@/components/VeinDivider";
import { WellnessPromo } from "@/components/WellnessPromo";
import { homeContent } from "@/content/home";
import { testimonials } from "@/content/testimonials";
import { siteImages } from "@/lib/siteImages";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame } from "@/lib/siteLayout";

export const metadata = buildPageMeta({
  title: "Home",
  description: homeContent.seoDescription,
  path: "/",
});

const textLink =
  "group inline-flex items-center gap-3 font-body text-[0.7rem] uppercase tracking-[0.28em] text-forest";

export default function HomePage() {
  const { statement, aboutTeaser, offerings, band, wellness, closingCta } = homeContent;

  return (
    <>
      <HeroSection />

      {/* Statement */}
      <section className="bg-almond pb-20 pt-6 md:pb-32 md:pt-10" aria-label={statement.kicker}>
        <FadeIn className={`${siteContentFrame} mx-auto max-w-[54rem] text-center`}>
          <Image
            src={siteImages.monogramHCircle}
            alt=""
            width={240}
            height={240}
            sizes="72px"
            className="mx-auto h-[4.5rem] w-[4.5rem] object-contain"
          />
          <p className="mt-10 font-body text-[0.68rem] uppercase tracking-[0.32em] text-muted">{statement.kicker}</p>
          <p className="mt-6 font-heading text-[clamp(1.75rem,3.6vw,3rem)] font-light leading-[1.22] text-forest">
            {statement.line}
          </p>
          <VeinDivider className="!pb-0 !pt-12" />
        </FadeIn>
      </section>

      {/* The studio */}
      <section className="relative overflow-hidden bg-almond pb-24 md:pb-36">
        <div className={`${siteContentFrame} grid items-center gap-16 md:grid-cols-2 md:gap-12 lg:gap-24`}>
          <FadeIn className="relative mx-auto w-full max-w-[26rem] pb-16 pr-10 md:max-w-none md:pb-24 md:pr-16">
            <ArchImage
              src={aboutTeaser.mainImage}
              alt={aboutTeaser.mainImageAlt}
              ratio="aspect-[3/4]"
              sizes="(min-width: 768px) 38vw, 80vw"
            />
            <div className="absolute bottom-0 right-0 w-[44%] border-[6px] border-almond md:border-[10px]">
              <ArchImage
                src={aboutTeaser.detailImage}
                alt={aboutTeaser.detailImageAlt}
                square
                ratio="aspect-[4/5]"
                sizes="(min-width: 768px) 18vw, 40vw"
              />
            </div>
          </FadeIn>
          <FadeIn delayMs={80} className="max-md:text-center">
            <Eyebrow className="max-md:justify-center">{aboutTeaser.eyebrow}</Eyebrow>
            <h2 className="mt-7 font-heading text-[clamp(2.4rem,4.6vw,4rem)] font-light leading-[1.02] text-forest">
              {aboutTeaser.heading}
            </h2>
            <div className="mt-8 space-y-5 font-body text-[0.98rem] font-light leading-[1.85] text-muted md:max-w-[28rem]">
              {aboutTeaser.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link href={aboutTeaser.link.href} className={`${textLink} mt-10`}>
              <span className="border-b border-forest/30 pb-1 transition-colors duration-layout group-hover:border-forest">
                {aboutTeaser.link.label}
              </span>
              <span aria-hidden className="transition-transform duration-layout group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Offerings: numbered editorial list */}
      <section className="bg-surface/60 py-24 md:py-36" aria-labelledby="offerings-heading">
        <div className={siteContentFrame}>
          <FadeIn className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end md:gap-16">
            <div>
              <Eyebrow>{offerings.eyebrow}</Eyebrow>
              <h2
                id="offerings-heading"
                className="mt-7 font-heading text-[clamp(2.4rem,4.6vw,4rem)] font-light leading-[1.02] text-forest"
              >
                {offerings.heading}
              </h2>
            </div>
            <p className="font-body text-[0.98rem] font-light leading-[1.85] text-muted md:pb-2">{offerings.lead}</p>
          </FadeIn>

          <ol className="mt-16 border-t border-forest/20 md:mt-24">
            {offerings.items.map((item, index) => (
              <li key={item.title} className="border-b border-forest/20">
                <FadeIn delayMs={index * 40}>
                  <Link
                    href={item.href}
                    className="group grid grid-cols-[3rem_1fr] items-center gap-x-4 gap-y-4 py-8 md:grid-cols-[5rem_1.1fr_1.4fr_7rem] md:gap-x-10 md:py-10"
                  >
                    <span className="self-start pt-2 font-heading text-[1.35rem] font-light italic text-olive md:self-center md:pt-0">
                      {item.number}
                    </span>
                    <h3 className="font-heading text-[clamp(1.9rem,3.2vw,2.75rem)] font-light leading-[1.05] text-forest transition-transform duration-calm ease-out-soft group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="col-start-2 font-body text-[0.95rem] font-light leading-[1.8] text-muted md:col-start-auto">
                      {item.description}
                    </p>
                    <div className="relative col-start-2 hidden aspect-[4/5] w-28 overflow-hidden rounded-t-[999px] md:col-start-auto md:block">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="112px"
                        className="photo-soft object-cover transition-transform duration-calm ease-out-soft group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ol>

          <FadeIn className="mt-12 text-center md:text-right">
            <Link href="/services" className={textLink}>
              <span className="border-b border-forest/30 pb-1 transition-colors duration-layout group-hover:border-forest">
                Explore all services
              </span>
              <span aria-hidden className="transition-transform duration-layout group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <ImageBand src={band.image} quote={band.quote} attribution={band.attribution} />

      {/* Wellness at Work feature */}
      <section className="bg-almond py-24 md:py-36" aria-labelledby="wellness-heading">
        <div className={`${siteContentFrame} grid items-center gap-14 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24`}>
          <FadeIn>
            <ArchImage
              src={wellness.image}
              alt={wellness.imageAlt}
              square
              ratio="aspect-[3/2]"
              sizes="(min-width: 768px) 52vw, 100vw"
            />
          </FadeIn>
          <FadeIn delayMs={80} className="max-md:text-center">
            <Eyebrow className="max-md:justify-center">{wellness.eyebrow}</Eyebrow>
            <h2
              id="wellness-heading"
              className="mt-7 font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.05] text-forest"
            >
              {wellness.heading}
            </h2>
            <p className="mt-7 font-body text-[0.98rem] font-light leading-[1.85] text-muted">{wellness.body}</p>
            <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row md:items-center">
              <Link
                href={wellness.cta.href}
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-forest px-8 font-body text-[0.66rem] uppercase tracking-[0.26em] text-almond transition-[transform,background-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:bg-forest-slab"
              >
                {wellness.cta.label}
              </Link>
              <Link href={wellness.secondary.href} className={textLink}>
                <span className="border-b border-forest/30 pb-1 transition-colors duration-layout group-hover:border-forest">
                  {wellness.secondary.label}
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {testimonials.length > 0 ? <Testimonials testimonials={testimonials} /> : null}

      <WellnessPromo />

      {/* Closing */}
      <section className="relative overflow-hidden bg-forest-slab py-24 text-almond md:py-36" aria-labelledby="pause-heading">
        <div aria-hidden className="grain-forest pointer-events-none absolute inset-0" />
        <FadeIn className={`${siteContentFrame} relative text-center`}>
          <Image
            src={siteImages.monogramH}
            alt=""
            width={467}
            height={364}
            sizes="64px"
            className="mx-auto h-auto w-14 opacity-80"
          />
          <h2 id="pause-heading" className="mt-10 font-heading text-[clamp(2.75rem,6vw,5rem)] font-light italic leading-none">
            {closingCta.headline}
          </h2>
          <p className="mx-auto mt-7 max-w-[30rem] font-body text-[0.98rem] font-light leading-[1.85] text-almond/75">
            {closingCta.body}
          </p>
          <Link
            href={closingCta.link.href}
            className="mt-11 inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-almond/50 px-10 font-body text-[0.7rem] uppercase tracking-[0.28em] text-almond transition-[transform,background-color,border-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:border-almond hover:bg-almond hover:text-forest"
          >
            {closingCta.link.label}
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
