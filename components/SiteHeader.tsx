"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/data/content";
import { siteHeaderFrame } from "@/lib/siteLayout";
import { SiteLogo } from "@/components/SiteLogo";

function lockBody(scrollLocked: boolean) {
  document.documentElement.style.overflow = scrollLocked ? "hidden" : "";
}

/**
 * Light bar + dark type on every route so the sticky nav always contrasts the forest hero
 * and other colour blocks  -  no scroll-based “inverse” forest header.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    lockBody(menuOpen);
    return () => lockBody(false);
  }, [menuOpen]);

  /** Solid cream reads more reliably than heavy blur (some Safari/device combos wash out small caps links). */
  const surface =
    "border-b border-border/80 bg-almond shadow-[0_1px_0_rgba(73,74,65,0.08),inset_0_-1px_0_rgba(73,74,65,0.04)]";

  const ringOffsetTone = "focus-visible:ring-offset-almond";

  const tagLinks = `font-tag font-body uppercase text-[0.68rem] tracking-[0.28em] transition-[color,opacity,border-color,background-color] duration-layout ease-out-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/45 focus-visible:ring-offset-4 ${ringOffsetTone}`;

  /** Deliberately strong  -  `text-muted` on almond was easy to miss, especially on smaller / outdoor screens. */
  const inactiveNav = "text-text/85 hover:text-text";
  const activeNav = "text-text font-medium";

  const logoLink = (
    <Link
      href="/"
      className="group flex max-w-[min(100%,14rem)] flex-col items-center gap-1 text-center sm:max-w-[min(100%,16rem)]"
      aria-label={`${site.name} home`}
    >
      <SiteLogo priority variant="header" className="mx-auto object-center" />
      <span className="font-tag font-body text-[0.63rem] tracking-[0.32em] text-olive-dark/75">
        {site.taglineUpper}
      </span>
    </Link>
  );

  return (
    <header className={`sticky top-0 z-50 isolate shrink-0 transition-colors duration-layout ${surface}`}>
      <div className={`${siteHeaderFrame} relative py-6 md:py-7`}>
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4 lg:gap-6">
          <nav
            aria-label="Primary"
            className="flex min-w-0 flex-wrap items-center justify-start gap-x-5 gap-y-2 lg:gap-x-7"
          >
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${tagLinks} ${active ? activeNav : inactiveNav}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="justify-self-center px-4">{logoLink}</div>

          <div className="flex justify-end">
            <Link
              href="/contact"
              className={`${tagLinks} rounded-full border border-olive/45 px-7 py-[0.55rem] text-olive-dark transition-[transform,background-color,border-color,color] duration-layout ease-out-soft hover:border-olive hover:bg-surface hover:text-forest hover:-translate-y-0.5 active:translate-y-0`}
            >
              Book a class
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between md:hidden">
          <button
            type="button"
            className={`${tagLinks} shrink-0 font-medium text-text`}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>

          <div className="pointer-events-none absolute left-1/2 top-1/2 w-max max-w-[calc(100%-8rem)] -translate-x-1/2 -translate-y-1/2">
            <div className="pointer-events-auto">{logoLink}</div>
          </div>

          <span className="w-[3.25rem] shrink-0" aria-hidden />
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-almond/96 backdrop-blur-[1px]"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          />

          <div id="mobile-navigation" className="relative z-10 flex h-full flex-col overflow-y-auto bg-almond px-gutter pb-14 pt-8">
            <div className="flex items-start justify-between">
              <Link
                href="/"
                className="flex flex-col gap-2"
                aria-label={`${site.name} home`}
                onClick={() => setMenuOpen(false)}
              >
                <SiteLogo variant="mobile" />
                <p className="font-tag text-muted">{site.taglineUpper}</p>
              </Link>

              <button
                type="button"
                className="font-tag font-body uppercase text-[0.65rem] tracking-[0.28em] text-muted transition-colors duration-layout ease-out-soft hover:text-text"
                onClick={() => setMenuOpen(false)}
              >
                Close
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="mt-16 flex flex-1 flex-col gap-10">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-heading text-3xl font-light text-text transition-colors duration-layout ease-out-soft hover:text-olive"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="mt-auto inline-flex max-w-fit rounded-full border border-forest bg-forest px-8 py-3 font-tag font-body uppercase text-[0.65rem] tracking-[0.32em] text-almond transition-[transform,background-color,border-color] duration-layout ease-out-soft hover:-translate-y-0.5 hover:bg-forest-soft hover:border-forest-soft active:translate-y-0"
                onClick={() => setMenuOpen(false)}
              >
                Book a class
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
