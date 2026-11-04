# Architecture

## System Shape

The repository produces three independently deployed surfaces:

1. The React application, currently served by OpenAI Sites.
2. A static GitHub Pages project home from `pages/`.
3. A static Hostinger package generated into `hostinger-dist/`.

The application is intentionally a single public route. React components use
Next-compatible APIs while Vinext and Vite provide development, server rendering,
and build output. `scripts/build-static-hostinger.mjs` renders the root route,
copies browser assets, writes static fallbacks and indexing files, and adds an
Apache security and cache policy.

## Data And State

Vendor, Town News, safety, route, and seasonal content are source-controlled.
There is no database or private API. Route and swag selections use browser-local
state. Holiday themes are presentation-only and do not change factual content.

## Trust Boundaries

- External business and civic URLs are untrusted destinations and must remain
  visibly identifiable.
- Content updates require authoritative sources or an explicit pending label.
- Hostinger credentials and GitHub tokens remain outside the repository.
- The generated static package contains no secrets and requires no server-side
  JavaScript.

## Release Flow

`npm run check` is the local and CI release gate. A successful run produces
`hostinger-dist/`, which CI uploads as a short-lived artifact. GitHub Pages is
deployed separately from `pages/`. Hostinger promotion is manual until the owner
chooses a credential-safe deployment mechanism.
