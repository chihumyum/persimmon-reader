# Persimmon reader website

A deliberately minimal, single-screen landing page for Persimmon. The real
page-turn recording is the product demo; the site adds only a two-line message,
the Persimmon wordmark, and three download destinations.

## Background recordings

The responsive background assets live in `public/media/`:

- `page-turn-desktop.mp4` — 1440 × 1080 default desktop version
- `page-turn-desktop-hd.mp4` — 2000 × 1500 version for viewports at least 1600 px wide
- `page-turn-mobile.mp4` — 720 × 1564 H.264 portrait version
- `page-turn-poster.jpg` and `page-turn-mobile-poster.jpg` — loading posters

Portrait screens use the mobile recording, very wide screens use the HD
recording, and all other layouts use the default desktop recording. The active
source is re-evaluated when the viewport crosses those boundaries. Every source
uses `object-fit: cover`, so the video fills the screen without letterboxing.
The page disables video for visitors who prefer reduced motion, leaving the
poster and fallback background in place.

## Configure downloads

Copy `.env.example` to `.env.local`, then replace the empty values with the
release URLs. Official store badges appear only when their matching listing URL
is configured. `NEXT_PUBLIC_APK_URL` points to the signed Android APK. Empty
values leave the corresponding badge disabled without dimming its artwork.

The English App Store and Google Play badges in `public/badges/` are the
unaltered official assets from [Apple Developer](https://developer.apple.com/app-store/marketing/guidelines/)
and [Android Developers](https://developer.android.com/distribute/marketing-tools).
Do not redraw, recolor, crop, or add effects to the badge artwork.
The Android APK control is a separate custom badge and does not impersonate a
Google Play listing.

## Run locally

Requires Node.js 22.13 or newer.

```bash
pnpm install
pnpm dev
```

Validate the production build with:

```bash
pnpm check
```
