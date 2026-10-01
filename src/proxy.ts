import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { adminAuthorized } from "@/lib/admin-auth";

// Sends visitors without a language in the URL to their browser's language.
// A stored choice (cookie set by the language menu) wins over the browser.
function pickLocale(request: NextRequest): Locale {
  const saved = request.cookies.get("lang")?.value;
  if (saved && (locales as readonly string[]).includes(saved)) return saved as Locale;

  const header = request.headers.get("accept-language") ?? "";
  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { base: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { base } of preferred) {
    // Norwegian Bokmål and Nynorsk both map to "no".
    const code = base === "nb" || base === "nn" ? "no" : base;
    if ((locales as readonly string[]).includes(code)) return code as Locale;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The admin pages sit behind a browser password prompt (ADMIN_PASSWORD).
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    if (!process.env.ADMIN_PASSWORD) {
      return new NextResponse("Admin is disabled: set ADMIN_PASSWORD in Vercel.", { status: 503 });
    }
    if (!adminAuthorized(request.headers.get("authorization"))) {
      return new NextResponse("Password required", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Guest guide admin", charset="UTF-8"' },
      });
    }
    return NextResponse.next({ headers: { "X-Robots-Tag": "noindex", "Cache-Control": "no-store" } });
  }

  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  request.nextUrl.pathname = `/${pickLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals, API routes and files with an extension (images, manifest, icons, sw.js).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
