/**
 * The wording Emma can change, page by page.
 * kind "text": one line. "lines": a heading split over lines (one per line).
 * "paragraphs": body text, one paragraph per line.
 */

export type FieldKind = "text" | "lines" | "paragraphs";

export type Field = { path: string; label: string; kind: FieldKind; hint?: string };

export type FieldGroup = { title: string; fields: Field[] };

export type EditablePage = { slug: string; title: string; href: string; summary: string; groups: FieldGroup[] };

const offering = (i: number, name: string): FieldGroup => ({
  title: `${name} card`,
  fields: [
    { path: `home.offerings.items.${i}.title`, label: "Title", kind: "text" },
    { path: `home.offerings.items.${i}.description`, label: "Short description", kind: "text" },
  ],
});

const service = (i: number, name: string): FieldGroup => ({
  title: name,
  fields: [
    { path: `services.sections.${i}.title`, label: "Title", kind: "text" },
    { path: `services.sections.${i}.kicker`, label: "Line under the title", kind: "text", hint: "Leave empty to hide it." },
    { path: `services.sections.${i}.body`, label: "Main text", kind: "paragraphs" },
    { path: `services.sections.${i}.cta.label`, label: "Button wording", kind: "text" },
  ],
});

const testimonial = (i: number): FieldGroup => ({
  title: `Testimonial ${i + 1}`,
  fields: [
    { path: `testimonials.${i}.quote`, label: "Their words", kind: "text" },
    { path: `testimonials.${i}.name`, label: "Name", kind: "text" },
  ],
});

export const editablePages: EditablePage[] = [
  {
    slug: "home",
    title: "Home",
    href: "/",
    summary: "Welcome lines, the studio, what I offer, quotes and testimonials.",
    groups: [
      {
        title: "Under the welcome banner",
        fields: [
          { path: "home.hero.supporting", label: "Lines under “by Emma Hasell”", kind: "lines" },
          { path: "home.hero.primaryCta.label", label: "Button wording", kind: "text" },
        ],
      },
      {
        title: "Tula means balance",
        fields: [{ path: "home.statement.line", label: "Statement", kind: "lines" }],
      },
      {
        title: "A peaceful place",
        fields: [
          { path: "home.aboutTeaser.heading", label: "Heading", kind: "lines" },
          { path: "home.aboutTeaser.body", label: "Main text", kind: "paragraphs" },
          { path: "home.aboutTeaser.link.label", label: "Link wording", kind: "text" },
        ],
      },
      {
        title: "Ways to find a little more balance",
        fields: [
          { path: "home.offerings.heading", label: "Heading", kind: "lines" },
          { path: "home.offerings.lead", label: "Main text", kind: "paragraphs" },
        ],
      },
      offering(0, "Yoga"),
      offering(1, "Facials"),
      offering(2, "Massage"),
      offering(3, "Wellbeing at Work"),
      {
        title: "Quote over the photo",
        fields: [{ path: "home.band.quote", label: "Quote", kind: "lines" }],
      },
      {
        title: "Wellbeing at Work",
        fields: [
          { path: "home.wellness.heading", label: "Heading", kind: "text" },
          { path: "home.wellness.subheading", label: "Line under the heading", kind: "text" },
          { path: "home.wellness.body", label: "Main text", kind: "paragraphs" },
          { path: "home.wellness.cta.label", label: "Button wording", kind: "text" },
          { path: "home.wellness.secondary.label", label: "Link wording", kind: "text" },
        ],
      },
      testimonial(0),
      testimonial(1),
      testimonial(2),
      {
        title: "Ready to pause?",
        fields: [
          { path: "home.closingCta.headline", label: "Heading", kind: "text" },
          { path: "home.closingCta.body", label: "Line underneath", kind: "text" },
          { path: "home.closingCta.link.label", label: "Button wording", kind: "text" },
        ],
      },
    ],
  },
  {
    slug: "about",
    title: "About (Meet Emma)",
    href: "/about",
    summary: "Your story, the quote and the closing line.",
    groups: [
      {
        title: "Your story",
        fields: [
          { path: "about.heading", label: "Heading", kind: "text" },
          {
            path: "about.paragraphs",
            label: "Your story",
            kind: "paragraphs",
            hint: "The first paragraph shows larger, next to your photo.",
          },
        ],
      },
      { title: "Quote over the photo", fields: [{ path: "about.band.quote", label: "Quote", kind: "lines" }] },
      { title: "Closing line", fields: [{ path: "about.closing", label: "Closing line", kind: "lines" }] },
    ],
  },
  {
    slug: "services",
    title: "Services (What I offer)",
    href: "/services",
    summary: "Yoga, Facials, Massage and Wellbeing at Work.",
    groups: [
      {
        title: "Top of the page",
        fields: [
          { path: "services.heading", label: "Heading", kind: "text" },
          { path: "services.intro", label: "Introduction", kind: "paragraphs" },
        ],
      },
      service(0, "Yoga"),
      service(1, "Facials"),
      service(2, "Massage"),
      service(3, "Wellbeing at Work"),
    ],
  },
  {
    slug: "events",
    title: "Events page",
    href: "/events",
    summary: "The introduction at the top of the Events page.",
    groups: [
      {
        title: "Top of the page",
        fields: [
          { path: "events.heading", label: "Heading", kind: "text" },
          { path: "events.kicker", label: "Line under the heading", kind: "text" },
          { path: "events.intro", label: "Introduction", kind: "paragraphs" },
        ],
      },
      {
        title: "When there are no events",
        fields: [{ path: "events.empty.message", label: "Message", kind: "lines" }],
      },
    ],
  },
  {
    slug: "connect",
    title: "Connect",
    href: "/contact",
    summary: "The introduction and the thank-you message on the form.",
    groups: [
      {
        title: "Top of the page",
        fields: [
          { path: "contact.heading", label: "Heading", kind: "text" },
          { path: "contact.intro", label: "Introduction", kind: "text" },
        ],
      },
      {
        title: "Contact form",
        fields: [{ path: "contact.success", label: "Message after someone sends the form", kind: "text" }],
      },
    ],
  },
];

