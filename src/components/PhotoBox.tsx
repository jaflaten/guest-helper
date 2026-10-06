import Image from "next/image";
import { t, type Locale } from "@/i18n/config";
import type { Photo } from "@/content";

/**
 * Shows a real photo when `src` is set, otherwise a plain tinted block (used for room cards without a photo yet).
 * The parent decides the size; this fills it.
 */
export function PhotoBox({
  photo,
  lang,
  sizes = "(max-width: 640px) 100vw, 640px",
  priority = false,
  tint = "#d9cbb8",
}: {
  photo: Photo;
  lang: Locale;
  sizes?: string;
  priority?: boolean;
  tint?: string;
}) {
  if (photo.src) {
    return (
      <Image
        src={photo.src}
        alt={t(photo.alt, lang)}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    );
  }
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: tint }} role="img" aria-label={t(photo.alt, lang)}>
    </div>
  );
}
