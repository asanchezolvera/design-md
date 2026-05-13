---
version: alpha
name: Power Life
description: A premium daily-wellness supplements brand endorsed by Brooke Burke — cobalt confidence, vital green, and a spark of orange dressed in geometric Montserrat, built to read as bold lifestyle vitality rather than clinical performance.
colors:
  # Brand — Primary: Voltage Cobalt (anchor at 700)
  primary-50: "#F3F7FF"
  primary-100: "#DFEAFF"
  primary-200: "#BFD5FF"
  primary-300: "#97BAFF"
  primary-400: "#6996F0"
  primary-500: "#4470CC"
  primary-600: "#2E55AA"
  primary-700: "#1C439B"
  primary-800: "#193060"
  primary-900: "#102042"
  primary-950: "#050E23"

  # Brand — Secondary: Vital Green (anchor at 400)
  secondary-50: "#EEFBEE"
  secondary-100: "#D6F2D8"
  secondary-200: "#A8E7AD"
  secondary-300: "#75D480"
  secondary-400: "#2CB34A"
  secondary-500: "#008D2F"
  secondary-600: "#006E23"
  secondary-700: "#005519"
  secondary-800: "#003F10"
  secondary-900: "#002B08"
  secondary-950: "#001503"

  # Brand — Tertiary: Spark Orange (anchor at 400)
  tertiary-50: "#FFF4F0"
  tertiary-100: "#FFE3D6"
  tertiary-200: "#FFC6AC"
  tertiary-300: "#FF9F72"
  tertiary-400: "#F96900"
  tertiary-500: "#BD4D00"
  tertiary-600: "#953B00"
  tertiary-700: "#732C00"
  tertiary-800: "#571F00"
  tertiary-900: "#3C1300"
  tertiary-950: "#200700"

  # Neutral — Tailwind Neutral (true neutral)
  neutral-50: "#FAFAFA"
  neutral-100: "#F5F5F5"
  neutral-200: "#E5E5E5"
  neutral-300: "#D4D4D4"
  neutral-400: "#A3A3A3"
  neutral-500: "#737373"
  neutral-600: "#525252"
  neutral-700: "#404040"
  neutral-800: "#262626"
  neutral-900: "#171717"
  neutral-950: "#0A0A0A"

  # Semantic — Error (Tailwind Red)
  error-50: "#FEF2F2"
  error-100: "#FEE2E2"
  error-200: "#FECACA"
  error-300: "#FCA5A5"
  error-400: "#F87171"
  error-500: "#EF4444"
  error-600: "#DC2626"
  error-700: "#B91C1C"
  error-800: "#991B1B"
  error-900: "#7F1D1D"
  error-950: "#450A0A"

  # Semantic — Info (Tailwind Blue)
  info-50: "#EFF6FF"
  info-100: "#DBEAFE"
  info-200: "#BFDBFE"
  info-300: "#93C5FD"
  info-400: "#60A5FA"
  info-500: "#3B82F6"
  info-600: "#2563EB"
  info-700: "#1D4ED8"
  info-800: "#1E40AF"
  info-900: "#1E3A8A"
  info-950: "#172554"

  # Semantic — Success (Tailwind Green)
  success-50: "#F0FDF4"
  success-100: "#DCFCE7"
  success-200: "#BBF7D0"
  success-300: "#86EFAC"
  success-400: "#4ADE80"
  success-500: "#22C55E"
  success-600: "#16A34A"
  success-700: "#15803D"
  success-800: "#166534"
  success-900: "#14532D"
  success-950: "#052E16"

  # Semantic — Warning (Tailwind Yellow)
  warning-50: "#FEFCE8"
  warning-100: "#FEF9C3"
  warning-200: "#FEF08A"
  warning-300: "#FDE047"
  warning-400: "#FACC15"
  warning-500: "#EAB308"
  warning-600: "#CA8A04"
  warning-700: "#A16207"
  warning-800: "#854D0E"
  warning-900: "#713F12"
  warning-950: "#422006"

  # Aliases
  white: "#FFFFFF"
  primary: "{colors.primary-700}"
  secondary: "{colors.secondary-400}"
  tertiary: "{colors.tertiary-400}"
  surface: "{colors.neutral-50}"
  on-surface: "{colors.neutral-900}"
  border: "{colors.neutral-200}"
  focus-ring: "#3B82F6"

typography:
  display:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 4.5rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-xs:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 1.375rem
    fontWeight: 600
    lineHeight: 1.3
  feature-title:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.01em
  label-sm:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.04em
  button-label:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.9375rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.03em
  overline:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.6875rem
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.14em
  micro:
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1.3
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5

rounded:
  none: 0px
  sm: 4px
  md: 10px
  lg: 16px
  xl: 24px
  full: 9999px

spacing:
  "0": 0px
  "1": 2px
  "2": 4px
  "3": 6px
  "4": 8px
  "5": 12px
  "6": 16px
  "7": 20px
  "8": 24px
  "9": 32px
  "10": 40px
  "11": 48px
  "12": 64px
  "13": 80px
  "14": 96px
  "15": 128px
  "16": 160px
  "17": 192px
  "18": 224px
  "19": 256px
  "20": 320px
  "21": 384px
  "22": 480px
  "23": 560px
  "24": 640px
  "25": 720px
  "26": 768px
  "27": 1024px
  "28": 1280px
  "29": 1440px
  "30": 1600px
  "31": 1920px

