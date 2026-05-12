---
version: alpha
name: Terra Mare
description: A women's wellness brand sitting between apothecary and atelier — fired sienna, marigold sun, and warm clay neutrals, dressed in editorial serif typography that reads like a luxury wellness magazine.
colors:
  # Brand — Primary: Sienna Bloom (anchor at 500)
  primary-50: "#FFF4EF"
  primary-100: "#FFE3D6"
  primary-200: "#FFC6AB"
  primary-300: "#FAA276"
  primary-400: "#DE7944"
  primary-500: "#B7500B"
  primary-600: "#933D00"
  primary-700: "#722D00"
  primary-800: "#562000"
  primary-900: "#3B1501"
  primary-950: "#1F0801"

  # Brand — Secondary: Marigold Glow (anchor at 400)
  secondary-50: "#FFF5ED"
  secondary-100: "#FFE4CF"
  secondary-200: "#FFC79C"
  secondary-300: "#F9A45C"
  secondary-400: "#F58C1C"
  secondary-500: "#AB5E00"
  secondary-600: "#874800"
  secondary-700: "#683600"
  secondary-800: "#4E2700"
  secondary-900: "#361900"
  secondary-950: "#1C0A00"

  # Brand — Tertiary: Warm Clay (anchor at 500)
  tertiary-50: "#FAF6F3"
  tertiary-100: "#F1E7E2"
  tertiary-200: "#E4D0C3"
  tertiary-300: "#D0B4A2"
  tertiary-400: "#B1917C"
  tertiary-500: "#9C7B66"
  tertiary-600: "#715441"
  tertiary-700: "#573F30"
  tertiary-800: "#402F24"
  tertiary-900: "#2B1F17"
  tertiary-950: "#150E09"

  # Neutral — Tailwind Taupe (v4.2 tinted)
  neutral-50: "#FBFAF9"
  neutral-100: "#F3F1F1"
  neutral-200: "#E8E4E3"
  neutral-300: "#D8D2D0"
  neutral-400: "#ABA09C"
  neutral-500: "#7C6D67"
  neutral-600: "#5B4F4B"
  neutral-700: "#473C39"
  neutral-800: "#2B2422"
  neutral-900: "#1D1816"
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
  primary: "{colors.primary-500}"
  secondary: "{colors.secondary-400}"
  tertiary: "{colors.tertiary-500}"
  surface: "{colors.neutral-50}"
  on-surface: "{colors.neutral-900}"
  border: "{colors.neutral-200}"
  focus-ring: "#3B82F6"

typography:
  display:
    fontFamily: "'Crimson Text', Georgia, 'Times New Roman', serif"
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: "'Crimson Text', Georgia, 'Times New Roman', serif"
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.015em
  headline-md:
    fontFamily: "'Crimson Text', Georgia, 'Times New Roman', serif"
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: "'Crimson Text', Georgia, 'Times New Roman', serif"
    fontSize: 1.75rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: -0.005em
  headline-xs:
    fontFamily: "'Crimson Text', Georgia, 'Times New Roman', serif"
    fontSize: 1.375rem
    fontWeight: 500
    lineHeight: 1.3
  feature-title:
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.55
  body-serif:
    fontFamily: "'Crimson Text', Georgia, 'Times New Roman', serif"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.65
  caption:
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.005em
  label-md:
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.01em
  button-label:
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.9375rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.01em
  overline:
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.6875rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.12em
  micro:
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: 0.6875rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.01em
  code:
    fontFamily: "ui-monospace, Menlo, Consolas, 'Courier New', monospace"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
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
    backgroundColor: "{colors.primary-500}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.primary-600}"
    textColor: "{colors.white}"
  button-primary-active:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.white}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-200}"
    textColor: "{colors.primary-800}"

  button-accent:
    backgroundColor: "{colors.secondary-400}"
    textColor: "{colors.secondary-800}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 44px
  button-accent-hover:
    backgroundColor: "{colors.secondary-300}"
    textColor: "{colors.secondary-800}"
  button-accent-active:
    backgroundColor: "{colors.secondary-600}"
    textColor: "{colors.white}"

  button-secondary:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.neutral-800}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 44px
  button-secondary-hover:
    backgroundColor: "{colors.neutral-300}"
    textColor: "{colors.neutral-800}"
  button-secondary-active:
    backgroundColor: "{colors.neutral-400}"
    textColor: "{colors.neutral-900}"

  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-500}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 44px
  button-outline-hover:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-600}"
  button-outline-active:
    backgroundColor: "{colors.primary-100}"
    textColor: "{colors.primary-700}"

  button-inverse:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-500}"
    typography: "{typography.button-label}"
    rounded: "{rounded.md}"
    padding: 12px 24px
    height: 44px
  button-inverse-hover:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-600}"

  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-editorial:
    backgroundColor: "{colors.tertiary-50}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.xl}"
    padding: 32px
  card-product:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-dark:
    backgroundColor: "{colors.neutral-800}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.lg}"
    padding: 24px

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

  textarea:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px

  navigation:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-700}"
    typography: "{typography.button-label}"
    padding: 0 32px
    height: 80px

  badge:
    backgroundColor: "{colors.secondary-100}"
    textColor: "{colors.secondary-800}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  badge-primary:
    backgroundColor: "{colors.primary-100}"
    textColor: "{colors.primary-800}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  badge-neutral:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-700}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 4px 12px

  modal:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.2xl}"
    padding: 32px
---

# Terra Mare

## 1. Visual Theme & Atmosphere

Terra Mare's visual identity is rooted in the warmth of the earth and the quiet authority of editorial luxury. The brand sits in the seam between apothecary and atelier: science-backed wellness for women, dressed in the language of considered craft. The aesthetic borrows from sun-drenched Mediterranean coastlines, Italian terracotta, and the muted palette of dried botanicals — never clinical, never trendy. Where most supplement brands lean on aggressive whites, electric greens, or millennial pastels, Terra Mare leans into burnished warmth. The signature **Sienna Bloom** (`#B7500B`) is the brand's anchor — a deep burnt sienna that reads as both confident and grounded, like clay fired in an oven. **Marigold Glow** (`#F58C1C`) is its accompanying spark — a vivid, golden orange that suggests sunlight, vitality, and the energy of restored health. Together they sit on a foundation of warm Taupe neutrals, giving the brand the tonal richness of a hand-thrown ceramic vessel.

