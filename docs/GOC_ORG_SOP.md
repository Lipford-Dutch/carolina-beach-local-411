# GOC Organization GitHub Uplift SOP

## Intake Gate

- Confirm the repository name, owner, visibility, and destination organization.
- Confirm whether the existing Sites deployment remains the production channel.
- Verify there are no unrelated project references before publishing.
- Confirm GitHub Actions, Pages, and security features are allowed by the
  organization before the first protected-branch change.

## Repository Standards

- Maintain a current README with purpose, product scope, development commands,
  validation commands, content policy, and uplift readiness.
- Include `SECURITY.md`, issue templates, and a pull request template.
- Keep `.env.example` aligned with runtime needs when environment variables are
  introduced.
- Do not commit build output, local logs, runtime state, or generated archives.
- Keep content claims source-backed and dated.

## Validation Standard

- Run lint before uplift.
- Run the production build before uplift.
- Run server-render smoke tests before uplift.
- Search for known unrelated context terms before handoff.
- Record any known caveats in `docs/HANDOFF.md`.

## GitHub Landing Standard

- For a new empty repository, import the validated existing history to `main`
  before enabling its ruleset; use pull requests for subsequent changes.
- Use Conventional Commits for local commits.
- Require CI and CodeQL after their exact check names have run at least once.
- Keep workflow permissions least-privilege and pin supported major action tags.
- Verify the Pages URL and repository security settings rather than inferring
  success from workflow files alone.
- Keep Hostinger publishing manual until a credential-safe deployment design is
  approved.
