import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const sourceDirectory = path.join(root, "dist", "client");
const outputDirectory = path.join(root, "hostinger-dist");
const workerPath = path.join(root, "dist", "server", "index.js");
const defaultOrigin = "https://carolina-beach-local-411.willyd61.chatgpt.site";
const publicOrigin = (process.env.PUBLIC_SITE_URL || defaultOrigin).replace(/\/$/, "");

await rm(outputDirectory, { force: true, recursive: true });
await mkdir(outputDirectory, { recursive: true });
await cp(sourceDirectory, outputDirectory, { recursive: true });

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("static-export", String(Date.now()));
const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request(`${defaultOrigin}/`, { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { passThroughOnException() {}, waitUntil() {} },
);

if (!response.ok) {
  throw new Error(`Static render failed with HTTP ${response.status}`);
}

let html = await response.text();
html = html.replaceAll(defaultOrigin, publicOrigin);

if (html.includes("/_vinext/image")) {
  throw new Error("Static output still contains dynamic image optimizer URLs");
}

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "connect-src 'self'",
  "font-src 'self' data:",
  "form-action 'none'",
  "frame-ancestors 'none'",
  "img-src 'self' data: https:",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "upgrade-insecure-requests",
].join("; ");

const htaccess = `Options -Indexes
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]

<IfModule mod_headers.c>
  Header always set Content-Security-Policy "${contentSecurityPolicy}"
  Header always set Cross-Origin-Opener-Policy "same-origin"
  Header always set Cross-Origin-Resource-Policy "same-origin"
  Header always set Permissions-Policy "camera=(), geolocation=(), microphone=(), payment=(), usb=()"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "DENY"
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${publicOrigin}/</loc></url>
</urlset>
`;

await Promise.all([
  writeFile(path.join(outputDirectory, "index.html"), html, "utf8"),
  writeFile(path.join(outputDirectory, "404.html"), html, "utf8"),
  writeFile(path.join(outputDirectory, ".htaccess"), htaccess, "utf8"),
  writeFile(path.join(outputDirectory, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${publicOrigin}/sitemap.xml\n`, "utf8"),
  writeFile(path.join(outputDirectory, "sitemap.xml"), sitemap, "utf8"),
  writeFile(
    path.join(outputDirectory, "deployment-manifest.json"),
    `${JSON.stringify({ application: "Carolina Beach Local 411", packageVersion: JSON.parse(await readFile(path.join(root, "package.json"), "utf8")).version, publicOrigin }, null, 2)}\n`,
    "utf8",
  ),
]);

process.stdout.write(`Static Hostinger package created at ${outputDirectory}\n`);
