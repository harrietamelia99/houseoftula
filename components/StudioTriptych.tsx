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
      <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
        <FadeIn className="hidden min-h-0 min-w-0 shrink-0 lg:flex lg:flex-1 lg:self-stretch">
          <SitePhoto
            src={siteImages.studioStretchSide}
            alt={imageAltWide}
            aspect="portrait"
            border={false}
            className="max-h-[640px] w-full border-r border-border bg-surface lg:max-h-none lg:rounded-none lg:border-l-0"
          />
        </FadeIn>

        <div className="flex min-w-0 flex-[1_1_auto] flex-col items-center py-10 text-center max-lg:px-[max(1rem,env(safe-area-inset-left))] max-lg:pr-[max(1rem,env(safe-area-inset-right))] lg:max-w-[min(100%,31rem)] lg:flex-none lg:shrink-0 lg:items-start lg:self-stretch lg:justify-center lg:px-10 lg:py-0 lg:text-left xl:px-12">
          <FadeIn delayMs={30} className="flex w-full flex-col items-center max-lg:mx-auto max-lg:max-w-[40rem]">
            <p className="font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-muted">{eyebrow}</p>
            <h2 id="studio-intro-heading" className="font-heading mt-4 text-h2 font-light text-forest md:mt-6">
              {title}
            </h2>

            <div className="mt-6 space-y-5 font-body font-light leading-[1.75] text-muted md:mt-8 md:space-y-6 md:leading-[1.78]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Link
              href={link.href}
              className="tap-target mt-8 inline-flex min-h-[3rem] w-full max-w-[min(100%,18rem)] items-center justify-center rounded-full border border-forest/30 bg-forest px-8 py-3 font-tag font-body text-[0.65rem] uppercase tracking-[0.32em] text-almond transition-[transform,background-color,border-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:border-sienna hover:bg-sienna hover:text-almond focus-visible:border-sienna focus-visible:bg-sienna motion-reduce:hover:translate-y-0 md:mt-10 lg:w-auto"
            >
              {link.label}
            </Link>

            <div className="mt-8 grid w-full gap-4 sm:grid-cols-2 sm:gap-5 lg:hidden">
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
