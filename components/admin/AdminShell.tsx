import Link from "next/link";
import { signOut } from "@/lib/cms/actions";
import { siteImages } from "@/lib/siteImages";

const navItems = [
  { href: "/admin", label: "Start" },
  { href: "/admin/help", label: "Help" },
];

export function AdminShell({
  children,
  crumbs = [],
  active = "Start",
}: {
  children: React.ReactNode;
  crumbs?: { href?: string; label: string }[];
  active?: string;
}) {
  return (
    <div className="min-h-screen bg-almond text-text">
      <header className="bg-forest-slab text-almond">
        <div className="mx-auto flex max-w-[60rem] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4">
          <Link href="/admin" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={siteImages.monogramHCircle} alt="" className="h-11 w-11 rounded-full bg-almond p-1" />
            <span className="border-l border-sienna/60 pl-3 font-heading text-[1.35rem] font-light tracking-wide">
              Editing area
            </span>
          </Link>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.95rem]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b pb-1 ${active === item.label ? "border-sienna text-almond" : "border-transparent text-almond/80 hover:text-almond"}`}
              >
                {item.label}
              </Link>
            ))}
            <a href="/" target="_blank" rel="noopener" className="border-b border-transparent pb-1 text-almond/80 hover:text-almond">
              View website
            </a>
            <form action={signOut}>
              <button type="submit" className="border-b border-transparent pb-1 text-almond/80 hover:text-almond">
                Log out
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-[60rem] px-5 pb-20 pt-6">
        <p className="text-sm text-muted">
          <Link href="/admin" className="hover:text-forest">
            Start
          </Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="mx-2 text-border">/</span>
              {c.href ? (
                <Link href={c.href} className="hover:text-forest">
                  {c.label}
                </Link>
              ) : (
                <span>{c.label}</span>
              )}
            </span>
          ))}
        </p>
        {children}
        <p className="mt-16 text-center text-xs text-muted">
          Site by{" "}
          <a href="https://collectivstudio.uk" className="underline decoration-sienna/40 underline-offset-2">
            Collectiv. Studio
          </a>
        </p>
      </main>
    </div>
  );
}

export function PageTitle({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mb-8 mt-6">
      <h1 className="font-heading text-[2.6rem] font-light leading-tight text-forest">{title}</h1>
      {intro ? <p className="mt-2 max-w-[40rem] text-[1.02rem] text-muted">{intro}</p> : null}
    </div>
  );
}

export function SavedNotice({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <div role="status" className="mb-8 rounded-lg border border-olive/50 bg-[#EEF0E2] px-5 py-4 text-[1rem] text-forest">
      <span className="mr-2" aria-hidden>
        &#10003;
      </span>
      {message}
    </div>
  );
}

export { cardClass, buttonClass, quietButtonClass, inputClass, labelClass } from "./styles";
