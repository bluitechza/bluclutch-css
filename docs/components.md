# Components

Every component class reads from the [tokens](./tokens.md), so it follows the light/dark shells and any [rebrand](./theming.md) automatically. Classes are plain CSS (no `@apply`), authored in `@layer components` so Tailwind utilities can still override them.

## Quick reference

| Group | Base class | Modifiers / parts |
| --- | --- | --- |
| Eyebrow | `.eyebrow` | — |
| Button | `.btn` | `--primary` `--outline` `--secondary` `--ghost` `--link` · `--sm` `--lg` `--icon` `--block` |
| Tag | `.tag` | `--accent` `--neutral` `--outline` |
| Card | `.card` | `.card__title` `.card__meta` |
| Blueprint | `.blueprint` | `.corner.tl/.tr/.bl/.br` |
| Input | `.input` `.select` `.textarea` | `.field-label` · `.input--filled` |
| Table | `.table` | (styles `th` / `td`) |
| Tab | `.tab` | `--active` |
| Checkbox / radio | `.checkbox` `.radio` | (native `:checked`) |
| Switch | `.switch` | `.switch__track` `.switch__thumb` |
| Segmented | `.segmented` | `.segmented__option` (`aria-selected` / `.is-active`) |
| Alert | `.alert` | `--accent` `--danger` `--muted` · `.alert__title` `.alert__body` |
| Empty state | `.empty` | `.empty__title` |
| Skeleton | `.skeleton` | `--text` `--title` `--block` |
| Tooltip | `.tooltip` | `[data-tooltip]` |
| Breadcrumb | `.breadcrumb` | `.breadcrumb__sep` · `[aria-current="page"]` |
| Pagination | `.pagination` | `[aria-current="page"]` · `.is-disabled` |
| Menu | `.menu` | `.menu__label` `.menu__item` `.menu__sep` |
| Dialog | `.dialog` | `.dialog__title` `.dialog__desc` `.dialog__footer` · `.overlay-backdrop` |
| Sheet | `.sheet` | `--left` |
| Stat card | `.stat` | `.stat__label` `.stat__value` `.stat__delta` (`--up`) |
| Avatar | `.avatar` | `--sm` `--lg` · `.avatar-group` |
| Status dot | `.status` | `--active` `--attention` `--off` |
| Progress | `.progress` | `.progress__bar` |
| Stepper | `.stepper` | `.step` (`--done` `--current`) · `.step__marker` `.step__label` |

## Eyebrow

The uppercase tracked label above headings, used across the app.

```html
<p class="eyebrow">Learners</p>
```

## Button

`--primary` is the one solid object — reserve it for the single primary action and wrap hero CTAs in `.blueprint`. Use `--outline` for most secondary actions.

```html
<button class="btn btn--primary">Register your school</button>
<button class="btn btn--outline">Secondary</button>
<button class="btn btn--ghost">Ghost</button>
<button class="btn btn--secondary">Neutral</button>
<a class="btn btn--link">Learn more</a>

<button class="btn btn--primary btn--sm">Small</button>
<button class="btn btn--primary btn--lg">Large</button>
<button class="btn btn--icon" aria-label="Add">+</button>
<button class="btn btn--primary btn--block">Full width</button>
```

## Tag

```html
<span class="tag tag--accent">Trial ending</span>   <!-- attention / time-sensitive -->
<span class="tag tag--neutral">Active</span>         <!-- steady state -->
<span class="tag tag--outline">Archived</span>       <!-- off / backgrounded -->
```

## Card & blueprint

A card is a flat line-drawing (no fill, no shadow). For the framed look, wrap it in the blueprint frame — never round a framed element, never drop the corner marks.

```html
<div class="card">
  <p class="eyebrow">Fleet</p>
  <h3 class="card__title">Vehicle &amp; maintenance</h3>
  <p class="card__meta">Service history on one record.</p>
</div>

<div class="blueprint" style="padding:1.5rem">
  <i class="corner tl"></i><i class="corner tr"></i>
  <i class="corner bl"></i><i class="corner br"></i>
  …content…
</div>
```

## Inputs

Square, with an accent focus ring. Add `.input--filled` to sit a field on the surface.

```html
<label class="field-label" for="school">School name</label>
<input class="input" id="school" placeholder="Sandton Driving Academy" />
<textarea class="textarea"></textarea>
<select class="select">…</select>
```

