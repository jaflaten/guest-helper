"use client";

import { usePathname, useRouter } from "next/navigation";
import { localeNames, locales, type Locale } from "@/i18n/config";

/**
 * Language picker. A native <select> scales to any number of languages and
 * opens the phone's own picker. Keeps the guest on the same page and remembers the choice.
 */
export function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const rest = pathname.replace(/^\/[^/]+/, "");

  return (
    <label className="relative flex h-9 items-center rounded-full bg-sand-deep pl-3 pr-8 text-[13px] font-semibold text-ink">
      <span className="sr-only">{label}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="mr-1.5 text-muted">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
      <select
        value={lang}
        onChange={(e) => {
          const code = e.target.value;
          document.cookie = `lang=${code}; path=/; max-age=31536000; samesite=lax`;
          router.push(`/${code}${rest}${window.location.search}`);
        }}
        className="absolute inset-0 cursor-pointer opacity-0"
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeNames[code]}
          </option>
        ))}
      </select>
      {localeNames[lang]}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" className="pointer-events-none absolute right-3 text-muted">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </label>
  );
}
