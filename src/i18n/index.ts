import type { Locale } from "./config";
import en, { type Dictionary } from "./dictionaries/en";
import no from "./dictionaries/no";
import de from "./dictionaries/de";
import fr from "./dictionaries/fr";
import zh from "./dictionaries/zh";

const dictionaries: Record<Locale, Dictionary> = { en, no, de, fr, zh };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}

export * from "./config";
export type { Dictionary };
