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
        en: "The address is Fossvegen 7, 6857 Sogndal. Look for the red house with a grey ground floor, the building furthest up the hill. Your parking spot is the one with the black fence, right in front of the entrance door. It's reserved for you, so it will be free when you arrive (the red car in the photo is just from when it was taken).",
        no: "Adressen er Fossvegen 7, 6857 Sogndal. Se etter det røde huset med grå underetasje, bygget lengst opp i bakken. Parkeringsplassen din er den med svart gjerde, rett foran inngangsdøren. Den er reservert for deg, så den er ledig når du kommer (den røde bilen på bildet sto der bare da bildet ble tatt).",
        de: "Suchen Sie das rote Haus mit dem grauen Erdgeschoss. Ihr Parkplatz ist der mit dem schwarzen Zaun direkt vor der Eingangstür. Er ist für Sie reserviert und bei Ihrer Ankunft frei (das rote Auto stand nur beim Fotografieren dort).",
        fr: "Cherchez la maison rouge au rez-de-chaussée gris. Votre place est celle entourée d’une clôture noire, juste devant la porte d’entrée. Elle vous est réservée et sera libre à votre arrivée (la voiture rouge était là seulement au moment de la photo).",
        zh: "找一栋一楼为灰色的红色房子。您的停车位就是入口门正前方有黑色围栏的那个。该车位为您专用，到达时会空着（照片中的红色汽车只是拍照时停在那里）。",
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
        en: "Parking is free and the spot is reserved for you: inside the black metal fence, right in front of the entrance door, next to the two flower pots (where the red car is in the photo). The heat pump is just to the right of the entrance door.",
        no: "Parkering er gratis, og plassen er reservert for deg: innenfor det svarte metallgjerdet, rett foran inngangsdøren, ved siden av de to blomsterpottene (der den røde bilen står på bildet). Varmepumpen står rett til høyre for inngangsdøren.",
        de: "Parken ist kostenlos und der Platz ist für Sie reserviert: innerhalb des schwarzen Metallzauns, direkt vor der Eingangstür, neben den zwei Blumentöpfen (wo im Foto das rote Auto steht). Die Wärmepumpe steht rechts neben der Eingangstür.",
        fr: "Le parking est gratuit et la place vous est réservée : à l’intérieur de la clôture en métal noir, juste devant la porte d’entrée, à côté des deux pots de fleurs (là où est la voiture rouge sur la photo). La pompe à chaleur est juste à droite de la porte d’entrée.",
        zh: "停车免费，车位为您专用：在黑色金属围栏内，入口门正前方，两个花盆旁边（照片中红色汽车的位置）。入口门右侧是空气源热泵。",
      },
      photo: {
        src: "/photos/arrival-parking.jpg",
        alt: {
          en: "Your parking spot: inside the black fence, right in front of the entrance door",
          no: "Parkeringsplassen din: innenfor det svarte gjerdet, rett foran inngangsdøren",
          de: "Ihr Parkplatz: innerhalb des schwarzen Zauns, direkt vor der Eingangstür",
          fr: "Votre place : à l’intérieur de la clôture noire, juste devant la porte d’entrée",
          zh: "您的停车位：黑色围栏内，就在入口门正前方",
        },
      },
    },
    {
      title: { en: "Your door and the key box", no: "Døren og nøkkelboksen" },
      body: {
        en: "Your entrance is the white door with a window, right by your parking spot. The key box is on the red wall just to the right of the door, below the outdoor lamp.",
        no: "Inngangen din er den hvite døren med vindu, rett ved parkeringsplassen. Nøkkelboksen henger på den røde veggen rett til høyre for døren, under utelampen.",
      },
      photo: {
        src: "/photos/arrival-door.jpg",
        alt: {
          en: "The white front door, with the black key box on the red wall to the right",
          no: "Den hvite inngangsdøren, med den svarte nøkkelboksen på den røde veggen til høyre",
        },
      },
    },
    {
      title: { en: "Open the key box", no: "Åpne nøkkelboksen" },
      body: {
        en: "Slide the small cover down to show the number wheels. Turn the wheels to your code (it’s on your stay page), then pull the box open. When you leave, put the key back, close the box and turn the wheels so the code no longer shows.",
        no: "Skyv det lille dekselet ned så tallhjulene vises. Drei hjulene til koden din (den står på oppholdssiden din), og dra boksen opp. Når du reiser, legg nøkkelen tilbake, lukk boksen og drei hjulene så koden ikke lenger vises.",
      },
      photo: {
        src: "/photos/arrival-keybox.jpg",
        alt: {
          en: "The key box with the cover slid down, showing the number wheels",
          no: "Nøkkelboksen med dekselet skjøvet ned, så tallhjulene vises",
        },
      },
    },
  ],
};