The typographic pairing reinforces this duality. **Crimson Text**, a serif in the tradition of classical book typography, brings literary gravitas to headlines and brand moments — it speaks of heritage, considered prose, and the kind of trust that's earned over decades. **Poppins**, a clean geometric sans-serif, handles body copy and UI with modern clarity. The split is intentional: serifs carry the soul of the brand, sans-serifs carry the function. Together they create a voice that feels like a luxury wellness publication rather than a transactional product page.

The brand's atmosphere is **luxurious & refined** crossed with **warm & organic**. Generous whitespace, soft shadows, and elevated photography establish the editorial register. Components are gently rounded but never bubbly. The interface should feel like reading a beautifully art-directed magazine about your body — not filling out a pharmacy form.

**Key Characteristics:**

- Warm, earthy palette anchored in burnt sienna and marigold orange
- Editorial-luxury typography pairing (Crimson Text + Poppins)
- Taupe-based neutrals with sandy, clay-like undertone
- Generous whitespace and soft, ambient elevation
- Restrained use of color — warmth from neutrals, not from saturation
- Considered, magazine-grade hierarchy with clear typographic rhythm
- No gradients of bright color; if used, they're sun-warmed and subtle
- Rounded but architectural — soft corners on cards and buttons, never circular cartoonishness

## 2. Color Palette & Roles

Each brand color is expanded into a full 11-step perceptually balanced palette (generated in OKLCH color space). The user-defined hex value is marked with ★ at its natural weight. Use the default weight for primary usage; reach into lighter steps for backgrounds, tints, and hover states, and darker steps for text-on-brand, pressed states, and dark theme accents.

### Primary — Sienna Bloom

The brand's anchor. A deep, fired-clay burnt sienna that reads as confident and earthy. Used for primary CTAs, brand headlines, and key brand moments. Anchor lives at step 500.

| Step  | Token         | Hex       | Usage Guidance                                                                  |
| ----- | ------------- | --------- | ------------------------------------------------------------------------------- |
| 50    | `primary-50`  | `#FFF4EF` | Tinted backgrounds, hero washes, success-tinted brand banners                   |
| 100   | `primary-100` | `#FFE3D6` | Badge backgrounds, soft brand callouts, light card tints                        |
| 200   | `primary-200` | `#FFC6AB` | Hover backgrounds for ghost/tertiary brand actions                              |
| 300   | `primary-300` | `#FAA276` | Decorative accents, illustration mid-tones, subtle brand highlights             |
| 400   | `primary-400` | `#DE7944` | Mid-tone brand color — illustration accents, secondary brand text on light tint |
| 500 ★ | `primary-500` | `#B7500B` | **Default — primary buttons, brand logos, key brand moments**                   |
| 600   | `primary-600` | `#933D00` | Hover state for primary buttons; brand text on `neutral-100` and lighter        |
| 700   | `primary-700` | `#722D00` | Pressed/active state for primary buttons; deep brand text on `neutral-50`       |
| 800   | `primary-800` | `#562000` | Text on tinted brand backgrounds (`primary-50`–`primary-200`)                   |
| 900   | `primary-900` | `#3B1501` | Deep brand overlays, dark-mode brand backgrounds                                |
| 950   | `primary-950` | `#1F0801` | Near-black with sienna undertone — dark theme brand surfaces                    |

### Secondary — Marigold Glow

The brand's vivid spark. A saturated golden-orange that adds vitality, sunlight, and warmth. Used for accent moments, hover states, badges, and energy-forward callouts. Anchor lives at step 400 — moved from 300 to 400 due to high chroma, so Marigold sits at a mid-tone where its saturation reads as intentional rather than overpowering.

| Step  | Token           | Hex       | Usage Guidance                                                                |
| ----- | --------------- | --------- | ----------------------------------------------------------------------------- |
| 50    | `secondary-50`  | `#FFF5ED` | Tinted accent backgrounds, sun-warmed wash                                    |
| 100   | `secondary-100` | `#FFE4CF` | Promotional banner fills, "save" pricing tags, badge backgrounds              |
| 200   | `secondary-200` | `#FFC79C` | Hover backgrounds for accent buttons, soft highlights                         |
| 300   | `secondary-300` | `#F9A45C` | Hover state for accent buttons, decorative highlights                         |
| 400 ★ | `secondary-400` | `#F58C1C` | **Default — accent CTAs, badges, "Save up to 50%" callouts, highlight rules** |
| 500   | `secondary-500` | `#AB5E00` | Text on Marigold-tinted backgrounds, deep accent labels                       |
| 600   | `secondary-600` | `#874800` | Pressed/active state for accent buttons                                       |
| 700   | `secondary-700` | `#683600` | Dark-theme accent text                                                        |
| 800   | `secondary-800` | `#4E2700` | Text on tinted accent backgrounds (`secondary-50`–`secondary-200`)            |
| 900   | `secondary-900` | `#361900` | Deep accent overlays                                                          |
| 950   | `secondary-950` | `#1C0A00` | Near-black with marigold undertone — dark theme accent surfaces               |

### Tertiary — Warm Clay

A muted earthen taupe that bridges the brand colors and the Taupe neutrals. Used for tertiary illustrations, soft brand highlights, supporting iconography, and any moment where Sienna and Marigold would feel too loud. Reads as sun-baked clay or unbleached linen. Anchor lives at step 500.

