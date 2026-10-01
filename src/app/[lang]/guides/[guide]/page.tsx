import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, isLocale, locales, t } from "@/i18n";
import { getGuide, getRoom, guides } from "@/content";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { PhotoBox } from "@/components/PhotoBox";
import { StepList } from "@/components/StepList";
import { Feedback } from "@/components/Feedback";
import { ContactCard } from "@/components/ContactCard";

export function generateStaticParams() {
  return locales.flatMap((lang) => guides.map((g) => ({ lang, guide: g.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/guides/[guide]">): Promise<Metadata> {
  const { lang, guide } = await params;
  const g = getGuide(guide);
  return g && isLocale(lang) ? { title: t(g.title, lang) } : {};
}

export default async function GuidePage({ params }: PageProps<"/[lang]/guides/[guide]">) {
  const { lang, guide: slug } = await params;
  const guide = getGuide(slug);
  if (!isLocale(lang) || !guide) notFound();
  const d = getDictionary(lang);
  const room = getRoom(guide.room);
  const related = (guide.related ?? []).map(getGuide).filter((g) => g !== undefined);

  return (
    <main className="pb-10">
      <Header
        lang={lang}
        back={room ? { href: `/${lang}/rooms/${room.slug}`, label: t(room.name, lang) } : { href: `/${lang}`, label: d.home }}
      />

      <section className="px-5 pt-1">
        {guide.cover && (
          <div className="relative h-[200px] overflow-hidden rounded-[22px]">
            <PhotoBox photo={guide.cover} lang={lang} priority />
          </div>
        )}
        <h1 className="mt-4 font-serif text-[32px] leading-tight">{t(guide.title, lang)}</h1>
        {guide.intro && <p className="mt-2 text-base leading-relaxed text-ink-soft">{t(guide.intro, lang)}</p>}
      </section>

      <section className="px-5 pt-5">
        <div className="rounded-[18px] bg-pine px-[18px] py-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-wider opacity-85">{d.shortVersion}</p>
          <p className="mt-1.5 text-base leading-relaxed">{t(guide.short, lang)}</p>
        </div>
      </section>

      <section className="px-5 pt-7">
        <h2 className="mb-3.5 font-serif text-2xl">{d.stepByStep}</h2>
        <StepList steps={guide.steps} lang={lang} />
      </section>

      {guide.video && (
        <section className="px-5 pt-5">
          <video src={guide.video} controls playsInline preload="none" className="w-full rounded-[18px] bg-ink" />
        </section>
      )}

      {guide.troubles && guide.troubles.length > 0 && (
        <section className="px-5 pt-7">
          <h2 className="mb-3 font-serif text-2xl">{d.troubleshooting}</h2>
          <div className="overflow-hidden rounded-[18px] bg-white">
            {guide.troubles.map((tr, i) => (
              <details key={i} className="border-t border-sand first:border-t-0" open={i === 0}>
                <summary className="flex min-h-[52px] cursor-pointer items-center gap-3 px-4 py-3.5">
                  <span className="grow text-[15px] font-semibold">{t(tr.problem, lang)}</span>
                  <Icon name="plus" size={18} className="toggle-sign text-muted transition-transform" />
                </summary>
                <p className="px-4 pb-4 text-[15px] leading-relaxed text-ink-soft">{t(tr.fix, lang)}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="px-5 pt-7">
        <Feedback
          guide={guide.slug}
          lang={lang}
          labels={{
            question: d.didThisHelp,
            yes: d.yes,
            no: d.no,
            thanks: d.thanks,
            sorry: d.sorry,
            commentPrompt: d.commentPrompt,
            send: d.send,
            sent: d.sent,
            needHelpNow: d.needHelpNow,
          }}
          contact={<ContactCard lang={lang} />}
        />
      </section>

      {related.length > 0 && (
        <section className="pl-5 pt-7">
          <h2 className="mb-3 font-serif text-[22px]">{d.relatedGuides}</h2>
          <div className="flex gap-2.5 overflow-x-auto pr-5">
            {related.map((g) => (
              <Link
                key={g.slug}
                href={`/${lang}/guides/${g.slug}`}
                className="flex min-h-11 shrink-0 items-center rounded-[14px] bg-white px-4 py-3 text-[15px] font-medium text-ink no-underline"
              >
                {t(g.title, lang)}
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
