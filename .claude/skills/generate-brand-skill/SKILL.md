---
name: generate-brand-skill
description: Generate a brand SKILL.md from its DESIGN.md. Pass a brand slug to process one brand, or no args to process every brand listed in skills/index.json. Produces ~100-line skill files that AI agents load when writing brand-specific UI code.
---

# generate-brand-skill

## Purpose

Distill a brand's verbose `skills/<slug>/DESIGN.md` (~800 lines of YAML token frontmatter + prose) into a concise `skills/<slug>/SKILL.md` (~100 lines) that an AI agent can load as a skill when generating UI code for that brand.

The output format mirrors [awesome-design-skills/skills/ant/SKILL.md](https://github.com/bergside/awesome-design-skills/blob/main/skills/ant/SKILL.md) — terse, prose-only, optimized for an agent to keep in context while writing components.

## Invocation

- `/generate-brand-skill <slug>` — generate `skills/<slug>/SKILL.md` from `skills/<slug>/DESIGN.md`.
  - If `skills/<slug>/DESIGN.md` does not exist, stop and report the missing file. Do not invent content.
- `/generate-brand-skill` (no argument) — read `skills/index.json` and generate a SKILL.md for every brand whose `DESIGN.md` exists. For brands without a DESIGN.md, print one line: `skipped <slug> — no DESIGN.md`.

If `skills/<slug>/SKILL.md` already exists, overwrite it. DESIGN.md is the source of truth.

## Procedure (per brand)

1. Run `node scripts/validate-design.mjs skills/<slug>/DESIGN.md`. If it exits non-zero, abort: do not write SKILL.md, surface the validator's stderr, and report this brand as `error <slug> — DESIGN.md failed validation`.
2. Read `skills/<slug>/DESIGN.md` in full.
3. Parse the YAML frontmatter. The frontmatter is authoritative — when prose disagrees with YAML, the YAML wins.
4. Identify the brand anchor steps by reading the `# Brand — Primary`, `# Brand — Secondary`, `# Brand — Tertiary` comments at the top of the `colors` block (e.g. "Primary: Midnight Ink (anchor at 800)" means `primary-800` is the anchor hex).
5. Fill the template below with brand-specific values. The lower sections (Expected Behavior through Example Constraint Language) are brand-agnostic boilerplate — copy them verbatim.
6. Write the result to `skills/<slug>/SKILL.md`.

## Output template

Produce exactly this structure. Bracketed placeholders are the only fields you fill in.

```markdown
---
name: <slug>
description: <one sentence — adapt the DESIGN.md frontmatter `description` field if present, otherwise distill DESIGN.md §1>
license: Proprietary
metadata:
  author: Golden Hippo
---

# <Brand Name> Design System Skill

## Mission
You are an expert design-system guideline author for <Brand Name>.
Create practical, implementation-ready guidance that engineers and designers can apply directly when building UI for this brand.

## Brand
<1–2 sentences distilled from DESIGN.md §1 Visual Theme & Atmosphere. Capture the brand's positioning and key visual move.>

## Style Foundations
- Visual style: <short descriptor — 3–6 words from §1, e.g. "editorial luxury, magazine pacing">
- Typography scale: <unique fontSize values in px, slash-separated, ascending — e.g. 10/12/14/16/18/24/30/40/56/80> | Fonts: primary=<body-md fontFamily, first name>, display=<display fontFamily, first name>, mono=<code fontFamily, first name> | weights=<unique fontWeight values across the typography block, comma-separated>
- Color palette: primary, secondary, tertiary, neutral, semantic | Tokens: primary=<anchor hex>, secondary=<anchor hex>, tertiary=<anchor hex>, surface=<colors.white or surface hex>, text=<text/on-surface hex>, focus=#3B82F6
- Spacing scale: <6–8 most-used step values for padding, gap, section spacing, slash-separated — e.g. 4/8/16/24/32/48/64/96>

## Accessibility
WCAG 2.2 AA, keyboard-first interactions, visible focus states using `#3B82F6` focus ring, minimum 44px touch targets

## Writing Tone
<6–10 comma-separated adjectives derived from §1 atmosphere descriptors and §3 typographic principles — e.g. "editorial, restrained, confident, magazine-paced, low-jargon, clear">

## Rules: Do
<6 bullets distilled from DESIGN.md §8 Do's. Rewrite each as a terse imperative starting with a verb (prefer, use, keep, default to, treat, reach for). Anchor at least three to a specific token or numeric threshold.>

## Rules: Don't
<6 bullets distilled from DESIGN.md §8 Don'ts. Rewrite each as a terse "avoid …" or "don't …" line.>

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
```

## Distillation rules

When filling in the bracketed sections, follow these rules:

1. **YAML wins over prose.** Hex values, font names, weights, and sizes come from the frontmatter, not the prose tables. Read prose only for §1 atmosphere and §8 do/don't lists.
2. **Anchor steps.** The brand hex for `primary`, `secondary`, `tertiary` is the step called out in the YAML comments (e.g. "anchor at 800"). Use that step's hex value, not step 500.
3. **Typography size list.** Collect every unique `fontSize` value across the `typography` block, convert to px (1rem = 16px), dedupe, sort ascending, join with `/`. Cap at ~10 values; if more, drop the two least-used.
4. **Font names.** Strip quotes and fallback stacks. Keep only the first family name (e.g. `"Playfair Display"` not `"Playfair Display", Georgia, serif`).
5. **Weights.** Collect every unique `fontWeight` value across the typography block, sort ascending, comma-separated. If the YAML only references one weight, list that one.
6. **Spacing summary.** Look at the `components` block for the actual padding/gap values in use and at §4 "common usage patterns" prose. Pick 6–8 step values that cover small/medium/large; do not dump the full 32-step scale.
7. **Do/Don't bullets.** Pick the 6 most brand-defining items from §8 of DESIGN.md. Rewrite in terse imperative form. Drop hedge words, justifications, and parentheticals. Each bullet should fit on one line.
8. **Tone words.** Derive 6–10 adjectives from §1 (atmosphere, voice) and §3 (typographic principles). Lowercase, comma-separated. Avoid generic words like "good" or "nice."
9. **Length budget.** Target 80–120 lines for the final SKILL.md. If you exceed 120, tighten the Brand paragraph and the Do/Don't bullets.
10. **No invention.** If a field can't be derived from DESIGN.md (e.g. brand has no tertiary palette), omit the field rather than inventing a value. State the omission in your post-write summary so the user can decide.

## Reporting

After writing each SKILL.md, print one line per brand:

- `wrote skills/<slug>/SKILL.md (<N> lines)`
- `skipped <slug> — no DESIGN.md` (for placeholder brands when running with no args)
- `error <slug> — DESIGN.md failed validation` (when `scripts/validate-design.mjs` exits non-zero)
- `error <slug> — <reason>` (for any other per-brand failure)

End with a single summary line: `done — <wrote> written, <skipped> skipped, <errors> errors`.