| Step  | Token          | Hex       | Usage Guidance                                                                |
| ----- | -------------- | --------- | ----------------------------------------------------------------------------- |
| 50    | `tertiary-50`  | `#FAF6F3` | Editorial section backgrounds, page-level warm wash                           |
| 100   | `tertiary-100` | `#F1E7E2` | Editorial card surfaces, soft container fills                                 |
| 200   | `tertiary-200` | `#E4D0C3` | Light borders with warmth, divider lines on tinted sections                   |
| 300   | `tertiary-300` | `#D0B4A2` | Decorative rules, illustration mid-tones, subtle iconography                  |
| 400   | `tertiary-400` | `#B1917C` | Tertiary text on light surfaces, supporting icon color                        |
| 500 ★ | `tertiary-500` | `#9C7B66` | **Default — tertiary buttons, supporting illustrations, muted brand accents** |
| 600   | `tertiary-600` | `#715441` | Pressed state for tertiary buttons, deeper supporting text                    |
| 700   | `tertiary-700` | `#573F30` | Dark-theme tertiary accents                                                   |
| 800   | `tertiary-800` | `#402F24` | Text on tinted tertiary backgrounds (`tertiary-50`–`tertiary-200`)            |
| 900   | `tertiary-900` | `#2B1F17` | Deep neutral-warm overlays                                                    |
| 950   | `tertiary-950` | `#150E09` | Near-black with warm clay undertone — alternative dark surface                |

### Secondary & Accent (Semantic — Standardized)

These palettes are standardized across all Paravel Labs brands. They handle system-level feedback and should never be replaced by brand colors for error, success, warning, or info states.

#### Error / Danger (Tailwind Red)

| Step | Hex       | Light Surface Role       | Dark Surface Role |
| ---- | --------- | ------------------------ | ----------------- |
| 50   | `#FEF2F2` | Background               | —                 |
| 100  | `#FEE2E2` | Subtle bg                | —                 |
| 200  | `#FECACA` | Border                   | —                 |
| 300  | `#FCA5A5` | —                        | —                 |
| 400  | `#F87171` | —                        | Text              |
| 500  | `#EF4444` | —                        | —                 |
| 600  | `#DC2626` | Text, destructive button | —                 |
| 700  | `#B91C1C` | —                        | —                 |
| 800  | `#991B1B` | —                        | Border            |
| 900  | `#7F1D1D` | —                        | —                 |
| 950  | `#450A0A` | —                        | Background        |

#### Info (Tailwind Blue)

| Step | Hex       | Light Surface Role | Dark Surface Role |
| ---- | --------- | ------------------ | ----------------- |
| 50   | `#EFF6FF` | Background         | —                 |
| 100  | `#DBEAFE` | Subtle bg          | —                 |
| 200  | `#BFDBFE` | Border             | —                 |
| 300  | `#93C5FD` | —                  | —                 |
| 400  | `#60A5FA` | —                  | Text              |
| 500  | `#3B82F6` | Focus ring         | Focus ring        |
| 600  | `#2563EB` | Text               | —                 |
| 700  | `#1D4ED8` | —                  | —                 |
| 800  | `#1E40AF` | —                  | Border            |
| 900  | `#1E3A8A` | —                  | —                 |
| 950  | `#172554` | —                  | Background        |

#### Success (Tailwind Green)

| Step | Hex       | Light Surface Role | Dark Surface Role |
| ---- | --------- | ------------------ | ----------------- |
| 50   | `#F0FDF4` | Background         | —                 |
| 100  | `#DCFCE7` | Subtle bg          | —                 |
| 200  | `#BBF7D0` | Border             | —                 |
| 300  | `#86EFAC` | —                  | —                 |
| 400  | `#4ADE80` | —                  | Text              |
| 500  | `#22C55E` | —                  | —                 |
| 600  | `#16A34A` | Text               | —                 |
| 700  | `#15803D` | —                  | —                 |
| 800  | `#166534` | —                  | Border            |
| 900  | `#14532D` | —                  | —                 |
| 950  | `#052E16` | —                  | Background        |

#### Warning (Tailwind Yellow)

| Step | Hex       | Light Surface Role | Dark Surface Role |
| ---- | --------- | ------------------ | ----------------- |
| 50   | `#FEFCE8` | Background         | —                 |
| 100  | `#FEF9C3` | Subtle bg          | —                 |
| 200  | `#FEF08A` | Border             | —                 |
| 300  | `#FDE047` | —                  | —                 |
| 400  | `#FACC15` | —                  | Text              |
| 500  | `#EAB308` | —                  | —                 |
| 600  | `#CA8A04` | —                  | —                 |
| 700  | `#A16207` | Text               | —                 |
| 800  | `#854D0E` | —                  | Border            |
| 900  | `#713F12` | —                  | —                 |
| 950  | `#422006` | —                  | Background        |

**Focus Ring:** Always `info-500` (`#3B82F6`) for accessibility consistency, regardless of brand context.

### Surface & Background

Taupe is Tailwind's warmest neutral — distinctly earthy with a sandy, clay-like undertone. The OKLCH-defined hue runs slightly redder than Stone, giving surfaces a touch more skin-warmth than a typical neutral. It pairs beautifully with the Sienna and Marigold brand palette and reinforces Terra Mare's grounded, artisanal character.

| Role                         | Token                  | Hex       |
| ---------------------------- | ---------------------- | --------- |
| Page background              | `{colors.neutral-50}`  | `#FBFAF9` |
| Card / elevated surface      | `{colors.white}`       | `#FFFFFF` |
| Alt section background       | `{colors.neutral-100}` | `#F3F1F1` |
| Editorial section background | `{colors.tertiary-50}` | `#FAF6F3` |
| Button / interactive surface | `{colors.neutral-200}` | `#E8E4E3` |
| Dark surface                 | `{colors.neutral-800}` | `#2B2422` |
| Deep dark / dark theme bg    | `{colors.neutral-900}` | `#1D1816` |
| Near-black (rare)            | `{colors.neutral-950}` | `#0C0A09` |

### Neutrals & Text

| Role                              | Token                  | Hex       | Notes                                              |
| --------------------------------- | ---------------------- | --------- | -------------------------------------------------- |
| Primary text                      | `{colors.neutral-900}` | `#1D1816` | Body and headline color on light surfaces — never pure black |
| Secondary text                    | `{colors.neutral-700}` | `#473C39` | Subheadings, supporting paragraphs                 |
| Tertiary / muted text             | `{colors.neutral-500}` | `#7C6D67` | Captions, timestamps, supporting metadata          |
| Disabled text                     | `{colors.neutral-400}` | `#ABA09C` | Muted enough to recede but still legible           |
| Text on dark surfaces (primary)   | `{colors.neutral-50}`  | `#FBFAF9` | Body copy on neutral-800/900 backgrounds           |
| Text on dark surfaces (secondary) | `{colors.neutral-300}` | `#D8D2D0` | Subdued copy on dark surfaces                      |

