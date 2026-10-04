import type { Localized } from "@/i18n/config";

/**
 * "Around the area": where to eat, things to do, practical info.
 * Researched October 2026 from official sites and visitor pages. Opening hours change:
 * every place has an "Open in Google Maps" link, where guests see today's hours, photos and reviews.
 */

export type Place = {
  name: string;
  /** Town, used for the label and the Google Maps search. */
  town: string;
  /** What it is, one short line. */
  type: Localized;
  /** One or two sentences with what to expect. */
  text?: Localized;
  /** 1 = cheap, 2 = mid, 3 = expensive (by Norwegian standards). */
  price?: 1 | 2 | 3;
  /** Driving time in minutes from the apartment. 0 = in town / walking distance. */
  drive?: number;
  season?: Localized;
  url?: string;
  /** Set to false for things that aren't a single place (e.g. emergency numbers). */
  map?: false;
  /** Overrides the Google Maps search text. */
  mapQuery?: string;
};

export type AreaSection = { title: Localized; intro?: Localized; places: Place[] };

export type AreaPage = {
  slug: "eat" | "do" | "practical";
  title: Localized;
  /** Short line on the home page card. */
  short: Localized;
  intro: Localized;
  /** Question shown in "Guests often ask". */
  faq: Localized;
  sections: AreaSection[];
};

export const areaUi = {
  maps: { en: "Open in Google Maps", no: "Åpne i Google Maps", de: "In Google Maps öffnen", fr: "Ouvrir dans Google Maps", zh: "在谷歌地图中打开" } as Localized,
  website: { en: "Website", no: "Nettside", de: "Website", fr: "Site web", zh: "网站" } as Localized,
  inTown: { en: "In town", no: "I sentrum", de: "Im Ort", fr: "En ville", zh: "镇上" } as Localized,
  minDrive: { en: "min drive", no: "min med bil", de: "Min. Fahrt", fr: "min en voiture", zh: "分钟车程" } as Localized,
  hoursNote: {
    en: "Opening hours change with the seasons. Tap “Open in Google Maps” to see today’s hours, photos and reviews.",
    no: "Åpningstidene endrer seg med sesongen. Trykk «Åpne i Google Maps» for å se dagens åpningstider, bilder og omtaler.",
    de: "Öffnungszeiten ändern sich je nach Saison. Tippen Sie auf „In Google Maps öffnen“ für die heutigen Zeiten, Fotos und Bewertungen.",
    fr: "Les horaires changent selon la saison. Touchez « Ouvrir dans Google Maps » pour voir les horaires du jour, des photos et des avis.",
    zh: "营业时间随季节变化。点击“在谷歌地图中打开”查看当天的营业时间、照片和评价。",
  } as Localized,
};

const summer: Localized = { en: "Summer only", no: "Kun sommer", de: "Nur im Sommer", fr: "Été uniquement", zh: "仅夏季" };
const mayToSep: Localized = { en: "May–Sep", no: "mai–sep", de: "Mai–Sep", fr: "mai–sept", zh: "5–9 月" };
const junToOct: Localized = { en: "Jun–Oct", no: "jun–okt", de: "Jun–Okt", fr: "juin–oct", zh: "6–10 月" };
const aprToOct: Localized = { en: "Apr–Oct", no: "apr–okt", de: "Apr–Okt", fr: "avr–oct", zh: "4–10 月" };
const winter: Localized = { en: "Winter (Nov–May)", no: "Vinter (nov–mai)", de: "Winter (Nov–Mai)", fr: "Hiver (nov–mai)", zh: "冬季（11–5 月）" };
const allYear: Localized = { en: "All year", no: "Hele året", de: "Ganzjährig", fr: "Toute l’année", zh: "全年" };

