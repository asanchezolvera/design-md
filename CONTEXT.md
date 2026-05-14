# Brand Design Systems — Context

This document defines the shared vocabulary, normative rules, and canonical component-token taxonomies that every brand's `DESIGN.md` must conform to. Brand specs (e.g., `skills/activated-you/DESIGN.md`) cover brand-specific decisions; this file covers the cross-brand contract.

## Language

**Component token**:
A named entry in a brand's `DESIGN.md` front matter that maps a role to concrete styling (e.g., `button-primary`, `card-elevated`).
_Avoid_: design token (too broad — color/typography/spacing tokens are not component tokens), variant name (used internally only).

**Canonical role**:
A required slot in a component category's taxonomy that every brand must define. Roles are role-based names (`primary`, `outline`), never color-named (`ember`, `forest`).
_Avoid_: variant, kind, type.

**Prose recipe**:
A brand-specific styling pattern documented as written instructions in the prose section of a `DESIGN.md` — not as a token. Used for patterns that fall outside the canonical taxonomy (e.g., ActivatedYou's gold scarcity badge, product cards).
_Avoid_: custom component, brand-exception token.

**Inverse variant**:
A component variant designed for use on a dark surface (typically a dark hero band). Spelled `-inverse` uniformly across all component classes (`button-inverse`, `card-inverse`, `input-inverse`, `nav-inverse`).
_Avoid_: dark (ambiguous — see Flagged ambiguities), dark-mode, on-dark.

**Name-and-semantics contract**:
The rule that a token's authority is not just its name but its written one-sentence definition. Two brands' `button-primary` tokens must behave the same way at the role level, not merely share the string `button-primary`.
_Avoid_: schema (too narrow), contract (used unmodified — be specific).

## Meta-rules

These six rules govern token naming across all brands and all component categories.

1. **Tokens are role-based, never color-named.** `button-primary`, not `button-ember`. `card-feature`, not `card-forest`.

2. **Every brand defines every canonical role.** No optional roles. A brand without an obvious mapping aliases another role and documents why.

3. **One prefix per component class.** Use `button`, `card`, `badge`, `input`, `nav`. Never `tag`, `navbar`, `nav-bar`, `navigation`.

4. **State suffixes are uniform.** `-hover`, `-active`, `-disabled`, `-focus`. State always comes after the role: `button-primary-hover`, not `hover-button-primary`.

5. **Brand-specific styling patterns become prose recipes, not tokens.** Patterns outside the canonical taxonomy live in `DESIGN.md` prose, never in the front matter.

6. **Each canonical role has a one-sentence semantic definition.** Recorded in this file (below). The contract is the meaning, not the name.

## Canonical taxonomies

### Buttons

Five roles. Each role gets four tokens: base, `-hover`, `-active`, `-disabled`. Focus uses the global focus ring (`#3B82F6`); no per-variant focus token.

- **`button-primary`** — The brand's most important action button. The conversion CTA — used on hero sections, primary form submissions, the headline moment on a page.
- **`button-secondary`** — The workaday action button. Used for non-headline actions: form submits, dialogs, "Continue," "Save."
- **`button-outline`** — Bordered, light-surface variant. Used when a filled button would compete with a nearby primary CTA.
- **`button-ghost`** — Transparent, low-priority action. Inline links-as-buttons, low-emphasis nav items, tertiary actions.
- **`button-inverse`** — The variant designed for use on dark surfaces. Light treatment that reads correctly inside a dark hero band.

### Cards

Four roles. Cards do not have states (`hover`/`active`/`disabled`); clickable card patterns are documented as prose recipes.

- **`card`** — Base container. White/near-white background, default shadow, default radius.
- **`card-elevated`** — More prominent variant (deeper shadow). For cards sitting on tinted bands or competing with surrounding content.
- **`card-feature`** — Semantic emphasis. Tinted background (typically `primary-50` or similar) to draw attention. For "Why X" benefit blocks.
- **`card-inverse`** — For use on dark surfaces. Either a dark-background card on a light page, or a card designed to sit inside a dark hero band.

### Badges

Six roles. Split between tone (Job A) and status (Job B).

Tone:
- **`badge`** — Base / neutral. Muted gray, the default label.
- **`badge-primary`** — Uses brand primary color. The high-emphasis label.

Status (auto-consistent across brands via the standardized semantic palette):
- **`badge-success`** — Tailwind green.
- **`badge-warning`** — Tailwind yellow.
- **`badge-error`** — Tailwind red.
- **`badge-info`** — Tailwind blue.

### Inputs

Five roles. Inputs have a single visual identity per brand; the taxonomy is states-as-variants.

- **`input`** — Base. Default border, background, padding.
- **`input-focus`** — Focused state. Uses the global focus ring.
- **`input-disabled`** — Disabled state. Muted background, reduced text contrast.
- **`input-error`** — Validation error state. Uses Tailwind red as a border color.
- **`input-inverse`** — For inputs on dark surfaces. Light border on dark background.

### Nav

Four roles. The bar itself, the links inside, the active state of those links, and the inverse-surface variant.

- **`nav`** — The bar/container. Background, height, padding, bottom border.
- **`nav-link`** — Link styling inside the nav. Typography, color, hover.
- **`nav-link-active`** — Active/current-page link state.
- **`nav-inverse`** — Dark-surface variant of the bar. Links inside auto-adapt (documented in prose; no separate `nav-link-inverse` token).

## Relationships

- A **`DESIGN.md`** must define every **canonical role** listed above.
- A **`SKILL.md`** is generated from its sibling **`DESIGN.md`** and inherits the canonical token names.
- A **prose recipe** lives only inside a **`DESIGN.md`** and is never copied into the front matter as a token.

## Example dialogue

> **Brand author:** "Roundhouse's hero uses an ember-colored button. Shouldn't we have a `button-ember` token?"
> **Maintainer:** "No — `button-ember` violates Meta-rule 1 (role-based, not color-named). The hero button is functionally the brand's most important CTA, so it maps to `button-primary`. The fact that the color happens to be ember lives in the `primary-*` color palette."

> **Brand author:** "Debt Clear has both a navy button and an orange button. Which is `button-primary`?"
> **Maintainer:** "Whichever fills the role: 'the brand's most important action button — the conversion CTA.' That's the orange one. The navy button maps to `button-secondary`."

> **Brand author:** "ActivatedYou uses a gold accent for limited-edition badges. Where does that go?"
> **Maintainer:** "Prose recipe (Meta-rule 5). It's a brand-specific styling pattern, not a canonical role. Document it in the `DESIGN.md` prose as 'for limited-edition badges, use `tertiary-300` as background.'"

## Flagged ambiguities

- **"dark"** was used inconsistently to mean both _a button/card whose color is dark_ (e.g., BHMD's `button-dark` = a dark-navy button on a light page) and _a variant for use on dark surfaces_ (e.g., Debt Clear's `card-dark` = a card sitting inside a dark hero band). **Resolved**: the surface-context meaning is renamed `-inverse` uniformly; "dark" as a literal color description is fine in prose but never a token suffix.

- **"accent"** was used for two different roles: ActivatedYou's gold (a rare scarcity treatment, used sparingly) and Debt Clear's orange (the main conversion CTA, used on every hero). **Resolved**: there is no `accent` role. The main CTA is `primary`; rare scarcity treatments are prose recipes.

- **"primary"** was used inconsistently to mean either _the brand's signature color_ (Debt Clear's navy, even though it's not the most important button) or _the most important action button_ (ActivatedYou's green, which IS the most important button). **Resolved**: `button-primary` is defined by role (most important action button), not by which color the brand considers signature. Debt Clear's navy moves to `button-secondary`.

- **Nav prefix** was spelled four ways across brands: `nav`, `nav-bar`, `navbar`, `navigation`. **Resolved**: `nav` is canonical per Meta-rule 3.

- **Badge vs tag** — Driven Entrepreneur used `tag` instead of `badge`. **Resolved**: `badge` is canonical per Meta-rule 3.
