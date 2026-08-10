# Persimmon reader website

A deliberately minimal, single-screen landing page for Persimmon. The real
page-turn recording is the product demo; the site adds only the wordmark, one
line of copy, and the three download destinations.

## Add the recordings

Put the final media in `public/media/` using these names:

- `page-turn.mp4` — desktop fallback and the only required file
- `page-turn.webm` — optional smaller desktop alternative
- `page-turn-mobile.mp4` — optional portrait/mobile crop
- `page-turn-mobile.webm` — optional smaller mobile alternative
- `page-turn-poster.jpg` — frame shown before playback and for reduced-data
  situations

Keep the clip muted and make its first and final frames visually compatible so
the loop feels continuous. The page already disables video for visitors who
prefer reduced motion, leaving the poster/fallback background in place.

## Configure downloads

Copy `.env.example` to `.env.local`, then replace the empty values with the
release URLs. Official store badges appear only when their matching listing URL
is configured. Empty values are shown honestly as “Coming soon”.

The English App Store and Google Play badges in `public/badges/` are the
unaltered official assets from [Apple Developer](https://developer.apple.com/app-store/marketing/guidelines/)
and [Android Developers](https://developer.android.com/distribute/marketing-tools).
Do not redraw, recolor, crop, or add effects to the badge artwork.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Validate the production build with:

```bash
npm test
```