### Borders & Dividers

| Role                      | Token                  | Hex       |
| ------------------------- | ---------------------- | --------- |
| Light border / divider    | `{colors.neutral-200}` | `#E8E4E3` |
| Prominent border          | `{colors.neutral-300}` | `#D8D2D0` |
| Dark theme border         | `{colors.neutral-700}` | `#473C39` |
| Focus ring (always)       | `{colors.info-500}`    | `#3B82F6` |
| Ring/glow (subtle, brand) | `{colors.primary-300}` | `#FAA276` |

### Gradient System

Terra Mare is restrained with gradients — the brand's warmth comes from solid color and material textures, not glow. When gradients appear, they're **sun-warmed** and **directional**, not radial neon washes.

- **Sunrise Wash** — `linear-gradient(180deg, #FFF5ED 0%, #FBFAF9 100%)` — for hero section backgrounds and product image containers; subtle vertical warmth that fades into the page.
- **Ember Brand** — `linear-gradient(135deg, #B7500B 0%, #F58C1C 100%)` — used sparingly for premium moments (subscription banners, hero text fills, brand seals). Never on body buttons.

## 3. Typography Rules

The serif/sans pairing is the system's most defining choice. Crimson Text owns headlines, editorial pull-quotes, and any moment where the brand voice should sound considered or literary. Poppins handles everything functional — buttons, inputs, body copy, navigation. Serifs carry the soul; sans-serifs carry the function.

### Font Families

| Role             | Family       | Fallback Stack                                                  |
| ---------------- | ------------ | --------------------------------------------------------------- |
| Headline (serif) | Crimson Text | `Georgia, 'Times New Roman', serif`                             |
| Body / UI (sans) | Poppins      | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`     |
| Code (mono)      | System Mono  | `ui-monospace, Menlo, Consolas, 'Courier New', monospace`       |

Both Crimson Text and Poppins are available via Google Fonts and should be loaded with `font-display: swap` to prevent invisible text during webfont load.

### Hierarchy

| Token           | Font         | Size (px / rem) | Weight | Line-height | Letter-spacing | Notes                                                        |
| --------------- | ------------ | --------------- | ------ | ----------- | -------------- | ------------------------------------------------------------ |
| `display`       | Crimson Text | 72 / 4.5rem     | 600    | 1.05        | -0.02em        | Hero moments, brand statements. Use sparingly.               |
| `headline-lg`   | Crimson Text | 48 / 3rem       | 600    | 1.1         | -0.015em       | Page titles, major section openers                           |
| `headline-md`   | Crimson Text | 36 / 2.25rem    | 600    | 1.15        | -0.01em        | Section sub-titles                                           |
| `headline-sm`   | Crimson Text | 28 / 1.75rem    | 500    | 1.2         | -0.005em       | Card titles, product names                                   |
| `headline-xs`   | Crimson Text | 22 / 1.375rem   | 500    | 1.3         | —              | Inline section markers, list group titles                    |
| `feature-title` | Poppins      | 18 / 1.125rem   | 600    | 1.4         | —              | Component-level titles, modal headers                        |
| `body-lg`       | Poppins      | 18 / 1.125rem   | 400    | 1.6         | —              | Lead paragraphs, hero body copy                              |
| `body-md`       | Poppins      | 16 / 1rem       | 400    | 1.6         | —              | Default body text                                            |
| `body-sm`       | Poppins      | 14 / 0.875rem   | 400    | 1.55        | —              | Supporting copy, dense UI sections                           |
| `body-serif`    | Crimson Text | 18 / 1.125rem   | 400    | 1.65        | —              | Long-form editorial paragraphs (founder story, charity page) |
| `caption`       | Poppins      | 13 / 0.8125rem  | 400    | 1.5         | 0.005em        | Image captions, metadata                                     |
| `label-md`      | Poppins      | 13 / 0.8125rem  | 500    | 1.4         | 0.01em         | Form labels, badges                                          |
| `button-label`  | Poppins      | 15 / 0.9375rem  | 500    | 1.2         | 0.01em         | All button text. Title case, not uppercase.                  |
| `overline`      | Poppins      | 11 / 0.6875rem  | 600    | 1.3         | 0.12em         | Eyebrows, section pre-titles — UPPERCASE                     |
| `micro`         | Poppins      | 11 / 0.6875rem  | 400    | 1.4         | 0.01em         | Legal text, footnotes, daggers                               |
| `code`          | System Mono  | 14 / 0.875rem   | 400    | 1.5         | —              | Inline code, technical references                            |

### Principles

1. **Serif for soul, sans for function.** Crimson Text owns headlines, editorial pull-quotes, and any moment where the brand voice should sound considered or literary. Poppins handles everything functional — buttons, inputs, body copy, navigation. Don't blend the two within a single hierarchy level.
2. **Tighten as you scale up.** Display and hero sizes use negative letter-spacing (`-0.015em` to `-0.02em`) to keep large serif text from looking airy. Body sizes stay at zero tracking.
3. **Line-height inversely scales with size.** Hero (1.05), H1 (1.1), body (1.6). Tight headlines, generous body — that's the editorial rhythm.
4. **Italics belong to the brand.** Terra Mare uses italic emphasis (`*first*`, `*Instantly save*`) as a brand voice. Reserve italic Crimson Text for editorial emphasis in headlines — never italicize Poppins body copy for emphasis (use weight instead).
5. **Overlines are uppercase, tracked, and small.** They establish hierarchy without competing with serif headlines. Use them to label sections (`OUR FOUNDER`, `OUR PROMISE`).

## 4. Layout Principles

Terra Mare treats whitespace as a luxury material. Sections breathe. Cards have room. Headlines don't crowd body copy. The mental model: a well-designed magazine spread, not a dense ecommerce grid.

### Spacing System

The standardized Paravel Labs scale, used for all padding, margin, gap, and size values:

`0px, 2px, 4px, 6px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px, 160px, 192px, 224px, 256px, 320px, 384px, 480px, 560px, 640px, 720px, 768px, 1024px, 1280px, 1440px, 1600px, 1920px`

**Common usage patterns for Terra Mare:**

| Use case                            | Value                                              |
| ----------------------------------- | -------------------------------------------------- |
| Component internal padding          | 8px–24px                                           |
| Button padding                      | 12px vertical / 24px horizontal                    |
| Card padding                        | 24px (standard), 32px (editorial)                  |
| Input padding                       | 12px vertical / 16px horizontal                    |
| Section vertical spacing            | 96px–128px — Terra Mare leans generous             |
| Stack gaps (small)                  | 4px–8px (label-to-input, icon-to-text)             |
| Stack gaps (medium)                 | 16px–24px (paragraph rhythm, list items)           |
| Stack gaps (large)                  | 48px–64px (sub-section separation)                 |
| Page max-widths                     | 1280px (default), 1440px (hero/wide), 768px (long-form editorial) |

### Grid & Container

| Property        | Value                                                       |
| --------------- | ----------------------------------------------------------- |
| Max width       | 1280px (default), 768px (editorial long-form), 1440px (hero/full-bleed) |
| Section padding | 96px vertical on desktop, scaling to 48px on mobile         |
| Grid            | 12-column with 24px gutters at desktop                      |
| Product grid    | 4 columns (`xl`), 3 (`lg`), 2 (`md`), 1 (base)              |

### Whitespace Philosophy

When in doubt between 64px and 96px of vertical spacing, choose 96px. The luxury wellness register requires breathing room; cramped layouts read as low-rent. Body copy lives at 16px Poppins with 1.6 line-height — don't compress for density.

## 5. Depth & Elevation

Terra Mare is a **soft shadow** brand. The luxury-organic aesthetic depends on ambient, low-contrast elevation rather than dramatic drop shadows. Default to `2xs` and `xs` for most resting components — the brand's depth comes from typography, color, and whitespace, not from heavy lift.

| Token | Value                                                                 | Terra Mare Usage                                                                |
| ----- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `2xs` | `0 1px rgb(0 0 0 / 0.05)`                                             | Input borders, subtle card edges. Used heavily — most cards rest at this level. |
| `xs`  | `0 1px 2px 0 rgb(0 0 0 / 0.05)`                                       | Default for primary buttons and resting product cards.                          |
| `sm`  | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`       | Standard card elevation, dropdown rest state, hover lift on default cards.      |
| `md`  | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`    | Hovered product cards, active dropdowns. Sweet spot for interactive lift.       |
| `lg`  | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`  | Popovers, tooltips, sticky CTAs.                                                |
| `xl`  | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Modal dialogs, command palettes, signup overlays.                               |
| `2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)`                                 | Used very rarely — hero product photography, premium feature showcases.         |

