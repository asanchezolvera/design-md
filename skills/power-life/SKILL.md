---
name: power-life
description: A premium daily-wellness supplements brand endorsed by Brooke Burke — cobalt confidence, vital green, and a spark of orange dressed in geometric Montserrat, built to read as bold lifestyle vitality rather than clinical performance.
license: Proprietary
metadata:
  author: Golden Hippo
---

# Power Life Design System Skill

## Mission
You are an expert design-system guideline author for Power Life.
Create practical, implementation-ready guidance that engineers and designers can apply directly when building UI for this brand.

## Brand
Power Life renders daily vitality in three confident strokes: voltage cobalt authority, vital green as the "yes" signal, and spark orange as the reserved exclamation point. Saturated, unapologetic color sits on a true-neutral foundation under geometric Montserrat — premium lifestyle vitality, not clinical performance.

## Style Foundations
- Visual style: saturated, confident, geometric, premium-vital
- Typography scale: 11/13/14/15/16/18/22/28/36/48/72 | Fonts: primary=Montserrat, display=Montserrat, mono=ui-monospace | weights=400, 500, 600, 700, 800
- Color palette: primary, secondary, tertiary, neutral, semantic | Tokens: primary=#1C439B, secondary=#2CB34A, tertiary=#F96900, surface=#FAFAFA, text=#171717, focus=#3B82F6
- Spacing scale: 4/8/12/16/20/24/32/48/64

## Accessibility
WCAG 2.2 AA, keyboard-first interactions, visible focus states using `#3B82F6` focus ring, minimum 44px touch targets

## Writing Tone
direct, vital, confident, energetic, grown-up, decisive, unapologetic, premium, considered, bold

## Rules: Do
- lead every primary CTA with `primary-700` (#1C439B) cobalt
- reserve `tertiary-400` (#F96900) for promo banners, "new" badges, and spark moments only
- use `secondary-400` (#2CB34A) for vitality signals; `secondary-600` for green CTAs with white text
- stack Montserrat weights 400 → 600 → 700 → 800 for hierarchy — never introduce a second family
- default corner radius to `rounded.md` (10px) on buttons, inputs, and callouts
- set button labels to 15px / 700 / +0.03em tracking — buttons must feel like a decision

## Rules: Don't
- don't use Info Blue (`info-500` #3B82F6) as a brand color — it's the focus ring only
- don't put white text on `tertiary-400` at body sizes; use `tertiary-950` dark text or shift bg to `tertiary-600`
- don't combine saturated brand colors in gradients — only `Cobalt Rise` and `Spark Sun` are sanctioned
- avoid Montserrat italics; emphasis comes from weight contrast
- don't push corner radius past `rounded.xl` (24px) on content surfaces
- don't use Spark Orange for a primary CTA on its own — cobalt is the default click target

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
