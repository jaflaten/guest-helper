import type { StepPage } from "./types";

// The door code is deliberately NOT here: it is sent in the booking message.
export const arrival: StepPage = {
  title: { en: "Getting here", no: "Slik finner du fram", de: "Anreise" },
  intro: {
    en: "Follow the photos from the parking spot to the door.",
    no: "Følg bildene fra parkeringsplassen til døren.",
    de: "Folgen Sie den Fotos vom Parkplatz bis zur Tür.",
  },
  steps: [
    {
      title: { en: "Parking", no: "Parkering", de: "Parken" },
      body: { en: "[Where to park, and how to recognise the spot]" },
      photo: { alt: { en: "Parking" }, placeholder: "[Photo: parking spot]" },
    },
    {
      title: { en: "Find the building", no: "Finn bygget", de: "Das Gebäude finden" },
      body: { en: "[What the building looks like from the road]" },
      photo: { alt: { en: "The building" }, placeholder: "[Photo: building from the road]" },
    },
    {
      title: { en: "The key box", no: "Nøkkelboksen", de: "Die Schlüsselbox" },
      body: { en: "[Where the key box is and how to open it with your code]" },
      photo: { alt: { en: "Key box" }, placeholder: "[Photo: key box]" },
    },
    {
      title: { en: "The door", no: "Døren", de: "Die Tür" },
      body: { en: "[Which door, which floor]" },
      photo: { alt: { en: "Front door" }, placeholder: "[Photo: front door]" },
    },
  ],
};

export const checkout: StepPage = {
  title: { en: "Before you leave", no: "Før du reiser", de: "Vor der Abreise" },
  intro: {
    en: "[Check-out time]. Thank you for staying with us!",
    no: "[Utsjekkingstid]. Takk for besøket!",
    de: "[Abreisezeit]. Danke für Ihren Aufenthalt!",
  },
  steps: [
    { title: { en: "Dishes", no: "Oppvask", de: "Geschirr" }, body: { en: "[Run the dishwasher / leave dishes clean]" } },
    { title: { en: "Rubbish", no: "Søppel", de: "Müll" }, body: { en: "[Where the bins are and how to sort]" } },
    { title: { en: "Keys", no: "Nøkler", de: "Schlüssel" }, body: { en: "[Put the key back in the key box and scramble the code]" } },
  ],
};
