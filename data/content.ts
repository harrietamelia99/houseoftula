/**
 * Onboarding archive only. Edit live website copy in the /content folder, not here.
 *
 * Full client onboarding responses (May 2026) live in `docs/source/house-of-tula-website-onboarding-form-2026-05-18.csv`
 * and are summarised in `onboardingSubmission` for auditability.
 */

/** Structured snapshot from Emma Hasell’s submitted onboarding form  -  keep in sync when the CSV is updated. */
export const onboardingSubmission = {
  submittedAt: "2026-05-18T13:53:52+01:00",
  legalName: "Emma Hasell",
  phone: "07817467424",
  registeredAddress: "2 Brook Cottages, Chew Magna, BS40 8RJ",
  hasExistingWebsiteOrDomain: false,
  socialHandlesNote: "Instagram (handle to be confirmed)",
  originStory: `Tula means balance in Sanskrit. In busy, overstimulated seasons we need more balance  -  attention is pulled outward easily, so House of Tula exists to offer a space to be, to pause, to breathe, and to focus inward for peace and stillness. Yoga helps us shine a light on thought, breath, and body so we can soften, listen, let go, and hear what we need.`,
  servicesOffered: [
    "1:1 yoga",
    "Children's yoga",
    "After school clubs and term time",
    "Small groups yoga",
    "Seasonal events and pop ups",
    "Guided meditation",
    "Conscious breath",
    "Bespoke facials",
    "Full body massage",
    "Back massage",
  ] as const,
  pricingOrScheduleOnSite: "not at this stage" as const,
  idealClient:
    "Often roughly 30–60; guests who want time for a personal, intimate session with full attention  -  large classes can feel intimidating when you're new. The studio is relaxed and inviting, nestled in Chew Magna with nature nearby.",
  pointsOfDifference: `Yoga is often taught as physical exercise; it is  -  yet it's also an inward path toward space, peace, and stillness: to stop and feel and be, not only to think. Emma teaches yoga as a feeling  -  not something to achieve or "look right" in every posture  -  inviting breath, curiosity, and care through yoga, breathwork, and guided meditation. Beautiful products for treatments; a calm, inviting room.`,
  websiteGoals: [
    "Get enquiries",
    "Share my story",
    "Showcase services",
    "Be found on Google",
  ] as const,
  requestedPages: ["Home", "About", "Services", "Events", "Contact"] as const,
  additionalRequests:
    "Corporate yoga · wellness at work (in addition to studio offerings)",
  usesBookingPlatforms: false,
  hasPrintLogoFiles: false,
  logoFilesNote: "JPEG or screenshot only when available",
  brandingColours:
    "Earthy tones, muted, linen-like colours with texture (per Emma’s wording)",
  brandFeelings: ["Calm and grounding", "Natural and earthy", "Spiritual"] as const,
  aestheticInspiration: ["Yeva don world (as named on form)", "Steffy White Yoga"],
  designAvoid:
    "Bright colours, visual clutter, or a busy layout; prefers natural, slightly faded photography",
  hasProfessionPhotos: false,
  photosNote: "To be forwarded / phone snapshots for now  -  ok per Emma",
  writtenContentStatus: "some, needs refining",
  testimonialsStatus: "not yet  -  can gather",
  launchTiming: "flexible  -  not in a hurry; time to get it right",
  communicationPreference: "either is fine",
  otherNotes:
    "New inbox hello@houseoftula  -  new to digital; may need extra guidance (bear with).",
} as const;

/**
 * Live copy, navigation and image-backed pages are exported from /content
 * so older imports keep working. Edit those files, not this one.
 */
export { site, navLinks, seo, contactCta } from "@/content/site";
export { homeContent } from "@/content/home";
export { aboutPage } from "@/content/about";
export { servicesPage } from "@/content/services";
export { eventsPage } from "@/content/events";
export { testimonials } from "@/content/testimonials";
export { contactPage } from "@/content/contact";
