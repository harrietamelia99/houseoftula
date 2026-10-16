import { Suspense } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { contactPage } from "@/content/contact";
import { site } from "@/content/site";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame, siteSectionY } from "@/lib/siteLayout";

export const metadata = buildPageMeta({
  title: contactPage.title,
  description: contactPage.seoDescription,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={contactPage.title}
        title={contactPage.heading}
        kicker={contactPage.kicker}
        intro={contactPage.intro}
        image={contactPage.headerImage}
        imageAlt="The brass lock on the House of Tula studio doors"
      />

      <section className={`border-t border-forest/15 bg-almond ${siteSectionY}`}>
        <div className={`${siteContentFrame} grid items-start gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.75fr)] lg:gap-20`}>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>

          <aside className="space-y-6 font-body font-light leading-relaxed text-muted lg:pt-2">
            <p>
              <a className="text-text transition-colors duration-layout ease-out-soft hover:text-forest" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="text-text transition-colors duration-layout ease-out-soft hover:text-forest" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>{contactPage.studioNote}</p>
            <p>
              <a
                className="text-text transition-colors duration-layout ease-out-soft hover:text-forest"
                href={site.instagram.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {site.instagram.handle}
              </a>
            </p>
            {contactPage.instagramNote ? <p>{contactPage.instagramNote}</p> : null}
          </aside>
        </div>
      </section>
    </>
  );
}
