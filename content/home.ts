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
    heading: ["A peaceful place", "in the countryside"],
    body: [
      "Tucked away in Chew Magna, House of Tula is a small, welcoming yoga and wellbeing studio surrounded by nature.",
      "Through yoga, breathwork and meditation, I offer a gentle invitation to slow down, reconnect with yourself and find a little more balance.",
    ],
    mainImage: images.wireArt,
    mainImageAlt: "The black wire artwork on the wall of Emma's yoga shed",
    detailImage: images.peonies,
    detailImageAlt: "Pink peonies in a stoneware vase beside a Comfort Zone Tranquillity blend",
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
          "Yoga is an opportunity to slow down, reconnect with yourself through your body and breath and create a little space in your day.",
        href: "/services#yoga",
        image: images.studioStill,
      },
      {
        number: "02",
        title: "Facials",
        description:
          "A little time just for you. Each facial is tailored to your skin's needs, using the beautiful Italian skincare range from Comfort Zone.",
        href: "/services#holistic-treatments",
        image: images.facialStill,
      },
      {
        number: "03",
        title: "Massage",
        description:
          "Time to slow down, unwind and experience the power of touch, using Comfort Zone's beautiful Tranquillity range.",
        href: "/services#massage",
        image: images.massageStill,
      },
      {
        number: "04",
        title: "Wellbeing at Work",
        description:
          "Bespoke wellbeing sessions offering your team time to slow down, reconnect and recharge.",
        href: "/services#wellness-at-work",
        image: images.workplace,
      },
    ],
  },
  /** Full-width photograph with a quote. */
  band: {
    image: images.buddhaWindow,
    quote: ["Be where your feet are", "Return to the breath", "Again and again and again"],
    attribution: "Emma Hasell",
  },
  wellness: {
    eyebrow: "Wellbeing at Work",
    heading: "Wellbeing at Work",
    /** Line under the heading. */
    subheading: "Bringing a little more balance to the working day.",
    body: [
      "Bespoke wellbeing sessions offering your team time to slow down, reconnect and recharge.",
      "Gentle yoga, breathwork, mindfulness and meditation can help to reduce stress, ease physical and emotional tension and sharpen focus, with no previous experience needed.",
    ],
    image: images.candleLandscape,
    imageAlt: "A candle glowing on a round tray in the studio",
    cta: { label: "Enquire for your team", href: "/contact?type=wellness-at-work" },
    secondary: { label: "See upcoming events", href: "/events" },
  },
  /**
   * Slim Wellness at Work note above the closing band. Set to true to show it.
   * (The homepage already has a Wellness at Work feature, so it is off by default.)
   */
  showWellnessPromo: false,
  wellnessPromo: {
    lead: "Wellbeing at Work: bespoke sessions for teams of up to 25.",
    linkLabel: "Find out more",
    href: "/services#wellness-at-work",
  },
  closingCta: {
    headline: "Ready to pause?",
    body: "I'd love to hear from you.",
    link: { label: "Get in touch", href: "/contact" },
  },
  seoDescription:
    "Yoga, breathwork, facials and massage with Emma Hasell at House of Tula in Chew Magna, Bristol.",
} as const;
