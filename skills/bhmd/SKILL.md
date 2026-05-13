---
name: bhmd
description: A clinical-luxury skincare brand whose visual language reads like a Vogue spread — deep ink navy, blush silk, and editorial restraint over clinical chest-thumping.
license: Proprietary
metadata:
  author: Golden Hippo
---

# Beverly Hills MD Design System Skill

> **Full design spec:** [./DESIGN.md](./DESIGN.md) — 11-step color palettes, typography role mapping, component anatomy, layout, elevation, shapes, and responsive behavior.

## Mission
You are an expert design-system guideline author for Beverly Hills MD.
Create practical, implementation-ready guidance that engineers and designers can apply directly when building UI for this brand.

## Brand
Beverly Hills MD inhabits the intersection of clinical authority and editorial luxury — a visual language drawn from high-end fashion magazines: full-bleed photography, generous whitespace, and typography that whispers rather than shouts. Deep navy ink anchors the palette against warm blush silk and atmospheric mist, with magazine-spread pacing throughout.

## Style Foundations
- Visual style: editorial luxury, magazine pacing, quiet restraint
- Typography scale: 11/12/14/16/18/24/30/40/56/80 | Fonts: primary=Libre Franklin, display=Playfair Display, mono=Menlo | weights=400, 500 (heading/body/label role mapping in [./DESIGN.md](./DESIGN.md))
- Color palette: primary, secondary, tertiary, neutral, semantic | Tokens: primary=#233354, secondary=#EAAB9F, tertiary=#EDF5F8, surface=#FFFFFF, text=#111827, focus=#3B82F6 (full 11-step OKLCH palettes, surfaces, borders, and gradients in [./DESIGN.md](./DESIGN.md))
- Spacing scale: 4/8/16/24/32/48/64/96/128

## Component Tokens
Beverly Hills MD conforms to the canonical taxonomies in [../../CONTEXT.md](../../CONTEXT.md): `button-{primary, secondary, outline, ghost, inverse}`, `card{-elevated, -feature, -inverse}`, `badge{-primary, -success, -warning, -error, -info}`, `input{-focus, -disabled, -error, -inverse}`, `nav{-link, -link-active, -inverse}`. Brand-specific variants (neutral utility button, editorial pull-quote card, blush product badge, eyebrow label, modal container) live as **prose recipes** in DESIGN.md §7, never as new front-matter tokens.

## Accessibility
WCAG 2.2 AA, keyboard-first interactions, visible focus states using `#3B82F6` focus ring, minimum 44px touch targets

## Writing Tone
editorial, restrained, confident, magazine-paced, romantic, refined, declarative, quiet, low-jargon

## Rules: Do
- treat whitespace as a brand asset; add vertical space when in doubt
- use Playfair Display at 40px+ for every editorial moment
- pair `primary-800` (#233354) navy with `secondary-300` (#EAAB9F) blush as the signature tonal pairing
- apply `rounded.full` (pill) to buttons and `rounded.sm` (2px) to inputs and containers
- default to no shadow; reach for `2xs` or `xs` only when tonal contrast can't separate
- keep Playfair Display at weight 500 across the headline scale

## Rules: Don't
- avoid inventing brand-named tokens (`button-navy`, `card-blush`, `badge-mist`) — component tokens are role-based per CONTEXT.md Meta-rule 1; brand-color variants live as prose recipes in DESIGN.md §7
- avoid `rounded.full` on containers (cards, modals, inputs, image frames) — pill shape is reserved for interactive controls
- avoid the `2xl` shadow — it reads as "lifestyle app," not luxury
- avoid Playfair Display in body copy under 18px or at weights 700+
- avoid vibrant gradients, color-mesh backgrounds, or diagonal washes
- avoid mixing Playfair into UI labels or buttons — UI stays Libre Franklin

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
