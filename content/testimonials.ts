/**
 * Testimonials.
 * Add real guest words here. Use 2 or 3 entries.
 * Leave the array empty to hide the whole section.
 * Carousel controls only appear when there are 2 or more.
 *
 * Example entry (delete the comment slashes when you use it):
 * {
 *   quote: "A sentence in the guest's own words.",
 *   name: "First name",
 * }
 */

export type Testimonial = {
  quote: string;
  name: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I've been attending Emma's yoga evenings for many years now and always find them so enjoyable. I always come away feeling calmer, more relaxed and somehow better able to cope with the mental load that comes with juggling mum life, work and everything in between! Emma creates such a lovely, welcoming atmosphere and I genuinely look forward to every session.",
    name: "Yoga evenings guest",
  },
];
