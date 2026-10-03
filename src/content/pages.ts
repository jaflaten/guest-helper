import type { StepPage } from "./types";

// The door code is deliberately NOT here: it is sent in the booking message.
export const arrival: StepPage = {
  title: { en: "Getting here", no: "Slik finner du fram", de: "Anreise", fr: "Comment venir", zh: "如何到达" },
  intro: {
    en: "Follow the photos from the road to the door.",
    no: "Følg bildene fra veien til døren.",
    de: "Folgen Sie den Fotos von der Straße bis zur Tür.",
    fr: "Suivez les photos de la route jusqu’à la porte.",
    zh: "按照照片从路边走到门口。",
  },
  steps: [
    {
      title: { en: "Find the house", no: "Finn huset", de: "Das Haus finden", fr: "Trouver la maison", zh: "找到房子" },
      body: {
        en: "Look for the red house with a white ground floor. Your parking spot is the one with the black fence, in front of the entrance door (the red car in the photo). The photos are a few years old.",
        no: "Se etter det røde huset med hvit underetasje. Parkeringsplassen din er den med svart gjerde, foran inngangsdøren (den røde bilen på bildet). Bildene er noen år gamle.",
        de: "Suchen Sie das rote Haus mit dem weißen Erdgeschoss. Ihr Parkplatz ist der mit dem schwarzen Zaun vor der Eingangstür (das rote Auto im Foto). Die Fotos sind ein paar Jahre alt.",
        fr: "Cherchez la maison rouge au rez-de-chaussée blanc. Votre place est celle entourée d’une clôture noire, devant la porte d’entrée (la voiture rouge sur la photo). Les photos datent de quelques années.",
        zh: "找一栋一楼为白色的红色房子。您的停车位就是入口门前有黑色围栏的那个（照片中红色汽车的位置）。照片拍摄于几年前。",
      },
      photo: {
        src: "/photos/arrival-house-above.jpg",
        alt: {
          en: "The house from above, with the fenced parking spot in front of the entrance",
          no: "Huset sett ovenfra, med den inngjerdede parkeringsplassen foran inngangen",
          de: "Das Haus von oben, mit dem eingezäunten Parkplatz vor dem Eingang",
          fr: "La maison vue d’en haut, avec la place clôturée devant l’entrée",
          zh: "从上方看房子，入口前是有围栏的停车位",
        },
      },
    },
    {
      title: { en: "Parking", no: "Parkering", de: "Parken", fr: "Parking", zh: "停车" },
      body: {
        en: "Parking is free. Park where the red car is in the photo: inside the black metal fence, right in front of the entrance door, next to the two flower pots. You'll recognise the spot by the black metal fence around the parking area and the heat pump to the right of the entrance door.",
        no: "Parkering er gratis. Parker der den røde bilen står på bildet: innenfor det svarte metallgjerdet, rett foran inngangsdøren, ved siden av de to blomsterpottene. Du kjenner igjen plassen på det svarte metallgjerdet rundt parkeringsplassen og varmepumpen til høyre for inngangsdøren.",
        de: "Parken ist kostenlos. Parken Sie dort, wo im Foto das rote Auto steht: innerhalb des schwarzen Metallzauns, direkt vor der Eingangstür, neben den zwei Blumentöpfen. Sie erkennen den Platz am schwarzen Metallzaun um den Parkplatz und an der Wärmepumpe rechts neben der Eingangstür.",
        fr: "Le parking est gratuit. Garez-vous là où se trouve la voiture rouge sur la photo : à l’intérieur de la clôture en métal noir, juste devant la porte d’entrée, à côté des deux pots de fleurs. Vous reconnaîtrez l’endroit à la clôture en métal noir autour du parking et à la pompe à chaleur à droite de la porte d’entrée.",
        zh: "停车免费。请停在照片中红色汽车的位置：黑色金属围栏内，入口门正前方，两个花盆旁边。停车场四周有黑色金属围栏，入口门右侧有一台空气源热泵，可据此辨认。",
      },
      photo: {
        src: "/photos/arrival-parking.jpg",
        alt: {
          en: "Your parking spot: inside the black fence, where the red car is, right in front of the entrance door",
          no: "Parkeringsplassen din: innenfor det svarte gjerdet, der den røde bilen står, rett foran inngangsdøren",
          de: "Ihr Parkplatz: innerhalb des schwarzen Zauns, wo das rote Auto steht, direkt vor der Eingangstür",
          fr: "Votre place : à l’intérieur de la clôture noire, là où est la voiture rouge, juste devant la porte d’entrée",
          zh: "您的停车位：黑色围栏内、照片中红色汽车的位置，就在入口门正前方",
        },
      },
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