components:
  button-primary:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-800}"
    textColor: "{colors.white}"
  button-primary-active:
    backgroundColor: "{colors.primary-900}"
    textColor: "{colors.white}"
  button-primary-disabled:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.neutral-600}"

  button-secondary:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 48px
  button-secondary-hover:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.neutral-900}"
  button-secondary-active:
    backgroundColor: "{colors.neutral-300}"
    textColor: "{colors.neutral-900}"

  button-accent:
    backgroundColor: "{colors.tertiary-600}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 48px
  button-accent-hover:
    backgroundColor: "{colors.tertiary-700}"
    textColor: "{colors.white}"
  button-accent-active:
    backgroundColor: "{colors.tertiary-800}"
    textColor: "{colors.white}"

  button-vital:
    backgroundColor: "{colors.secondary-600}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 48px
  button-vital-hover:
    backgroundColor: "{colors.secondary-700}"
    textColor: "{colors.white}"

  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-700}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 48px
  button-outline-hover:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-800}"

  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary-700}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 14px 20px
  button-ghost-hover:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-800}"

  button-pill:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: 14px 32px
    height: 48px

  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: 24px

  card-tinted:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-900}"
    rounded: "{rounded.lg}"
    padding: 24px

  card-dark:
    backgroundColor: "{colors.neutral-900}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.lg}"
    padding: 24px

  card-product:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: 16px

  badge-vital:
    backgroundColor: "{colors.secondary-100}"
    textColor: "{colors.secondary-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    height: 24px

  badge-spark:
    backgroundColor: "{colors.tertiary-400}"
    textColor: "{colors.tertiary-950}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    height: 24px

  badge-info:
    backgroundColor: "{colors.primary-100}"
    textColor: "{colors.primary-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    height: 24px

  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 48px
  input-focus:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
  input-disabled:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-600}"

  navbar:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.label-md}"
    padding: 16px 32px
    height: 72px

  navbar-dark:
    backgroundColor: "{colors.neutral-900}"
    textColor: "{colors.neutral-50}"
    typography: "{typography.label-md}"
    padding: 16px 32px
    height: 72px

  banner-promo:
    backgroundColor: "{colors.tertiary-400}"
    textColor: "{colors.tertiary-950}"
    typography: "{typography.label-md}"
    padding: 10px 24px
    height: 40px

  callout-info:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-900}"
    rounded: "{rounded.md}"
    padding: 16px 20px

  callout-success:
    backgroundColor: "{colors.secondary-50}"
    textColor: "{colors.secondary-800}"
    rounded: "{rounded.md}"
    padding: 16px 20px

  callout-warning:
    backgroundColor: "{colors.warning-50}"
    textColor: "{colors.warning-800}"
    rounded: "{rounded.md}"
    padding: 16px 20px

  callout-error:
    backgroundColor: "{colors.error-50}"
    textColor: "{colors.error-800}"
    rounded: "{rounded.md}"
    padding: 16px 20px
---

# Power Life

## 1. Visual Theme & Atmosphere

Power Life is the language of *daily vitality* rendered in three confident strokes: a deep voltage cobalt that carries the brand's authority, a vital green that signals what the supplements are *for* (energy, recovery, the literal go-signal of being alive), and a spark of orange that says today matters. The visual system is built around saturated, unapologetic color — this is a brand that wants its CTAs to feel like a decision worth making, not a passive nudge. Where adjacent celebrity-wellness brands often retreat into spa pastels and dusty serifs, Power Life leans the other way: bold geometric Montserrat, oversized headlines, and color that doesn't apologize for being color.

The atmosphere is *premium daily wellness for the long game* — confident, energetic, grown-up. Brooke Burke's name lends a lifestyle credibility, but the visual language doesn't try to mimic her brand; it builds its own. Think performance-grade, not gym-bro. Considered, not clinical. The neutral foundation is pure Tailwind Neutral — no warm or cool lean — which lets the saturated brand colors do all the talking without competing undertones. White space is generous but never precious; sections breathe, but the color carries the energy.

The brand voice that emerges from this system: direct, vital, and quietly premium. Headlines make claims; supporting text earns them. The orange is never used at low volumes — when it appears, it's a moment. The green is reserved for confirmation, vitality, and the "yes" beats of the experience. Cobalt does the heavy lifting of every CTA, every primary moment, every "click here to start" surface.

**Key characteristics:**
- Cobalt-led palette with vital green and spark orange supporting roles
- Geometric Montserrat at every level — one font family, full weight range (400–800)
- Saturated, unapologetic color — no muted spa tints
- True neutral foundation so saturated brand colors stay visually loud
- Modest-to-friendly corner radius (4–24px) — confident, not playful
- Generous whitespace with bold typographic punctuation
- Reserved use of orange — it's a *spark*, never wallpaper
- Premium without being precious; lifestyle without being soft

---

## 2. Color Palette & Roles

### Primary — Voltage Cobalt

The brand's anchor. Used for every primary CTA, headline emphasis, link state, navigation surface (when dark), and any "this is Power Life" brand moment. The user-supplied `#1c439b` sits at the 700 step — deep enough to clear AA contrast on white text, saturated enough to feel like a brand color rather than corporate blue. The default usage step is **700**.

| Step  | Token         | Hex       | Usage Guidance |
|-------|---------------|-----------|---------------|
| 50    | `primary-50`  | `#F3F7FF` | Tinted backgrounds, callout-info surface, hover backgrounds for ghost buttons |
| 100   | `primary-100` | `#DFEAFF` | Badge backgrounds, soft hero washes, selected-state tints |
| 200   | `primary-200` | `#BFD5FF` | Light borders on cobalt-tinted cards, decorative dividers |
| 300   | `primary-300` | `#97BAFF` | Disabled CTA backgrounds (rare), progress bar fills |
| 400   | `primary-400` | `#6996F0` | Mid-tone — secondary links on light backgrounds, icon accents |
| 500   | `primary-500` | `#4470CC` | Hover state for `primary-600` backgrounds, links on dark surfaces |
| 600   | `primary-600` | `#2E55AA` | Hover state for the primary button, secondary CTAs on dark surfaces |
| 700 ★ | `primary-700` | `#1C439B` | **Default — primary buttons, key brand moments, link color on light, navigation accent** |
| 800   | `primary-800` | `#193060` | Active/pressed state for primary buttons, dark-mode brand surface |
| 900   | `primary-900` | `#102042` | Deep cobalt — text on primary-tinted backgrounds, dark hero overlays |
| 950   | `primary-950` | `#050E23` | Near-black cobalt undertone — dark theme backgrounds, deepest overlays |

