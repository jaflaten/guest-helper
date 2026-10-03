import type { Room } from "./types";

// One file for all rooms. The marker numbers on each photo match the item numbers.
// Marker positions (x/y in % from top-left) are placeholders until the real photos are in.
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
          { n: 1, x: 30, y: 82 },
          { n: 2, x: 45, y: 68 },
          { n: 3, x: 62, y: 72 },
          { n: 4, x: 78, y: 45 },
          { n: 5, x: 40, y: 75 },
          { n: 6, x: 20, y: 40 },
        ],
      },
    ],
    items: [
      {
        n: 1,
        name: { en: "Dishwasher tablets", no: "Oppvasktabletter", de: "Spülmaschinentabs", fr: "Pastilles lave-vaisselle", zh: "洗碗块" },
        where: {
          en: "Glass jar in the large bottom drawer, between the dishwasher and the freezer",
          no: "Glasskrukke i den store nederste skuffen, mellom oppvaskmaskinen og fryseren",
          de: "Glas in der großen unteren Schublade, zwischen Spülmaschine und Gefrierschrank",
          fr: "Bocal en verre dans le grand tiroir du bas, entre le lave-vaisselle et le congélateur",
          zh: "洗碗机和冰柜之间最下方大抽屉里的玻璃罐中",
        },
      },
      {
        n: 2,
        name: { en: "Dishwasher", no: "Oppvaskmaskin", de: "Spülmaschine", fr: "Lave-vaisselle", zh: "洗碗机" },
        guide: "dishwasher",
      },
      {
        n: 3,
        name: { en: "Water guard (leak alarm)", no: "Vannstopper", de: "Wasserstopp", fr: "Coupe-eau", zh: "漏水保护器" },
        where: {
          en: "Under the sink, behind the rubbish bins",
          no: "Under vasken, bak søppelbøttene",
          de: "Unter der Spüle, hinter den Mülleimern",
          fr: "Sous l’évier, derrière les poubelles",
          zh: "水槽下方，垃圾桶后面",
        },
        guide: "water-guard",
      },
      {
        n: 4,
        name: { en: "Induction hob", no: "Induksjonstopp", de: "Induktionskochfeld", fr: "Plaque à induction", zh: "电磁炉" },
        guide: "induction-hob",
      },
      {
        n: 5,
        name: {
          en: "Coffee capsules, instant coffee, tea, sugar & hot chocolate",
          no: "Kaffekapsler, pulverkaffe, te, sukker og kakao",
          de: "Kaffeekapseln, Instantkaffee, Tee, Zucker & Kakao",
          fr: "Capsules de café, café soluble, thé, sucre et chocolat chaud",
          zh: "咖啡胶囊、速溶咖啡、茶、糖和热可可",
        },
        where: {
          en: "Third drawer, between the dishwasher and the freezer",
          no: "Tredje skuff, mellom oppvaskmaskinen og fryseren",
          de: "Dritte Schublade, zwischen Spülmaschine und Gefrierschrank",
          fr: "Troisième tiroir, entre le lave-vaisselle et le congélateur",
          zh: "洗碗机和冰柜之间的第三个抽屉",
        },
      },
      {
        n: 6,
        name: { en: "Coffee machine", no: "Kaffemaskin", de: "Kaffeemaschine", fr: "Machine à café", zh: "咖啡机" },
        guide: "coffee-machine",
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
          { n: 2, x: 65, y: 65 },
          { n: 3, x: 45, y: 55 },
          { n: 4, x: 45, y: 72 },
        ],
      },
    ],
    items: [
      {
        n: 1,
        name: { en: "Laundry detergent", no: "Vaskemiddel", de: "Waschmittel", fr: "Lessive", zh: "洗衣液" },
        where: {
          en: "Glass jar in the tall cupboard, next to the shower",
          no: "Glasskrukke i det høye skapet, ved siden av dusjkabinettet",
          de: "Glas im hohen Schrank, neben der Dusche",
          fr: "Bocal en verre dans la grande armoire, à côté de la douche",
          zh: "淋浴间旁边高柜里的玻璃罐中",
        },
      },
      {
        n: 2,
        name: { en: "Washing machine", no: "Vaskemaskin", de: "Waschmaschine", fr: "Lave-linge", zh: "洗衣机" },
        guide: "washing-machine",
      },
      {
        n: 3,
        name: { en: "Hair dryer", no: "Hårføner", de: "Föhn", fr: "Sèche-cheveux", zh: "吹风机" },
        where: {
          en: "Upper drawer under the bathroom sink",
          no: "Øverste skuff under vasken på badet",
          de: "Obere Schublade unter dem Waschbecken",
          fr: "Tiroir du haut sous le lavabo",
          zh: "浴室洗手池下方的上层抽屉",
        },
      },
      {
        n: 4,
        name: { en: "Extra towels", no: "Ekstra håndklær", de: "Extra Handtücher", fr: "Serviettes supplémentaires", zh: "备用毛巾" },
        where: {
          en: "Your towels are put out for you. If you need more, extras are in the bottom drawer under the bathroom sink.",
          no: "Håndklærne dine er lagt frem. Trenger du flere, ligger det ekstra i nederste skuff under vasken på badet.",
          de: "Ihre Handtücher liegen bereit. Falls Sie mehr brauchen: Extra-Handtücher sind in der unteren Schublade unter dem Waschbecken.",
          fr: "Vos serviettes sont déjà préparées. S’il vous en faut plus, il y en a dans le tiroir du bas sous le lavabo.",
          zh: "毛巾已为您备好。如需更多，备用毛巾在浴室洗手池下方的底层抽屉里。",
        },
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