**Shadow Philosophy.** Reserve `md` and `lg` for genuine interactive feedback (hover, dropdown open). `2xl` is almost never used — it reads as too aggressive for the editorial register. When in doubt, go softer.

## 6. Shapes

**Shape Language:** Rounded-but-architectural. Never sharp-edged Brutalist, never bubbly cartoon. The 8px–16px range is the sweet spot for most components — soft enough to feel warm, structured enough to read as luxury rather than playful. Pills (`rounded.full`) are reserved for badges, tags, and avatars; buttons stay at the moderate `rounded.md`.

### Border Radius Scale

| Token          | Value    | Use Case                                                  |
| -------------- | -------- | --------------------------------------------------------- |
| `rounded.none` | `0px`    | Editorial image edges (rare), data tables                 |
| `rounded.sm`   | `4px`    | Tight UI — inline tags, very small badges                 |
| `rounded.md`   | `8px`    | **Default — buttons, inputs, small cards**                |
| `rounded.lg`   | `12px`   | Standard cards, image containers                          |
| `rounded.xl`   | `16px`   | Editorial cards, product cards, hero images               |
| `rounded.2xl`  | `24px`   | Premium feature panels, modal dialogs                     |
| `rounded.full` | `9999px` | Badges, account pricing tags, avatars, circular icons     |

### Application Rules

- **Buttons** → `rounded.md` (8px). All variants. The moderate radius keeps the brand architectural.
- **Inputs** → `rounded.md` (8px). Matches buttons.
- **Cards (default)** → `rounded.lg` (12px).
- **Cards (editorial / product)** → `rounded.xl` (16px). The slight bump gives narrative cards a softer, magazine-spread feel.
- **Modals & premium panels** → `rounded.2xl` (24px).
- **Badges / pricing tags** → `rounded.full`.
- **Avatars / circular icon buttons** → `rounded.full`.
- **Product image containers within cards** → `rounded.lg` (12px) — slightly less than the parent card.

## 7. Component Stylings

Every component below is mirrored in the front matter `components` block using token references. The prose specs are the human-readable explanation; the YAML is the contract.

### Buttons

All buttons share `rounded.md` (8px), `button-label` typography (Poppins 15px / weight 500 / +0.01em tracking, **title case**, not uppercase), 44px height, and 12px × 24px padding.

| Variant            | Background                         | Text                               | Hover                                                  | Active                                                 | Personality                                                                  |
| ------------------ | ---------------------------------- | ---------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `button-primary`   | `{colors.primary-500}` `#B7500B`   | `{colors.white}` `#FFFFFF`         | bg `{colors.primary-600}` `#933D00`                    | bg `{colors.primary-700}` `#722D00`                    | The brand's default CTA — confident, warm, unambiguous.                      |
| `button-accent`    | `{colors.secondary-400}` `#F58C1C` | `{colors.secondary-800}` `#4E2700` | bg `{colors.secondary-300}` `#F9A45C`                  | bg `{colors.secondary-600}` `#874800` (white text)     | For sun-forward moments — subscription banners, "Save" CTAs, promotional flags. |
| `button-secondary` | `{colors.neutral-200}` `#E8E4E3`   | `{colors.neutral-800}` `#2B2422`   | bg `{colors.neutral-300}` `#D8D2D0`                    | bg `{colors.neutral-400}` `#ABA09C`                    | For supporting actions — "Learn more," "Add to comparison."                  |
| `button-outline`   | `{colors.white}` `#FFFFFF` (1px solid `{colors.neutral-300}`) | `{colors.primary-500}` `#B7500B`   | bg `{colors.primary-50}` `#FFF4EF`, text `{colors.primary-600}` | bg `{colors.primary-100}` `#FFE3D6`, text `{colors.primary-700}` | Lowest visual weight — text links upgraded to button shape.                  |
| `button-inverse`   | `{colors.white}` `#FFFFFF`         | `{colors.primary-500}` `#B7500B`   | bg `{colors.primary-50}` `#FFF4EF`                     | —                                                      | For CTAs sitting on dark hero backgrounds.                                   |

