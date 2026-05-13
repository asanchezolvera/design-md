---
name: debt-clear-usa
description: A consumer debt relief brand that helps everyday Americans negotiate down unsecured debt — built to feel like the bank you actually trust, not the mailer you throw away.
license: Proprietary
metadata:
  author: Golden Hippo
---

# DebtClear USA Design System Skill

> **Full design spec:** [./DESIGN.md](./DESIGN.md) — 11-step color palettes, typography role mapping, component anatomy, layout, elevation, shapes, and responsive behavior.

## Mission
You are an expert design-system guideline author for DebtClear USA.
Create practical, implementation-ready guidance that engineers and designers can apply directly when building UI for this brand.

## Brand
DebtClear USA looks the way trust should look — institutional posture, modern bones, no theatrics. Deep navy authority anchors the palette, with a confident azure for digital affordances and a warm ember reserved exclusively for human-action moments.

## Style Foundations
- Visual style: institutional trust, modern, financial polish
- Typography scale: 11/12/13/14/15/16/18/20/24/36/48/72 | Fonts: primary=Poppins, display=Poppins, mono=Menlo | weights=400, 500, 600, 700 (heading/body/label role mapping in [./DESIGN.md](./DESIGN.md))
- Color palette: primary, secondary, tertiary, neutral, semantic | Tokens: primary=#0D3B66, secondary=#0197F6, tertiary=#F16E00, surface=#F8FAFC, text=#0F172A, focus=#3B82F6 (full 11-step OKLCH palettes, surfaces, borders, and gradients in [./DESIGN.md](./DESIGN.md))
- Spacing scale: 8/12/16/24/32/48/64/96/128

## Component Tokens
DebtClear USA conforms to the canonical taxonomies in [../../CONTEXT.md](../../CONTEXT.md): `button-{primary, secondary, outline, ghost, inverse}`, `card{-elevated, -feature, -inverse}`, `badge{-primary, -success, -warning, -error, -info}`, `input{-focus, -disabled, -error, -inverse}`, `nav{-link, -link-active, -inverse}`. Note that DebtClear is the brand where the semantic CTA promotion lands: `button-primary` is the orange Liberty Ember CTA (the conversion CTA — "See if I qualify," "Get my plan"), and `button-secondary` is the deep navy button (the institutional workhorse for "Sign in," "Continue," "Save"). When an agent says "primary button" they should render orange. Brand-specific patterns (the neutral utility button, trust block, number callout) live as **prose recipes** in DESIGN.md §7, never as new front-matter tokens. `badge-info` uses Tailwind `info-*` (not the brand `secondary-*` azure) by contract.

## Accessibility
WCAG 2.2 AA, keyboard-first interactions, visible focus states using `#3B82F6` focus ring, minimum 44px touch targets

## Writing Tone
institutional, confident, declarative, substantial, credible, plainspoken, expressive, decisive, trustworthy

## Rules: Do
- use `{colors.tertiary-400}` (#F16E00) as `button-primary` — the conversion CTA, reserved to one per viewport
- use `{colors.primary-800}` (#0D3B66) as `button-secondary` and the dominant brand color across nav and hero backgrounds — the institutional voice
- set body copy at `{typography.body-md}` (16px) with 1.6 line-height for disclosure legibility
- render dollar amounts and percentages at `{typography.headline-md}` (36px) or larger
- apply `{rounded.md}` (8px) to buttons and inputs; `{rounded.lg}` (12px) to cards
- use `{colors.focus-ring}` (#3B82F6) with 2px outline and 2px offset on every interactive element

## Rules: Don't
- avoid inventing brand-named or role-colliding tokens (`button-cta`, `card-tinted`, `card-dark`, `nav-bar`, `nav-bar-dark`) — component tokens are role-based per CONTEXT.md Meta-rule 1; brand-specific patterns (the neutral utility button, trust block, number callout) live as prose recipes in DESIGN.md §7
- avoid using ember (`tertiary-400`) as decoration — it is exclusively the conversion-CTA color and the literal `button-primary` background
- avoid two `button-primary` (ember) CTAs in the same viewport; the second prominent action is `button-secondary` (navy)
- avoid Stone, Taupe, or any warm neutral — Slate's cool undertone is intentional
- avoid italics for emphasis; use weight 600 or `{colors.primary-800}` instead
- avoid radii larger than `{rounded.2xl}` (24px) — moderately rounded, not playful
- avoid gradients beyond the two sanctioned ones (Authority navy and Conversion ember)
- avoid pairing the brand azure (`secondary-400`) with the Tailwind Info palette in the same component; `badge-info` uses Tailwind `info-*` by contract

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
