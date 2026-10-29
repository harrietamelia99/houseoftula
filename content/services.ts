/**
 * Services page copy and photos.
 * Sections appear in this order. Anchor ids are fixed so homepage links keep working.
 */

import { images } from "@/content/images";

export const servicesPage = {
  title: "Services",
  heading: "What I offer",
  kicker: "",
  seoDescription:
    "Small group and one-to-one yoga, facials, massage and Wellbeing at Work with House of Tula.",
  intro: [
    "From yoga and meditation to restorative treatments and carefully created events, everything I offer is an invitation to slow down.",
    "My approach is personal and intuitive, shaped and guided by you.",
  ],
  headerImage: images.valley,
  sections: [
    {
      id: "yoga",
      number: "01",
      title: "Yoga",
      /** Optional short line under the title. Leave as "" to hide it. */
      kicker: "",
      body: [
        "Yoga is an opportunity to slow down, reconnect with yourself through your body and breath and create a little space in your day.",
        "Through small group classes and one-to-one sessions, I encourage you to explore how movement feels in your body, rather than how it looks.",
        "Every time we step onto our mat, there\u2019s a familiarity to the practice yet each day brings something new.",
      ],
      notes: ["One-to-one sessions", "Small groups"],
      image: images.studioStill,
      imageAlt: "A mat with bolsters and cork blocks in the studio",
      cta: { label: "Get in touch", href: "/contact?type=yoga" },
    },
    {
      id: "holistic-treatments",
      number: "02",
      title: "Facials",
      kicker: "A little time just for you.",
      body: [
        "Each facial is tailored to your skin's needs, using the beautiful Italian skincare range from Comfort Zone.",
        "A truly relaxing experience that leaves your skin feeling nourished and radiant.",
      ],
      notes: [],
      image: images.facialStill,
      imageAlt: "Comfort Zone skincare on a wooden shelf in the studio",
      cta: { label: "Enquire about a facial", href: "/contact?type=facials" },
    },
    {
      id: "massage",
      number: "03",
      title: "Massage",
      kicker: "Time to slow down, unwind and experience the power of touch.",
      body: [
        "A bespoke massage designed to ease tension, nurture the body and calm the nervous system, using Comfort Zone's beautiful Tranquillity range.",
      ],
      notes: [],
      image: images.massageStill,
      imageAlt: "Comfort Zone Tranquillity oils with eucalyptus",
      cta: { label: "Enquire about a massage", href: "/contact?type=massage" },
    },
    {
      id: "wellness-at-work",
      number: "04",
      title: "Wellbeing at Work",
      kicker: "Bringing a little more balance to the working day.",
      body: [
        "Bespoke wellbeing sessions offering your team time to slow down, reconnect and recharge.",
        "Through gentle yoga, breathwork, mindfulness and meditation, I create a welcoming and nourishing space for everyone, with no previous experience needed.",
        "These practices can help to reduce stress, ease physical and emotional tension and sharpen focus, offering a little breathing space away from the demands of the working day.",
        "Whether it's a one-off session, a regular practice or a bespoke wellbeing event, I can bring House of Tula to your workplace or a venue of your choice.",
        "For groups of up to 25 people.",
      ],
      notes: [],
      image: images.workplace,
      imageAlt: "A candle glowing on a round tray in the studio",
      cta: { label: "Enquire for your team", href: "/contact?type=wellness-at-work" },
    },
  ],
} as const;