export function findPage(slug: string) {
  return editablePages.find((p) => p.slug === slug);
}

/** Shape of the crop box: width / height. Matches how each photo is shown on the site. */
export type CropRatio = { w: number; h: number };

/** Event photos are shown in a 4:3 frame. */
export const eventPhotoRatio: CropRatio = { w: 4, h: 3 };

/** Photos Emma can replace, in the order they appear on the site. Keys match content/images.ts. */
export const editablePhotos: { key: string; label: string; where: string; ratio: CropRatio }[] = [
  { key: "welcomeBanner", label: "Welcome banner", where: "Top of the Home page", ratio: { w: 1179, h: 500 } },
  { key: "wireArt", label: "The studio, large photo", where: "Home, \u201cA peaceful place\u201d", ratio: { w: 3, h: 4 } },
  { key: "peonies", label: "The studio, small photo", where: "Home, \u201cA peaceful place\u201d", ratio: { w: 4, h: 5 } },
  { key: "studioStill", label: "Yoga", where: "Home card and the Services page", ratio: { w: 4, h: 5 } },
  { key: "facialStill", label: "Facials", where: "Home card and the Services page", ratio: { w: 4, h: 5 } },
  { key: "massageStill", label: "Massage", where: "Home card and the Services page", ratio: { w: 4, h: 5 } },
  { key: "workplace", label: "Wellbeing at Work", where: "Home card and the Services page", ratio: { w: 4, h: 5 } },
  { key: "buddhaWindow", label: "Quote photo", where: "Home, behind \u201cBe where your feet are\u201d", ratio: { w: 4, h: 3 } },
  { key: "candleLandscape", label: "Wellbeing at Work section", where: "Home, near the bottom", ratio: { w: 3, h: 2 } },
  { key: "valley", label: "Countryside photo", where: "Services page top and the About quote", ratio: { w: 4, h: 3 } },
  { key: "emmaPortrait", label: "Your portrait", where: "About page, next to your story", ratio: { w: 3, h: 4 } },
  { key: "emmaCamelPose", label: "Your yoga photo", where: "About page, near the bottom", ratio: { w: 4, h: 5 } },
  { key: "pendantLight", label: "Events page photo", where: "Top of the Events page", ratio: { w: 3, h: 4 } },
  { key: "eventFallback", label: "Default event photo", where: "Used for events without their own photo", ratio: { w: 4, h: 3 } },
  { key: "connectSun", label: "Connect illustration", where: "Top of the Connect page", ratio: { w: 1, h: 1 } },
];
