"use client";

import { useActionState, useState } from "react";
import { localeNames, locales } from "@/i18n/config";
import { createStayLink, type LinkResult } from "./actions";

const field = "mt-1 h-12 w-full rounded-xl border border-line bg-white px-3 text-base";

export function StayLinkForm({
  arrive = "",
  depart = "",
  hasDefaultCode = false,
}: {
  arrive?: string;
  depart?: string;
  hasDefaultCode?: boolean;
}) {
  const [result, action, pending] = useActionState<LinkResult, FormData>(createStayLink, null);

  return (
    <div className="flex flex-col gap-5">
      <form id="create" action={action} className="flex scroll-mt-4 flex-col gap-4 rounded-[18px] bg-white p-5">
        <label className="text-sm font-semibold">
          Guest first name <span className="font-normal text-muted">(optional)</span>
          <input name="name" autoComplete="off" className={field} />
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="text-sm font-semibold">
            Arrival
            <input name="arrive" type="date" required defaultValue={arrive} className={field} />
          </label>
          <label className="text-sm font-semibold">
            Departure
            <input name="depart" type="date" required defaultValue={depart} className={field} />
          </label>
        </div>
        <label className="text-sm font-semibold">
          Key-box code {hasDefaultCode && <span className="font-normal text-muted">(empty = your usual code)</span>}
          <input name="code" required={!hasDefaultCode} autoComplete="off" inputMode="numeric" className={`${field} font-mono`} />
        </label>
        <label className="text-sm font-semibold">
          Guest language
          <select name="lang" defaultValue="en" className={field}>
            {locales.map((l) => (
              <option key={l} value={l}>
                {localeNames[l]}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          disabled={pending}
          className="h-12 cursor-pointer rounded-xl bg-pine text-[15px] font-semibold text-white disabled:opacity-60"
        >
          {pending ? "Creating…" : "Create guest link"}
        </button>
        {result && !result.ok && <p className="text-sm font-semibold text-alert">{result.error}</p>}
      </form>

      {result?.ok && (
        <div className="flex flex-col gap-3 rounded-[18px] bg-white p-5">
          <h2 className="font-serif text-xl">Message to send</h2>
          <textarea readOnly value={result.message} rows={9} className="w-full rounded-xl border border-line bg-paper p-3 text-sm leading-relaxed" />
          <div className="flex flex-wrap gap-2">
            <CopyButton text={result.message} label="Copy message" primary />
            <CopyButton text={result.link} label="Copy link only" />
            <a href={result.link} target="_blank" rel="noreferrer" className="flex h-11 items-center rounded-xl border border-line px-4 text-sm font-semibold">
              Preview
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function CopyButton({ text, label, primary }: { text: string; label: string; primary?: boolean }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 2000);
        } catch {
          /* Clipboard blocked: the text can still be selected by hand. */
        }
      }}
      className={`h-11 cursor-pointer rounded-xl px-4 text-sm font-semibold ${primary ? "bg-ink text-paper" : "border border-line"}`}
    >
      {done ? "Copied ✓" : label}
    </button>
  );
}
