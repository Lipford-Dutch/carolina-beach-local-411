# Session Handoff — 2026-11-04

## Objective

Migrate the existing Carolina Beach 411 application to a new Lipford-Dutch
GitHub repository, apply GOC repository and security standards, publish a GitHub
Pages project home, and prepare a validated Hostinger release path.

## Repository Destination

- Organization: `Lipford-Dutch`
- Repository: `carolina-beach-local-411`
- Intended visibility: public
- Local branch: `main`
- Current Sites deployment:
  `https://carolina-beach-local-411.willyd61.chatgpt.site/`

## Prepared Work

- Upgraded the Next/Vinext/Vite/React stack and removed known production audit
  findings at high and critical severity.
- Added CI, CodeQL, dependency review, Dependabot, CODEOWNERS, issue templates,
  pull request governance, support, conduct, and security policies.
- Added a responsive GitHub Pages project home in `pages/`.
- Added a deterministic Hostinger static build and Apache security policy.
- Added architecture, deployment, repository settings, project seed, and
  contribution documentation.

## Required Validation

```powershell
npm ci
npm run check
npm audit --audit-level=high
```

The generated Hostinger artifact must contain `index.html`, `404.html`,
`.htaccess`, `robots.txt`, `sitemap.xml`, browser assets, and
`deployment-manifest.json`. It must not contain `/_vinext/image` URLs.

Validation completed on November 4, 2026:

- `npm run check`: passed.
- Production dependency audit: zero vulnerabilities.
- Rendered HTML tests: 2 passed.
- Hostinger artifact: generated successfully.
- Playwright desktop and 390x844 mobile checks: passed for the application and
  GitHub Pages hero; Christmas theme and route-save interactions worked.
- Browser console: zero errors and zero warnings on both final surfaces.

Vinext emits non-failing source-map and dynamic-import build warnings. Node 26
also warns that `module.register()` is deprecated; CI targets Node 22.13, where
the loader registration remains compatible.

## GitHub Publication Sequence

1. Create the public repository without starter files.
2. Add `origin` and push the existing `main` history.
3. Confirm CI, CodeQL, dependency review, and Pages workflows complete.
4. Enable the security settings listed in `REPOSITORY_SETTINGS.md`.
5. Apply the main-branch ruleset after exact workflow check names exist.
6. Create **Carolina Beach Local 411 Delivery** from `PROJECT_BOARD.md` and add
   the seed issues.

## Hostinger Takeover

The next agent needs the confirmed production hostname and an authenticated,
secure Hostinger session. Build with `PUBLIC_SITE_URL` set to that hostname,
follow `HOSTINGER_DEPLOYMENT.md`, retain a rollback copy, and verify the live
site before describing the deployment as complete.

## Content Gates

- Angels Auto Repair still needs a verified first-party web presence.
- Generals of Chaos still needs verified listing details and an official link.
- Town News is curated content, not an automated feed.
- Holiday themes are presentation-only; dates and operating claims require a
  fresh source check before seasonal promotion.
- Island Gazette and St. Joseph Street references retain the caveats recorded in
  the earlier handoff and audit.

## Explicit Exclusion

The unrelated `Gemini-CB Local Vendors & Beach Vibes 411 Website Build & Asset
Kit.pdf` and all finance or retirement material remain outside this project.

## Completion Boundary

Local preparation and validation are distinct from GitHub publication, Pages
deployment, organization project creation, and Hostinger production deployment.
Only mark each step complete after its remote state is verified.

At handoff time, GitHub CLI authentication for `willyd61` is invalid and no
remote is configured. Remote repository, Pages, organization project, settings,
and Hostinger deployment therefore remain pending until authenticated action is
approved and completed.
