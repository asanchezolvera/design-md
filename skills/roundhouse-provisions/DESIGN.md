---
version: alpha
name: Roundhouse Provisions
description: A rugged DTC supplements brand from the late Chuck Norris — Ranger ember orange, Texas sky blue, and saddle-leather brown set in condensed Antonio over humanist Barlow, built to read as frontier-grit modern wellness rather than spa-soft or gym-bro.
colors:
  # Brand — Primary: Ranger Ember (anchor at 400)
  primary-50: "#FFF4F1"
  primary-100: "#FFE2DB"
  primary-200: "#FFC4B6"
  primary-300: "#FF9D85"
  primary-400: "#EE5531"
  primary-500: "#CD3408"
  primary-600: "#A42500"
  primary-700: "#7F1A00"
  primary-800: "#601200"
  primary-900: "#420A00"
  primary-950: "#230300"

  # Brand — Secondary: Texas Sky (anchor at 300)
  secondary-50: "#EEF9FE"
  secondary-100: "#D7EEF8"
  secondary-200: "#A9DEF4"
  secondary-300: "#54C0E8"
  secondary-400: "#3EA6CB"
  secondary-500: "#0080A4"
  secondary-600: "#006481"
  secondary-700: "#004D63"
  secondary-800: "#00394A"
  secondary-900: "#002633"
  secondary-950: "#00121A"

  # Brand — Tertiary: Saddle (anchor at 700)
  tertiary-50: "#F8F6F5"
  tertiary-100: "#ECE9E6"
  tertiary-200: "#D9D3CD"
  tertiary-300: "#C2B9B0"
  tertiary-400: "#A0968C"
  tertiary-500: "#7D7269"
  tertiary-600: "#625950"
  tertiary-700: "#443B32"
  tertiary-800: "#37322D"
  tertiary-900: "#25211D"
  tertiary-950: "#110F0D"

  # Neutral — Tailwind Stone (warm sandy undertone)
  neutral-50: "#FAFAF9"
  neutral-100: "#F5F5F4"
  neutral-200: "#E7E5E4"
  neutral-300: "#D6D3D1"
  neutral-400: "#A8A29E"
  neutral-500: "#78716C"
  neutral-600: "#57534E"
  neutral-700: "#44403C"
  neutral-800: "#292524"
  neutral-900: "#1C1917"
  neutral-950: "#0C0A09"

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
  primary: "{colors.primary-600}"
  secondary: "{colors.secondary-600}"
  tertiary: "{colors.tertiary-700}"
  surface: "#FFFFFF"
  surface-raised: "{colors.neutral-50}"
  on-surface: "{colors.neutral-900}"
  border: "{colors.neutral-200}"
  focus-ring: "#3B82F6"

typography:
  display:
    fontFamily: "'Antonio', 'Oswald', 'Impact', sans-serif"
    fontSize: 5rem
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0em
    textTransform: uppercase
  headline-lg:
    fontFamily: "'Antonio', 'Oswald', 'Impact', sans-serif"
    fontSize: 3.5rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0.005em
    textTransform: uppercase
  headline-md:
    fontFamily: "'Antonio', 'Oswald', 'Impact', sans-serif"
    fontSize: 2.5rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0.01em
    textTransform: uppercase
  headline-sm:
    fontFamily: "'Antonio', 'Oswald', 'Impact', sans-serif"
    fontSize: 1.875rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0.015em
    textTransform: uppercase
  headline-xs:
    fontFamily: "'Antonio', 'Oswald', 'Impact', sans-serif"
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.02em
    textTransform: uppercase
  feature-title:
    fontFamily: "'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.35
  body-lg:
    fontFamily: "'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.01em
  label-sm:
    fontFamily: "'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.04em
  button-label:
    fontFamily: "'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.9375rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.04em
  overline:
    fontFamily: "'Antonio', 'Oswald', 'Impact', sans-serif"
    fontSize: 0.8125rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.18em
    textTransform: uppercase
  micro:
    fontFamily: "'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
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
  md: 8px
  lg: 14px
  xl: 20px
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
    backgroundColor: "{colors.primary-600}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.white}"
  button-primary-active:
    backgroundColor: "{colors.primary-800}"
    textColor: "{colors.white}"
  button-primary-disabled:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.neutral-600}"

  button-ember:
    backgroundColor: "{colors.primary-400}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 48px
  button-ember-hover:
    backgroundColor: "{colors.primary-500}"
    textColor: "{colors.white}"
  button-ember-active:
    backgroundColor: "{colors.primary-600}"
    textColor: "{colors.white}"

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

  button-sky:
    backgroundColor: "{colors.secondary-600}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 48px
  button-sky-hover:
    backgroundColor: "{colors.secondary-700}"
    textColor: "{colors.white}"

  button-saddle:
    backgroundColor: "{colors.tertiary-700}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 48px
  button-saddle-hover:
    backgroundColor: "{colors.tertiary-800}"
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
    textColor: "{colors.tertiary-700}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 14px 20px
  button-ghost-hover:
    backgroundColor: "{colors.tertiary-50}"
    textColor: "{colors.tertiary-800}"

  button-pill:
    backgroundColor: "{colors.primary-600}"
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

  card-raised:
    backgroundColor: "{colors.neutral-50}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: 24px

  card-ember:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-900}"
    rounded: "{rounded.lg}"
    padding: 24px

  card-dark:
    backgroundColor: "{colors.tertiary-900}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.lg}"
    padding: 24px

  card-product:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: 16px

  badge-ember:
    backgroundColor: "{colors.primary-400}"
    textColor: "{colors.primary-950}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    height: 24px

  badge-sky:
    backgroundColor: "{colors.secondary-100}"
    textColor: "{colors.secondary-900}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    height: 24px

  badge-saddle:
    backgroundColor: "{colors.tertiary-100}"
    textColor: "{colors.tertiary-900}"
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
    backgroundColor: "{colors.tertiary-900}"
    textColor: "{colors.neutral-50}"
    typography: "{typography.label-md}"
    padding: 16px 32px
    height: 72px

  banner-promo:
    backgroundColor: "{colors.primary-400}"
    textColor: "{colors.primary-950}"
    typography: "{typography.label-md}"
    padding: 10px 24px
    height: 40px

  callout-info:
    backgroundColor: "{colors.secondary-50}"
    textColor: "{colors.secondary-900}"
    rounded: "{rounded.md}"
    padding: 16px 20px

  callout-success:
    backgroundColor: "{colors.success-50}"
    textColor: "{colors.success-800}"
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

