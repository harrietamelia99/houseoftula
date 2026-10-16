import type { Metadata } from "next";
import { seo, site } from "@/content/site";
import { getSiteUrl } from "@/lib/site";

export const siteMetadata: Metadata = {
  metadataBase: new URL(`${getSiteUrl()}/`),
  title: {
    template: `%s | ${seo.titleSuffix}`,
    default: seo.titleSuffix,
  },
  description: `${site.name} holds slow yoga, mindful breath practices and restorative touch in ${site.locality}.`,
  openGraph: {
    title: seo.titleSuffix,
    description:
      "A grounded studio inviting stillness. Yoga, breathwork and holistic treatments near Bristol.",
    url: getSiteUrl(),
    locale: "en_GB",
    siteName: site.name,
    type: "website",
  },
};
