import type { Guide } from "./types";

// Appliance guides. Order matters: guides with a `faq` appear in "Guests often ask" in this order.
// The induction hob is an unconfirmed example; check it against the real model.
export const guides: Guide[] = [
  {
    slug: "induction-hob",
    room: "kitchen",
    title: { en: "Induction hob", no: "Induksjonstopp", de: "Induktionskochfeld", fr: "Plaque à induction", zh: "电磁炉" },
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
      en: "The water guard protects the apartment from leaks. If it senses moisture on the floor, it beeps, shows a red light and shuts off the water.",
      no: "Vannstopperen beskytter leiligheten mot lekkasjer. Merker den fuktighet på gulvet, piper den, lyser rødt og stenger vannet.",
      de: "Der Wasserstopp schützt die Wohnung vor Wasserschäden. Erkennt er Feuchtigkeit am Boden, piept er, leuchtet rot und sperrt das Wasser ab.",
      fr: "Le coupe-eau protège l’appartement des fuites. S’il détecte de l’humidité au sol, il bipe, s’allume en rouge et coupe l’eau.",
      zh: "漏水保护器用于防止公寓漏水。一旦检测到地面潮湿，它会发出蜂鸣声、亮红灯并切断水源。",
    },
    short: {
      en: "Usually a little water was spilled near the dishwasher. Dry the floor well, then unplug the water guard under the sink and plug it back in.",
      no: "Som regel er det sølt litt vann ved oppvaskmaskinen. Tørk gulvet godt, og trekk så ut kontakten til vannstopperen under vasken og sett den inn igjen.",
      de: "Meist wurde etwas Wasser neben der Spülmaschine verschüttet. Boden gründlich trocknen, dann den Stecker des Wasserstopps unter der Spüle ziehen und wieder einstecken.",
      fr: "En général, un peu d’eau a été renversée près du lave-vaisselle. Séchez bien le sol, puis débranchez le coupe-eau sous l’évier et rebranchez-le.",
      zh: "通常是洗碗机附近洒了一点水。请把地面彻底擦干，然后拔下水槽下方漏水保护器的电源插头，再重新插上。",
    },
    cover: {
      src: "/photos/water-guard-red.jpg",
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
          en: "Open the cupboard under the kitchen sink. The water guard is behind the rubbish bins: lift them out to reach it.",
          no: "Åpne skapet under kjøkkenvasken. Vannstopperen står bak søppelbøttene: løft dem ut for å komme til.",
          de: "Öffnen Sie den Schrank unter der Küchenspüle. Der Wasserstopp sitzt hinter den Mülleimern: Nehmen Sie diese heraus.",
          fr: "Ouvrez le placard sous l’évier. Le coupe-eau se trouve derrière les poubelles : sortez-les pour y accéder.",
          zh: "打开厨房水槽下方的柜子。漏水保护器在垃圾桶后面，把垃圾桶拿出来即可看到。",
        },
        photo: { alt: { en: "Cupboard under the sink with the bins removed" }, placeholder: "[Photo: under the sink, bins removed]" },
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
        photo: { alt: { en: "Floor in front of the dishwasher" }, placeholder: "[Photo: floor and panel by the dishwasher]" },
      },
      {
        title: { en: "Reset it", no: "Tilbakestill", de: "Zurücksetzen", fr: "Le réinitialiser", zh: "重置" },
        body: {
          en: "Unplug the water guard's power plug, wait a few seconds and plug it back in. The red light goes out and the beeping stops.",
          no: "Trekk ut strømkontakten til vannstopperen, vent noen sekunder og sett den inn igjen. Det røde lyset slukker og pipingen stopper.",
          de: "Ziehen Sie den Netzstecker des Wasserstopps, warten Sie einige Sekunden und stecken Sie ihn wieder ein. Das rote Licht erlischt und das Piepen hört auf.",
          fr: "Débranchez la prise du coupe-eau, attendez quelques secondes et rebranchez-la. La lumière rouge s’éteint et le bip s’arrête.",
          zh: "拔下漏水保护器的电源插头，等几秒钟后重新插上。红灯会熄灭，蜂鸣声停止。",
        },
        photo: { alt: { en: "The water guard's power plug" }, placeholder: "[Photo: the power plug]" },
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
    cover: { alt: { en: "The dishwasher" }, placeholder: "[Photo: the dishwasher]" },
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
        photo: { alt: { en: "The small dishwasher tap pointing up" }, placeholder: "[Photo: small tap pointing up]" },
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
          en: "Turn the small tap on the kitchen sink, left of the handle, so it points up. Then start again.",
          no: "Vri den lille kranen på kjøkkenbatteriet, til venstre for hendelen, slik at den peker opp. Start så på nytt.",
          de: "Drehen Sie das kleine Ventil an der Küchenarmatur links vom Hebel nach oben. Dann erneut starten.",
          fr: "Tournez le petit robinet sur le mitigeur, à gauche de la manette, vers le haut. Puis relancez.",
          zh: "把厨房水龙头左侧的小阀门转到朝上，然后重新启动。",
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
      en: "The machine takes Nespresso Vertuo capsules. Tea, sugar and hot chocolate are in the same drawer as the capsules.",
      no: "Maskinen bruker Nespresso Vertuo-kapsler. Te, sukker og kakao ligger i samme skuff som kapslene.",
      de: "Die Maschine verwendet Nespresso-Vertuo-Kapseln. Tee, Zucker und Kakao sind in derselben Schublade wie die Kapseln.",
      fr: "La machine utilise des capsules Nespresso Vertuo. Le thé, le sucre et le chocolat chaud sont dans le même tiroir que les capsules.",
      zh: "这台咖啡机使用 Nespresso Vertuo 胶囊。茶、糖和热可可与胶囊放在同一个抽屉里。",
    },
    short: {
      en: "Capsules are in the third drawer between the dishwasher and the freezer. Check there is water in the tank, put a capsule in dome side down, close and lock the top, then press the button.",
      no: "Kapslene ligger i den tredje skuffen mellom oppvaskmaskinen og fryseren. Sjekk at det er vann i tanken, legg i en kapsel med den buede siden ned, lukk og lås toppen, og trykk på knappen.",
      de: "Die Kapseln sind in der dritten Schublade zwischen Spülmaschine und Gefrierschrank. Prüfen Sie den Wassertank, legen Sie eine Kapsel mit der gewölbten Seite nach unten ein, Deckel schließen und verriegeln, dann die Taste drücken.",
      fr: "Les capsules sont dans le troisième tiroir entre le lave-vaisselle et le congélateur. Vérifiez qu’il y a de l’eau dans le réservoir, mettez une capsule côté bombé vers le bas, fermez et verrouillez le haut, puis appuyez sur le bouton.",
      zh: "胶囊在洗碗机和冰柜之间的第三个抽屉里。确认水箱有水，将胶囊圆顶朝下放入，合上并锁好顶盖，然后按按钮。",
    },
    note: {
      en: "If any water spills, please wipe it up around and under the machine when you're done.",
      no: "Søler du vann, vennligst tørk opp rundt og under maskinen når du er ferdig.",
      de: "Falls Wasser verschüttet wird, wischen Sie es bitte rund um und unter der Maschine auf.",
      fr: "Si de l’eau a coulé, merci de l’essuyer autour et sous la machine une fois terminé.",
      zh: "如有洒水，用完后请把咖啡机周围和下方擦干。",
    },
    cover: { alt: { en: "The Nespresso machine" }, placeholder: "[Photo: the coffee machine]" },
    steps: [
      {
        title: { en: "Get a capsule", no: "Hent en kapsel", de: "Kapsel holen", fr: "Prendre une capsule", zh: "取一颗胶囊" },
        body: {
          en: "Capsules are in the third drawer between the dishwasher and the freezer, together with tea, sugar and hot chocolate.",
          no: "Kapslene ligger i den tredje skuffen mellom oppvaskmaskinen og fryseren, sammen med te, sukker og kakao.",
          de: "Die Kapseln liegen in der dritten Schublade zwischen Spülmaschine und Gefrierschrank, zusammen mit Tee, Zucker und Kakao.",
          fr: "Les capsules sont dans le troisième tiroir entre le lave-vaisselle et le congélateur, avec le thé, le sucre et le chocolat chaud.",
          zh: "胶囊放在洗碗机和冰柜之间的第三个抽屉里，茶、糖和热可可也在那里。",
        },
        photo: { alt: { en: "The capsule drawer" }, placeholder: "[Photo: capsule drawer]" },
      },
      {
        title: { en: "Check the water", no: "Sjekk vannet", de: "Wasser prüfen", fr: "Vérifier l’eau", zh: "检查水量" },
        body: {
          en: "The water tank is at the back of the machine. If it's low, fill it with cold water and put it back firmly.",
          no: "Vanntanken sitter bak på maskinen. Er det lite vann, fyll den med kaldt vann og sett den godt på plass igjen.",
          de: "Der Wassertank ist hinten an der Maschine. Ist er fast leer, mit kaltem Wasser füllen und fest wieder einsetzen.",
          fr: "Le réservoir d’eau est à l’arrière de la machine. S’il est presque vide, remplissez-le d’eau froide et remettez-le bien en place.",
          zh: "水箱在咖啡机背面。如果水不多，请加入冷水并将水箱装回到位。",
        },
        photo: { alt: { en: "The water tank" }, placeholder: "[Photo: water tank at the back]" },
      },
      {
        title: { en: "Insert the capsule", no: "Legg i kapselen", de: "Kapsel einlegen", fr: "Insérer la capsule", zh: "放入胶囊" },
        body: {
          en: "Unlock the lever on top and lift the head. Put the capsule in with the dome side down, then close the head and lock the lever.",
          no: "Lås opp hendelen på toppen og løft opp hodet. Legg i kapselen med den buede siden ned, lukk hodet og lås hendelen.",
          de: "Entriegeln Sie den Hebel oben und heben Sie den Kopf an. Kapsel mit der gewölbten Seite nach unten einlegen, Kopf schließen und Hebel verriegeln.",
          fr: "Déverrouillez le levier sur le dessus et soulevez la tête. Placez la capsule côté bombé vers le bas, refermez la tête et verrouillez le levier.",
          zh: "解锁顶部的拉杆并抬起机头。将胶囊圆顶朝下放入，然后合上机头并锁好拉杆。",
        },
        photo: { alt: { en: "Capsule in the open machine" }, placeholder: "[Photo: capsule inserted, head open]" },
      },
      {
        title: { en: "Press the button", no: "Trykk på knappen", de: "Taste drücken", fr: "Appuyer sur le bouton", zh: "按下按钮" },
        body: {
          en: "Put a cup under the spout and press the button on top. The machine reads the capsule and makes the right amount by itself.",
          no: "Sett en kopp under tuten og trykk på knappen på toppen. Maskinen leser kapselen og lager riktig mengde av seg selv.",
          de: "Tasse unter den Auslauf stellen und die Taste oben drücken. Die Maschine erkennt die Kapsel und bereitet automatisch die richtige Menge zu.",
          fr: "Placez une tasse sous la buse et appuyez sur le bouton du dessus. La machine lit la capsule et prépare automatiquement la bonne quantité.",
          zh: "把杯子放在出水口下方，按顶部的按钮。咖啡机会识别胶囊并自动冲出合适的量。",
        },
        photo: { alt: { en: "The button on top" }, placeholder: "[Photo: the button on top]" },
      },
      {
        title: { en: "Remove the capsule", no: "Fjern kapselen", de: "Kapsel entfernen", fr: "Retirer la capsule", zh: "取出胶囊" },
        body: {
          en: "When it's done, unlock and open the head: the used capsule drops into the container inside. Empty the container if it's full.",
          no: "Når den er ferdig, lås opp og åpne hodet: den brukte kapselen faller ned i beholderen. Tøm beholderen hvis den er full.",
          de: "Danach entriegeln und den Kopf öffnen: Die gebrauchte Kapsel fällt in den Behälter. Leeren Sie den Behälter, wenn er voll ist.",
          fr: "Une fois terminé, déverrouillez et ouvrez la tête : la capsule usagée tombe dans le bac. Videz le bac s’il est plein.",
          zh: "完成后，解锁并打开机头，用过的胶囊会落入内部的收集盒。收集盒满了请倒空。",
        },
      },
    ],
    troubles: [
      {
        problem: { en: "Nothing happens when I press the button", no: "Ingenting skjer når jeg trykker", de: "Beim Drücken passiert nichts", fr: "Rien ne se passe quand j’appuie", zh: "按按钮后没有反应" },
        fix: {
          en: "Check that the head is fully closed and the lever locked, and that the water tank has water and sits firmly in place.",
          no: "Sjekk at hodet er helt lukket og hendelen låst, og at vanntanken har vann og sitter godt på plass.",
          de: "Prüfen Sie, ob der Kopf ganz geschlossen und der Hebel verriegelt ist und ob der Wassertank gefüllt und richtig eingesetzt ist.",
          fr: "Vérifiez que la tête est bien fermée et le levier verrouillé, et que le réservoir contient de l’eau et est bien en place.",
          zh: "请确认机头已完全合上并锁好拉杆，水箱有水且安装到位。",
        },
      },
      {
        problem: { en: "The coffee overflows the cup", no: "Kaffen renner over koppen", de: "Der Kaffee läuft über", fr: "Le café déborde de la tasse", zh: "咖啡溢出杯子" },
        fix: {
          en: "The capsule decides the size: large capsules make a full mug. Use a big mug, and remove the cup stand so it fits underneath.",
          no: "Kapselen bestemmer mengden: store kapsler gir en full krus. Bruk et stort krus, og ta bort koppstøtten så det får plass.",
          de: "Die Kapsel bestimmt die Menge: Große Kapseln ergeben einen ganzen Becher. Nehmen Sie einen großen Becher und entfernen Sie die Tassenablage, damit er passt.",
          fr: "C’est la capsule qui détermine la quantité : les grandes capsules remplissent un mug. Utilisez un grand mug et retirez le support de tasse pour qu’il passe.",
          zh: "出杯量由胶囊决定，大号胶囊会冲满一大杯。请使用大马克杯，并取下杯托以便放得下。",
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
    cover: { alt: { en: "The washing machine" }, placeholder: "[Photo: the washing machine]" },
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
        photo: { alt: { en: "The detergent jar in the tall cupboard" }, placeholder: "[Photo: detergent jar in the cupboard]" },
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
        photo: { alt: { en: "The programme knob" }, placeholder: "[Photo: the knob]" },
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
        photo: { alt: { en: "The detergent drawer" }, placeholder: "[Photo: detergent drawer, leftmost compartment]" },
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
        photo: { alt: { en: "The start button" }, placeholder: "[Photo: start button, bottom right]" },
      },
    ],
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
];
