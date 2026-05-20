import Image from "next/image";
import { siteImages } from "@/lib/siteImages";

type SiteLogoProps = {
  /** LCP: set true only above the fold (site header). */
  priority?: boolean;
  /** Slightly different caps for header / mobile drawer / footer. */
  variant?: "header" | "mobile" | "footer";
  className?: string;
};

const variantClass: Record<NonNullable<SiteLogoProps["variant"]>, string> = {
  header:
    "h-12 max-h-[3.25rem] w-auto max-w-[min(92vw,26rem)] object-contain object-left sm:h-[3.35rem] sm:max-w-[28rem] md:h-14 md:max-w-[30rem]",
  mobile:
    "h-11 max-h-12 w-auto max-w-[min(92vw,22rem)] object-contain object-left sm:h-[3.1rem]",
  footer:
    "h-12 max-h-14 w-auto max-w-[min(94vw,28rem)] object-contain object-left sm:h-14 sm:max-w-[30rem]",
};

/**
 * Raster wordmark logo. Parent link should provide `aria-label` (e.g. “House of Tula home”);
 * this image is decorative there so `alt` is empty.
 */
export function SiteLogo({ priority = false, variant = "header", className = "" }: SiteLogoProps) {
  return (
    <Image
      src={siteImages.logoWordmark}
      alt=""
      width={1017}
      height={95}
      priority={priority}
      sizes="(max-width: 768px) 92vw, 480px"
      className={`${variantClass[variant]} ${className}`.trim()}
    />
  );
}