# Roundhouse Provisions

## 1. Visual Theme & Atmosphere

Roundhouse Provisions is *frontier-grit modern wellness* — a supplement brand from the late Chuck Norris that translates the Texas Ranger mythos into a daily-essentials product line for the long-game crowd. The visual identity is built on three confident pulls: an ember orange (`#EE5531`) that carries the rugged American heat of sunset and forged iron, a Texas sky blue (`#54C0E8`) that opens the palette up to big country and clean morning air, and a saddle-leather brown (`#443B32`) that anchors everything in worn, dependable craft. Together they read as *somebody who's been doing this a while* — not slick, not soft, not chasing a trend.

The atmosphere is *masculine without being macho, traditional without being old-fashioned, premium without being precious*. Where adjacent supplements brands either retreat into clinical-white minimalism or lean hard on bro-aesthetic black-and-neon, Roundhouse goes the other way: warm Stone neutrals (`#FAFAF9` through `#0C0A09`) carry a sandy, sun-bleached quality that pairs naturally with the ember and saddle palette; condensed Antonio headlines deliver stadium-poster impact without screaming; humanist Barlow body copy keeps long-form product education legible for an audience reading in their fifties and sixties. The system says *trust, durability, plainspoken confidence* — the same values the founder built his name on.

The brand voice that emerges from this system: direct, earned, plainspoken. Headlines are short and load-bearing. The ember orange is a *moment* color — banners, badges, illustration flourishes — never wallpaper. The CTA color is the deeper rust (`#A42500`, `primary-600`) which clears AA contrast cleanly and reads as *iron forged darker by the same fire*. Sky blue handles informational accents and trust signals; saddle handles dark surfaces, footers, and anywhere the system needs to feel grounded.

**Key characteristics:**
- Ember-led palette with Texas sky and saddle leather supporting roles
- Antonio (condensed) over Barlow (humanist) — stadium-poster headlines, readable body
- Warm Stone neutral foundation — sandy, sun-bleached, never cool or clinical
- Confident-modest corner radius (4–20px) — grounded, not playful
- Saturated ember reserved as a brand-moment color, never CTA workhorse
- White page surfaces with neutral-50 cards — keeps the orange popping
- Generous whitespace with bold Antonio punctuation
- Stadium-energy headlines, frontier-quiet body — earned authority, not shouted

---

## 2. Color Palette & Roles

### Primary — Ranger Ember

The brand's signature heat. The user-supplied `#EE5531` sits at the **400** step — a vibrant ember orange that reads as forged iron at dusk and carries the Chuck Norris persona without leaning into kitsch. Because the anchor doesn't clear AA against white text, the ember is treated as a *brand-moment* color: banners, badges, illustration accents, hero washes, and the rare button where dark text on bright orange is the right call. The CTA workhorse lives one shade deeper at **600** (`#A42500`), which reads as the same fire forged darker.

| Step  | Token         | Hex       | Usage Guidance |
|-------|---------------|-----------|---------------|
| 50    | `primary-50`  | `#FFF4F1` | Tinted backgrounds, ember-card surface, hover backgrounds for ghost buttons |
| 100   | `primary-100` | `#FFE2DB` | Badge backgrounds, hero washes, soft selected-state tints |
| 200   | `primary-200` | `#FFC4B6` | Light borders on ember-tinted cards, decorative dividers |
| 300   | `primary-300` | `#FF9D85` | Progress bar fills, ember-illustration mid-tones |
| 400 ★ | `primary-400` | `#EE5531` | **Default brand-moment color — promo banners, ember badges, illustration accents, hero highlights** |
| 500   | `primary-500` | `#CD3408` | Hover state for `primary-400` ember surfaces, mid-tone CTA when dark text reads |
| 600   | `primary-600` | `#A42500` | CTA workhorse — primary button background, white-text-safe brand surface |
| 700   | `primary-700` | `#7F1A00` | Hover state for primary buttons, link color on light, ember accent on dark |
| 800   | `primary-800` | `#601200` | Pressed/active state for primary buttons, deepest ember headline accent |
| 900   | `primary-900` | `#420A00` | Text on ember-tinted backgrounds (50/100), ember dark-mode surface |
| 950   | `primary-950` | `#230300` | Near-black ember undertone — text on bright `primary-400` banners and badges |

### Secondary — Texas Sky

The opening color. The user-supplied `#54C0E8` sits at the **300** step — a clean, slightly desaturated sky blue that gives the palette altitude and air without ever competing with the ember. It's the trust signal: informational callouts, supporting CTAs, "verified ingredients" badges, and any moment that wants to say *clear morning over open country*. The default usage step is **300** for tints and badges; the button step is **600** (`#006481`) for AA-safe white-text CTAs.

