/**
 * On-disk photos in `/public/images/site`. Update when new assets are added.
 */
export const siteImages = {
  /** Raster wordmark (gold on black)  -  swap for SVG when a vector pack lands */
  logoWordmark: "/images/site/logo-wordmark.png",
  /** Decorative H monogram for services band (raster); cream via CSS mask + `--color-almond` */
  monogramH: "/images/site/monogram-h.png",
  heroFigure: "/images/site/hero-instructor-assist.png",
  /** Studio triptych  -  desktop flanks */
  studioStretchSide: "/images/site/studio-side-stretch.png",
  studioGroupMermaid: "/images/site/studio-group-mermaid.png",
  /** Mobile-only pair below triptych copy */
  classThreeWarriors: "/images/site/class-three-warriors.png",
  detailMatStretch: "/images/site/detail-mat-stretch.png",
  /** About “The space” band + optional reuse */
  studioDownwardDog: "/images/site/studio-downward-dog.png",
} as const;
