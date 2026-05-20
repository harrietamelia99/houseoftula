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
    "h-9 max-h-10 w-auto max-w-[min(92vw,20rem)] object-contain object-left sm:h-10 sm:max-w-[22rem] md:h-11 md:max-w-[24rem]",
  mobile: "h-9 max-h-10 w-auto max-w-[min(92vw,18rem)] object-contain object-left sm:h-10",
  footer:
    "h-10 max-h-11 w-auto max-w-[min(94vw,22rem)] object-contain object-left sm:h-11 sm:max-w-[24rem]",
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
      sizes="(max-width: 768px) 85vw, 360px"
      className={`${variantClass[variant]} ${className}`.trim()}
    />
  );
}
