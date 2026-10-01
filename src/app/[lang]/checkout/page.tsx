import { notFound } from "next/navigation";
import { getDictionary, isLocale, t } from "@/i18n";
import { checkout } from "@/content";
import { Header } from "@/components/Header";
import { StepList } from "@/components/StepList";

export default async function CheckoutPage({ params }: PageProps<"/[lang]/checkout">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return (
    <main className="pb-9">
      <Header lang={lang} back={{ href: `/${lang}`, label: d.home }} />
      <section className="px-5 pt-1">
        <h1 className="font-serif text-[32px] leading-tight">{t(checkout.title, lang)}</h1>
        {checkout.intro && <p className="mt-2 text-base leading-relaxed text-ink-soft">{t(checkout.intro, lang)}</p>}
      </section>
      <section className="px-5 pt-5">
        <StepList steps={checkout.steps} lang={lang} />
      </section>
    </main>
  );
}
