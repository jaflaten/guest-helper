import type { StepPage } from "./types";

// The door code is deliberately NOT here: it is sent in the booking message.
export const arrival: StepPage = {
  title: { en: "Getting here", no: "Slik finner du fram", de: "Anreise", fr: "Comment venir", zh: "如何到达" },
  intro: {
    en: "Follow the photos from the parking spot to the door.",
    no: "Følg bildene fra parkeringsplassen til døren.",
    de: "Folgen Sie den Fotos vom Parkplatz bis zur Tür.",
    fr: "Suivez les photos du parking jusqu’à la porte.",
    zh: "按照照片从停车位走到门口。",
  },
  steps: [
    {
      title: { en: "Parking", no: "Parkering", de: "Parken", fr: "Parking", zh: "停车" },
      body: {
        en: "Parking is free. Park right in front of the entrance door, next to the two flower pots. You'll recognise the spot by the black metal fence around the parking area and the heat pump to the right of the entrance door.",
        no: "Parkering er gratis. Parker rett foran inngangsdøren, ved siden av de to blomsterpottene. Du kjenner igjen plassen på det svarte metallgjerdet rundt parkeringsplassen og varmepumpen til høyre for inngangsdøren.",
        de: "Parken ist kostenlos. Parken Sie direkt vor der Eingangstür, neben den zwei Blumentöpfen. Sie erkennen den Platz am schwarzen Metallzaun um den Parkplatz und an der Wärmepumpe rechts neben der Eingangstür.",
        fr: "Le parking est gratuit. Garez-vous juste devant la porte d’entrée, à côté des deux pots de fleurs. Vous reconnaîtrez l’endroit à la clôture en métal noir autour du parking et à la pompe à chaleur à droite de la porte d’entrée.",
        zh: "停车免费。请把车停在入口门正前方，两个花盆旁边。停车场四周有黑色金属围栏，入口门右侧有一台空气源热泵，可据此辨认。",
      },
      photo: { alt: { en: "Parking" }, placeholder: "[Photo: parking spot by the entrance and flower pots]" },
    },
    {
      title: { en: "Find the building", no: "Finn bygget", de: "Das Gebäude finden", fr: "Trouver le bâtiment", zh: "找到建筑" },
      body: { en: "[What the building looks like from the road]" },
      photo: { alt: { en: "The building" }, placeholder: "[Photo: building from the road]" },
    },
    {
      title: { en: "The key box", no: "Nøkkelboksen", de: "Die Schlüsselbox", fr: "La boîte à clés", zh: "钥匙盒" },
      body: { en: "[Where the key box is and how to open it with your code]" },
      photo: { alt: { en: "Key box" }, placeholder: "[Photo: key box]" },
    },
    {
      title: { en: "The door", no: "Døren", de: "Die Tür", fr: "La porte", zh: "入户门" },
      body: { en: "[Which door, which floor]" },
      photo: { alt: { en: "Front door" }, placeholder: "[Photo: front door]" },
    },
  ],
};

export const checkout: StepPage = {
  title: { en: "Before you leave", no: "Før du reiser", de: "Vor der Abreise", fr: "Avant de partir", zh: "离开前" },
  intro: {
    en: "Check-out is by 11:00. Thank you for staying with us!",
    no: "Utsjekk innen kl. 11:00. Takk for besøket!",
    de: "Abreise bis 11:00 Uhr. Danke für Ihren Aufenthalt!",
    fr: "Départ avant 11h00. Merci pour votre séjour !",
    zh: "请于 11:00 前退房。感谢您的入住！",
  },
  steps: [
    { title: { en: "Dishes", no: "Oppvask", de: "Geschirr", fr: "Vaisselle", zh: "餐具" }, body: { en: "[Run the dishwasher / leave dishes clean]" } },
    { title: { en: "Rubbish", no: "Søppel", de: "Müll", fr: "Déchets", zh: "垃圾" }, body: { en: "[Where the bins are and how to sort]" } },
    { title: { en: "Keys", no: "Nøkler", de: "Schlüssel", fr: "Clés", zh: "钥匙" }, body: { en: "[Put the key back in the key box and scramble the code]" } },
  ],
};