### Secondary — Vital Green

The "yes" color. This is what gets used for vitality signals, success states, "active ingredient" callouts, energy-related copy, and any moment where the brand wants to say *this is working*. The user-supplied `#2cb34a` is bright and reads as life/energy, not corporate success-green; it sits at the 400 step. The default usage step is **400** for badges/highlights and **600** for buttons (where it needs to clear AA against white text).

| Step  | Token            | Hex       | Usage Guidance |
|-------|------------------|-----------|---------------|
| 50    | `secondary-50`   | `#EEFBEE` | Callout-success backgrounds, vitality tints |
| 100   | `secondary-100`  | `#D6F2D8` | Badge-vital backgrounds, "active ingredient" tags |
| 200   | `secondary-200`  | `#A8E7AD` | Soft vitality borders, progress fill light variant |
| 300   | `secondary-300`  | `#75D480` | Mid-tint — chart fills, illustration accents |
| 400 ★ | `secondary-400`  | `#2CB34A` | **Default — vital badges, success icons, "go" signals, illustrative pops** |
| 500   | `secondary-500`  | `#008D2F` | Vitality icon on white surfaces, hover for `secondary-400` swatches |
| 600   | `secondary-600`  | `#006E23` | Button-vital background (white text passes AA), success text on light |
| 700   | `secondary-700`  | `#005519` | Hover state for `button-vital`, deep success indicator |
| 800   | `secondary-800`  | `#003F10` | Text on vital-tinted backgrounds (50–100), forest-deep accents |
| 900   | `secondary-900`  | `#002B08` | Near-black green undertone for dark theme vital moments |
| 950   | `secondary-950`  | `#001503` | Dark theme deepest vital surface |

### Tertiary — Spark Orange

The exclamation point. Spark Orange is the most reserved color in the system — never used as wallpaper, never used as a primary CTA on its own. It appears in *moments*: a "new" badge, a promo banner, a limited-time announcement, a visual accent that says "look here." The user-supplied `#f96900` is loud at the 400 step; the default for badges/banners is **400** with dark text, and the default for CTA buttons (when an orange button is needed) is **600** with white text.

| Step  | Token            | Hex       | Usage Guidance |
|-------|------------------|-----------|---------------|
| 50    | `tertiary-50`    | `#FFF4F0` | Soft promo backgrounds, hover wash for spark buttons |
| 100   | `tertiary-100`   | `#FFE3D6` | Light promo tints, decorative section backgrounds |
| 200   | `tertiary-200`   | `#FFC6AC` | Soft border on spark cards, hover for tertiary-300 |
| 300   | `tertiary-300`   | `#FF9F72` | Mid-tint illustrations, peach accents in lifestyle photography |
| 400 ★ | `tertiary-400`   | `#F96900` | **Default — promo banners (with dark text), spark badges, "new" indicators, illustrative highlights** |
| 500   | `tertiary-500`   | `#BD4D00` | Hover state for `tertiary-400` swatches |
| 600   | `tertiary-600`   | `#953B00` | Button-accent background (white text passes AA) |
| 700   | `tertiary-700`   | `#732C00` | Hover state for `button-accent`, deep spark accent |
| 800   | `tertiary-800`   | `#571F00` | Text on spark-tinted backgrounds (50–200), warm dark text |
| 900   | `tertiary-900`   | `#3C1300` | Near-black orange undertone for dark theme spark moments |
| 950   | `tertiary-950`   | `#200700` | Dark text on the spark `tertiary-400` banner (AA contrast) |

### Secondary & Accent (Semantic) — Standardized

These four palettes are identical across every Golden Hippo brand. The brand does not customize semantic color.

#### Error / Danger (Tailwind Red)

| Step | Token | Hex |
|------|-------|-----|
| 50 | `error-50` | `#FEF2F2` |
| 100 | `error-100` | `#FEE2E2` |
| 200 | `error-200` | `#FECACA` |
| 300 | `error-300` | `#FCA5A5` |
| 400 | `error-400` | `#F87171` |
| 500 | `error-500` | `#EF4444` |
| 600 | `error-600` | `#DC2626` |
| 700 | `error-700` | `#B91C1C` |
| 800 | `error-800` | `#991B1B` |
| 900 | `error-900` | `#7F1D1D` |
| 950 | `error-950` | `#450A0A` |

**Roles:** Text = `error-600` on light / `error-400` on dark · Background = `error-50` / `error-950` · Border = `error-200` / `error-800` · Destructive button = `error-600` bg, white text.

#### Info (Tailwind Blue)

| Step | Token | Hex |
|------|-------|-----|
| 50 | `info-50` | `#EFF6FF` |
| 100 | `info-100` | `#DBEAFE` |
| 200 | `info-200` | `#BFDBFE` |
| 300 | `info-300` | `#93C5FD` |
| 400 | `info-400` | `#60A5FA` |
| 500 | `info-500` | `#3B82F6` |
| 600 | `info-600` | `#2563EB` |
| 700 | `info-700` | `#1D4ED8` |
| 800 | `info-800` | `#1E40AF` |
| 900 | `info-900` | `#1E3A8A` |
| 950 | `info-950` | `#172554` |

**Roles:** Text = `info-600` on light / `info-400` on dark · Background = `info-50` / `info-950` · Border = `info-200` / `info-800` · **Focus ring = `info-500` (`#3B82F6`)** — used everywhere for keyboard focus.

> Note: Info Blue is visually distinct from Voltage Cobalt — `info-500` is a brighter, more digital blue (`#3B82F6`) than the brand's `primary-700` (`#1C439B`). Use Info Blue only for true informational/focus states, never as brand color.

