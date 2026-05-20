import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SitePhoto } from "@/components/SitePhoto";
import { siteImages } from "@/lib/siteImages";
import { siteContentFrame } from "@/lib/siteLayout";

type StudioTriptychProps = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  link: { label: string; href: string };
  imageAltWide: string;
  imageAltNarrow: string;
};

export function StudioTriptych({
  eyebrow,
  title,
  paragraphs,
  link,
  imageAltWide,
  imageAltNarrow,
}: StudioTriptychProps) {
  return (
    <section className="border-border border-t bg-almond py-section" aria-labelledby="studio-intro-heading">
      <div className={siteContentFrame}>
        <div className="flex flex-col gap-14 lg:flex-row lg:items-stretch lg:gap-16">
        <FadeIn className="hidden min-w-0 shrink-0 lg:flex lg:flex-[0.92] lg:self-stretch">
          <SitePhoto
            src={siteImages.studioStretchSide}
            alt={imageAltWide}
            aspect="portrait"
            className="max-h-[640px] w-full"
          />
        </FadeIn>

        <div className="flex min-w-0 flex-[1_1_auto] flex-col items-center px-0 text-center lg:max-w-[31rem] lg:shrink-0 lg:items-start lg:self-stretch lg:justify-center lg:text-left">
          <FadeIn delayMs={30}>
            <p className="font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-muted">{eyebrow}</p>
            <h2 id="studio-intro-heading" className="font-heading mt-6 text-h2 font-light leading-tight text-forest">
              {title}
            </h2>

            <div className="mt-8 space-y-6 font-body font-light leading-[1.78] text-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Link
              href={link.href}
              className="mt-10 inline-flex rounded-full border border-forest/30 bg-forest px-8 py-3 font-tag font-body text-[0.65rem] uppercase tracking-[0.32em] text-almond transition-colors hover:border-sienna hover:bg-sienna hover:text-almond focus-visible:border-sienna focus-visible:bg-sienna"
            >
              {link.label}
            </Link>

            <div className="mt-12 grid w-full gap-6 sm:grid-cols-2 lg:hidden">
              <SitePhoto src={siteImages.classThreeWarriors} alt={imageAltWide} aspect="portrait" />
              <SitePhoto src={siteImages.detailMatStretch} alt={imageAltNarrow} aspect="portrait" />
            </div>
          </FadeIn>
        </div>

        <FadeIn delayMs={60} className="hidden min-w-0 shrink-0 lg:flex lg:flex-[0.92] lg:self-stretch">
          <SitePhoto
            src={siteImages.studioGroupMermaid}
            alt={imageAltNarrow}
            aspect="portrait"
            className="max-h-[640px] w-full"
          />
        </FadeIn>
      </div>
      </div>
    </section>
  );
}
