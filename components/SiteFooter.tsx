import Link from "next/link";
import type { SVGProps } from "react";
import { SectionRule } from "@/components/SectionRule";
import { SiteLogo } from "@/components/SiteLogo";
import { navLinks, site } from "@/data/content";
import { siteContentFrame } from "@/lib/siteLayout";

function IconMapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function IconEnvelope(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden {...props}>
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3.75" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const iconClass = "mt-0.5 h-5 w-5 shrink-0 text-olive/80";

export function SiteFooter() {
  return (
    <footer className={`border-border bg-almond pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-10 md:pt-section md:pb-14`}>
      <div className={`${siteContentFrame}`}>
        <div className="mb-10 md:mb-12">
          <Link
            href="/"
            aria-label={`${site.name} home`}
            className="inline-flex flex-col gap-3 transition-opacity duration-layout ease-out-soft hover:opacity-90"
          >
            <SiteLogo variant="footer" />
          </Link>
          <span className="font-tag mt-3 block font-body uppercase text-muted">{site.taglineUpper}</span>
        </div>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-12 md:gap-x-16 lg:gap-x-24">
          <ul className="space-y-4 text-[0.9375rem] font-body font-light leading-snug text-muted">
            <li className="flex gap-3">
              <IconMapPin className={iconClass} />
              <span>{site.registeredAddress}</span>
            </li>
            <li className="flex gap-3">
              <IconPhone className={iconClass} />
              <a
                className="text-muted transition-colors duration-layout ease-out-soft hover:text-text"
                href={`tel:${site.phoneTel}`}
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <IconEnvelope className={iconClass} />
              <a
                className="text-muted transition-colors duration-layout ease-out-soft hover:text-text"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <IconInstagram className={iconClass} />
              <a
                className="text-muted transition-colors duration-layout ease-out-soft hover:text-text"
                href={site.instagram.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {site.instagram.handle}
              </a>
            </li>
            <li className="flex items-center gap-3 pt-1">
              <span className={`${iconClass} invisible`} aria-hidden>
                <span className="block h-5 w-5" />
              </span>
              <Link
                href="/contact"
                className="inline-flex min-h-[2.5rem] items-center rounded-full border border-olive/45 px-6 py-2 font-tag font-body text-[0.6875rem] uppercase tracking-[0.28em] text-olive-dark transition-[transform,background-color,border-color,color] duration-layout ease-out-soft hover:border-olive hover:bg-surface hover:text-forest active:translate-y-0"
              >
                Book now
              </Link>
            </li>
          </ul>

          <nav
            aria-label="Footer"
            className="flex flex-col space-y-4 font-tag font-body text-[0.6875rem] uppercase tracking-[0.28em] text-muted md:items-end md:text-right"
          >
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block leading-snug transition-colors duration-layout ease-out-soft hover:text-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <SectionRule className="mt-14 opacity-75" />

        <div className="mt-8">
          <small className="block font-body font-light leading-relaxed text-muted">
            © 2026 {site.name}. Website by{" "}
            <a
              href="https://collectivstudio.uk"
              target="_blank"
              rel="noreferrer noopener"
              className="text-olive transition-colors duration-layout ease-out-soft hover:text-text"
            >
              Collectiv. Studio
            </a>
            .
          </small>
        </div>
      </div>
    </footer>
  );
}
