import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

/** Inner pages are “coming soon” — only advertise the homepage until they launch. */
const ROUTES = ["/"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return ROUTES.map((path) => ({
    url: path === "/" ? `${base}` : `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.65,
  }));
}
