/**
 * Photographs used across the site.
 * Swap a picture by replacing the file in /public and updating the path here.
 * New photos should be black and white or muted, calm and nature-led.
 * Avoid anything that looks like fitness or performance.
 */

export const images = {
  /**
   * Wooden doors with the brass lock. Hero background.
   * File expected at public/images/door-detail.jpg
   */
  heroDoor: "/images/door-detail.jpg",
  /**
   * Emma's portrait, already black and white.
   * File expected at public/images/emma-portrait.jpg
   */
  emmaPortrait: "/images/emma-portrait.jpg",
  /**
   * Close crop of the brass lock. Used when an event has no image of its own.
   */
  eventFallback: "/images/door-lock.jpg",
  /** Homepage studio band, wide left photo on desktop. */
  studioLeft: "/images/site/studio-side-stretch.png",
  /** Homepage studio band, wide right photo on desktop. */
  studioRight: "/images/site/studio-group-mermaid.png",
  /** Homepage studio band, left photo on mobile. */
  studioMobileLeft: "/images/site/class-three-warriors.png",
  /** Homepage studio band, right photo on mobile. */
  studioMobileRight: "/images/site/detail-mat-stretch.png",
  /** Faded pattern behind the closing "Ready to pause?" band. */
  closingFloral: "/images/site/closing-floral-pattern.png",
} as const;
