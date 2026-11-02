import Link from "next/link";
import { ArchImage } from "@/components/ArchImage";
import { FadeIn } from "@/components/FadeIn";
import { ImageBand } from "@/components/ImageBand";
import { VeinDivider } from "@/components/VeinDivider";
import { aboutPage } from "@/content/about";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame } from "@/lib/siteLayout";
import { Lines } from "@/components/Lines";

export const metadata = buildPageMeta({
  title: aboutPage.title,
  description: aboutPage.seoDescription,
  path: "/about",
});

export default function AboutPage() {
  const extras = aboutPage.extraPhotos;
  const [first, ...rest] = aboutPage.paragraphs;

  return (
    <>
      {/* Header: portrait, with "Meet Emma" sitting just above the start of her story. */}
      <header className="relative overflow-hidden bg-almond pb-12 pt-14 md:pb-16 md:pt-20">
        <div className={`${siteContentFrame} grid items-end gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16 lg:gap-24`}>
          <FadeIn className="order-2 md:order-1 md:pb-6">
            <h1 className="font-heading text-[clamp(2.2rem,3.6vw,3.25rem)] font-light leading-[1] text-forest">
              {aboutPage.heading}
            </h1>
            <p className="mt-6 font-heading text-[clamp(1.45rem,2.2vw,1.8rem)] font-light leading-[1.45] text-text">{first}</p>
          </FadeIn>
          <FadeIn delayMs={80} className="order-1 mx-auto w-full max-w-[14rem] md:order-2 md:max-w-none">
            <ArchImage
              src={aboutPage.portrait.src}
              alt={aboutPage.portrait.alt}
              priority
              outline
              outlineStrong
              sizes="(min-width: 768px) 36vw, 80vw"
            />
          </FadeIn>
        </div>
      </header>

      <section className="bg-almond pb-20 md:pb-28" aria-label="Emma's story">
        <div className={`${siteContentFrame} mx-auto max-w-[46rem]`}>
          <FadeIn>
            <div className="space-y-6 font-body text-[0.98rem] font-light leading-[1.9] text-muted">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-12 font-heading text-[1.6rem] font-light italic text-olive-dark">Emma</p>
          </FadeIn>
        </div>
      </section>

      <ImageBand src={aboutPage.band.image} quote={aboutPage.band.quote} attribution="Emma Hasell" />

      {extras.length > 0 ? (
        <section className="bg-almond py-20 md:py-28" aria-label="Studio photographs">
          <div
            className={`${siteContentFrame} ${extras.length === 1 ? "mx-auto max-w-[19rem] md:max-w-[22rem]" : "grid gap-8 sm:grid-cols-2 md:gap-12"}`}
          >
            {extras.map((photo, index) => (
              <FadeIn key={photo.src} delayMs={index * 60}>
                <ArchImage
                  src={photo.src}
                  alt={photo.alt}
                  square={index % 2 === 1}
                  ratio="aspect-[4/5]"
                  sizes={extras.length === 1 ? "(min-width: 768px) 22rem, 80vw" : "(min-width: 640px) 45vw, 100vw"}
                />
              </FadeIn>
            ))}
          </div>
        </section>
      ) : null}

      <section className="bg-almond pb-20 pt-4 text-center md:pb-28 md:pt-8">
        <FadeIn className={siteContentFrame}>
          <VeinDivider className="!pt-0" />
          <p className="font-heading text-[clamp(1.9rem,3.4vw,2.8rem)] font-light text-forest">
            <Lines text={["A return to your body,", "your breath, yourself."]} />
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-sienna px-9 font-body text-[0.7rem] uppercase tracking-[0.28em] text-almond transition-[transform,background-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:bg-sienna-deep"
            >
              Explore services
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
