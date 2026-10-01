import type { Guide } from "./types";

// Appliance guides. The hob is a filled-in example; check the details against your model.
export const guides: Guide[] = [
  {
    slug: "induction-hob",
    room: "kitchen",
    title: { en: "Induction hob", no: "Induksjonstopp", de: "Induktionskochfeld", fr: "Plaque à induction", zh: "电磁炉" },
    faq: {
      en: "How do I unlock the induction hob?",
      no: "Hvordan låser jeg opp induksjonstoppen?",
      de: "Wie entsperre ich das Induktionskochfeld?",
      fr: "Comment déverrouiller la plaque à induction ?",
      zh: "如何解锁电磁炉？",
    },
    intro: {
      en: "Fast and safe, but it only works with the magnetic pots in the drawer below it.",
      no: "Rask og trygg, men fungerer bare med de magnetiske kjelene i skuffen under.",
      de: "Schnell und sicher, funktioniert aber nur mit den magnetischen Töpfen in der Schublade darunter.",
      fr: "Rapide et sûre, mais elle ne fonctionne qu’avec les casseroles magnétiques du tiroir en dessous.",
      zh: "快速又安全，但只能使用下方抽屉里的磁性锅具。",
    },
    short: {
      en: "Press power, tap a zone, slide to set the heat. If nothing happens, it is child-locked: hold the key symbol for 3 seconds.",
      no: "Trykk på/av, velg sone, dra for å stille varmen. Skjer det ingenting, er den barnesikret: hold nøkkelsymbolet i 3 sekunder.",
      de: "Ein/Aus drücken, Zone antippen, Hitze per Schieber wählen. Passiert nichts, ist die Kindersicherung aktiv: Schlüsselsymbol 3 Sekunden halten.",
      fr: "Appuyez sur marche, touchez une zone, glissez pour régler la chaleur. Si rien ne se passe, la sécurité enfants est active : maintenez le symbole de clé 3 secondes.",
      zh: "按电源键，点选一个炉区，滑动调节火力。如果没有反应，说明童锁已开启：长按钥匙图标 3 秒。",
    },
    cover: { alt: { en: "The induction hob" }, placeholder: "[Photo: the hob, seen from above]" },
    steps: [
      {
        title: { en: "Turn it on", no: "Slå på", de: "Einschalten", fr: "Allumer", zh: "开机" },
        body: {
          en: "Press the power button for 1 second. A short beep confirms it is on.",
          no: "Hold på/av-knappen i 1 sekund. Et kort pip bekrefter at den er på.",
          de: "Ein/Aus-Taste 1 Sekunde drücken. Ein kurzer Piepton bestätigt es.",
          fr: "Appuyez 1 seconde sur le bouton marche. Un bip court confirme la mise en marche.",
          zh: "按住电源键 1 秒，听到短促的提示音即表示已开机。",
        },
        photo: { alt: { en: "Power button" }, placeholder: "[Photo: power button]" },
      },
      {
        title: { en: "Unlock if needed", no: "Lås opp ved behov", de: "Bei Bedarf entsperren", fr: "Déverrouiller si besoin", zh: "如有需要，先解锁" },
        body: {
          en: "If a key symbol is lit, hold it for 3 seconds until it goes out.",
          no: "Lyser et nøkkelsymbol, hold det inne i 3 sekunder til det slukker.",
          de: "Leuchtet ein Schlüsselsymbol, 3 Sekunden halten, bis es erlischt.",
          fr: "Si un symbole de clé est allumé, maintenez-le 3 secondes jusqu’à ce qu’il s’éteigne.",
          zh: "如果钥匙图标亮着，长按 3 秒直到它熄灭。",
        },
        photo: { alt: { en: "Key symbol" }, placeholder: "[Photo: key symbol]" },
      },
      {
        title: { en: "Choose a zone", no: "Velg sone", de: "Zone wählen", fr: "Choisir une zone", zh: "选择炉区" },
        body: {
          en: "Tap the zone you want. Its number starts blinking.",
          no: "Trykk på sonen du vil bruke. Tallet begynner å blinke.",
          de: "Gewünschte Zone antippen. Die Zahl beginnt zu blinken.",
          fr: "Touchez la zone souhaitée. Son chiffre se met à clignoter.",
          zh: "点选要使用的炉区，对应数字开始闪烁。",
        },
      },
      {
        title: { en: "Set the heat", no: "Still varmen", de: "Hitze einstellen", fr: "Régler la chaleur", zh: "调节火力" },
        body: {
          en: "Slide along the bar: 1–3 to simmer, 6–9 to fry, P to boil fast.",
          no: "Dra langs linjen: 1–3 for småkok, 6–9 for steking, P for rask koking.",
          de: "Über den Schieber streichen: 1–3 köcheln, 6–9 braten, P schnell kochen.",
          fr: "Glissez le long de la barre : 1–3 pour mijoter, 6–9 pour saisir, P pour bouillir vite.",
          zh: "沿滑条滑动：1–3 小火慢炖，6–9 煎炒，P 快速烧开。",
        },
      },
    ],
    troubles: [
      {
        problem: { en: "Nothing happens when I press", no: "Ingenting skjer når jeg trykker", de: "Beim Drücken passiert nichts", fr: "Rien ne se passe quand j’appuie", zh: "按了没有反应" },
        fix: {
          en: "The child lock is on. Hold the key symbol for 3 seconds.",
          no: "Barnesikringen er på. Hold nøkkelsymbolet i 3 sekunder.",
          de: "Die Kindersicherung ist aktiv. Schlüsselsymbol 3 Sekunden halten.",
          fr: "La sécurité enfants est active. Maintenez le symbole de clé 3 secondes.",
          zh: "童锁已开启。长按钥匙图标 3 秒。",
        },
      },
      {
        problem: { en: "It beeps and the zone switches off", no: "Den piper og sonen slår seg av", de: "Es piept und die Zone geht aus", fr: "Ça bipe et la zone s’éteint", zh: "发出提示音后炉区自动关闭" },
        fix: {
          en: "The pot is not induction-compatible, or too small. Use a pot from the drawer below.",
          no: "Kjelen passer ikke til induksjon, eller er for liten. Bruk en kjele fra skuffen under.",
          de: "Der Topf ist nicht induktionsgeeignet oder zu klein. Einen Topf aus der Schublade nehmen.",
          fr: "La casserole n’est pas compatible induction ou est trop petite. Utilisez une casserole du tiroir en dessous.",
          zh: "锅具不适用于电磁炉或尺寸太小。请使用下方抽屉里的锅具。",
        },
      },
      {
        problem: { en: "An \"H\" is showing", no: "Det står «H» i displayet", de: "Im Display steht „H“", fr: "Un « H » s’affiche", zh: "显示屏上出现“H”" },
        fix: {
          en: "The surface is still hot. It disappears once it has cooled down.",
          no: "Overflaten er fortsatt varm. Det forsvinner når den har kjølt seg ned.",
          de: "Die Fläche ist noch heiß. Es verschwindet, sobald sie abgekühlt ist.",
          fr: "La surface est encore chaude. Il disparaît une fois refroidie.",
          zh: "表面仍然很烫，冷却后会自动消失。",
        },
      },
    ],
    related: ["washing-machine"],
  },
  {
    slug: "washing-machine",
    room: "bathroom",
    title: { en: "Washing machine", no: "Vaskemaskin", de: "Waschmaschine", fr: "Lave-linge", zh: "洗衣机" },
    faq: {
      en: "How do I use the washing machine?",
      no: "Hvordan bruker jeg vaskemaskinen?",
      de: "Wie benutze ich die Waschmaschine?",
      fr: "Comment utiliser le lave-linge ?",
      zh: "如何使用洗衣机？",
    },
    short: { en: "[One or two sentences that solve it for most guests]" },
    steps: [
      { title: { en: "[Step 1]" }, body: { en: "[What to do]" } },
      { title: { en: "[Step 2]" }, body: { en: "[What to do]" } },
    ],
    related: ["induction-hob"],
  },
];
