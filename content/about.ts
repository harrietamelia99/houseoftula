/**
 * About page copy and photos.
 * Paragraphs render in order. Extra photos are optional: use none, one, or two.
 */

import { images } from "@/content/images";

export const aboutPage = {
  title: "About",
  heading: "Meet Emma",
  kicker: "",
  /** Short line in the page header. */
  headerIntro: "",
  /** Full-width photograph with a quote, under the story. */
  band: {
    image: images.valley,
    quote: ["A place to pause,", "where breath, movement and stillness meet."],
  },
  seoDescription:
    "Emma Hasell on House of Tula: a place to pause in the Chew Valley, with yoga, facials and massage.",
  portrait: {
    src: images.emmaPortrait,
    alt: "Emma Hasell, founder of House of Tula",
  },
  /**
   * Optional extra photos (teaching, a child's pose, the room).
   * Leave this array empty, or add one or two items: { src: "/images/your-photo.jpg", alt: "..." }
   */
  extraPhotos: [
    { src: images.emmaCamelPose, alt: "Emma in camel pose on an outdoor deck, surrounded by trees" },
  ] as { src: string; alt: string }[],
  pullQuote: {
    kicker: "",
    line: "A place to pause, where breath, movement and stillness meet.",
  },
  paragraphs: [
    "Yoga has been part of my life for over 15\u00a0years, and in that time it has changed not only how I move, but how I live.",
    "What began as a purely physical practice has gradually become something much deeper. A way to slow down, reconnect with myself and find a little more stillness amongst the busyness of everyday life.",
    "Over the years, yoga has taught me that balance isn\u2019t about having everything perfectly aligned. It\u2019s about learning to meet ourselves where we are, noticing the little things and finding moments of calm, even when life feels anything but calm.",
    "Beneath the busyness of the thinking and the doing to sit in the stillness of being.",
    "And perhaps every time we step onto our mat, it\u2019s a familiar practice, but a new day. A chance to begin again, exactly as we are.",
    "House of Tula is a reflection of everything I love about this practice. A peaceful space nestled in the Chew Valley countryside, where you can move, pause, breathe and just be.",
    "Alongside yoga, I offer nurturing facials and massage, each thoughtfully designed to give you a little time just for yourself.",
    "A place to slow down and create both physical and mental stillness.",
  ],
} as const;
