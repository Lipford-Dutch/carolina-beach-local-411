# GOC Organization GitHub Uplift SOP

## Intake Gate

- Confirm the repository name, owner, visibility, and destination organization.
- Confirm whether the existing Sites deployment remains the production channel.
- Verify there are no unrelated project references before publishing.
- Keep GitHub Actions dormant until the final merge window unless the owner
  explicitly enables CI earlier.

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

- Create an owner-approved branch before pushing to GitHub.
- Use Conventional Commits for local commits.
- Open a draft pull request for organization review.
- Reconfirm intent before merge when the PR head changes.
- Do not claim hosted CI status when GitHub Actions are disabled or unavailable.
