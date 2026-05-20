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
    "h-8 max-h-9 w-auto max-w-[min(72vw,17rem)] object-contain object-left sm:h-9 sm:max-w-[19rem] md:h-10 md:max-w-[20rem]",
  mobile: "h-9 max-h-10 w-auto max-w-[min(78vw,16rem)] object-contain object-left",
  footer: "h-10 max-h-11 w-auto max-w-[min(90vw,20rem)] object-contain object-left sm:h-11",
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
      width={1024}
      height={576}
      priority={priority}
      sizes="(max-width: 768px) 72vw, 320px"
      className={`${variantClass[variant]} ${className}`.trim()}
    />
  );
}
