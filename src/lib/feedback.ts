"use server";

import { isLocale, localeNames, t } from "@/i18n/config";
import { getGuide, getRoom } from "@/content";
import { decodeStay } from "@/lib/stay";
import { formatDate } from "@/lib/format";

// Slack mrkdwn: escape the three control characters so guests can't inject links or mentions.
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Context line for Jorn from the guest's stay link, if they opened it on this phone. Never includes the door code. */
function stayLine(token: string | undefined): string {
  const stay = token ? decodeStay(token) : null;
  if (!stay) return "_No stay link opened on this phone._";
  const nights = Math.round((Date.parse(stay.depart) - Date.parse(stay.arrive)) / 86_400_000);
  const who = stay.name ? ` · booked as ${esc(stay.name)}` : "";
  return `Stay: ${formatDate(stay.arrive, "en")} → ${formatDate(stay.depart, "en")} (${nights} night${nights === 1 ? "" : "s"})${who}`;
}

/** Which page the guest opened the feedback form from, in plain words. */
function pageLine(from: string | undefined): string {
  if (!from || !from.startsWith("/")) return "_Opened from: unknown page_";
  const [, , section, slug] = from.slice(0, 200).split("/");
  let where: string;
  if (!section) where = "home page";
  else if (section === "rooms" && slug) where = `${t(getRoom(slug)?.name ?? { en: slug }, "en")} (room page)`;
  else if (section === "guides" && slug) where = `${t(getGuide(slug)?.title ?? { en: slug }, "en")} guide`;
  else if (section === "stay") where = "their stay page (door code / Wi-Fi)";
  else if (section === "arrival") where = "arrival page";
  else if (section === "checkout") where = "check-out page";
  else if (section === "help") where = "help page";
  else where = from;
  return `Opened from: ${esc(where)}`;
}

async function post(text: string): Promise<boolean> {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * "This guide didn't help": sent on "No", and again with the comment if the guest writes one.
 * Only "No" answers are sent, so Slack only pings for guides that need work.
 */
export async function sendFeedback(input: { guide: string; lang: string; comment?: string; stay?: string }): Promise<boolean> {
  const guide = getGuide(input.guide);
  if (!guide || !isLocale(input.lang)) return false;

  const comment = (input.comment ?? "").trim().slice(0, 500);
  const title = t(guide.title, "en");
  const lang = localeNames[input.lang];
  const head = comment
    ? `💬 *${title}* (${lang}): ${esc(comment)}`
    : `👎 A guest said the *${title}* guide didn't help (${lang}).`;
  return post(`${head}\n${stayLine(input.stay)}`);
}

/** General feedback from the footer form. */
export async function sendGeneralFeedback(input: {
  name?: string;
  message: string;
  lang: string;
  /** Path of the page the guest was on when they tapped "Send us feedback". */
  from?: string;
  stay?: string;
}): Promise<boolean> {
  const message = input.message.trim().slice(0, 1000);
  if (!message || !isLocale(input.lang)) return false;
  const name = (input.name ?? "").trim().slice(0, 60);

  const from = name ? ` from *${esc(name)}*` : "";
  const quoted = esc(message)
    .split("\n")
    .map((l) => `> ${l}`)
    .join("\n");
  return post(`📝 Guest feedback${from} (${localeNames[input.lang]})\n${quoted}\n${pageLine(input.from)}\n${stayLine(input.stay)}`);
}
