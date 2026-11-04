import Link from "next/link";
import { AdminShell, PageTitle, cardClass } from "@/components/admin/AdminShell";
import { requireSignIn } from "@/lib/cms/auth";

const cards = [
  { href: "/admin/events", title: "Events", text: "Add, change or remove events. Each one has a Book on WhatsApp button.", icon: "calendar" },
  { href: "/admin/photos", title: "Photos", text: "Swap any photo on the website for a new one.", icon: "photo" },
  { href: "/admin/wording", title: "Wording", text: "Change the words on Home, About, Services, Events and Connect.", icon: "page" },
  { href: "/admin/help", title: "Help", text: "How everything works, step by step.", icon: "help" },
] as const;

function Icon({ name }: { name: (typeof cards)[number]["icon"] }) {
  const paths: Record<string, React.ReactNode> = {
    calendar: (
      <>
        <rect x="4" y="5.5" width="16" height="14" rx="2" />
        <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
      </>
    ),
    photo: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="m5 17 4.5-4.5 3 3 2.5-2.5L19.5 17" />
      </>
    ),
    page: (
      <>
        <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20z" />
        <path d="M10 11h5M10 14h5M10 17h3" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M9.8 9.6a2.3 2.3 0 1 1 3.2 2.1c-.7.3-1 .8-1 1.5v.4M12 16.6v.2" />
      </>
    ),
  };
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-olive/60 bg-surface/40 text-forest">
      <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {paths[name]}
      </svg>
    </span>
  );
}

export default function AdminHome() {
  requireSignIn();
  return (
    <AdminShell>
      <PageTitle title="Hello Emma" intro="What would you like to update on your website?" />
      <div className="grid gap-5 sm:grid-cols-2">
        {cards.map((c) => (
          <Link key={c.href} href={c.href} className={cardClass}>
            <Icon name={c.icon} />
            <h2 className="mt-4 font-heading text-[1.75rem] font-light text-forest">{c.title}</h2>
            <p className="mt-1 text-[0.98rem] leading-relaxed text-muted">{c.text}</p>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
