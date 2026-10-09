import type { Locale } from "@/i18n/config";

// The message Jorn pastes into Airbnb / Booking.com / WhatsApp, in the guest's language.
// {greeting} becomes "Hi Anna!" or "Hi!"; the other placeholders are filled by the admin page.
// The code and Wi-Fi password are in the message itself, so guests who can't open the link still get in.
export const guestMessage: Record<Locale, { hi: string; hiName: string; body: string }> = {
  en: {
    hi: "Hi!",
    hiName: "Hi {name}!",
    body:
      "{greeting} The apartment is ready for check-in.\n\nAddress: Fossvegen 7, 6857 Sogndal. Park right in front of the entrance, inside the black fence.\nKey box code: {code} (the key box is just to the right of the front door)\n\nWi-Fi: {wifiName}\nPassword: {wifiPassword}\n\nEverything about the apartment, with photos, is in your personal guide:\n{link}\nIf the link doesn’t open, type {guide} in your browser.\n\nCheck-out is by {checkOut}. Feel free to contact me if you have any questions. I hope you have a great stay in Sogndal :)",
  },
  no: {
    hi: "Hei!",
    hiName: "Hei {name}!",
    body:
      "{greeting} Leiligheten er klar for innsjekk.\n\nAdresse: Fossvegen 7, 6857 Sogndal. Parker rett foran inngangen, innenfor det svarte gjerdet.\nKode til nøkkelboksen: {code} (nøkkelboksen henger rett til høyre for inngangsdøren)\n\nWi-Fi: {wifiName}\nPassord: {wifiPassword}\n\nAlt om leiligheten, med bilder, finner du i din personlige guide:\n{link}\nHvis lenken ikke åpner seg, skriv {guide} i nettleseren.\n\nUtsjekk innen kl. {checkOut}. Ta gjerne kontakt hvis du lurer på noe. Håper du får et fint opphold i Sogndal :)",
  },
  de: {
    hi: "Hallo!",
    hiName: "Hallo {name}!",
    body:
      "{greeting} Die Wohnung ist bereit für den Check-in.\n\nAdresse: Fossvegen 7, 6857 Sogndal. Parken Sie direkt vor dem Eingang, innerhalb des schwarzen Zauns.\nCode für die Schlüsselbox: {code} (die Schlüsselbox hängt direkt rechts neben der Eingangstür)\n\nWLAN: {wifiName}\nPasswort: {wifiPassword}\n\nAlles zur Wohnung, mit Fotos, finden Sie in Ihrem persönlichen Guide:\n{link}\nFalls der Link sich nicht öffnet, geben Sie {guide} im Browser ein.\n\nAbreise bis {checkOut} Uhr. Melden Sie sich gerne, wenn Sie Fragen haben. Einen schönen Aufenthalt in Sogndal :)",
  },
  fr: {
    hi: "Bonjour !",
    hiName: "Bonjour {name} !",
    body:
      "{greeting} L’appartement est prêt pour votre arrivée.\n\nAdresse : Fossvegen 7, 6857 Sogndal. Garez-vous juste devant l’entrée, à l’intérieur de la clôture noire.\nCode de la boîte à clés : {code} (la boîte à clés est juste à droite de la porte d’entrée)\n\nWi-Fi : {wifiName}\nMot de passe : {wifiPassword}\n\nTout sur l’appartement, avec des photos, se trouve dans votre guide personnel :\n{link}\nSi le lien ne s’ouvre pas, tapez {guide} dans votre navigateur.\n\nDépart avant {checkOut}. N’hésitez pas à me contacter si vous avez des questions. Très bon séjour à Sogndal :)",
  },
  zh: {
    hi: "您好！",
    hiName: "{name}，您好！",
    body:
      "{greeting}公寓已可以入住。\n\n地址：Fossvegen 7, 6857 Sogndal。请把车停在入口正前方的黑色围栏内。\n钥匙盒密码：{code}（钥匙盒就在入口门的右侧）\n\nWi-Fi：{wifiName}\n密码：{wifiPassword}\n\n公寓的所有信息（附照片）都在您的专属指南中：\n{link}\n如果链接打不开，请在浏览器中输入 {guide}。\n\n请于 {checkOut} 前退房。如有任何问题，欢迎随时联系我。祝您在索根达尔住得愉快 :)",
  },
};
