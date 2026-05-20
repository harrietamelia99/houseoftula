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
    "h-6 max-h-7 w-auto max-w-[min(92vw,13rem)] object-contain object-left sm:h-7 sm:max-w-[15rem] md:h-8 md:max-w-[16rem]",
  mobile:
    "h-6 max-h-7 w-auto max-w-[min(92vw,12rem)] object-contain object-left sm:h-7 sm:max-w-[14rem]",
  footer:
    "h-6 max-h-7 w-auto max-w-[min(94vw,13rem)] object-contain object-left sm:h-7 sm:max-w-[15rem] md:h-8 md:max-w-[16rem]",
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
      sizes="(max-width: 768px) 55vw, 240px"
      className={`${variantClass[variant]} ${className}`.trim()}
    />
  );
}