**Note on the primary hover/active progression.** Hover and active states both deepen the sienna (500 → 600 → 700) — counter-intuitive for "lift on hover," but white text on Sienna-400 (`#DE7944`) fails WCAG AA contrast (3.06:1). Going darker keeps the press-feedback direction consistent and the text legible at every state. The accent button can hover lighter because its dark text on light marigold maintains contrast naturally.

Resting shadow `xs`; hover shadow `sm` on the primary. Disabled state: `button-primary-disabled` uses `primary-200` background with `primary-800` text.

### Cards & Containers

| Variant         | Background                         | Text                             | Padding | Radius          | Border / Shadow                                                                  |
| --------------- | ---------------------------------- | -------------------------------- | ------- | --------------- | -------------------------------------------------------------------------------- |
| `card`          | `{colors.white}` `#FFFFFF`         | `{colors.neutral-900}` `#1D1816` | 24px    | `rounded.lg`    | `1px solid {colors.neutral-200}` + shadow `xs`; hover: `sm` + border `neutral-300` |
| `card-editorial`| `{colors.tertiary-50}` `#FAF6F3`   | `{colors.neutral-900}` `#1D1816` | 32px    | `rounded.xl`    | None — tonal separation from the page                                            |
| `card-product`  | `{colors.white}` `#FFFFFF`         | `{colors.neutral-900}` `#1D1816` | 24px    | `rounded.xl`    | Shadow `sm`; hover: `md`, image scales 1.02. Image area uses `rounded.lg` and a `Sunrise Wash` background. |
| `card-dark`     | `{colors.neutral-800}` `#2B2422`   | `{colors.neutral-50}` `#FBFAF9`  | 24px    | `rounded.lg`    | `1px solid {colors.neutral-700}` (`#473C39`)                                     |

### Inputs & Forms

| Spec           | Value                                                  |
| -------------- | ------------------------------------------------------ |
| Background     | `{colors.white}` `#FFFFFF`                             |
| Text           | `{colors.neutral-900}` `#1D1816`                       |
| Placeholder    | `{colors.neutral-500}` `#7C6D67`                       |
| Border         | `1px solid {colors.neutral-300}` (`#D8D2D0`)           |
| Border (focus) | `{colors.primary-500}` (`#B7500B`)                     |
| Focus ring     | `0 0 0 3px rgba(183, 80, 11, 0.15)`                    |
| Radius         | `rounded.md` (8px) — matches buttons                   |
| Padding        | 12px × 16px                                            |
| Height         | 48px (prevents iOS zoom)                               |
| Typography     | `body-md` (Poppins 16px)                               |

Disabled inputs use `neutral-100` background with `neutral-600` text. Error inputs use `2px solid {colors.error-600}` border with `error-600` helper text below. Labels use `label-md` (Poppins 13px / 500 / +0.01em) and sit above inputs with 6px bottom margin.

### Navigation

| Property       | Value                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------- |
| Background     | `rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(12px)`                           |
| Border bottom  | `1px solid {colors.neutral-200}` (`#E8E4E3`)                                             |
| Height         | 80px                                                                                     |
| Padding        | 0 32px, max-width 1280px centered                                                        |
| Logo placement | Left-aligned (Crimson Text wordmark)                                                     |
| Nav links      | `button-label` typography (Poppins 15px / 500), color `{colors.neutral-700}`             |
| Hover          | Color shifts to `{colors.primary-500}` (`#B7500B`)                                       |
| Active link    | Color `{colors.primary-500}` with 2px underline in `{colors.secondary-400}` (`#F58C1C`)  |
| Primary nav CTA | `button-accent` ("Sign Up" / "Subscribe"), right-aligned                                |
| Mobile         | Hamburger drawer slides from right at `<lg` (1024px), full-height, `neutral-50` background |

Sticky on scroll. The backdrop blur is the brand's signature nav treatment — never replace with a solid white sticky.

### Image Treatment

| Property          | Value                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------- |
| Default radius    | `rounded.lg` (12px)                                                                     |
| Hero / feature    | `rounded.xl` (16px), optional shadow `2xl` for premium product shots                    |
| Product images    | Sit on `Sunrise Wash` gradient or `tertiary-50` — never on pure white inside cards      |
| Aspect ratios     | 4:5 (portrait) for product photography, 16:9 for editorial banners, 1:1 for lifestyle  |
| Tone              | Warm-graded — golden hour, natural light, never cool/clinical                           |

### Distinctive Components

**Editorial Pullquote.** Crimson Text 36px italic, indented with a 4px `{colors.secondary-400}` (`#F58C1C`) left rule, used for founder quotes and brand statements.

**Account Pricing Tag** (`badge`). Pill-shaped, `{colors.secondary-100}` (`#FFE4CF`) background, `{colors.secondary-800}` (`#4E2700`) text, `label-md` typography weight 600, 4px × 12px padding, `rounded.full`. Used to highlight account-only savings.

**Daggered Disclaimer.** `micro` typography (Poppins 11px) in `{colors.neutral-500}` (`#7C6D67`), prefixed with `†` for FDA-required statements. Always lives at the bottom of product blocks.

