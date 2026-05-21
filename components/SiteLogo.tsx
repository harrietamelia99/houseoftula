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
    "h-5 max-h-6 w-auto max-w-[min(92vw,11rem)] object-contain object-center sm:h-6 sm:max-w-[12.5rem] md:h-7 md:max-w-[14rem]",
  mobile:
    "h-5 max-h-6 w-auto max-w-[min(92vw,10.5rem)] object-contain object-left sm:h-6 sm:max-w-[12rem]",
  footer:
    "h-6 max-h-7 w-auto max-w-[min(94vw,12rem)] object-contain object-left sm:h-6 sm:max-w-[13rem] md:h-7 md:max-w-[14rem]",
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
      sizes="(max-width: 768px) 48vw, 200px"
      className={`${variantClass[variant]} ${className}`.trim()}
    />
  );
}
