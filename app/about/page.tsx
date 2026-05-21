import { ComingSoonPage } from "@/components/ComingSoonPage";
import { aboutPage } from "@/data/content";
import { buildPageMeta } from "@/lib/metadata";

export const metadata = {
  ...buildPageMeta({
    title: "About",
    description: aboutPage.seoDescription,
    path: "/about",
  }),
  robots: { index: false, follow: false },
};

export default function AboutPage() {
  return <ComingSoonPage title="About" />;
}
