import type { Localized } from "@/i18n/config";

/**
 * A photo. Leave `src` empty while you don't have the real picture yet:
 * the site then shows a labelled placeholder box instead.
 * Put real photos in /public/photos and reference them as "/photos/kitchen.jpg".
 */
export type Photo = {
  src?: string;
  alt: Localized;
  /** Shown on the placeholder box until the real photo exists. */
  placeholder?: string;
};

/** A numbered dot on a room photo. x/y are percentages from the top-left corner. */
export type Marker = { n: number; x: number; y: number };

export type RoomPhoto = Photo & { markers: Marker[] };

/** One "where to find it" entry. `n` matches the marker number on the photo. */
export type RoomItem = {
  n: number;
  name: Localized;
  where?: Localized;
  /** If this item is an appliance with its own guide, link to it. */
  guide?: string;
};

export type Room = {
  slug: string;
  name: Localized;
  intro?: Localized;
  cover: Photo;
  photos: RoomPhoto[];
  items: RoomItem[];
};

export type GuideStep = {
  title: Localized;
  body: Localized;
  photo?: Photo;
  /** Short clip shown instead of the photo (the photo-style poster image shows before playing). */
  video?: string;
  poster?: string;
};

export type Trouble = { problem: Localized; fix: Localized };

/** An appliance or "how does this work" page. */
export type Guide = {
  slug: string;
  room: string;
  title: Localized;
  intro?: Localized;
  /** One or two sentences that solve the problem for most guests. */
  short: Localized;
  /** Highlighted "please" note, e.g. what not to do with the appliance. */
  note?: Localized;
  cover?: Photo;
  steps: GuideStep[];
  /** Path under /public or an external URL to a short clip. */
  video?: string;
  /** Still image shown before the video plays. */
  poster?: string;
  troubles?: Trouble[];
  related?: string[];
  /** Show this guide's question in "Guests often ask" on the home screen. */
  faq?: Localized;
};

/** Arrival and check-out are simple step lists with photos. */
export type StepPage = {
  title: Localized;
  intro?: Localized;
  steps: GuideStep[];
};
