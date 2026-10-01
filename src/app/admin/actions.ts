"use server";

import { headers } from "next/headers";
import { isLocale, type Locale } from "@/i18n/config";
import { site } from "@/content";
import { guestMessage } from "@/content/messages";
import { adminAuthorized } from "@/lib/admin-auth";
import { encodeStay, isDate } from "@/lib/stay";
import { fill, formatDate } from "@/lib/format";

export type LinkResult = { ok: true; link: string; message: string } | { ok: false; error: string } | null;

export async function createStayLink(_prev: LinkResult, form: FormData): Promise<LinkResult> {
  const h = await headers();
  // The proxy already asks for the password; checked again here because server
  // actions are reachable by POST and must never rely on the page being protected.
  if (!adminAuthorized(h.get("authorization"))) return { ok: false, error: "Not authorised." };

  const name = String(form.get("name") ?? "").trim().slice(0, 40);
  const arrive = String(form.get("arrive") ?? "");
  const depart = String(form.get("depart") ?? "");
  const code = String(form.get("code") ?? "").trim().slice(0, 20);
  const langRaw = String(form.get("lang") ?? "en");
  const lang: Locale = isLocale(langRaw) ? langRaw : "en";

  if (!isDate(arrive) || !isDate(depart)) return { ok: false, error: "Pick both dates." };
  if (depart < arrive) return { ok: false, error: "Departure is before arrival." };
  if (!code) return { ok: false, error: "Enter the key-box code." };

  const token = encodeStay({ name: name || undefined, arrive, depart, code, lang });
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";
  const link = `${proto}://${host}/${lang}/stay/${token}`;

  const tpl = guestMessage[lang];
  const message = fill(tpl.body, {
    greeting: name ? fill(tpl.hiName, { name }) : tpl.hi,
    link,
    checkIn: site.stay.checkIn,
    checkOut: site.stay.checkOut,
    date: formatDate(arrive, lang),
  });

  return { ok: true, link, message };
}
