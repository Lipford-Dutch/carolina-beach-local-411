# Security Policy

## Supported Version

The latest commit on `main` is the only supported version.

## Report A Vulnerability

Use the repository's **Security > Report a vulnerability** workflow. Do not
open a public issue for suspected vulnerabilities or include credentials,
cookies, personal information, or exploit details in public discussions.

Include the affected route or file, impact, reproduction steps, and a safe proof
of concept. The maintainer will acknowledge a complete report, assess severity,
and coordinate disclosure after a fix is available.

## Baseline Controls

- GitHub Actions use least-privilege permissions and current supported majors.
- CI blocks high and critical dependency findings in production dependencies.
- CodeQL, dependency review, Dependabot, and secret scanning are expected to be
  enabled at the repository level.
- Hostinger's `.htaccess` applies CSP, anti-framing, MIME-sniffing, referrer,
  browser-capability, and cache controls.
- The application does not require accounts, payment data, or server-side
  storage; route and swag selections remain device-local.

Security headers complement dependency review and secure hosting configuration;
they do not replace them.
