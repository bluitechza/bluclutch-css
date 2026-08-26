# bluclutch-css

The **Industry / BluClutch** design system, packaged as a [Tailwind CSS v4](https://tailwindcss.com) preset.

Steel-blue accent on a light technical ground · Barlow Condensed over Barlow · **square corners** · hairline borders · a single steel accent (monochrome by design) · the signature **blueprint frame** with `+` registration marks.

It ships design tokens *and* ready-made component classes, so you can consume it two ways:

- **With Tailwind v4** — the tokens feed Tailwind's utilities (`bg-background`, `text-primary`, `font-heading`, `shadow-md`, …).
- **Without any build** — the tokens and component classes (`.blueprint`, `.btn`, `.card`, `.tag`, …) are plain CSS. Just link the stylesheet.

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

---

## The dark shell

`.dark` is **not** a user-facing light/dark toggle. It's the internal / application shell: wrap a BluClutch-staff layout in `.dark` to render it on the accent-900 ground — the cue that a screen belongs to staff, not to a school.

```html
<div class="dark" style="background: var(--background); color: var(--foreground)">
  …internal admin UI…
</div>
```

---

## Demo

Open `demo/index.html` in a browser — it links the library source directly, so no build is needed.

---

## Do / Don't

**Do** keep `--radius: 0`; wrap cards, figures and primary buttons in the blueprint frame; use `.btn--outline` for secondary actions; set body-size accent text to `--accent-foreground`; reserve `.dark` for the internal shell.

**Don't** reintroduce rounding on framed elements; give cards a fill or shadow (they're line drawings); add colour beyond the steel accent; or drop the corner marks from a blueprint element.

---

*Extracted from the BluClutch app's design system (`design.md`). Tokens mirror the app so the two stay visually identical.*
