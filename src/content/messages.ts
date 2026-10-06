import type { Locale } from "@/i18n/config";

// The message Jorn pastes into Airbnb / Booking.com / WhatsApp, in the guest's language.
// {greeting} becomes "Hi Anna!" or "Hi!"; the other placeholders are filled by the admin page.
export const guestMessage: Record<Locale, { hi: string; hiName: string; body: string }> = {
  en: {
    hi: "Hi!",
    hiName: "Hi {name}!",
    body:
      "{greeting} The apartment is ready for check-in.\n\nAddress: Fossvegen 7, 6857 Sogndal. Park right in front of the entrance, inside the black fence.\n\nHere is your personal guide, with the key box code, the Wi-Fi password and everything about the apartment:\n{link}\n\nThe code shows on the page from {checkIn} on {date}. Check-out is by {checkOut}.\n\nFeel free to contact me if you have any questions. I hope you have a great stay in Sogndal :)",
  },
  no: {
    hi: "Hei!",
    hiName: "Hei {name}!",
    body:
      "{greeting} Leiligheten er klar for innsjekk.\n\nAdresse: Fossvegen 7, 6857 Sogndal. Parker rett foran inngangen, innenfor det svarte gjerdet.\n\nHer er din personlige guide, med kode til nøkkelboksen, Wi-Fi-passord og alt om leiligheten:\n{link}\n\nKoden vises på siden fra kl. {checkIn} {date}. Utsjekk innen kl. {checkOut}.\n\nTa gjerne kontakt hvis du lurer på noe. Håper du får et fint opphold i Sogndal :)",
  },
  de: {
    hi: "Hallo!",
    hiName: "Hallo {name}!",
    body:
      "{greeting} Die Wohnung ist bereit für den Check-in.\n\nAdresse: Fossvegen 7, 6857 Sogndal. Parken Sie direkt vor dem Eingang, innerhalb des schwarzen Zauns.\n\nHier ist Ihr persönlicher Guide mit dem Code für die Schlüsselbox, dem WLAN-Passwort und allem rund um die Wohnung:\n{link}\n\nDer Code erscheint auf der Seite ab {checkIn} Uhr am {date}. Abreise bis {checkOut} Uhr.\n\nMelden Sie sich gerne, wenn Sie Fragen haben. Einen schönen Aufenthalt in Sogndal :)",
  },
  fr: {
    hi: "Bonjour !",
    hiName: "Bonjour {name} !",
    body:
      "{greeting} L’appartement est prêt pour votre arrivée.\n\nAdresse : Fossvegen 7, 6857 Sogndal. Garez-vous juste devant l’entrée, à l’intérieur de la clôture noire.\n\nVoici votre guide personnel, avec le code de la boîte à clés, le mot de passe Wi-Fi et tout sur l’appartement :\n{link}\n\nLe code s’affiche sur la page à partir de {checkIn} le {date}. Départ avant {checkOut}.\n\nN’hésitez pas à me contacter si vous avez des questions. Très bon séjour à Sogndal :)",
  },
  zh: {
    hi: "您好！",
    hiName: "{name}，您好！",
    body:
      "{greeting}公寓已可以入住。\n\n地址：Fossvegen 7, 6857 Sogndal。请把车停在入口正前方的黑色围栏内。\n\n这是您的专属指南，包含钥匙盒密码、Wi-Fi 密码以及公寓的所有信息：\n{link}\n\n密码将于 {date} {checkIn} 起在页面上显示。请于 {checkOut} 前退房。\n\n如有任何问题，欢迎随时联系我。祝您在索根达尔住得愉快 :)",
  },
};
