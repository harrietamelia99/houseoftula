/**
 * Contact page copy and form options.
 * The form sends to hellohouseoftula@icloud.com once the email keys in Vercel are set.
 */

import { images } from "@/content/images";
import { site } from "@/content/site";

export const enquiryTypes = ["General", "Yoga", "Facials", "Massage", "Wellbeing at Work"] as const;

export type EnquiryType = (typeof enquiryTypes)[number];

export const replyMethods = ["WhatsApp", "Email"] as const;

export type ReplyMethod = (typeof replyMethods)[number];

/** Maps ?type= on the contact URL to an enquiry option. */
export const enquiryTypeFromQuery: Record<string, EnquiryType> = {
  general: "General",
  yoga: "Yoga",
  facials: "Facials",
  massage: "Massage",
  "wellness-at-work": "Wellbeing at Work",
  "wellbeing-at-work": "Wellbeing at Work",
};

export const contactPage = {
  title: "Connect",
  heading: "Get in touch",
  kicker: "",
  headerImage: images.connectSun,
  seoDescription:
    "Get in touch with Emma at House of Tula about yoga, facials, massage or Wellbeing at Work.",
  intro:
    "I'd love to hear from you. Whether you have a question, would like to book a session or find out more, feel free to get in touch.",
  wellnessReplyNote: "I'll reply by email for Wellbeing at Work enquiries.",
  updatesLabel: "I'd like occasional updates about events (no spam, unsubscribe any time).",
  success: "Thank you. I'll be in touch soon.",
  /** Shown under the error message if the form cannot send. */
  fallback: `You can also email ${site.email} or send a WhatsApp message to ${site.phoneDisplay}.`,
  submitLabel: "Send",
  /** Optional line under the Instagram link. Leave as "" to hide it. */
  instagramNote: "",
} as const;