export const areaPages: AreaPage[] = [
  // ───────────────────────────── EAT ─────────────────────────────
  {
    slug: "eat",
    title: { en: "Where to eat", no: "Spisesteder", de: "Essen gehen", fr: "Où manger", zh: "去哪里吃" },
    short: { en: "Cafés and restaurants", no: "Kafeer og restauranter", de: "Cafés und Restaurants", fr: "Cafés et restaurants", zh: "咖啡馆和餐厅" },
    faq: {
      en: "Where should we eat?",
      no: "Hvor bør vi spise?",
      de: "Wo können wir gut essen?",
      fr: "Où manger ?",
      zh: "推荐去哪里吃饭？",
    },
    intro: {
      en: "A few favourites in Sogndal, all within walking distance, plus some special places worth the drive. Price: kr = budget, kr kr = mid-range, kr kr kr = a treat.",
      no: "Noen favoritter i Sogndal, alle i gangavstand, og noen spesielle steder som er verdt kjøreturen. Pris: kr = rimelig, kr kr = middels, kr kr kr = en ekstra god opplevelse.",
      de: "Einige Favoriten in Sogndal, alle zu Fuß erreichbar, und ein paar besondere Orte, die die Fahrt wert sind. Preis: kr = günstig, kr kr = mittel, kr kr kr = gehoben.",
      fr: "Quelques adresses à Sogndal, toutes accessibles à pied, et quelques lieux d’exception qui valent le trajet. Prix : kr = économique, kr kr = moyen, kr kr kr = pour se faire plaisir.",
      zh: "几家索根达尔镇上的推荐餐厅（步行可达），以及一些值得开车前往的特色餐厅。价格：kr = 实惠，kr kr = 中等，kr kr kr = 高档。",
    },
    sections: [
      {
        title: { en: "In Sogndal", no: "I Sogndal", de: "In Sogndal", fr: "À Sogndal", zh: "索根达尔镇上" },
        places: [
          {
            name: "Det Gule Huset",
            town: "Sogndal",
            type: { en: "Café and bakery", no: "Kafé og bakeri", de: "Café und Bäckerei", fr: "Café et boulangerie", zh: "咖啡馆和烘焙店" },
            text: {
              en: "Breakfast, lunch and pastries baked from scratch, with coffee from a local roastery.",
              no: "Frokost, lunsj og hjemmebakst, med kaffe fra et lokalt brenneri.",
              de: "Frühstück, Mittagessen und hausgemachtes Gebäck, dazu Kaffee aus einer lokalen Rösterei.",
              fr: "Petit-déjeuner, déjeuner et pâtisseries maison, avec du café d’une torréfaction locale.",
              zh: "早餐、午餐和现烤糕点，咖啡来自当地烘焙坊。",
            },
            price: 1,
            drive: 0,
            url: "https://www.gulehuset.com/en",
          },
          {
            name: "Dampskipskaien",
            town: "Sogndal",
            type: { en: "Café and bar by the fjord", no: "Kafé og bar ved fjorden", de: "Café und Bar am Fjord", fr: "Café-bar au bord du fjord", zh: "峡湾边的咖啡酒吧" },
            text: {
              en: "Homemade soup, local cured ham and local drinks, with seating right on the quay. Also rents out kayaks and paddle boards.",
              no: "Hjemmelaget suppe, lokal spekeskinke og lokal drikke, med sitteplasser rett på kaia. Leier også ut kajakk og SUP.",
              de: "Hausgemachte Suppe, lokaler Schinken und lokale Getränke, mit Plätzen direkt am Kai. Verleiht auch Kajaks und SUP-Boards.",
              fr: "Soupe maison, jambon sec local et boissons locales, avec des tables sur le quai. Location de kayaks et de paddles.",
              zh: "自制汤、当地风干火腿和本地饮品，座位就在码头上。也出租皮划艇和桨板。",
            },
            price: 2,
            drive: 0,
            url: "https://facebook.com/dampskipskaiensogndal",
          },
          {
            name: "Fjøra Gastropub",
            town: "Sogndal",
            type: { en: "Gastropub: pizza and pub food", no: "Gastropub: pizza og pubmat", de: "Gastropub: Pizza und Pubgerichte", fr: "Gastropub : pizzas et cuisine de pub", zh: "美食酒馆：披萨和酒吧餐" },
            text: {
              en: "A relaxed pub in the town centre.",
              no: "En avslappet pub i sentrum.",
              de: "Ein entspannter Pub im Zentrum.",
              fr: "Un pub décontracté au centre-ville.",
              zh: "镇中心一家轻松的酒馆。",
            },
            price: 2,
            drive: 0,
          },
          {
            name: "Restauranthuset Malin",
            town: "Sogndal",
            type: { en: "Asian and sushi, plus burgers and pasta", no: "Asiatisk og sushi, og burgere og pasta", de: "Asiatisch und Sushi, dazu Burger und Pasta", fr: "Asiatique et sushis, ainsi que burgers et pâtes", zh: "亚洲菜和寿司，也有汉堡和意面" },
            text: {
              en: "A wide menu with something for everyone. Takeaway available.",
              no: "Bred meny med noe for alle. Kan også tas med.",
              de: "Große Auswahl für jeden Geschmack. Auch zum Mitnehmen.",
              fr: "Une carte variée pour tous les goûts. Vente à emporter.",
              zh: "菜单丰富，适合所有人。可外带。",
            },
            price: 2,
            drive: 0,
            url: "https://www.restauranthusetmalin.no",
          },
          {
            name: "La Pergola",
            town: "Sogndal",
            mapQuery: "La Pergola, Quality Hotel Sogndal",
            type: { en: "Italian: pizza and pasta", no: "Italiensk: pizza og pasta", de: "Italienisch: Pizza und Pasta", fr: "Italien : pizzas et pâtes", zh: "意大利菜：披萨和意面" },
            text: {
              en: "On the 2nd floor of Quality Hotel, with a covered terrace in the evening sun. Usually closed Sundays and Mondays.",
              no: "I 2. etasje på Quality Hotel, med overbygd terrasse i kveldssola. Vanligvis stengt søndag og mandag.",
              de: "Im 2. Stock des Quality Hotels, mit überdachter Terrasse in der Abendsonne. Meist sonntags und montags geschlossen.",
              fr: "Au 2e étage du Quality Hotel, avec une terrasse couverte au soleil du soir. Généralement fermé dimanche et lundi.",
              zh: "位于 Quality Hotel 二楼，有可晒夕阳的带顶露台。通常周日和周一休息。",
            },
            price: 2,
            drive: 0,
            url: "https://www.strawberryhotels.com/restaurant/norway/sogndal/la-pergola/",
          },
          {
            name: "Vågal Burger & Gin",
            town: "Sogndal",
            mapQuery: "Vågal Burger, Quality Hotel Sogndal",
            type: { en: "Burgers and steaks, gin bar", no: "Burgere og biff, ginbar", de: "Burger und Steaks, Gin-Bar", fr: "Burgers et steaks, bar à gin", zh: "汉堡和牛排，金酒吧" },
            text: {
              en: "In Quality Hotel. The hotel’s Eppel Bar has classic dishes, cocktails and shuffleboard.",
              no: "På Quality Hotel. Hotellets Eppel Bar har klassiske retter, cocktails og shuffleboard.",
              de: "Im Quality Hotel. Die Eppel Bar im Hotel bietet klassische Gerichte, Cocktails und Shuffleboard.",
              fr: "Au Quality Hotel. L’Eppel Bar de l’hôtel propose des plats classiques, des cocktails et un shuffleboard.",
              zh: "位于 Quality Hotel 内。酒店的 Eppel Bar 提供经典菜肴、鸡尾酒和沙狐球。",
            },
            price: 2,
            drive: 0,
            url: "https://www.strawberryhotels.com/restaurant/norway/sogndal/",
          },
          {
            name: "Cafe Sogningen",
            town: "Sogndal",
            mapQuery: "Cafe Sogningen, Hovevegen 6, Sogndal",
            type: { en: "Café: Norwegian home cooking", no: "Kafé: norsk husmannskost", de: "Café: norwegische Hausmannskost", fr: "Café : cuisine norvégienne traditionnelle", zh: "咖啡馆：挪威家常菜" },
            text: {
              en: "Hot lunch and dinner, sandwiches and cake, in the Sogningen shopping centre.",
              no: "Varm lunsj og middag, smørbrød og kaker, på Sogningen kjøpesenter.",
              de: "Warmes Mittag- und Abendessen, belegte Brote und Kuchen im Einkaufszentrum Sogningen.",
              fr: "Déjeuner et dîner chauds, sandwichs et gâteaux, au centre commercial Sogningen.",
              zh: "位于 Sogningen 购物中心，提供热午餐和晚餐、三明治和蛋糕。",
            },
            price: 1,
            drive: 0,
          },
        ],
      },
      {
        title: { en: "Worth the drive", no: "Verdt en kjøretur", de: "Die Fahrt wert", fr: "Ça vaut le détour", zh: "值得开车前往" },
        intro: {
          en: "Several of these are open in summer only, so check before you go.",
          no: "Flere av disse har bare åpent om sommeren, så sjekk før du drar.",
          de: "Einige sind nur im Sommer geöffnet, bitte vorher prüfen.",
          fr: "Plusieurs ne sont ouverts qu’en été, vérifiez avant de partir.",
          zh: "其中几家仅夏季营业，出发前请先确认。",
        },
        places: [
          {
            name: "Kafè Heiberg",
            town: "Kaupanger",
            mapQuery: "Kafè Heiberg, Sogn Folkemuseum, Kaupanger",
            type: { en: "Museum café: pancakes and cake", no: "Museumskafé: pannekaker og kaker", de: "Museumscafé: Pfannkuchen und Kuchen", fr: "Café du musée : crêpes et gâteaux", zh: "博物馆咖啡馆：煎饼和蛋糕" },
            text: {
              en: "At the Sogn Folk Museum. You don’t need a museum ticket to visit the café.",
              no: "På Sogn Folkemuseum. Du trenger ikke museumsbillett for å besøke kafeen.",
              de: "Im Freilichtmuseum Sogn Folkemuseum. Für das Café braucht man kein Museumsticket.",
              fr: "Au musée en plein air Sogn Folkemuseum. Pas besoin de billet pour le café.",
              zh: "位于松恩民俗博物馆，去咖啡馆无需购买博物馆门票。",
            },
            price: 1,
            drive: 12,
            url: "https://misf.no/en/heiberg-sogn-museum",
          },
          {
            name: "Walaker Hotell",
            town: "Solvorn",
            type: { en: "Four-course dinner, booking required", no: "Firerettersmiddag, må bestilles", de: "Viergängiges Menü, Reservierung nötig", fr: "Dîner en quatre plats, sur réservation", zh: "四道菜晚餐，需预订" },
            text: {
              en: "Norway’s oldest family-run hotel (since 1640), by the Lustrafjord. Combine it with a trip to Urnes stave church.",
              no: "Norges eldste familiedrevne hotell (fra 1640), ved Lustrafjorden. Kan kombineres med en tur til Urnes stavkyrkje.",
              de: "Norwegens ältestes Familienhotel (seit 1640) am Lustrafjord. Gut kombinierbar mit der Stabkirche Urnes.",
              fr: "Le plus ancien hôtel familial de Norvège (depuis 1640), au bord du Lustrafjord. À combiner avec l’église en bois debout d’Urnes.",
              zh: "挪威最古老的家族经营酒店（始于 1640 年），位于吕斯特峡湾边。可与参观乌尔内斯木板教堂结合。",
            },
            price: 3,
            drive: 25,
            season: summer,
            url: "https://www.walaker.com/",
          },
          {
            name: "Leikanger Fjordhotel",
            town: "Leikanger",
            type: { en: "Seafood and seasonal fjord dishes", no: "Sjømat og sesongretter fra fjorden", de: "Fisch und saisonale Fjordgerichte", fr: "Fruits de mer et plats de saison du fjord", zh: "海鲜和应季峡湾菜" },
            text: {
              en: "Hotel restaurant right by the Sognefjord.",
              no: "Hotellrestaurant rett ved Sognefjorden.",
              de: "Hotelrestaurant direkt am Sognefjord.",
              fr: "Restaurant d’hôtel au bord du Sognefjord.",
              zh: "紧邻松恩峡湾的酒店餐厅。",
            },
            price: 3,
            drive: 25,
          },
          {
            name: "Kviknes Hotel",
            town: "Balestrand",
            type: { en: "Fine dining in a historic hotel", no: "Fine dining på et historisk hotell", de: "Gehobene Küche in einem historischen Hotel", fr: "Gastronomie dans un hôtel historique", zh: "历史酒店中的精致餐饮" },
            text: {
              en: "A grand wooden hotel from 1877 with fjord views and its own wine cellar. Open April–October.",
              no: "Et stort trehotell fra 1877 med fjordutsikt og egen vinkjeller. Åpent april–oktober.",
              de: "Ein großes Holzhotel von 1877 mit Fjordblick und eigenem Weinkeller. Geöffnet April–Oktober.",
              fr: "Un grand hôtel en bois de 1877 avec vue sur le fjord et sa propre cave à vin. Ouvert d’avril à octobre.",
              zh: "1877 年建成的大型木结构酒店，享有峡湾景色并有自己的酒窖。4–10 月营业。",
            },
            price: 3,
            drive: 60,
            season: aprToOct,
            url: "https://www.kviknes.no/",
          },
          {
            name: "Ciderhuset",
            town: "Balestrand",
            type: { en: "Cider farm with local food", no: "Siderprodusent med lokal mat", de: "Cidrerie mit regionalem Essen", fr: "Cidrerie avec cuisine locale", zh: "苹果酒庄，提供本地美食" },
            text: {
              en: "Cider tastings and Mediterranean-inspired local dishes in a glass dining room over the fjord. Vegetarian options.",
              no: "Sidersmaking og middelhavsinspirerte lokale retter i en glassrestaurant over fjorden. Vegetaralternativer.",
              de: "Cidre-Verkostung und mediterran inspirierte regionale Gerichte in einem Glasrestaurant über dem Fjord. Vegetarische Optionen.",
              fr: "Dégustation de cidre et plats locaux d’inspiration méditerranéenne dans une salle vitrée face au fjord. Options végétariennes.",
              zh: "在俯瞰峡湾的玻璃餐厅品尝苹果酒和地中海风味的本地菜。有素食选择。",
            },
            price: 2,
            drive: 60,
            season: summer,
            url: "https://www.ciderhuset.no",
          },
          {
            name: "Fjærland Fjordstove Hotell",
            town: "Fjærland",
            type: { en: "Local, seasonal cooking", no: "Lokal sesongmat", de: "Regionale, saisonale Küche", fr: "Cuisine locale de saison", zh: "本地应季菜肴" },
            text: {
              en: "Good for lunch or dinner on a day trip to the Glacier Museum. Limited opening in winter: contact them first.",
              no: "Fint til lunsj eller middag på dagstur til Bremuseet. Begrenset åpent om vinteren: ta kontakt først.",
              de: "Gut für Mittag- oder Abendessen beim Ausflug zum Gletschermuseum. Im Winter eingeschränkt geöffnet: vorher anfragen.",
              fr: "Idéal pour déjeuner ou dîner lors d’une visite au musée des glaciers. Ouverture limitée en hiver : contactez-les d’abord.",
              zh: "适合在参观冰川博物馆的一日游中吃午餐或晚餐。冬季营业有限，请先联系。",
            },
            price: 3,
            drive: 35,
            url: "https://fjaerlandhotel.com/",
          },
          {
            name: "Breheimsenteret",
            town: "Jostedalen",
            mapQuery: "Breheimsenteret, Jostedal",
            type: { en: "Lunch with a glacier view", no: "Lunsj med utsikt mot breen", de: "Mittagessen mit Gletscherblick", fr: "Déjeuner face au glacier", zh: "边看冰川边吃午餐" },
            text: {
              en: "Restaurant at the glacier centre, looking out at Nigardsbreen. Packed lunches for glacier trips.",
              no: "Restaurant på bresenteret med utsikt mot Nigardsbreen. Matpakker til bretur.",
              de: "Restaurant im Gletscherzentrum mit Blick auf den Nigardsbreen. Lunchpakete für Gletschertouren.",
              fr: "Restaurant du centre des glaciers, face au Nigardsbreen. Paniers-repas pour les sorties sur le glacier.",
              zh: "冰川中心的餐厅，可眺望尼加德冰川。提供冰川徒步用的便当。",
            },
            price: 2,
            drive: 60,
            season: { en: "May–early Oct", no: "mai–tidlig okt", de: "Mai–Anfang Okt", fr: "mai–début oct", zh: "5 月–10 月初" },
            url: "https://www.jostedal.com/en/visit-breheimsenteret/",
          },
        ],
      },
    ],
  },

  // ───────────────────────────── DO ─────────────────────────────
  {
    slug: "do",
    title: { en: "Things to do", no: "Ting å gjøre", de: "Unternehmungen", fr: "Que faire", zh: "游玩推荐" },
    short: { en: "Walks, hikes and sights", no: "Turer, fjellturer og severdigheter", de: "Spaziergänge, Wanderungen, Sehenswertes", fr: "Balades, randonnées et visites", zh: "散步、徒步和景点" },
    faq: {
      en: "What can we do around here?",
      no: "Hva kan vi finne på her?",
      de: "Was kann man hier unternehmen?",
      fr: "Que faire dans les environs ?",
      zh: "附近有什么好玩的？",
    },
    intro: {
      en: "From a stroll along the fjord to glaciers and a UNESCO stave church. Many sights and boat trips are summer only; the walks in town work all year.",
      no: "Fra en tur langs fjorden til isbreer og en stavkirke på UNESCOs verdensarvliste. Mange severdigheter og båtturer er bare åpne om sommeren; turene i sentrum fungerer hele året.",
      de: "Vom Spaziergang am Fjord bis zu Gletschern und einer UNESCO-Stabkirche. Viele Sehenswürdigkeiten und Bootstouren gibt es nur im Sommer; die Wege im Ort gehen das ganze Jahr.",
      fr: "D’une balade le long du fjord aux glaciers et à une église en bois debout classée par l’UNESCO. Beaucoup de visites et de sorties en bateau n’ont lieu qu’en été ; les balades en ville sont possibles toute l’année.",
      zh: "从峡湾边散步到冰川和联合国教科文组织世界遗产木板教堂。许多景点和游船仅夏季开放；镇上的步道全年可走。",
    },
    sections: [
      {
        title: { en: "Easy walks", no: "Enkle turer", de: "Leichte Spaziergänge", fr: "Balades faciles", zh: "轻松散步" },
        places: [
          {
            name: "Fjørestien (the fjord path)",
            town: "Sogndal",
            mapQuery: "Fjørestien, Sogndal",
            type: { en: "Flat path along the fjord, 1.5 km", no: "Flat sti langs fjorden, 1,5 km", de: "Flacher Weg am Fjord, 1,5 km", fr: "Sentier plat le long du fjord, 1,5 km", zh: "峡湾边的平坦步道，1.5 公里" },
            text: {
              en: "Paved, with benches, play areas and outdoor gym equipment. Fine for buggies.",
              no: "Asfaltert, med benker, lekeplasser og utendørs treningsapparater. Fint med barnevogn.",
              de: "Asphaltiert, mit Bänken, Spielplätzen und Outdoor-Fitnessgeräten. Kinderwagengeeignet.",
              fr: "Goudronné, avec bancs, aires de jeux et appareils de fitness. Accessible en poussette.",
              zh: "柏油路面，有长椅、游乐区和户外健身器材。适合推婴儿车。",
            },
            drive: 0,
            season: allYear,
          },
          {
            name: "Stedjestova",
            town: "Sogndal",
            mapQuery: "Stedjestova, Sogndal",
            type: { en: "Short climb to a day cabin, 30–40 min up", no: "Kort tur til dagsturhytte, 30–40 min opp", de: "Kurzer Aufstieg zur Tageshütte, 30–40 Min.", fr: "Courte montée vers un refuge, 30–40 min", zh: "短途登山到日间小屋，上行 30–40 分钟" },
            text: {
              en: "An open cabin at 300 m with views over the town. Some steep parts, but fine for families. Start by Stedje church.",
              no: "En åpen hytte på 300 moh. med utsikt over sentrum. Noen bratte partier, men fint for familier. Start ved Stedje kyrkje.",
              de: "Eine offene Hütte auf 300 m mit Blick über den Ort. Teils steil, aber familientauglich. Start an der Stedje-Kirche.",
              fr: "Un refuge ouvert à 300 m avec vue sur la ville. Quelques passages raides, mais adapté aux familles. Départ près de l’église de Stedje.",
              zh: "海拔 300 米的开放小屋，可俯瞰小镇。有几段较陡，但适合家庭。从 Stedje 教堂出发。",
            },
            drive: 0,
            season: allYear,
          },
          {
            name: "Vatnasete and the waterfall",
            town: "Sogndalsdalen",
            mapQuery: "Vatnasete, Sogndal",
            type: { en: "Glacier river, waterfall and picnic spot", no: "Breelv, foss og rasteplass", de: "Gletscherfluss, Wasserfall und Picknickplatz", fr: "Rivière glaciaire, cascade et aire de pique-nique", zh: "冰川河、瀑布和野餐点" },
            text: {
              en: "A short family stop in the valley above Sogndal, with a picnic area and toilet.",
              no: "En kort familietur i dalen ovenfor Sogndal, med rasteplass og toalett.",
              de: "Ein kurzer Familienausflug ins Tal oberhalb von Sogndal, mit Picknickplatz und Toilette.",
              fr: "Une courte sortie en famille dans la vallée au-dessus de Sogndal, avec aire de pique-nique et toilettes.",
              zh: "索根达尔上方山谷中适合家庭的短途游，有野餐区和厕所。",
            },
            drive: 15,
            season: mayToSep,
          },
          {
            name: "Anestølen summer farm",
            town: "Sogndalsdalen",
            mapQuery: "Anestølen, Sogndal",
            type: { en: "Family walk to a mountain summer farm", no: "Familietur til en støl", de: "Familienwanderung zu einer Sommeralm", fr: "Balade familiale vers une ferme d’alpage", zh: "前往山间夏季牧场的家庭步道" },
            text: {
              en: "Guided farm visits in summer.",
              no: "Guidede besøk på stølen om sommeren.",
              de: "Im Sommer geführte Besuche auf der Alm.",
              fr: "Visites guidées de la ferme en été.",
              zh: "夏季有牧场导览。",
            },
            drive: 20,
            season: summer,
          },
        ],
      },
      {
        title: { en: "Hikes", no: "Fjellturer", de: "Wanderungen", fr: "Randonnées", zh: "徒步登山" },
        intro: {
          en: "Bring water, warm clothes and good shoes, and check the weather (yr.no). Higher routes usually have snow until June.",
          no: "Ta med vann, varme klær og gode sko, og sjekk været (yr.no). Høyere ruter har ofte snø til juni.",
          de: "Wasser, warme Kleidung und gute Schuhe mitnehmen und das Wetter prüfen (yr.no). Höhere Routen haben oft bis Juni Schnee.",
          fr: "Prenez de l’eau, des vêtements chauds et de bonnes chaussures, et vérifiez la météo (yr.no). Les itinéraires en altitude sont souvent enneigés jusqu’en juin.",
          zh: "请带水、保暖衣物和合适的鞋，并查看天气（yr.no）。较高的路线通常到 6 月仍有积雪。",
        },
        places: [
          {
            name: "Stedjeåsen loop",
            town: "Sogndal",
            mapQuery: "Stedjeåsen, Sogndal",
            type: { en: "From the centre, 6.6 km, about 3.5 h, moderate", no: "Fra sentrum, 6,6 km, ca. 3,5 t, middels", de: "Ab Zentrum, 6,6 km, ca. 3,5 Std., mittel", fr: "Depuis le centre, 6,6 km, env. 3 h 30, moyen", zh: "从镇中心出发，6.6 公里，约 3.5 小时，中等" },
            text: {
              en: "The local hill above the town, passing the Stedjestova cabin. Good views over the fjord.",
              no: "Byfjellet over sentrum, forbi Stedjestova. Fin utsikt over fjorden.",
              de: "Der Hausberg über dem Ort, vorbei an der Stedjestova. Schöner Blick über den Fjord.",
              fr: "La colline au-dessus de la ville, en passant par le refuge Stedjestova. Belle vue sur le fjord.",
              zh: "小镇上方的山丘，途经 Stedjestova 小屋，峡湾景色很美。",
            },
            drive: 0,
            season: aprToOct,
          },
          {
            name: "Hesteggi",
            town: "Sogndal",
            mapQuery: "Hesteggi, Sogndal",
            type: { en: "Demanding, 2–2.5 h up, 800 m climb", no: "Krevende, 2–2,5 t opp, 800 høydemeter", de: "Anspruchsvoll, 2–2,5 Std. hoch, 800 Hm", fr: "Difficile, 2 h–2 h 30 de montée, 800 m de dénivelé", zh: "较难，上行 2–2.5 小时，爬升 800 米" },
            text: {
              en: "Through pine forest past the Loftesnesfjellet viewpoint. Starts at Tjødnali parking, 5 minutes from town.",
              no: "Gjennom furuskog forbi utsiktspunktet Loftesnesfjellet. Start fra Tjødnali parkering, 5 minutter fra sentrum.",
              de: "Durch Kiefernwald vorbei am Aussichtspunkt Loftesnesfjellet. Start am Parkplatz Tjødnali, 5 Minuten vom Ort.",
              fr: "À travers la pinède, en passant par le point de vue de Loftesnesfjellet. Départ du parking de Tjødnali, à 5 minutes de la ville.",
              zh: "穿过松林，途经 Loftesnesfjellet 观景点。从距镇上 5 分钟的 Tjødnali 停车场出发。",
            },
            drive: 5,
            season: { en: "Apr–Sep", no: "apr–sep", de: "Apr–Sep", fr: "avr–sept", zh: "4–9 月" },
          },
          {
            name: "Togga",
            town: "Sogndalsdalen",
            mapQuery: "Togga, Sogndal",
            type: { en: "1205 m summit, 2–3 h up, demanding", no: "Topp 1205 moh., 2–3 t opp, krevende", de: "Gipfel 1205 m, 2–3 Std. hoch, anspruchsvoll", fr: "Sommet à 1205 m, 2 à 3 h de montée, difficile", zh: "海拔 1205 米山顶，上行 2–3 小时，较难" },
            text: {
              en: "Steep through the forest, then wide views over Dalavatnet. Signposted from Vatnasete. No water on the way.",
              no: "Bratt gjennom skogen, så vid utsikt over Dalavatnet. Merket fra Vatnasete. Ikke vann underveis.",
              de: "Steil durch den Wald, dann weiter Blick über den Dalavatnet. Ab Vatnasete ausgeschildert. Kein Wasser unterwegs.",
              fr: "Raide dans la forêt, puis large vue sur le lac Dalavatnet. Balisé depuis Vatnasete. Pas d’eau en route.",
              zh: "林间路段较陡，之后可远眺 Dalavatnet 湖。从 Vatnasete 起有路标。途中无水源。",
            },
            drive: 20,
            season: mayToSep,
          },
          {
            name: "Storehogen",
            town: "Kaupanger",
            mapQuery: "Storehogen, Kaupanger",
            type: { en: "1169 m, about 12 km and 3.5 h, demanding", no: "1169 moh., ca. 12 km og 3,5 t, krevende", de: "1169 m, ca. 12 km und 3,5 Std., anspruchsvoll", fr: "1169 m, env. 12 km et 3 h 30, difficile", zh: "海拔 1169 米，约 12 公里、3.5 小时，较难" },
            text: {
              en: "From Storemyri parking near the airport, via Veslehaugen. Gets steeper near the top.",
              no: "Fra Storemyri parkering ved flyplassen, via Veslehaugen. Brattere mot toppen.",
              de: "Ab Parkplatz Storemyri beim Flughafen, über Veslehaugen. Oben steiler.",
              fr: "Depuis le parking de Storemyri près de l’aéroport, via Veslehaugen. Plus raide vers le sommet.",
              zh: "从机场附近的 Storemyri 停车场出发，经过 Veslehaugen。接近山顶时更陡。",
            },
            drive: 25,
            season: { en: "May–Oct", no: "mai–okt", de: "Mai–Okt", fr: "mai–oct", zh: "5–10 月" },
          },
          {
            name: "Molden",
            town: "Hafslo",
            mapQuery: "Molden, Luster",
            type: { en: "1116 m, 8.6 km, about 4.5 h, moderate", no: "1116 moh., 8,6 km, ca. 4,5 t, middels krevende", de: "1116 m, 8,6 km, ca. 4,5 Std., mittelschwer", fr: "1116 m, 8,6 km, env. 4 h 30, moyen", zh: "海拔 1116 米，8.6 公里，约 4.5 小时，中等" },
            text: {
              en: "One of the best-known views in Sogn, looking down on the inner Lustrafjord.",
              no: "En av de mest kjente utsiktene i Sogn, ned mot indre Lustrafjorden.",
              de: "Einer der bekanntesten Aussichtspunkte in Sogn, mit Blick auf den inneren Lustrafjord.",
              fr: "L’un des panoramas les plus célèbres de Sogn, sur le fond du Lustrafjord.",
              zh: "松恩地区最著名的观景点之一，可俯瞰吕斯特峡湾内段。",
            },
            drive: 35,
            season: junToOct,
          },
          {
            name: "Flatbrehytta",
            town: "Fjærland",
            mapQuery: "Flatbrehytta, Fjærland",
            type: { en: "Cabin beside a glacier, about 5 h return, demanding", no: "Hytte ved breen, ca. 5 t tur/retur, krevende", de: "Hütte am Gletscher, ca. 5 Std. hin und zurück, anspruchsvoll", fr: "Refuge au bord d’un glacier, env. 5 h aller-retour, difficile", zh: "冰川旁的小屋，往返约 5 小时，较难" },
            text: {
              en: "From Supphelledalen up to 1000 m, right next to the Flatbreen glacier. Guided trips are available.",
              no: "Fra Supphelledalen opp til 1000 moh., rett ved Flatbreen. Guidede turer finnes.",
              de: "Von Supphelledalen hinauf auf 1000 m, direkt am Gletscher Flatbreen. Geführte Touren möglich.",
              fr: "Depuis Supphelledalen jusqu’à 1000 m, juste à côté du glacier Flatbreen. Sorties guidées possibles.",
              zh: "从 Supphelledalen 上到海拔 1000 米，紧邻 Flatbreen 冰川。可参加导览。",
            },
            drive: 40,
            season: junToOct,
          },
        ],
      },
      {
        title: { en: "Sights and experiences", no: "Severdigheter og opplevelser", de: "Sehenswertes und Erlebnisse", fr: "Visites et expériences", zh: "景点和体验" },
        places: [
          {
            name: "Urnes stave church",
            town: "Ornes",
            mapQuery: "Urnes stavkyrkje",
            type: { en: "UNESCO World Heritage stave church from around 1130", no: "Stavkirke fra ca. 1130 på UNESCOs verdensarvliste", de: "Stabkirche von ca. 1130, UNESCO-Welterbe", fr: "Église en bois debout d’environ 1130, patrimoine mondial de l’UNESCO", zh: "约 1130 年建造的木板教堂，联合国教科文组织世界遗产" },
            text: {
              en: "The oldest and most richly carved of Norway’s stave churches. Drive to Solvorn and take the short ferry across the Lustrafjord.",
              no: "Den eldste og mest rikt utskårne av Norges stavkirker. Kjør til Solvorn og ta den korte ferjen over Lustrafjorden.",
              de: "Die älteste und am reichsten verzierte Stabkirche Norwegens. Nach Solvorn fahren und die kurze Fähre über den Lustrafjord nehmen.",
              fr: "La plus ancienne et la plus richement sculptée des églises en bois debout de Norvège. Allez à Solvorn et prenez le court ferry sur le Lustrafjord.",
              zh: "挪威最古老、雕刻最精美的木板教堂。开车到 Solvorn，乘短途渡轮横渡吕斯特峡湾。",
            },
            drive: 25,
            season: { en: "May–Sep", no: "mai–sep", de: "Mai–Sep", fr: "mai–sept", zh: "5–9 月" },
            url: "https://fortidsminneforeningen.no/en/museum/urnes-stave-church",
          },
          {
            name: "Sogn Folkemuseum (Heiberg Collections)",
            town: "Kaupanger",
            mapQuery: "Sogn Folkemuseum, Kaupanger",
            type: { en: "Open-air museum with about 40 old buildings", no: "Friluftsmuseum med rundt 40 gamle bygninger", de: "Freilichtmuseum mit rund 40 alten Gebäuden", fr: "Musée en plein air avec une quarantaine de bâtiments anciens", zh: "露天博物馆，约 40 座老建筑" },
            text: {
              en: "One of Norway’s oldest folk museums. Children under 18 free. Closed mid-December to mid-February.",
              no: "Et av Norges eldste folkemuseer. Gratis for barn under 18. Stengt fra midten av desember til midten av februar.",
              de: "Eines der ältesten Volkskundemuseen Norwegens. Unter 18 frei. Von Mitte Dezember bis Mitte Februar geschlossen.",
              fr: "L’un des plus anciens musées ethnographiques de Norvège. Gratuit pour les moins de 18 ans. Fermé de mi-décembre à mi-février.",
              zh: "挪威最古老的民俗博物馆之一。18 岁以下免费。12 月中旬至 2 月中旬闭馆。",
            },
            drive: 12,
            url: "https://misf.no/en/heiberg-sogn-museum/plan-your-visit",
          },
          {
            name: "Kaupanger stave church",
            town: "Kaupanger",
            mapQuery: "Kaupanger stavkyrkje",
            type: { en: "Stave church from around 1140", no: "Stavkirke fra ca. 1140", de: "Stabkirche von ca. 1140", fr: "Église en bois debout d’environ 1140", zh: "约 1140 年建造的木板教堂" },
            text: {
              en: "Still a working parish church. Opening has varied in recent years because of building work, so check before you go.",
              no: "Fortsatt i bruk som sognekirke. Åpningen har variert de siste årene på grunn av arbeid på bygningen, så sjekk før du drar.",
              de: "Noch heute Gemeindekirche. Wegen Bauarbeiten waren die Öffnungszeiten zuletzt unregelmäßig, bitte vorher prüfen.",
              fr: "Toujours église paroissiale. L’ouverture a varié ces dernières années à cause de travaux, vérifiez avant de partir.",
              zh: "至今仍是教区教堂。近年因修缮开放时间有变，请出发前确认。",
            },
            drive: 15,
            season: summer,
            url: "https://www.stavechurch.com/kaupanger-stave-church/?lang=en",
          },
          {
            name: "Norwegian Glacier Museum",
            town: "Fjærland",
            mapQuery: "Norsk Bremuseum, Fjærland",
            type: { en: "Hands-on glacier and climate centre", no: "Interaktivt bre- og klimasenter", de: "Interaktives Gletscher- und Klimazentrum", fr: "Centre interactif sur les glaciers et le climat", zh: "可互动的冰川与气候中心" },
            text: {
              en: "Touch 1,000-year-old ice and watch a panoramic film about the Jostedal glacier. Great with children and on rainy days.",
              no: "Kjenn på 1000 år gammel is og se panoramafilm om Jostedalsbreen. Fint med barn og på regnværsdager.",
              de: "1000 Jahre altes Eis anfassen und einen Panoramafilm über den Jostedalsbreen sehen. Toll mit Kindern und bei Regen.",
              fr: "Touchez de la glace vieille de 1000 ans et regardez un film panoramique sur le glacier de Jostedal. Idéal avec des enfants et par temps de pluie.",
              zh: "触摸千年冰块，观看关于约斯特达尔冰川的全景电影。适合带孩子或下雨天。",
            },
            drive: 35,
            url: "https://www.bremuseum.no/",
          },
          {
            name: "Nigardsbreen glacier",
            town: "Jostedalen",
            mapQuery: "Breheimsenteret, Jostedal",
            type: { en: "Glacier centre, boat to the glacier and guided glacier walks", no: "Bresenter, båt til breen og guidede breturer", de: "Gletscherzentrum, Boot zum Gletscher und geführte Gletscherwanderungen", fr: "Centre des glaciers, bateau jusqu’au glacier et randonnées guidées sur la glace", zh: "冰川中心、乘船前往冰川及冰川徒步导览" },
            text: {
              en: "Start at Breheimsenteret, then take the toll road and a small boat to the glacier front. Book guided glacier walks in advance.",
              no: "Start på Breheimsenteret, kjør bomvegen og ta en liten båt fram til brefronten. Guidede breturer må bestilles på forhånd.",
              de: "Start am Breheimsenteret, dann Mautstraße und kleines Boot bis zur Gletscherzunge. Geführte Gletscherwanderungen vorab buchen.",
              fr: "Commencez au Breheimsenteret, puis prenez la route à péage et un petit bateau jusqu’au front du glacier. Réservez les randonnées guidées à l’avance.",
              zh: "从 Breheimsenteret 出发，走收费公路并乘小船到冰川前缘。冰川徒步导览需提前预订。",
            },
            drive: 60,
            season: { en: "May–Oct", no: "mai–okt", de: "Mai–Okt", fr: "mai–oct", zh: "5–10 月" },
            url: "https://www.jostedal.com/en/",
          },
          {
            name: "Rafting and glacier kayaking",
            town: "Jostedalen",
            mapQuery: "Jostedal rafting",
            type: { en: "River rafting and kayaking among icebergs", no: "Rafting i elva og kajakk mellom isfjell", de: "Rafting und Kajakfahren zwischen Eisbergen", fr: "Rafting et kayak au milieu des icebergs", zh: "漂流及在冰山间划皮划艇" },
            text: {
              en: "Rafting on the Jostedøla river, from family trips (age 4+) to wild water. Can be combined with a glacier walk.",
              no: "Rafting i Jostedøla, fra familieturer (fra 4 år) til villere vann. Kan kombineres med bretur.",
              de: "Rafting auf der Jostedøla, von Familientouren (ab 4 Jahren) bis Wildwasser. Kombinierbar mit einer Gletscherwanderung.",
              fr: "Rafting sur la Jostedøla, des sorties familiales (dès 4 ans) aux eaux vives. À combiner avec une randonnée sur le glacier.",
              zh: "在 Jostedøla 河漂流，从家庭路线（4 岁以上）到激流都有。可与冰川徒步结合。",
            },
            drive: 60,
            season: summer,
            url: "https://www.jostedal.com/en/activities-in-jostedalen/",
          },
          {
            name: "Kayak on the fjord",
            town: "Sogndal",
            mapQuery: "Dampskipskaien, Sogndal",
            type: { en: "Guided kayak trips or rental from the quay", no: "Guidede kajakkturer eller utleie fra kaia", de: "Geführte Kajaktouren oder Verleih am Kai", fr: "Sorties guidées en kayak ou location depuis le quai", zh: "码头出发的皮划艇导览或租赁" },
            text: {
              en: "3–4 hour guided trips in double kayaks from Dampskipskaien. Booking required.",
              no: "Guidede turer på 3–4 timer i tomannskajakk fra Dampskipskaien. Må bestilles.",
              de: "Geführte Touren (3–4 Std.) im Zweierkajak ab Dampskipskaien. Reservierung nötig.",
              fr: "Sorties guidées de 3 à 4 h en kayak double depuis Dampskipskaien. Sur réservation.",
              zh: "从 Dampskipskaien 出发的 3–4 小时双人皮划艇导览，需预订。",
            },
            drive: 0,
            season: summer,
            url: "https://www.visitnorway.com/listings/kayak-rental-sogndal/255894/",
          },
          {
            name: "Cider and fruit farms",
            town: "Sogn",
            mapQuery: "Haug Gard, Fimreite",
            type: { en: "Tastings at local cider farms", no: "Smaking hos lokale siderprodusenter", de: "Verkostungen bei lokalen Cidreherstellern", fr: "Dégustations dans les cidreries locales", zh: "在本地苹果酒庄品酒" },
            text: {
              en: "Sogn is known for its fruit. Try Haug Gard (also by boat from Sogndal quay in summer), Ølmheim (Slinde), Amble Gård (Kaupanger) or Ciderhuset (Balestrand).",
              no: "Sogn er kjent for frukten sin. Prøv Haug Gard (også med båt fra kaia i Sogndal om sommeren), Ølmheim (Slinde), Amble Gård (Kaupanger) eller Ciderhuset (Balestrand).",
              de: "Sogn ist für sein Obst bekannt. Probieren Sie Haug Gard (im Sommer auch per Boot ab Sogndal), Ølmheim (Slinde), Amble Gård (Kaupanger) oder Ciderhuset (Balestrand).",
              fr: "Sogn est réputé pour ses fruits. Essayez Haug Gard (aussi en bateau depuis Sogndal en été), Ølmheim (Slinde), Amble Gård (Kaupanger) ou Ciderhuset (Balestrand).",
              zh: "松恩以水果闻名。可去 Haug Gard（夏季也可从索根达尔码头乘船前往）、Ølmheim（Slinde）、Amble Gård（Kaupanger）或 Ciderhuset（Balestrand）。",
            },
            season: summer,
            url: "https://www.fjordx.com/cider-cruise",
          },
          {
            name: "Balestrand",
            town: "Balestrand",
            type: { en: "Pretty fjord village with a historic hotel", no: "Vakker fjordbygd med historisk hotell", de: "Hübsches Fjorddorf mit historischem Hotel", fr: "Joli village de fjord avec un hôtel historique", zh: "有历史酒店的美丽峡湾村庄" },
            text: {
              en: "Kviknes Hotel (1877), the stave-style St Olaf’s church and Viking burial mounds. The drive includes the Hella–Dragsvik ferry.",
              no: "Kviknes Hotel (1877), den stavkirkeinspirerte St. Olafs kirke og gravhauger fra vikingtiden. Turen inkluderer ferjen Hella–Dragsvik.",
              de: "Kviknes Hotel (1877), die St.-Olaf-Kirche im Stabkirchenstil und Wikingergräber. Mit der Fähre Hella–Dragsvik.",
              fr: "Le Kviknes Hotel (1877), l’église Saint-Olaf de style bois debout et des tumulus vikings. Le trajet inclut le ferry Hella–Dragsvik.",
              zh: "Kviknes Hotel（1877 年）、木板教堂风格的圣奥拉夫教堂和维京墓丘。途中需乘 Hella–Dragsvik 渡轮。",
            },
            drive: 60,
          },
          {
            name: "Sognefjellet scenic route",
            town: "Gaupne",
            mapQuery: "Sognefjellsvegen",
            type: { en: "Northern Europe’s highest mountain pass by road", no: "Nord-Europas høyeste fjellovergang", de: "Höchster Gebirgspass Nordeuropas", fr: "Le plus haut col routier d’Europe du Nord", zh: "北欧最高的公路山口" },
            text: {
              en: "A spectacular day trip by car up to 1,434 m, via Skjolden and Turtagrø. Closed in winter.",
              no: "En spektakulær dagstur med bil opp til 1434 moh., via Skjolden og Turtagrø. Stengt om vinteren.",
              de: "Spektakulärer Tagesausflug mit dem Auto bis auf 1434 m, über Skjolden und Turtagrø. Im Winter gesperrt.",
              fr: "Une excursion spectaculaire en voiture jusqu’à 1434 m, via Skjolden et Turtagrø. Fermé en hiver.",
              zh: "壮观的自驾一日游，最高到海拔 1434 米，途经 Skjolden 和 Turtagrø。冬季封闭。",
            },
            drive: 45,
            season: { en: "May–Nov", no: "mai–nov", de: "Mai–Nov", fr: "mai–nov", zh: "5–11 月" },
            url: "https://nasjonaleturistveger.no/en/routes/sognefjellet",
          },
          {
            name: "Sogndal Skisenter Hodlekve",
            town: "Sogndalsdalen",
            mapQuery: "Sogndal Skisenter Hodlekve",
            type: { en: "Ski resort: slopes and cross-country trails", no: "Skisenter: bakker og langrennsløyper", de: "Skigebiet: Pisten und Langlaufloipen", fr: "Station de ski : pistes et ski de fond", zh: "滑雪场：雪道和越野滑雪道" },
            text: {
              en: "13 slopes, floodlit cross-country trails and ski touring. Children under 7 ski free. Weekend bus from Sogndal.",
              no: "13 nedfarter, lysløype og topptur. Barn under 7 år går gratis. Helgebuss fra Sogndal.",
              de: "13 Pisten, beleuchtete Loipen und Skitouren. Kinder unter 7 frei. Wochenendbus ab Sogndal.",
              fr: "13 pistes, ski de fond éclairé et ski de randonnée. Gratuit pour les moins de 7 ans. Bus le week-end depuis Sogndal.",
              zh: "13 条雪道、夜间照明越野滑雪道和登山滑雪。7 岁以下免费。周末有从索根达尔出发的巴士。",
            },
            drive: 20,
            season: winter,
            url: "https://www.sogndalskisenter.no/",
          },
        ],
      },
    ],
  },

  // ───────────────────────────── PRACTICAL ─────────────────────────────
  {
    slug: "practical",
    title: { en: "Shops and practical info", no: "Butikker og praktisk info", de: "Einkaufen und Praktisches", fr: "Commerces et infos pratiques", zh: "商店和实用信息" },
    short: { en: "Supermarkets, fuel, EV charging", no: "Matbutikker, drivstoff, elbillading", de: "Supermärkte, Tanken, E-Laden", fr: "Supermarchés, carburant, recharge", zh: "超市、加油、电动车充电" },
    faq: {
      en: "Where is the nearest supermarket?",
      no: "Hvor er nærmeste matbutikk?",
      de: "Wo ist der nächste Supermarkt?",
      fr: "Où est le supermarché le plus proche ?",
      zh: "最近的超市在哪里？",
    },
    intro: {
      en: "Most supermarkets in Norway are closed on Sundays and public holidays. In Sogndal, MENY is open on Sundays.",
      no: "De fleste matbutikker i Norge er stengt på søndager og helligdager. I Sogndal har MENY søndagsåpent.",
      de: "Die meisten Supermärkte in Norwegen sind sonntags und an Feiertagen geschlossen. In Sogndal hat MENY sonntags geöffnet.",
      fr: "La plupart des supermarchés norvégiens sont fermés le dimanche et les jours fériés. À Sogndal, MENY est ouvert le dimanche.",
      zh: "挪威大多数超市在周日和公共假日不营业。在索根达尔，MENY 周日营业。",
    },
    sections: [
      {
        title: { en: "Supermarkets", no: "Matbutikker", de: "Supermärkte", fr: "Supermarchés", zh: "超市" },
        places: [
          {
            name: "MENY Sogndal",
            town: "Sogndal",
            mapQuery: "MENY Sogndal, Hovevegen 8",
            type: { en: "Open on Sundays", no: "Søndagsåpent", de: "Sonntags geöffnet", fr: "Ouvert le dimanche", zh: "周日营业" },
            text: {
              en: "In the Sogningen shopping centre. Usually open until 22:00 on weekdays, and also on Sundays (roughly 10–21).",
              no: "På Sogningen kjøpesenter. Vanligvis åpent til 22 på hverdager, og også på søndager (ca. 10–21).",
              de: "Im Einkaufszentrum Sogningen. Meist werktags bis 22 Uhr geöffnet, auch sonntags (ca. 10–21 Uhr).",
              fr: "Au centre commercial Sogningen. Généralement ouvert jusqu’à 22 h en semaine, et aussi le dimanche (environ 10 h–21 h).",
              zh: "位于 Sogningen 购物中心。工作日通常营业到 22:00，周日也营业（约 10:00–21:00）。",
            },
            drive: 0,
          },
          {
            name: "REMA 1000",
            town: "Sogndal",
            mapQuery: "REMA 1000 Sogndal",
            type: { en: "Budget supermarket", no: "Lavprisbutikk", de: "Discounter", fr: "Supermarché discount", zh: "平价超市" },
            text: {
              en: "Two shops: at Sjøkanten and in the Sogningen centre. Usually Mon–Sat 07–23, closed Sundays.",
              no: "To butikker: på Sjøkanten og på Sogningen. Vanligvis man–lør 07–23, stengt søndag.",
              de: "Zwei Filialen: Sjøkanten und im Zentrum Sogningen. Meist Mo–Sa 07–23 Uhr, sonntags geschlossen.",
              fr: "Deux magasins : à Sjøkanten et au centre Sogningen. Généralement lun–sam 7 h–23 h, fermé le dimanche.",
              zh: "两家店：Sjøkanten 和 Sogningen 中心。通常周一至周六 07:00–23:00，周日不营业。",
            },
            drive: 0,
          },
          {
            name: "Extra",
            town: "Sogndal",
            mapQuery: "Coop Extra Sogndal",
            type: { en: "Budget supermarket", no: "Lavprisbutikk", de: "Discounter", fr: "Supermarché discount", zh: "平价超市" },
            text: {
              en: "Two shops: at Sjøkanten and Fjørevegen. Usually Mon–Sat 07–23, closed Sundays.",
              no: "To butikker: på Sjøkanten og i Fjørevegen. Vanligvis man–lør 07–23, stengt søndag.",
              de: "Zwei Filialen: Sjøkanten und Fjørevegen. Meist Mo–Sa 07–23 Uhr, sonntags geschlossen.",
              fr: "Deux magasins : à Sjøkanten et Fjørevegen. Généralement lun–sam 7 h–23 h, fermé le dimanche.",
              zh: "两家店：Sjøkanten 和 Fjørevegen。通常周一至周六 07:00–23:00，周日不营业。",
            },
            drive: 0,
          },
          {
            name: "Vinmonopolet",
            town: "Sogndal",
            mapQuery: "Vinmonopolet Sogndal",
            type: { en: "Wine and spirits shop", no: "Vin og brennevin", de: "Wein und Spirituosen", fr: "Vins et spiritueux", zh: "葡萄酒和烈酒专卖店" },
            text: {
              en: "The only place to buy wine and spirits in Norway. In the Sogningen centre. Usually Mon–Wed 10–17, Thu–Fri 10–18, Sat 10–16, closed Sundays. Supermarkets sell beer until 20:00 on weekdays and 18:00 on Saturdays.",
              no: "Eneste sted som selger vin og brennevin i Norge. På Sogningen. Vanligvis man–ons 10–17, tor–fre 10–18, lør 10–16, stengt søndag. Matbutikkene selger øl til 20 på hverdager og 18 på lørdager.",
              de: "Der einzige Ort in Norwegen, der Wein und Spirituosen verkauft. Im Zentrum Sogningen. Meist Mo–Mi 10–17, Do–Fr 10–18, Sa 10–16 Uhr, sonntags geschlossen. Supermärkte verkaufen Bier werktags bis 20 Uhr, samstags bis 18 Uhr.",
              fr: "Le seul endroit où acheter vin et spiritueux en Norvège. Au centre Sogningen. Généralement lun–mer 10 h–17 h, jeu–ven 10 h–18 h, sam 10 h–16 h, fermé le dimanche. Les supermarchés vendent de la bière jusqu’à 20 h en semaine et 18 h le samedi.",
              zh: "挪威唯一可购买葡萄酒和烈酒的地方，位于 Sogningen 中心。通常周一至周三 10:00–17:00，周四至周五 10:00–18:00，周六 10:00–16:00，周日不营业。超市工作日 20:00 前、周六 18:00 前可售啤酒。",
            },
            drive: 0,
            url: "https://www.vinmonopolet.no/butikk/261",
          },
          {
            name: "Apotek 1 Sogndal",
            town: "Sogndal",
            mapQuery: "Apotek 1 Sogndal",
            type: { en: "Pharmacy", no: "Apotek", de: "Apotheke", fr: "Pharmacie", zh: "药店" },
            text: {
              en: "In the Sogningen centre. Usually Mon–Fri 09–19, Sat 10–18, closed Sundays.",
              no: "På Sogningen. Vanligvis man–fre 09–19, lør 10–18, stengt søndag.",
              de: "Im Zentrum Sogningen. Meist Mo–Fr 09–19, Sa 10–18 Uhr, sonntags geschlossen.",
              fr: "Au centre Sogningen. Généralement lun–ven 9 h–19 h, sam 10 h–18 h, fermé le dimanche.",
              zh: "位于 Sogningen 中心。通常周一至周五 09:00–19:00，周六 10:00–18:00，周日不营业。",
            },
            drive: 0,
          },
        ],
      },
      {
        title: { en: "Fuel and EV charging", no: "Drivstoff og elbillading", de: "Tanken und E-Laden", fr: "Carburant et recharge", zh: "加油和电动车充电" },
        places: [
          {
            name: "Circle K Sogndal",
            town: "Sogndal",
            mapQuery: "Circle K Sogndal, Årøyvegen 8",
            type: { en: "Fuel, fast charger, car wash and shop", no: "Drivstoff, hurtiglader, bilvask og butikk", de: "Tankstelle, Schnelllader, Waschanlage und Shop", fr: "Carburant, borne rapide, lavage et boutique", zh: "加油、快充、洗车和便利店" },
            text: {
              en: "The shop is also open on Sundays (around 09–23).",
              no: "Butikken har også åpent på søndager (ca. 09–23).",
              de: "Der Shop hat auch sonntags geöffnet (ca. 09–23 Uhr).",
              fr: "La boutique est aussi ouverte le dimanche (environ 9 h–23 h).",
              zh: "便利店周日也营业（约 09:00–23:00）。",
            },
            drive: 0,
          },
          {
            name: "St1 Sogndal",
            town: "Sogndal",
            mapQuery: "St1 Sogndal, Stedjevegen 43",
            type: { en: "Fuel, car wash and food", no: "Drivstoff, bilvask og mat", de: "Tankstelle, Waschanlage und Essen", fr: "Carburant, lavage et restauration", zh: "加油、洗车和餐食" },
            text: {
              en: "At Sjøkanten. Open late, including Sundays.",
              no: "På Sjøkanten. Åpent til sent, også søndag.",
              de: "An der Sjøkanten. Lange geöffnet, auch sonntags.",
              fr: "À Sjøkanten. Ouvert tard, y compris le dimanche.",
              zh: "位于 Sjøkanten。营业到很晚，周日也营业。",
            },
            drive: 0,
          },
          {
            name: "EV fast chargers in Sogndal",
            town: "Sogndal",
            mapQuery: "EV charging station Sogndal",
            type: { en: "Eviny at Sjøkanten, Circle K, Sogningen car park", no: "Eviny på Sjøkanten, Circle K, parkeringshuset på Sogningen", de: "Eviny an der Sjøkanten, Circle K, Parkhaus Sogningen", fr: "Eviny à Sjøkanten, Circle K, parking de Sogningen", zh: "Sjøkanten 的 Eviny、Circle K、Sogningen 停车场" },
            text: {
              en: "Use the operator’s app or Google Maps to check which chargers are free.",
              no: "Bruk appen til operatøren eller Google Maps for å se hvilke ladere som er ledige.",
              de: "Freie Ladepunkte zeigt die App des Betreibers oder Google Maps.",
              fr: "Utilisez l’application de l’opérateur ou Google Maps pour voir les bornes libres.",
              zh: "可通过运营商应用或谷歌地图查看空闲充电桩。",
            },
            drive: 0,
          },
          {
            name: "Tesla Supercharger Hafslo",
            town: "Hafslo",
            mapQuery: "Tesla Supercharger Hafslo",
            type: { en: "9 chargers up to 250 kW, open to all CCS cars", no: "9 ladere opptil 250 kW, åpen for alle CCS-biler", de: "9 Ladepunkte bis 250 kW, offen für alle CCS-Autos", fr: "9 bornes jusqu’à 250 kW, ouvertes à toutes les voitures CCS", zh: "9 个充电桩，最高 250 kW，所有 CCS 车型可用" },
            text: {
              en: "The nearest Supercharger, north of Sogndal towards Luster. Non-Tesla cars can charge via the Tesla app. There is also one at Lærdal (16 chargers).",
              no: "Nærmeste Supercharger, nord for Sogndal mot Luster. Andre biler enn Tesla kan lade via Tesla-appen. Det er også en i Lærdal (16 ladere).",
              de: "Der nächste Supercharger, nördlich von Sogndal Richtung Luster. Andere Marken laden über die Tesla-App. Ein weiterer steht in Lærdal (16 Ladepunkte).",
              fr: "Le Superchargeur le plus proche, au nord de Sogndal vers Luster. Les autres marques peuvent charger via l’application Tesla. Il y en a aussi un à Lærdal (16 bornes).",
              zh: "最近的超级充电站，位于索根达尔北边往 Luster 方向。非特斯拉车辆可通过特斯拉应用充电。Lærdal 还有一座（16 个充电桩）。",
            },
            drive: 15,
            url: "https://www.tesla.com/findus/location/supercharger/451015",
          },
        ],
      },
      {
        title: { en: "Health and emergencies", no: "Helse og nødsituasjoner", de: "Gesundheit und Notfälle", fr: "Santé et urgences", zh: "医疗和紧急情况" },
        places: [
          {
            name: "113 · 112 · 110",
            town: "Norway",
            map: false,
            type: { en: "Ambulance 113 · Police 112 · Fire 110", no: "Ambulanse 113 · Politi 112 · Brann 110", de: "Rettungsdienst 113 · Polizei 112 · Feuerwehr 110", fr: "Ambulance 113 · Police 112 · Pompiers 110", zh: "急救 113 · 警察 112 · 火警 110" },
          },
          {
            name: "116 117",
            town: "Sogndal",
            map: false,
            type: { en: "Out-of-hours doctor (legevakt)", no: "Legevakt", de: "Ärztlicher Bereitschaftsdienst (Legevakt)", fr: "Médecin de garde (legevakt)", zh: "非工作时间医生（legevakt）" },
            text: {
              en: "For urgent but not life-threatening illness or injury. Call first and they tell you where to go.",
              no: "For akutt sykdom eller skade som ikke er livstruende. Ring først, så får du beskjed om hvor du skal dra.",
              de: "Bei dringenden, aber nicht lebensbedrohlichen Beschwerden. Erst anrufen, dort erfahren Sie, wohin Sie gehen sollen.",
              fr: "Pour une maladie ou blessure urgente mais sans danger vital. Appelez d’abord, on vous dira où aller.",
              zh: "用于紧急但不危及生命的疾病或受伤。请先打电话，对方会告诉您去哪里。",
            },
          },
        ],
      },
      {
        title: { en: "Getting around", no: "Transport", de: "Unterwegs", fr: "Se déplacer", zh: "交通" },
        places: [
          {
            name: "Sogndal Airport (Haukåsen)",
            town: "Kaupanger",
            mapQuery: "Sogndal lufthamn Haukåsen",
            type: { en: "Flights to Oslo and Bergen", no: "Fly til Oslo og Bergen", de: "Flüge nach Oslo und Bergen", fr: "Vols vers Oslo et Bergen", zh: "飞往奥斯陆和卑尔根的航班" },
            text: {
              en: "About 20 minutes away. Airport bus from Sogndal bus station, or taxi.",
              no: "Ca. 20 minutter unna. Flybuss fra Sogndal skysstasjon, eller taxi.",
              de: "Ca. 20 Minuten entfernt. Flughafenbus ab Busbahnhof Sogndal oder Taxi.",
              fr: "À environ 20 minutes. Navette depuis la gare routière de Sogndal, ou taxi.",
              zh: "约 20 分钟车程。可从索根达尔汽车站乘机场巴士，或打车。",
            },
            drive: 20,
            url: "https://avinor.no/flyplass/sogndal/til-og-fra-flyplassen/",
          },
          {
            name: "Buses and express boat",
            town: "Sogndal",
            mapQuery: "Sogndal skysstasjon",
            type: { en: "Plan trips at entur.no", no: "Planlegg reisen på entur.no", de: "Reiseplanung auf entur.no", fr: "Planifiez sur entur.no", zh: "在 entur.no 规划行程" },
            text: {
              en: "Local and long-distance buses leave from Sogndal bus station. The express boat to Bergen (about 4.5 h, foot passengers) leaves from the quay.",
              no: "Lokal- og langdistansebusser går fra Sogndal skysstasjon. Snøggbåten til Bergen (ca. 4,5 t, kun passasjerer) går fra kaia.",
              de: "Regional- und Fernbusse fahren am Busbahnhof Sogndal ab. Das Schnellboot nach Bergen (ca. 4,5 Std., nur Fußgänger) legt am Kai ab.",
              fr: "Les bus locaux et longue distance partent de la gare routière de Sogndal. Le bateau rapide pour Bergen (env. 4 h 30, piétons) part du quai.",
              zh: "本地和长途巴士从索根达尔汽车站出发。前往卑尔根的快船（约 4.5 小时，仅限步行乘客）从码头出发。",
            },
            drive: 0,
            url: "https://entur.no",
          },
        ],
      },
    ],
  },
];

export const getAreaPage = (slug: string) => areaPages.find((p) => p.slug === slug);
