import Link from "next/link";
import { getDictionary, isLocale, t } from "@/i18n";
import { guides, guidesInRoom, rooms, searchIndex, site } from "@/content";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { PhotoBox } from "@/components/PhotoBox";
import { Search } from "@/components/Search";
import { ContactCard } from "@/components/ContactCard";
import { StayShortcut } from "@/components/StayLink";
import { notFound } from "next/navigation";

const tints = ["#e2d3bf", "#d3dfda", "#e6d8cc", "#ddd5e0", "#d6dde4"];

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  // "Where to find things": every room item that has a location, across rooms.
  const finds = rooms
    .flatMap((r) => r.items.filter((i) => i.where).map((i) => ({ room: r, item: i })))
    .slice(0, 5);
  const faqs = guides.filter((g) => g.faq).slice(0, 4);

  return (
    <main className="pb-9">
      <Header lang={lang} />

      <section className="px-5 pt-1">
        <div className="relative flex h-[220px] flex-col justify-end overflow-hidden rounded-[22px]">
          <PhotoBox photo={site.hero} lang={lang} priority />
          <div className="relative bg-gradient-to-t from-black/70 to-transparent p-5">
            <p className="text-[13px] uppercase tracking-wider text-[#f3e9dc]">{d.welcomeEyebrow}</p>
            <h1 className="mt-1 font-serif text-[30px] leading-tight text-white">{d.welcomeTitle}</h1>
          </div>
        </div>
      </section>

      <section className="px-5 pt-4">
        <Search entries={searchIndex(lang)} placeholder={d.searchPlaceholder} empty={d.searchNoResults} />
      </section>

      <section className="px-5 pt-4 empty:hidden">
        <StayShortcut lang={lang} title={d.stayTitle} sub={d.stayCardSub} />
      </section>

      <section className="grid grid-cols-2 gap-3 px-5 pt-4">
        <QuickCard href={`/${lang}/arrival`} icon="pin" title={d.arrival} sub={d.arrivalSub} iconClass="bg-pine-soft text-pine" />
        <div className="flex min-h-[108px] flex-col gap-2.5 rounded-[18px] bg-pine p-4 text-white">
          <Icon name="wifi" size={22} />
          <p className="text-[15px] font-semibold">{d.wifi}</p>
          <p className="-mt-1.5 break-words text-xs leading-snug opacity-90">
            {site.wifi.network}
            <br />
            {d.wifiPasswordNote}
          </p>
        </div>
        <QuickCard href={`/${lang}/checkout`} icon="check" title={d.checkout} sub={d.checkoutSub} iconClass="bg-clay-soft text-clay" />
        <QuickCard href={`/${lang}/help`} icon="alert" title={d.help} sub={d.helpSub} iconClass="bg-alert-soft text-alert" />
      </section>

      <section className="pl-5 pt-7">
        <h2 className="pr-5 font-serif text-2xl">{d.houseGuide}</h2>
        <div className="flex gap-3 overflow-x-auto pb-1 pr-5 pt-3.5">
          {rooms.map((r, i) => (
            <Link key={r.slug} href={`/${lang}/rooms/${r.slug}`} className="w-[132px] shrink-0 text-ink no-underline">
              <div className="relative h-[120px] overflow-hidden rounded-2xl">
                <PhotoBox photo={r.cover} lang={lang} sizes="132px" tint={tints[i % tints.length]} />
              </div>
              <p className="mt-2 text-[15px] font-semibold">{t(r.name, lang)}</p>
              <GuideCount n={guidesInRoom(r.slug).length} one={d.guideOne} many={d.guidesCount} />
            </Link>
          ))}
        </div>
      </section>

      {finds.length > 0 && (
        <section className="px-5 pt-6">
          <h2 className="mb-3 font-serif text-2xl">{d.whereToFind}</h2>
          <div className="overflow-hidden rounded-[18px] bg-white">
            {finds.map(({ room, item }) => (
              <Link
                key={`${room.slug}-${item.n}`}
                href={`/${lang}/rooms/${room.slug}#item-${item.n}`}
                className="flex min-h-[52px] items-center gap-3 border-t border-sand px-4 py-3.5 text-ink no-underline first:border-t-0"
              >
                <div className="grow">
                  <p className="text-[15px] font-medium">{t(item.name, lang)}</p>
                  <p className="text-[13px] text-muted">
                    {t(room.name, lang)} · {item.where && t(item.where, lang)}
                  </p>
                </div>
                <Icon name="chevronRight" size={16} className="text-[#9a8c80]" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="px-5 pt-6">
          <h2 className="mb-3 font-serif text-2xl">{d.guestsAsk}</h2>
          <div className="flex flex-col gap-2">
            {faqs.map((g) => (
              <Link
                key={g.slug}
                href={`/${lang}/guides/${g.slug}`}
                className="flex min-h-12 items-center gap-3 rounded-[14px] bg-sand px-4 py-3.5 text-ink no-underline"
              >
                <Icon name="question" size={18} className="shrink-0 text-pine" />
                <span className="text-[15px]">{g.faq && t(g.faq, lang)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="px-5 pt-6">
        <div className="rounded-[18px] bg-white p-4">
          <h2 className="text-[15px] font-semibold">{t(site.area.title, lang)}</h2>
          <p className="mt-0.5 text-[13px] leading-relaxed text-muted">{t(site.area.body, lang)}</p>
        </div>
      </section>

      <section className="px-5 pt-7">
        <ContactCard lang={lang} />
      </section>
    </main>
  );
}

function QuickCard({
  href,
  icon,
  title,
  sub,
  iconClass,
}: {
  href: string;
  icon: "pin" | "check" | "alert";
  title: string;
  sub: string;
  iconClass: string;
}) {
  return (
    <Link href={href} className="flex min-h-[108px] flex-col gap-2.5 rounded-[18px] bg-white p-4 text-ink no-underline">
      <span className={`flex size-[38px] items-center justify-center rounded-xl ${iconClass}`}>
        <Icon name={icon} />
      </span>
      <span className="text-[15px] font-semibold">{title}</span>
      <span className="-mt-1.5 text-[13px] text-muted">{sub}</span>
    </Link>
  );
}

function GuideCount({ n, one, many }: { n: number; one: string; many: string }) {
  if (n === 0) return null;
  return (
    <p className="text-[13px] text-muted">
      {n} {n === 1 ? one : many}
    </p>
  );
}
