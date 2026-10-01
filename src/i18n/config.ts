// Languages the guide supports. Add a code here, add a dictionary file,
// and every page picks it up. Content missing a translation falls back to English.
export const locales = ["en", "no", "de", "fr", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  no: "Norsk",
  de: "Deutsch",
  fr: "Français",
  zh: "中文",
};

/** Value for <html lang>. "zh" content is Simplified Chinese. */
export const htmlLang: Record<Locale, string> = { en: "en", no: "nb", de: "de", fr: "fr", zh: "zh-Hans" };

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** A piece of content in several languages. English is required and is the fallback. */
export type Localized<T = string> = { en: T } & Partial<Record<Locale, T>>;

/** Pick the right language, falling back to English. */
export function t<T>(value: Localized<T>, lang: Locale): T {
  return value[lang] ?? value.en;
}
