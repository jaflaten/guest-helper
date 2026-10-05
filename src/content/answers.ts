import type { Localized } from "@/i18n/config";

/** Short questions answered in place on the home page ("Guests often ask"), no guide page needed. */
export type QuickAnswer = {
  id: string;
  q: Localized;
  a: Localized;
  /** Optional "read more" link to another page, e.g. { path: "area/practical", label }. */
  more?: { path: string; label: Localized };
};

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
      en: "Yes, parking is free. Park inside the black metal fence, right in front of the entrance door, next to the two flower pots. There's a photo on the arrival page. You'll recognise the spot by the black metal fence around the parking area and the heat pump to the right of the entrance door.",
      no: "Ja, parkering er gratis. Parker innenfor det svarte metallgjerdet, rett foran inngangsdøren, ved siden av de to blomsterpottene. Det er bilde på ankomstsiden. Du kjenner igjen plassen på det svarte metallgjerdet rundt parkeringsplassen og varmepumpen til høyre for inngangsdøren.",
      de: "Ja, das Parken ist kostenlos. Parken Sie innerhalb des schwarzen Metallzauns, direkt vor der Eingangstür, neben den zwei Blumentöpfen. Ein Foto finden Sie auf der Anreise-Seite. Sie erkennen den Platz am schwarzen Metallzaun um den Parkplatz und an der Wärmepumpe rechts neben der Eingangstür.",
      fr: "Oui, le parking est gratuit. Garez-vous à l’intérieur de la clôture en métal noir, juste devant la porte d’entrée, à côté des deux pots de fleurs. Une photo se trouve sur la page d’arrivée. Vous reconnaîtrez l’endroit à la clôture en métal noir autour du parking et à la pompe à chaleur à droite de la porte d’entrée.",
      zh: "是的，停车免费。请停在黑色金属围栏内，入口门正前方，两个花盆旁边。到达页面上有照片。停车场四周有黑色金属围栏，入口门右侧有一台空气源热泵，可据此辨认。",
    },
  },
  {
    id: "ev-charging",
    q: {
      en: "Where can I charge my electric car?",
      no: "Hvor kan jeg lade elbilen?",
      de: "Wo kann ich mein Elektroauto laden?",
      fr: "Où recharger ma voiture électrique ?",
      zh: "在哪里可以给电动车充电？",
    },
    a: {
      en: "There are fast chargers in Sogndal: Eviny at Sjøkanten, Circle K, and the Sogningen car park. The nearest Tesla Supercharger is in Hafslo, about 15 minutes north, and it is open to all cars with CCS.",
      no: "Det finnes hurtigladere i Sogndal: Eviny på Sjøkanten, Circle K og parkeringshuset på Sogningen. Nærmeste Tesla Supercharger er på Hafslo, ca. 15 minutter nordover, og den er åpen for alle biler med CCS.",
      de: "In Sogndal gibt es Schnelllader: Eviny an der Sjøkanten, Circle K und das Parkhaus Sogningen. Der nächste Tesla Supercharger steht in Hafslo, ca. 15 Minuten nördlich, und ist für alle CCS-Autos offen.",
      fr: "Il y a des bornes rapides à Sogndal : Eviny à Sjøkanten, Circle K et le parking de Sogningen. Le Superchargeur Tesla le plus proche est à Hafslo, à environ 15 minutes au nord, ouvert à toutes les voitures CCS.",
      zh: "索根达尔有快充站：Sjøkanten 的 Eviny、Circle K 以及 Sogningen 停车场。最近的特斯拉超级充电站在北边约 15 分钟车程的 Hafslo，所有 CCS 车型均可使用。",
    },
    more: {
      path: "area/practical",
      label: { en: "Chargers on the map", no: "Ladere på kartet", de: "Ladestationen auf der Karte", fr: "Bornes sur la carte", zh: "在地图上查看充电站" },
    },
  },
];
