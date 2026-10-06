"use server";

import { site } from "@/content";
import { decodeStay, stayPhase } from "@/lib/stay";

/**
 * The Wi-Fi password, but only for a valid stay token during the stay (same rule as the stay page).
 * Used by the home page when the guest has opened their personal link on this phone.
 */
export async function wifiPasswordForStay(token: string | undefined): Promise<string | null> {
  const password = process.env.WIFI_PASSWORD;
  const stay = token ? decodeStay(token) : null;
  if (!password || !stay) return null;
  return stayPhase(stay, site.stay.checkIn) === "active" ? password : null;
}
