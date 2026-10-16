/**
 * Contact page copy and form options.
 * The form sends to hello@houseoftula.co.uk once the email keys in Vercel are set.
 */

import { images } from "@/content/images";
import { site } from "@/content/site";

export const enquiryTypes = ["General", "Yoga", "Facials", "Massage", "Wellness at Work"] as const;

export type EnquiryType = (typeof enquiryTypes)[number];

export const replyMethods = ["WhatsApp", "Email"] as const;

export type ReplyMethod = (typeof replyMethods)[number];

/** Maps ?type= on the contact URL to an enquiry option. */
export const enquiryTypeFromQuery: Record<string, EnquiryType> = {
  general: "General",
  yoga: "Yoga",
  facials: "Facials",
  massage: "Massage",
  "wellness-at-work": "Wellness at Work",
};

export const contactPage = {
  title: "Contact",
  heading: "Get in touch",
  kicker: "We'd love to hear from you.",
  headerImage: images.doorLock,
  seoDescription:
    "Get in touch with Emma at House of Tula about yoga, facials, massage or Wellness at Work.",
  intro:
    "Send a note and Emma will reply. If you would rather call or write directly, the details are here too.",
  wellnessReplyNote: "We'll reply by email for Wellness at Work enquiries.",
  updatesLabel: "I'd like occasional updates about events (no spam, unsubscribe any time).",
  success: "Thank you. Emma will be in touch soon.",
  /** Shown under the error message if the form cannot send. */
  fallback: `You can also email ${site.email} or send a WhatsApp message to ${site.phoneDisplay}.`,
  submitLabel: "Send",
  studioNote: `Studio address: ${site.registeredAddress}. Directions can follow once you have been in touch.`,
  instagramNote: site.instagram.handlePendingConfirmation
    ? ""
    : `Follow along on Instagram (${site.instagram.handle}).`,
} as const;
