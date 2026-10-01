import type { Metadata } from "next";
import "@fontsource-variable/figtree";
import "@fontsource-variable/newsreader";
import "../globals.css";

export const metadata: Metadata = {
  title: "Guest guide admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="mx-auto min-h-dvh max-w-xl px-5 py-6">{children}</div>
      </body>
    </html>
  );
}
