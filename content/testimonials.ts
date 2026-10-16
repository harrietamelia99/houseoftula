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

export const testimonials: Testimonial[] = [];
