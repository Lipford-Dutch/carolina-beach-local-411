# Carolina Beach Local Vendors & Beach Vibes 411

[![CI](https://github.com/Lipford-Dutch/carolina-beach-local-411/actions/workflows/ci.yml/badge.svg)](https://github.com/Lipford-Dutch/carolina-beach-local-411/actions/workflows/ci.yml)
[![CodeQL](https://github.com/Lipford-Dutch/carolina-beach-local-411/actions/workflows/codeql.yml/badge.svg)](https://github.com/Lipford-Dutch/carolina-beach-local-411/actions/workflows/codeql.yml)
[![GitHub Pages](https://github.com/Lipford-Dutch/carolina-beach-local-411/actions/workflows/pages.yml/badge.svg)](https://github.com/Lipford-Dutch/carolina-beach-local-411/actions/workflows/pages.yml)

A mobile-first Carolina Beach guide for local vendors, Town News, beach-day
planning, safety information, and seasonal presentation themes.

- [Live guide](https://carolina-beach-local-411.willyd61.chatgpt.site/)
- [GitHub Pages project home](https://lipford-dutch.github.io/carolina-beach-local-411/)
- [Issues](https://github.com/Lipford-Dutch/carolina-beach-local-411/issues)

## What It Includes

- Searchable, filterable local vendor and service directory.
- Three-stop route builder with device-local saves.
- Source-linked Town News and Carolina Beach essentials.
- Thanksgiving, Christmas, New Year's Eve, Easter, Memorial Day, 4th of July,
  and Labor Day presentation themes.
- Static Hostinger release package with security headers and deployment manifest.
- Separate GitHub Pages project home for repository discovery and governance.

## Delivery Targets

| Target | Purpose | Output |
| --- | --- | --- |
| OpenAI Sites | Current public application | Existing Sites deployment |
| GitHub Pages | Repository project home | `pages/` |
| Hostinger | Production-ready static guide | `hostinger-dist/` artifact |

The application uses React, TypeScript, Next-compatible components, Vinext, and
Vite. GitHub Pages hosts the project landing page, not the application runtime.
Hostinger receives the generated static release package.

## Local Development

Requires Node.js 22.13 or newer and npm 11.6.2.

```powershell
npm ci
npm run dev
```

Run the complete release gate:

```powershell
npm run check
```

This lints, tests server-rendered HTML, builds the Hostinger package, and blocks
high or critical production dependency vulnerabilities.

## Build For Hostinger

```powershell
$env:PUBLIC_SITE_URL = "https://example.com"
npm run build:hostinger
```

Upload the contents of `hostinger-dist/` to the production document root. See
[`docs/HOSTINGER_DEPLOYMENT.md`](docs/HOSTINGER_DEPLOYMENT.md) for DNS, TLS,
cache, rollback, and verification steps.

## Content And Security

Business and civic claims must remain source-linked and dated. Unverified local
knowledge stays visibly marked as community-submitted or pending verification.
Do not commit credentials, Hostinger tokens, customer data, or private source
material. Report vulnerabilities through GitHub private vulnerability reporting.

## Project Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/CONTENT_SOURCES.md`](docs/CONTENT_SOURCES.md)
- [`docs/GOC_ORG_SOP.md`](docs/GOC_ORG_SOP.md)
- [`docs/HOSTINGER_DEPLOYMENT.md`](docs/HOSTINGER_DEPLOYMENT.md)
- [`docs/REPOSITORY_SETTINGS.md`](docs/REPOSITORY_SETTINGS.md)
- [`docs/SESSION_HANDOFF_2026-11-04.md`](docs/SESSION_HANDOFF_2026-11-04.md)

Copyright retained by the repository owner. No open-source licence has been
granted.
