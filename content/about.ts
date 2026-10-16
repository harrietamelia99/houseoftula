/**
 * About page copy and photos.
 * Paragraphs render in order. Extra photos are optional: use none, one, or two.
 */

import { images } from "@/content/images";

export const aboutPage = {
  title: "About",
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
  extraPhotos: [] as { src: string; alt: string }[],
  pullQuote: {
    kicker: "Tula means balance",
    line: "A place to pause, where breath, movement and stillness meet.",
  },
  paragraphs: [
    "Yoga has been part of my life for over 15 years, and in that time it has transformed not only how I move, but how I live.",
    "What began as a purely physical practice has gradually become a way of life, and something much deeper: a space to slow down, breathe and be present in the little moments of every day.",
    // TODO: Emma to confirm. Alternative: "…what the Yoga Sutras describe as chitta vritti nirodha, the stilling of the fluctuations of the mind…"
    "It has taught me that beneath the noise of the mind, what yogic philosophy calls chitta vritti, the fluctuations of the mind, there is always a steadiness. A stillness. A quiet awareness that sees it all.",
    "I've learnt that balance isn't about having everything perfectly aligned. It's about finding moments of calm amongst the busyness of everyday life, meeting ourselves exactly where we are, and remembering to look up and see the beauty all around us.",
    // TODO: facials and massage sentence pending Emma's approval
    "Tula means balance. At the heart of House of Tula, I hope to have created a beautiful space, nestled in the Chew Valley countryside, where you can move, pause, breathe and reconnect with yourself. Alongside yoga, you'll find nurturing facials and massage, each designed to help you slow down and restore a little balance.",
    "Somewhere you can find a little time, stillness, and just be.",
    "Yoga isn't about changing who we are. It's a practice we get to do, to embrace who we already are beneath our never-ending to-do lists.",
  ],
} as const;