#### Success (Tailwind Green)

| Step | Token | Hex |
|------|-------|-----|
| 50 | `success-50` | `#F0FDF4` |
| 100 | `success-100` | `#DCFCE7` |
| 200 | `success-200` | `#BBF7D0` |
| 300 | `success-300` | `#86EFAC` |
| 400 | `success-400` | `#4ADE80` |
| 500 | `success-500` | `#22C55E` |
| 600 | `success-600` | `#16A34A` |
| 700 | `success-700` | `#15803D` |
| 800 | `success-800` | `#166534` |
| 900 | `success-900` | `#14532D` |
| 950 | `success-950` | `#052E16` |

**Roles:** Text = `success-600` on light / `success-400` on dark · Background = `success-50` / `success-950` · Border = `success-200` / `success-800`.

> Note: Success Green and Vital Green are distinct. Success Green is for *system feedback* ("form submitted", "order confirmed"). Vital Green is for *brand vitality* ("active formula", "energy in every scoop"). Use them deliberately.

#### Warning (Tailwind Yellow)

| Step | Token | Hex |
|------|-------|-----|
| 50 | `warning-50` | `#FEFCE8` |
| 100 | `warning-100` | `#FEF9C3` |
| 200 | `warning-200` | `#FEF08A` |
| 300 | `warning-300` | `#FDE047` |
| 400 | `warning-400` | `#FACC15` |
| 500 | `warning-500` | `#EAB308` |
| 600 | `warning-600` | `#CA8A04` |
| 700 | `warning-700` | `#A16207` |
| 800 | `warning-800` | `#854D0E` |
| 900 | `warning-900` | `#713F12` |
| 950 | `warning-950` | `#422006` |

**Roles:** Text = `warning-700` on light (600 is too low contrast) / `warning-400` on dark · Background = `warning-50` / `warning-950` · Border = `warning-200` / `warning-800`.

### Surface & Background — Tailwind Neutral

| Role | Token | Hex |
|------|-------|-----|
| Page background | `neutral-50` | `#FAFAFA` |
| Card / elevated surface (default) | `white` | `#FFFFFF` |
| Secondary surface / button fill | `neutral-100` | `#F5F5F5` |
| Tinted resting surface (e.g. section break) | `neutral-100` | `#F5F5F5` |
| Dark surface (callouts, dark sections) | `neutral-800` | `#262626` |
| Deep dark / dark theme background | `neutral-950` | `#0A0A0A` |

### Neutrals & Text

| Role | Token | Hex |
|------|-------|-----|
| Primary text on light | `neutral-900` | `#171717` |
| Secondary text on light | `neutral-600` | `#525252` |
| Tertiary / muted text on light | `neutral-500` | `#737373` |
| Disabled text | `neutral-400` | `#A3A3A3` |
| Primary text on dark | `neutral-50` | `#FAFAFA` |
| Secondary text on dark | `neutral-300` | `#D4D4D4` |
| Muted text on dark | `neutral-400` | `#A3A3A3` |

### Borders & Dividers

| Role | Token | Hex |
|------|-------|-----|
| Default light border | `neutral-200` | `#E5E5E5` |
| Prominent border / hover | `neutral-300` | `#D4D4D4` |
| Dark theme border | `neutral-700` | `#404040` |
| Brand emphasis border | `primary-700` | `#1C439B` |
| Focus ring | `info-500` | `#3B82F6` |

### Gradient System

Use sparingly — Power Life is a *flat-color* brand at heart, but two gradients are sanctioned for hero moments and product imagery overlays:

- **Cobalt Rise** — `linear-gradient(135deg, {colors.primary-700} 0%, {colors.primary-900} 100%)` — for dark hero washes, product photography backgrounds, and dark-mode brand surfaces.
- **Spark Sun** — `linear-gradient(135deg, {colors.tertiary-400} 0%, {colors.tertiary-600} 100%)` — for promo banners, limited-time hero strips, and energy-product spotlights. Never use this gradient on the full page; reserve for sections at most.

Avoid multi-color gradients that mix the brand palette — Power Life does not do rainbow CTAs.

---

## 3. Typography Rules

### Font families

