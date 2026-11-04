# GitHub Repository Settings

## Repository

- Owner: `Lipford-Dutch`
- Name: `carolina-beach-local-411`
- Visibility: public
- Default branch: `main`
- Homepage: `https://lipford-dutch.github.io/carolina-beach-local-411/`
- Features: Issues and Projects enabled; wiki disabled unless a real need emerges.
- Pages source: GitHub Actions.

Recommended topics: `carolina-beach`, `local-guide`, `nextjs`, `react`,
`typescript`, `vinext`, `github-pages`, `hostinger`.

## Security

Enable private vulnerability reporting, dependency graph, Dependabot alerts,
Dependabot security updates, secret scanning, and push protection where the
organization plan supports them. Keep workflow permissions read-only by default
and do not allow Actions to approve pull requests.

## Main Branch Ruleset

After the initial import and first successful workflow run:

- Require pull requests before merging.
- Require one approval, with an owner/admin bypass to avoid a single-maintainer
  deadlock.
- Dismiss stale approvals and require conversation resolution.
- Require `Validate and package` and the CodeQL result after their exact check
  names are visible.
- Block force pushes and branch deletion.
- Require branches to be current before merge when practical.

## Project

Create the organization project **Carolina Beach Local 411 Delivery** with
Board and Roadmap views. Use Status, Priority, Area, and Target release fields.
Seed it with Hostinger deployment, vendor verification, Town News maintenance,
and content-management decisions documented in the session handoff.
