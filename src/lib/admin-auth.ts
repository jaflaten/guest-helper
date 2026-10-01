/**
 * Checks an HTTP Basic "Authorization" header against ADMIN_PASSWORD.
 * Any username is accepted; only the password matters.
 */
export function adminAuthorized(header: string | null): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || !header?.startsWith("Basic ")) return false;
  let decoded: string;
  try {
    decoded = atob(header.slice(6));
  } catch {
    return false;
  }
  const password = decoded.slice(decoded.indexOf(":") + 1);
  return safeEqual(password, expected);
}

// Compares without bailing out early, so timing doesn't reveal how much matched.
function safeEqual(a: string, b: string): boolean {
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }
  return diff === 0;
}
