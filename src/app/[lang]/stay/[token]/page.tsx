import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import type { Metadata } from "next";
import { getDictionary, isLocale } from "@/i18n";
import { site } from "@/content";
import { decodeStay, stayPhase } from "@/lib/stay";
import { fill, formatDate } from "@/lib/format";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { ContactCard } from "@/components/ContactCard";
import { RememberStay } from "@/components/StayLink";

// Personal page: never indexed, and the token never leaks via the Referer header.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  referrer: "no-referrer",
};

export default async function StayPage({ params }: PageProps<"/[lang]/stay/[token]">) {
  const { lang, token } = await params;
  if (!isLocale(lang)) notFound();
  await connection(); // depends on the current time: always render per request
  const d = getDictionary(lang);
  const stay = decodeStay(token);

  if (!stay) {
    return (
      <main className="pb-9">
        <Header lang={lang} back={{ href: `/${lang}`, label: d.home }} />
        <section className="px-5 pt-4">
          <p className="rounded-[18px] bg-alert-soft p-4 text-[15px]">{d.stayInvalid}</p>
        </section>
        <section className="px-5 pt-6">
          <ContactCard lang={lang} />
        </section>
      </main>
    );
  }

  const phase = stayPhase(stay, site.stay.checkIn);
  const wifiPassword = process.env.WIFI_PASSWORD;

  return (
    <main className="pb-9">
      <Header lang={lang} back={{ href: `/${lang}`, label: d.home }} />
      {phase !== "ended" && <RememberStay token={token} depart={stay.depart} />}

      <section className="px-5 pt-1">
        <p className="text-[13px] uppercase tracking-wider text-muted">{d.stayTitle}</p>
        <h1 className="mt-1 font-serif text-[32px] leading-tight">
          {stay.name ? fill(d.stayHello, { name: stay.name }) : d.stayHelloNoName}
        </h1>
        <p className="mt-2 text-base text-ink-soft">
          {formatDate(stay.arrive, lang)} – {formatDate(stay.depart, lang)}
        </p>
      </section>

      {phase === "ended" ? (
        <section className="px-5 pt-5">
          <p className="rounded-[18px] bg-white p-4 text-[15px]">{d.stayEnded}</p>
        </section>
      ) : (
        <>
          <section className="px-5 pt-5">
            <div className="rounded-[18px] bg-pine p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider opacity-85">{d.doorCode}</p>
              {phase === "active" ? (
                <p className="mt-1 font-mono text-[40px] font-semibold tracking-[0.2em]">{stay.code}</p>
              ) : (
                <p className="mt-2 text-base leading-relaxed">
                  {fill(d.codeLater, { date: formatDate(stay.arrive, lang), time: site.stay.checkIn })}
                </p>
              )}
            </div>
          </section>

          <section className="px-5 pt-3">
            <div className="rounded-[18px] bg-white p-4">
              <div className="flex items-center gap-2 text-pine">
                <Icon name="wifi" size={18} />
                <p className="text-xs font-semibold uppercase tracking-wider">{d.wifi}</p>
              </div>
              <p className="mt-2 text-[15px]">
                <span className="text-muted">{d.wifiNetwork}: </span>
                <span className="font-semibold">{site.wifi.network}</span>
              </p>
              {phase === "active" && wifiPassword && (
                <p className="mt-1 text-[15px]">
                  <span className="text-muted">{d.wifiPassword}: </span>
                  <span className="select-all font-mono font-semibold">{wifiPassword}</span>
                </p>
              )}
            </div>
          </section>

          <section className="flex flex-col gap-2 px-5 pt-3">
            <Link href={`/${lang}/arrival`} className="flex min-h-12 items-center gap-3 rounded-[14px] bg-sand px-4 py-3 text-ink no-underline">
              <Icon name="pin" size={18} className="text-pine" />
              <span className="grow text-[15px] font-medium">{d.openArrival}</span>
              <Icon name="chevronRight" size={16} className="text-[#9a8c80]" />
            </Link>
            <Link href={`/${lang}`} className="flex min-h-12 items-center gap-3 rounded-[14px] bg-sand px-4 py-3 text-ink no-underline">
              <Icon name="home" size={18} className="text-pine" />
              <span className="grow text-[15px] font-medium">{d.openGuide}</span>
              <Icon name="chevronRight" size={16} className="text-[#9a8c80]" />
            </Link>
          </section>

          <section className="px-5 pt-4">
            <p className="text-[13px] leading-relaxed text-muted">
              {fill(d.checkoutBy, { time: site.stay.checkOut, date: formatDate(stay.depart, lang) })} {d.keepLink}
            </p>
          </section>
        </>
      )}

      <section className="px-5 pt-7">
        <ContactCard lang={lang} />
      </section>
    </main>
  );
}
