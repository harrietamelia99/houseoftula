/**
 * Horizontal frame aligned with {@link SiteHeader}’s inner row:
 * `max-w-content` (72rem) + `px-gutter` (`clamp(1.25rem, 4vw, 2.5rem)`).
 * Use this (or the same class string) for every primary content block so gutters match the nav.
 *
 * Includes `site-frame` so `app/globals.css` can mirror the same sizing in plain CSS if Tailwind fails to load.
 */
export const siteContentFrame = "site-frame mx-auto w-full max-w-content px-gutter";
