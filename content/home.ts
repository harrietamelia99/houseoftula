/**
 * Homepage copy and image paths.
 * Edit text and photo paths here. The page layout stays in the components.
 */

import { images } from "@/content/images";

export const homeContent = {
  hero: {
    /** Small line above the title. */
    eyebrow: "Chew Magna, Somerset",
    title: "House of Tula",
    byline: "by Emma Hasell",
    /** Supporting line under the byline. */
    supporting: "A space to be. Not to perform.",
    image: images.heroDoor,
    imageAlt: "The weathered wooden doors of the House of Tula studio",
    primaryCta: { label: "Discover Tula", href: "/about" },
    secondaryCta: { label: "Get in touch", href: "/contact" },
  },
  /** Large statement under the hero. */
  statement: {
    kicker: "Tula means balance",
    line: "In busy, overstimulated seasons, House of Tula is a place to pause, where breath, movement and stillness meet.",
  },
  aboutTeaser: {
    eyebrow: "The studio",
    heading: "A studio that asks very little",
    body: [
      "House of Tula is run by Emma Hasell from an intimate studio in Chew Magna: relaxed, inviting, with nature nearby. Sessions suit people who want honest attention without the noise of huge drop-in rooms.",
      "This is yoga and wellness slowed right down: companionable guidance, with no pressure to strive or perform.",
    ],
    mainImage: images.studioStill,
    mainImageAlt: "A rolled linen mat and bolster in soft window light",
    detailImage: images.doorLock,
    detailImageAlt: "The brass lock on the studio doors",
    link: { label: "More about Emma", href: "/about" },
  },
  offerings: {
    eyebrow: "Ways we hold your attention",
    heading: "Gently paced, shaped around you",
    lead: "Every session is shaped around you. Small groups and one-to-one time, with space to notice how you feel rather than how you look.",
    items: [
      {
        number: "01",
        title: "Yoga",
        description:
          "Small group and one-to-one yoga that meets you where you are. Unhurried, attentive, and focused on how a pose feels, not how it looks.",
        href: "/services#yoga",
        image: images.studioStill,
      },
      {
        number: "02",
        title: "Breathwork + meditation",
        description:
          "Guided sits and conscious breath practices to soften the nervous system and bring you back to yourself.",
        href: "/services#breath-and-stillness",
        image: images.breathStill,
      },
      {
        number: "03",
        title: "Facials + massage",
        description:
          "Nurturing facials and massage, each designed to help you slow down, soften and restore a little balance.",
        href: "/services#holistic-treatments",
        image: images.facialStill,
      },
      {
        number: "04",
        title: "Wellness at Work",
        description:
          "Calm, accessible sessions for teams of up to around 25, at your workplace or a chosen venue.",
        href: "/services#wellness-at-work",
        image: images.workplace,
      },
    ],
  },
  /** Full-width photograph with a quote. */
  band: {
    image: images.valley,
    quote: "Somewhere you can find a little time, stillness, and just be.",
    attribution: "Emma Hasell",
  },
  wellness: {
    eyebrow: "Wellness at Work",
    heading: "A calmer hour for your team",
    body: "Yoga and breathwork that comes to your workplace or a chosen venue, for groups of up to around 25. No experience needed, just a little time set aside to pause, reset and return to work lighter.",
    image: images.workplace,
    imageAlt: "A bright, quiet room with linen mats laid out",
    cta: { label: "Enquire about Wellness at Work", href: "/contact?type=wellness-at-work" },
    secondary: { label: "See upcoming events", href: "/events" },
  },
  /**
   * Slim Wellness at Work note above the closing band. Set to true to show it.
   * (The homepage already has a Wellness at Work feature, so it is off by default.)
   */
  showWellnessPromo: false,
  wellnessPromo: {
    lead: "Wellness at Work: calm, accessible sessions for teams of up to 25.",
    linkLabel: "Find out more",
    href: "/services#wellness-at-work",
  },
  closingCta: {
    headline: "Ready to pause?",
    body: "If something here lands gently, we'd love to hear from you.",
    link: { label: "Get in touch", href: "/contact" },
  },
  seoDescription:
    "Yoga, breathwork, facials and massage with Emma Hasell at House of Tula in Chew Magna, Somerset.",
} as const;
