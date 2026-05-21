import { ComingSoonPage } from "@/components/ComingSoonPage";
import { eventsPage } from "@/data/content";
import { buildPageMeta } from "@/lib/metadata";

export const metadata = {
  ...buildPageMeta({
    title: "Events + Pop-ups",
    description: eventsPage.seoDescription,
    path: "/events",
  }),
  robots: { index: false, follow: false },
};

export default function EventsPage() {
  return <ComingSoonPage title="Events + pop-ups" />;
}
