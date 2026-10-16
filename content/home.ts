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
    imageAlt: "",
    primaryCta: { label: "Discover Tula", href: "/about" },
    secondaryCta: { label: "Get in touch", href: "/contact" },
  },
  pullQuoteLines: [
    "Tula means balance in Sanskrit",
    "in busy seasons, we're here to help you find yours.",
  ],
  aboutTeaser: {
    studioEyebrow: "The studio",
    heading: "A studio that asks very little",
    body: [
      "House of Tula is run by Emma Hasell from an intimate studio in Chew Magna: relaxed, inviting, with nature nearby. Sessions suit guests who want honest attention without the noise of huge drop-in rooms.",
      "This is yoga and wellness slowed right down: companionable guidance without pressure to strive or perform.",
    ],
    imageAlt:
      "A calm studio moment, softly lit, with room to move without performing",
    imageAltFlank:
      "A quiet corner of practice, unhurried and close to the ground",
    images: {
      desktopLeft: images.studioLeft,
      desktopRight: images.studioRight,
      mobileLeft: images.studioMobileLeft,
      mobileRight: images.studioMobileRight,
    },
    link: { label: "More about Emma", href: "/about" },
  },
  servicesHeading: "Ways we hold your attention",
  servicesBandLead:
    "Every session is shaped around you. Small groups and one-to-one time, gently paced, with space to notice how you feel rather than how you look.",
  services: [
    {
      title: "Yoga",
      description:
        "Small group and one-to-one yoga that meets you where you are. Unhurried, attentive, and focused on how a pose feels, not how it looks.",
      href: "/services#yoga",
    },
    {
      title: "Breathwork + meditation",
      description:
        "Guided sits and conscious breath practices to soften the nervous system and widen your inner horizon.",
      href: "/services#breath-and-stillness",
    },
    {
      title: "Holistic treatments",
      description:
        "Nurturing facials and massage, each designed to help you slow down, soften and restore a little balance.",
      href: "/services#holistic-treatments",
    },
  ],
  servicesFootnote: {
    before: "Seasonal happenings also unfurl quietly. Revisit them anytime on",
    linkLabel: "Events",
    href: "/events",
    after: ".",
  },
  /**
   * Slim note above the closing band. Set to false to hide it.
   * Visitors can also dismiss it for the rest of their visit.
   */
  showWellnessPromo: true,
  wellnessPromo: {
    lead: "Wellness at Work: calm, accessible sessions for teams of up to 25.",
    linkLabel: "Find out more",
    href: "/services#wellness-at-work",
  },
  closingCta: {
    headline: "Ready to pause?",
    body: "If something here lands gently, we'd love to hear from you.",
    link: { label: "Say hello", href: "/contact" },
    image: images.closingFloral,
  },
  seoDescription:
    "Yoga, breathwork and restorative treatments with Emma Hasell at House of Tula in Chew Magna, Somerset.",
} as const;
