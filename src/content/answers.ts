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
  {
    id: "parking",
    q: {
      en: "Is parking free? Where do I park?",
      no: "Er parkering gratis? Hvor parkerer jeg?",
      de: "Ist das Parken kostenlos? Wo kann ich parken?",
      fr: "Le parking est-il gratuit ? Où me garer ?",
      zh: "停车免费吗？在哪里停车？",
    },
    a: {
      en: "Yes, parking is free. Park right in front of the entrance door, next to the two flower pots.",
      no: "Ja, parkering er gratis. Parker rett foran inngangsdøren, ved siden av de to blomsterpottene.",
      de: "Ja, das Parken ist kostenlos. Parken Sie direkt vor der Eingangstür, neben den zwei Blumentöpfen.",
      fr: "Oui, le parking est gratuit. Garez-vous juste devant la porte d’entrée, à côté des deux pots de fleurs.",
      zh: "是的，停车免费。请把车停在入口门正前方，两个花盆旁边。",
    },
  },
];
