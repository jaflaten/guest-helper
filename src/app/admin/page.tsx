import Link from "next/link";
import { connection } from "next/server";
import { staySecretConfigured, isDate } from "@/lib/stay";
import { upcomingBookings } from "@/lib/calendar";
import { formatDate } from "@/lib/format";
import { StayLinkForm } from "./StayLinkForm";

export default async function AdminPage({ searchParams }: PageProps<"/admin">) {
  await connection();
  const sp = await searchParams;
  const pick = (v: string | string[] | undefined) => (typeof v === "string" && isDate(v) ? v : "");
  const arrive = pick(sp.arrive);
  const depart = pick(sp.depart);

  const missing = [
    !staySecretConfigured() && "TOKEN_SECRET (any random text, at least 16 characters)",
    !process.env.WIFI_PASSWORD && "WIFI_PASSWORD (shown to guests during their stay)",
  ].filter(Boolean);

  const calendar = await upcomingBookings();

  return (
    <main className="flex flex-col gap-5">
      <h1 className="font-serif text-3xl">Guest links</h1>
      <p className="text-[15px] leading-relaxed text-ink-soft">
        Pick a booking, choose the guest&apos;s language and copy the message. The message itself contains the key-box
        code and the Wi-Fi password, so send it on arrival day. The link shows them too, from check-in time until
        departure. Nothing is stored: the booking lives inside the link.
      </p>

      {missing.length > 0 && (
        <div className="rounded-[18px] bg-alert-soft p-4 text-[15px]">
          <p className="font-semibold">Missing in Vercel → Settings → Environment Variables:</p>
          <ul className="mt-1 list-disc pl-5">
            {missing.map((m) => (
              <li key={String(m)}>{m}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm">Redeploy after adding them.</p>
        </div>
      )}

      <section>
        <h2 className="mb-2 font-serif text-xl">Upcoming bookings</h2>
        {!calendar.configured ? (
          <p className="rounded-[18px] bg-white p-4 text-sm text-ink-soft">
            Add <code>AIRBNB_ICAL_URL</code> and <code>BOOKING_ICAL_URL</code> (each listing&apos;s &quot;Export
            calendar&quot; link, the same ones rental-helper uses) to list bookings here. Until then, type the dates
            below.
          </p>
        ) : (
          <>
            {calendar.errors.map((e) => (
              <p key={e} className="mb-2 rounded-xl bg-alert-soft p-3 text-sm">
                Couldn&apos;t read a calendar: {e}
              </p>
            ))}
            {calendar.bookings.length === 0 ? (
              <p className="rounded-[18px] bg-white p-4 text-sm text-ink-soft">No upcoming bookings.</p>
            ) : (
              <ul className="overflow-hidden rounded-[18px] bg-white">
                {calendar.bookings.map((b) => {
                  const selected = b.arrive === arrive && b.depart === depart;
                  return (
                    <li key={`${b.source}-${b.arrive}`} className="border-t border-sand first:border-t-0">
                      <div className={`flex items-center gap-3 px-4 py-3 ${selected ? "bg-pine-soft" : ""}`}>
                        <span
                          className={`w-16 shrink-0 rounded-md px-1.5 py-0.5 text-center text-[11px] font-semibold ${
                            b.source === "airbnb" ? "bg-alert-soft text-alert" : "bg-[#dde6f3] text-[#2f4a6b]"
                          }`}
                        >
                          {b.source === "airbnb" ? "Airbnb" : "Booking"}
                        </span>
                        <Link
                          href={`/admin?arrive=${b.arrive}&depart=${b.depart}#create`}
                          className="grow text-ink no-underline"
                        >
                          <span className="block text-[15px] font-medium">
                            {formatDate(b.arrive, "en")} → {formatDate(b.depart, "en")}
                          </span>
                          <span className="block text-[13px] text-muted">
                            {b.nights} night{b.nights === 1 ? "" : "s"} · {selected ? "selected" : "tap to use"}
                          </span>
                        </Link>
                        {b.url && (
                          <a href={b.url} target="_blank" rel="noreferrer" className="shrink-0 text-[13px] font-semibold">
                            Open ↗
                          </a>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </>
        )}
      </section>

      {staySecretConfigured() && (
        <StayLinkForm
          key={`${arrive}-${depart}`}
          arrive={arrive}
          depart={depart}
          hasDefaultCode={Boolean(process.env.DOOR_CODE)}
        />
      )}
    </main>
  );
}
