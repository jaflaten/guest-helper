"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

/** EN / NO / DE pills. Keeps the guest on the same page and remembers the choice. */
export function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/[^/]+/, "");

  return (
    <nav aria-label={label} className="flex gap-0.5 rounded-full bg-sand-deep p-[3px]">
      {locales.map((code) => {
        const active = code === lang;
        return (
          <Link
            key={code}
            href={`/${code}${rest}`}
            hrefLang={code}
            aria-current={active ? "true" : undefined}
            onClick={() => {
              document.cookie = `lang=${code}; path=/; max-age=31536000; samesite=lax`;
            }}
            className={`flex h-8 min-w-10 items-center justify-center rounded-full px-2 text-[13px] font-semibold ${
              active ? "bg-white text-ink" : "text-muted"
            }`}
          >
            {code.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
