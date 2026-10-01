import Link from "next/link";
import { connection } from "next/server";
import { staySecretConfigured } from "@/lib/stay";
import { StayLinkForm } from "./StayLinkForm";

export default async function AdminPage() {
  await connection();
  const missing = [
    !staySecretConfigured() && "TOKEN_SECRET (any random text, at least 16 characters)",
    !process.env.WIFI_PASSWORD && "WIFI_PASSWORD (shown to guests during their stay)",
  ].filter(Boolean);

  return (
    <main className="flex flex-col gap-5">
      <div className="flex items-baseline justify-between">
        <h1 className="font-serif text-3xl">Guest links</h1>
        <Link href="/admin/qr" className="text-sm font-semibold">
          QR stickers →
        </Link>
      </div>
      <p className="text-[15px] leading-relaxed text-ink-soft">
        Creates a personal link for one booking. The guest sees their door code and the Wi-Fi password from check-in
        time on arrival day until departure. Nothing is stored: the booking lives inside the link.
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

      {staySecretConfigured() && <StayLinkForm />}
    </main>
  );
}