| Step  | Token            | Hex       | Usage Guidance |
|-------|------------------|-----------|---------------|
| 50    | `secondary-50`   | `#EEF9FE` | Callout-info backgrounds, soft sky washes, hover-tints for ghost-sky buttons |
| 100   | `secondary-100`  | `#D7EEF8` | Badge-sky backgrounds, "verified" tags, sky illustration soft fills |
| 200   | `secondary-200`  | `#A9DEF4` | Light sky borders, progress fill light variant |
| 300 ★ | `secondary-300`  | `#54C0E8` | **Default — sky moments, illustration highlights, decorative accents, info icon fills** |
| 400   | `secondary-400`  | `#3EA6CB` | Mid-tone sky on white surfaces, hover for `secondary-300` decorative fills |
| 500   | `secondary-500`  | `#0080A4` | Mid-button alternative — works with white text but slightly low contrast on small sizes |
| 600   | `secondary-600`  | `#006481` | Sky button CTA — AA-safe with white text |
| 700   | `secondary-700`  | `#004D63` | Hover state for sky buttons, deep sky text on light backgrounds |
| 800   | `secondary-800`  | `#00394A` | Active/pressed sky button, sky-tinted dark surface |
| 900   | `secondary-900`  | `#002633` | Text on sky-tinted backgrounds (50/100), sky icon on white |
| 950   | `secondary-950`  | `#00121A` | Near-black sky undertone — deep overlays, sky dark-theme surfaces |

### Tertiary — Saddle

The anchor. The user-supplied `#443B32` sits at the **700** step — a dark, warm earthy brown that reads as worn leather, weathered wood, and ranch dirt at golden hour. With OKLCH chroma at just 0.020, Saddle is functionally a tinted neutral that runs warmer and deeper than the Stone palette, giving us a second darkness register: where Stone-900 (`#1C1917`) is sun-bleached charcoal, Saddle (`#443B32`) is the inside of a saddlebag. It carries dark navbars, footers, dark cards, and any moment that needs grounded weight without going full black. The default usage step is **700**.

| Step  | Token            | Hex       | Usage Guidance |
|-------|------------------|-----------|---------------|
| 50    | `tertiary-50`    | `#F8F6F5` | Ghost button hover, saddle-tinted callouts, soft pre-card washes |
| 100   | `tertiary-100`   | `#ECE9E6` | Badge-saddle backgrounds, "craft" tags, recessed surface tint |
| 200   | `tertiary-200`   | `#D9D3CD` | Saddle borders, decorative dividers on warm sections |
| 300   | `tertiary-300`   | `#C2B9B0` | Disabled saddle states, low-emphasis backgrounds |
| 400   | `tertiary-400`   | `#A0968C` | Mid-tone saddle — secondary icons, decorative illustration fills |
| 500   | `tertiary-500`   | `#7D7269` | Saddle body text on light tints, muted brand voice |
| 600   | `tertiary-600`   | `#625950` | Saddle headline accent, secondary nav text on light |
| 700 ★ | `tertiary-700`   | `#443B32` | **Default — dark navbar, footer surface, saddle CTA background, grounded dark moments** |
| 800   | `tertiary-800`   | `#37322D` | Hover state for saddle buttons, dark card surface |
| 900   | `tertiary-900`   | `#25211D` | Deep saddle — dark-theme page background, deepest footer fill |
| 950   | `tertiary-950`   | `#110F0D` | Near-black saddle — heaviest overlay, darkest section divider |

### Surface & Background

The page surface defaults to **pure white (`#FFFFFF`)**. White lets the ember land cleanly, keeps long-form ingredient and education copy maximally legible for the 45–70 audience, and reserves the warm Stone palette for the cards, dividers, and recessed surfaces that sit *on* the page. The brand's warmth comes from typography and color usage, not from tinting the page itself.

| Role | Token | Hex | Notes |
|------|-------|-----|-------|
| Page background | `surface` | `#FFFFFF` | Default page surface — white |
| Card / elevated surface | `surface-raised` | `#FAFAF9` (`neutral-50`) | Cards sitting on white pages — barely-there warm separation |
| Recessed / section alt | — | `#F5F5F4` (`neutral-100`) | Alternate sections, recessed background bands |
| Interactive surface | — | `#E7E5E4` (`neutral-200`) | Secondary button rest state, chip backgrounds |
| Dark surface | — | `#1C1917` (`neutral-900`) | Dark sections (sun-bleached charcoal register) |
| Saddle dark surface | — | `#25211D` (`tertiary-900`) | Dark navbar, footer, leather-anchored moments |
| Deep dark / dark theme bg | — | `#0C0A09` (`neutral-950`) | Deepest overlays, dark-theme page background |

### Neutrals & Text (Stone-based hierarchy)

Stone runs warm — a sandy, clay-like undertone that pairs naturally with the ember and saddle palette. Text-on-white uses the deep stones (`neutral-900`); text-on-dark uses the light stones (`neutral-200`). Saddle (`tertiary-700`+) is reserved for *surfaces*, not body text — body text stays in Stone so the long-form supplement copy reads with maximum contrast.

| Role | Token | Hex |
|------|-------|-----|
| Primary text (on light) | `neutral-900` | `#1C1917` |
| Secondary text (on light) | `neutral-700` | `#44403C` |
| Tertiary / muted text | `neutral-500` | `#78716C` |
| Disabled text | `neutral-400` | `#A8A29E` |
| Text on dark surfaces | `neutral-200` | `#E7E5E4` |
| Soft text on dark | `neutral-300` | `#D6D3D1` |

### Borders & Dividers

| Role | Token | Hex |
|------|-------|-----|
| Light border (default) | `neutral-200` | `#E7E5E4` |
| Prominent border | `neutral-300` | `#D6D3D1` |
| Dark theme border | `neutral-700` | `#44403C` |
| Saddle-context border | `tertiary-300` | `#C2B9B0` |
| Focus ring | `focus-ring` | `#3B82F6` |

### Secondary & Accent (Standardized Semantic Palettes)

These four palettes are standardized across all Golden Hippo brands — included as-is, not customized for Roundhouse. They handle system feedback states; brand colors stay out of the way of error/success/warning signaling.

