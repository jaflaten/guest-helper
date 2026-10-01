import type { ReactNode } from "react";
import type { Marker } from "@/content";

/**
 * A room photo with numbered dots. Tapping a dot jumps to that item in the list
 * below, which is highlighted (see `.room-item:target` in globals.css).
 */
export function MarkedPhoto({
  photo,
  markers,
  labels,
}: {
  photo: ReactNode;
  markers: Marker[];
  labels: Record<number, string>;
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
      {photo}
      {markers.map((m) => (
        <a
          key={m.n}
          href={`#item-${m.n}`}
          style={{ left: `${m.x}%`, top: `${m.y}%` }}
          aria-label={labels[m.n] ?? String(m.n)}
          className="absolute flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-pine text-sm font-bold text-white no-underline shadow-md"
        >
          {m.n}
        </a>
      ))}
    </div>
  );
}
