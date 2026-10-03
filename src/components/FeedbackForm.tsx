"use client";

import { useState } from "react";
import { sendGeneralFeedback } from "@/lib/feedback";
import { savedStayToken } from "./StayLink";

type Labels = { name: string; message: string; send: string; thanks: string; error: string };

export function FeedbackForm({ lang, labels }: { lang: string; labels: Labels }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  if (state === "sent") {
    return <p className="rounded-[18px] bg-pine-soft p-5 text-[15px] font-semibold text-pine-dark">{labels.thanks}</p>;
  }

  const field = "mt-1 w-full rounded-xl border border-line bg-white px-3 text-base text-ink";

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        setState("sending");
        try {
          const from = new URLSearchParams(window.location.search).get("from") ?? undefined;
          const ok = await sendGeneralFeedback({ name, message, lang, from, stay: savedStayToken() });
          setState(ok ? "sent" : "error");
        } catch {
          setState("error");
        }
      }}
    >
      <label className="text-sm font-semibold">
        {labels.name}
        <input value={name} onChange={(e) => setName(e.target.value)} maxLength={60} autoComplete="given-name" className={`${field} h-12`} />
      </label>
      <label className="text-sm font-semibold">
        {labels.message}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={1000}
          rows={6}
          className={`${field} py-3 leading-relaxed`}
        />
      </label>
      {state === "error" && <p className="text-sm font-semibold text-alert">{labels.error}</p>}
      <button
        type="submit"
        disabled={state === "sending"}
        className="h-12 cursor-pointer rounded-xl bg-pine text-[15px] font-semibold text-white disabled:opacity-60"
      >
        {labels.send}
      </button>
    </form>
  );
}
