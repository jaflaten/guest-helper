import type { Locale } from "@/i18n/config";

// The message Jorn pastes into Airbnb / Booking.com / WhatsApp, in the guest's language.
// {greeting} becomes "Hi Anna!" or "Hi!"; the other placeholders are filled by the admin page.
export const guestMessage: Record<Locale, { hi: string; hiName: string; body: string }> = {
  en: {
    hi: "Hi!",
    hiName: "Hi {name}!",
    body:
      "{greeting} Here is your personal guide for the stay, with directions, your door code and the Wi-Fi password:\n{link}\n\nThe door code appears on the page from {checkIn} on {date}. Check-out is by {checkOut}. Message us any time if something is unclear.",
  },
  no: {
    hi: "Hei!",
    hiName: "Hei {name}!",
    body:
      "{greeting} Her er din personlige guide for oppholdet, med veibeskrivelse, dørkode og Wi-Fi-passord:\n{link}\n\nDørkoden vises på siden fra kl. {checkIn} {date}. Utsjekk innen kl. {checkOut}. Send oss gjerne en melding hvis noe er uklart.",
  },
  de: {
    hi: "Hallo!",
    hiName: "Hallo {name}!",
    body:
      "{greeting} Hier ist Ihr persönlicher Guide für den Aufenthalt, mit Wegbeschreibung, Türcode und WLAN-Passwort:\n{link}\n\nDer Türcode erscheint auf der Seite ab {checkIn} Uhr am {date}. Abreise bis {checkOut} Uhr. Schreiben Sie uns jederzeit, wenn etwas unklar ist.",
  },
  fr: {
    hi: "Bonjour !",
    hiName: "Bonjour {name} !",
    body:
      "{greeting} Voici votre guide personnel pour le séjour, avec l’itinéraire, votre code d’accès et le mot de passe Wi-Fi :\n{link}\n\nLe code s’affiche sur la page à partir de {checkIn} le {date}. Départ avant {checkOut}. Écrivez-nous à tout moment si quelque chose n’est pas clair.",
  },
  zh: {
    hi: "您好！",
    hiName: "{name}，您好！",
    body:
      "{greeting}这是您本次入住的专属指南，包含路线、门锁密码和 Wi-Fi 密码：\n{link}\n\n门锁密码将于 {date} {checkIn} 起在页面上显示。请于 {checkOut} 前退房。如有任何疑问，请随时联系我们。",
  },
};
