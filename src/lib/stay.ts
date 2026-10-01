import "server-only";
import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";
import { isLocale, type Locale } from "@/i18n/config";

/**
 * A per-guest stay link carries its booking inside the token, encrypted with
 * TOKEN_SECRET (AES-256-GCM). No database: the server decrypts the token and
 * checks today's date. Nobody can read or forge a token without the secret.
 */
export type Stay = {
  /** Guest's first name, optional. */
  name?: string;
  /** Arrival date, YYYY-MM-DD (Norwegian time). */
  arrive: string;
  /** Departure date, YYYY-MM-DD. */
  depart: string;
  /** Key-box code for this stay. */
  code: string;
  lang: Locale;
};

type Packed = { n?: string; a: string; d: string; c: string; l: string };

function key(): Buffer {
  const secret = process.env.TOKEN_SECRET;
  if (!secret || secret.length < 16) throw new Error("TOKEN_SECRET is not set (min 16 characters)");
  return createHash("sha256").update(secret).digest();
}

export const staySecretConfigured = () => (process.env.TOKEN_SECRET?.length ?? 0) >= 16;

export function encodeStay(stay: Stay): string {
  const packed: Packed = { a: stay.arrive, d: stay.depart, c: stay.code, l: stay.lang };
  if (stay.name) packed.n = stay.name;
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key(), iv);
  const body = Buffer.concat([cipher.update(JSON.stringify(packed), "utf8"), cipher.final()]);
  return Buffer.concat([iv, cipher.getAuthTag(), body]).toString("base64url");
}

export function decodeStay(token: string): Stay | null {
  try {
    const raw = Buffer.from(token, "base64url");
    if (raw.length < 29) return null;
    const decipher = createDecipheriv("aes-256-gcm", key(), raw.subarray(0, 12));
    decipher.setAuthTag(raw.subarray(12, 28));
    const json = Buffer.concat([decipher.update(raw.subarray(28)), decipher.final()]).toString("utf8");
    const p = JSON.parse(json) as Packed;
    if (!isDate(p.a) || !isDate(p.d) || !p.c) return null;
    return { name: p.n, arrive: p.a, depart: p.d, code: p.c, lang: isLocale(p.l) ? p.l : "en" };
  } catch {
    return null;
  }
}

export const isDate = (s: unknown): s is string => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s);

const TZ = "Europe/Oslo";

/** Current date and time in Norway as "YYYY-MM-DD" and "HH:MM". */
export function nowInNorway(now = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: TZ,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(now)
      .map((p) => [p.type, p.value]),
  );
  return { date: `${parts.year}-${parts.month}-${parts.day}`, time: `${parts.hour}:${parts.minute}` };
}

export type StayPhase = "before" | "active" | "ended";

/**
 * "before": the door code is hidden until check-in time on the arrival day.
 * "active": from check-in time on arrival day until the end of the departure day.
 * "ended": the day after departure.
 */
export function stayPhase(stay: Stay, checkInTime: string, now = new Date()): StayPhase {
  const { date, time } = nowInNorway(now);
  if (date < stay.arrive || (date === stay.arrive && time < checkInTime)) return "before";
  if (date > stay.depart) return "ended";
  return "active";
}
