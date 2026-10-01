import { notFound } from "next/navigation";
import { getDictionary, isLocale, t } from "@/i18n";
import { arrival } from "@/content";
import { Header } from "@/components/Header";
import { StepList } from "@/components/StepList";
import { ContactCard } from "@/components/ContactCard";

export default async function ArrivalPage({ params }: PageProps<"/[lang]/arrival">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return (
    <main className="pb-9">
      <Header lang={lang} back={{ href: `/${lang}`, label: d.home }} />
      <section className="px-5 pt-1">
        <h1 className="font-serif text-[32px] leading-tight">{t(arrival.title, lang)}</h1>
        {arrival.intro && <p className="mt-2 text-base leading-relaxed text-ink-soft">{t(arrival.intro, lang)}</p>}
        <p className="mt-4 rounded-[14px] bg-clay-soft px-4 py-3 text-[15px] text-ink">{d.codeNote}</p>
      </section>
      <section className="px-5 pt-5">
        <StepList steps={arrival.steps} lang={lang} />
      </section>
      <section className="px-5 pt-7">
        <ContactCard lang={lang} />
      </section>
    </main>
  );
}