#### Error / Danger (Tailwind Red, 50–950)

| Step | Hex | | Step | Hex |
|------|-----|---|------|-----|
| 50  | `#FEF2F2` | | 500 | `#EF4444` |
| 100 | `#FEE2E2` | | 600 | `#DC2626` |
| 200 | `#FECACA` | | 700 | `#B91C1C` |
| 300 | `#FCA5A5` | | 800 | `#991B1B` |
| 400 | `#F87171` | | 900 | `#7F1D1D` |
|     |           | | 950 | `#450A0A` |

- Error text on light: `error-600`. On dark: `error-400`.
- Error background: `error-50` (light) / `error-950` (dark). Border: `error-200` / `error-800`.
- Destructive button: `error-600` background, `#FFFFFF` text.

#### Info (Tailwind Blue, 50–950)

| Step | Hex | | Step | Hex |
|------|-----|---|------|-----|
| 50  | `#EFF6FF` | | 500 | `#3B82F6` |
| 100 | `#DBEAFE` | | 600 | `#2563EB` |
| 200 | `#BFDBFE` | | 700 | `#1D4ED8` |
| 300 | `#93C5FD` | | 800 | `#1E40AF` |
| 400 | `#60A5FA` | | 900 | `#1E3A8A` |
|     |           | | 950 | `#172554` |

- Info text on light: `info-600`. On dark: `info-400`.
- Focus ring: `info-500` (`#3B82F6`).

Note: Roundhouse-branded informational moments prefer the *brand* sky (`secondary-50`/`secondary-900`) over Info Blue. Reserve Info Blue for truly system-level messages.

#### Success (Tailwind Green, 50–950)

| Step | Hex | | Step | Hex |
|------|-----|---|------|-----|
| 50  | `#F0FDF4` | | 500 | `#22C55E` |
| 100 | `#DCFCE7` | | 600 | `#16A34A` |
| 200 | `#BBF7D0` | | 700 | `#15803D` |
| 300 | `#86EFAC` | | 800 | `#166534` |
| 400 | `#4ADE80` | | 900 | `#14532D` |
|     |           | | 950 | `#052E16` |

#### Warning (Tailwind Yellow, 50–950)

| Step | Hex | | Step | Hex |
|------|-----|---|------|-----|
| 50  | `#FEFCE8` | | 500 | `#EAB308` |
| 100 | `#FEF9C3` | | 600 | `#CA8A04` |
| 200 | `#FEF08A` | | 700 | `#A16207` |
| 300 | `#FDE047` | | 800 | `#854D0E` |
| 400 | `#FACC15` | | 900 | `#713F12` |
|     |           | | 950 | `#422006` |

Warning text on light surfaces should use `warning-700` (warning-600 falls just below AA at small sizes).

### Gradient System

Roundhouse is not a gradient-forward brand — the palette is built around solid, confident planes of color. When a gradient is unavoidable (rare hero washes, occasional illustration shading), use one of these two:

- **Frontier Dawn** — `primary-400 → primary-600` linear at 145°. Ember at the top fading into deep rust — sunset over Texas iron.
- **Range to Sky** — `tertiary-700 → secondary-700` linear at 90°. Saddle to deep sky — the horizon read.

Avoid bright sky-to-ember gradients (they read as cheap pride flag); avoid more than two stops; keep gradients to backgrounds, never to text.

---

## 3. Typography Rules

### Font Families

