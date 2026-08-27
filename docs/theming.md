# Theming

Because every component reads from CSS variables, theming is just overriding those variables on a scope. Three levels: white-label brand colours, the dark internal shell, and a full retheme.

## White-label — a school's brand colour

This backs the Professional plan's **custom brand colour**. Set `--brand-primary` on any wrapper via `data-brand`; it cascades to component classes *and* Tailwind utilities (both resolve `var(--primary)` where they're used), and the derived hovers come free from the `color-mix` in the components.

```html
<div data-brand style="--brand-primary: #b0413e">
  <button class="btn btn--primary">Primary</button>
  <span class="status status--active">Active</span>
  <div class="progress"><div class="progress__bar" style="width:70%"></div></div>
</div>
```

Unset, it falls back to the steel accent. `data-brand` remaps `--primary`, `--ring`, and the sidebar accent. For the hover-tint pair, use `data-brand-accent`:

```html
<div data-brand data-brand-accent
     style="--brand-primary:#2e7d5b; --brand-accent:#e8f5ee; --brand-accent-foreground:#1c4733">
  …
</div>
```

Wiring it to a tenant in an app is typically one inline style on the app shell:

```jsx
<div data-brand style={{ '--brand-primary': school.brandColour }}>
  {/* the whole school-admin UI, re-accented */}
</div>
```

See [`src/branding.css`](../src/branding.css).

> Keep contrast in mind: a school's colour still needs paper-white text to read on `--primary`. Very light brand colours should carry dark text — expose an option rather than assuming white.

## Dark mode

A user-facing light/dark toggle. Set `data-theme` on the `<html>` element (or any scope you want re-themed):

```html
<html data-theme="dark"> … </html>   <!-- force dark -->
<html data-theme="light"> … </html>  <!-- force light -->
<html> … </html>                     <!-- no attribute → follow the OS -->
```

With **no** `data-theme` attribute the system follows the operating system's `prefers-color-scheme`. `data-theme="light"` and `data-theme="dark"` are explicit overrides that opt out of the OS preference — set `data-theme="light"` if you want a screen to stay light regardless of the visitor's OS.

Everything reads from the same tokens, so the whole system — the blueprint frame, buttons, tags, stepper — flips with the ground. Dark mode reuses the accent-900 palette (see below); it stays monochrome, no new hues.

### Wiring a toggle

Persist the choice and apply it before first paint to avoid a flash of the wrong theme:

```html
<!-- in <head>, before your stylesheet -->
<script>
  var t = localStorage.getItem('bcc-theme');
  if (t === 'light' || t === 'dark') document.documentElement.dataset.theme = t;
</script>
```

```js
// in your toggle handler — 'auto' clears the attribute so CSS follows the OS again
function setTheme(choice) {
  if (choice === 'auto') {
    delete document.documentElement.dataset.theme;
    localStorage.removeItem('bcc-theme');
  } else {
    document.documentElement.dataset.theme = choice;   // 'light' | 'dark'
    localStorage.setItem('bcc-theme', choice);
  }
}
```

The demo (`demo/index.html`) has a working Light / Dark / Auto switcher built from the `.segmented` component.

> **Native controls:** the dark tokens also set `color-scheme`, so scrollbars, form widgets and the like adopt the matching platform styling automatically.

## The dark internal shell

`.dark` is a separate concept from the `data-theme` toggle above — **not** a user-facing light/dark switch. It's the internal / application shell: wrap a BluClutch-staff layout in `.dark` to render it on the accent-900 ground — the cue that a screen belongs to staff, not to a school. (It happens to share dark mode's accent-900 palette, so a `.dark` region reads the same in either theme.)

```html
<div class="dark" style="background:var(--background); color:var(--foreground)">
  …platform-admin UI on the dark ground…
</div>
```

Everything — the blueprint frame, buttons, tags, stepper — carries over unchanged because it all reads from the same tokens.

## A full retheme

To shift the whole system (e.g. a different neutral ground), override the raw `:root` variables after importing the library:

```css
@import "bluclutch-css";

:root {
  --background: #f4f3f1;   /* warmer paper */
  --primary:    #4a6d8c;   /* a cooler steel */
  --ring:       #4a6d8c;
}
```

Only override the raw values (`--primary`, `--background`, …). Don't touch the `@theme inline` mappings — they point at these and keep Tailwind utilities in sync automatically.

**Hold the identity:** keep `--radius: 0`, keep the palette monochrome (one accent), and keep `--destructive` a deep accent rather than introducing red. See [Design principles](./design-principles.md).

## Print

`src/print.css` adds an ink-on-paper `@media print` layer for receipts and documents:

- `.no-print` hides chrome (also auto-hides `nav`, `aside`, `.sidebar`);
- `.print-only` reveals nodes that should appear only on paper;
- `.receipt`, `.receipt__header`, `.receipt__total` lay out a branded receipt.

```html
<button class="btn btn--primary no-print" onclick="window.print()">Print receipt</button>

<div class="receipt">
  <div class="receipt__header">…school logo + number…</div>
  …line items…
  <div class="receipt__total">Total  R1 250.00</div>
</div>
```
