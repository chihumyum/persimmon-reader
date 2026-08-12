import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
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
  assert.match(html, /href="\/support"/);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /href="\/terms"/);
  assert.match(
    html,
    /href="https:\/\/github\.com\/chihumyum\/persimmon-reader"/,
  );
  assert.match(html, /aria-label="View Persimmon on GitHub"/);
  assert.match(html, /page-turn-desktop\.mp4/);
  assert.match(html, /page-turn-desktop-hd\.mp4/);
  assert.match(html, /page-turn-mobile\.mp4/);
  assert.match(html, /page-turn-poster\.jpg/);
  assert.match(html, /page-turn-mobile-poster\.jpg/);
  assert.match(html, /autoplay/i);
  assert.match(html, /muted/i);
  assert.match(html, /playsinline/i);
  assert.doesNotMatch(
    html,
    /codex-preview|SkeletonPreview|react-loading-skeleton/i,
  );
});

test("renders public privacy, terms, and support pages", async () => {
  const privacyResponse = await render("/privacy");
  assert.equal(privacyResponse.status, 200);
  const privacy = await privacyResponse.text();
  assert.match(privacy, /<title>Privacy Policy — Persimmon<\/title>/i);
  assert.match(privacy, /drive\.appdata/);
  assert.match(privacy, /Limited Use/);
  assert.match(privacy, /support@persimmon\.cc/);
  assert.match(privacy, /Clear Google Drive Data/);
  assert.match(
    privacy,
    /does not pass through or reside on servers controlled by the Persimmon developer/,
  );
  assert.match(privacy, /Cloudflare Privacy Policy/);
  assert.match(privacy, /first-party behavioral analytics/);

  const termsResponse = await render("/terms");
  assert.equal(termsResponse.status, 200);
  const terms = await termsResponse.text();
  assert.match(terms, /<title>Terms of Service — Persimmon<\/title>/i);
  assert.match(terms, /Your books and content/);
  assert.match(terms, /Google Drive and third-party services/);
  assert.match(terms, /open-source license in the corresponding repository/);
  assert.match(terms, /href="\/privacy"/);
  assert.match(terms, /support@persimmon\.cc/);

  const supportResponse = await render("/support");
  assert.equal(supportResponse.status, 200);
  const support = await supportResponse.text();
  assert.match(support, /<title>Support — Persimmon<\/title>/i);
  assert.match(
    support,
    /mailto:support@persimmon\.cc\?subject=Persimmon%20Support/,
  );
  assert.match(support, /DRM-free, reflowable EPUB 2\/3/);
  assert.match(support, /private App Data folder/);
  assert.match(support, /github\.com\/chihumyum\/persimmon-reader/);
  assert.match(
    support,
    /without passing through a server controlled by the Persimmon developer/,
  );
});

