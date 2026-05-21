import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { SectionRule } from "@/components/SectionRule";
import { contactPage, site } from "@/data/content";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame, sitePageHeaderTop } from "@/lib/siteLayout";

export const metadata = buildPageMeta({
  title: "Contact",
  description: contactPage.seoDescription,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-almond pb-section">
      <header className={sitePageHeaderTop}>
        <div className={siteContentFrame}>
          <FadeIn>
            <h1 className="font-heading text-h2 font-light text-text">{contactPage.title}</h1>
            <p className="mt-10 max-w-measure font-body font-light leading-[1.75] text-muted">{contactPage.intro}</p>
            <SectionRule className="mt-12" />
            <small className="mt-10 block font-body text-xs font-light italic text-muted">
              {contactPage.instagramCta}
            </small>
          </FadeIn>
        </div>
      </header>

      <section className="pt-16">
        <div
          className={`${siteContentFrame} grid gap-14 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_340px)] lg:gap-20`}
        >
        <FadeIn delayMs={40}>
          <ContactForm />
        </FadeIn>

        <FadeIn delayMs={120}>
          <div className="space-y-8 border border-border bg-surface/90 px-8 py-10">
            <h2 className="font-heading text-h3 font-medium text-text">Other ways</h2>
            <SectionRule />

            <div className="space-y-4 font-body font-light leading-[1.75] text-muted">
              <div>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="border-b border-olive/30 pb-[1px] text-olive-dark transition-colors hover:border-olive"
                  >
                    {site.email}
                  </a>
                </p>
                <p className="mt-4 text-xs italic text-muted">
                  Confirm this inbox is live before sharing links widely with guests.
                </p>
              </div>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${site.phoneTel}`}
                  className="border-b border-olive/30 pb-[1px] text-olive-dark transition-colors hover:border-olive"
                >
                  {site.phoneDisplay}
                </a>
              </p>
              <p>Location: {site.registeredAddress}</p>
              <p>
                Instagram:{" "}
                <a href={site.instagram.url} className="border-b border-olive/30 pb-[1px] text-olive-dark transition-colors hover:border-olive" rel="noreferrer noopener">
                  {site.instagram.handle}
                </a>
              </p>
              <small className="block text-xs font-light italic text-muted">{contactPage.studioNote}</small>
              <small className="block text-xs font-light italic text-muted">
                Booking platform integrations can arrive later; for now pathways stay human and conversational.
              </small>
            </div>
          </div>
        </FadeIn>
        </div>
      </section>
    </div>
  );
}
