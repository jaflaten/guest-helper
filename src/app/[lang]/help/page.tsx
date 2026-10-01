import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, t } from "@/i18n";
import { guides } from "@/content";
import { Header } from "@/components/Header";
import { ContactCard } from "@/components/ContactCard";

export default async function HelpPage({ params }: PageProps<"/[lang]/help">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);
  const withTroubles = guides.filter((g) => g.troubles?.length);

  return (
    <main className="pb-9">
      <Header lang={lang} back={{ href: `/${lang}`, label: d.home }} />
      <section className="px-5 pt-1">
        <h1 className="font-serif text-[32px] leading-tight">{d.help}</h1>
      </section>

      <section className="px-5 pt-5">
        <div className="rounded-[18px] bg-alert-soft p-4">
          <h2 className="text-[15px] font-semibold text-alert">{d.emergency}</h2>
          <p className="mt-1 text-lg font-semibold">{d.emergencyNumbers}</p>
        </div>
      </section>

      {withTroubles.length > 0 && (
        <section className="px-5 pt-6">
          <h2 className="mb-3 font-serif text-2xl">{d.troubleshooting}</h2>
          <div className="flex flex-col gap-2">
            {withTroubles.map((g) => (
              <Link key={g.slug} href={`/${lang}/guides/${g.slug}`} className="flex min-h-12 items-center rounded-[14px] bg-white px-4 py-3 text-[15px] font-medium text-ink no-underline">
                {t(g.title, lang)}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="px-5 pt-7">
        <ContactCard lang={lang} />
      </section>
    </main>
  );
}
