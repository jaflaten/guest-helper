import { t, type Locale } from "@/i18n/config";
import { guides } from "./guides";
import { rooms } from "./rooms";
import { answers } from "./answers";
import { areaPages } from "./area";

export { site } from "./site";
export { arrival, checkout } from "./pages";
export { rooms, guides, answers, areaPages };
export { areaUi, getAreaPage } from "./area";
export type { AreaPage, Place } from "./area";
export type { QuickAnswer } from "./answers";
export * from "./types";

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);
export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
export const guidesInRoom = (room: string) => guides.filter((g) => g.room === room);

export type SearchEntry = { title: string; detail?: string; href: string };

/** Everything a guest can search for, in their language. */
export function searchIndex(lang: Locale): SearchEntry[] {
  const entries: SearchEntry[] = [];
  for (const g of guides) {
    entries.push({ title: t(g.title, lang), detail: g.faq && t(g.faq, lang), href: `/${lang}/guides/${g.slug}` });
  }
  for (const r of rooms) {
    entries.push({ title: t(r.name, lang), href: `/${lang}/rooms/${r.slug}` });
    for (const item of r.items) {
      entries.push({
        title: t(item.name, lang),
        detail: item.where ? `${t(r.name, lang)} · ${t(item.where, lang)}` : t(r.name, lang),
        href: item.guide ? `/${lang}/guides/${item.guide}` : `/${lang}/rooms/${r.slug}#item-${item.n}`,
      });
    }
  }
  for (const qa of answers) {
    entries.push({ title: t(qa.q, lang), detail: t(qa.a, lang), href: `/${lang}#answer-${qa.id}` });
  }
  for (const page of areaPages) {
    entries.push({ title: t(page.title, lang), detail: t(page.faq, lang), href: `/${lang}/area/${page.slug}` });
    for (const section of page.sections) {
      for (const p of section.places) {
        entries.push({ title: p.name, detail: `${t(p.type, lang)} · ${p.town}`, href: `/${lang}/area/${page.slug}` });
      }
    }
  }
  return entries;
}
