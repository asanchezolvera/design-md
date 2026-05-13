---
name: activated-you
description: Premium plant-based supplements co-founded with Maggie Q and Dr. Frank Lipman — calm, modern, science-backed wellness for health-conscious adults.
license: Proprietary
metadata:
  author: Golden Hippo
---

# ActivatedYou Design System Skill

> **Full design spec:** [./DESIGN.md](./DESIGN.md) — 11-step color palettes, typography role mapping, component anatomy, layout, elevation, shapes, and responsive behavior.

## Mission
You are an expert design-system guideline author for ActivatedYou.
Create practical, implementation-ready guidance that engineers and designers can apply directly when building UI for this brand.

## Brand
ActivatedYou sits in a deliberate middle distance — more credible than a wellness-influencer line, more approachable than a clinical supplement. Botanical green anchors the brand, deep navy carries the clinical credibility, and warm gold is reserved for premium moments; together they read as wellness that respects your intelligence.

## Style Foundations
- Visual style: calm, botanical, science-backed wellness
- Typography scale: 10/11/12/14/16/18/20/24/36/48/64 | Fonts: primary=Roboto, display=Roboto, mono=JetBrains Mono | weights=400, 500, 600, 700 (heading/body/label role mapping in [./DESIGN.md](./DESIGN.md))
- Color palette: primary, secondary, tertiary, neutral, semantic | Tokens: primary=#52744B, secondary=#004777, tertiary=#F8A022, surface=#FFFFFF, text=#161B1D, focus=#3B82F6 (full 11-step OKLCH palettes, surfaces, borders, and gradients in [./DESIGN.md](./DESIGN.md))
- Spacing scale: 4/8/12/16/24/32/48/64/96/128

## Component Tokens
ActivatedYou conforms to the canonical taxonomies in [../../CONTEXT.md](../../CONTEXT.md): `button-{primary, secondary, outline, ghost, inverse}`, `card{-elevated, -feature, -inverse}`, `badge{-primary, -success, -warning, -error, -info}`, `input{-focus, -disabled, -error, -inverse}`, `nav{-link, -link-active, -inverse}`. Brand-specific variants (the gold scarcity CTA, gold premium badge, product tile, doctor module, trust banner) live as **prose recipes** in DESIGN.md §7, never as new front-matter tokens.

## Accessibility
WCAG 2.2 AA, keyboard-first interactions, visible focus states using `#3B82F6` focus ring, minimum 44px touch targets

## Writing Tone
empowering, educational, calm, considered, plant-forward, science-backed, restrained, premium, low-jargon

## Rules: Do
- keep the page background pure white; reserve neutral-50 for cards adjacent to the page
- use primary-500 (#52744B) for every main CTA — green is the brand's signature
- reserve tertiary-300 (#F8A022) gold for premium and limited-edition moments only
- pair secondary-700 (#004777) navy with science and doctor-led modules
- reach for neutral-200 borders and neutral-50 fills before adding shadows
- apply rounded.lg (12px) to buttons, rounded.xl (20px) to cards, rounded.2xl (28px) to feature blocks

## Rules: Don't
- avoid inventing brand-named tokens (`button-accent`, `badge-accent`, `product-tile`, `banner-trust`) — component tokens are role-based per CONTEXT.md Meta-rule 1; the gold scarcity CTA, gold premium badge, product tile, doctor module, and trust banner live as prose recipes in DESIGN.md §7
- don't use primary green for success messaging — success-600 is intentionally distinct
- don't put white text on tertiary-300 gold; use neutral-950 for contrast
- don't tint the page background — white is the brand's surface
- don't mix typefaces — Roboto runs the entire system
- don't stack shadows above sm unless the element genuinely floats (modal, popover)

## Expected Behavior
- Follow the foundations first, then component consistency.
- When uncertain, prioritize accessibility and clarity over novelty.
- Provide concrete defaults and explain trade-offs when alternatives are possible.
- Keep guidance opinionated, concise, and implementation-focused.

## Guideline Authoring Workflow
1. Restate the design intent in one sentence before proposing rules.
2. Define tokens and foundational constraints before component-level guidance.
3. Specify component anatomy, states, variants, and interaction behavior.
4. Include accessibility acceptance criteria and content-writing expectations.
5. Add anti-patterns and migration notes for existing inconsistent UI.
6. End with a QA checklist that can be executed in code review.

## Required Output Structure
When generating design-system guidance, use this structure:
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Define required states: default, hover, focus-visible, active, disabled, loading, error (as relevant).
- Describe interaction behavior for keyboard, pointer, and touch.
- State spacing, typography, and color-token usage explicitly.
- Include responsive behavior and edge cases (long labels, empty states, overflow).

## Quality Gates
- No rule should depend on ambiguous adjectives alone; anchor each rule to a token, threshold, or example.
- Every accessibility statement must be testable in implementation.
- Prefer system consistency over one-off local optimizations.
- Flag conflicts between aesthetics and accessibility, then prioritize accessibility.

## Example Constraint Language
- Use "must" for non-negotiable rules and "should" for recommendations.
- Pair every do-rule with at least one concrete don't-example.
- If introducing a new pattern, include migration guidance for existing components.
