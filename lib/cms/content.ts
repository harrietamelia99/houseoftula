import "server-only";
import { aboutPage } from "@/content/about";
import { contactPage } from "@/content/contact";
import { eventFallbackImage, events as fileEvents, eventsPage } from "@/content/events";
import { homeContent } from "@/content/home";
import { images } from "@/content/images";
import { servicesPage } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { getCms } from "./store";
import type { CmsData, CmsEvent } from "./types";

/** The default (built-in) wording and photos, grouped by the names used in field paths. */
export const defaults = {
  home: homeContent,
  about: aboutPage,
  services: servicesPage,
  events: eventsPage,
  contact: contactPage,
  testimonials,
};

type Defaults = typeof defaults;

export function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc == null || typeof acc !== "object") return undefined;
    return (acc as Record<string, unknown>)[key];
  }, obj);
}

function setByPath(obj: Record<string, unknown>, path: string, value: unknown) {
  const keys = path.split(".");
  let cur: Record<string, unknown> = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const next = cur[keys[i]];
    if (next == null || typeof next !== "object") return; // path no longer exists, ignore
    cur = next as Record<string, unknown>;
  }
  const last = keys[keys.length - 1];
  if (!(last in cur)) return;
  cur[last] = value;
}

/** Swaps every use of a default photo for Emma's replacement. */
function swapImages(value: unknown, swaps: Map<string, string>): unknown {
  if (typeof value === "string") return swaps.get(value) ?? value;
  if (Array.isArray(value)) return value.map((v) => swapImages(v, swaps));
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = swapImages(v, swaps);
    return out;
  }
  return value;
}

export function imageSwaps(cms: CmsData): Map<string, string> {
  const swaps = new Map<string, string>();
  for (const [key, url] of Object.entries(cms.images)) {
    const original = (images as Record<string, string>)[key];
    if (original && url) swaps.set(original, url);
  }
  return swaps;
}

export function mergeContent(cms: CmsData): Defaults {
  const copy = JSON.parse(JSON.stringify(defaults)) as Record<string, unknown>;
  for (const [fieldPath, value] of Object.entries(cms.text)) setByPath(copy, fieldPath, value);
  return swapImages(copy, imageSwaps(cms)) as Defaults;
}

export type PublicEvent = CmsEvent & { dateLabel: string; image: string };

function todayInUk(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London" }).format(new Date());
}

export function formatEventDate(date: string): string {
  const d = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(+d)) return date;
  const part = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat("en-GB", { ...o, timeZone: "UTC" }).format(d);
  return `${part({ weekday: "long" })} ${part({ day: "numeric" })} ${part({ month: "long" })} ${part({ year: "numeric" })}`;
}

export function upcomingEvents(cms: CmsData): PublicEvent[] {
  const today = todayInUk();
  const swaps = imageSwaps(cms);
  const fallback = swaps.get(eventFallbackImage) ?? eventFallbackImage;
  const legacy: CmsEvent[] = fileEvents.map((e, i) => ({
    id: `file-${i}`,
    title: e.title,
    date: "",
    time: e.time,
    location: e.location,
    price: "",
    description: e.description,
    image: e.image ?? "",
  }));
  return [...cms.events, ...legacy]
    .filter((e) => !e.date || e.date >= today)
    .sort((a, b) => (a.date || "9999").localeCompare(b.date || "9999"))
    .map((e) => ({ ...e, dateLabel: e.date ? formatEventDate(e.date) : "", image: e.image || fallback }));
}

/** Content for the public pages, with Emma's changes applied. */
export async function getSiteContent() {
  const cms = await getCms();
  return { ...mergeContent(cms), upcoming: upcomingEvents(cms) };
}