## Table

```html
<table class="table">
  <thead><tr><th>Learner</th><th>Stage</th><th>Status</th></tr></thead>
  <tbody><tr><td>Thabo M.</td><td>Driving test</td><td><span class="tag tag--accent">Test booked</span></td></tr></tbody>
</table>
```

## Tabs

The active item gets a 2px accent underline, not a filled pill.

```html
<button class="tab tab--active">Overview</button>
<button class="tab">Billing</button>
```

## Selection controls

```html
<!-- segmented control (the Monthly/Annual toggle) -->
<div class="segmented">
  <button class="segmented__option" aria-selected="false">Monthly</button>
  <button class="segmented__option" aria-selected="true">Annual</button>
</div>

<!-- switch -->
<label class="switch">
  <input type="checkbox" />
  <span class="switch__track"><span class="switch__thumb"></span></span>
</label>

<input class="checkbox" type="checkbox" />
<input class="radio" type="radio" name="pay" />
```

## Feedback

```html
<div class="alert alert--accent"><div>
  <p class="alert__title">Trial ending in 3 days</p>
  <p class="alert__body">Add a payment method to stay active.</p>
</div></div>
<!-- also .alert--danger (deep accent) and .alert--muted -->

<div class="empty"><p class="empty__title">No learners yet</p>Invite your first learner to begin.</div>

<div class="skeleton skeleton--title" style="width:60%"></div>
<div class="skeleton skeleton--text"></div>
<div class="skeleton skeleton--block"></div>

<button class="tooltip" data-tooltip="Exports every learner's record as CSV">Advanced export</button>
```

The skeleton shimmer respects `prefers-reduced-motion`.

## Navigation

```html
<nav class="breadcrumb">
  <a href="#">Learners</a><span class="breadcrumb__sep">/</span>
  <span aria-current="page">Thabo M.</span>
</nav>

<nav class="pagination">
  <span class="is-disabled">‹</span>
  <a href="#" aria-current="page">1</a><a href="#">2</a><a href="#">3</a>
  <a href="#">›</a>
</nav>

<div class="menu">
  <p class="menu__label">Learner</p>
  <button class="menu__item">View profile</button>
  <button class="menu__item">Book a lesson</button>
  <div class="menu__sep"></div>
  <button class="menu__item">Suspend</button>
</div>
```

The `.pagination` markup matches Laravel's paginator output.

## Overlays

Dialogs, sheets and menus sit at the top elevation — the one place a soft surface (`--popover` + `--shadow-lg`) is allowed. Still square.

```html
<div class="overlay-backdrop"></div>
<div class="dialog">
  <p class="dialog__title">Cancel subscription?</p>
  <p class="dialog__desc">You'll keep access until the end of your paid period.</p>
  <div class="dialog__footer">
    <button class="btn btn--outline">Keep plan</button>
    <button class="btn btn--primary">Cancel plan</button>
  </div>
</div>

<aside class="sheet">…</aside>            <!-- add .sheet--left for a left panel -->
```

Positioning/animation and open/close state are left to your framework — the classes only style the surfaces.

## Data display

```html
<div class="stat">
  <p class="stat__label">Active learners</p>
  <p class="stat__value">248</p>
  <p class="stat__delta stat__delta--up">▲ 12 this month</p>
</div>

<div class="avatar-group">
  <span class="avatar">TM</span>
  <span class="avatar"><img src="…" alt="" /></span>
  <span class="avatar avatar--lg">SD</span>
</div>

<span class="status status--active">Active</span>       <!-- also --attention, --off -->

<div class="progress"><div class="progress__bar" style="width:62%"></div></div>
```

### Stepper — the learner journey

Mark stages `--done` / `--current`; leave upcoming steps plain.

```html
<div class="stepper">
  <div class="step step--done"><span class="step__marker">✓</span><span class="step__label">Enrolled</span></div>
  <div class="step step--done"><span class="step__marker">✓</span><span class="step__label">Lessons</span></div>
  <div class="step step--current"><span class="step__marker">3</span><span class="step__label">Learner's test</span></div>
  <div class="step"><span class="step__marker">4</span><span class="step__label">Driving test</span></div>
  <div class="step"><span class="step__marker">5</span><span class="step__label">Licensed</span></div>
</div>
```
