// Service worker: makes the guide work with no signal once it has been opened.
// - Pages: network first, fall back to the saved copy.
// - Next.js build files, fonts and images: saved on first use, served from cache.
// - Admin pages are never stored.
const VERSION = "v1";
const PAGES = `pages-${VERSION}`;
const ASSETS = `assets-${VERSION}`;

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => ![PAGES, ASSETS].includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// The page tells us which pages to save in the guest's language.
self.addEventListener("message", (event) => {
  if (event.data?.type !== "precache" || !Array.isArray(event.data.urls)) return;
  event.waitUntil(
    caches.open(PAGES).then((cache) =>
      Promise.all(
        event.data.urls.map((url) =>
          fetch(url, { credentials: "same-origin" })
            .then((res) => (res.ok ? cache.put(url, res) : undefined))
            .catch(() => undefined),
        ),
      ),
    ),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/admin") || url.pathname.startsWith("/api")) return;
  // In-app navigation data (React Server Components): let Next.js handle it;
  // when offline it falls back to a full page load, which we serve below.
  if (url.searchParams.has("_rsc") || req.headers.get("RSC")) return;

  const isAsset =
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/_next/image") ||
    url.pathname.startsWith("/photos/") ||
    /\.(woff2?|png|jpe?g|webp|svg|ico)$/.test(url.pathname);

  if (isAsset) {
    event.respondWith(
      caches.open(ASSETS).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) cache.put(req, res.clone());
        return res;
      }),
    );
    return;
  }

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          // Personal stay pages are saved too, but only on the guest's own phone,
          // so the door code is there even with no signal at the door.
          if (res.ok) caches.open(PAGES).then((c) => c.put(req, res.clone()));
          return res;
        })
        .catch(async () => {
          const cache = await caches.open(PAGES);
          return (
            (await cache.match(req, { ignoreSearch: true })) ||
            (await cache.match(`/${url.pathname.split("/")[1]}`)) ||
            new Response("You are offline. Open this page once with a connection to save it.", {
              status: 503,
              headers: { "Content-Type": "text/plain; charset=utf-8" },
            })
          );
        }),
    );
  }
});
