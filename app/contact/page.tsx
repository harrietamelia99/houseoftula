import { ComingSoonPage } from "@/components/ComingSoonPage";
import { contactPage } from "@/data/content";
import { buildPageMeta } from "@/lib/metadata";

export const metadata = {
  ...buildPageMeta({
    title: "Contact",
    description: contactPage.seoDescription,
    path: "/contact",
  }),
  robots: { index: false, follow: false },
};

export default function ContactPage() {
  return <ComingSoonPage title="Contact" />;
}
