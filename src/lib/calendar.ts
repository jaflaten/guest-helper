import "server-only";
import ical from "node-ical";
import { nowInNorway } from "./stay";

export type Source = "airbnb" | "booking";

export type Booking = {
  source: Source;
  /** Arrival day, YYYY-MM-DD. */
  arrive: string;
  /** Departure day, YYYY-MM-DD (iCal DTEND is exclusive, so it equals the check-out morning). */
  depart: string;
  nights: number;
  /** Airbnb links each reservation; Booking.com doesn't. */
  url?: string;
  /** Airbnb marks owner blocks "Not available"; Booking.com marks everything that way. */
  blocked: boolean;
};

export type CalendarResult = { bookings: Booking[]; errors: string[]; configured: boolean };

const pad = (n: number) => String(n).padStart(2, "0");
// All-day iCal dates are parsed to local midnight, so local getters give the right calendar day.
const isoDate = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

async function readFeed(source: Source, url: string): Promise<Booking[]> {
  const res = await fetch(url, { headers: { "User-Agent": "guest-helper/1.0 (+ical)" }, cache: "no-store" });
  if (!res.ok) throw new Error(`${source}: calendar returned HTTP ${res.status}`);
  const data = ical.parseICS(await res.text());

  const out: Booking[] = [];
  for (const c of Object.values(data)) {
    if (!c || c.type !== "VEVENT" || !c.start || !c.end) continue;
    const arrive = isoDate(c.start);
    const depart = isoDate(c.end);
    if (depart <= arrive) continue;
    const summary = String(c.summary ?? "");
    const description = String(c.description ?? "");
    out.push({
      source,
      arrive,
      depart,
      nights: Math.round((Date.parse(depart) - Date.parse(arrive)) / 86_400_000),
      url: description.match(/https:\/\/www\.airbnb\.[^\s]+\/details\/[A-Z0-9]+/)?.[0],
      blocked: source === "airbnb" && /not available/i.test(summary),
    });
  }
  return out;
}

/** Upcoming stays from both channels, read live from their iCal export links. Nothing is stored. */
export async function upcomingBookings(): Promise<CalendarResult> {
  const feeds = [
    { source: "airbnb" as const, url: process.env.AIRBNB_ICAL_URL },
    { source: "booking" as const, url: process.env.BOOKING_ICAL_URL },
  ].filter((f): f is { source: Source; url: string } => Boolean(f.url));

  const today = nowInNorway().date;
  const results = await Promise.allSettled(feeds.map((f) => readFeed(f.source, f.url)));

  const bookings = results
    .flatMap((r) => (r.status === "fulfilled" ? r.value : []))
    .filter((b) => b.depart >= today && !b.blocked)
    .sort((a, b) => a.arrive.localeCompare(b.arrive));
  const errors = results.flatMap((r) => (r.status === "rejected" ? [String((r.reason as Error).message)] : []));

  return { bookings, errors, configured: feeds.length > 0 };
}
