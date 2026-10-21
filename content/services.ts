/**
 * Services page copy and photos.
 * Sections appear in this order. Anchor ids are fixed so homepage links keep working.
 */

import { images } from "@/content/images";

export const servicesPage = {
  title: "Services",
  heading: "What I offer",
  kicker: "A place to pause, to be still, and be.",
  seoDescription:
    "Small group and one-to-one yoga, facials, massage and Wellness at Work with House of Tula.",
  intro:
    "Nothing here is a timetable. I work with small groups and one-to-one, so if something feels right, get in touch and I'll find a way that suits you.",
  headerImage: images.valley,
  sections: [
    {
      id: "yoga",
      number: "01",
      title: "Yoga",
      /** Optional short line under the title. Leave as "" to hide it. */
      kicker: "",
      body: [
        "Small group and one-to-one yoga that meets you where you are. Unhurried, attentive, and focused on how a pose feels, not how it looks.",
        "There is no public timetable. Tell me what you're hoping for, and I'll suggest a time.",
      ],
      notes: ["One-to-one sessions", "Small groups"],
      image: images.studioStill,
      imageAlt: "A rolled linen mat and bolster in the studio",
      cta: { label: "Get in touch", href: "/contact?type=yoga" },
    },
    {
      id: "holistic-treatments",
      number: "02",
      title: "Facials",
      kicker: "A little time just for you.",
      body: [
        "Each facial is thoughtfully tailored to your skin and how you're feeling, using beautiful Comfort Zone skincare products and a gentle, intuitive approach.",
        "More than simply caring for your skin, it's an opportunity to slow down, switch off and enjoy a moment of stillness. Through nurturing touch and unhurried care, my intention is for you to leave feeling restored and radiant.",
      ],
      notes: [],
      image: images.facialStill,
      imageAlt: "Ceramic bowls, botanical oil and folded linen",
      cta: { label: "Enquire about a facial", href: "/contact?type=facials" },
    },
    {
      id: "massage",
      number: "03",
      title: "Massage",
      kicker: "A little time to pause, unwind and be cared for.",
      body: [
        "Using the beautiful Tranquillity\u2122 range by Comfort Zone, I offer bespoke massage treatments thoughtfully tailored to how you're feeling and what your body needs.",
      ],
      notes: [],
      image: images.massageStill,
      imageAlt: "Warm stones and eucalyptus on linen",
      cta: { label: "Enquire about a massage", href: "/contact?type=massage" },
    },
    {
      id: "wellness-at-work",
      number: "04",
      title: "Wellness at Work",
      kicker: "",
      body: [
        "Calm, accessible yoga and breathwork for teams. Sessions come to your workplace or a chosen venue, for groups of up to around 25, with no experience needed.",
        "A simple way to help people pause, reset and return to work a little lighter.",
      ],
      notes: ["Up to around 25 people", "Your workplace or a chosen venue"],
      image: images.workplace,
      imageAlt: "A bright room with linen mats laid out",
      cta: { label: "Enquire for your team", href: "/contact?type=wellness-at-work" },
    },
  ],
} as const;
