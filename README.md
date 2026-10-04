# Guest guide

A mobile-first, multi-language guide for guests of the apartment: how to get there, where things are, how the appliances work.

Next.js (App Router) · TypeScript · Tailwind · hosted on Vercel.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en, /no or /de
```

## Setup (Vercel → Settings → Environment Variables)

| Variable | What |
| --- | --- |
| `ADMIN_PASSWORD` | Password for `/admin` (any username works in the browser prompt) |
| `TOKEN_SECRET` | Random text, at least 16 characters. Encrypts guest links. Changing it invalidates every link already sent |
| `WIFI_NAME` | Wi-Fi network name, shown on the home page |
| `WIFI_PASSWORD` | Shown to guests on their stay page during the stay |
| `SLACK_WEBHOOK_URL` | Optional. Slack incoming-webhook URL. Receives guides answered "No" (plus comments) and the general feedback form (`/<lang>/feedback`, linked at the bottom of every page). Messages include the guest's stay dates and booking name if they opened their stay link on that phone |
| `DOOR_CODE` | Optional. Your usual key-box code, used when the code field is left empty |
| `AIRBNB_ICAL_URL`, `BOOKING_ICAL_URL` | Optional. Each listing's "Export calendar" link (same as rental-helper). Lists upcoming bookings in `/admin` |

Redeploy after adding or changing them.

## Guest links (`/admin`)

Tap an upcoming booking (read live from the Airbnb/Booking.com calendars; dates only, the feeds carry no names) or type the dates, pick the guest's language → get a link and a ready-to-paste message. Check-in 16:00 and check-out 11:00 are set in `src/content/site.ts`.
The guest's page (`/<lang>/stay/<token>`) shows the door code and Wi-Fi password from `site.stay.checkIn`
on arrival day until the end of departure day, then says the stay has ended.

Nothing is stored: the booking is encrypted inside the link (AES-256-GCM with `TOKEN_SECRET`), so it can't be
read or forged. The trade-off: there is no list of bookings, and a link can't be revoked early (it expires itself).
Copy the message right after creating it.

`/admin/qr` is a printable sheet of QR stickers for every guide and room. The QR links have no language in them,
so each guest lands in their own phone's language.

## Offline

`public/sw.js` saves the guide in the guest's language on their first visit (plus their stay page, on their own
phone only), so it works without signal later. Bump `VERSION` in `sw.js` if cached pages ever look stale.

## Where things live

| What | File |
| --- | --- |
| Apartment name, hero photo, Wi-Fi, contact (WhatsApp/email/phone), area tips | `src/content/site.ts` |
| Rooms: photos, numbered markers, "where to find it" items | `src/content/rooms.ts` |
| Appliance guides: short version, steps, troubleshooting, FAQ question | `src/content/guides.ts` |
| Arrival and check-out steps | `src/content/pages.ts` |
| Quick answers (one-line Q&A on the home page, e.g. tap water) | `src/content/answers.ts` |
| Around the area: where to eat, things to do, shops/fuel/EV/emergency (`/<lang>/area/eat`, `/do`, `/practical`) | `src/content/area.ts` |
| Buttons and headings (UI text) per language | `src/i18n/dictionaries/*.ts` |
| Language list | `src/i18n/config.ts` |

Anything in `[brackets]` is a placeholder to replace.

### Photos

Put photos in `public/photos/` and set `src: "/photos/kitchen.jpg"` on the photo. Without `src` a labelled placeholder is shown. Next.js resizes and compresses them automatically. Step photos are shown at 4:3 (landscape); room photos at 4:3 too.

Short videos go in `public/videos/` as H.264 MP4 (about 540 px wide, no sound, under ~2 MB) with a `.jpg` poster frame; set `video` and `poster` on the guide.

### Room markers

Each room photo has `markers: [{ n, x, y }]`, where `x`/`y` are percentages from the top-left corner. `n` matches the item number in the list below the photo. An item with `guide: "slug"` links to that appliance guide.

Tapping a number on the photo jumps to that item in the list below and highlights it.

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

1. Fill in real content and photos (start with arrival and the top guest questions).
2. Print the QR stickers (`/admin/qr`) once the site has its own domain.
3. Later: a chatbot over the guide content.
