import Image from "next/image";

type Aspect = "portrait" | "landscape";

const aspectClass: Record<Aspect, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

type SitePhotoProps = {
  src: string;
  alt: string;
  aspect?: Aspect;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  border?: boolean;
  sizes?: string;
};

/**
 * Responsive photography with stable crop; matches former placeholder framing.
 */
export function SitePhoto({
  src,
  alt,
  aspect = "portrait",
  className = "",
  imgClassName = "",
  priority = false,
  border = true,
  sizes = "(min-width: 1024px) 38vw, 100vw",
}: SitePhotoProps) {
  const frame = border ? "border border-border bg-surface" : "";

  return (
    <div className={`group relative ${aspectClass[aspect]} w-full overflow-hidden ${frame} ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`photo-muted object-cover object-center ${imgClassName}`.trim()}
      />
    </div>
  );
}
