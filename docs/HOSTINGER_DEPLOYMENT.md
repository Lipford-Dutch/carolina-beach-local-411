# Hostinger Deployment Runbook

## Preconditions

- Confirm the production hostname and its DNS authority.
- Confirm Hostinger's document root, normally `public_html` for the primary site.
- Back up the current document root and record a rollback location.
- Ensure TLS is active before redirecting public traffic.

Do not put Hostinger credentials, API tokens, or private keys in this repository.

## Build

From a clean checkout with Node.js 22.13 or newer:

```powershell
npm ci
$env:PUBLIC_SITE_URL = "https://your-production-hostname.example"
npm run check
```

The deployable files are inside `hostinger-dist/`. Review
`deployment-manifest.json` and confirm `publicUrl` matches the production origin.

## Publish

1. Download the CI artifact or use the locally validated `hostinger-dist/`.
2. Back up existing production files outside the document root.
3. Upload the **contents** of `hostinger-dist/`, including `.htaccess`, to the
   document root. Do not upload the parent directory itself.
4. Keep the previous release available for rollback until verification passes.
5. Clear Hostinger/CDN caches only after all files are present.

## Verification

- Load the canonical HTTPS URL in a private browser window.
- Test search, filters, route selection, local saves, holiday themes, outbound
  links, keyboard navigation, and a narrow mobile viewport.
- Verify `/robots.txt`, `/sitemap.xml`, a missing route, and static asset loads.
- Confirm there are no mixed-content, CSP, 404, or JavaScript console errors.
- Inspect response headers for CSP, `X-Content-Type-Options`, frame protection,
  referrer policy, and permissions policy.

## Rollback

If verification fails, restore the complete previous document-root backup,
clear caches, and retest the prior release. Record the failed manifest timestamp
and observed errors before attempting a corrected deployment.

## Current Boundary

This repository prepares and validates the release package. It does not contain
production Hostinger access, a confirmed production domain, or proof of a live
Hostinger deployment.
