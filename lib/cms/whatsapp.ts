import { site } from "@/content/site";

/** Emma's WhatsApp number in international format, digits only. */
export const whatsappNumber = site.phoneTel.replace(/\D/g, "");

export function whatsappBookingLink(title: string, dateLabel: string): string {
  const when = dateLabel ? ` on ${dateLabel}` : "";
  const text = `Hi Emma, I'd love to book a place at ${title}${when}.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}
