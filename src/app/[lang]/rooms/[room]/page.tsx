import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, isLocale, locales, t } from "@/i18n";
import { getGuide, getRoom, rooms } from "@/content";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { PhotoBox } from "@/components/PhotoBox";
import { MarkedPhoto, type MarkerMode } from "@/components/MarkedPhoto";
import { ContactCard } from "@/components/ContactCard";

export function generateStaticParams() {
  return locales.flatMap((lang) => rooms.map((r) => ({ lang, room: r.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/rooms/[room]">): Promise<Metadata> {
  const { lang, room } = await params;
  const r = getRoom(room);
  return r && isLocale(lang) ? { title: t(r.name, lang) } : {};
}

export default async function RoomPage({ params, searchParams }: PageProps<"/[lang]/rooms/[room]">) {
  const { lang, room: slug } = await params;
  const room = getRoom(slug);
  if (!isLocale(lang) || !room) notFound();
  const d = getDictionary(lang);

  // Two marker behaviours to compare: /rooms/kitchen (jump) vs /rooms/kitchen?markers=popover
  const mode: MarkerMode = (await searchParams).markers === "popover" ? "popover" : "jump";
  const labels = Object.fromEntries(room.items.map((i) => [i.n, t(i.name, lang)]));

  return (
    <main className="pb-9">
      <Header lang={lang} back={{ href: `/${lang}`, label: d.home }} />

      <section className="px-5 pt-1">
        <h1 className="font-serif text-[32px] leading-tight">{t(room.name, lang)}</h1>
        {room.intro && <p className="mt-2 text-base leading-relaxed text-ink-soft">{t(room.intro, lang)}</p>}
      </section>

      <section className="flex flex-col gap-4 px-5 pt-5">
        {room.photos.map((photo, i) => (
          <MarkedPhoto
            key={i}
            mode={mode}
            markers={photo.markers}
            labels={labels}
            seeInList={d.seeInList}
            photo={<PhotoBox photo={photo} lang={lang} priority={i === 0} />}
          />
        ))}
      </section>

      {room.items.length > 0 && (
        <section className="px-5 pt-6">
          <h2 className="mb-3 font-serif text-2xl">{d.inThisRoom}</h2>
          <ol className="overflow-hidden rounded-[18px] bg-white">
            {room.items.map((item) => {
              const guide = item.guide ? getGuide(item.guide) : undefined;
              const body = (
                <>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-pine text-sm font-bold text-white">
                    {item.n}
                  </span>
                  <span className="grow">
                    <span className="block text-[15px] font-medium">{t(item.name, lang)}</span>
                    {item.where && <span className="block text-[13px] text-muted">{t(item.where, lang)}</span>}
                    {guide && <span className="block text-[13px] font-semibold text-pine">{d.howToUse} →</span>}
                  </span>
                </>
              );
              return (
                <li key={item.n} id={`item-${item.n}`} className="room-item scroll-mt-4 border-t border-sand first:border-t-0">
                  {guide ? (
                    <Link href={`/${lang}/guides/${guide.slug}`} className="flex min-h-14 items-center gap-3 px-4 py-3 text-ink no-underline">
                      {body}
                      <Icon name="chevronRight" size={16} className="text-[#9a8c80]" />
                    </Link>
                  ) : (
                    <div className="flex min-h-14 items-center gap-3 px-4 py-3">{body}</div>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      )}

      <section className="px-5 pt-7">
        <ContactCard lang={lang} />
      </section>
    </main>
  );
}
