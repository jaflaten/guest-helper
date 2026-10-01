import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { htmlLang, isLocale, locales } from "@/i18n/config";
import { guides, rooms, site } from "@/content";
import { OfflineSupport } from "@/components/OfflineSupport";
import { FeedbackFooter } from "@/components/FeedbackFooter";
import { getDictionary } from "@/i18n";
// Fonts are self-hosted (bundled with the site), so they also work offline.
import "@fontsource-variable/figtree";
import "@fontsource-variable/newsreader";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: { default: site.name, template: `%s · ${site.name}` },
  description: "Guest guide",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#f7f2eb" };

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={htmlLang[lang]}>
      <body className="font-sans antialiased">
        <div className="mx-auto min-h-dvh max-w-xl">{children}</div>
        <FeedbackFooter lang={lang} label={getDictionary(lang).feedbackLink} />
        <OfflineSupport
          urls={[
            `/${lang}`,
            `/${lang}/arrival`,
            `/${lang}/checkout`,
            `/${lang}/help`,
            ...rooms.map((r) => `/${lang}/rooms/${r.slug}`),
            ...guides.map((g) => `/${lang}/guides/${g.slug}`),
          ]}
        />
      </body>
    </html>
  );
}