**Badge** variants:
- `badge` — `{colors.secondary-100}` bg, `{colors.secondary-800}` text. Default; "Save," promotional flags.
- `badge-primary` — `{colors.primary-100}` bg, `{colors.primary-800}` text. "Bestseller," "New."
- `badge-neutral` — `{colors.neutral-100}` bg, `{colors.neutral-700}` text. Metadata pills, category tags.

## 8. Do's and Don'ts

### Do

- Use `{colors.primary-500}` (Sienna `#B7500B`) for primary CTAs and brand-critical moments, full stop. It's the anchor.
- Pair Crimson Text headlines with Poppins body — never reverse the roles.
- Lean on `{colors.neutral-50}` and `{colors.neutral-100}` (Taupe) for section backgrounds to create warm rhythm.
- Reserve `{colors.secondary-400}` (Marigold) for energy/savings moments — it's the spark, not the foundation.
- Use the `Sunrise Wash` gradient for hero section backgrounds and product image containers.
- Italicize Crimson Text in headlines to echo the brand voice (`Putting women's health *first*`).
- Default to 96px vertical section spacing on desktop — Terra Mare breathes.
- Use `xs` shadows as the default elevation; reserve `md`+ for actual interactivity.
- Use account pricing badges (`secondary-100` fill, `secondary-800` text) consistently for member-only pricing callouts.
- Set body copy at `body-md` (16px Poppins / 1.6 line-height) — don't compress for density.

### Don't

- **Don't** use pure black (`#000000`) anywhere — primary text is `{colors.neutral-900}` (`#1D1816`).
- **Don't** use `{colors.secondary-400}` (Marigold) as a primary CTA color — that's Sienna's job. Marigold supports.
- **Don't** introduce cool grays (Slate, Zinc) — they break the warm-palette coherence.
- **Don't** apply heavy drop shadows (`2xl`) on standard UI — it kills the editorial feel.
- **Don't** use Crimson Text below 18px — small serifs lose readability and look fragile.
- **Don't** italicize Poppins for emphasis — use weight (500/600) instead.
- **Don't** gradient-wash everything — Terra Mare uses gradients sparingly and intentionally.
- **Don't** drop section spacing below 64px on desktop — cramped layouts read as low-rent.
- **Don't** put product images on pure white inside product cards — use `tertiary-50` or `Sunrise Wash`.
- **Don't** use `rounded.2xl` (24px) on small components like buttons — it reads as toy-like.
- **Don't** use a lighter sienna step for the primary button's hover state — white text on `primary-400` fails AA contrast.

## 9. Responsive Behavior

### Breakpoints

| Token  | Min Width | Terra Mare Behavior                                                                        |
| ------ | --------- | ------------------------------------------------------------------------------------------ |
| (base) | 0px       | Single-column, hamburger nav, 24px horizontal padding, headlines scale down to 32px H1     |
| `sm`   | 640px     | Larger phones — 32px horizontal padding, slight type bump for body (15px → 16px)           |
| `md`   | 768px     | Tablet — product grid goes 2-column, secondary CTAs sit inline rather than stacked         |
| `lg`   | 1024px    | Full nav appears, product grid goes 3-column, hero serif headlines use full `display` sizing |
| `xl`   | 1280px    | Standard desktop — content max-width caps at 1280px, product grid goes 4-column            |
| `2xl`  | 1536px    | Wide desktop — hero sections expand to 1440px, increased generous whitespace               |

### Touch Targets

- **Minimum hit area:** 44 × 44px for any tappable element on mobile (iOS HIG standard).
- **Buttons on mobile:** minimum 48px height, horizontal padding bumped to 20px.
- **Form inputs on mobile:** minimum 48px height to prevent iOS zoom (paired with `font-size: 16px`).
- **Icon-only buttons:** 40 × 40px minimum with hit area extended to 44 × 44 via padding.

### Collapsing Strategy

- **Navigation:** full horizontal nav at `lg`+, hamburger drawer at `<lg`.
- **Product grid:** 4 cols (`xl`) → 3 cols (`lg`) → 2 cols (`md`) → 1 col (base).
- **Hero:** two-column hero (image + copy) at `lg`+ collapses to stacked at `<lg`, with image first on mobile.
- **Cards:** padding scales from 32px (`lg`+) to 24px (`md`) to 20px (base).
- **Section spacing:** vertical padding scales from 128px (`xl`) to 96px (`lg`) to 64px (`md`) to 48px (base).
- **Editorial long-form:** stays at 768px max-width regardless of breakpoint — readability over width.

### Image Behavior

- **Hero images:** full-bleed at base, contained within max-width at `lg`+. Aspect ratio shifts from 4:5 (mobile) to 16:9 (desktop) for editorial heroes.
- **Product images:** square (1:1) on grid, 4:5 portrait on product detail.
- **Lifestyle / founder images:** crop tighter on mobile (face/hands) and wider on desktop (full scene).
- **Art direction:** consider `<picture>` element with mobile-cropped variants for hero shots — don't just scale desktop crops down.

## 10. Agent Prompt Guide

This section equips AI coding tools (Claude, Cursor, GitHub Copilot, etc.) to implement Terra Mare components correctly. Reference token names, not raw hex values — the front matter is the authoritative source.

### Quick Color Reference

| Token             | Hex       | Note                                                          |
| ----------------- | --------- | ------------------------------------------------------------- |
| `primary-50`      | `#FFF4EF` | Light brand tint background                                   |
| `primary-100`     | `#FFE3D6` | Brand badge fill                                              |
| `primary-500` ★   | `#B7500B` | **Anchor — primary CTAs, brand logo**                         |
| `primary-600`     | `#933D00` | Primary button hover state                                    |
| `primary-700`     | `#722D00` | Primary button active / pressed                               |
| `primary-800`     | `#562000` | Brand text on tinted bg                                       |
| `secondary-100`   | `#FFE4CF` | Account pricing tag background                                |
| `secondary-300`   | `#F9A45C` | Accent button hover state                                     |
| `secondary-400` ★ | `#F58C1C` | **Anchor — accent / "save" callouts**                         |
| `secondary-600`   | `#874800` | Accent button active / pressed                                |
| `secondary-800`   | `#4E2700` | Text on Marigold tints                                        |
| `tertiary-50`     | `#FAF6F3` | Editorial section background                                  |
| `tertiary-100`    | `#F1E7E2` | Editorial card surface                                        |
| `tertiary-500` ★  | `#9C7B66` | **Anchor — tertiary / muted brand**                           |
| `white`           | `#FFFFFF` | Card surface, inverse buttons                                 |
| `neutral-50`      | `#FBFAF9` | Page background                                               |
| `neutral-100`     | `#F3F1F1` | Alt section background                                        |
| `neutral-200`     | `#E8E4E3` | Light border / secondary button bg                            |
| `neutral-700`     | `#473C39` | Secondary text                                                |
| `neutral-900`     | `#1D1816` | Primary text (never use `#000`)                               |
| `info-500`        | `#3B82F6` | Focus ring (always)                                           |

