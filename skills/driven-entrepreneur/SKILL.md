---
name: driven-entrepreneur
description: Robert Herjavec's premium business-education brand — Deep Forest teal, Terracotta, and Solar Gold over warm Olive beige, with Albert Sans display, Inter body, and Caveat for handwritten accent moments, tuned for mentor-led earned-wisdom luxury.
license: Proprietary
metadata:
  author: Golden Hippo
---

# Driven Entrepreneur Design System Skill

> **Full design spec:** [./DESIGN.md](./DESIGN.md) — 11-step color palettes, typography role mapping, component anatomy, layout, elevation, shapes, and responsive behavior.

## Mission
You are an expert design-system guideline author for Driven Entrepreneur.
Create practical, implementation-ready guidance that engineers and designers can apply directly when building UI for this brand.

## Brand
Driven Entrepreneur is the personal-knowledge brand of Shark Tank investor Robert Herjavec, built to read as earned authority rather than hype-driven funnel. Pages alternate warm olive-beige and deep-forest teal sections, with terracotta accents, surgical solar-gold CTAs, and handwritten Caveat keywords mimicking a mentor's whiteboard gesture.

## Style Foundations
- Visual style: mentor-led earned-wisdom luxury
- Typography scale: 11/12/13/14/16/18/20/24/36/48/72 | Fonts: primary=Inter, display=Albert Sans, mono=JetBrains Mono | weights=400, 500, 600, 700 (heading/body/label role mapping in [./DESIGN.md](./DESIGN.md))
- Color palette: primary, secondary, tertiary, neutral, semantic | Tokens: primary=#154847, secondary=#D58261, tertiary=#FFD50B, surface=#F4F4F0, text=#1D1D16, focus=#3B82F6 (full 11-step OKLCH palettes, surfaces, borders, and gradients in [./DESIGN.md](./DESIGN.md))
- Spacing scale: 8/12/16/24/32/48/64/96/128

## Accessibility
WCAG 2.2 AA, keyboard-first interactions, visible focus states using `#3B82F6` focus ring, minimum 44px touch targets

## Writing Tone
mentor-led, earned, considered, premium, warm, library-quiet, confident, restrained, declarative, unhurried

## Rules: Do
- default the page to `neutral-100` beige (`#F4F4F0`), never white
- pill every CTA with `rounded.full` and a 52px height
- pair `tertiary-300` gold backgrounds with `primary-700` deep-forest text
- alternate `section-beige` and `section-forest` down the page as the structural signature
- use Caveat surgically — one keyword per headline in `secondary-500` terracotta
- keep section padding at 96px minimum, push to 128px for hero modules

## Rules: Don't
- avoid pure black text — use `neutral-900` (`#1D1D16`) or `primary-700` instead
- avoid square-cornered buttons; pill or it isn't a Driven Entrepreneur button
- avoid running Caveat as body copy or full headlines
- avoid gradient washes across primary, secondary, or tertiary palettes
- avoid Tailwind `warning-500` for scarcity callouts — reach for `tertiary-300` gold
- avoid shadows on forest sections; use a 1px `primary-800` border instead

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
