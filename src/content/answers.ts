import type { Localized } from "@/i18n/config";

/** Short questions answered in place on the home page ("Guests often ask"), no guide page needed. */
export type QuickAnswer = { id: string; q: Localized; a: Localized };

export const answers: QuickAnswer[] = [
  {
    id: "tap-water",
    q: {
      en: "Is the tap water safe to drink?",
      no: "Kan jeg drikke vann fra springen?",
      de: "Kann man das Leitungswasser trinken?",
      fr: "L’eau du robinet est-elle potable ?",
      zh: "自来水可以直接喝吗？",
    },
    a: {
      en: "Yes! The tap water is safe to drink and very good. No need to buy bottled water.",
      no: "Ja! Vannet fra springen er trygt å drikke og veldig godt. Du trenger ikke kjøpe flaskevann.",
      de: "Ja! Das Leitungswasser ist trinkbar und sehr gut. Sie brauchen kein Wasser in Flaschen zu kaufen.",
      fr: "Oui ! L’eau du robinet est potable et très bonne. Inutile d’acheter de l’eau en bouteille.",
      zh: "可以！这里的自来水可以直接饮用，而且水质很好，无需购买瓶装水。",
    },
  },
];
