import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the complete Persimmon landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Persimmon — Read\. Nothing else\.<\/title>/i);
  assert.match(html, />Read</);
  assert.match(html, /Nothing else\./);
  assert.match(html, />persimmon</);
  assert.match(html, /App Store/);
  assert.match(html, /Google Play/);
  assert.match(html, /Android APK/);
  assert.match(html, /page-turn-desktop\.mp4/);
  assert.match(html, /page-turn-desktop-hd\.mp4/);
  assert.match(html, /page-turn-mobile\.mp4/);
  assert.match(html, /autoplay/i);
  assert.match(html, /muted/i);
  assert.match(html, /playsinline/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("keeps motion and download fallbacks explicit", async () => {
  const [page, responsiveVideo, css, layout, packageJson] = await Promise.all([
    readFile(new URL("app/page.tsx", projectRoot), "utf8"),
    readFile(new URL("app/ResponsiveBackgroundVideo.tsx", projectRoot), "utf8"),
    readFile(new URL("app/globals.css", projectRoot), "utf8"),
    readFile(new URL("app/layout.tsx", projectRoot), "utf8"),
    readFile(new URL("package.json", projectRoot), "utf8"),
  ]);

  assert.match(page, /process\.env\.NEXT_PUBLIC_APP_STORE_URL/);
  assert.match(page, /process\.env\.NEXT_PUBLIC_APK_URL/);
  assert.match(page, /process\.env\.NEXT_PUBLIC_PLAY_STORE_URL/);
  assert.match(page, /badges\/download-on-the-app-store\.svg/);
  assert.match(page, /badges\/get-it-on-google-play\.png/);
  assert.match(page, /Android APK/);
  assert.match(responsiveVideo, /window\.matchMedia\(MOBILE_MEDIA\)/);
  assert.match(responsiveVideo, /window\.matchMedia\(HD_MEDIA\)/);
  assert.match(responsiveVideo, /video\.load\(\)/);
  assert.match(responsiveVideo, /page-turn-desktop-hd\.mp4/);
  assert.match(responsiveVideo, /page-turn-mobile\.mp4/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /\.page-turn-video\s*\{[\s\S]*?display:\s*none/);
  assert.match(css, /\.page-turn-video\s*\{[\s\S]*?object-fit:\s*cover/);
  assert.match(css, /\.page-turn-video\s*\{[\s\S]*?transform:\s*scale\(1\.02\)/);
  assert.match(css, /container-type:\s*inline-size/);
  assert.match(css, /100svh/);
  assert.match(css, /font-size:\s*clamp\([^;]*cqi/);
  assert.match(css, /margin-top:\s*clamp\([^;]*cqi/);
  assert.match(css, /grid-template-columns:\s*max-content max-content/);
  assert.match(css, /\.hero-message p\s*\{[\s\S]*?margin:\s*0 0 0 clamp\(-/);
  assert.match(css, /\.store-badge img\s*\{[\s\S]*?width:\s*auto/);
  assert.match(css, /--store-badge-visible-height:\s*clamp\([^;]*cqi/);
  assert.match(css, /\.store-badge-app-store img\s*\{[\s\S]*?height:\s*var\(--store-badge-visible-height\)/);
  assert.match(css, /\.store-badge-google-play img\s*\{[\s\S]*?height:\s*calc\(var\(--store-badge-visible-height\) \* 1\.4881\)/);
  assert.match(css, /\.brand-name\s*\{[\s\S]*?font-family:[^;]*(?:Baskerville|Georgia)[^;]*;/);
  assert.match(css, /\.brand-name\s*\{[\s\S]*?width:\s*calc\(/);
  assert.match(css, /\.apk-badge-artwork\s*\{[\s\S]*?height:\s*var\(--store-badge-visible-height\)/);
  assert.doesNotMatch(css, /\.store-badge\.is-disabled\s*\{[^}]*opacity:/);
  assert.match(css, /\.store-badge-google-play\.is-disabled\s*\{[^}]*opacity:\s*0\.58/);
  assert.match(css, /\.scrim\s*\{[\s\S]*?linear-gradient\(/);
  assert.doesNotMatch(css, /\.hero::before|center-halo-drift/);
  assert.match(layout, /themeColor:\s*"#17120e"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton|drizzle/);
});
