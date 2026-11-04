# Carolina Beach 411 Handoff

## Session Handoff — 2026-11-02

## Current State

The site is a Sites-compatible React/TypeScript application with one primary
route, a source-linked vendor catalog, device-local route saves, device-local
swag concept saves, a curated Town News section, and a client-side holiday theme
selector.

## Completed For Uplift

- Added or standardised Nollie's Taco Joint, HopLite Irish Pub, Pleasure Island
  Design, Angels Auto Repair, and Generals of Chaos.
- Kept user-submitted or unverified listings visibly bounded: Generals of Chaos
  is marked community-submitted; Angels Auto Repair uses a map search link until
  a verified first-party URL is available.
- Expanded filters with local services, news/media, and marina/ramp categories.
- Added a holiday theme control for Thanksgiving, Christmas, New Year's Eve,
  Easter, Memorial Day, 4th of July, Labor Day, and the year-round default.
- Added curated Town News cards for the Clean Marina certification, Coastal Park
  grant, rescue buoy, Holiday Market, Christmas Parade, Holiday Movie, and Santa
  by the Sea.
- Added local intel cards for news context, municipal marina details, and
  visitor information.
- Added public ramp guidance through Carolina Beach State Park and NC Wildlife
  sources.
- Added project charter, content source notes, GOC organization SOP, security
  policy, issue templates, and pull request template.

## Audit Summary

- Build and rendered HTML tests are the release gate; lint should also pass before
  publishing.
- Content is source-linked and the footer now says the information was checked on
  November 2, 2026. Civic schedules, business hours, and holiday dates remain
  changeable and are not treated as live data.
- Theme selection is intentionally presentation-only. It does not rewrite facts,
  vendor data, or event dates, and it is not persisted across visits.
- The main remaining product gap is an owner/editor workflow for updating vendor
  records and Town News without a code change.

## Known Caveats

- Island Gazette appears as a legacy/local-news archive. Public sources indicate
  the print paper ceased publication in 2023; active publication ownership or
  relaunch details need local confirmation.
- St. Joseph Street Marina is included as a user-requested stub. Public source
  confirmation for that exact marina name remains pending.
- Angels Auto Repair identity was supplied/confirmed for the Carolina Beach
  listing, but its current first-party web presence still needs confirmation.
- Generals of Chaos needs a verified category, address, phone, description, and
  official link before it should be promoted beyond a community listing.
- The target remote is `Lipford-Dutch/carolina-beach-local-411`; remote creation
  and publication must be verified separately from local preparation.
- CI, CodeQL, dependency review, Pages, and Hostinger packaging are prepared.
  Their hosted status is not complete until the repository is published and
  successful workflow runs are observed.

## Validation

Run the full release gate before pushing to GitHub:

```powershell
npm ci
npm run check
npm audit --audit-level=high
rg -n "<known unrelated project terms>" .
```

The authoritative migration continuation is
`docs/SESSION_HANDOFF_2026-11-04.md`.

## Next Phase

1. Confirm the two pending vendor records with owners or first-party sources.
2. Decide whether Town News should become a managed content feed or remain a
   curated, source-linked editorial section.
3. Add a lightweight editor/content schema only if non-developer updates are a
   real requirement; avoid introducing a database for static facts prematurely.
4. Recheck holiday dates, vendor hours, and Town announcements immediately before
   any seasonal campaign or public promotion.

## Source Boundaries

The unrelated `Gemini-CB Local Vendors & Beach Vibes 411 Website Build & Asset
Kit.pdf` and its finance/retirement material are intentionally excluded from this
project.
