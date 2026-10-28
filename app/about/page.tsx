import Link from "next/link";
import { ArchImage } from "@/components/ArchImage";
import { FadeIn } from "@/components/FadeIn";
import { ImageBand } from "@/components/ImageBand";
import { PageHeader } from "@/components/PageHeader";
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
      <PageHeader
        eyebrow={aboutPage.title}
        title={aboutPage.heading}
        kicker={aboutPage.kicker}
        intro={aboutPage.headerIntro}
        image={aboutPage.portrait.src}
        imageAlt={aboutPage.portrait.alt}
        frame="thin"
        mobileImageWidth="max-w-[14rem]"
      />

      <section className="bg-almond pb-24 md:pb-36" aria-label="Emma's story">
        <div className={`${siteContentFrame} mx-auto max-w-[46rem]`}>
          <FadeIn>
            <p className="font-heading text-[clamp(1.45rem,2.2vw,1.8rem)] font-light leading-[1.45] text-text">{first}</p>
            <div className="mt-10 space-y-6 font-body text-[0.98rem] font-light leading-[1.9] text-muted">
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
        <section className="bg-almond py-20 md:py-32" aria-label="Studio photographs">
          <div
            className={`${siteContentFrame} ${extras.length === 1 ? "mx-auto max-w-md" : "grid gap-8 sm:grid-cols-2 md:gap-12"}`}
          >
            {extras.map((photo, index) => (
              <FadeIn key={photo.src} delayMs={index * 60}>
                <ArchImage
                  src={photo.src}
                  alt={photo.alt}
                  square={index % 2 === 1}
                  ratio="aspect-[4/5]"
                  sizes={extras.length === 1 ? "(min-width: 768px) 36rem, 100vw" : "(min-width: 640px) 45vw, 100vw"}
                />
              </FadeIn>
            ))}
          </div>
        </section>
      ) : null}

      <section className="bg-almond py-20 text-center md:py-28">
        <FadeIn className={siteContentFrame}>
          <VeinDivider className="!pt-0" />
          <p className="font-heading text-[clamp(1.9rem,3.4vw,2.8rem)] font-light text-forest">
            <Lines text={["Come and find", "a little stillness."]} />
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-sienna px-9 font-body text-[0.7rem] uppercase tracking-[0.28em] text-almond transition-[transform,background-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:bg-sienna-deep"
            >
              Explore services
            </Link>
            <Link
              href="/contact"
              className="border-b border-forest/30 pb-1 font-body text-[0.7rem] uppercase tracking-[0.28em] text-forest transition-colors duration-layout hover:border-forest"
            >
              Get in touch
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
