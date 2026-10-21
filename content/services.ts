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
    "Small group and one-to-one yoga, breathwork, meditation, facials, massage and Wellness at Work with House of Tula.",
  intro:
    "Nothing here is a timetable. I work with small groups and one-to-one, so if something feels right, get in touch and I'll find a way that suits you.",
  headerImage: images.valley,
  sections: [
    {
      id: "yoga",
      number: "01",
      title: "Yoga",
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
      id: "breath-and-stillness",
      number: "02",
      title: ["Breathwork\u00a0+", "meditation"],
      body: [
        "Guided sits and conscious breath practices to soften the nervous system and bring you gently back to yourself. Meditations carry longer silences, with quiet reassurance. Nothing rushes.",
      ],
      notes: ["Guided meditation", "Conscious breathwork"],
      image: images.breathStill,
      imageAlt: "A candle and singing bowl on a wooden stool",
      cta: { label: "Get in touch", href: "/contact" },
    },
    {
      id: "holistic-treatments",
      number: "03",
      title: "Facials",
      body: [
        "A slow, nurturing facial that gives your skin, and your mind, a moment to rest. Gentle, attentive and deeply calming, using touch and stillness to help you leave feeling restored, softer and more like yourself.",
      ],
      notes: [],
      image: images.facialStill,
      imageAlt: "Ceramic bowls, botanical oil and folded linen",
      cta: { label: "Enquire about a facial", href: "/contact?type=facials" },
    },
    {
      id: "massage",
      number: "04",
      title: "Massage",
      body: [
        "A grounding massage to release the tension we carry without noticing. Unhurried and intuitive, it's time set aside simply to be cared for, letting the body soften and the breath settle.",
      ],
      notes: [],
      image: images.massageStill,
      imageAlt: "Warm stones and eucalyptus on linen",
      cta: { label: "Enquire about a massage", href: "/contact?type=massage" },
    },
    {
      id: "wellness-at-work",
      number: "05",
      title: "Wellness at Work",
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
