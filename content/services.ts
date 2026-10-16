/**
 * Services page copy.
 * Section order on the page: Yoga, Breath and stillness, Holistic treatments, Wellness at Work.
 * Anchor ids are fixed so homepage links keep working.
 */

export const servicesPage = {
  title: "Services",
  seoDescription:
    "Small group and one-to-one yoga, breathwork, meditation, facials, massage and Wellness at Work with House of Tula.",
  intro:
    "A quiet look at what is on offer. Nothing here is a timetable. If something feels right, get in touch and we can find a way that suits.",
  yoga: {
    id: "yoga",
    title: "Yoga",
    body: "Small group and one-to-one yoga that meets you where you are. Unhurried, attentive, and focused on how a pose feels, not how it looks. There is no public timetable. Tell Emma what you are hoping for, and she will suggest a time.",
    cta: { label: "Get in touch", href: "/contact?type=yoga" },
  },
  breath: {
    id: "breath-and-stillness",
    title: "Breathwork + meditation",
    body: "Guided sits and conscious breath practices to soften the nervous system and widen your inner horizon. Meditations carry longer silences, trimmed with reassurance. Nothing rushes.",
    offerings: ["Guided meditation", "Conscious breathwork"],
  },
  treatments: {
    id: "holistic-treatments",
    title: "Holistic treatments",
    intro: "a place to pause, to be still, and be",
    facials: {
      title: "Facials",
      body: "A slow, nurturing facial that gives your skin, and your mind, a moment to rest. Gentle, attentive and deeply calming, using touch and stillness to help you leave feeling restored, softer and more like yourself.",
    },
    massage: {
      title: "Massage",
      body: "A grounding massage to release the tension we carry without noticing. Unhurried and intuitive, it's time set aside simply to be cared for, letting the body soften and the breath settle.",
    },
  },
  wellnessAtWork: {
    id: "wellness-at-work",
    title: "Wellness at Work",
    body: "Calm, accessible yoga and breathwork for teams. Sessions come to your workplace or a chosen venue, for groups of up to around 25, with no experience needed. A simple way to help people pause, reset and return to work a little lighter.",
    cta: { label: "Enquire about Wellness at Work", href: "/contact?type=wellness-at-work" },
  },
} as const;
