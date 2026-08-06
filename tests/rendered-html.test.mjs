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
  assert.match(html, /<title>Persimmon — Pages that move with you<\/title>/i);
  assert.match(html, /Pages that move with you\./);
  assert.match(html, /App Store/);
  assert.match(html, /Google Play/);
  assert.match(html, /Android APK/);
  assert.match(html, /page-turn\.mp4/);
  assert.match(html, /autoplay/i);
  assert.match(html, /muted/i);
  assert.match(html, /playsinline/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("keeps motion and download fallbacks explicit", async () => {
  const [page, css, layout, packageJson] = await Promise.all([
    readFile(new URL("app/page.tsx", projectRoot), "utf8"),
    readFile(new URL("app/globals.css", projectRoot), "utf8"),
    readFile(new URL("app/layout.tsx", projectRoot), "utf8"),
    readFile(new URL("package.json", projectRoot), "utf8"),
  ]);

  assert.match(page, /process\.env\.NEXT_PUBLIC_APP_STORE_URL/);
  assert.match(page, /process\.env\.NEXT_PUBLIC_APK_URL/);
  assert.match(page, /Coming soon/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /\.page-turn-video\s*\{[\s\S]*?display:\s*none/);
  assert.match(layout, /themeColor:\s*"#17120e"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton|drizzle/);
});
