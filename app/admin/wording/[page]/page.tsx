import { notFound } from "next/navigation";
import { AdminShell, PageTitle, SavedNotice, inputClass, labelClass } from "@/components/admin/AdminShell";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { saveWording } from "@/lib/cms/actions";
import { requireSignIn } from "@/lib/cms/auth";
import { defaults, getByPath } from "@/lib/cms/content";
import { findPage, type Field } from "@/lib/cms/fields";
import { readCmsFresh } from "@/lib/cms/store";

function asText(value: unknown, kind: Field["kind"]): string {
  if (Array.isArray(value)) return value.join(kind === "paragraphs" ? "\n\n" : "\n");
  return typeof value === "string" ? value : "";
}

function rowsFor(text: string, kind: Field["kind"]) {
  if (kind === "text") return Math.min(6, Math.max(1, Math.ceil(text.length / 70)));
  return Math.min(22, Math.max(2, text.split("\n").length + Math.ceil(text.length / 110)));
}

const hints: Record<Field["kind"], string> = {
  text: "",
  lines: "Each line here is a new line on the website.",
  paragraphs: "Leave an empty line between paragraphs.",
};

export default async function WordingPage({
  params,
  searchParams,
}: {
  params: { page: string };
  searchParams: { saved?: string };
}) {
  requireSignIn();
  const page = findPage(params.page);
  if (!page) notFound();
  const cms = await readCmsFresh();

  const saved =
    searchParams.saved === "reset"
      ? "Done. That wording is back to the original."
      : searchParams.saved
        ? "Saved. Your changes are now on the website."
        : undefined;

  return (
    <AdminShell crumbs={[{ href: "/admin/wording", label: "Wording" }, { label: page.title }]}>
      <PageTitle title={page.title} intro="Change the words below, then press Save at the bottom." />
      <SavedNotice message={saved} />
      <p className="mb-8">
        <a href={page.href} target="_blank" rel="noopener" className="text-sienna-deep underline underline-offset-4">
          Open this page on the website
        </a>
      </p>
      <form key={cms.updatedAt ?? "original"} action={saveWording} className="space-y-8">
        <input type="hidden" name="page" value={page.slug} />
        {page.groups.map((group) => (
          <fieldset key={group.title} className="rounded-xl border border-border bg-[#FCFBF3] p-6 md:p-7">
            <legend className="px-2 font-heading text-[1.5rem] font-light text-forest">{group.title}</legend>
            <div className="space-y-6">
              {group.fields.map((field) => {
                const changed = field.path in cms.text;
                const current = changed ? cms.text[field.path] : getByPath(defaults, field.path);
                const text = asText(current, field.kind);
                const hint = [field.hint, hints[field.kind]].filter(Boolean).join(" ");
                return (
                  <div key={field.path}>
                    <label htmlFor={field.path} className={labelClass}>
                      {field.label}
                    </label>
                    {hint ? <p className="mt-1 text-sm text-muted">{hint}</p> : null}
                    <textarea
                      id={field.path}
                      name={field.path}
                      defaultValue={text}
                      rows={rowsFor(text, field.kind)}
                      className={`${inputClass} leading-relaxed`}
                    />
                    {changed ? (
                      <button
                        type="submit"
                        name="reset"
                        value={field.path}
                        formNoValidate
                        className="mt-2 text-sm text-muted underline underline-offset-2 hover:text-sienna-deep"
                      >
                        Put back the original wording
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </fieldset>
        ))}
        <div className="sticky bottom-0 -mx-5 border-t border-border bg-almond/95 px-5 py-4 backdrop-blur">
          <SubmitButton>Save changes</SubmitButton>
        </div>
      </form>
    </AdminShell>
  );
}
