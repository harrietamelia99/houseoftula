/**
 * Horizontal frame for page sections: `max-w-content` (72rem) + gutters (see `globals.css`).
 *
 * Includes `site-frame` for plain-CSS fallback in `app/globals.css`.
 */
export const siteContentFrame = "site-frame mx-auto w-full max-w-content";

/** Consistent section padding — compact on mobile, `section` token on md+ */
export const siteSectionY = "py-10 md:py-section";

/** Section top spacing only (stacked sections after a page header). */
export const siteSectionTop = "pt-10 md:pt-section";

/** Inner page title block below sticky nav. */
export const sitePageHeaderTop = "pt-16 md:pt-24 lg:pt-28";

/** Nav row only — full width with edge padding (not capped at content width). */
export const siteHeaderFrame = "site-header-frame w-full";
