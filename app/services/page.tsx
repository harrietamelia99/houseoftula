import { ComingSoonPage } from "@/components/ComingSoonPage";
import { servicesPage } from "@/data/content";
import { buildPageMeta } from "@/lib/metadata";

export const metadata = {
  ...buildPageMeta({
    title: "Services",
    description: servicesPage.seoDescription,
    path: "/services",
  }),
  robots: { index: false, follow: false },
};

export default function ServicesPage() {
  return <ComingSoonPage title="Services" />;
}
