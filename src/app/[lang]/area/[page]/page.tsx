import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, isLocale, locales, t } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { areaPages, areaUi, getAreaPage, type Place } from "@/content";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { ContactCard } from "@/components/ContactCard";

export function generateStaticParams() {
  return locales.flatMap((lang) => areaPages.map((p) => ({ lang, page: p.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/area/[page]">): Promise<Metadata> {
  const { lang, page } = await params;
  const p = getAreaPage(page);
  return p && isLocale(lang) ? { title: t(p.title, lang) } : {};
}

export default async function AreaPage({ params }: PageProps<"/[lang]/area/[page]">) {
  const { lang, page: slug } = await params;
  const page = getAreaPage(slug);
  if (!isLocale(lang) || !page) notFound();
  const d = getDictionary(lang);

  return (
    <main className="pb-10">
      <Header lang={lang} back={{ href: `/${lang}`, label: d.home }} />

      <section className="px-5 pt-1">
        <h1 className="font-serif text-[32px] leading-tight">{t(page.title, lang)}</h1>
        <p className="mt-2 text-base leading-relaxed text-ink-soft">{t(page.intro, lang)}</p>
        <p className="mt-3 rounded-[14px] bg-sand px-4 py-3 text-[13px] leading-relaxed text-ink-soft">{t(areaUi.hoursNote, lang)}</p>
      </section>

      {page.sections.map((section, i) => (
        <section key={i} className="px-5 pt-7">
          <h2 className="font-serif text-2xl">{t(section.title, lang)}</h2>
          {section.intro && <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{t(section.intro, lang)}</p>}
          <ul className="mt-3 flex flex-col gap-3">
            {section.places.map((place) => (
              <PlaceCard key={place.name} place={place} lang={lang} />
            ))}
          </ul>
        </section>
      ))}

      <section className="px-5 pt-8">
        <ContactCard lang={lang} />
      </section>
    </main>
  );
}

function PlaceCard({ place, lang }: { place: Place; lang: Locale }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery ?? `${place.name}, ${place.town}`)}`;
  const meta = [
    place.town !== "Sogndal" && place.map !== false ? place.town : null,
    place.drive === 0 ? t(areaUi.inTown, lang) : place.drive ? `${place.drive} ${t(areaUi.minDrive, lang)}` : null,
    place.price ? "kr ".repeat(place.price).trim() : null,
  ].filter(Boolean);

  return (
    <li className="rounded-[18px] bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[17px] font-semibold leading-snug">{place.name}</h3>
        {place.season && (
          <span className="shrink-0 rounded-full bg-pine-soft px-2.5 py-1 text-[12px] font-semibold text-pine-dark">{t(place.season, lang)}</span>
        )}
      </div>
      <p className="mt-0.5 text-[15px] font-medium text-ink-soft">{t(place.type, lang)}</p>
      {meta.length > 0 && <p className="mt-1 text-[13px] text-muted">{meta.join(" · ")}</p>}
      {place.text && <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{t(place.text, lang)}</p>}
      {(place.map !== false || place.url) && (
        <div className="mt-3 flex flex-wrap gap-2">
          {place.map !== false && (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-sand px-3 text-[14px] font-semibold text-ink no-underline"
            >
              <Icon name="pin" size={16} />
              {t(areaUi.maps, lang)}
            </a>
          )}
          {place.url && (
            <a
              href={place.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center rounded-xl bg-sand px-3 text-[14px] font-semibold text-ink no-underline"
            >
              {t(areaUi.website, lang)}
            </a>
          )}
        </div>
      )}
    </li>
  );
}
