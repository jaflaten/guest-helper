"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { SearchEntry } from "@/content";
import { Icon } from "./Icon";

/** Instant search over guides, rooms and "where is it" items. Runs in the browser, works offline. */
export function Search({ entries, placeholder, empty }: { entries: SearchEntry[]; placeholder: string; empty: string }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (q.length < 2) return [];
    return entries
      .filter((e) => `${e.title} ${e.detail ?? ""}`.toLowerCase().includes(q))
      .slice(0, 8);
  }, [entries, q]);

  return (
    <div>
      <label className="flex h-[50px] items-center gap-2.5 rounded-[14px] border border-line bg-white px-3.5">
        <Icon name="search" size={18} className="text-muted" />
        <span className="sr-only">{placeholder}</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="grow bg-transparent text-[15px] outline-none placeholder:text-muted"
        />
      </label>
      {q.length >= 2 && (
        <div className="mt-2 overflow-hidden rounded-[14px] border border-line bg-white">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-muted">{empty}</p>
          ) : (
            results.map((r) => (
              <Link key={r.href + r.title} href={r.href} className="flex min-h-12 flex-col justify-center border-t border-sand px-4 py-2.5 text-ink no-underline first:border-t-0">
                <span className="text-[15px] font-medium">{r.title}</span>
                {r.detail && <span className="text-[13px] text-muted">{r.detail}</span>}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
