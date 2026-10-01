"use client";

import { useEffect } from "react";

/**
 * Registers the service worker and asks it to save every guide page in the
 * guest's language, so the whole guide works later without signal.
 */
export function OfflineSupport({ urls }: { urls: string[] }) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => navigator.serviceWorker.ready)
      .then((reg) => reg.active?.postMessage({ type: "precache", urls }))
      .catch(() => {
        /* Offline support is a bonus; the site works without it. */
      });
  }, [urls]);
  return null;
}
