"use server";

import { isLocale, localeNames, t } from "@/i18n/config";
import { getGuide } from "@/content";

/**
 * Sends a "this guide didn't help" note to Slack via an incoming webhook
 * (SLACK_WEBHOOK_URL). Only "No" answers are sent, so Slack only pings for guides that need work.
 */
export async function sendFeedback(input: { guide: string; lang: string; comment?: string }): Promise<boolean> {
  const url = process.env.SLACK_WEBHOOK_URL;
  const guide = getGuide(input.guide);
  if (!url || !guide || !isLocale(input.lang)) return false;

  const comment = (input.comment ?? "").trim().slice(0, 500);
  // Slack mrkdwn: escape the three control characters so guests can't inject links or mentions.
  const safe = comment.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const title = t(guide.title, "en");
  const lang = localeNames[input.lang];

  const text = comment
    ? `💬 *${title}* (${lang}): ${safe}`
    : `👎 A guest said the *${title}* guide didn't help (${lang}).`;

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
