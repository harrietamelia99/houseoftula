import { FadeIn } from "@/components/FadeIn";
import { SitePhoto } from "@/components/SitePhoto";
import { VeinDivider } from "@/components/VeinDivider";
import { aboutPage } from "@/content/about";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame, sitePageHeaderTop, siteSectionY } from "@/lib/siteLayout";

export const metadata = buildPageMeta({
  title: aboutPage.title,
  description: aboutPage.seoDescription,
  path: "/about",
});

export default function AboutPage() {
  const extras = aboutPage.extraPhotos;

  return (
    <>
      <header className={`bg-almond ${sitePageHeaderTop} pb-2`}>
        <div className={siteContentFrame}>
          <FadeIn>
            <p className="font-tag font-body uppercase tracking-[0.28em] text-muted">About</p>
            <h1 className="font-heading mt-4 text-h2 font-light text-forest">House of Tula</h1>
          </FadeIn>
        </div>
      </header>


      <section className={`bg-almond ${siteSectionY} pt-0`}>
        <div className={siteContentFrame}>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] lg:gap-16">
            <SitePhoto
              src={aboutPage.portrait.src}
              alt={aboutPage.portrait.alt}
              aspect="portrait"
              priority
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="mx-auto w-full max-w-sm lg:max-w-none"
              imgClassName="object-[center_30%]"
            />
            <FadeIn className="space-y-6 font-body font-light leading-[1.75] text-muted md:space-y-7">
              {aboutPage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      <VeinDivider />

      <section className={`bg-surface ${siteSectionY}`} aria-label="Tula means balance">
        <div className={`${siteContentFrame} text-center`}>
          <FadeIn className="mx-auto max-w-[40rem]">
            <p className="font-heading text-[clamp(1.5rem,3vw,2.15rem)] font-light text-forest">
              {aboutPage.pullQuote.kicker}
            </p>
            <p className="mt-4 font-body font-light leading-[1.75] text-muted md:mt-6">
              {aboutPage.pullQuote.line}
            </p>
          </FadeIn>
        </div>
      </section>

      {extras.length > 0 ? (
        <>
          <VeinDivider />
          <section className={`bg-almond ${siteSectionY}`} aria-label="Studio photographs">
            <div className={siteContentFrame}>
              <div
                className={
                  extras.length === 1
                    ? "mx-auto max-w-xl"
                    : "grid gap-6 sm:grid-cols-2 sm:gap-8"
                }
              >
                {extras.map((photo) => (
                  <SitePhoto
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    aspect="landscape"
                    sizes={extras.length === 1 ? "(min-width: 768px) 36rem, 100vw" : "(min-width: 640px) 45vw, 100vw"}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
