import Link from "next/link";
import { getDictionary, type Locale } from "@/i18n";
import { site } from "@/content";
import { Icon } from "./Icon";
import { LanguageSwitcher } from "./LanguageSwitcher";

/** Top bar. On the home page it shows the apartment name; elsewhere a back link. */
export function Header({ lang, back }: { lang: Locale; back?: { href: string; label: string } }) {
  const d = getDictionary(lang);
  return (
    <header className="flex items-center justify-between px-5 pb-3 pt-[18px]">
      {back ? (
        <Link href={back.href} className="flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-ink no-underline">
          <Icon name="chevronLeft" />
          {back.label}
        </Link>
      ) : (
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-[10px] bg-pine text-white">
            <Icon name="home" />
          </span>
          <span className="text-[15px] font-semibold">{site.name}</span>
        </div>
      )}
      <LanguageSwitcher lang={lang} label={d.language} />
    </header>
  );
}
