/**
 * Homepage copy and image paths.
 * Edit text and photo paths here. The page layout stays in the components.
 */

import { images } from "@/content/images";

export const homeContent = {
  hero: {
    /** Small line above the title. */
    eyebrow: "Chew Magna, Bristol",
    title: "House of Tula",
    byline: "by Emma Hasell",
    /** Supporting line under the byline. */
    supporting: ["A space to pause,", "to breathe, to be."],
    /** Emma's "Welcome to House of Tula" banner of the studio doors. */
    image: images.welcomeBanner,
    imageAlt: "Welcome to House of Tula, written over the weathered wooden studio doors",
    primaryCta: { label: "Discover Tula", href: "/about" },
    secondaryCta: { label: "Get in touch", href: "/contact" },
  },
  /** Large statement under the hero. */
  statement: {
    kicker: "Tula means balance",
    line: [
      "Tula means balance in\u00a0Sanskrit.",
      "In the busyness of everyday life,",
      "House of Tula offers a little space",
      "to pause, to breathe and simply be.",
    ],
  },
  aboutTeaser: {
    eyebrow: "The studio",
    heading: ["A studio that", "asks very little"],
    body: [
      "Tucked away in Chew Magna, House of Tula is a small, welcoming yoga and wellbeing studio surrounded by nature.",
      "A space to pause, to breathe, to be.",
      "Through yoga, breathwork and meditation, I offer a gentle invitation to slow down, reconnect with yourself and find a little more balance.",
      "There is no expectation here. Just space to arrive exactly as you are.",
    ],
    mainImage: images.wireArt,
    mainImageAlt: "The black wire artwork on the wall of Emma's yoga shed",
    detailImage: images.doorLock,
    detailImageAlt: "The brass lock on the studio doors",
    link: { label: "More about Emma", href: "/about" },
  },
  offerings: {
    eyebrow: "Ways to find a little more balance",
    heading: ["Ways to find", "a little more balance"],
    /** Paragraphs beside the heading. */
    lead: [
      "At House of Tula, I offer yoga, breathwork and mindful practices through small, intimate gatherings, one-to-one sessions and thoughtfully created experiences.",
      "Whether you're looking for a moment of stillness, space to reconnect or simply some time for yourself, there's a place for you here.",
      "I also bring wellbeing into the workplace, offering corporate yoga, breathwork and mindfulness sessions, as well as creating bespoke wellbeing events for groups, businesses and special occasions.",
    ],
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
        title: "Facials",
        description:
          "A little time just for you. Each facial is thoughtfully tailored to your skin and how you're feeling, using beautiful Comfort Zone skincare.",
        href: "/services#holistic-treatments",
        image: images.facialStill,
      },
      {
        number: "03",
        title: "Massage",
        description:
          "A little time to pause, unwind and be cared for, with bespoke treatments using the Tranquillity\u2122 range by Comfort Zone.",
        href: "/services#massage",
        image: images.massageStill,
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
    image: images.buddhaWindow,
    quote: ["Somewhere you can find a little time,", "stillness, and just be."],
    attribution: "Emma Hasell",
  },
  wellness: {
    eyebrow: "Wellness at Work",
    heading: "Wellness at Work",
    /** Line under the heading. */
    subheading: "A calmer hour for your team",
    body: "Yoga and breathwork that comes to your workplace or a chosen venue, for groups of up to around 25. No experience needed, just a little time set aside to pause, reset and return to work lighter.",
    image: images.workplace,
    imageAlt: "A bright, quiet room with linen mats laid out",
    cta: { label: "Enquire for your team", href: "/contact?type=wellness-at-work" },
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
    body: "If something here lands gently, I'd love to hear from you.",
    link: { label: "Get in touch", href: "/contact" },
  },
  seoDescription:
    "Yoga, breathwork, facials and massage with Emma Hasell at House of Tula in Chew Magna, Bristol.",
} as const;
