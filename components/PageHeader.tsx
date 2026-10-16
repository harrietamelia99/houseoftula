import { ArchImage } from "@/components/ArchImage";
import { FadeIn } from "@/components/FadeIn";
import { siteContentFrame } from "@/lib/siteLayout";

type PageHeaderProps = {
  /** Kept for reference; not shown. */
  eyebrow?: string;
  title: string;
  /** Optional line under the title. */
  kicker?: string;
  intro?: string;
  image: string;
  imageAlt?: string;
};

/** Inner page opener: editorial title on the left, arched photograph on the right. */
export function PageHeader({ title, kicker, intro, image, imageAlt = "" }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-almond pb-16 pt-14 md:pb-24 md:pt-20 lg:pb-28">
      <div className={`${siteContentFrame} grid items-end gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16 lg:gap-24`}>
        <FadeIn className="order-2 md:order-1 md:pb-6">
          <h1 className="font-heading text-[clamp(2.75rem,6vw,5rem)] font-light leading-[0.95] tracking-[-0.01em] text-forest">
            {title}
          </h1>
          {kicker ? (
            <p className="mt-5 font-heading text-[clamp(1.35rem,2.4vw,1.9rem)] font-light text-olive-dark/80">
              {kicker}
            </p>
          ) : null}
          {intro ? (
            <p className="mt-8 max-w-[30rem] font-body text-[0.98rem] font-light leading-[1.85] text-muted">{intro}</p>
          ) : null}
        </FadeIn>
        <FadeIn delayMs={80} className="order-1 mx-auto w-full max-w-[19rem] md:order-2 md:max-w-none">
          <ArchImage src={image} alt={imageAlt} priority outline sizes="(min-width: 768px) 36vw, 80vw" />
        </FadeIn>
      </div>
    </header>
  );
}
