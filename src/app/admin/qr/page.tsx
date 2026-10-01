import Link from "next/link";
import { headers } from "next/headers";
import QRCode from "qrcode";
import { guides, rooms } from "@/content";
import { t } from "@/i18n/config";

// Printable stickers. Links carry no language: each guest lands in their own phone's language.
export default async function QrPage() {
  const h = await headers();
  const base = `${h.get("x-forwarded-proto") ?? "https"}://${h.get("x-forwarded-host") ?? h.get("host")}`;

  const targets = [
    { title: "Guest guide", sub: "Start page", path: "/" },
    ...guides.map((g) => ({ title: t(g.title, "en"), sub: t(g.title, "no"), path: `/guides/${g.slug}` })),
    ...rooms.map((r) => ({ title: t(r.name, "en"), sub: "Where to find things", path: `/rooms/${r.slug}` })),
  ];

  const stickers = await Promise.all(
    targets.map(async (s) => ({
      ...s,
      url: base + s.path,
      svg: await QRCode.toString(base + s.path, { type: "svg", margin: 1, color: { dark: "#2b2420", light: "#ffffff" } }),
    })),
  );

  return (
    <main>
      <div className="mb-5 flex items-baseline justify-between print:hidden">
        <h1 className="font-serif text-3xl">QR stickers</h1>
        <Link href="/admin" className="text-sm font-semibold">
          ← Guest links
        </Link>
      </div>
      <p className="mb-5 text-[15px] text-ink-soft print:hidden">
        Print this page and stick each code on the appliance or in the room. Use your browser&apos;s Print or Share → Print.
      </p>
      <div className="grid grid-cols-2 gap-4 print:gap-6">
        {stickers.map((s) => (
          <div key={s.path} className="flex break-inside-avoid flex-col items-center rounded-2xl border border-line bg-white p-4 text-center">
            <div className="w-full max-w-[180px]" dangerouslySetInnerHTML={{ __html: s.svg }} />
            <p className="mt-2 text-base font-semibold">{s.title}</p>
            <p className="text-xs text-muted">{s.sub}</p>
            <p className="mt-1 text-[11px] text-muted">Scan for help · Skann for hjelp</p>
          </div>
        ))}
      </div>
    </main>
  );
}