| Role | Font Family | Fallback Stack |
|------|-------------|----------------|
| Headlines / Display | **Antonio** | `'Antonio', 'Oswald', 'Impact', sans-serif` |
| Body / UI | **Barlow** | `'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |
| Code | System monospace | `ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace` |

Antonio and Barlow are sister families — both designed by Jeremy Tribby and engineered to pair. Antonio is highly condensed and shines at large display sizes where its compressed proportions read as confident stadium-poster authority. Barlow is semi-condensed humanist sans-serif with a much broader weight range (100–900) and excellent readability at body sizes for the brand's older-skewing audience.

### Hierarchy

All Antonio levels (`display`, `headline-*`, `overline`) are **always rendered uppercase** — see Principle 6 below.

| Token | Font | Size | Weight | Line | Letter | Case | Notes |
|-------|------|------|--------|------|--------|------|-------|
| `display` | Antonio | 80px / 5rem | 700 | 1.0 | 0em | UPPERCASE | Hero headlines, landing-page openers. Goes big or goes home. |
| `headline-lg` | Antonio | 56px / 3.5rem | 700 | 1.05 | 0.005em | UPPERCASE | Section openers, marketing headers |
| `headline-md` | Antonio | 40px / 2.5rem | 600 | 1.1 | 0.01em | UPPERCASE | Mid-section headers, product names |
| `headline-sm` | Antonio | 30px / 1.875rem | 600 | 1.15 | 0.015em | UPPERCASE | Card titles, modest section heads |
| `headline-xs` | Antonio | 24px / 1.5rem | 600 | 1.2 | 0.02em | UPPERCASE | Sub-headlines, prominent component titles |
| `feature-title` | Barlow | 20px / 1.25rem | 700 | 1.35 | — | Feature/benefit titles inside cards — Barlow when condensed Antonio would feel cramped at this size |
| `body-lg` | Barlow | 18px / 1.125rem | 400 | 1.6 | — | Lead paragraphs, ingredient education hero copy |
| `body-md` | Barlow | 16px / 1rem | 400 | 1.6 | — | Default body copy — product descriptions, long-form education |
| `body-sm` | Barlow | 14px / 0.875rem | 400 | 1.55 | — | Supporting copy, FAQ answers, footnotes |
| `caption` | Barlow | 13px / 0.8125rem | 400 | 1.5 | — | Image captions, fine product copy |
| `label-md` | Barlow | 14px / 0.875rem | 600 | 1.4 | 0.01em | Form labels, primary nav links |
| `label-sm` | Barlow | 12px / 0.75rem | 600 | 1.4 | 0.04em | Secondary labels, breadcrumbs |
| `button-label` | Barlow | 15px / 0.9375rem | 700 | 1.2 | 0.04em | All button text — slight letter-spacing for confidence |
| `overline` | Antonio | 13px / 0.8125rem | 600 | 1.3 | 0.18em (UPPERCASE) | Section markers, kickers — Antonio's compression makes wide-tracked overlines look engraved |
| `micro` | Barlow | 11px / 0.6875rem | 500 | 1.3 | — | Legal copy, regulatory disclaimers, fine print |
| `code` | System mono | 14px / 0.875rem | 400 | 1.5 | — | Code blocks (rare on a supplements site) |

### Principles

1. **Antonio for display, Barlow for everything else.** Antonio doesn't read at sub-20px sizes — its condensed proportions get cramped. Don't reach for Antonio below `headline-xs` except for the overline, where extreme letter-spacing rescues it.
2. **Headlines are short and load-bearing.** Antonio looks best with 2–6 words per line. Long Antonio headlines lose their stadium-poster punch and start to feel like a banner ad.
3. **Body copy is generous, not cramped.** The audience is reading at 45–70 — `body-md` at 16px with 1.6 line-height is the floor. Don't push body smaller for design density.
4. **Weight is a tool, not a default.** Antonio at 600–700 carries authority; below 600 it goes weak. Barlow runs the full range, but production copy lives at 400 (body) / 600 (labels) / 700 (buttons). Avoid heavier-than-700 unless it's display-only.
5. **The overline is Antonio's secret weapon.** Set Antonio at 13px with 0.18em tracking — it reads as engraved metal. Use sparingly: section kickers, `INGREDIENTS` labels, `MADE IN USA` stamps.
6. **Antonio is always uppercase.** Every Antonio level — `display`, `headline-lg/md/sm/xs`, `overline` — renders in all caps. The condensed letterforms were designed for monumental, stamped, stadium-marquee applications; mixed-case Antonio at headline sizes reads as flat and loses the stamped authority that defines the brand voice. Apply `text-transform: uppercase` at the typography token level so every Antonio rendering picks it up automatically; the system's positive letter-spacing values (0–0.02em at display through `headline-xs`) are tuned for uppercase rendering, not mixed-case. Body and label copy in Barlow remains sentence/title case — uppercase is a *headline* signal, not a general voice.

---

## 4. Layout Principles

### Spacing System

Roundhouse uses the standardized Golden Hippo spacing scale — a 32-step ramp from 0px to 1920px that covers every padding, margin, and gap need:

`0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 224, 256, 320, 384, 480, 560, 640, 720, 768, 1024, 1280, 1440, 1600, 1920` (px)

**Common usage patterns:**

| Use | Range |
|------|--------|
| Component internal padding | 8px–24px |
| Button padding | 14px vertical / 28px horizontal (snug-confident) |
| Card padding | 16px–24px (compact) / 24px–32px (content cards) |
| Section vertical spacing | 80px–128px |
| Stack gaps (small) | 4px–8px |
| Stack gaps (medium) | 16px–24px |
| Stack gaps (large) | 32px–64px |
| Page max-widths | 1280px (default), 1024px (long-form copy), 1440px (wide marketing) |

### Grid & Container

- **Page max-width**: 1280px for default marketing pages and PDP layouts. 1024px for long-form education / blog content where line-length matters. 1440px for hero-led wide layouts.
- **Side gutters**: 16px (mobile), 24px (sm), 32px (md), 48px (lg+).
- **Grid**: 12-column at lg and above, 8-column at md, 4-column at sm. Column gap is 24px.
- **Section layout**: Alternating white (`surface`) and warm-tint (`neutral-50` or `primary-50`) bands. Dark sections use `tertiary-900` (saddle) rather than pure black — keeps the warmth even at high contrast.

### Whitespace Philosophy

Roundhouse breathes confidently but never preciously. Sections get real vertical room (80–128px on desktop) to let Antonio headlines land. Within sections, content stays focused — no decorative gaps for their own sake. The brand's authority comes from *what* it says, framed cleanly, not from acres of empty space surrounding a single line.

---

## 5. Depth & Elevation

Roundhouse uses the standardized Golden Hippo shadow scale (`2xs` through `2xl`). Shadows here are *grounded* — short, slightly weighted, never floating. Think objects resting on a workbench, not UI hovering in cloud-app whitespace.

| Token | CSS Value | Use |
|-------|-----------|-----|
| `2xs` | `0 1px rgb(0 0 0 / 0.05)` | Subtle input borders, divider-as-shadow on light backgrounds |
| `xs`  | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Resting secondary buttons, low-emphasis cards |
| `sm`  | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` | Default card elevation, dropdown rest |
| `md`  | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | Hovered cards, active dropdowns, product card hover state |
| `lg`  | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Popovers, sticky add-to-cart, floating compare bars |
| `xl`  | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Modal dialogs, cart drawers |
| `2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)` | Hero product imagery, feature showcase tiles |

### Shadow Philosophy

The default elevation register is **`sm` for cards at rest, `md` on hover**. The `lg` and `xl` levels are reserved for true overlay surfaces — popovers and modals — not for "this card is important." Roundhouse prefers to indicate importance through *color* (an ember banner, a saddle border) rather than aggressive lift. Avoid `2xl` outside of hero imagery: the brand's depth language is grounded weight, not dramatic float.

For dark surfaces (saddle navbars, dark hero blocks), shadows are typically omitted — a `neutral-700` or `tertiary-800` border carries the separation instead. Shadow on dark surfaces tends to read muddy at these warm hues.

---

