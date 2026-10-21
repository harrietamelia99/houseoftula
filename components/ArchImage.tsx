import Image from "next/image";

type ArchImageProps = {
  src: string;
  alt: string;
  /** Tailwind aspect class, e.g. "aspect-[3/4]". */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  /** Thin offset arch outline behind the photo, echoing the studio door. */
  outline?: boolean;
  /** Plain rectangle instead of an arch. */
  square?: boolean;
};

/**
 * The House of Tula photo frame: a soft arch taken from the shape of Emma's studio doors.
 */
export function ArchImage({
  src,
  alt,
  ratio = "aspect-[3/4]",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  className = "",
  imgClassName = "",
  outline = false,
  square = false,
}: ArchImageProps) {
  // Emma asked for rectangular images rather than arches.
  const shape = square ? "rounded-[2px]" : "rounded-[2px]";

  return (
    <div className={`relative ${className}`.trim()}>
      {outline ? (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border border-sienna/50 md:translate-x-5 md:translate-y-5 ${shape}`}
        />
      ) : null}
      <div className={`relative w-full overflow-hidden bg-surface ${ratio} ${shape}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`photo-soft object-cover ${imgClassName}`.trim()}
        />
      </div>
    </div>
  );
}
