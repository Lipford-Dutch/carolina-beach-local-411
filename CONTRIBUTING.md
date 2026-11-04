# Contributing

## Workflow

1. Open or reference an issue before material work.
2. Branch from current `main` using a short descriptive name.
3. Install exactly from the lockfile with `npm ci`.
4. Keep changes scoped and preserve source links for factual content.
5. Run `npm run check` before opening a pull request.
6. Use Conventional Commits and complete the pull request checklist.

## Content Rules

- Link new vendor, Town, visitor, marina, event, and safety claims to a current
  first-party or authoritative source.
- Mark community-provided details as pending when they cannot be verified.
- Do not convert seasonal presentation themes into factual event claims.
- Keep unrelated client material and private files out of this repository.

## Engineering Rules

- Preserve keyboard, screen-reader, touch, mobile, and reduced-motion behavior.
- Do not add analytics, accounts, payments, or a database without an approved
  architecture and privacy review.
- Never commit credentials, `.env` files, deployment tokens, or generated build
  directories.
- Treat lint, tests, static packaging, and production dependency audit as the
  minimum merge gate.