| Role | Stack |
|------|-------|
| Display, Headings, Body, UI | `'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |
| Code (rare — receipts, order IDs, technical labels) | `ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace` |

Montserrat is a geometric sans designed in 2010 by Julieta Ulanovsky, available free via Google Fonts. It ships with nine weights (100–900); Power Life uses **400 / 500 / 600 / 700 / 800**. The body weight is 400, the UI/label weight is 600, button labels are 700, and display headlines push to 800 for impact. Italics are rarely used — emphasis comes from weight contrast, not slant.

### Hierarchy

| Token | Font | Size | Weight | Line-height | Letter-spacing | Notes |
|-------|------|------|--------|-------------|----------------|-------|
| `display` | Montserrat | 72px (4.5rem) | 800 | 1.05 | -0.03em | Hero only; "Power Life" wordmark and primary hero claims |
| `headline-lg` | Montserrat | 48px (3rem) | 700 | 1.1 | -0.02em | Section opens, landing page section titles |
| `headline-md` | Montserrat | 36px (2.25rem) | 700 | 1.15 | -0.015em | Sub-section, PDP product names |
| `headline-sm` | Montserrat | 28px (1.75rem) | 600 | 1.2 | -0.01em | Card headlines, modal titles |
| `headline-xs` | Montserrat | 22px (1.375rem) | 600 | 1.3 | – | Small section titles, list group headings |
| `feature-title` | Montserrat | 18px (1.125rem) | 600 | 1.4 | – | Feature/benefit row titles, callout headers |
| `body-lg` | Montserrat | 18px (1.125rem) | 400 | 1.6 | – | Lead paragraphs, marketing body |
| `body-md` | Montserrat | 16px (1rem) | 400 | 1.6 | – | Default body text everywhere |
| `body-sm` | Montserrat | 14px (0.875rem) | 400 | 1.55 | – | Tertiary copy, footnotes, fine-print marketing |
| `caption` | Montserrat | 13px (0.8125rem) | 400 | 1.5 | – | Image captions, helper text |
| `label-md` | Montserrat | 14px (0.875rem) | 600 | 1.4 | 0.01em | Form labels, nav items, card meta |
| `label-sm` | Montserrat | 12px (0.75rem) | 600 | 1.4 | 0.04em | Small UI labels, badge text |
| `button-label` | Montserrat | 15px (0.9375rem) | 700 | 1.2 | 0.03em | All button text — bold, lightly tracked for confidence |
| `overline` | Montserrat | 11px (0.6875rem) | 700 | 1.3 | 0.14em | All-caps eyebrows over headlines, category labels |
| `micro` | Montserrat | 11px (0.6875rem) | 500 | 1.3 | – | Smallest UI text — tooltips, copyright |
| `code` | Mono stack | 14px (0.875rem) | 400 | 1.5 | – | Order numbers, technical IDs |

### Principles

1. **One family, many weights.** Montserrat carries every level. The visual hierarchy comes from weight (400 vs 700 vs 800) and size — not from font mixing. This makes the brand feel cohesive and disciplined.
2. **Display goes hard.** At 72px/800, the display token should feel like a poster, not a paragraph. Negative tracking (-0.03em) tightens the geometric letterforms into a slab of brand voice.
3. **Buttons earn their weight.** All button labels are 700 with +0.03em tracking. This is unusual for a sans, but it's intentional — the buttons should feel decisive, not polite.
4. **Body stays at 400, body-lg leads.** For marketing copy, default to `body-lg` (1.125rem). For UI surfaces (forms, cards, transactional pages), `body-md` (1rem). Don't slip below 14px for content — only UI labels and helper text live in the 12–13px range.
5. **Overline is all-caps + tracked.** The 11px / 700 / +0.14em pattern is the brand's "eyebrow" — appears above section headlines, category labels, and small editorial moments.

---

## 4. Layout Principles

### Spacing System (standardized Golden Hippo scale)

Power Life uses the full Golden Hippo spacing scale — no brand-specific values. Numeric keys refer to the YAML scale:

| Token | Value | Typical Use |
|-------|-------|-------------|
| `0` | 0px | Reset |
| `1` | 2px | Hairlines, icon nudges |
| `2` | 4px | Tight icon gaps |
| `3` | 6px | Compact stack gaps |
| `4` | 8px | Default tight gap (badge padding, small icon-text) |
| `5` | 12px | Form field internal vertical padding, small stack gap |
| `6` | 16px | Default UI gap — card internal stack, list rows |
| `7` | 20px | Comfortable stack gap |
| `8` | 24px | Default card padding, hero stack gap |
| `9` | 32px | Section internal padding, generous stack gap |
| `10` | 40px | Section opens on mobile |
| `11` | 48px | Section gaps on mobile, container padding on desktop |
| `12` | 64px | Standard desktop section vertical rhythm |
| `13` | 80px | Wide desktop section vertical rhythm |
| `14` | 96px | Hero/landing vertical breathing |
| `15` | 128px | Major layout breaks |
| `16`–`26` | 160px–768px | Page max-widths, image rails, hero rails |
| `27`–`31` | 1024px–1920px | Outer container max-widths |

**Component padding norms:**
- Button: 14px vertical / 28px horizontal (height 48px)
- Card: 24px (16px on `card-product`)
- Input: 12px vertical / 16px horizontal (height 48px)
- Section vertical rhythm: 64px mobile → 96–128px desktop

### Grid & container

- **Max content width**: 1280px (`spacing.28`) for marketing layouts; 1024px (`spacing.27`) for editorial copy.
- **Grid**: 12-column with 24px (`spacing.8`) gutters at desktop, 16px (`spacing.6`) at tablet, 8px (`spacing.4`) at mobile.
- **Page gutters**: 24px on mobile, 48px on tablet, 64px on desktop (`spacing.8` → `spacing.11` → `spacing.12`).

### Whitespace philosophy

Power Life's whitespace is generous but not precious. Sections should breathe — 96px+ vertical rhythm on desktop — but headlines and CTAs should feel close enough to belong together (24–32px). The bold typography and saturated color carry the energy, so the whitespace can afford to be quieter than the type itself. Avoid the "spa-luxury" trap of 200px section gaps; this brand has things to say.

---

## 5. Depth & Elevation

Power Life uses the standardized Golden Hippo shadow scale, but applies it sparingly. This is a brand that prefers **flat color + bold type** over shadow-based hierarchy. Most product surfaces are flat-on-flat with borders or color shifts doing the elevation work; shadows appear at the floating-UI layer (modals, dropdowns, sticky banners).

| Token | CSS | Typical Use in Power Life |
|-------|-----|---------------------------|
| `2xs` | `0 1px rgb(0 0 0 / 0.05)` | Hairline lift on resting input borders |
| `xs` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Resting product cards on white backgrounds |
| `sm` | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` | Default card shadow when explicit elevation is desired |
| `md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | Card hover state, sticky add-to-cart bar |
| `lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Dropdowns, popovers, floating CTAs |
| `xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Modals, sheet drawers |
| `2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)` | Hero product photography lift, feature showcase cards |

### Shadow philosophy

Power Life is mildly shadow-averse. The brand reads best when cobalt-on-white and orange-on-cream are doing the visual lifting — adding shadows on top of those flat color blocks can muddy the energy. **Prefer borders, tonal layers, and color contrast over shadows.** When shadow is needed, default to `xs` or `sm` for resting state; reach for `md` only on explicit hover. Reserve `xl` and `2xl` for genuinely floating UI (modals, hero product photography).

Never combine a saturated brand color background with a heavy shadow — the chroma already commands attention; shadow on top is overkill.

---

## 6. Shapes

### Shape language

Power Life's geometry is **confidently rounded, not playful**. Corners are softened just enough to feel approachable for a wellness brand, but never so much that the system feels casual or kid-friendly. The default radius is `md` (10px) — slightly more than the typical Tailwind 8px default — which gives buttons and cards a modern athletic curve without slipping into chunky territory. Sharp 0px corners are reserved for full-bleed banners and section dividers.

### Border radius scale

| Token | Value | Use Case |
|-------|-------|----------|
| `rounded.none` | 0px | Full-bleed banners, promo strips, hero edges that meet viewport edges |
| `rounded.sm` | 4px | Inline elements — small badges, inline tags, chips |
| `rounded.md` | 10px | **Default** — buttons, inputs, callouts, small cards |
| `rounded.lg` | 16px | Cards, panels, modals, product photography containers |
| `rounded.xl` | 24px | Feature cards, large hero modules, signature CTAs |
| `rounded.full` | 9999px | Pill buttons, avatars, tag pills, badge pills |

### Application rules

- **Buttons** default to `rounded.md` (10px). The signature "buy now" CTA may use `rounded.full` as the **pill** variant for hero/landing moments.
- **Inputs** use `rounded.md` to match buttons in the same form.
- **Cards** use `rounded.lg` (16px). Feature/hero cards push to `rounded.xl` (24px).
- **Product photography** containers use `rounded.lg`. Imagery is never set to a pill or full-round; product bottles should read as the geometric heroes they are.
- **Badges** use `rounded.full` for pill badges (the default) or `rounded.sm` for inline tags.
- **Modals & sheets** use `rounded.xl` (24px) for top corners; bottoms are flat when anchored to viewport edges.

---

## 7. Component Stylings

Every component below has a matching definition in the YAML front matter using the spec's closed property set (`backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`, `width`). Token references like `{colors.primary-700}` resolve to the front matter palette.

### Buttons

The brand ships five core button variants — primary, secondary, accent (spark), vital (green), outline — plus a `pill` variant for hero CTAs and `ghost` for in-text actions.

| Variant | Background | Text | Personality |
|---------|------------|------|-------------|
| `button-primary` | `primary-700` `#1C439B` | white | The default CTA. Cobalt, confident, the brand's signature click. |
| `button-primary-hover` | `primary-800` `#193060` | white | One step darker — deepens the cobalt without changing chroma. |
| `button-primary-active` | `primary-900` `#102042` | white | Pressed state — almost-black cobalt. |
| `button-secondary` | `neutral-100` `#F5F5F5` | `neutral-900` | The "alternate" button — used for "Learn more" / "View details" alongside a primary. |
| `button-accent` | `tertiary-600` `#953B00` | white | Spark CTA for promos. Used rarely — never as the *only* CTA on a page. |
| `button-vital` | `secondary-600` `#006E23` | white | Vitality CTA — "Add to subscription", "Start your routine". Reserved for go-signal moments. |
| `button-outline` | white | `primary-700` | On-light alternative for the primary. Same height, same padding. |
| `button-ghost` | transparent | `primary-700` | In-text and toolbar actions. Smaller horizontal padding. |
| `button-pill` | `primary-700` | white | Hero/landing CTAs only — full radius for landing-page punch. |

