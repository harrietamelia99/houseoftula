import { Suspense } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { contactPage } from "@/content/contact";
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
        imageAlt="A hand-painted sun and spiral illustration"
        imageRatio="aspect-square"
        centerAlign
      />

      <section className={`border-t border-forest/15 bg-almond ${siteSectionY}`}>
        <div className={`${siteContentFrame} max-w-[46rem]`}>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>

        </div>
      </section>
    </>
  );
}
