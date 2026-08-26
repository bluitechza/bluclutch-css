# bluclutch-css

The **Industry / BluClutch** design system, packaged as a [Tailwind CSS v4](https://tailwindcss.com) preset.

Steel-blue accent on a light technical ground · Barlow Condensed over Barlow · **square corners** · hairline borders · a single steel accent (monochrome by design) · the signature **blueprint frame** with `+` registration marks.

It ships design tokens *and* ready-made component classes, so you can consume it two ways:

- **With Tailwind v4** — the tokens feed Tailwind's utilities (`bg-background`, `text-primary`, `font-heading`, `shadow-md`, …).
- **Without any build** — the tokens and component classes (`.blueprint`, `.btn`, `.card`, `.tag`, …) are plain CSS. Just link the stylesheet.

## Documentation

Full docs live in [`docs/`](./docs/index.md):

- [Getting started](./docs/getting-started.md) — install & the three ways to consume it
- [Design principles](./docs/design-principles.md) — the rules the system enforces
- [Tokens](./docs/tokens.md) — the full colour, type, radius & shadow reference
- [Components](./docs/components.md) — every class, modifier & markup example
- [Theming](./docs/theming.md) — white-label brand colours, the dark shell & print

This README is the quick tour; the pages above are the reference.

---

## Install

```bash
npm install bluclutch-css
```

Or use it straight from a checkout — there's no build step required to consume it.

---

## Usage

### With Tailwind v4 (recommended)

In your Tailwind entry (e.g. `app.css`), import the preset **after** Tailwind:

```css
@import "tailwindcss";
@import "bluclutch-css";
```

Order matters: importing after Tailwind lets the tokens drive Tailwind's utilities and keeps the component layer overridable by utility classes. You now get Industry-flavoured utilities:

```html
<div class="bg-background text-foreground font-sans">
  <h1 class="font-heading text-4xl">Simple, transparent pricing</h1>
  <button class="bg-primary text-primary-foreground px-6 h-12">Register your school</button>
</div>
```

…and the component classes below.

### Without Tailwind

Link the source directly — everything except the Tailwind utility classes still works:

```html
<link rel="stylesheet" href="node_modules/bluclutch-css/src/index.css" />
<button class="btn btn--primary">Register your school</button>
```

### Modular imports

Pull only what you need:

```css
@import "bluclutch-css/theme";       /* tokens only */
@import "bluclutch-css/blueprint";   /* the frame only */
@import "bluclutch-css/components";  /* buttons, tags, cards, … */
```

---

## Tokens

Colours are CSS custom properties on `:root` (light) and `.dark` (the internal shell), mapped onto Tailwind's names via `@theme inline`.

| Token | Light | Meaning |
| --- | --- | --- |
| `--background` | `#f2f2f3` | the technical ground |
| `--surface` | `#e9e9ea` | dialogs / menus, one step up |
| `--foreground` | `#1d1f20` | ink |
| `--primary` / `--ring` | `#5980a6` | the steel accent — the one solid object |
| `--accent` | `#eef6ff` | hover tint (accent-100) |
| `--accent-foreground` | `#2c455d` | body-size accent text (accent-800) |
| `--destructive` | `#2c455d` | deep accent — **no red**; the palette is monochrome |
| `--border` / `--input` | `#d0d0d1` | the hairline |
| `--muted-foreground` | `#7a7a7d` | meta text |

Plus an accent ramp (`--accent-100 … --accent-900`), `--chart-1…5`, `--sidebar-*`, `--font-sans` / `--font-heading`, `--shadow-sm/md/lg`, and `--radius: 0`.

> **Contrast rule:** accent-on-ground is ~3:1 — fine for chrome and large text, **not body copy**. For paragraph-size accent text use `--accent-foreground` (accent-800), never `--primary`.

---

## Components

All component classes read from the tokens, so they follow light/dark and any retheme automatically.

### Blueprint frame — the signature device

```html
<div class="blueprint" style="padding: 1.5rem">
  <i class="corner tl"></i><i class="corner tr"></i>
  <i class="corner bl"></i><i class="corner br"></i>
  <p class="eyebrow">Learners</p>
  <h3 class="card__title">Learner journey tracking</h3>
  <p class="card__meta">Nine stages on one enrolment record.</p>
</div>
```

Wrap any card, figure or the one primary CTA. Never round it, never drop the corner marks.

### Buttons

```html
<button class="btn btn--primary">Primary</button>   <!-- the one solid object -->
<button class="btn btn--outline">Secondary</button>  <!-- use this for most actions -->
<button class="btn btn--ghost">Ghost</button>
<button class="btn btn--secondary">Neutral</button>
<a class="btn btn--link">Link</a>
```

Sizes: `.btn--sm`, `.btn--lg`, `.btn--icon`, `.btn--block`.

### Tags

```html
<span class="tag tag--accent">Trial ending</span>   <!-- attention / time-sensitive -->
<span class="tag tag--neutral">Active</span>         <!-- steady state -->
<span class="tag tag--outline">Archived</span>       <!-- off / backgrounded -->
```

### Card, form controls, table, tabs

```html
<div class="card">…</div>

<label class="field-label">School name</label>
<input class="input" />            <!-- add .input--filled to sit on the surface -->
<textarea class="textarea"></textarea>

<table class="table">…</table>

<button class="tab tab--active">Overview</button>   <!-- 2px accent underline, not a pill -->
<button class="tab">Billing</button>
```

Plus `.eyebrow` — the uppercase tracked label above headings, used across the app.

### Selection controls

```html
<div class="segmented">                              <!-- the Monthly/Annual toggle -->
  <button class="segmented__option" aria-selected="false">Monthly</button>
  <button class="segmented__option" aria-selected="true">Annual</button>
</div>

<label class="switch">
  <input type="checkbox" />
  <span class="switch__track"><span class="switch__thumb"></span></span>
</label>

<input class="checkbox" type="checkbox" />
<input class="radio" type="radio" />
```

### Feedback

```html
<div class="alert alert--accent"><div>
  <p class="alert__title">Trial ending</p>
  <p class="alert__body">Add a payment method to stay active.</p>
</div></div>                                          <!-- also --danger, --muted -->

<div class="empty"><p class="empty__title">No learners yet</p>…</div>

<div class="skeleton skeleton--title"></div>         <!-- also --text, --block -->

<button class="tooltip" data-tooltip="Explains this action">Advanced export</button>
```

### Navigation

```html
<nav class="breadcrumb"><a href="#">Learners</a><span class="breadcrumb__sep">/</span><span aria-current="page">Thabo M.</span></nav>

<nav class="pagination"><a href="#" aria-current="page">1</a><a href="#">2</a><a href="#">3</a></nav>

<div class="menu">
  <p class="menu__label">Learner</p>
  <button class="menu__item">View profile</button>
  <div class="menu__sep"></div>
  <button class="menu__item">Suspend</button>
</div>
```

### Overlays

```html
<div class="overlay-backdrop"></div>
<div class="dialog">
  <p class="dialog__title">Cancel subscription?</p>
  <p class="dialog__desc">You'll keep access until the period ends.</p>
  <div class="dialog__footer">…buttons…</div>
</div>

<aside class="sheet">…</aside>                        <!-- add .sheet--left for a left panel -->
```

### Data display

```html
<div class="stat">
  <p class="stat__label">Active learners</p>
  <p class="stat__value">248</p>
  <p class="stat__delta stat__delta--up">▲ 12 this month</p>
</div>

<div class="avatar-group"><span class="avatar">TM</span><span class="avatar">AK</span></div>

<span class="status status--active">Active</span>   <!-- also --attention, --off -->

<div class="progress"><div class="progress__bar" style="width:62%"></div></div>
```

The **journey stepper** — mark stages `--done` / `--current`:

```html
<div class="stepper">
  <div class="step step--done"><span class="step__marker">✓</span><span class="step__label">Enrolled</span></div>
  <div class="step step--current"><span class="step__marker">3</span><span class="step__label">Learner's test</span></div>
  <div class="step"><span class="step__marker">4</span><span class="step__label">Driving test</span></div>
</div>
```

---

## The dark shell

`.dark` is **not** a user-facing light/dark toggle. It's the internal / application shell: wrap a BluClutch-staff layout in `.dark` to render it on the accent-900 ground — the cue that a screen belongs to staff, not to a school.

```html
<div class="dark" style="background: var(--background); color: var(--foreground)">
  …internal admin UI…
</div>
```

---

## White-label theming

The Professional plan's **custom brand colour** is just a scoped token override. Set `--brand-primary` on any wrapper and every component (and Tailwind utility) re-accents — hovers included:

```html
<div data-brand style="--brand-primary: #b0413e">
  …this school's UI, re-accented…
</div>
```

Unset, it falls back to the steel accent. Use `data-brand-accent` with `--brand-accent` / `--brand-accent-foreground` for the hover-tint pair. See `src/branding.css`.

## Print

`src/print.css` adds an ink-on-paper `@media print` layer for receipts and documents: `.no-print` hides chrome, `.print-only` reveals print-only nodes, and `.receipt` / `.receipt__header` / `.receipt__total` lay out a branded receipt.

## Tokens & bundle

- `tokens.json` — the palette, type, radius and shadow tokens in **Style Dictionary** format, ready to sync to Figma or feed other platforms.
- `npm run build` (`build.mjs`, no dependencies) bundles `src/` into `dist/bluclutch.css` and a minified `dist/bluclutch.min.css` — a framework-free single file for CDN or non-Tailwind use.

## Demo

Open `demo/index.html` in a browser — it links the library source directly, so no build is needed.

---

## Do / Don't

**Do** keep `--radius: 0`; wrap cards, figures and primary buttons in the blueprint frame; use `.btn--outline` for secondary actions; set body-size accent text to `--accent-foreground`; reserve `.dark` for the internal shell.

**Don't** reintroduce rounding on framed elements; give cards a fill or shadow (they're line drawings); add colour beyond the steel accent; or drop the corner marks from a blueprint element.

See the full [design principles](./docs/design-principles.md).

---

## Browser support

Modern evergreen browsers. The system uses `color-mix()`, cascade layers (`@layer`) and `:focus-visible` — Chrome/Edge 111+, Firefox 113+, Safari 16.2+.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). In short: plain CSS (no `@apply`), read from tokens, hold the square/monochrome identity, and document + changelog every addition.

## License

[MIT](./LICENSE) © 2026 BluClutch.

---

*Extracted from the BluClutch app's design system (`design.md`). The app and library are kept independent; the tokens mirror the app so the two stay visually identical.*
