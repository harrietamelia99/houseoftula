/**
 * Centralised copy for House of Tula. Update text here — components read from exports below.
 *
 * Full client onboarding responses (May 2026) live in `docs/source/house-of-tula-website-onboarding-form-2026-05-18.csv`
 * and are summarised in `onboardingSubmission` for auditability.
 */

/** Structured snapshot from Emma Hasell’s submitted onboarding form — keep in sync when the CSV is updated. */
export const onboardingSubmission = {
  submittedAt: "2026-05-18T13:53:52+01:00",
  legalName: "Emma Hasell",
  phone: "07817467424",
  registeredAddress: "2 Brook Cottages, Chew Magna, BS40 8RJ",
  hasExistingWebsiteOrDomain: false,
  socialHandlesNote: "Instagram (handle to be confirmed)",
  originStory: `Tula means balance in Sanskrit. In busy, overstimulated seasons we need more balance — attention is pulled outward easily, so House of Tula exists to offer a space to be, to pause, to breathe, and to focus inward for peace and stillness. Yoga helps us shine a light on thought, breath, and body so we can soften, listen, let go, and hear what we need.`,
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
    "Often roughly 30–60; guests who want time for a personal, intimate session with full attention — large classes can feel intimidating when you're new. The studio is relaxed and inviting, nestled in Chew Magna with nature nearby.",
  pointsOfDifference: `Yoga is often taught as physical exercise; it is — yet it's also an inward path toward space, peace, and stillness: to stop and feel and be, not only to think. Emma teaches yoga as a feeling — not something to achieve or "look right" in every posture — inviting breath, curiosity, and care through yoga, breathwork, and guided meditation. Beautiful products for treatments; a calm, inviting room.`,
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
  photosNote: "To be forwarded / phone snapshots for now — ok per Emma",
  writtenContentStatus: "some, needs refining",
  testimonialsStatus: "not yet — can gather",
  launchTiming: "flexible — not in a hurry; time to get it right",
  communicationPreference: "either is fine",
  otherNotes:
    "New inbox hello@houseoftula — new to digital; may need extra guidance (bear with).",
} as const;