**Sizing:** All buttons default to **48px height** with **14px vertical / 28px horizontal padding** and `rounded.md` (10px). The `button-pill` variant uses `rounded.full` and 32px horizontal padding. Disabled state: `neutral-200` background, `neutral-600` text, no hover transition.

### Cards & Containers

| Variant | Background | Border | Radius | Use |
|---------|------------|--------|--------|-----|
| `card` | white | optional `neutral-200` 1px | `rounded.lg` (16px) | Default content card |
| `card-tinted` | `primary-50` `#F3F7FF` | none | `rounded.lg` | Cobalt-tinted highlight card |
| `card-dark` | `neutral-900` `#171717` | none | `rounded.lg` | Dark-section feature card |
| `card-product` | white | `neutral-200` 1px | `rounded.lg` | PDP grid card — bottle image + name + price + CTA |

Cards default to **24px padding**. The `card-product` variant uses 16px padding to keep grids dense. Shadow on resting state: `xs` (very subtle); hover: `md`. Dark cards never carry shadow — borders on dark are handled by `neutral-700`.

### Badges

| Variant | Background | Text | Use |
|---------|------------|------|-----|
| `badge-vital` | `secondary-100` `#D6F2D8` | `secondary-800` | "Active ingredient", "Doctor formulated" — anything tied to vitality/credibility |
| `badge-spark` | `tertiary-400` `#F96900` | `tertiary-950` | "New", "Limited", "Bestseller" — high-attention moments only |
| `badge-info` | `primary-100` `#DFEAFF` | `primary-800` | Neutral info — "Subscribe & save", "Free shipping" |

All badges: **24px height**, **4px vertical / 12px horizontal padding**, `label-sm` typography (12px / 600 / +0.04em), `rounded.full`.

### Inputs & Forms

`input` uses **white background**, **`neutral-900` text**, **`neutral-300` 1px border**, `rounded.md` (10px), 48px height, 12px / 16px padding. On focus: 2px `info-500` (`#3B82F6`) ring offset by 2px, border darkens to `primary-700`. Disabled inputs use `neutral-100` background and `neutral-600` text. Helper text is `caption` (13px) `neutral-600`. Error text is `caption` `error-600`.

### Navigation

The default navigation is the **light navbar** — white background, `neutral-900` text, `label-md` typography, 72px height, 16px / 32px padding. The Power Life wordmark sits left; the cart and account CTAs sit right. Below `lg` (1024px), the nav collapses to a hamburger with a slide-out drawer using the same surface treatment.