### Token Reference Cheat Sheet

- All component definitions reference tokens via `{colors.primary-500}`, `{rounded.md}`, `{typography.body-md}`. Never hardcode hex values in component specs.
- The front matter YAML block is the **authoritative source** for any token-level value. If the prose disagrees with the YAML, the YAML wins.
- State variants follow the `-hover`, `-active`, `-disabled` suffix convention as separate component entries (`button-primary` and `button-primary-hover` are sibling definitions).
- Brand color anchors: primary at **500**, secondary at **400**, tertiary at **500**. The user's original hex values live at these specific steps.

### Example Component Prompts

1. **"Build a product card matching the `card-product` spec — `{colors.white}` background, `1px solid {colors.neutral-200}` border, `{rounded.xl}` (16px) corners, 24px padding, `xs` shadow at rest, transitioning to `md` shadow + 1.02 image scale on hover. Product image sits in a 1:1 container with `{rounded.lg}` and a `Sunrise Wash` gradient background (`linear-gradient(180deg, #FFF5ED 0%, #FBFAF9 100%)`). Title in `{typography.headline-sm}` (Crimson Text 28px / weight 500) in `{colors.neutral-900}`. Description in `{typography.body-sm}` (Poppins 14px) in `{colors.neutral-700}`. Price in `{typography.body-lg}` weight 600 in `{colors.neutral-900}`. Account pricing badge uses the `badge` spec — `{colors.secondary-100}` bg, `{colors.secondary-800}` text, `{rounded.full}`. Primary CTA uses `button-primary`."**

2. **"Build an editorial founder section. Background `{colors.tertiary-50}` (`#FAF6F3`). Two-column at `lg`+, stacking below. Left: founder portrait, 4:5 aspect ratio, `{rounded.xl}` (16px), no shadow. Right: overline `OUR FOUNDER` using `{typography.overline}` (Poppins 11px / weight 600 / uppercase / +0.12em tracking) in `{colors.tertiary-500}`. H2 in `{typography.headline-md}` (Crimson Text 36px / weight 600) in `{colors.neutral-900}` — italicize key phrases for emphasis. Body copy in `{typography.body-serif}` (Crimson Text 18px / 1.65 line-height) in `{colors.neutral-700}`. CTA uses the `button-outline` spec. Section padding 96px vertical."**

3. **"Build a Subscribe & Save banner. Background `Ember Brand` gradient (`linear-gradient(135deg, #B7500B 0%, #F58C1C 100%)`). 48px vertical padding, 32px horizontal, `{rounded.xl}` corners. Headline in `{typography.headline-md}` italic in `{colors.white}` with the savings copy in weight 600. Sub-copy in `{typography.body-md}` in `{colors.primary-100}`. Inverse CTA uses the `button-inverse` spec — `{colors.white}` bg, `{colors.primary-500}` text, `sm` shadow."**

4. **"Build a quantity selector + add-to-cart form. Quantity input matches the `input` spec — 48px height, `{colors.white}` bg, `1px solid {colors.neutral-300}` border, `{rounded.md}` corners, `{typography.body-md}` (Poppins 16px), text `{colors.neutral-900}`. On focus, swap border to 2px solid `{colors.primary-500}` and add `0 0 0 3px rgba(183, 80, 11, 0.15)` ring. Label `Quantity` in `{typography.label-md}` in `{colors.neutral-700}`. Add to cart uses `button-primary` full-width at 48px height. Below the button, a daggered disclaimer in `{typography.micro}` in `{colors.neutral-500}`: `†These statements have not been evaluated by the FDA.`"**

5. **"Build the sticky top nav. 80px height, sticky to viewport top. Background `rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(12px)`. `1px solid {colors.neutral-200}` bottom border. 32px horizontal padding, max-width 1280px centered. Left: wordmark logo. Center: nav links using `{typography.button-label}` (Poppins 15px / 500) in `{colors.neutral-700}`; hover color shifts to `{colors.primary-500}`; active link adds a 2px underline in `{colors.secondary-400}`. Right: `button-accent` ('Sign Up'). Below `lg` (1024px), collapse to hamburger opening a right-side drawer with `{colors.neutral-50}` background."**

### Iteration Guide

1. **Reference tokens, not raw hex.** When asking an agent to build or modify a component, always say `{colors.primary-500}` rather than `#B7500B`. The token name carries semantic meaning the hex doesn't.
2. **Specify both font family and fallbacks.** Say `'Crimson Text', Georgia, serif` not just "Crimson Text" — fallbacks matter for early renders.
3. **Use shadow tokens by name AND raw value.** Say `xs (0 1px 2px 0 rgb(0 0 0 / 0.05))` so the AI can match the system without lookup.
4. **State the breakpoint when describing layout shifts.** "at `lg`+ (1024px)" is unambiguous; "on desktop" is not.
5. **Anchor the anchor steps.** When in doubt, defaults are `primary-500`, `secondary-400`, `tertiary-500`, and the Taupe surfaces (`neutral-50`, `neutral-100`, `neutral-700`, `neutral-900`). Don't invent new shades.
6. **Lean on Crimson Text for character, Poppins for clarity.** Prompts should explicitly assign serif vs sans roles, not leave it to the model.
7. **Generous spacing > dense spacing.** When prompting, default to the higher value in any range (96px > 64px, 32px > 24px). Terra Mare is a luxury wellness brand; cramped layouts will misrepresent it.
