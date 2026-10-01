"use client";

import { useState, type ReactNode } from "react";

/**
 * "Did this help?" A "No" reveals the contact card.
 * TODO: send the answer to Supabase so Jorn can see which guides need work.
 */
export function Feedback({
  labels,
  contact,
}: {
  labels: { question: string; yes: string; no: string; thanks: string; sorry: string };
  contact: ReactNode;
}) {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);

  if (vote === "no") {
    return (
      <div className="flex flex-col gap-3">
        <p className="text-center text-base font-semibold">{labels.sorry}</p>
        {contact}
      </div>
    );
  }

  return (
    <div className="rounded-[18px] bg-white p-[18px] text-center">
      {vote === "yes" ? (
        <p className="text-base font-semibold">{labels.thanks}</p>
      ) : (
        <>
          <p className="text-base font-semibold">{labels.question}</p>
          <div className="mt-3 flex justify-center gap-2.5">
            {(["yes", "no"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVote(v)}
                className="h-11 min-w-24 cursor-pointer rounded-xl border border-line bg-paper text-[15px] font-semibold"
              >
                {labels[v]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
