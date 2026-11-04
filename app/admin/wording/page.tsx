import Link from "next/link";
import { AdminShell, PageTitle, cardClass } from "@/components/admin/AdminShell";
import { requireSignIn } from "@/lib/cms/auth";
import { editablePages } from "@/lib/cms/fields";

export default function WordingIndex() {
  requireSignIn();
  return (
    <AdminShell crumbs={[{ label: "Wording" }]}>
      <PageTitle title="Wording" intro="Choose the page you would like to change." />
      <div className="grid gap-5 sm:grid-cols-2">
        {editablePages.map((p) => (
          <Link key={p.slug} href={`/admin/wording/${p.slug}`} className={cardClass}>
            <h2 className="font-heading text-[1.6rem] font-light text-forest">{p.title}</h2>
            <p className="mt-1 text-[0.98rem] text-muted">{p.summary}</p>
          </Link>
        ))}
      </div>
    </AdminShell>
  );
}
