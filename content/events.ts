/**
 * Events, mainly Wellness at Work gatherings with limited places.
 * Add or remove objects in the `events` array. Emma can edit this file alone.
 * Leave the array empty to show the empty state.
 *
 * Each event:
 * - title: short name
 * - date: how you want the date to read, for example "12 June 2026"
 * - time: for example "10:00 to 11:15"
 * - location: venue or area (these vary)
 * - capacity: number of places, usually up to 25
 * - description: one or two calm sentences
 * - ticketUrl: full link opened by "Book tickets" (include https://)
 * - image: optional photo path. If you leave it off, the fallback image is used.
 */

import { images } from "@/content/images";

export type TulaEvent = {
  title: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  description: string;
  ticketUrl: string;
  image?: string;
};

/** Shown when an event does not set its own image. */
export const eventFallbackImage = images.eventFallback;

export const eventsPage = {
  title: "Events",
  heading: "Gatherings",
  kicker: "Small groups, calm settings, limited places.",
  headerImage: images.workplace,
  seoDescription:
    "Wellness at Work gatherings and seasonal events with House of Tula. Small groups, calm settings, limited places.",
  intro:
    "Occasional gatherings for teams and small groups. Places are limited, and the setting changes with each event.",
  empty: {
    message: ["No events just now.", "Get in touch to hear about the next one."],
    link: { label: "Get in touch", href: "/contact" },
  },
  bookLabel: "Book tickets",
} as const;

/**
 * Upcoming events. Empty for now, so the page shows the "No events just now" message.
 * To add one, copy this example inside the square brackets and fill it in:
 *
 * {
 *   title: "Wellness at Work: autumn reset",
 *   date: "12 November 2026",
 *   time: "10:00 to 11:15",
 *   location: "Chew Magna",
 *   capacity: 25,
 *   description: "One or two calm sentences about the session.",
 *   ticketUrl: "https://your-ticket-link",
 * },
 */
export const events: TulaEvent[] = [];
