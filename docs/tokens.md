# Tokens

Every colour, font, radius and shadow is a CSS custom property. They live on `:root` (the light theme) and `.dark` (the internal shell), and are mapped onto Tailwind's token names with `@theme inline` in `src/theme.css`.

## How the tokens are wired

```css
:root { --primary: #5980a6; }          /* the raw value (plain CSS) */
@theme inline { --color-primary: var(--primary); }  /* Tailwind utility hook */
```

So you can consume any token two ways:

| As a CSS variable | As a Tailwind utility |
| --- | --- |
| `color: var(--primary)` | `text-primary` |
| `background: var(--background)` | `bg-background` |
| `border-color: var(--border)` | `border-border` |
| `font-family: var(--font-heading)` | `font-heading` |
| `box-shadow: var(--shadow-md)` | `shadow-md` |

The raw `:root` variables always resolve, even without Tailwind. The `@theme inline` block is only read by Tailwind — a plain browser ignores it.

## Colour — light (`:root`) and dark (`.dark`)

| Token | Light | Dark (internal shell) | Role |
| --- | --- | --- | --- |
| `--background` | `#f2f2f3` | `#1d2d3d` | the ground |
| `--foreground` | `#1d1f20` | `#f2f2f3` | ink |
| `--surface` | `#e9e9ea` | `#2c455d` | one step up |
| `--card` | `#f2f2f3` | `#1d2d3d` | cards (transparent line-drawings) |
| `--card-foreground` | `#1d1f20` | `#f2f2f3` | |
| `--popover` | `#e9e9ea` | `#2c455d` | menus, dialogs, tooltips |
| `--popover-foreground` | `#1d1f20` | `#f2f2f3` | |
| `--primary` | `#5980a6` | `#5980a6` | the steel accent — the one solid object |
| `--primary-foreground` | `#f2f2f3` | `#f2f2f3` | |
| `--secondary` | `#e9e9ea` | `#2c455d` | filled chips |
| `--secondary-foreground` | `#1d1f20` | `#f2f2f3` | |
| `--muted` | `#e9e9ea` | `#2c455d` | filled fields |
| `--muted-foreground` | `#7a7a7d` | `#9ebbd8` | meta text |
| `--accent` | `#eef6ff` | `#2c455d` | hover tint |
| `--accent-foreground` | `#2c455d` | `#f2f2f3` | body-size accent text |
| `--destructive` | `#2c455d` | `#b5d9fd` | danger — **deep accent, never red** |
| `--destructive-foreground` | `#f2f2f3` | `#1d2d3d` | |
| `--border` | `#d0d0d1` | `#34465a` | the hairline |
| `--input` | `#d0d0d1` | `#34465a` | control borders |
| `--ring` | `#5980a6` | `#749dc4` | focus ring |

The `--sidebar-*` set mirrors these for the school-admin left rail.

## Accent ramp

Monochrome by design — walk the ramp, never leave the steel.

| Token | Value |
| --- | --- |
| `--accent-100` | `#eef6ff` |
| `--accent-200` | `#b5d9fd` |
| `--accent-300` | `#94bce3` |
| `--accent-400` | `#749dc4` |
| `--accent-500` | `#5980a6` |
| `--accent-700` | `#416180` |
| `--accent-800` | `#2c455d` |
| `--accent-900` | `#1d2d3d` |

Data-viz uses `--chart-1 … --chart-5` (`#749dc4`, `#597ea3`, `#416180`, `#94bce3`, `#2c455d`).

> **Contrast rule.** Accent-on-ground is ~3:1 — fine for chrome and large text, **not body copy**. For paragraph-size accent text use `--accent-foreground` (accent-800), never `--primary`.

## Typography

| Token | Value | Use |
| --- | --- | --- |
| `--font-sans` | `Barlow, system-ui, sans-serif` | body |
| `--font-heading` | `Barlow Condensed, system-ui, sans-serif` | display / headings |

`base.css` sets `h1–h6` to the condensed face with `-0.015em` tracking and weight 600.

## Radius & shadow

| Token | Value |
| --- | --- |
| `--radius` | `0` — square is the identity |
| `--shadow-sm` | `0 1px 2px rgb(43 43 45 / 0.14)` |
| `--shadow-md` | `0 3px 10px rgb(43 43 45 / 0.16)` |
| `--shadow-lg` | `0 12px 32px rgb(43 43 45 / 0.22)` |

Shadows are ink-tinted and reserved for the top elevation (menus, dialogs, sheets). Cards stay flat line-drawings.

## tokens.json

The same tokens are published in **[Style Dictionary](https://amzn.github.io/style-dictionary/)** format at [`tokens.json`](../tokens.json), ready to sync to Figma or feed other platforms. It mirrors `theme.css` — keep the two in step (see [Contributing](../CONTRIBUTING.md)).
