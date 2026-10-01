import type { MetadataRoute } from "next";
import { site } from "@/content";

// Lets guests add the guide to their home screen.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Guest guide",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f2eb",
    theme_color: "#2e5a4c",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
