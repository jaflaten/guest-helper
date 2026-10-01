import { htmlLang, type Locale } from "@/i18n/config";

/** Replace {name}-style placeholders. */
export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? `{${k}}`);
}

/** "2026-10-03" → "Saturday 3 October" in the guest's language. */
export function formatDate(isoDate: string, lang: Locale): string {
  return new Intl.DateTimeFormat(htmlLang[lang], {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T12:00:00Z`));
}
