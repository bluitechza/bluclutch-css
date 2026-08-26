# Changelog

All notable changes to `bluclutch-css` are documented here. Format loosely
follows [Keep a Changelog](https://keepachangelog.com); versions follow semver.

## [0.2.0] — 2026-08-26

### Added
- **Form controls:** `.checkbox`, `.radio`, `.switch`, `.segmented` (the Monthly/Annual toggle).
- **Feedback:** `.alert` (+ `--accent`/`--danger`/`--muted`), `.empty`, `.skeleton`, `.tooltip`.
- **Navigation:** `.breadcrumb`, `.pagination` (Laravel-paginator friendly), `.menu` dropdown.
- **Overlays:** `.dialog`, `.sheet`, `.overlay-backdrop`.
- **Data display:** `.stat` (KPI card), `.avatar` / `.avatar-group`, `.status` dots, `.progress`, and the `.stepper` for the nine-stage learner journey.
- **White-label theming:** `[data-brand]` / `[data-brand-accent]` scopes (`src/branding.css`) so a school's custom brand colour re-accents the system — backs the Professional plan feature.
- **Print:** `@media print` receipt/document layer (`src/print.css`) with `.receipt`, `.no-print`, `.print-only`.
- **DX:** `tokens.json` (Style Dictionary / Figma-syncable), `LICENSE` (MIT), this changelog, and `build.mjs` → `dist/bluclutch.css` + `dist/bluclutch.min.css` (framework-free bundle for CDN use).

## [0.1.0] — 2026-08-26

### Added
- Initial release: design tokens (`theme.css`), base rules, the blueprint frame, and the core components (`.btn`, `.tag`, `.card`, inputs, `.table`, `.tab`, `.eyebrow`). Tailwind v4 preset with a no-build plain-CSS fallback, plus a demo gallery.
