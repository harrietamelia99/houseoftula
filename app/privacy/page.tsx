import { site } from "@/content/site";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame } from "@/lib/siteLayout";

export const metadata = buildPageMeta({
  title: "Privacy policy",
  description: "How House of Tula looks after your personal information.",
  path: "/privacy",
});

const updated = "November 2026";

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "Who I am",
    body: (
      <p>
        House of Tula is run by {site.ownerName} in {site.locality}. I&apos;m responsible for any personal information you
        share through this website. If you have any questions about this policy or your information, you can email me at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    ),
  },
  {
    heading: "What information I collect",
    body: (
      <>
        <p>I only collect the information you choose to give me. This may include:</p>
        <ul>
          <li>your name, email address and phone number, when you fill in the contact form</li>
          <li>details of your enquiry and anything you include in your message</li>
          <li>whether you&apos;d like to hear about upcoming events</li>
          <li>any details you share when you message me on WhatsApp, email or Instagram</li>
        </ul>
      </>
    ),
  },
  {
    heading: "How I use your information",
    body: (
      <>
        <p>I use your information to:</p>
        <ul>
          <li>reply to your enquiry and arrange sessions, treatments or bookings</li>
          <li>send you occasional updates about events, but only if you&apos;ve asked to receive them</li>
          <li>keep simple records needed to run my business</li>
        </ul>
        <p>
          I rely on your consent to send event updates, and on my legitimate interest in responding to enquiries and running
          bookings. I will never sell your information or share it with anyone for their own marketing.
        </p>
      </>
    ),
  },
  {
    heading: "Services I use",
    body: (
      <>
        <p>A small number of trusted services help this website and my bookings work:</p>
        <ul>
          <li>
            <strong>Web3Forms</strong> delivers messages from the contact form to my inbox.
          </li>
          <li>
            <strong>Vercel</strong> hosts this website.
          </li>
          <li>
            <strong>WhatsApp</strong>, if you choose to book or message me there. WhatsApp&apos;s own privacy policy applies to
            those messages.
          </li>
        </ul>
        <p>These services only process your information to provide their service, and some may store data outside the UK with appropriate safeguards in place.</p>
      </>
    ),
  },
  {
    heading: "Cookies",
    body: (
      <p>
        This website doesn&apos;t use advertising or tracking cookies. If you follow a link to another website, such as
        Instagram or WhatsApp, that website&apos;s own cookie policy will apply.
      </p>
    ),
  },
  {
    heading: "How long I keep your information",
    body: (
      <p>
        I keep your information only for as long as I need it to reply to you, provide my services and meet any legal or
        accounting requirements. If you&apos;ve asked for event updates, you can ask me to stop at any time and I&apos;ll remove
        your details.
      </p>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <>
        <p>Under UK data protection law, you have the right to:</p>
        <ul>
          <li>ask for a copy of the information I hold about you</li>
          <li>ask me to correct or delete your information</li>
          <li>withdraw your consent to event updates at any time</li>
          <li>object to or ask me to limit how I use your information</li>
        </ul>
        <p>
          To do any of these, just email me at <a href={`mailto:${site.email}`}>{site.email}</a>. If you&apos;re unhappy with how
          I&apos;ve handled your information, you can also contact the Information Commissioner&apos;s Office (ICO) at{" "}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
            ico.org.uk
          </a>
          .
        </p>
      </>
    ),
  },
  {
    heading: "Changes to this policy",
    body: <p>I may update this policy from time to time. The latest version will always be on this page.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-almond pb-24 pt-14 md:pb-32 md:pt-20">
      <div className={`${siteContentFrame} mx-auto max-w-[46rem]`}>
        <h1 className="font-heading text-[clamp(2.2rem,3.6vw,3.25rem)] font-light leading-[1.05] text-forest">
          Privacy policy
        </h1>
        <p className="mt-4 font-body text-sm font-light text-muted">Last updated {updated}</p>
        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-heading text-[clamp(1.5rem,2.2vw,1.85rem)] font-light text-forest">{s.heading}</h2>
              <div className="mt-3 space-y-4 font-body text-[0.98rem] font-light leading-[1.85] text-muted [&_a]:text-olive-dark [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_strong]:font-normal [&_strong]:text-text [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
