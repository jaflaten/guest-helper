import type { Room } from "./types";

// One file for all rooms. The marker numbers on each photo match the item numbers.
// Example items below are placeholders showing the format.
export const rooms: Room[] = [
  {
    slug: "kitchen",
    name: { en: "Kitchen", no: "Kjøkken", de: "Küche" },
    intro: {
      en: "Everything you need to cook is here. Numbers on the photo match the list below.",
      no: "Alt du trenger for å lage mat er her. Tallene på bildet hører til listen under.",
      de: "Alles zum Kochen ist hier. Die Zahlen im Foto gehören zur Liste unten.",
    },
    cover: { alt: { en: "Kitchen" }, placeholder: "[Photo: kitchen]" },
    photos: [
      {
        alt: { en: "The kitchen seen from the doorway", no: "Kjøkkenet sett fra døren", de: "Die Küche von der Tür aus" },
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
        name: { en: "Pots & pans", no: "Kjeler og panner", de: "Töpfe & Pfannen" },
        where: { en: "Drawer under the hob", no: "Skuffen under platetoppen", de: "Schublade unter dem Kochfeld" },
      },
      {
        n: 2,
        name: { en: "Plates & glasses", no: "Tallerkener og glass", de: "Teller & Gläser" },
        where: { en: "Upper cabinet, left of the window", no: "Overskap, til venstre for vinduet", de: "Oberschrank links vom Fenster" },
      },
      {
        n: 3,
        name: { en: "Induction hob", no: "Induksjonstopp", de: "Induktionskochfeld" },
        guide: "induction-hob",
      },
      {
        n: 4,
        name: { en: "Dishwasher tablets", no: "Oppvasktabletter", de: "Spülmaschinentabs" },
        where: { en: "Under the sink, left", no: "Under vasken, til venstre", de: "Unter der Spüle, links" },
      },
    ],
  },
  {
    slug: "bathroom",
    name: { en: "Bathroom", no: "Bad", de: "Bad" },
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
        name: { en: "Extra towels", no: "Ekstra håndklær", de: "Extra Handtücher" },
        where: { en: "Cabinet above the sink", no: "Skapet over vasken", de: "Schrank über dem Waschbecken" },
      },
      {
        n: 2,
        name: { en: "Hair dryer", no: "Hårføner", de: "Föhn" },
        where: { en: "Top drawer", no: "Øverste skuff", de: "Oberste Schublade" },
      },
      {
        n: 3,
        name: { en: "Washing machine", no: "Vaskemaskin", de: "Waschmaschine" },
        guide: "washing-machine",
      },
    ],
  },
  {
    slug: "living-room",
    name: { en: "Living room", no: "Stue", de: "Wohnzimmer" },
    cover: { alt: { en: "Living room" }, placeholder: "[Photo: living room]" },
    photos: [{ alt: { en: "The living room" }, placeholder: "[Wide photo: living room]", markers: [] }],
    items: [],
  },
  {
    slug: "bedroom",
    name: { en: "Bedroom", no: "Soverom", de: "Schlafzimmer" },
    cover: { alt: { en: "Bedroom" }, placeholder: "[Photo: bedroom]" },
    photos: [{ alt: { en: "The bedroom" }, placeholder: "[Wide photo: bedroom]", markers: [] }],
    items: [],
  },
];
