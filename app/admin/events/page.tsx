import Link from "next/link";
import { AdminShell, PageTitle, SavedNotice, buttonClass, quietButtonClass } from "@/components/admin/AdminShell";
import { ConfirmDelete } from "@/components/admin/ConfirmDelete";
import { requireSignIn } from "@/lib/cms/auth";
import { formatEventDate } from "@/lib/cms/content";
import { readCmsFresh } from "@/lib/cms/store";

const notices: Record<string, string> = {
  "1": "Saved. The event is now on the website.",
  deleted: "Done. The event has been removed from the website.",
};

export default async function EventsAdmin({ searchParams }: { searchParams: { saved?: string } }) {
  requireSignIn();
  const cms = await readCmsFresh();
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London" }).format(new Date());
  const sorted = [...cms.events].sort((a, b) => a.date.localeCompare(b.date));
  const upcoming = sorted.filter((e) => e.date >= today);
  const past = sorted.filter((e) => e.date < today).reverse();

  const row = (e: (typeof sorted)[number], isPast = false) => (
    <li key={e.id} className="flex flex-col gap-4 rounded-xl border border-border bg-[#FCFBF3] p-5 sm:flex-row sm:items-center">
      <div className="flex-1">
        <p className="text-sm uppercase tracking-[0.18em] text-sienna-deep">
          {formatEventDate(e.date)}
          {e.time ? ` · ${e.time}` : ""}
        </p>
        <h2 className="mt-1 font-heading text-[1.5rem] font-light text-forest">{e.title}</h2>
        {e.location ? <p className="text-muted">{e.location}</p> : null}
        {isPast ? <p className="mt-1 text-sm text-muted">This date has passed, so it no longer shows on the website.</p> : null}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Link href={`/admin/events/${e.id}`} className={quietButtonClass}>
          Change
        </Link>
        <ConfirmDelete id={e.id} title={e.title} />
      </div>
    </li>
  );

  return (
    <AdminShell crumbs={[{ label: "Events" }]} active="Start">
      <PageTitle title="Events" intro="Events show on the Events page in date order, each with a Book on WhatsApp button." />
      <SavedNotice message={notices[searchParams.saved ?? ""]} />
      <Link href="/admin/events/new" className={buttonClass}>
        + Add an event
      </Link>
      <h2 className="mb-4 mt-10 font-heading text-[1.8rem] font-light text-forest">Coming up</h2>
      {upcoming.length ? (
        <ul className="space-y-4">{upcoming.map((e) => row(e))}</ul>
      ) : (
        <p className="rounded-xl border border-dashed border-border px-5 py-8 text-center text-muted">
          No upcoming events. The Events page shows a friendly &ldquo;No events just now&rdquo; message.
        </p>
      )}
      {past.length ? (
        <>
          <h2 className="mb-4 mt-12 font-heading text-[1.8rem] font-light text-forest">Past events</h2>
          <ul className="space-y-4 opacity-80">{past.map((e) => row(e, true))}</ul>
        </>
      ) : null}
    </AdminShell>
  );
}
