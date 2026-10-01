# Guest guide

A mobile-first, multi-language guide for guests of the apartment: how to get there, where things are, how the appliances work.

Next.js (App Router) · TypeScript · Tailwind · hosted on Vercel.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en, /no or /de
```

## Where things live

| What | File |
| --- | --- |
| Apartment name, hero photo, Wi-Fi, contact (WhatsApp/email/phone), area tips | `src/content/site.ts` |
| Rooms: photos, numbered markers, "where to find it" items | `src/content/rooms.ts` |
| Appliance guides: short version, steps, troubleshooting, FAQ question | `src/content/guides.ts` |
| Arrival and check-out steps | `src/content/pages.ts` |
| Buttons and headings (UI text) per language | `src/i18n/dictionaries/*.ts` |
| Language list | `src/i18n/config.ts` |

Anything in `[brackets]` is a placeholder to replace.

### Photos

Put photos in `public/photos/` and set `src: "/photos/kitchen.jpg"` on the photo. Without `src` a labelled placeholder is shown. Next.js resizes and compresses them automatically.

### Room markers

Each room photo has `markers: [{ n, x, y }]`, where `x`/`y` are percentages from the top-left corner. `n` matches the item number in the list below the photo. An item with `guide: "slug"` links to that appliance guide.

Two marker behaviours are built so we can compare them on a real phone:
- `/en/rooms/kitchen` — tapping a number jumps to the list item
- `/en/rooms/kitchen?markers=popover` — tapping shows the name on the photo

Pick one, then delete the other mode from `src/components/MarkedPhoto.tsx`.

### Languages

Supported: English, Norsk, Deutsch, Français, 中文 (Simplified). Every content field is `{ en, no, de, fr, zh }`. Only `en` is required; missing translations fall back to English. To add a language: add its code to `src/i18n/config.ts`, add a dictionary in `src/i18n/dictionaries/`, and register it in `src/i18n/index.ts`. The visitor's browser language picks the default; the language menu remembers their choice. The French and Chinese texts are machine-quality drafts: have a native speaker check them before launch.

## Decisions so far

- The door/lockbox code and the Wi-Fi password are **never** on the public site. Only the Wi-Fi network name is shown; the password is sent in the booking message.
- WhatsApp is the main contact button; email, phone and the booking apps are listed below it.
- Room pages = "where is everything" (one or more photos with numbered markers + list). Appliances get their own guide pages.
- Home screen loads one hero photo; everything else is light.
- Fonts are self-hosted (no Google Fonts request), which also helps offline.
- Separate from the cleaner app: own repo, own Supabase project, own deployment.

## Next steps

1. Fill in real content and photos (start with arrival and the top guest questions), deploy to Vercel.
2. **First feature after launch: per-booking token links.** Admin page to create a booking (dates, door code), which gives a link with a random token and a copy-ready message. The guest's link shows the door code and Wi-Fi password from arrival day only, looked up server-side (Supabase), never in the page source.
3. Choose the marker behaviour and remove the other.
4. Offline support: service worker that caches pages and photos on first visit, plus app icons for the manifest.
5. QR stickers per appliance linking to `/guides/<slug>` (language is picked automatically).
6. Store "Did this help?" answers to see which guides need work.
7. Later: a chatbot over the guide content.
