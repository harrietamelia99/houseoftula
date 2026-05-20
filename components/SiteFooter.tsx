import Link from "next/link";
import { SectionRule } from "@/components/SectionRule";
import { navLinks, site } from "@/data/content";
import { siteContentFrame } from "@/lib/siteLayout";

export function SiteFooter() {
  return (
    <footer className="border-border bg-almond pb-14 pt-section">
      <div className={`grid gap-14 md:grid-cols-2 ${siteContentFrame}`}>
        <div>
          <Link href="/" aria-label={`${site.name} home`}>
            <p className="font-heading text-3xl font-light text-text">{site.name}</p>
          </Link>
          <span className="font-tag mt-3 block font-body uppercase text-muted">
            {site.taglineUpper}
          </span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-tag font-body uppercase text-[0.6875rem] tracking-[0.28em] text-muted transition-colors hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 text-muted md:col-span-2">
          <p>{site.registeredAddress}</p>
          <p>
            <a
              className="font-body font-light underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-text"
              href={`tel:${site.phoneTel}`}
            >
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            <a
              className="font-body font-light underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-text"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
          <p>
            <a
              className="font-body font-light underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-text"
              href={site.instagram.url}
              rel="noopener noreferrer"
            >
              {site.instagram.handle}
            </a>
          </p>
          <SectionRule className="my-8 opacity-75" />
          <small className="block font-body font-light leading-relaxed">
            © 2026 {site.name}. Website by{" "}
            <a
              href="https://collectivstudio.uk"
              target="_blank"
              rel="noreferrer noopener"
              className="text-olive underline decoration-border decoration-1 underline-offset-[6px]"
            >
              Collectiv. Studio
            </a>
            .
          </small>
          <small className="mt-6 block font-body text-xs font-light italic text-muted/80">
            No final logo pack yet — JPEG / screenshot references only until branded assets land ({site.ownerName}).
          </small>
        </div>
      </div>
    </footer>
  );
}
