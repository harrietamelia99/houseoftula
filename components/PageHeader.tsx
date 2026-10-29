import { ArchImage } from "@/components/ArchImage";
import { FadeIn } from "@/components/FadeIn";
import { siteContentFrame } from "@/lib/siteLayout";

type PageHeaderProps = {
  /** Kept for reference; not shown. */
  eyebrow?: string;
  title: string;
  /** Optional line under the title. */
  kicker?: string;
  intro?: string | readonly string[];
  image: string;
  imageAlt?: string;
  /** Use the offset outline in full-strength burnt orange. */
  strongOutline?: boolean;
  /** Max width of the photo on phones (Tailwind class). */
  mobileImageWidth?: string;
  /** Photo shape, e.g. "aspect-square". Defaults to portrait 3:4. */
  imageRatio?: string;
  /** Line the title and photo up by their centres instead of their bottoms. */
  centerAlign?: boolean;
};

/** Inner page opener: editorial title on the left, arched photograph on the right. */
export function PageHeader({
  title,
  kicker,
  intro,
  image,
  imageAlt = "",
  strongOutline = false,
  mobileImageWidth = "max-w-[19rem]",
  imageRatio,
  centerAlign = false,
}: PageHeaderProps) {
  const paragraphs = intro ? (typeof intro === "string" ? [intro] : intro) : [];
  return (
    <header className="relative overflow-hidden bg-almond pb-16 pt-14 md:pb-24 md:pt-20 lg:pb-28">
      <div className={`${siteContentFrame} grid ${centerAlign ? "items-center" : "items-end"} gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16 lg:gap-24`}>
        <FadeIn className={`order-2 md:order-1 ${centerAlign ? "" : "md:pb-6"}`}>
          <h1 className="font-heading text-[clamp(2.75rem,6vw,5rem)] font-light leading-[0.95] tracking-[-0.01em] text-forest">
            {title}
          </h1>
          {kicker ? (
            <p className="mt-5 font-heading text-[clamp(1.35rem,2.4vw,1.9rem)] font-light text-olive-dark/80">
              {kicker}
            </p>
          ) : null}
          {paragraphs.length > 0 ? (
            <div className="mt-8 max-w-[30rem] space-y-4 font-body text-[0.98rem] font-light leading-[1.85] text-muted">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          ) : null}
        </FadeIn>
        <FadeIn delayMs={80} className={`order-1 mx-auto w-full ${mobileImageWidth} md:order-2 md:max-w-none`}>
          <ArchImage
            src={image}
            alt={imageAlt}
            priority
            outline
            outlineStrong={strongOutline}
            ratio={imageRatio}
            sizes="(min-width: 768px) 36vw, 80vw"
          />
        </FadeIn>
      </div>
    </header>
  );
}
