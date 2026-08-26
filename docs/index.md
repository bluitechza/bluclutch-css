# bluclutch-css documentation

The **Industry / BluClutch** design system as a Tailwind v4 preset — steel-blue accent on a light technical ground, Barlow Condensed over Barlow, square corners, hairline borders, and the signature blueprint frame.

## Contents

1. **[Getting started](./getting-started.md)** — install and the three ways to consume the library (Tailwind preset, plain CSS, CDN bundle).
2. **[Design principles](./design-principles.md)** — the ideas the system enforces: square, monochrome steel, the blueprint frame, and the do/don't rules.
3. **[Tokens](./tokens.md)** — the full colour, type, radius and shadow reference for the light theme and the dark internal shell.
4. **[Components](./components.md)** — every component class, its modifiers, and copy-paste markup.
5. **[Theming](./theming.md)** — white-label brand colours, the dark shell, custom rethemes, and print.

## At a glance

```css
/* Tailwind v4 */
@import "tailwindcss";
@import "bluclutch-css";
```

```html
<!-- or, no build step -->
<link rel="stylesheet" href="bluclutch-css/dist/bluclutch.css" />

<div class="blueprint" style="padding:1.5rem">
  <i class="corner tl"></i><i class="corner tr"></i>
  <i class="corner bl"></i><i class="corner br"></i>
  <p class="eyebrow">Learners</p>
  <h3 class="card__title">Learner journey tracking</h3>
</div>
<button class="btn btn--primary">Register your school</button>
```

See the live gallery: open [`demo/index.html`](../demo/index.html) in a browser.

## Project layout

```
bluclutch-css/
├─ src/            source modules (the library)
│  ├─ theme.css        design tokens (:root + .dark + @theme inline)
│  ├─ base.css         ground rules — headings, body, box-sizing
│  ├─ branding.css     white-label [data-brand] scopes
│  ├─ blueprint.css    the signature frame
│  ├─ components.css   btn, tag, card, input, table, tab, eyebrow
│  ├─ forms.css        checkbox, radio, switch, segmented
│  ├─ feedback.css     alert, empty, skeleton, tooltip
│  ├─ navigation.css   breadcrumb, pagination, menu
│  ├─ overlays.css     dialog, sheet
│  ├─ data-display.css stat, avatar, status, progress, stepper
│  ├─ print.css        @media print receipt layer
│  └─ index.css        entry — imports all of the above
├─ dist/          generated bundle (build.mjs) — bluclutch.css + .min.css
├─ demo/          the component gallery
├─ docs/          this documentation
├─ tokens.json    tokens in Style Dictionary format (Figma-syncable)
└─ build.mjs      bundles src/ into dist/
```
