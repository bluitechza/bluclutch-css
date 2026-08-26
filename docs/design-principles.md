# Design principles

The **Industry / BluClutch** language is a small set of rules held consistently. If a change violates one of these, it's off-system — even if it looks fine in isolation.

## The five ideas

1. **Square.** `--radius: 0` everywhere. Corners are never rounded; it's the single most recognisable trait.
2. **Hairline.** Structure is drawn with 1px `--border` lines, not fills or heavy rules.
3. **Monochrome steel.** One accent (`--primary` `#5980a6`) is the only colour. There is no red — `--destructive` is a *deep accent*, and danger is carried by wording and weight, not hue.
4. **Barlow Condensed over Barlow.** A condensed display face for headings and controls; the regular face for body.
5. **The blueprint frame.** A transparent line-drawing with `+` registration marks at each corner — the signature device. Wrap cards, figures and the one primary CTA in it.

## The one solid object

In a system of transparent line-drawings, the filled steel **primary button** is the single solid object on a screen. Reserve `.btn--primary` for the primary action; everything else is `.btn--outline` or `.btn--ghost`. This is what gives each screen a clear focal point.

## Contrast

Accent-on-ground (`--primary` on `--background`) is roughly 3:1 — acceptable for chrome and large text, **not for body copy**. For paragraph-size accent text use `--accent-foreground` (accent-800 `#2c455d`), never `--primary`.

## Icons

The system expects a **1.5** stroke width (lucide's default of 2 reads too heavy). Set `strokeWidth={1.5}` on icons, or centralise it.

## Elevation

Cards are flat — no shadow, no fill. Shadows (`--shadow-sm/md/lg`) belong only to the top elevation: menus, dialogs, sheets, and the active segmented option. That's the one place a soft surface (`--popover`) is allowed.

## Do / Don't

**Do**

- Keep `--radius: 0` — square is the identity.
- Wrap cards, figures and primary buttons in the blueprint frame.
- Use `.btn--outline` for secondary actions; reserve the filled primary for the single main action.
- Set body-size accent text to `--accent-foreground`, not `--primary`.
- Use the dark shell only for the internal / application screens, not as a user toggle.
- Re-accent per school with `data-brand` rather than hard-coding a colour.

**Don't**

- Don't reintroduce rounding on framed elements.
- Don't give cards a fill or a shadow — they're line drawings.
- Don't add colour beyond the steel accent; the palette is monochrome (that's why danger is a deep accent, not red).
- Don't drop the corner marks from a blueprint element.
- Don't ship icons at stroke-width 2.

---

*This system is a translation of the app's `design.md`. When in doubt, that document and the app's rendered screens are the reference.*