export const site = {
  name: "House of Tula",
  taglineUpper: "yoga + wellness",
  ownerName: "Emma Hasell",
  locality: "Chew Magna, Somerset",
  shortLocation: "Chew Magna, BS40",
  /** Registered business address (onboarding form). */
  registeredAddress: "2 Brook Cottages, Chew Magna, BS40 8RJ",
  email: "hello@houseoftula.co.uk",
  phoneDisplay: "07817 467424",
  phoneTel: "+447817467424",
  /** Confirm handle and URL with Emma before launch (form listed Instagram only). */
  instagram: {
    handle: "@houseoftula",
    url: "https://www.instagram.com/",
    handlePendingConfirmation: true,
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;

export const homeContent = {
  hero: {
    titleLines: ["A space to be.", "Not to perform."],
    subheading:
      "Yoga, breathwork and holistic treatments in Chew Magna, Somerset.",
    primaryCta: { label: "Discover Tula", href: "/about" },
    reservationCta: { label: "Enquire calmly", href: "/contact" },
    secondaryEyebrow: "House of Tula · Chew Magna",
    figureAlt:
      "Placeholder portrait warm studio vignette awaiting Emma's lifestyle photography beside the headline",
    ticker: [
      "Still rooms",
      "Slower rhythms",
      "Breath‑led attention",
      "Earth beneath you",
      "Seasonal softness",
      "Private + small gatherings",
      "Treatments stitched with care",
    ],
  },
  pullQuote:
    "Tula means balance in Sanskrit — in busy seasons, we're here to help you find yours.",
  servicesIntro:
    "A quiet studio in the village. A little time carved out just for you.",
  servicesHeading: "Ways we hold your attention",
  servicesBandLead:
    "Each offering is conversational rather than scripted — pacing stays gentle, cues stay spacious, endings stay unrushed.",
  services: [
    {
      title: "Yoga",
      description:
        "One-to-one guidance, children's sessions and gentle small groups rooted in sensation over shape.",
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
        "Facials and massage that honour restoration as part of wellbeing, not an afterthought.",
      href: "/services#holistic-treatments",
    },
    {
      title: "Events + pop-ups",
      description:
        "Seasonal circles, shared practice and gatherings when the rhythm of the year calls for it.",
      href: "/events",
    },
  ],
  aboutTeaser: {
    studioEyebrow: "The studio",
    heading: "A studio that asks very little",
    body: [
      "House of Tula is run by Emma Hasell from an intimate studio in Chew Magna — relaxed, inviting, with nature nearby. Sessions suit guests who want honest attention without the noise of huge drop-in rooms.",
      "This is yoga and wellness slowed right down — companionable guidance without pressure to strive or perform.",
    ],
    imageAlt:
      "Placeholder for a softly lit photograph of the House of Tula studio interior in warm, natural tones",
    imageAltFlank:
      "Placeholder for a vignette capturing props, linens or hands pausing beside the hearth of the studio",
    link: { label: "More about Emma", href: "/about" },
  },
  testimonials: [
    {
      quote:
        "Emma holds the room without rushing it. For the first time in years my shoulders unclenched halfway through.",
      attribution: "Illustrative line — Emma is gathering real client words",
    },
    {
      quote:
        "My daughter actually looks forward to her after‑school yoga. Gentle, imaginative, wonderfully calm.",
      attribution: "Illustrative line — Emma is gathering real parent feedback",
    },
    {
      quote:
        "The facial felt like slowing down distilled. I floated home through the lanes.",
      attribution: "Illustrative line — Emma is gathering real guest reflections",
    },
  ],
  closingCta: {
    headline: "Ready to pause?",
    body: "If something here lands gently, we'd love to hear from you.",
    link: { label: "Say hello", href: "/contact" },
  },
} as const;

export const aboutPage = {
  title: "About House of Tula",
  seoDescription:
    "Learn about Emma Hasell, the studio in Chew Magna, Somerset, and how House of Tula holds space for slow, inward yoga and holistic care.",
  story: [
    `Tula means balance in Sanskrit. Emma opened House of Tula because modern life keeps many of us overstimulated — attention tugged outward — and she wanted a studio where people could pause, breathe, and turn gently inward toward peace and stillness.`,
    `Yoga, to Emma, is an ancient practice that softens the glare on thought, breath, and body so we notice where to soften, listen, let go, and meet what our body and mind actually need that day.`,
    `Guests who feel at home here are often around their thirties to sixties, carving time for intimate sessions where the focus stays with them — large drop-in classes can feel daunting when you're new. The room stays relaxed and inviting, nestled in Chew Magna with nature within walking distance.`,
    `Plenty of yoga looks like physical exercise; it shapes the body, yet it can also thread inward — toward space, peace, and stillness — invitations to stop, feel, and simply be instead of only thinking or achieving.`,
    `Emma teaches movement, breath, and meditation as feeling first: less about performing a shape, more about curiosity in each posture, following the breath to see what arises and what you need through practice, breathwork, or guided sits. Treatments introduce beautiful products; the studio stays calm and welcoming throughout.`,
    `The space remains purposely small — a hearth rather than a stage — because intimacy helps people listen more kindly to themselves. Teaching still carries biomechanical clarity alongside devotional softness: fewer tricks, more noticing where breath meets ribs, weight meets earth, and the mind loosens its commentary.`,
    `Alongside one-to-one work, children's and small-group sessions, holistic touch, and seasonal gatherings, Emma is building corporate yoga and wellness-at-work offers for teams who need steadier rhythms. Say hello via Contact when something bespoke would serve your workspace.`,
  ],
  pullQuote:
    "I teach yoga as a feeling rather than something you have to achieve — or look a certain way in every posture.",
  space: {
    heading: "The space",
    paragraphs: [
      "The studio is calm and unassuming, tucked among village lanes instead of commuter routes. Morning light washes the floor in slower tones; rainfall on the skylight invites a quieter listening.",
      "Decor follows the countryside outside the door — linen, reclaimed wood touches, greenery in corners, nothing clamouring for applause. Props are thoughtfully chosen; playlists, when music features, stay low.",
    ],
    imageAlt:
      "Placeholder for photography of trees and muted landscape near Chew Magna framing the ethos of House of Tula",
  },
  philosophy: [
    {
      line: "Breathe first.",
      counterpart: "Think second.",
    },
    {
      line: "Stay honest with sensation.",
      counterpart: "It always knows.",
    },
    {
      line: "Your practice, your pace.",
      counterpart: "Support sits beside it.",
    },
  ],
  corporate: {
    heading: "Corporate yoga · wellness at work",
    copy: `Emma’s onboarding brief explicitly includes workplace sessions: approachable yoga, breath resets, and gentle wellbeing for teams who spend long days at desks or on their feet. Packages can stay light-touch or build into rhythmic programmes — share what your organisation needs and she’ll answer grounded next steps.`,
    link: { label: "Explore workplace services", href: "/services#corporate-wellness" },
  },
} as const;

export const servicesPage = {
  title: "What we offer",
  seoDescription:
    "Explore private yoga, meditation, conscious breathwork, holistic facials and massage, seasonal gatherings, and tailored workplace wellbeing with House of Tula in Somerset.",
  intro: `Rather than overwhelm with lists, here's the shape of what we hold. Each pathway can be sculpted to honour your season of life — no chasing performance metrics, simply honest care that meets you.`,
  enquiryNote:
    `Pricing and a public class timetable are not on the website at this stage — Emma prefers to keep those conversations relational when you're ready. Share what's alive for you and she'll reply with clear next steps.`,
  categories: [
    {
      id: "yoga",
      title: "Yoga journeys",
      body: `One-to-one sessions tend to sensory awareness, pacing and sustainable strength. Children's yoga unfolds through story, tactile play and giggles grounded in embodied listening. Small group classes honour subtle layers — mobility, steadiness and rest woven together.`,
      services: ["1:1 Yoga", "Children's Yoga · after‑school clubs and term time care", "Small Group Yoga"],
    },
    {
      id: "breath-and-stillness",
      title: "Breath + still inner practice",
      body: `Meditations carry longer silences trimmed with reassurance. Conscious breath sessions explore patterns that coax the nervous system toward ease without forcing intensity. Nothing rushes.`,
      services: ["Guided Meditation", "Conscious Breathwork"],
    },
    {
      id: "holistic-treatments",
      title: "Holistic treatments",
      body: `Facials utilise nurturing botanical formulations and rhythmic touch to invite circulation and calm. Massage sessions tend toward full-bodied listening — slow, rhythmic strokes for whole being integration or focussed attention where back tension lingers.`,
      services: ["Bespoke Facials", "Full Body Massage", "Back Massage"],
    },
    {
      id: "gatherings",
      title: "Seasonal events + pop-ups",
      body: `When the wheel turns or community curiosity swells, we host seasonal circles, speciality workshops or pop-up collaborations. Each gathering is stitched with softness and often finishes with herbal tea.`,
      services: ["Seasonal Events + Pop-ups"],
    },
    {
      id: "corporate-wellness",
      title: "Corporate yoga · wellness at work",
      body: `Emma specifically asked to feature workplace wellbeing: calm resets for busy teams, embodied breaks, and approachable yoga suited to offices, studios, away-days or retreat rhythms. Nothing flashy — steadier nervous systems alongside real deadlines.`,
      services: ["Corporate yoga sessions", "Wellness-at-work programmes (tailored)"],
    },
  ] as const,
  cta: {
    headline: "Interested?",
    body: `Share what's alive for you — a question, an invitation, maybe just the need for a pause — and Emma will reply with grounded next steps.`,
    link: { label: "Get in touch", href: "/contact" },
  },
} as const;

export const eventsPage = {
  title: "Events + Pop-ups",
  seoDescription:
    "Discover upcoming seasonal events, pop-up sessions and community gatherings hosted by House of Tula near Bristol.",
  intro: `Seasonal circles, speciality workshops and pop-up collaborations land here whenever they ripen. Dates unfurl organically — invitations stay soft, anchored in embodied presence rather than hype.`,
  /** Replace with `{ title, date, description }[]` entries as bookings confirm. */
  events: [] as readonly {
    title: string;
    date: string;
    description: string;
    ctaLabel?: string;
    ctaHref?: string;
  }[],
  emptyState: {
    title: `We're planning something beautiful.`,
    subtitle: `Nothing is scheduled publicly just yet — there's no rush, and dates will land here when they're ready. Ask after seasonal circles or pop-ups via Contact; gentle reminders will also surface once Instagram is fully live.`,
    link: { label: "Ask about upcoming gatherings", href: "/contact" },
  },
} as const;

export const contactPage = {
  title: "Get in touch",
  seoDescription:
    "Contact Emma at House of Tula about yoga sessions, holistic treatments, events or wellbeing enquiries near Chew Magna, Somerset.",
  intro:
    "Whether you're curious about a class, want to book a treatment, need workplace wellbeing, or simply want to say hello — Emma would love to hear from you. New to digital tools? No problem — we'll move gently and explain each step.",
  interests: [
    "Yoga",
    "Meditation",
    "Breathwork",
    "Treatment",
    "Events",
    "Corporate Wellness",
    "Other",
  ] as const,
  formNotes: `Submit opens your preferred email compose window with everything prepopulated — a gentle bridge until a booking partner arrives.`,
  studioNote: `Registered studio address: ${site.registeredAddress}. Full directions can arrive after you touch base so the space stays easy to find without publishing every lane online.`,
  instagramCta:
    site.instagram.handlePendingConfirmation
      ? `Instagram is on the way — ${site.instagram.handle} is a placeholder until Emma confirms the live handle, then we'll wire the exact link.`
      : `Follow along on Instagram (${site.instagram.handle}) for quiet studio glimpses.`,
} as const;

export const seo = {
  /** Used as suffix in page titles. */
  titleSuffix: "House of Tula - Yoga + Wellness, Chew Magna",
} as const;
