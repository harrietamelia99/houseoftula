/**
 * Shared site details, navigation and button labels.
 * Edit this file to change the name, address, phone, email, Instagram or nav.
 * Do not edit the header or footer components for copy changes.
 */

export const site = {
  name: "House of Tula",
  taglineUpper: "yoga + wellness",
  ownerName: "Emma Hasell",
  locality: "Chew Magna, Bristol",
  shortLocation: "Chew Magna, BS40",
  /** Registered business address. */
  registeredAddress: "2 Brook Cottages, Chew Magna, Bristol BS40 8RJ",
  email: "hellohouseoftula@icloud.com",
  phoneDisplay: "07817 467424",
  phoneTel: "+447817467424",
  instagram: {
    handle: "@house_of_tula_",
    url: "https://www.instagram.com/house_of_tula_/",
    handlePendingConfirmation: false,
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;

/** Header and footer buttons. Both go to the contact page. */
export const contactCta = {
  label: "Get in touch",
  href: "/contact",
} as const;

export const seo = {
  /** Used as the suffix in page titles. */
  titleSuffix: "House of Tula - Yoga + Wellness, Chew Magna",
} as const;
