import type { Metadata } from "next";
import { seo } from "@/data/content";
import { getSiteUrl } from "@/lib/site";

export function buildPageMeta({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const base = getSiteUrl();
  const normalisedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const url =
    normalisedPath.length === 0 ? `${base}` : `${base}${normalisedPath}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${seo.titleSuffix}`,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${seo.titleSuffix}`,
      description,
    },
  };
}