A **dark navbar** variant exists for dark-mode and high-contrast landing pages — `neutral-900` background, `neutral-50` text, same dimensions. Use sparingly; the brand reads better on white.

The primary CTA in the nav uses `button-primary` at a slightly reduced height (40px instead of 48px) to feel like nav furniture rather than a page-anchor button.

### Image Treatment

- **Product photography** lives in `rounded.lg` (16px) containers on white or `primary-50` tinted backgrounds.
- **Lifestyle photography** (Brooke Burke editorial, fitness moments) uses `rounded.xl` (24px) hero containers with `2xl` shadow lift.
- **Avatars** use `rounded.full`.
- **Decorative illustrations** (ingredient icons, vitality icons) are typically two-color — usually `primary-700` + `secondary-400`, or `neutral-900` + `tertiary-400`. Never three-color illustrations.

### Distinctive Components

- **Promo banner** (`banner-promo`) — full-bleed `tertiary-400` strip with `tertiary-950` dark text at 14px / 600 / +0.01em. 40px height. Used at the top of marketing pages for free shipping / limited-time messaging. Never use this banner for purely informational content — it's for *spark* moments.
- **Callout boxes** — Four flavors (`callout-info`, `callout-success`, `callout-warning`, `callout-error`) following the standard semantic palette pattern. `rounded.md`, 16px / 20px padding, no border, light tinted background with matching dark text.

---

## 8. Do's and Don'ts

### Do

- **Lead with cobalt.** Every primary CTA, every link, every "this is the brand" moment uses `primary-700` (`#1C439B`).
- **Reserve orange.** Spark Orange (`tertiary-400`) is for *moments* — promo strips, "new" badges, illustrative pops. Never a full-page background.
- **Use vital green as the "yes" color.** Active formulas, success states, vitality icons — that's `secondary-400` (`#2CB34A`) territory.
- **Stack Montserrat weights for hierarchy.** 400 → 600 → 700 → 800 is your full hierarchy ladder. No second font needed.
- **Tighten display tracking.** At `display` and `headline-lg`, push letter-spacing to `-0.03em` / `-0.02em`. Geometric sans benefits from tight tracking at large sizes.
- **Default radius to `rounded.md` (10px).** Buttons, inputs, callouts — 10px corners are the brand's house style.
- **Prefer borders over shadows.** Use `neutral-200` 1px borders for resting card elevation. Reserve shadow for true floating UI.
- **Keep neutrals invisible.** Tailwind Neutral has no undertone — let the saturated brand colors do all the color work.
- **Bold the button labels.** All buttons use `button-label` (15px / 700 / +0.03em). The buttons should feel like a decision.
- **Generous section rhythm on desktop.** 96–128px vertical breathing between sections; 64px on mobile.

### Don't

- **Don't use Info Blue (`info-500`) as a brand color.** It's reserved for focus rings and informational states. Cobalt is `primary-700`, not `info-500`.
- **Don't use Vital Green for system success.** "Order confirmed" uses Success Green (`success-600`); "Active ingredient" uses Vital Green (`secondary-400`). They're different palettes for a reason.
- **Don't put white text on `tertiary-400` (`#F96900`) at body sizes.** It fails AA. Use `tertiary-950` (`#200700`) dark text on the orange brand color, or use `tertiary-600` (`#953B00`) background with white text for CTAs.
- **Don't combine saturated brand colors in gradients.** No cobalt-to-green, no green-to-orange. Use the sanctioned `Cobalt Rise` and `Spark Sun` gradients only.
- **Don't use Montserrat italics.** Emphasis is weight-based. Italics flatten the geometric character.
- **Don't push corner radius past `rounded.xl` (24px) on content surfaces.** Past 24px the brand starts to read playful, not premium.
- **Don't layer multiple shadows on the same card.** One shadow per element; if it needs more presence, use a tonal background change instead.
- **Don't shrink body text below 14px.** Anything smaller belongs in the `caption` / `micro` typography tokens — not running body.
- **Don't use Spark Orange for primary CTAs.** Cobalt is the default click target. Orange is for promo moments only.
- **Don't dilute the palette.** Avoid `primary-400` (`#6996F0`) for primary text or CTAs — it's a mid-tone for accents only. The brand sits firmly at 700.

---

## 9. Responsive Behavior

### Breakpoints (standardized)

| Name | Min Width | Power Life behavior |
|------|-----------|---------------------|
| (base) | 0px | Single-column, 24px page gutters, 48-height buttons remain full-width on hero CTAs |
| `sm` | 640px | More room for typography; body bumps from `body-md` to `body-lg` in marketing copy |
| `md` | 768px | Two-column layouts begin; PDP image rail splits from copy; nav still hamburger |
| `lg` | 1024px | Full horizontal nav appears; 3-column product grids; section padding bumps to 96px |
| `xl` | 1280px | Max content width hits; outer page gutters grow to 64px |
| `2xl` | 1536px | Container max stays at 1280px; extra space lives in the page margins, not the content |

### Touch targets

Every interactive element on mobile maintains a **minimum 44 × 44px** hit area, including padding. Default buttons are 48px tall to clear this comfortably. Icon-only buttons (e.g., menu close, quantity steppers) include 8px of invisible padding to hit the 44px target.

### Collapsing strategy

- **Hero**: Stack vertical on base/`sm` — copy first, photography below. Split horizontal at `md`+. Display type drops from 72px → 48px on mobile (`headline-lg`).
- **Product grid**: 2-up on `sm`, 3-up on `lg`, 4-up on `xl`. Cards retain `rounded.lg` and 16px internal padding throughout.
- **Navigation**: Hamburger drawer below `lg`. Full horizontal nav with cart, account, search at `lg`+.
- **Footer**: Single column on base, two columns at `md`, four columns at `lg`+.
- **Section vertical rhythm**: 64px on mobile → 96px on `md` → 128px on `lg`+.

### Image behavior