## 6. Shapes

### Shape Language

Roundhouse sits in the *confident-modest* radius register: enough rounding to feel modern and warm, not so much that components start looking soft or playful. The 14px `lg` and 20px `xl` push slightly larger than a strict tech-app default (12px / 16px), giving cards and modals a slightly more generous, lived-in feel that fits the warm Stone foundation. Buttons stay snug at 8px — confident, not friendly-soft.

### Border Radius Scale

| Token | Value | Use Case |
|-------|-------|----------|
| `rounded.none` | 0px | Full-bleed hero sections, dividers, badges-as-stamps |
| `rounded.sm`   | 4px | Input fields, small chips, dense controls |
| `rounded.md`   | 8px | Buttons, callouts, secondary cards, form groups |
| `rounded.lg`   | 14px | Default cards, product tiles, content blocks |
| `rounded.xl`   | 20px | Modal dialogs, drawers, hero containers |
| `rounded.full` | 9999px | Pill buttons, badges, avatar containers, status dots |

### Application Rules

- **Buttons**: `rounded.md` (8px) by default. Pill variants use `rounded.full`.
- **Inputs**: `rounded.md` (8px) — matches button radius for form/CTA alignment.
- **Cards**: `rounded.lg` (14px) default. Product cards same. Compact filter chips use `rounded.sm`.
- **Images**: Match container — `rounded.lg` for cards, `rounded.md` for inline product thumbnails, `rounded.none` for full-bleed hero imagery.
- **Badges**: `rounded.full` for pill-shaped status badges; `rounded.none` for stamp-style "MADE IN USA" / "GLUTEN FREE" badges where the squared edge reads as engraved/authoritative.
- **Modals & drawers**: `rounded.xl` (20px) — slightly more generous than cards to read as elevated.

---

## 7. Component Stylings

The prose specs below explain the *why*; the front matter's `components` block holds the machine-readable definitions. Both must agree.

### Buttons

**`button-primary`** — the workhorse CTA. Deep rust background (`primary-600`, `#A42500`), white text (`#FFFFFF`), 14px / 28px padding, 48px height, 8px radius, Barlow 700 at 15px with 0.04em letter-spacing. Hover deepens to `primary-700`; active to `primary-800`. Reads as *the same ember forged darker* — keeps the brand heat while clearing AA against white text cleanly.

**`button-ember`** — the brand-moment button. Bright ember background (`primary-400`, `#EE5531`) with **dark text** (`neutral-900`), same dimensions. Reserved for promo banners, hero CTAs over imagery, and any place where the ember is the message. On hover/active it deepens and switches to white text. Use sparingly — when this button shows up, it should mean *this is the moment*.

**`button-secondary`** — neutral, supporting actions. Stone-100 background, deep stone text. Hover stone-200, active stone-300. The reliable "second" button next to ember or rust primaries.

**`button-sky`** — informational / verified-trust CTAs. Sky blue background (`secondary-600`, `#006481`), white text, same dimensions. Use for "Learn more" or "Verify ingredients" — anywhere the brand wants to invoke clarity and altitude rather than heat.

**`button-saddle`** — grounded, premium-feel CTA. Deep saddle background (`tertiary-700`, `#443B32`), white text. Reads as worn leather; use for footer CTAs, "Subscribe" type actions, anything where the brand wants weight without orange.

**`button-outline`** — white background with ember text (`primary-700`, `#7F1A00`), 2px ember-leaning border. Hover tints to `primary-50`. The "tell me more" / secondary CTA.

**`button-ghost`** — transparent background, saddle text (`tertiary-700`). Used inline in body copy, in nav, in dense UI areas. Hover tints to `tertiary-50`.

**`button-pill`** — `button-primary` shape with `rounded.full`. Use for promotional moments and contained badges-as-buttons.

### Cards & Containers

- **`card`** — white background, neutral-900 text, 14px radius, 24px padding. The default. Sits on white pages with a subtle `sm` shadow for separation.
- **`card-raised`** — neutral-50 background, otherwise identical. For card-on-card or alternating-section moments where a slight tint is needed.
- **`card-ember`** — `primary-50` background with `primary-900` text. The ember-tinted highlight card. Use sparingly for "key benefit" or "featured ingredient" moments.
- **`card-dark`** — `tertiary-900` saddle background with neutral-50 text. For dark hero blocks and feature showcase moments. Uses no shadow; instead a `tertiary-800` 1px inner border for definition.
- **`card-product`** — white background, smaller 16px padding for the denser product-grid context. Same 14px radius.

### Inputs & Forms

`input` — white background, neutral-900 text, 1px `neutral-300` border (default), 8px radius, 12px / 16px padding, 48px height. Focus state swaps border to `primary-600` with a 3px `primary-100` ring (or `focus-ring` blue `#3B82F6` for accessibility-first contexts). Disabled state uses `neutral-100` background and `neutral-600` text. Body-md typography (Barlow 16px / 1.6) for input text.

### Navigation

**`navbar`** — white background, neutral-900 text, 16px / 32px padding, 72px height. Logo left, primary nav center or left-aligned after logo, primary CTA (`button-primary` or `button-ember`) right-aligned. 1px `neutral-200` bottom border for separation. Sticky on scroll.

**`navbar-dark`** — saddle (`tertiary-900`) background, neutral-50 text, same dimensions. For dark-themed marketing pages, founder-story pages, or product pages where the dark frame is part of the design. Border swaps to `tertiary-800`.

### Image Treatment

- Product photography is the centerpiece — treat with `rounded.lg` (14px) corners by default and `sm` shadow at rest, `md` on hover.
- Lifestyle / editorial imagery is full-bleed (`rounded.none`) or `rounded.xl` when contained in a hero panel.
- Avoid heavy filtering or stylization — Roundhouse imagery reads best when it looks honest: real product, real packaging, real American settings.
- For founder/portrait imagery, allow generous breathing room; pair with Antonio overline kickers ("THE FOUNDER", "MADE IN USA") rather than crowding the frame.

