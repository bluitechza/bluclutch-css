# Getting started

## Requirements

- **With Tailwind:** Tailwind CSS **v4** (the library uses `@theme` / `@theme inline`).
- **Without Tailwind:** nothing — the tokens and component classes are plain CSS.
- A modern evergreen browser. The system uses `color-mix()`, cascade layers (`@layer`) and `:focus-visible`, supported in Chrome/Edge 111+, Firefox 113+, and Safari 16.2+.

## Install

```bash
npm install bluclutch-css
```

Or vendor it: copy the `src/` folder (or a single `dist/bluclutch.css`) into your project. No build is required to consume the library.

## Three ways to consume it

### 1. As a Tailwind v4 preset (recommended)

Import the preset **after** Tailwind in your CSS entry (e.g. `app.css`):

```css
@import "tailwindcss";
@import "bluclutch-css";
```

Order matters:

- importing after Tailwind lets the design tokens feed Tailwind's utilities, so `bg-background`, `text-primary`, `font-heading`, `shadow-md`, `border-border`, `text-accent-foreground` etc. all render Industry;
- the component classes live in `@layer components`, so utility classes still win when you need to override them.

```html
<div class="bg-background text-foreground font-sans">
  <h1 class="font-heading text-5xl">Simple, transparent pricing</h1>
  <button class="btn btn--primary">Register your school</button>
</div>
```

### 2. As plain CSS (no build)

Link the source (or the bundled build) and use the component classes directly. Everything works except the Tailwind *utility* classes:

```html
<link rel="stylesheet" href="node_modules/bluclutch-css/src/index.css" />
<!-- or the single-file bundle -->
<link rel="stylesheet" href="node_modules/bluclutch-css/dist/bluclutch.css" />

<button class="btn btn--primary">Register your school</button>
```

### 3. Modular imports

Pull only the parts you need:

```css
@import "bluclutch-css/theme";      /* tokens only */
@import "bluclutch-css/blueprint";  /* the frame only */
@import "bluclutch-css/components";  /* buttons, tags, cards, … */
@import "bluclutch-css/branding";   /* white-label scopes */
@import "bluclutch-css/print";      /* @media print receipts */
```

## Fonts

The tokens reference **Barlow** (body) and **Barlow Condensed** (headings). `src/theme.css` pulls them from Google Fonts via `@import url(...)`, so they load automatically. To self-host instead, remove that `@import` and provide the two families yourself, then keep `--font-sans` / `--font-heading` pointed at them.

## Build the bundle

The published `dist/` is generated; to rebuild it after changing `src/`:

```bash
npm run build        # node build.mjs → dist/bluclutch.css + dist/bluclutch.min.css
```

`build.mjs` has **no dependencies**. There is also an optional `npm run build:demo`, which compiles a real Tailwind build of the gallery (requires `tailwindcss`).

## Next

- [Design principles](./design-principles.md) — the rules the system enforces.
- [Tokens](./tokens.md) — the full palette and type reference.
- [Components](./components.md) — the class catalogue.