export const checkout: StepPage = {
  title: { en: "Before you leave", no: "Før du reiser", de: "Vor der Abreise", fr: "Avant de partir", zh: "离开前" },
  intro: {
    en: "Check-out is by 11:00. Need a later check-out? It may be possible, just ask. Leaving earlier? Please let us know so we can plan the cleaning. Thank you for staying with us!",
    no: "Utsjekk er innen kl. 11:00. Trenger du senere utsjekk? Det kan gå an, bare spør. Reiser du tidligere? Gi oss gjerne beskjed, så vi kan planlegge rengjøringen. Takk for besøket!",
    de: "Check-out ist bis 11:00 Uhr. Brauchen Sie einen späteren Check-out? Das ist eventuell möglich, fragen Sie einfach. Reisen Sie früher ab? Bitte sagen Sie uns Bescheid, damit wir die Reinigung planen können. Danke für Ihren Aufenthalt!",
    fr: "Le départ se fait avant 11h00. Besoin de partir plus tard ? C’est peut-être possible, demandez-nous. Vous partez plus tôt ? Prévenez-nous pour que nous puissions organiser le ménage. Merci pour votre séjour !",
    zh: "请于 11:00 前退房。需要延迟退房？也许可以，请直接问我们。如果提前离开，请告诉我们，方便我们安排清洁。感谢您的入住！",
  },
  steps: [
    {
      title: { en: "Towels", no: "Håndklær", de: "Handtücher", fr: "Serviettes", zh: "毛巾" },
      body: {
        en: "Gather the used towels and leave them in the bathroom.",
        no: "Samle de brukte håndklærne og legg dem på badet.",
        de: "Sammeln Sie die benutzten Handtücher und legen Sie sie ins Bad.",
        fr: "Rassemblez les serviettes utilisées et laissez-les dans la salle de bain.",
        zh: "把用过的毛巾收好，放在浴室里。",
      },
    },
    {
      title: { en: "Strip the bed", no: "Ta av sengetøyet", de: "Bett abziehen", fr: "Défaire le lit", zh: "拆下床品" },
      body: {
        en: "Please take off all the bed linen: the covers on the duvets and pillows, and the sheet on the mattress. Leave it in the bathroom. The duvets and pillows themselves stay on the bed.",
        no: "Ta av alt sengetøyet: dynetrekk, putevar og lakenet på madrassen. Legg det på badet. Selve dynene og putene blir liggende i sengen.",
        de: "Bitte ziehen Sie die gesamte Bettwäsche ab: die Bezüge von Decken und Kissen und das Laken auf der Matratze. Legen Sie alles ins Bad. Die Decken und Kissen selbst bleiben im Bett.",
        fr: "Retirez tout le linge de lit : les housses de couette, les taies d’oreiller et le drap sur le matelas. Laissez-le dans la salle de bain. Les couettes et les oreillers restent sur le lit.",
        zh: "请拆下所有床品：被套、枕套以及床垫上的床单，放在浴室里。被子和枕头本身留在床上。",
      },
    },
    {
      title: { en: "Switch things off", no: "Slå av", de: "Geräte ausschalten", fr: "Tout éteindre", zh: "关闭电器" },
      body: {
        en: "Turn off the coffee machine, kettle, oven, TV and lights.",
        no: "Slå av kaffemaskinen, vannkokeren, stekeovnen, TV-en og lysene.",
        de: "Schalten Sie Kaffeemaschine, Wasserkocher, Backofen, Fernseher und Licht aus.",
        fr: "Éteignez la machine à café, la bouilloire, le four, la télévision et les lumières.",
        zh: "关闭咖啡机、电热水壶、烤箱、电视和灯。",
      },
    },
    {
      title: { en: "Start the dishwasher", no: "Start oppvaskmaskinen", de: "Spülmaschine starten", fr: "Lancer le lave-vaisselle", zh: "启动洗碗机" },
      body: {
        en: "Start the dishwasher before you leave. The tablets are in a glass jar in the large bottom drawer, between the dishwasher and the freezer.",
        no: "Start oppvaskmaskinen før du drar. Tablettene står i en glasskrukke i den store nederste skuffen, mellom oppvaskmaskinen og fryseren.",
        de: "Starten Sie die Spülmaschine, bevor Sie gehen. Die Tabs stehen in einem Glas in der großen unteren Schublade zwischen Spülmaschine und Gefrierschrank.",
        fr: "Lancez le lave-vaisselle avant de partir. Les pastilles sont dans un bocal en verre, dans le grand tiroir du bas entre le lave-vaisselle et le congélateur.",
        zh: "离开前请启动洗碗机。洗碗块在洗碗机和冰柜之间最下方大抽屉里的玻璃罐中。",
      },
    },
    {
      title: { en: "Take out the rubbish", no: "Kast søppelet", de: "Müll rausbringen", fr: "Sortir les poubelles", zh: "倒垃圾" },
      body: {
        en: "Take the rubbish out to the bins outside. The lid colours show what goes where: black for general waste, blue for paper, green for glass and metal, brown for food waste. Plastic can go in the paper bin under the sink, and we’ll sort it.",
        no: "Ta søppelet ut til dunkene ute. Fargen på lokket viser hva som skal hvor: svart for restavfall, blått for papir, grønt for glass og metall, brunt for matavfall. Plast kan legges i papirbøtta under vasken, så sorterer vi det.",
        de: "Bringen Sie den Müll zu den Tonnen draußen. Die Deckelfarbe zeigt, was wohin gehört: schwarz für Restmüll, blau für Papier, grün für Glas und Metall, braun für Bioabfall. Plastik können Sie in den Papiereimer unter der Spüle werfen, wir sortieren es.",
        fr: "Sortez les déchets dans les poubelles dehors. La couleur du couvercle indique le tri : noir pour les ordures ménagères, bleu pour le papier, vert pour le verre et le métal, marron pour les déchets alimentaires. Le plastique peut aller dans la poubelle à papier sous l’évier, nous le trierons.",
        zh: "请把垃圾拿到外面的垃圾桶。桶盖颜色表示分类：黑色为其他垃圾，蓝色为纸类，绿色为玻璃和金属，棕色为厨余垃圾。塑料可以放进水槽下的纸类垃圾桶，我们会来分类。",
      },
    },
    {
      title: { en: "Lock up", no: "Lås etter deg", de: "Abschließen", fr: "Fermer à clé", zh: "锁门" },
      body: {
        en: "Close the windows, lock the door and put the key back in the key box.",
        no: "Lukk vinduene, lås døren og legg nøkkelen tilbake i nøkkelboksen.",
        de: "Schließen Sie die Fenster, schließen Sie die Tür ab und legen Sie den Schlüssel zurück in die Schlüsselbox.",
        fr: "Fermez les fenêtres, verrouillez la porte et remettez la clé dans la boîte à clés.",
        zh: "关好窗户，锁上门，把钥匙放回钥匙盒。",
      },
    },
  ],
};
