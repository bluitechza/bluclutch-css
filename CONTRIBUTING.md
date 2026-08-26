# Contributing

Thanks for helping keep `bluclutch-css` sharp. It's a small, opinionated design system — contributions should reinforce the [design principles](./docs/design-principles.md), not broaden the surface for its own sake.

## Setup

No install is needed to work on the library or view the gallery:

```bash
# preview the demo (any static server works)
npx serve .          # then open /demo/index.html
# or: php -S 127.0.0.1:8123 -t .

# rebuild the single-file bundle after changing src/
npm run build        # node build.mjs → dist/bluclutch.css + .min.css (no deps)
```

`npm run build:demo` optionally compiles a real Tailwind build of the gallery; it needs `tailwindcss` installed.

## Project layout

```
src/            source modules — one concern per file, imported by index.css
dist/           generated bundle (do not edit by hand)
demo/           the component gallery
docs/           documentation
tokens.json     tokens in Style Dictionary format
build.mjs       bundles src/ into dist/
```

## Authoring conventions

- **Plain CSS, no `@apply`.** Every component must work without Tailwind, so read from the tokens (`var(--primary)`, …) rather than utility classes.
- **`@layer components`** for component classes (and `@layer base` for ground rules), so consumer utilities can still override them.
- **Read from tokens, never hard-code colours** — that's what makes light/dark and white-label work for free.
- **Naming:** block `.thing`, element `.thing__part`, modifier `.thing--variant` (loose BEM). Keep the `bc-` prefix on `@keyframes` to avoid collisions.
- **Hold the identity:** square (`--radius: 0`), monochrome (one accent), hairline borders, blueprint corner marks intact. See the do/don't list.

## Adding a component

1. Add it to the most fitting `src/*.css` module (or a new one) inside `@layer components`.
2. If you created a new file, add an `@import` to `src/index.css` (order: base → branding → blueprint → components → …).
3. Show it in `demo/index.html`.
4. Document it in `docs/components.md` (add a row to the quick-reference table and a markup example).
5. Add a bullet to `CHANGELOG.md`.
6. Run `npm run build` to refresh `dist/`.

## Keeping tokens in sync with the app

The tokens are a **copy** of the BluClutch app's `design.md` palette — the app and library are intentionally independent. If the app's palette or fonts change, update **both** `src/theme.css` and `tokens.json` to match, and note it in the changelog.

## Commits & versioning

- Conventional, imperative commit subjects (e.g. `Add pagination component`).
- Semver: tokens/removals that break consumers → major; new components/tokens → minor; fixes → patch. Record every change in `CHANGELOG.md`.
