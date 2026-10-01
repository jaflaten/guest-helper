"use client";

import { useState } from "react";

export function CopyButton({ value, label, doneLabel }: { value: string; label: string; doneLabel: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setDone(true);
          setTimeout(() => setDone(false), 2000);
        } catch {
          /* Clipboard blocked: the password is still visible to type. */
        }
      }}
      className="min-h-8 cursor-pointer rounded-full bg-white/20 px-3 text-xs font-semibold text-white"
    >
      {done ? doneLabel : label}
    </button>
  );
}
