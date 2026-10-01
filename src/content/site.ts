import type { Localized } from "@/i18n/config";
import type { Photo } from "./types";

// Everything in [brackets] is a placeholder for Jorn to fill in.
export const site = {
  name: "[Apartment name]",
  hero: {
    alt: { en: "The living room", no: "Stuen", de: "Das Wohnzimmer", fr: "Le salon", zh: "客厅" },
    placeholder: "[Photo: living room or view]",
  } satisfies Photo,

  wifi: {
    // Only the network name is public. The password is on the card in the
    // apartment and in the booking message (later: behind the per-guest token link).
    network: "[Network name]",
  },

  contact: {
    /** Full international number, digits only, no + or spaces. Used for the WhatsApp link. */
    whatsapp: "47XXXXXXXX",
    phone: "+47 XXX XX XXX",
    email: "[your@email.com]",
  },

  area: {
    title: { en: "Around the area", no: "I nærområdet", de: "In der Umgebung", fr: "Dans les environs", zh: "周边" } as Localized,
    body: {
      en: "[Groceries, Sunday opening hours, hikes and food nearby]",
      no: "[Butikker, søndagsåpent, turer og mat i nærheten]",
      de: "[Einkaufen, Sonntagsöffnung, Wandern und Essen]",
      fr: "[Courses, horaires du dimanche, randonnées et restaurants à proximité]",
      zh: "[附近的超市、周日营业时间、徒步路线和餐厅]",
    } as Localized,
  },
};
