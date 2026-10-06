import type { Guide } from "./types";

// Appliance guides. Order matters: guides with a `faq` appear in "Guests often ask" in this order.
export const guides: Guide[] = [
  {
    slug: "induction-hob",
    room: "kitchen",
    title: { en: "Induction hob", no: "Induksjonstopp", de: "Induktionskochfeld", fr: "Plaque à induction", zh: "电磁炉" },
    intro: {
      en: "Only pots and pans with a magnetic base work on induction.",
      no: "Bare kjeler og panner med magnetisk bunn fungerer på induksjon.",
    },
    short: {
      en: "If the hob doesn’t react when you touch it, it is locked: press and hold the lock button for 3–5 seconds until it unlocks.",
      no: "Reagerer ikke platetoppen når du trykker, er den låst: hold inne låseknappen i 3–5 sekunder til den låses opp.",
    },
    steps: [
      {
        title: { en: "Unlock if needed", no: "Lås opp ved behov" },
        body: {
          en: "If nothing happens when you touch the controls, press and hold the lock button for 3–5 seconds until it unlocks.",
          no: "Skjer det ingenting når du trykker på knappene, hold inne låseknappen i 3–5 sekunder til den låses opp.",
        },
      },
    ],
    troubles: [
      {
        problem: { en: "Nothing happens when I press", no: "Ingenting skjer når jeg trykker" },
        fix: {
          en: "The hob is locked. Press and hold the lock button for 3–5 seconds.",
          no: "Platetoppen er låst. Hold inne låseknappen i 3–5 sekunder.",
        },
      },
    ],
    related: ["dishwasher"],
  },
  {
    slug: "water-guard",
    room: "kitchen",
    title: {
      en: "Water guard (leak alarm)",
      no: "Vannstopper (lekkasjevarsler)",
      de: "Wasserstopp (Leckagewarner)",
      fr: "Coupe-eau (détecteur de fuite)",
      zh: "漏水保护器",
    },
    faq: {
      en: "Something is beeping under the kitchen sink and there is no water",
      no: "Noe piper under kjøkkenvasken og det kommer ikke vann",
      de: "Unter der Küchenspüle piept es und es kommt kein Wasser",
      fr: "Ça bipe sous l’évier et il n’y a plus d’eau",
      zh: "厨房水槽下方在响，而且没有水",
    },
    intro: {
      en: "Hear beeping from under the kitchen sink? Then follow the steps below. The water guard protects the apartment from leaks. If it senses moisture on the floor, it beeps, shows a red light and shuts off the water.",
      no: "Hører du en pipelyd fra under kjøkkenvasken? Da må du sjekke stegene under. Vannstopperen beskytter leiligheten mot lekkasjer. Merker den fuktighet på gulvet, piper den, lyser rødt og stenger vannet.",
      de: "Hören Sie ein Piepen unter der Küchenspüle? Dann folgen Sie den Schritten unten. Der Wasserstopp schützt die Wohnung vor Wasserschäden. Erkennt er Feuchtigkeit am Boden, piept er, leuchtet rot und sperrt das Wasser ab.",
      fr: "Vous entendez un bip sous l’évier de la cuisine ? Suivez alors les étapes ci-dessous. Le coupe-eau protège l’appartement des fuites. S’il détecte de l’humidité au sol, il bipe, s’allume en rouge et coupe l’eau.",
      zh: "如果听到厨房水槽下方传来蜂鸣声，请按照下面的步骤操作。漏水保护器用于防止公寓漏水。一旦检测到地面潮湿，它会发出蜂鸣声、亮红灯并切断水源。",
    },
    short: {
      en: "Usually a little water was spilled near the dishwasher. Dry the floor well, then unplug the water guard under the sink and plug it back in.",
      no: "Som regel er det sølt litt vann ved oppvaskmaskinen. Tørk gulvet godt, og trekk så ut kontakten til vannstopperen under vasken og sett den inn igjen.",
      de: "Meist wurde etwas Wasser neben der Spülmaschine verschüttet. Boden gründlich trocknen, dann den Stecker des Wasserstopps unter der Spüle ziehen und wieder einstecken.",
      fr: "En général, un peu d’eau a été renversée près du lave-vaisselle. Séchez bien le sol, puis débranchez le coupe-eau sous l’évier et rebranchez-le.",
      zh: "通常是洗碗机附近洒了一点水。请把地面彻底擦干，然后拔下水槽下方漏水保护器的电源插头，再重新插上。",
    },
    cover: {
      src: "/photos/water-guard-alarm.jpg",
      alt: {
        en: "Under the kitchen sink: the water guard glowing red after it has shut off the water",
        no: "Under kjøkkenvasken: vannstopperen lyser rødt etter at den har stengt vannet",
        de: "Unter der Küchenspüle: Der Wasserstopp leuchtet rot, nachdem er das Wasser abgesperrt hat",
        fr: "Sous l’évier : le coupe-eau allumé en rouge après avoir coupé l’eau",
        zh: "厨房水槽下方：漏水保护器切断水源后亮起红灯",
      },
    },
    steps: [
      {
        title: { en: "Find the water guard", no: "Finn vannstopperen", de: "Wasserstopp finden", fr: "Trouver le coupe-eau", zh: "找到漏水保护器" },
        body: {
          en: "Open the cupboard under the kitchen sink and lift out the rubbish bins. The water guard is the small white box with a light: green means all is fine, red means it has shut off the water.",
          no: "Åpne skapet under kjøkkenvasken og løft ut søppelbøttene. Vannstopperen er den lille hvite boksen med et lys: grønt betyr at alt er i orden, rødt betyr at den har stengt vannet.",
          de: "Öffnen Sie den Schrank unter der Küchenspüle und nehmen Sie die Mülleimer heraus. Der Wasserstopp ist das kleine weiße Kästchen mit Licht: Grün heißt alles in Ordnung, Rot heißt, das Wasser wurde abgesperrt.",
          fr: "Ouvrez le placard sous l’évier et sortez les poubelles. Le coupe-eau est le petit boîtier blanc avec un voyant : vert, tout va bien ; rouge, il a coupé l’eau.",
          zh: "打开厨房水槽下方的柜子，把垃圾桶拿出来。漏水保护器是那个带指示灯的白色小盒子：绿灯表示一切正常，红灯表示已切断水源。",
        },
        photo: { src: "/photos/water-guard-overview.jpg", alt: { en: "Under the sink with the bins removed: the white water guard box with a green light", no: "Under vasken uten søppelbøtter: den hvite vannstopperen med grønt lys" } },
      },
      {
        title: { en: "Dry the floor", no: "Tørk gulvet", de: "Boden trocknen", fr: "Sécher le sol", zh: "擦干地面" },
        body: {
          en: "Wipe the floor in front of and around the dishwasher thoroughly. The sensor sits behind the bottom panel and is very sensitive: even a small spill can set it off.",
          no: "Tørk gulvet foran og rundt oppvaskmaskinen grundig. Sensoren sitter bak sokkelen og er svært følsom: selv litt søl kan utløse den.",
          de: "Wischen Sie den Boden vor und um die Spülmaschine gründlich trocken. Der Sensor sitzt hinter der Sockelblende und ist sehr empfindlich: Schon wenig Wasser löst ihn aus.",
          fr: "Essuyez soigneusement le sol devant et autour du lave-vaisselle. Le capteur se trouve derrière la plinthe et il est très sensible : une petite flaque suffit à le déclencher.",
          zh: "把洗碗机前方及周围的地面彻底擦干。传感器位于底部踢脚板后面，非常灵敏，哪怕洒了一点水也会触发。",
        },
        photo: { src: "/photos/dishwasher-panel.jpg", alt: { en: "The dishwasher (middle door, right of the drawers) and the bottom panel where the sensor sits", no: "Oppvaskmaskinen (midterste dør, til høyre for skuffene) og sokkelen der sensoren sitter" } },
      },
      {
        title: { en: "Reset it", no: "Tilbakestill", de: "Zurücksetzen", fr: "Le réinitialiser", zh: "重置" },
        body: {
          en: "Pull out the grey plug from the water guard (or unplug the whole water guard from the wall socket), wait a few seconds and plug it back in. The light turns green again, the beeping stops and the water comes back. See the short video below.",
          no: "Trekk ut den grå kontakten fra vannstopperen (eller trekk hele vannstopperen ut av stikkontakten), vent noen sekunder og sett den inn igjen. Lyset blir grønt igjen, pipingen stopper og vannet kommer tilbake. Se den korte videoen under.",
          de: "Ziehen Sie den grauen Stecker aus dem Wasserstopp (oder den ganzen Wasserstopp aus der Steckdose), warten Sie einige Sekunden und stecken Sie ihn wieder ein. Das Licht wird wieder grün, das Piepen hört auf und das Wasser kommt zurück. Siehe das kurze Video unten.",
          fr: "Débranchez la fiche grise du coupe-eau (ou débranchez tout le coupe-eau de la prise murale), attendez quelques secondes et rebranchez. Le voyant redevient vert, le bip s’arrête et l’eau revient. Voir la courte vidéo ci-dessous.",
          zh: "拔下漏水保护器上的灰色插头（或将整个漏水保护器从墙上插座拔下），等几秒钟后重新插上。指示灯会变回绿色，蜂鸣声停止，水恢复供应。请看下方的短视频。",
        },
        photo: { src: "/photos/water-guard-closeup.jpg", alt: { en: "Close-up of the water guard with the grey plug and green light", no: "Nærbilde av vannstopperen med den grå kontakten og grønt lys" } },
      },
      {
        title: { en: "Check the water", no: "Sjekk vannet", de: "Wasser prüfen", fr: "Vérifier l’eau", zh: "检查水源" },
        body: {
          en: "Turn on the kitchen tap. If water runs, you're done. Put the bins back.",
          no: "Skru på kjøkkenkranen. Kommer det vann, er du ferdig. Sett søppelbøttene tilbake.",
          de: "Drehen Sie den Küchenhahn auf. Wenn Wasser kommt, sind Sie fertig. Stellen Sie die Mülleimer zurück.",
          fr: "Ouvrez le robinet de la cuisine. Si l’eau coule, c’est réglé. Remettez les poubelles en place.",
          zh: "打开厨房水龙头。如果有水流出，就完成了。把垃圾桶放回原处。",
        },
      },
    ],
    video: "/videos/water-guard-reset.mp4",
    poster: "/videos/water-guard-reset.jpg",
    troubles: [
      {
        problem: { en: "It starts beeping again", no: "Den begynner å pipe igjen", de: "Es piept wieder", fr: "Il recommence à biper", zh: "又开始响了" },
        fix: {
          en: "The sensor is still damp. Dry the floor by the dishwasher again, wait a few minutes, then reset once more.",
          no: "Sensoren er fortsatt fuktig. Tørk gulvet ved oppvaskmaskinen igjen, vent noen minutter og tilbakestill på nytt.",
          de: "Der Sensor ist noch feucht. Boden an der Spülmaschine erneut trocknen, einige Minuten warten und nochmals zurücksetzen.",
          fr: "Le capteur est encore humide. Séchez à nouveau le sol près du lave-vaisselle, attendez quelques minutes, puis réinitialisez.",
          zh: "传感器仍然潮湿。请再次擦干洗碗机旁的地面，等几分钟后再重置一次。",
        },
      },
      {
        problem: { en: "Water keeps appearing on the floor", no: "Det kommer stadig vann på gulvet", de: "Es tritt immer wieder Wasser aus", fr: "De l’eau réapparaît sur le sol", zh: "地面上不断出现水" },
        fix: {
          en: "There may be a real leak. Don't reset the water guard: message us straight away.",
          no: "Det kan være en ekte lekkasje. Ikke tilbakestill vannstopperen: send oss en melding med en gang.",
          de: "Es könnte ein echtes Leck sein. Setzen Sie den Wasserstopp nicht zurück, sondern schreiben Sie uns sofort.",
          fr: "Il peut s’agir d’une vraie fuite. Ne réinitialisez pas le coupe-eau : écrivez-nous immédiatement.",
          zh: "可能确实存在漏水。请不要重置漏水保护器，立即联系我们。",
        },
      },
    ],
    related: ["dishwasher"],
  },
  {
    slug: "dishwasher",
    room: "kitchen",
    title: { en: "Dishwasher", no: "Oppvaskmaskin", de: "Spülmaschine", fr: "Lave-vaisselle", zh: "洗碗机" },
    faq: {
      en: "The dishwasher won't start",
      no: "Oppvaskmaskinen starter ikke",
      de: "Die Spülmaschine startet nicht",
      fr: "Le lave-vaisselle ne démarre pas",
      zh: "洗碗机无法启动",
    },
    short: {
      en: "Tablet from the glass jar in the bottom drawer, into the machine. Press the large button, choose Eco with the small button, then close the door until it clicks. If it won't start, check that the small tap left of the kitchen faucet points up.",
      no: "Ta en tablett fra glasskrukken i nederste skuff og legg den i maskinen. Trykk på den store knappen, velg Eco med den lille knappen, og lukk døren til det klikker. Starter den ikke, sjekk at den lille kranen til venstre på kjøkkenbatteriet peker opp.",
      de: "Tab aus dem Glas in der unteren Schublade in die Maschine legen. Große Taste drücken, mit der kleinen Taste Eco wählen und die Tür schließen, bis sie klickt. Startet sie nicht, prüfen Sie, ob das kleine Ventil links an der Küchenarmatur nach oben zeigt.",
      fr: "Prenez une pastille dans le bocal du tiroir du bas et mettez-la dans la machine. Appuyez sur le grand bouton, choisissez Eco avec le petit bouton, puis fermez la porte jusqu’au clic. S’il ne démarre pas, vérifiez que le petit robinet à gauche du mitigeur est orienté vers le haut.",
      zh: "从最下方抽屉的玻璃罐中取一块洗碗块放进洗碗机。按大按钮开机，用小按钮选择 Eco，然后关上机门直到听到“咔嗒”声。如果无法启动，请检查厨房水龙头左侧的小阀门是否朝上。",
    },
    note: {
      en: "Please don't put wooden utensils in the dishwasher: wash them by hand instead.",
      no: "Vennligst ikke legg kjøkkenredskaper av tre i oppvaskmaskinen: vask dem for hånd.",
      de: "Bitte keine Holzutensilien in die Spülmaschine geben, sondern von Hand spülen.",
      fr: "Merci de ne pas mettre d’ustensiles en bois au lave-vaisselle : lavez-les à la main.",
      zh: "请不要将木制厨具放入洗碗机，请手洗。",
    },
    cover: { src: "/photos/dishwasher-panel.jpg", alt: { en: "The dishwasher: the middle door, right of the drawers", no: "Oppvaskmaskinen: den midterste døren, til høyre for skuffene" } },
    steps: [
      {
        title: { en: "Get a tablet", no: "Hent en tablett", de: "Tab holen", fr: "Prendre une pastille", zh: "取一块洗碗块" },
        body: {
          en: "Dishwasher tablets are in a glass jar in the large bottom drawer between the dishwasher and the freezer.",
          no: "Oppvasktablettene står i en glasskrukke i den store nederste skuffen mellom oppvaskmaskinen og fryseren.",
          de: "Die Spülmaschinentabs stehen in einem Glas in der großen unteren Schublade zwischen Spülmaschine und Gefrierschrank.",
          fr: "Les pastilles sont dans un bocal en verre, dans le grand tiroir du bas entre le lave-vaisselle et le congélateur.",
          zh: "洗碗块放在洗碗机和冰柜之间最下方大抽屉里的玻璃罐中。",
        },
        photo: { alt: { en: "The glass jar in the bottom drawer" }, placeholder: "[Photo: jar in the bottom drawer]" },
      },
      {
        title: { en: "Check the water tap", no: "Sjekk kranen", de: "Ventil prüfen", fr: "Vérifier le robinet", zh: "检查阀门" },
        body: {
          en: "On the kitchen sink, left of the tap handle, there is a small tap for the dishwasher. It must point up, otherwise the dishwasher gets no water and won't start.",
          no: "På kjøkkenbatteriet, til venstre for hendelen, sitter en liten kran til oppvaskmaskinen. Den må peke opp, ellers får ikke maskinen vann og starter ikke.",
          de: "An der Küchenarmatur, links vom Hebel, sitzt ein kleines Ventil für die Spülmaschine. Es muss nach oben zeigen, sonst bekommt die Maschine kein Wasser und startet nicht.",
          fr: "Sur le mitigeur de l’évier, à gauche de la manette, se trouve un petit robinet pour le lave-vaisselle. Il doit être orienté vers le haut, sinon la machine n’a pas d’eau et ne démarre pas.",
          zh: "厨房水龙头把手左侧有一个洗碗机专用的小阀门。它必须朝上，否则洗碗机没有进水，无法启动。",
        },
        photo: {
          src: "/photos/dishwasher-tap-up.jpg",
          alt: {
            en: "Correct: the small knob left of the faucet points straight up",
            no: "Riktig: den lille knotten til venstre på kranen peker rett opp",
            de: "Richtig: Der kleine Knopf links an der Armatur zeigt nach oben",
            fr: "Correct : le petit bouton à gauche du robinet est vers le haut",
            zh: "正确：水龙头左侧的小旋钮朝上",
          },
        },
      },
      {
        title: { en: "Add the tablet", no: "Legg i tabletten", de: "Tab einlegen", fr: "Mettre la pastille", zh: "放入洗碗块" },
        body: {
          en: "Put the tablet in the tablet compartment on the inside of the door and close its lid.",
          no: "Legg tabletten i tablettrommet på innsiden av døren og lukk lokket.",
          de: "Legen Sie den Tab in das Fach an der Innenseite der Tür und schließen Sie den Deckel.",
          fr: "Mettez la pastille dans le compartiment à l’intérieur de la porte et refermez le couvercle.",
          zh: "把洗碗块放进机门内侧的洗涤剂盒，并盖好盖子。",
        },
        photo: { alt: { en: "Tablet compartment inside the door" }, placeholder: "[Photo: tablet compartment]" },
      },
      {
        title: { en: "Turn it on", no: "Slå på", de: "Einschalten", fr: "Allumer", zh: "开机" },
        body: {
          en: "Press the large button to turn the dishwasher on.",
          no: "Trykk på den store knappen for å slå på oppvaskmaskinen.",
          de: "Drücken Sie die große Taste, um die Spülmaschine einzuschalten.",
          fr: "Appuyez sur le grand bouton pour allumer le lave-vaisselle.",
          zh: "按大按钮打开洗碗机。",
        },
        photo: { alt: { en: "The large power button" }, placeholder: "[Photo: large power button]" },
      },
      {
        title: { en: "Choose Eco", no: "Velg Eco", de: "Eco wählen", fr: "Choisir Eco", zh: "选择 Eco" },
        body: {
          en: "Press the smaller button to change programme. The light shows which one is selected: choose Eco.",
          no: "Trykk på den mindre knappen for å bytte program. Lyset viser hvilket som er valgt: velg Eco.",
          de: "Mit der kleineren Taste wechseln Sie das Programm. Das Licht zeigt, welches gewählt ist: Wählen Sie Eco.",
          fr: "Appuyez sur le petit bouton pour changer de programme. Le voyant indique celui qui est choisi : choisissez Eco.",
          zh: "按小按钮切换程序，指示灯会显示当前所选程序，请选择 Eco。",
        },
        photo: { alt: { en: "Programme button and Eco light" }, placeholder: "[Photo: programme button, Eco lit]" },
      },
      {
        title: { en: "Close the door", no: "Lukk døren", de: "Tür schließen", fr: "Fermer la porte", zh: "关上机门" },
        body: {
          en: "Close the door until you hear a small click. The dishwasher starts by itself.",
          no: "Lukk døren til du hører et lite klikk. Oppvaskmaskinen starter av seg selv.",
          de: "Schließen Sie die Tür, bis sie leise klickt. Die Spülmaschine startet von selbst.",
          fr: "Fermez la porte jusqu’à entendre un petit clic. Le lave-vaisselle démarre tout seul.",
          zh: "关上机门，直到听到轻微的“咔嗒”声，洗碗机会自动启动。",
        },
      },
    ],
    troubles: [
      {
        problem: { en: "It won't start", no: "Den starter ikke", de: "Sie startet nicht", fr: "Il ne démarre pas", zh: "无法启动" },
        fix: {
          en: "Look at the small knob on the kitchen faucet, left of the handle. If it points sideways like in the photo, the dishwasher gets no water. Turn it so it points straight up, then turn the dishwasher off and on again with the large button and start it again.",
          no: "Se på den lille knotten på kjøkkenkranen, til venstre for hendelen. Peker den til siden som på bildet, får ikke oppvaskmaskinen vann. Vri den så den peker rett opp, slå oppvaskmaskinen av og på igjen med den store knappen, og start den på nytt.",
          de: "Schauen Sie auf den kleinen Knopf an der Küchenarmatur links vom Hebel. Zeigt er wie im Foto zur Seite, bekommt die Spülmaschine kein Wasser. Drehen Sie ihn senkrecht nach oben, schalten Sie die Spülmaschine mit der großen Taste aus und wieder ein und starten Sie sie erneut.",
          fr: "Regardez le petit bouton sur le robinet de la cuisine, à gauche de la manette. S’il est tourné sur le côté comme sur la photo, le lave-vaisselle n’a pas d’eau. Tournez-le vers le haut, puis éteignez et rallumez le lave-vaisselle avec le grand bouton et relancez-le.",
          zh: "查看厨房水龙头把手左侧的小旋钮。如果它像照片中那样朝向侧面，洗碗机就没有进水。把它转到垂直朝上，然后用大按钮关闭再打开洗碗机，重新启动。",
        },
        photo: {
          src: "/photos/dishwasher-tap-wrong.jpg",
          alt: {
            en: "Wrong: the small knob points sideways",
            no: "Feil: den lille knotten peker til siden",
            de: "Falsch: Der kleine Knopf zeigt zur Seite",
            fr: "Incorrect : le petit bouton est tourné sur le côté",
            zh: "错误：小旋钮朝向侧面",
          },
        },
      },
      {
        problem: {
          en: "Beeping under the sink and no water",
          no: "Piping under vasken og ikke vann",
          de: "Piepen unter der Spüle und kein Wasser",
          fr: "Ça bipe sous l’évier et plus d’eau",
          zh: "水槽下方在响且没有水",
        },
        fix: {
          en: "Water was spilled near the dishwasher and the water guard shut the water off. See the water guard guide below.",
          no: "Det er sølt vann ved oppvaskmaskinen, og vannstopperen har stengt vannet. Se guiden for vannstopperen under.",
          de: "Neben der Spülmaschine wurde Wasser verschüttet und der Wasserstopp hat das Wasser abgesperrt. Siehe die Anleitung zum Wasserstopp unten.",
          fr: "De l’eau a été renversée près du lave-vaisselle et le coupe-eau a coupé l’eau. Voir le guide du coupe-eau ci-dessous.",
          zh: "洗碗机附近洒了水，漏水保护器切断了水源。请查看下方的漏水保护器指南。",
        },
      },
    ],
    related: ["water-guard"],
  },
  {
    slug: "coffee-machine",
    room: "kitchen",
    title: {
      en: "Coffee machine (Nespresso Vertuo)",
      no: "Kaffemaskin (Nespresso Vertuo)",
      de: "Kaffeemaschine (Nespresso Vertuo)",
      fr: "Machine à café (Nespresso Vertuo)",
      zh: "咖啡机（Nespresso Vertuo）",
    },
    faq: {
      en: "How do I make coffee?",
      no: "Hvordan lager jeg kaffe?",
      de: "Wie mache ich Kaffee?",
      fr: "Comment faire un café ?",
      zh: "怎么做咖啡？",
    },
    intro: {
      en: "The machine takes Nespresso Vertuo capsules. Instant coffee, tea, sugar and hot chocolate are in the same drawer as the capsules.",
      no: "Maskinen bruker Nespresso Vertuo-kapsler. Pulverkaffe, te, sukker og kakao ligger i samme skuff som kapslene.",
      de: "Die Maschine verwendet Nespresso-Vertuo-Kapseln. Instantkaffee, Tee, Zucker und Kakao sind in derselben Schublade wie die Kapseln.",
      fr: "La machine utilise des capsules Nespresso Vertuo. Le café soluble, le thé, le sucre et le chocolat chaud sont dans le même tiroir que les capsules.",
      zh: "这台咖啡机使用 Nespresso Vertuo 胶囊。速溶咖啡、茶、糖和热可可与胶囊放在同一个抽屉里。",
    },
    short: {
      en: "Fill the water tank at the back. Turn the handle on top to the right and open the head, put a capsule in dome side down, close it and turn the handle left to lock. When the light is steady, press the button.",
      no: "Fyll vanntanken bak. Vri hendelen på toppen mot høyre og åpne hodet, legg i en kapsel med den buede siden ned, lukk og vri hendelen mot venstre for å låse. Når lyset lyser jevnt, trykk på knappen.",
      de: "Wassertank hinten füllen. Griff oben nach rechts drehen und den Kopf öffnen, Kapsel mit der gewölbten Seite nach unten einlegen, schließen und den Griff nach links drehen, um zu verriegeln. Wenn das Licht dauerhaft leuchtet, die Taste drücken.",
      fr: "Remplissez le réservoir à l’arrière. Tournez la poignée du dessus vers la droite et ouvrez la tête, mettez une capsule côté bombé vers le bas, refermez et tournez la poignée vers la gauche pour verrouiller. Quand le voyant est fixe, appuyez sur le bouton.",
      zh: "给背面的水箱加水。将顶部把手向右转并打开机头，把胶囊圆顶朝下放入，合上后把手向左转锁好。指示灯常亮后按下按钮。",
    },
    note: {
      en: "If any water spills, please wipe it up around and under the machine when you're done.",
      no: "Søler du vann, vennligst tørk opp rundt og under maskinen når du er ferdig.",
      de: "Falls Wasser verschüttet wird, wischen Sie es bitte rund um und unter der Maschine auf.",
      fr: "Si de l’eau a coulé, merci de l’essuyer autour et sous la machine une fois terminé.",
      zh: "如有洒水，用完后请把咖啡机周围和下方擦干。",
    },
    cover: { src: "/photos/coffee-machine.jpg", alt: { en: "The Nespresso Vertuo coffee machine", no: "Nespresso Vertuo-kaffemaskinen" } },
    steps: [
      {
        title: { en: "Get a capsule", no: "Hent en kapsel", de: "Kapsel holen", fr: "Prendre une capsule", zh: "取一颗胶囊" },
        body: {
          en: "Capsules are in the basket in the third drawer down (counting from the top), between the dishwasher and the freezer, together with instant coffee, tea, sugar and hot chocolate.",
          no: "Kapslene ligger i kurven i den tredje skuffen ovenfra, mellom oppvaskmaskinen og fryseren, sammen med pulverkaffe, te, sukker og kakao.",
          de: "Die Kapseln liegen im Körbchen in der dritten Schublade von oben, zwischen Spülmaschine und Gefrierschrank, zusammen mit Instantkaffee, Tee, Zucker und Kakao.",
          fr: "Les capsules sont dans le petit panier du troisième tiroir en partant du haut, entre le lave-vaisselle et le congélateur, avec le café soluble, le thé, le sucre et le chocolat chaud.",
          zh: "胶囊放在洗碗机和冰柜之间从上往下数第三个抽屉里的小篮子中，速溶咖啡、茶、糖和热可可也在那里。",
        },
        photo: { src: "/photos/coffee-drawer.jpg", alt: { en: "The drawer with capsules, tea, sugar, instant coffee and hot chocolate", no: "Skuffen med kapsler, te, sukker, pulverkaffe og kakao" } },
      },
      {
        title: { en: "Fill the water tank", no: "Fyll vanntanken", de: "Wassertank füllen", fr: "Remplir le réservoir", zh: "给水箱加水" },
        body: {
          en: "The water tank sits at the back of the machine. Lift it off, fill it with fresh cold water and put it back firmly in place.",
          no: "Vanntanken sitter bak på maskinen. Løft den av, fyll den med friskt, kaldt vann og sett den godt på plass igjen.",
          de: "Der Wassertank sitzt hinten an der Maschine. Abnehmen, mit frischem kaltem Wasser füllen und wieder fest einsetzen.",
          fr: "Le réservoir se trouve à l’arrière de la machine. Retirez-le, remplissez-le d’eau fraîche et remettez-le bien en place.",
          zh: "水箱位于咖啡机背面。取下水箱，加满新鲜冷水，然后装回到位。",
        },
        photo: { src: "/photos/coffee-water-tank.jpg", alt: { en: "Putting the water tank back behind the machine", no: "Vanntanken settes tilbake bak maskinen" } },
      },
      {
        title: { en: "Open and insert a capsule", no: "Åpne og legg i en kapsel", de: "Öffnen und Kapsel einlegen", fr: "Ouvrir et insérer une capsule", zh: "打开并放入胶囊" },
        body: {
          en: "Turn the handle on top to the right and lift the head. Put the capsule in with the dome side down.",
          no: "Vri hendelen på toppen mot høyre og løft opp hodet. Legg i kapselen med den buede siden ned.",
          de: "Drehen Sie den Griff oben nach rechts und heben Sie den Kopf an. Legen Sie die Kapsel mit der gewölbten Seite nach unten ein.",
          fr: "Tournez la poignée du dessus vers la droite et soulevez la tête. Placez la capsule côté bombé vers le bas.",
          zh: "将顶部把手向右转，抬起机头。把胶囊圆顶朝下放入。",
        },
        photo: { src: "/photos/coffee-capsule-holder.jpg", alt: { en: "The open machine with the capsule holder", no: "Den åpne maskinen med kapselholderen" } },
      },
      {
        title: { en: "Close and lock", no: "Lukk og lås", de: "Schließen und verriegeln", fr: "Fermer et verrouiller", zh: "合上并锁好" },
        body: {
          en: "Push the head down and turn the handle to the left, to the lock symbol. Locking also turns the machine on: the light blinks while it heats up.",
          no: "Trykk hodet ned og vri hendelen mot venstre, til låssymbolet. Når du låser, slår maskinen seg også på: lyset blinker mens den varmes opp.",
          de: "Drücken Sie den Kopf nach unten und drehen Sie den Griff nach links bis zum Schloss-Symbol. Das Verriegeln schaltet die Maschine ein: Das Licht blinkt, während sie aufheizt.",
          fr: "Abaissez la tête et tournez la poignée vers la gauche, jusqu’au symbole du cadenas. Le verrouillage allume aussi la machine : le voyant clignote pendant qu’elle chauffe.",
          zh: "按下机头，把手向左转到锁形图标处。锁好后咖啡机会自动开机，加热期间指示灯闪烁。",
        },
        photo: { src: "/photos/coffee-lock-handle.jpg", alt: { en: "Turning the handle to lock the machine", no: "Hendelen vris for å låse maskinen" } },
      },
      {
        title: { en: "Press the button", no: "Trykk på knappen", de: "Taste drücken", fr: "Appuyer sur le bouton", zh: "按下按钮" },
        body: {
          en: "Put a cup under the spout. When the light is steady, press the button on top. The machine reads the capsule and makes the right amount by itself.",
          no: "Sett en kopp under tuten. Når lyset lyser jevnt, trykk på knappen på toppen. Maskinen leser kapselen og lager riktig mengde av seg selv.",
          de: "Tasse unter den Auslauf stellen. Wenn das Licht dauerhaft leuchtet, die Taste oben drücken. Die Maschine erkennt die Kapsel und bereitet automatisch die richtige Menge zu.",
          fr: "Placez une tasse sous la buse. Quand le voyant est fixe, appuyez sur le bouton du dessus. La machine lit la capsule et prépare automatiquement la bonne quantité.",
          zh: "把杯子放在出水口下方。指示灯常亮后，按顶部的按钮。咖啡机会识别胶囊并自动冲出合适的量。",
        },
        photo: { src: "/photos/coffee-button.jpg", alt: { en: "Pressing the button on top", no: "Knappen på toppen trykkes" } },
      },
      {
        title: { en: "Remove the capsule", no: "Fjern kapselen", de: "Kapsel entfernen", fr: "Retirer la capsule", zh: "取出胶囊" },
        body: {
          en: "When it's done, turn the handle to the right and open the head: the used capsule drops into the container by itself. Empty the container if it's full.",
          no: "Når den er ferdig, vri hendelen mot høyre og åpne hodet: den brukte kapselen faller ned i beholderen av seg selv. Tøm beholderen hvis den er full.",
          de: "Danach den Griff nach rechts drehen und den Kopf öffnen: Die gebrauchte Kapsel fällt von selbst in den Behälter. Leeren Sie den Behälter, wenn er voll ist.",
          fr: "Une fois terminé, tournez la poignée vers la droite et ouvrez la tête : la capsule usagée tombe d’elle-même dans le bac. Videz le bac s’il est plein.",
          zh: "完成后，把手向右转并打开机头，用过的胶囊会自动落入收集盒。收集盒满了请倒空。",
        },
      },
    ],
    video: "/videos/coffee-machine.mp4",
    poster: "/videos/coffee-machine.jpg",
    troubles: [
      {
        problem: { en: "Nothing happens when I press the button", no: "Ingenting skjer når jeg trykker", de: "Beim Drücken passiert nichts", fr: "Rien ne se passe quand j’appuie", zh: "按按钮后没有反应" },
        fix: {
          en: "Make sure the head is pushed down and the handle is turned all the way left to the lock symbol, and that the water tank has water and sits firmly. If the light is blinking, the machine is still heating: wait until it's steady.",
          no: "Sjekk at hodet er trykket ned og hendelen vridd helt mot venstre til låssymbolet, og at vanntanken har vann og sitter godt. Blinker lyset, varmes maskinen fortsatt opp: vent til det lyser jevnt.",
          de: "Prüfen Sie, ob der Kopf unten ist und der Griff ganz nach links bis zum Schloss-Symbol gedreht ist und ob der Wassertank gefüllt und fest eingesetzt ist. Blinkt das Licht, heizt die Maschine noch: Warten Sie, bis es dauerhaft leuchtet.",
          fr: "Vérifiez que la tête est abaissée et la poignée tournée à fond vers la gauche jusqu’au cadenas, et que le réservoir contient de l’eau et est bien en place. Si le voyant clignote, la machine chauffe encore : attendez qu’il soit fixe.",
          zh: "请确认机头已按下、把手已向左转到锁形图标处，且水箱有水并安装到位。如果指示灯在闪烁，说明仍在加热，请等到常亮。",
        },
      },
      {
        problem: { en: "The coffee overflows the cup", no: "Kaffen renner over koppen", de: "Der Kaffee läuft über", fr: "Le café déborde de la tasse", zh: "咖啡溢出杯子" },
        fix: {
          en: "The capsule decides the size: large capsules make a full mug. Use a big mug; the cup stand can be moved down or taken off so it fits.",
          no: "Kapselen bestemmer mengden: store kapsler gir et fullt krus. Bruk et stort krus; koppstøtten kan flyttes ned eller tas av så det får plass.",
          de: "Die Kapsel bestimmt die Menge: Große Kapseln ergeben einen ganzen Becher. Nehmen Sie einen großen Becher; die Tassenablage lässt sich tiefer stellen oder abnehmen.",
          fr: "C’est la capsule qui détermine la quantité : les grandes capsules remplissent un mug. Utilisez un grand mug ; le support de tasse peut être abaissé ou retiré.",
          zh: "出杯量由胶囊决定，大号胶囊会冲满一大杯。请使用大马克杯，杯托可以调低或取下。",
        },
      },
    ],
    related: ["dishwasher"],
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
    short: {
      en: "Detergent is in the glass jar in the tall bathroom cupboard. Turn the knob 2 clicks right for 40 °C or 3 for 60 °C, put detergent in the leftmost compartment and press the bottom-right button.",
      no: "Vaskemiddel står i glasskrukken i det høye skapet på badet. Vri bryteren 2 klikk mot høyre for 40 °C eller 3 for 60 °C, ha vaskemiddel i rommet lengst til venstre og trykk på knappen nederst til høyre.",
      de: "Waschmittel ist im Glas im hohen Badezimmerschrank. Drehknopf 2 Klicks nach rechts für 40 °C oder 3 für 60 °C, Waschmittel ins linke Fach geben und die Taste unten rechts drücken.",
      fr: "La lessive est dans le bocal en verre de la grande armoire de la salle de bain. Tournez le bouton de 2 crans vers la droite pour 40 °C ou 3 pour 60 °C, mettez la lessive dans le compartiment le plus à gauche et appuyez sur le bouton en bas à droite.",
      zh: "洗衣液在浴室高柜里的玻璃罐中。旋钮向右转 2 格为 40 °C，转 3 格为 60 °C；把洗衣液放进最左边的格子，然后按右下角的按钮。",
    },
    note: {
      en: "Before washing, please take the decorations off the top of the machine so they don’t fall off during spinning. A drying rack is in the storage room to the left of the kitchen.",
      no: "Før du vasker, ta pyntet av toppen av maskinen så det ikke faller ned under sentrifugeringen. Tørkestativ står i boden til venstre for kjøkkenet.",
    },
    cover: { src: "/photos/washing-machine.jpg", alt: { en: "The washing machine", no: "Vaskemaskinen" } },
    steps: [
      {
        title: { en: "Get the detergent", no: "Hent vaskemiddel", de: "Waschmittel holen", fr: "Prendre la lessive", zh: "取洗衣液" },
        body: {
          en: "Detergent is in a glass jar in the tall cupboard in the bathroom, next to the shower.",
          no: "Vaskemiddelet står i en glasskrukke i det høye skapet på badet, ved siden av dusjkabinettet.",
          de: "Das Waschmittel steht in einem Glas im hohen Schrank im Bad, neben der Dusche.",
          fr: "La lessive est dans un bocal en verre, dans la grande armoire de la salle de bain, à côté de la douche.",
          zh: "洗衣液放在浴室淋浴间旁边高柜里的玻璃罐中。",
        },
        photo: { src: "/photos/bathroom-cupboard.jpg", alt: { en: "The tall bathroom cupboard with the detergent jar", no: "Det høye skapet på badet med vaskemiddelkrukken" } },
        video: "/videos/laundry-detergent.mp4",
        poster: "/photos/bathroom-cupboard.jpg",
      },
      {
        title: { en: "Load the laundry", no: "Legg inn tøyet", de: "Wäsche einfüllen", fr: "Charger le linge", zh: "放入衣物" },
        body: {
          en: "Put the laundry in the drum and close the door until it clicks.",
          no: "Legg tøyet i trommelen og lukk døren til det klikker.",
          de: "Wäsche in die Trommel geben und die Tür schließen, bis sie einrastet.",
          fr: "Mettez le linge dans le tambour et fermez la porte jusqu’au clic.",
          zh: "把衣物放进滚筒，关上机门直到听到“咔嗒”声。",
        },
        photo: { src: "/photos/washing-door.jpg", alt: { en: "Laundry in the drum with the door closed", no: "Tøy i trommelen med døren lukket" } },
      },
      {
        title: { en: "Add detergent", no: "Fyll på vaskemiddel", de: "Waschmittel einfüllen", fr: "Ajouter la lessive", zh: "加入洗衣液" },
        body: {
          en: "Pull out the drawer on the left side of the machine and put the detergent in the leftmost compartment.",
          no: "Trekk ut skuffen på venstre side av maskinen og ha vaskemiddelet i rommet lengst til venstre.",
          de: "Ziehen Sie die Schublade links an der Maschine heraus und geben Sie das Waschmittel ins linke Fach.",
          fr: "Tirez le bac à gauche de la machine et versez la lessive dans le compartiment le plus à gauche.",
          zh: "拉出洗衣机左侧的抽屉，把洗衣液放进最左边的格子。",
        },
        photo: { src: "/photos/washing-detergent-drawer.jpg", alt: { en: "The leftmost compartment of the detergent drawer", no: "Rommet lengst til venstre i vaskemiddelskuffen" } },
      },
      {
        title: { en: "Choose the temperature", no: "Velg temperatur", de: "Temperatur wählen", fr: "Choisir la température", zh: "选择温度" },
        body: {
          en: "Turn the knob to the right: 2 clicks for 40 °C (everyday laundry) or 3 clicks for 60 °C (towels and bedding).",
          no: "Vri bryteren mot høyre: 2 klikk for 40 °C (vanlig tøy) eller 3 klikk for 60 °C (håndklær og sengetøy).",
          de: "Drehknopf nach rechts drehen: 2 Klicks für 40 °C (Alltagswäsche) oder 3 Klicks für 60 °C (Handtücher und Bettwäsche).",
          fr: "Tournez le bouton vers la droite : 2 crans pour 40 °C (linge courant) ou 3 crans pour 60 °C (serviettes et draps).",
          zh: "将旋钮向右转：转 2 格为 40 °C（日常衣物），转 3 格为 60 °C（毛巾和床品）。",
        },
        photo: { src: "/photos/washing-knob.jpg", alt: { en: "Turning the programme knob", no: "Programbryteren vris" } },
      },
      {
        title: { en: "Press start", no: "Trykk start", de: "Start drücken", fr: "Appuyer sur départ", zh: "按启动" },
        body: {
          en: "Press the bottom-right button. The machine starts after a moment.",
          no: "Trykk på knappen nederst til høyre. Maskinen starter etter et øyeblikk.",
          de: "Drücken Sie die Taste unten rechts. Die Maschine startet nach einem Moment.",
          fr: "Appuyez sur le bouton en bas à droite. La machine démarre après un instant.",
          zh: "按右下角的按钮，洗衣机稍后就会启动。",
        },
        photo: { src: "/photos/washing-start.jpg", alt: { en: "Pressing the start button", no: "Startknappen trykkes" } },
      },
    ],
    video: "/videos/washing-machine.mp4",
    poster: "/videos/washing-machine.jpg",
    troubles: [
      {
        problem: { en: "Nothing happens when I press start", no: "Ingenting skjer når jeg trykker start", de: "Beim Drücken auf Start passiert nichts", fr: "Rien ne se passe quand j’appuie sur départ", zh: "按启动后没有反应" },
        fix: {
          en: "Check that the door is shut properly (push until it clicks) and that the knob is on a programme, not off.",
          no: "Sjekk at døren er ordentlig lukket (trykk til det klikker) og at bryteren står på et program, ikke av.",
          de: "Prüfen Sie, ob die Tür richtig geschlossen ist (bis sie einrastet) und der Knopf auf einem Programm steht, nicht auf Aus.",
          fr: "Vérifiez que la porte est bien fermée (jusqu’au clic) et que le bouton est sur un programme, pas sur arrêt.",
          zh: "请确认机门已关紧（直到听到咔嗒声），并且旋钮停在某个程序上而不是关闭档。",
        },
      },
      {
        problem: { en: "The door won't open after washing", no: "Døren åpner seg ikke etter vask", de: "Die Tür geht nach dem Waschen nicht auf", fr: "La porte ne s’ouvre pas après le lavage", zh: "洗完后机门打不开" },
        fix: {
          en: "The door stays locked for a minute or two after the programme ends. Wait a moment and try again.",
          no: "Døren er låst et minutt eller to etter at programmet er ferdig. Vent litt og prøv igjen.",
          de: "Die Tür bleibt nach Programmende ein bis zwei Minuten verriegelt. Kurz warten und erneut versuchen.",
          fr: "La porte reste verrouillée une ou deux minutes après la fin du programme. Patientez un instant et réessayez.",
          zh: "程序结束后机门会锁定一两分钟。请稍等片刻再试。",
        },
      },
    ],
  },
  {
    slug: "sofa-bed",
    room: "living-room",
    title: { en: "Sofa bed", no: "Sovesofa" },
    faq: { en: "How do I set up the sofa bed?", no: "Hvordan slår jeg ut sovesofaen?" },
    short: {
      en: "Move the coffee table, pull the bottom of the sofa out and lift up the sleeping section. Bedding is in the storage room to the left of the kitchen.",
      no: "Flytt stuebordet, dra ut bunnen av sofaen og løft opp soveseksjonen. Sengetøy ligger i boden til venstre for kjøkkenet.",
    },
    steps: [
      {
        title: { en: "Move the coffee table", no: "Flytt stuebordet" },
        body: {
          en: "Lift the plant off first. The tabletop lifts straight off the legs, so move them separately. The table is very light.",
          no: "Løft av planten først. Bordplaten løftes rett av beina, så flytt dem hver for seg. Bordet er veldig lett.",
        },
      },
      {
        title: { en: "Pull out the bed", no: "Dra ut sengen" },
        body: {
          en: "Grab underneath the front of the sofa, pull the bottom part out, then lift up the sleeping section.",
          no: "Ta tak under fronten av sofaen, dra ut den nederste delen, og løft så opp soveseksjonen.",
        },
      },
      {
        title: { en: "Make the bed", no: "Re opp sengen" },
        body: {
          en: "The sheet, duvet and pillows are in the storage room to the left of the kitchen. If you booked for more than 2, we have already put covers on the duvet and pillows, so you only need to put on the sheet.",
          no: "Laken, dyne og puter ligger i boden til venstre for kjøkkenet. Har du booket for flere enn 2, har vi allerede trukket dyna og putene, så du trenger bare å legge på lakenet.",
        },
      },
    ],
  },
  {
    slug: "tv",
    room: "living-room",
    title: { en: "TV & Apple TV", no: "TV og Apple TV", de: "Fernseher & Apple TV", fr: "Télévision et Apple TV", zh: "电视和 Apple TV" },
    faq: {
      en: "How do I use the TV?",
      no: "Hvordan bruker jeg TV-en?",
      de: "Wie benutze ich den Fernseher?",
      fr: "Comment utiliser la télévision ?",
      zh: "怎么使用电视？",
    },
    short: {
      en: "Turn on the TV and the Apple TV starts by itself. No picture? Press the input button on the black remote and choose HDMI 1. Apple TV+ is included, so you can start watching right away.",
      no: "Slå på TV-en, så starter Apple TV av seg selv. Ikke bilde? Trykk på inngangsknappen på den svarte fjernkontrollen og velg HDMI 1. Apple TV+ er inkludert, så du kan begynne å se med en gang.",
      de: "Schalten Sie den Fernseher ein, Apple TV startet von selbst. Kein Bild? Drücken Sie die Eingangstaste auf der schwarzen Fernbedienung und wählen Sie HDMI 1. Apple TV+ ist inklusive, Sie können sofort loslegen.",
      fr: "Allumez la télévision : l’Apple TV démarre toute seule. Pas d’image ? Appuyez sur le bouton source de la télécommande noire et choisissez HDMI 1. Apple TV+ est inclus, vous pouvez regarder tout de suite.",
      zh: "打开电视，Apple TV 会自动启动。没有画面？按黑色遥控器上的信号源按钮，选择 HDMI 1。已包含 Apple TV+，可直接观看。",
    },
    note: {
      en: "Apple TV+ is included. For other streaming services, you can log in with your own account: please remember to log out before you leave.",
      no: "Apple TV+ er inkludert. Andre strømmetjenester kan du logge inn på med din egen konto: husk å logge ut før du reiser.",
      de: "Apple TV+ ist inklusive. Bei anderen Streamingdiensten können Sie sich mit Ihrem eigenen Konto anmelden: Bitte vor der Abreise wieder abmelden.",
      fr: "Apple TV+ est inclus. Pour les autres services de streaming, connectez-vous avec votre propre compte et pensez à vous déconnecter avant de partir.",
      zh: "已包含 Apple TV+。其他流媒体服务可用您自己的账号登录，离开前请记得退出。",
    },
    cover: {
      src: "/photos/tv-remotes.jpg",
      alt: {
        en: "The two remotes: silver for the Apple TV, black for the TV",
        no: "De to fjernkontrollene: sølv til Apple TV, svart til TV-en",
        de: "Die zwei Fernbedienungen: silber für Apple TV, schwarz für den Fernseher",
        fr: "Les deux télécommandes : argentée pour l’Apple TV, noire pour la télévision",
        zh: "两个遥控器：银色的控制 Apple TV，黑色的控制电视",
      },
    },
    steps: [
      {
        title: { en: "Turn on the TV", no: "Slå på TV-en", de: "Fernseher einschalten", fr: "Allumer la télévision", zh: "打开电视" },
        body: {
          en: "Press the red power button on the black remote (or the power button at the top of the silver remote). The Apple TV usually starts by itself.",
          no: "Trykk på den røde av/på-knappen på den svarte fjernkontrollen (eller av/på-knappen øverst på den sølvfargede). Apple TV starter vanligvis av seg selv.",
          de: "Drücken Sie die rote Ein/Aus-Taste auf der schwarzen Fernbedienung (oder die Ein/Aus-Taste oben auf der silbernen). Apple TV startet meist von selbst.",
          fr: "Appuyez sur le bouton rouge de la télécommande noire (ou sur le bouton marche en haut de la télécommande argentée). L’Apple TV démarre en général toute seule.",
          zh: "按黑色遥控器上的红色电源键（或银色遥控器顶部的电源键）。Apple TV 通常会自动启动。",
        },
      },
      {
        title: { en: "No picture? Choose HDMI 1", no: "Ikke bilde? Velg HDMI 1", de: "Kein Bild? HDMI 1 wählen", fr: "Pas d’image ? Choisir HDMI 1", zh: "没有画面？选择 HDMI 1" },
        body: {
          en: "Press the input button at the top left of the black remote (a box with an arrow) and choose HDMI 1.",
          no: "Trykk på inngangsknappen øverst til venstre på den svarte fjernkontrollen (en boks med en pil) og velg HDMI 1.",
          de: "Drücken Sie die Eingangstaste oben links auf der schwarzen Fernbedienung (ein Kästchen mit Pfeil) und wählen Sie HDMI 1.",
          fr: "Appuyez sur le bouton source en haut à gauche de la télécommande noire (un carré avec une flèche) et choisissez HDMI 1.",
          zh: "按黑色遥控器左上角的信号源按钮（方框加箭头图标），选择 HDMI 1。",
        },
        photo: {
          src: "/photos/tv-input-button.jpg",
          alt: { en: "Input button, top left on the black remote", no: "Inngangsknappen øverst til venstre på den svarte fjernkontrollen" },
        },
      },
      {
        title: { en: "Use the silver remote", no: "Bruk den sølvfargede fjernkontrollen", de: "Die silberne Fernbedienung", fr: "Utiliser la télécommande argentée", zh: "使用银色遥控器" },
        body: {
          en: "Press the edges of the round pad to move, and the middle to select. ‹ goes back, the TV button takes you to the home screen, and + / − change the volume.",
          no: "Trykk på kantene av den runde knappen for å flytte deg, og i midten for å velge. ‹ går tilbake, TV-knappen tar deg til hjemskjermen, og + / − endrer volumet.",
          de: "Drücken Sie auf den Rand des runden Felds, um sich zu bewegen, und in die Mitte, um auszuwählen. ‹ geht zurück, die TV-Taste führt zum Home-Bildschirm, + / − ändern die Lautstärke.",
          fr: "Appuyez sur les bords du pavé rond pour vous déplacer, et au centre pour valider. ‹ revient en arrière, le bouton TV ramène à l’écran d’accueil, + / − règlent le volume.",
          zh: "按圆形触控板的边缘移动，按中间确认。‹ 返回，电视按钮回到主屏幕，+ / − 调节音量。",
        },
        photo: {
          src: "/photos/tv-apple-remote.jpg",
          alt: { en: "The silver Apple TV remote", no: "Den sølvfargede Apple TV-fjernkontrollen" },
        },
      },
      {
        title: { en: "Open an app", no: "Åpne en app", de: "Eine App öffnen", fr: "Ouvrir une application", zh: "打开应用" },
        body: {
          en: "Choose an app on the home screen. Apple TV+ is ready to use. For other services, log in with your own account. Want to cast from your phone? Choose HDMI 2 for Chromecast.",
          no: "Velg en app på hjemskjermen. Apple TV+ er klar til bruk. Andre tjenester logger du inn på med din egen konto. Vil du caste fra mobilen? Velg HDMI 2 for Chromecast.",
          de: "Wählen Sie eine App auf dem Home-Bildschirm. Apple TV+ ist sofort nutzbar. Bei anderen Diensten melden Sie sich mit Ihrem eigenen Konto an. Vom Handy streamen? HDMI 2 für Chromecast wählen.",
          fr: "Choisissez une application sur l’écran d’accueil. Apple TV+ est prêt à l’emploi. Pour les autres services, connectez-vous avec votre propre compte. Envie de caster depuis votre téléphone ? Choisissez HDMI 2 pour le Chromecast.",
          zh: "在主屏幕上选择应用。Apple TV+ 可直接使用。其他服务请用您自己的账号登录。想从手机投屏？请选择 HDMI 2 使用 Chromecast。",
        },
      },
      {
        title: { en: "Turn it off", no: "Slå av", de: "Ausschalten", fr: "Éteindre", zh: "关闭" },
        body: {
          en: "Press the red power button on the black remote. The Apple TV goes to sleep by itself.",
          no: "Trykk på den røde av/på-knappen på den svarte fjernkontrollen. Apple TV går i dvale av seg selv.",
          de: "Drücken Sie die rote Ein/Aus-Taste auf der schwarzen Fernbedienung. Apple TV geht von selbst in den Ruhezustand.",
          fr: "Appuyez sur le bouton rouge de la télécommande noire. L’Apple TV se met en veille toute seule.",
          zh: "按黑色遥控器上的红色电源键。Apple TV 会自动进入睡眠。",
        },
      },
    ],
    troubles: [
      {
        problem: { en: "“No signal” on the screen", no: "«Ingen signal» på skjermen", de: "„Kein Signal“ auf dem Bildschirm", fr: "« Pas de signal » à l’écran", zh: "屏幕显示“无信号”" },
        fix: {
          en: "Press the input button at the top left of the black remote and choose HDMI 1. If it’s still black, press the TV button on the silver remote to wake the Apple TV.",
          no: "Trykk på inngangsknappen øverst til venstre på den svarte fjernkontrollen og velg HDMI 1. Er det fortsatt svart, trykk på TV-knappen på den sølvfargede for å vekke Apple TV.",
          de: "Drücken Sie die Eingangstaste oben links auf der schwarzen Fernbedienung und wählen Sie HDMI 1. Bleibt es schwarz, drücken Sie die TV-Taste auf der silbernen Fernbedienung, um Apple TV zu wecken.",
          fr: "Appuyez sur le bouton source en haut à gauche de la télécommande noire et choisissez HDMI 1. Si l’écran reste noir, appuyez sur le bouton TV de la télécommande argentée pour réveiller l’Apple TV.",
          zh: "按黑色遥控器左上角的信号源按钮，选择 HDMI 1。如果仍然黑屏，按银色遥控器上的电视按钮唤醒 Apple TV。",
        },
      },
    ],
  },
];
