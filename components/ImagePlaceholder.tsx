type Ratio = "square" | "portrait" | "landscape" | "hero";

const ratioClass: Record<Ratio, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  hero: "aspect-[16/10]",
};

type ImagePlaceholderProps = {
  /** Descriptive caption for accessibility until real photography lands. */
  alt: string;
  aspectRatio?: Ratio;
  className?: string;
};

export function ImagePlaceholder({
  alt,
  aspectRatio = "landscape",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`border border-border bg-surface ${ratioClass[aspectRatio]} w-full ${className}`}
    />
  );
}
