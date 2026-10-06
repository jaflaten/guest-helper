"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { wifiPasswordForStay } from "@/lib/wifi";

const KEY = "guest-stay";
type Saved = { token: string; depart: string };

function read(): Saved | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Saved) : null;
  } catch {
    return null;
  }
}

/** The guest's stay token, if they opened their stay link on this phone. Sent along with feedback. */
export function savedStayToken(): string | undefined {
  return read()?.token;
}

/** On the stay page: remember the guest's link on this phone until departure. */
export function RememberStay({ token, depart }: { token: string; depart: string }) {
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ token, depart } satisfies Saved));
    } catch {
      /* Private mode: nothing to remember. */
    }
  }, [token, depart]);
  return null;
}

/** On the home page: a shortcut back to "Your stay" for guests who opened their link before. */
export function StayShortcut({ lang, title, sub }: { lang: string; title: string; sub: string }) {
  const [saved, setSaved] = useState<Saved | null>(null);

  useEffect(() => {
    const s = read();
    const today = new Date().toISOString().slice(0, 10);
    // Reading localStorage must happen after hydration, so this effect sets state once.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (s && s.depart >= today) setSaved(s);
  }, []);

  if (!saved) return null;
  return (
    <Link
      href={`/${lang}/stay/${saved.token}`}
      className="flex min-h-14 items-center gap-3 rounded-[18px] bg-clay-soft px-4 py-3 text-ink no-underline"
    >
      <span className="flex size-[38px] items-center justify-center rounded-xl bg-white text-clay">
        <Icon name="home" />
      </span>
      <span className="grow">
        <span className="block text-[15px] font-semibold">{title}</span>
        <span className="block text-[13px] text-muted">{sub}</span>
      </span>
      <Icon name="chevronRight" size={16} className="text-[#9a8c80]" />
    </Link>
  );
}

/**
 * Home page Wi-Fi card: shows the password if the guest opened their personal stay link on this phone
 * and the stay is under way; otherwise the usual "password is in your booking message" note.
 */
export function WifiPassword({ note, label }: { note: string; label: string }) {
  const [password, setPassword] = useState<string | null>(null);

  useEffect(() => {
    const token = savedStayToken();
    if (!token) return;
    let cancelled = false;
    wifiPasswordForStay(token)
      .then((p) => {
        if (!cancelled) setPassword(p);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  if (!password) return <>{note}</>;
  return (
    <>
      {label}: <span className="select-all font-mono text-[13px] font-semibold">{password}</span>
    </>
  );
}
