import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary, isLocale, locales } from "@/i18n";
import { Header } from "@/components/Header";
import { FeedbackForm } from "@/components/FeedbackForm";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/feedback">): Promise<Metadata> {
  const { lang } = await params;
  return isLocale(lang) ? { title: getDictionary(lang).feedbackTitle } : {};
}

export default async function FeedbackPage({ params }: PageProps<"/[lang]/feedback">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDictionary(lang);

  return (
    <main className="pb-6">
      <Header lang={lang} back={{ href: `/${lang}`, label: d.home }} />
      <section className="px-5 pt-1">
        <h1 className="font-serif text-[32px] leading-tight">{d.feedbackTitle}</h1>
        <p className="mt-2 text-base leading-relaxed text-ink-soft">{d.feedbackIntro}</p>
      </section>
      <section className="px-5 pt-5">
        <FeedbackForm
          lang={lang}
          labels={{ name: d.nameLabel, message: d.messageLabel, send: d.send, thanks: d.feedbackThanks, error: d.feedbackError }}
        />
      </section>
    </main>
  );
}
