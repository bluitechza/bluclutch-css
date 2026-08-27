# Changelog

All notable changes to `bluclutch-css` are documented here. Format loosely
follows [Keep a Changelog](https://keepachangelog.com); versions follow semver.

## [0.3.0] — 2026-08-27

### Added
- **Dark mode:** a user-facing light/dark toggle via `[data-theme="dark"]` on any scope, plus automatic `prefers-color-scheme` follow when no `data-theme` is set (`data-theme="light"` opts out). Reuses the accent-900 palette, so it stays monochrome. The dark triggers also set `color-scheme` so native controls match. The demo gains a **Light / Dark / Auto** switcher (built from `.segmented`) with anti-flash persistence; `docs/theming.md` documents wiring a toggle.

### Fixed
- Demo "Growth" card tinted its background with the fixed ramp step `--accent-100`, which doesn't flip for dark mode — content became unreadable on the dark ground. Switched it to the theme-aware `--accent` / `--accent-foreground` pair.

### Note
- `.dark` (the internal / staff application shell) is unchanged and remains a separate concept from the new `data-theme` toggle — it just shares the same accent-900 palette.
- The `--accent-100…900` ramp holds **fixed** brand colours across themes (they're for data-viz). For a tinted surface that should adapt to light/dark, use the semantic `--accent` / `--accent-foreground` tokens, not a raw ramp step.

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
- **Docs:** a `docs/` reference (getting-started, design-principles, tokens, components, theming) and `CONTRIBUTING.md`; README expanded with a documentation index, browser support and license.

## [0.1.0] — 2026-08-26

### Added
- Initial release: design tokens (`theme.css`), base rules, the blueprint frame, and the core components (`.btn`, `.tag`, `.card`, inputs, `.table`, `.tab`, `.eyebrow`). Tailwind v4 preset with a no-build plain-CSS fallback, plus a demo gallery.
