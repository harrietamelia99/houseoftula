import Link from "next/link";
import { AdminShell, PageTitle } from "@/components/admin/AdminShell";
import { requireSignIn } from "@/lib/cms/auth";
import { site } from "@/content/site";

const sections = [
  {
    title: "Adding an event",
    steps: [
      "From Start, press Events, then + Add an event.",
      "Fill in the name, date, time, where it is and a few words about it. Price and photo are optional.",
      "Press Add event. It appears on the Events page straight away.",
      `Each event has a Book on WhatsApp button. When someone presses it, WhatsApp opens a message to you (${site.phoneDisplay}) with the event name and date filled in.`,
      "You don’t need to remove old events. They disappear from the website by themselves the day after the event.",
    ],
  },
  {
    title: "Changing or removing an event",
    steps: [
      "Go to Events and press Change next to the event.",
      "Make your changes and press Save changes.",
      "To take an event down, press Remove, then Yes, remove.",
    ],
  },
  {
    title: "Changing a photo",
    steps: [
      "From Start, press Photos.",
      "Find the photo you want to swap. Each one says where it appears on the website.",
      "Press Choose a new photo and pick one from your phone or computer. That’s it, it goes live straight away.",
      "Each photo says whether a wide, tall or square photo works best, so it fits nicely.",
      "Changed your mind? Press Put back the original photo.",
    ],
  },
  {
    title: "Changing the wording",
    steps: [
      "From Start, press Wording and choose the page.",
      "Click into any box and type your changes.",
      "For longer text, leave an empty line between paragraphs.",
      "Press Save changes at the bottom. Your new wording is on the website within a few seconds.",
      "Changed your mind? Press Put back the original wording under that box.",
    ],
  },
];

export default function HelpPage() {
  requireSignIn();
  return (
    <AdminShell crumbs={[{ label: "Help" }]} active="Help">
      <PageTitle title="Help" intro="Everything you can do here, step by step." />
      <div className="space-y-6">
        {sections.map((s) => (
          <section key={s.title} className="rounded-xl border border-border border-l-4 border-l-sienna bg-[#FCFBF3] p-6">
            <h2 className="font-heading text-[1.6rem] font-light text-forest">{s.title}</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-[1rem] leading-relaxed text-text">
              {s.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
        ))}
        <section className="rounded-xl border border-border bg-surface/30 p-6">
          <h2 className="font-heading text-[1.6rem] font-light text-forest">Good to know</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[1rem] leading-relaxed">
            <li>Changes go live as soon as you save. You can open the website in another tab to check.</li>
            <li>You stay signed in on this device for 30 days. Press Log out if you are using a shared computer.</li>
            <li>
              Anything else you would like changed, like layout or new pages, just ask Collectiv. Studio at{" "}
              <a href="mailto:harriet@collectivstudio.uk" className="underline underline-offset-2">
                harriet@collectivstudio.uk
              </a>
              .
            </li>
          </ul>
        </section>
        <p>
          <Link href="/admin" className="text-sienna-deep underline underline-offset-4">
            Back to Start
          </Link>
        </p>
      </div>
    </AdminShell>
  );
}