### Distinctive Components

- **`badge-ember`** — bright `primary-400` background with near-black text (`primary-950`). The brand's stamp. Use for "FEATURED", "BESTSELLER", "NEW", at `label-sm` typography.
- **`badge-sky` / `badge-saddle`** — tonal badge variants for "VERIFIED" and "CRAFT" / "QUALITY" type messaging.
- **`banner-promo`** — full-width promo strip at top of page. `primary-400` ember background, `primary-950` text, 40px height. Reserved for actual promotions — don't decorate with this.
- **Stamp marks** — engraving-style badges for "MADE IN USA", "GLUTEN FREE", "NON-GMO". `rounded.none`, Antonio overline typography (uppercase, 0.18em tracking), saddle border + saddle text on transparent background. Should feel like a stamp on a wooden crate.

---

## 8. Do's and Don'ts

### Do

- **Do** use `button-primary` (`primary-600` rust) as the default CTA — it's the only ember-family button that clears AA with white text.
- **Do** reserve the bright ember (`primary-400`, `#EE5531`) for *brand moments* — banners, badges, illustration accents. When it shows up, it should mean something.
- **Do** pair Antonio headlines with Barlow body — they're designed to work together. Don't import a third font family.
- **Do** render every Antonio level in UPPERCASE — `display`, `headline-lg/md/sm/xs`, and `overline` all carry `text-transform: uppercase`. The condensed letterforms were built for stamped, monumental settings, and mixed-case Antonio loses the brand's stamped authority.
- **Do** lean on the warm Stone neutrals — `neutral-50` cards on white pages, `neutral-100` recessed sections, `neutral-900` text. The warmth is intentional.
- **Do** keep headlines short (2–6 words). Antonio's compressed proportions look best with confident, declarative phrasing.
- **Do** use the Antonio overline (`overline` token) for section kickers — `INGREDIENTS`, `MADE IN USA`, `THE FOUNDER`. It reads as engraved metal.
- **Do** use `tertiary-700` (Saddle) for dark surfaces and `tertiary-900` for the darkest. Both keep the warmth that pure black would kill.
- **Do** ground product imagery with `rounded.lg` corners and `sm`/`md` shadows. Don't let products float in cloud-app whitespace.
- **Do** use stamp-style badges (`rounded.none`, Antonio overline) for trust/origin marks. They should feel engraved.
- **Do** keep AA contrast clean: white on `primary-600`/`secondary-600`/`tertiary-700`, deep stone text on `primary-50`/`secondary-50`/`tertiary-50` tints.

### Don't

- **Don't** put white text on `primary-400` (`#EE5531`) — contrast fails AA (~3.3:1). Either use dark text on ember, or use `primary-600` for the white-text button.
- **Don't** use the bright ember as a section background — it overwhelms. Use `primary-50` for ember-tinted sections instead.
- **Don't** stretch Antonio to body-sized type (anything under `headline-xs`). It gets cramped. Use Barlow for sub-20px text.
- **Don't** set Antonio at weights under 600 — it loses its load-bearing punch and reads weak.
- **Don't** render Antonio in mixed case. Headlines, displays, overlines — all uppercase, always. If a Figma comp or a hand-coded component shows Antonio in title case, it's wrong; the rendering should pick up `text-transform: uppercase` from the typography token automatically.
- **Don't** use Gray, Zinc, or Slate neutrals on this brand. The warm Stone undertone is part of the identity; cool neutrals introduce friction.
- **Don't** use bright sky-to-ember linear gradients — they read as a pride-flag accident. Stick to the two prescribed gradients or none.
- **Don't** lean on `xl` / `2xl` shadows for hierarchy. The brand's depth comes from grounded weight (color, border, position), not dramatic float.
- **Don't** mix `rounded.sm` (4px) buttons with `rounded.lg` (14px) cards in the same view — keep the radius family consistent. Buttons at md (8px), cards at lg (14px) is the rule.
- **Don't** use pure black (`#000000`) anywhere. Use `neutral-950` (`#0C0A09`) or `tertiary-950` (`#110F0D`) — both preserve the brand's warm undertone.
- **Don't** reach for Tailwind Info Blue inside the brand voice. Use `secondary-*` (Texas Sky) for branded informational moments; reserve Info Blue for true system-level messaging.

---

## 9. Responsive Behavior

### Breakpoints

| Breakpoint | Min Width | Roundhouse Behavior |
|------------|-----------|---------------------|
| (base) | < 640px | Single column, 16px gutters, stacked nav (hamburger), full-width cards, hero typography drops to `headline-lg` (3.5rem) from `display` (5rem) |
| `sm` | 640px | Single column with more breathing room (24px gutters), 2-up product grids begin, Antonio displays return to `display` size |
| `md` | 768px | 2-column layouts emerge for product cards, ingredient lists, founder + content blocks, 32px gutters |
| `lg` | 1024px | Full horizontal navigation revealed, 3-column product grids, side-by-side hero + imagery, 48px gutters |
| `xl` | 1280px | Page max-width takes effect, 4-column product grids on PDPs, generous section breathing room (96–128px) |
| `2xl` | 1536px | Wide-marketing layouts engage (1440px max), expanded hero imagery, multi-column footer fully spaced |

### Touch Targets

- Minimum tap target: 48px × 48px (matches button height). All interactive elements clear this at all breakpoints.
- Form inputs are 48px tall — matches buttons for visual alignment in cart and checkout flows.
- Pagination and small icon controls: 40px minimum, padded to 48px hit area where touch-only.

### Collapsing Strategy

