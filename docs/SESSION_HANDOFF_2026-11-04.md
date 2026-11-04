# Session Handoff — 2026-11-04

## Objective

Migrate the existing Carolina Beach 411 application to a new Lipford-Dutch
GitHub repository, apply GOC repository and security standards, publish a GitHub
Pages project home, and prepare a validated Hostinger release path.

## Repository Destination

- Organization: `Lipford-Dutch`
- Repository: `carolina-beach-local-411`
- Repository URL:
  `https://github.com/Lipford-Dutch/carolina-beach-local-411`
- Visibility: public
- Local branch: `main`
- Initial published commit: `6c5d6ca5162717eabbcf88aa89a9ecddae5ef339`
- GitHub Pages URL:
  `https://lipford-dutch.github.io/carolina-beach-local-411/`
- Organization project:
  `https://github.com/orgs/Lipford-Dutch/projects/17`
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

## GitHub Publication State

- The public repository was created and `main` was pushed to `origin`.
- The unpublished local history was rewritten before the first successful push
  to use `willyd61@users.noreply.github.com`, preventing GitHub email-privacy
  rejection without changing any commit trees or messages.
- Repository metadata includes the Pages homepage, description, and the topics
  `carolina-beach`, `local-guide`, `nextjs`, `react`, `typescript`, `vinext`,
  `github-pages`, and `hostinger`.
- GitHub Pages uses GitHub Actions. The final handoff commit triggers a clean
  Pages, CI, and CodeQL verification run after Pages was enabled.
- Release immutability, squash-only merging, automatic head-branch deletion,
  auto-merge, and pull-request branch update suggestions are enabled.
- Dependency graph, Dependabot alerts and security updates, malware alerts,
  private vulnerability reporting, CodeQL advanced setup, secret scanning, and
  push protection are enabled. Grouped Dependabot security updates remain off;
  version-update grouping is defined in `.github/dependabot.yml`.
- Five Dependabot pull requests were opened automatically. They were not merged
  during migration and require normal review and CI.
- The active `Protect main` ruleset is configured for the default branch with
  organization-admin bypass, deletion and force-push protection, linear
  history, one approving review, stale-approval dismissal, CODEOWNER review,
  and conversation resolution. GitHub required a fresh mobile verification to
  finish saving the ruleset; confirm the ruleset appears under repository
  settings before treating this one control as complete.

## Organization Project and Backlog

**Carolina Beach Local 411 Delivery** is organization project `#17`. It is
private by design and linked to the public repository. The product-launch
template supplies a prioritized backlog, status board, current iteration,
roadmap, bug and personal views, seven enabled workflows, and fields for status,
priority, team, size, estimate, iteration, start date, and target date.

The project README documents the operating agreement and Hostinger release
gate. Five open issues were imported:

- `#6` Configure production Hostinger hostname and deploy validated package.
- `#7` Verify Angels Auto Repair first-party listing details.
- `#8` Verify Generals of Chaos listing details and official link.
- `#9` Recheck seasonal dates and vendor details before holiday campaigns.
- `#10` Decide Town News managed-content approach.

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

At handoff time, the repository, issues, project, metadata, security settings,
and Pages configuration are published. GitHub CLI authentication for
`willyd61` is still invalid; browser and GitHub-connector authentication were
used for remote administration. Hostinger production deployment remains
pending because the production hostname and authenticated Hostinger access were
not supplied. Do not claim that deployment until the backup, upload, HTTPS,
redirect, route, header, and rollback checks in `HOSTINGER_DEPLOYMENT.md` pass.
