import type { Room } from "./types";

// One file for all rooms. The marker numbers on each photo match the item numbers.
// Example items below are placeholders showing the format.
export const rooms: Room[] = [
  {
    slug: "kitchen",
    name: { en: "Kitchen", no: "Kjøkken", de: "Küche", fr: "Cuisine", zh: "厨房" },
    intro: {
      en: "Everything you need to cook is here. Numbers on the photo match the list below.",
      no: "Alt du trenger for å lage mat er her. Tallene på bildet hører til listen under.",
      de: "Alles zum Kochen ist hier. Die Zahlen im Foto gehören zur Liste unten.",
      fr: "Tout ce qu’il faut pour cuisiner est ici. Les numéros sur la photo correspondent à la liste ci-dessous.",
      zh: "做饭所需的一切都在这里。照片上的数字与下方列表对应。",
    },
    cover: { alt: { en: "Kitchen" }, placeholder: "[Photo: kitchen]" },
    photos: [
      {
        alt: { en: "The kitchen seen from the doorway", no: "Kjøkkenet sett fra døren", de: "Die Küche von der Tür aus", fr: "La cuisine vue depuis la porte", zh: "从门口看厨房" },
        placeholder: "[Wide photo: whole kitchen]",
        markers: [
          { n: 1, x: 22, y: 70 },
          { n: 2, x: 48, y: 30 },
          { n: 3, x: 64, y: 72 },
          { n: 4, x: 82, y: 40 },
        ],
      },
    ],
    items: [
      {
        n: 1,
        name: { en: "Pots & pans", no: "Kjeler og panner", de: "Töpfe & Pfannen", fr: "Casseroles et poêles", zh: "锅具" },
        where: { en: "Drawer under the hob", no: "Skuffen under platetoppen", de: "Schublade unter dem Kochfeld", fr: "Tiroir sous la plaque de cuisson", zh: "灶台下方的抽屉" },
      },
      {
        n: 2,
        name: { en: "Plates & glasses", no: "Tallerkener og glass", de: "Teller & Gläser", fr: "Assiettes et verres", zh: "盘子和杯子" },
        where: { en: "Upper cabinet, left of the window", no: "Overskap, til venstre for vinduet", de: "Oberschrank links vom Fenster", fr: "Placard du haut, à gauche de la fenêtre", zh: "窗户左侧的吊柜" },
      },
      {
        n: 3,
        name: { en: "Induction hob", no: "Induksjonstopp", de: "Induktionskochfeld", fr: "Plaque à induction", zh: "电磁炉" },
        guide: "induction-hob",
      },
      {
        n: 4,
        name: { en: "Dishwasher tablets", no: "Oppvasktabletter", de: "Spülmaschinentabs", fr: "Pastilles lave-vaisselle", zh: "洗碗机洗涤块" },
        where: { en: "Under the sink, left", no: "Under vasken, til venstre", de: "Unter der Spüle, links", fr: "Sous l’évier, à gauche", zh: "水槽下方左侧" },
      },
    ],
  },
  {
    slug: "bathroom",
    name: { en: "Bathroom", no: "Bad", de: "Bad", fr: "Salle de bain", zh: "浴室" },
    cover: { alt: { en: "Bathroom" }, placeholder: "[Photo: bathroom]" },
    photos: [
      {
        alt: { en: "The bathroom" },
        placeholder: "[Wide photo: bathroom]",
        markers: [
          { n: 1, x: 30, y: 45 },
          { n: 2, x: 70, y: 60 },
        ],
      },
      {
        alt: { en: "Laundry corner" },
        placeholder: "[Photo: washing machine corner]",
        markers: [{ n: 3, x: 50, y: 55 }],
      },
    ],
    items: [
      {
        n: 1,
        name: { en: "Extra towels", no: "Ekstra håndklær", de: "Extra Handtücher", fr: "Serviettes supplémentaires", zh: "备用毛巾" },
        where: { en: "Cabinet above the sink", no: "Skapet over vasken", de: "Schrank über dem Waschbecken", fr: "Placard au-dessus du lavabo", zh: "洗手池上方的柜子" },
      },
      {
        n: 2,
        name: { en: "Hair dryer", no: "Hårføner", de: "Föhn", fr: "Sèche-cheveux", zh: "吹风机" },
        where: { en: "Top drawer", no: "Øverste skuff", de: "Oberste Schublade", fr: "Tiroir du haut", zh: "最上层抽屉" },
      },
      {
        n: 3,
        name: { en: "Washing machine", no: "Vaskemaskin", de: "Waschmaschine", fr: "Lave-linge", zh: "洗衣机" },
        guide: "washing-machine",
      },
    ],
  },
  {
    slug: "living-room",
    name: { en: "Living room", no: "Stue", de: "Wohnzimmer", fr: "Salon", zh: "客厅" },
    cover: { alt: { en: "Living room" }, placeholder: "[Photo: living room]" },
    photos: [{ alt: { en: "The living room" }, placeholder: "[Wide photo: living room]", markers: [] }],
    items: [],
  },
  {
    slug: "bedroom",
    name: { en: "Bedroom", no: "Soverom", de: "Schlafzimmer", fr: "Chambre", zh: "卧室" },
    cover: { alt: { en: "Bedroom" }, placeholder: "[Photo: bedroom]" },
    photos: [{ alt: { en: "The bedroom" }, placeholder: "[Wide photo: bedroom]", markers: [] }],
    items: [],
  },
];
