"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Small "Send us feedback" link at the bottom of every guest page (hidden on the feedback page itself). */
export function FeedbackFooter({ lang, label }: { lang: string; label: string }) {
  const pathname = usePathname();
  if (pathname.endsWith("/feedback")) return null;
  // Tell the feedback form which page the guest came from. Stay links are cut to "/stay"
  // so the private token never ends up in a URL or in Slack.
  const from = pathname.includes("/stay/") ? `/${lang}/stay` : pathname;
  return (
    <footer className="mx-auto max-w-xl px-5 pb-10 text-center">
      <Link href={`/${lang}/feedback?from=${encodeURIComponent(from)}`} className="inline-flex min-h-11 items-center text-sm font-semibold">
        {label}
      </Link>
    </footer>
  );
}
