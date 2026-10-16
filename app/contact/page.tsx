import { Suspense } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { VeinDivider } from "@/components/VeinDivider";
import { contactPage } from "@/content/contact";
import { site } from "@/content/site";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame, sitePageHeaderTop, siteSectionY } from "@/lib/siteLayout";

export const metadata = buildPageMeta({
  title: contactPage.title,
  description: contactPage.seoDescription,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <header className={`bg-almond ${sitePageHeaderTop} pb-2`}>
        <div className={siteContentFrame}>
          <FadeIn className="max-w-3xl">
            <p className="font-tag font-body uppercase tracking-[0.28em] text-muted">Contact</p>
            <h1 className="font-heading mt-4 text-h2 font-light text-forest">Get in touch</h1>
            <p className="mt-6 max-w-measure font-body font-light leading-[1.75] text-muted">{contactPage.intro}</p>
          </FadeIn>
        </div>
      </header>

      <VeinDivider />

      <section className={`bg-almond ${siteSectionY} pt-0`}>
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
