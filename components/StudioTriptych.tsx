import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { SitePhoto } from "@/components/SitePhoto";
import { siteImages } from "@/lib/siteImages";

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
    <section
      className="bg-almond pb-0 pt-0"
      aria-labelledby="studio-intro-heading"
    >
      <div className="flex flex-col gap-14 lg:flex-row lg:items-stretch lg:gap-0">
        <FadeIn className="hidden min-h-0 min-w-0 shrink-0 lg:flex lg:flex-1 lg:self-stretch">
          <SitePhoto
            src={siteImages.studioStretchSide}
            alt={imageAltWide}
            aspect="portrait"
            border={false}
            className="max-h-[640px] w-full border-r border-border bg-surface lg:max-h-none lg:rounded-none lg:border-l-0"
          />
        </FadeIn>

        <div className="flex min-w-0 flex-[1_1_auto] flex-col items-center px-gutter text-center lg:max-w-[min(100%,31rem)] lg:flex-none lg:shrink-0 lg:items-start lg:self-stretch lg:justify-center lg:px-10 lg:text-left xl:px-12">
          <FadeIn delayMs={30}>
            <p className="font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-muted">{eyebrow}</p>
            <h2 id="studio-intro-heading" className="font-heading mt-6 text-h2 font-light text-forest">
              {title}
            </h2>

            <div className="mt-8 space-y-6 font-body font-light leading-[1.78] text-muted">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Link
              href={link.href}
              className="mt-10 inline-flex rounded-full border border-forest/30 bg-forest px-8 py-3 font-tag font-body text-[0.65rem] uppercase tracking-[0.32em] text-almond transition-[transform,background-color,border-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:border-sienna hover:bg-sienna hover:text-almond focus-visible:border-sienna focus-visible:bg-sienna motion-reduce:hover:translate-y-0"
            >
              {link.label}
            </Link>

            <div className="mt-8 grid w-full gap-6 sm:grid-cols-2 lg:hidden">
              <SitePhoto src={siteImages.classThreeWarriors} alt={imageAltWide} aspect="portrait" />
              <SitePhoto src={siteImages.detailMatStretch} alt={imageAltNarrow} aspect="portrait" />
            </div>
          </FadeIn>
        </div>

        <FadeIn delayMs={60} className="hidden min-h-0 min-w-0 shrink-0 lg:flex lg:flex-1 lg:self-stretch">
          <SitePhoto
            src={siteImages.studioGroupMermaid}
            alt={imageAltNarrow}
            aspect="portrait"
            border={false}
            className="max-h-[640px] w-full border-l border-border bg-surface lg:max-h-none lg:rounded-none lg:border-r-0"
          />
        </FadeIn>
      </div>
    </section>
  );
}
