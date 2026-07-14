import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://carolina-beach-411.test${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the production planner", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Carolina Beach Local Vendors &amp; Beach Vibes 411<\/title>/i);
  assert.match(html, /Carolina Beach,[\s\S]*planned in 3 minutes/i);
  assert.match(html, /Build my 3-stop plan/i);
  assert.match(html, /Carolina Beach Market/i);
  assert.match(html, /Tony Silvagni Surf School/i);
  assert.match(html, /Beach 411, before your feet hit the sand/i);
  assert.doesNotMatch(html, /codex-preview|starter project|taking shape/i);
});

test("renders source-first external links", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /https:\/\/www\.carolinabeach\.gov\/201\/Carolina-Beach-Market/i);
  assert.match(html, /https:\/\/www\.carolinabeach\.gov\/249\/Parking/i);
  assert.match(html, /https:\/\/cbboardwalk\.com\//i);
  assert.match(html, /https:\/\/www\.weather\.gov\/safety\/ripcurrent/i);
});
