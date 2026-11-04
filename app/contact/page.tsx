import { Suspense } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { contactPage as contactDefaults } from "@/content/contact";
import { getSiteContent } from "@/lib/cms/content";
import { buildPageMeta } from "@/lib/metadata";
import { siteContentFrame, siteSectionY } from "@/lib/siteLayout";

export const metadata = buildPageMeta({
  title: contactDefaults.title,
  description: contactDefaults.seoDescription,
  path: "/contact",
});

export default async function ContactPage() {
  const { contact: contactPage } = await getSiteContent();
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
        imageStroke
      />

      <section className={`border-t border-forest/15 bg-almond ${siteSectionY}`}>
        <div className={`${siteContentFrame} max-w-[46rem]`}>
          <Suspense fallback={null}>
            <ContactForm successMessage={contactPage.success} />
          </Suspense>

        </div>
      </section>
    </>
  );
}