Product photography keeps **1:1 aspect** on grid surfaces, **4:5 aspect** on PDP hero. Lifestyle photography (Brooke editorial moments) uses **16:9 hero / 4:3 mid-page**. Images are never cropped past the `rounded.xl` (24px) container on hero — preserve the geometric corner. On mobile, images scale to full viewport width inside the 24px gutters.

---

## 10. Agent Prompt Guide

This section is written for AI coding assistants generating Power Life UI. The front matter YAML is the authoritative source for any token value — refer to it before reaching for a raw hex code.

### Quick Color Reference

| Token | Hex | Most Common Use |
|-------|-----|-----------------|
| `primary-700` ★ | `#1C439B` | Default primary CTA, brand links, nav accent |
| `primary-800` | `#193060` | Primary button hover |
| `primary-50` | `#F3F7FF` | Tinted callout bg, ghost-button hover |
| `secondary-400` ★ | `#2CB34A` | Vital badge, active-ingredient marker |
| `secondary-600` | `#006E23` | Vital CTA button (white text) |
| `secondary-50` | `#EEFBEE` | Success callout background |
| `tertiary-400` ★ | `#F96900` | Promo banner, "new" badge (dark text) |
| `tertiary-600` | `#953B00` | Accent/spark CTA button (white text) |
| `tertiary-50` | `#FFF4F0` | Soft promo card background |
| `neutral-50` | `#FAFAFA` | Page background |
| `neutral-100` | `#F5F5F5` | Secondary button, tinted section |
| `neutral-200` | `#E5E5E5` | Default border |
| `neutral-500` | `#737373` | Muted text |
| `neutral-600` | `#525252` | Secondary text |
| `neutral-900` | `#171717` | Primary text on light |
| `white` | `#FFFFFF` | Cards, navbar |
| `info-500` | `#3B82F6` | Focus ring (and only the focus ring) |

### Token Reference Cheat Sheet

- Components reference tokens, never raw hex. `{colors.primary-700}`, not `#1C439B`.
- `{rounded.md}` resolves to `10px`. `{rounded.full}` is `9999px`.
- `{typography.button-label}` is the canonical button text spec.
- `{spacing.8}` = 24px (default card padding). `{spacing.12}` = 64px (default section rhythm).
- Semantic aliases (`primary`, `secondary`, `tertiary`, `surface`, `on-surface`, `border`, `focus-ring`) point to numbered steps. Use the alias for readability where the role is clear.

### Example Component Prompts

> Build a hero section using `{typography.display}` for the headline in `{colors.neutral-900}`, `{typography.body-lg}` for the subheadline in `{colors.neutral-600}`, and a `button-primary` CTA (`{colors.primary-700}` background, white text, `{rounded.md}` corners). Set section padding to `{spacing.13}` vertical (80px) on mobile, `{spacing.14}` (96px) on desktop. Lifestyle photo on the right at `{rounded.xl}` (24px) corners with a `2xl` shadow.

> Build a product card with `{colors.white}` background, `{colors.neutral-200}` 1px border, `{rounded.lg}` corners, and `{spacing.6}` padding (16px). Product image on top in a `{rounded.md}` container. Product name in `{typography.feature-title}` `{colors.neutral-900}`. Price in `{typography.body-md}` `{colors.neutral-600}`. A `badge-spark` ("New") in the top-right corner using `{colors.tertiary-400}` background and `{colors.tertiary-950}` dark text. CTA at the bottom is `button-primary` full-width.

> Build a promo banner using the `banner-promo` spec: `{colors.tertiary-400}` (#F96900) background, `{colors.tertiary-950}` (#200700) dark text, `{typography.label-md}`, 40px height, full-bleed at viewport width. Content: "Free shipping on orders $75+". No icon. Center-aligned text.

> Build a callout card highlighting an "Active ingredient" with `{colors.secondary-50}` background, `{colors.secondary-800}` text, `{rounded.md}` corners, `{spacing.6}` / `{spacing.7}` padding (16px / 20px). Use a `badge-vital` chip in the top-left with `{colors.secondary-100}` background and `{colors.secondary-800}` text reading "Vitality blend". Body in `{typography.body-md}`.

> Build a primary CTA button using the `button-primary` component spec: `{colors.primary-700}` background, `{colors.white}` text, `{typography.button-label}` (15px / 700 / +0.03em), `{rounded.md}` corners, 14px / 28px padding, 48px height. Hover state shifts to `{colors.primary-800}`. Active state shifts to `{colors.primary-900}`. Focus ring is 2px `{colors.info-500}` with 2px offset.

### Iteration Guide

1. **Start with the alias, swap to the numbered step only when you need a non-default tone.** `{colors.primary}` covers most cases; reach for `{colors.primary-50}` or `{colors.primary-800}` when you specifically want a tint or a hover state.
2. **If white text fails AA against a saturated brand color, bump the background to the 600-step variant.** This is built into the system — `secondary-400` is for badges with dark text; `secondary-600` is for buttons with white text. Same pattern for `tertiary`.
3. **Cobalt is the primary CTA. Orange is never a primary CTA on its own.** If the page already has a `button-accent`, the surrounding hierarchy must include at least one `button-primary` as the actual primary action.
4. **Default to `button-label` typography for all buttons.** The +0.03em tracking matters — it's part of the brand voice. Don't override it.
5. **Don't introduce new gradients.** Only `Cobalt Rise` (`primary-700` → `primary-900`) and `Spark Sun` (`tertiary-400` → `tertiary-600`) are sanctioned. No three-color brand gradients.
6. **Use the standardized semantic palettes for system feedback.** Form errors use `error-*`; success toasts use `success-*`. Brand colors (cobalt, vital green, spark orange) are not for system messaging — they're for brand expression.
7. **Refer to the front matter YAML when in doubt.** The prose explains the *why*; the YAML is the *what*. If they disagree, the YAML is the source of truth and the prose is the bug to fix.
