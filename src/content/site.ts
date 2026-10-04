import type { Localized } from "@/i18n/config";
import type { Photo } from "./types";

// Everything in [brackets] is a placeholder for Jorn to fill in.
export const site = {
  name: "Fossvegen 7",
  hero: {
    alt: { en: "The living room", no: "Stuen", de: "Das Wohnzimmer", fr: "Le salon", zh: "客厅" },
    src: "/photos/living-room.jpg",
  } satisfies Photo,

  wifi: {
    // Set in Vercel: WIFI_NAME (public, on the home page) and WIFI_PASSWORD
    // (shown only on a guest's stay page during their stay).
    network: process.env.WIFI_NAME ?? "[Network name]",
  },

  /** When the door code is shown on the stay page, and check-out time. 24h, Norwegian time. */
  stay: {
    checkIn: "16:00",
    checkOut: "11:00",
  },

  contact: {
    /** Full international number, digits only, no + or spaces. Used for the WhatsApp link. */
    whatsapp: "4746811470",
    phone: "+47 46 81 14 70",
    email: "rent@jaflaten.com",
  },

  area: {
    title: { en: "Around the area", no: "I nærområdet", de: "In der Umgebung", fr: "Dans les environs", zh: "周边" } as Localized,
  },
};
