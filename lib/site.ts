const DEFAULT_SITE_URL = "https://houseoftula.co.uk";

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  return raw.replace(/\/$/, "");
}
