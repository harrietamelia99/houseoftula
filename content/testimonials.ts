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
      "Whenever I arrive at House of Tula, I always leave feeling as though a weight has been lifted off my shoulders. Emma has a beautiful, empathetic nature and is delightfully intuitive, always tuning into exactly what you need in that moment, be it warm blankets, a giggle, or total silence. The studio itself is gorgeous, a sanctuary where you can switch off and reconnect with yourself. Every session leaves me feeling lighter, stretched, relaxed, and more myself. It's a special space, and Emma has a gift for making you feel nurtured, understood, and restored. She really is amazing.",
    name: "Natalie",
  },
  {
    quote:
      "I've been attending Emma's yoga evenings for many years now and always find them so enjoyable. I always come away feeling calmer, more relaxed and somehow better able to cope with the mental load that comes with juggling mum life, work and everything in between! Emma creates such a lovely, welcoming atmosphere and I genuinely look forward to every session.",
    name: "Jennine",
  },
  {
    quote: "Without a doubt the best money and time I spend every week. Miss it terribly if I can't make it.",
    name: "Kelly",
  },
];
