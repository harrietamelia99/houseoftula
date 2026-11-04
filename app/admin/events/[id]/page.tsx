import { notFound } from "next/navigation";
import { AdminShell, PageTitle } from "@/components/admin/AdminShell";
import { EventForm } from "@/components/admin/EventForm";
import { requireSignIn } from "@/lib/cms/auth";
import { readCmsFresh } from "@/lib/cms/store";

export default async function EditEvent({ params }: { params: { id: string } }) {
  requireSignIn();
  const isNew = params.id === "new";
  const cms = await readCmsFresh();
  const event = isNew ? undefined : cms.events.find((e) => e.id === params.id);
  if (!isNew && !event) notFound();
  return (
    <AdminShell crumbs={[{ href: "/admin/events", label: "Events" }, { label: isNew ? "Add an event" : "Change event" }]}>
      <PageTitle title={isNew ? "Add an event" : "Change event"} />
      <EventForm event={event} />
    </AdminShell>
  );
}
