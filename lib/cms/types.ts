/** Everything Emma changes in the editing area, stored as one small JSON file. */

export type CmsEvent = {
  id: string;
  title: string;
  /** YYYY-MM-DD, used for sorting and hiding events once they have passed. */
  date: string;
  /** Free text, for example "7pm to 8.30pm". */
  time: string;
  location: string;
  /** Optional, for example "£25". */
  price: string;
  description: string;
  /** Optional photo. Falls back to the default event photo. */
  image: string;
};

export type CmsText = string | string[];

export type CmsData = {
  /** Changed wording, keyed by field path, for example "home.closingCta.body". */
  text: Record<string, CmsText>;
  /** Replacement photos, keyed by the name in content/images.ts. */
  images: Record<string, string>;
  events: CmsEvent[];
  updatedAt?: string;
};

export const emptyCms = (): CmsData => ({ text: {}, images: {}, events: [] });
