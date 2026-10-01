import type { MetadataRoute } from "next";
import { site } from "@/content";

// Lets guests add the guide to their home screen.
// TODO: add 192px and 512px icons in /public once there's a logo.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Guest guide",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f2eb",
    theme_color: "#2e5a4c",
    icons: [],
  };
}
