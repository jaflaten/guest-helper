import type { Localized } from "@/i18n/config";
import type { Photo } from "./types";

// Everything in [brackets] is a placeholder for Jorn to fill in.
export const site = {
  name: "[Apartment name]",
  hero: {
    alt: { en: "The living room", no: "Stuen", de: "Das Wohnzimmer" },
    placeholder: "[Photo: living room or view]",
  } satisfies Photo,

  wifi: {
    network: "[Network name]",
    password: "[Wi-Fi password]",
  },

  contact: {
    /** Full international number, digits only, no + or spaces. Used for the WhatsApp link. */
    whatsapp: "47XXXXXXXX",
    phone: "+47 XXX XX XXX",
    email: "[your@email.com]",
  },

  area: {
    title: { en: "Around the area", no: "I nærområdet", de: "In der Umgebung" } as Localized,
    body: {
      en: "[Groceries, Sunday opening hours, hikes and food nearby]",
      no: "[Butikker, søndagsåpent, turer og mat i nærheten]",
      de: "[Einkaufen, Sonntagsöffnung, Wandern und Essen]",
    } as Localized,
  },
};