test("keeps motion, download, and repository fallbacks explicit", async () => {
  const [
    page,
    spotlightBadgeLink,
    responsiveVideo,
    css,
    layout,
    packageJson,
    envExample,
    githubMark,
  ] = await Promise.all([
    readFile(new URL("app/page.tsx", projectRoot), "utf8"),
    readFile(new URL("app/SpotlightBadgeLink.tsx", projectRoot), "utf8"),
    readFile(new URL("app/ResponsiveBackgroundVideo.tsx", projectRoot), "utf8"),
    readFile(new URL("app/globals.css", projectRoot), "utf8"),
    readFile(new URL("app/layout.tsx", projectRoot), "utf8"),
    readFile(new URL("package.json", projectRoot), "utf8"),
    readFile(new URL(".env.example", projectRoot), "utf8"),
    readFile(new URL("public/icons/github-mark.svg", projectRoot), "utf8"),
  ]);

  assert.match(page, /appStore:\s*undefined/);
  assert.doesNotMatch(page, /process\.env\.NEXT_PUBLIC_APP_STORE_URL/);
  assert.match(page, /process\.env\.NEXT_PUBLIC_APK_URL/);
  assert.match(page, /process\.env\.NEXT_PUBLIC_PLAY_STORE_URL/);
  assert.match(page, /https:\/\/github\.com\/chihumyum\/persimmon-reader/);
  assert.match(page, /icons\/github-mark\.svg/);
  assert.match(page, /badges\/download-on-the-app-store\.svg/);
  assert.match(page, /badges\/get-it-on-google-play-trimmed\.png/);
  assert.match(page, /Android APK/);
  assert.match(page, /SpotlightBadgeLink/);
  assert.match(spotlightBadgeLink, /getBoundingClientRect\(\)/);
  assert.match(spotlightBadgeLink, /--badge-highlight-x/);
  assert.match(spotlightBadgeLink, /--badge-highlight-y/);
  assert.match(spotlightBadgeLink, /onPointerMove=\{updateSpotlight\}/);
  assert.match(responsiveVideo, /window\.matchMedia\(MOBILE_MEDIA\)/);
  assert.match(responsiveVideo, /window\.matchMedia\(HD_MEDIA\)/);
  assert.match(responsiveVideo, /video\.load\(\)/);
  assert.match(responsiveVideo, /<picture className="page-turn-poster"/);
  assert.match(
    responsiveVideo,
    /<source srcSet=\{posters\.mobile\} media=\{MOBILE_MEDIA\}/,
  );
  assert.doesNotMatch(responsiveVideo, /data-variant="desktop"|poster=\{/);
  assert.match(responsiveVideo, /page-turn-desktop-hd\.mp4/);
  assert.match(responsiveVideo, /page-turn-mobile\.mp4/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /\.page-turn-video\s*\{[\s\S]*?display:\s*none/);
  assert.match(css, /\.page-turn-video\s*\{[\s\S]*?object-fit:\s*cover/);
  assert.match(
    css,
    /\.page-turn-video\s*\{[\s\S]*?transform:\s*scale\(1\.02\)/,
  );
  assert.match(
    css,
    /@media \(max-width:\s*760px\)[\s\S]*?\.page-turn-poster img,[\s\S]*?\.page-turn-video/,
  );
  assert.match(css, /container-type:\s*inline-size/);
  assert.match(css, /100svh/);
  assert.match(css, /font-size:\s*clamp\([^;]*cqi/);
  assert.match(css, /margin-top:\s*clamp\([^;]*cqi/);
  assert.match(css, /grid-template-columns:\s*max-content max-content/);
  assert.match(css, /\.hero-message p\s*\{[\s\S]*?margin:\s*0 0 0 clamp\(-/);
  assert.match(
    css,
    /--download-button-width:\s*clamp\(88px,\s*19cqi,\s*128px\)/,
  );
  assert.match(css, /--download-gap:\s*clamp\(8px,\s*2cqi,\s*11px\)/);
  assert.match(css, /\.store-badge img\s*\{[\s\S]*?width:\s*auto/);
  assert.match(css, /--store-badge-visible-height:\s*clamp\([^;]*cqi/);
  assert.match(css, /--download-artwork-scale:\s*1\.2/);
  assert.match(
    css,
    /\.store-badge img\s*\{[\s\S]*?transform:\s*scale\(var\(--download-artwork-scale\)\)/,
  );
  assert.match(
    css,
    /\.store-badge-app-store img\s*\{[\s\S]*?height:\s*var\(--store-badge-visible-height\)/,
  );
  assert.match(
    css,
    /\.store-badge-google-play img\s*\{[\s\S]*?height:\s*var\(--store-badge-visible-height\)/,
  );
  assert.match(
    css,
    /\.brand-name\s*\{[\s\S]*?font-family:[^;]*(?:Baskerville|Georgia)[^;]*;/,
  );
  assert.match(css, /\.brand-name\s*\{[\s\S]*?width:\s*calc\(/);
  assert.match(
    css,
    /\.apk-badge-artwork\s*\{[\s\S]*?height:\s*var\(--store-badge-visible-height\)/,
  );
  assert.match(
    css,
    /\.apk-badge-artwork\s*\{[\s\S]*?left:\s*calc\(var\(--store-badge-visible-height\) \* -0\.107\)/,
  );
  assert.match(
    css,
    /\.apk-badge-artwork\s*\{[\s\S]*?transform:\s*scale\(var\(--download-artwork-scale\)\)/,
  );
  assert.doesNotMatch(css, /\.store-badge\.is-disabled\s*\{[^}]*opacity:/);
  assert.match(css, /a\.store-badge\s*\{[^}]*cursor:\s*pointer/);
  assert.match(
    css,
    /a\.store-badge::after\s*\{[\s\S]*?radial-gradient\([\s\S]*?var\(--badge-highlight-x\)[\s\S]*?var\(--badge-highlight-y\)/,
  );
  assert.match(css, /a\.store-badge:hover::after/);
  assert.doesNotMatch(
    css,
    /a\.store-badge:hover\s*\{[^}]*transform:\s*translateY/,
  );
  assert.match(
    css,
    /\.store-badge-google-play\.is-disabled\s*\{[^}]*opacity:\s*0\.38/,
  );
  assert.match(
    css,
    /\.store-badge-google-play\.is-disabled\s*\{[^}]*filter:\s*grayscale\(0\.8\) saturate\(0\.25\)/,
  );
  assert.match(css, /\.scrim\s*\{[\s\S]*?linear-gradient\(/);
  assert.doesNotMatch(css, /\.hero::before|center-halo-drift/);
  assert.match(layout, /themeColor:\s*"#17120e"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton|drizzle/);
  assert.doesNotMatch(envExample, /NEXT_PUBLIC_GITHUB/);
  assert.match(githubMark, /<svg[^>]*viewBox="0 0 16 16"/);
});
