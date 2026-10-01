"use client";

import { useState, type ReactNode } from "react";
import type { Marker } from "@/content";

export type MarkerMode = "jump" | "popover";

/**
 * A room photo with numbered dots.
 * - "jump": tapping a dot scrolls to that item in the list below (and highlights it).
 * - "popover": tapping a dot shows the item's name on the photo, with a link to the list.
 * Both are built so we can compare them on a real phone before choosing.
 */
export function MarkedPhoto({
  photo,
  markers,
  labels,
  mode,
  seeInList,
}: {
  photo: ReactNode;
  markers: Marker[];
  labels: Record<number, string>;
  mode: MarkerMode;
  seeInList: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
      {photo}
      {markers.map((m) => {
        const style = { left: `${m.x}%`, top: `${m.y}%` };
        const dot =
          "absolute flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-pine text-sm font-bold text-white shadow-md no-underline";

        if (mode === "jump") {
          return (
            <a key={m.n} href={`#item-${m.n}`} style={style} className={dot} aria-label={labels[m.n] ?? String(m.n)}>
              {m.n}
            </a>
          );
        }

        const isOpen = open === m.n;
        return (
          <div key={m.n}>
            <button
              type="button"
              style={style}
              className={`${dot} cursor-pointer ${isOpen ? "bg-ink" : ""}`}
              aria-expanded={isOpen}
              aria-label={labels[m.n] ?? String(m.n)}
              onClick={() => setOpen(isOpen ? null : m.n)}
            >
              {m.n}
            </button>
            {isOpen && (
              <div
                style={{ left: `${Math.min(Math.max(m.x, 25), 75)}%`, top: `${m.y}%` }}
                className={`absolute z-10 w-44 -translate-x-1/2 rounded-xl bg-white p-3 text-sm shadow-lg ${
                  m.y > 50 ? "-translate-y-[calc(100%+26px)]" : "translate-y-[26px]"
                }`}
              >
                <p className="font-semibold text-ink">{labels[m.n]}</p>
                <a href={`#item-${m.n}`} className="mt-1 inline-block text-[13px] font-semibold">
                  {seeInList}
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