- **Navigation**: Full horizontal at `lg`+; collapses to hamburger drawer below `lg`. CTA stays visible in the top bar regardless of breakpoint.
- **Product grids**: 4 → 3 → 2 → 1 column as the viewport narrows (`xl` → `lg` → `md` → base).
- **Hero**: Side-by-side image + copy at `lg`+; stacks (image above copy) below `lg` with hero typography dropping one tier.
- **Cards**: Full-width below `sm`; padding tightens from 24px to 20px at the smallest breakpoint to recover content room.
- **Section spacing**: 128px desktop → 96px tablet → 64px mobile.

### Image Behavior

- Product imagery: square (1:1) for grid contexts, 4:5 for hero contexts. Lossless on retina; never sacrifice product clarity for performance — these are the buy-decision moment.
- Lifestyle / editorial: 16:9 for wide hero, 3:4 for portrait moments (founder, model). On mobile, hero imagery crops to 4:5 to preserve subject without dwarfing copy.
- Art direction: real American settings — ranch, range, range hand. Avoid stock-photo "wellness studio" framing.

---

## 10. Agent Prompt Guide

This section is for AI coding agents implementing Roundhouse Provisions UI. Reference tokens by name, not raw hex — the front matter is the authoritative source.

### Quick Color Reference

| Role | Token | Hex |
|------|-------|-----|
| Brand-moment ember ★ | `primary-400` | `#EE5531` |
| CTA / primary button | `primary-600` | `#A42500` |
| CTA hover | `primary-700` | `#7F1A00` |
| Sky / verified blue ★ | `secondary-300` | `#54C0E8` |
| Sky button | `secondary-600` | `#006481` |
| Saddle / dark surface ★ | `tertiary-700` | `#443B32` |
| Saddle deepest dark | `tertiary-900` | `#25211D` |
| Page surface | `surface` / `white` | `#FFFFFF` |
| Card surface | `surface-raised` | `#FAFAF9` |
| Primary text | `neutral-900` | `#1C1917` |
| Secondary text | `neutral-700` | `#44403C` |
| Muted text | `neutral-500` | `#78716C` |
| Default border | `neutral-200` | `#E7E5E4` |
| Focus ring | `focus-ring` | `#3B82F6` |
| Ember tint surface | `primary-50` | `#FFF4F1` |
| Sky tint surface | `secondary-50` | `#EEF9FE` |
| Saddle tint surface | `tertiary-50` | `#F8F6F5` |

★ = anchor step (user-supplied hex preserved at this position)

### Token Reference Cheat Sheet

- Components in the front matter use `{colors.primary-600}` token references — never raw hex.
- Spacing uses the numeric scale: `{spacing.6}` = 16px, `{spacing.8}` = 24px, `{spacing.9}` = 32px.
- Radius uses semantic names: `{rounded.md}` = 8px (buttons), `{rounded.lg}` = 14px (cards), `{rounded.xl}` = 20px (modals).
- Typography uses level names: `{typography.headline-lg}`, `{typography.body-md}`, `{typography.button-label}`.
- The front matter YAML is the source of truth. If prose and YAML disagree, the YAML wins.

### Example Component Prompts

1. *Build a primary CTA button using the `button-primary` component spec — `{colors.primary-600}` background, `{colors.white}` text, `{typography.button-label}`, `{rounded.md}` corners, 14px / 28px padding, 48px height. Hover deepens to `{colors.primary-700}`; active to `{colors.primary-800}`.*
2. *Build a brand-moment hero CTA using `button-ember` — `{colors.primary-400}` background with `{colors.neutral-900}` text. This is the "the moment" variant; reserve for hero CTAs and promo banners.*
3. *Build a product card using the `card` component spec — `{colors.white}` background, `{rounded.lg}` corners, 24px padding, `sm` shadow at rest / `md` on hover. Title in `{typography.headline-sm}`, price in `{typography.feature-title}`, body in `{typography.body-md}`.*
4. *Build a dark-themed footer using `navbar-dark` style — `{colors.tertiary-900}` saddle background, `{colors.neutral-50}` text, `{typography.label-md}` for nav links. No shadow; use a `{colors.tertiary-800}` 1px top border for separation.*
5. *Build a "MADE IN USA" stamp badge — `{rounded.none}` (engraved feel), 1px `{colors.tertiary-700}` border, `{typography.overline}` (Antonio all-caps with 0.18em tracking), `{colors.tertiary-700}` text, transparent background, 6px / 12px padding.*

### Iteration Guide

1. **Lead with tokens.** When asking for changes, say "swap to `{colors.tertiary-700}`" rather than "make it brown". The token names are precise and unambiguous.
2. **Headlines use Antonio. Body uses Barlow.** If an agent reaches for a third font, push back.
3. **Antonio is always uppercase.** Every Antonio token (`display`, `headline-*`, `overline`) carries `text-transform: uppercase`. If a generated component shows Antonio in mixed case, the agent missed the token property — push the rendering through `text-transform: uppercase` and verify the typography token is being applied.
4. **Ember (`primary-400`) is a moment color.** If an agent uses it for body, button hovers, or general UI surfaces, redirect to `primary-600` (CTA) or `primary-50` (tint background).
5. **Buttons are `rounded.md` (8px). Cards are `rounded.lg` (14px). Modals are `rounded.xl` (20px).** Mixing radii within the same component family is a smell — call it out.
6. **AA contrast is non-negotiable.** White text never goes on `primary-400`. If an agent's design has that pairing, ask for either `primary-600` background (white text) or `neutral-900` text (on the bright ember).
7. **Dark surfaces use saddle, not black.** `tertiary-900` (`#25211D`) is the deepest the brand goes outside of true-black overlays. Reject `#000000` backgrounds.
8. **The audience is 45–70.** Body text never goes below `body-md` (16px). Line-height stays at 1.55–1.6. Don't shrink type for design density.
