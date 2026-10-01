import type { Guide } from "./types";

// Appliance guides. The hob is a filled-in example; check the details against your model.
export const guides: Guide[] = [
  {
    slug: "induction-hob",
    room: "kitchen",
    title: { en: "Induction hob", no: "Induksjonstopp", de: "Induktionskochfeld" },
    faq: {
      en: "How do I unlock the induction hob?",
      no: "Hvordan låser jeg opp induksjonstoppen?",
      de: "Wie entsperre ich das Induktionskochfeld?",
    },
    intro: {
      en: "Fast and safe, but it only works with the magnetic pots in the drawer below it.",
      no: "Rask og trygg, men fungerer bare med de magnetiske kjelene i skuffen under.",
      de: "Schnell und sicher, funktioniert aber nur mit den magnetischen Töpfen in der Schublade darunter.",
    },
    short: {
      en: "Press power, tap a zone, slide to set the heat. If nothing happens, it is child-locked: hold the key symbol for 3 seconds.",
      no: "Trykk på/av, velg sone, dra for å stille varmen. Skjer det ingenting, er den barnesikret: hold nøkkelsymbolet i 3 sekunder.",
      de: "Ein/Aus drücken, Zone antippen, Hitze per Schieber wählen. Passiert nichts, ist die Kindersicherung aktiv: Schlüsselsymbol 3 Sekunden halten.",
    },
    cover: { alt: { en: "The induction hob" }, placeholder: "[Photo: the hob, seen from above]" },
    steps: [
      {
        title: { en: "Turn it on", no: "Slå på", de: "Einschalten" },
        body: {
          en: "Press the power button for 1 second. A short beep confirms it is on.",
          no: "Hold på/av-knappen i 1 sekund. Et kort pip bekrefter at den er på.",
          de: "Ein/Aus-Taste 1 Sekunde drücken. Ein kurzer Piepton bestätigt es.",
        },
        photo: { alt: { en: "Power button" }, placeholder: "[Photo: power button]" },
      },
      {
        title: { en: "Unlock if needed", no: "Lås opp ved behov", de: "Bei Bedarf entsperren" },
        body: {
          en: "If a key symbol is lit, hold it for 3 seconds until it goes out.",
          no: "Lyser et nøkkelsymbol, hold det inne i 3 sekunder til det slukker.",
          de: "Leuchtet ein Schlüsselsymbol, 3 Sekunden halten, bis es erlischt.",
        },
        photo: { alt: { en: "Key symbol" }, placeholder: "[Photo: key symbol]" },
      },
      {
        title: { en: "Choose a zone", no: "Velg sone", de: "Zone wählen" },
        body: {
          en: "Tap the zone you want. Its number starts blinking.",
          no: "Trykk på sonen du vil bruke. Tallet begynner å blinke.",
          de: "Gewünschte Zone antippen. Die Zahl beginnt zu blinken.",
        },
      },
      {
        title: { en: "Set the heat", no: "Still varmen", de: "Hitze einstellen" },
        body: {
          en: "Slide along the bar: 1–3 to simmer, 6–9 to fry, P to boil fast.",
          no: "Dra langs linjen: 1–3 for småkok, 6–9 for steking, P for rask koking.",
          de: "Über den Schieber streichen: 1–3 köcheln, 6–9 braten, P schnell kochen.",
        },
      },
    ],
    troubles: [
      {
        problem: { en: "Nothing happens when I press", no: "Ingenting skjer når jeg trykker", de: "Beim Drücken passiert nichts" },
        fix: {
          en: "The child lock is on. Hold the key symbol for 3 seconds.",
          no: "Barnesikringen er på. Hold nøkkelsymbolet i 3 sekunder.",
          de: "Die Kindersicherung ist aktiv. Schlüsselsymbol 3 Sekunden halten.",
        },
      },
      {
        problem: { en: "It beeps and the zone switches off", no: "Den piper og sonen slår seg av", de: "Es piept und die Zone geht aus" },
        fix: {
          en: "The pot is not induction-compatible, or too small. Use a pot from the drawer below.",
          no: "Kjelen passer ikke til induksjon, eller er for liten. Bruk en kjele fra skuffen under.",
          de: "Der Topf ist nicht induktionsgeeignet oder zu klein. Einen Topf aus der Schublade nehmen.",
        },
      },
      {
        problem: { en: "An \"H\" is showing", no: "Det står «H» i displayet", de: "Im Display steht „H“" },
        fix: {
          en: "The surface is still hot. It disappears once it has cooled down.",
          no: "Overflaten er fortsatt varm. Det forsvinner når den har kjølt seg ned.",
          de: "Die Fläche ist noch heiß. Es verschwindet, sobald sie abgekühlt ist.",
        },
      },
    ],
    related: ["washing-machine"],
  },
  {
    slug: "washing-machine",
    room: "bathroom",
    title: { en: "Washing machine", no: "Vaskemaskin", de: "Waschmaschine" },
    faq: {
      en: "How do I use the washing machine?",
      no: "Hvordan bruker jeg vaskemaskinen?",
      de: "Wie benutze ich die Waschmaschine?",
    },
    short: { en: "[One or two sentences that solve it for most guests]" },
    steps: [
      { title: { en: "[Step 1]" }, body: { en: "[What to do]" } },
      { title: { en: "[Step 2]" }, body: { en: "[What to do]" } },
    ],
    related: ["induction-hob"],
  },
];
