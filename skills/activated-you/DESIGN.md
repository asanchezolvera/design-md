---
version: alpha
name: ActivatedYou
description: Premium plant-based supplements co-founded with Maggie Q and Dr. Frank Lipman; calm, modern, science-backed wellness for health-conscious adults.
colors:
  # Primary — Cultivated Green (botanical, grounded, plant-forward)
  primary-50:  "#F4F8F3"
  primary-100: "#E3EDE1"
  primary-200: "#C7DBC2"
  primary-300: "#A7C4A1"
  primary-400: "#81A37A"
  primary-500: "#52744B"
  primary-600: "#45653F"
  primary-700: "#334D2E"
  primary-800: "#263823"
  primary-900: "#192616"
  primary-950: "#0A1209"

  # Secondary — Deep Atlantic (clinical authority, trust, depth)
  secondary-50:  "#F0F8FF"
  secondary-100: "#DDECFA"
  secondary-200: "#B7D8F8"
  secondary-300: "#90C0ED"
  secondary-400: "#659ED1"
  secondary-500: "#3E79AD"
  secondary-600: "#265F8E"
  secondary-700: "#004777"
  secondary-800: "#163550"
  secondary-900: "#0D2336"
  secondary-950: "#05101C"

  # Tertiary — Golden Hour (warm vitality, premium accent)
  tertiary-50:  "#FFF5EB"
  tertiary-100: "#FCE5CD"
  tertiary-200: "#FBCA94"
  tertiary-300: "#F8A022"
  tertiary-400: "#D38400"
  tertiary-500: "#A26500"
  tertiary-600: "#804E00"
  tertiary-700: "#623B00"
  tertiary-800: "#4A2B00"
  tertiary-900: "#321C00"
  tertiary-950: "#1A0C00"

  # Neutral — Mist (cool blue-cyan, calm/clinical without being sterile)
  neutral-50:  "#F9FBFB"
  neutral-100: "#F1F3F3"
  neutral-200: "#E3E7E8"
  neutral-300: "#D0D6D8"
  neutral-400: "#9CA8AB"
  neutral-500: "#67787C"
  neutral-600: "#4B585B"
  neutral-700: "#394447"
  neutral-800: "#22292B"
  neutral-900: "#161B1D"
  neutral-950: "#090B0C"

  # Semantic — Error (Tailwind Red)
  error-50:  "#FEF2F2"
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
  info-50:  "#EFF6FF"
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
  success-50:  "#F0FDF4"
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
  warning-50:  "#FEFCE8"
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

  # Semantic aliases
  primary: "{colors.primary-500}"
  secondary: "{colors.secondary-700}"
  tertiary: "{colors.tertiary-300}"
  surface: "#FFFFFF"
  surface-raised: "{colors.neutral-50}"
  surface-recessed: "{colors.neutral-100}"
  on-surface: "{colors.neutral-900}"
  on-surface-muted: "{colors.neutral-600}"
  border: "{colors.neutral-200}"
  border-strong: "{colors.neutral-300}"
  focus-ring: "#3B82F6"

typography:
  display:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.2
  feature-title:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.55
  label-md:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.4
  label-sm:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
  overline:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 0.6875rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.1em
  caption:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
  micro:
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif"
    fontSize: 0.625rem
    fontWeight: 400
    lineHeight: 1.3
  code:
    fontFamily: "JetBrains Mono, Menlo, Consolas, monospace"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
  "2xl": 28px
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
    textColor: "{colors.neutral-50}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 12px 24px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-600}"
    textColor: "{colors.neutral-50}"
  button-primary-active:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.neutral-50}"
  button-primary-disabled:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.neutral-600}"

  button-secondary:
    backgroundColor: "{colors.secondary-700}"
    textColor: "{colors.neutral-50}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 12px 24px
    height: 48px
  button-secondary-hover:
    backgroundColor: "{colors.secondary-800}"
    textColor: "{colors.neutral-50}"
  button-secondary-active:
    backgroundColor: "{colors.secondary-900}"
    textColor: "{colors.neutral-50}"
  button-secondary-disabled:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.neutral-600}"

  button-outline:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.primary-700}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 12px 24px
    height: 48px
  button-outline-hover:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-700}"
  button-outline-active:
    backgroundColor: "{colors.primary-100}"
    textColor: "{colors.primary-800}"
  button-outline-disabled:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-400}"

  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-900}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 10px 16px
    height: 44px
  button-ghost-hover:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-900}"
  button-ghost-active:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.neutral-900}"
  button-ghost-disabled:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-400}"

  button-inverse:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.primary-700}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 12px 24px
    height: 48px
  button-inverse-hover:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-700}"
  button-inverse-active:
    backgroundColor: "{colors.primary-100}"
    textColor: "{colors.primary-800}"
  button-inverse-disabled:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.neutral-500}"

  card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-elevated:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.xl}"
    padding: 24px
  card-feature:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-900}"
    rounded: "{rounded.2xl}"
    padding: 32px
  card-inverse:
    backgroundColor: "{colors.primary-900}"
    textColor: "{colors.primary-50}"
    rounded: "{rounded.xl}"
    padding: 24px

  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 48px
  input-focus:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
  input-disabled:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-600}"
  input-error:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
  input-inverse:
    backgroundColor: "{colors.neutral-900}"
    textColor: "{colors.neutral-50}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 48px

  badge:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-700}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  badge-primary:
    backgroundColor: "{colors.primary-100}"
    textColor: "{colors.primary-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  badge-success:
    backgroundColor: "{colors.success-100}"
    textColor: "{colors.success-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  badge-warning:
    backgroundColor: "{colors.warning-100}"
    textColor: "{colors.warning-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  badge-error:
    backgroundColor: "{colors.error-100}"
    textColor: "{colors.error-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  badge-info:
    backgroundColor: "{colors.info-100}"
    textColor: "{colors.info-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px

  nav:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
    typography: "{typography.label-md}"
    padding: 0 24px
    height: 80px
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-700}"
    typography: "{typography.label-md}"
    padding: 8px 12px
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.primary-700}"
    typography: "{typography.label-md}"
    padding: 8px 12px
  nav-inverse:
    backgroundColor: "{colors.primary-900}"
    textColor: "{colors.primary-50}"
    typography: "{typography.label-md}"
    padding: 0 24px
    height: 80px
---

# ActivatedYou

## 1. Visual Theme & Atmosphere

ActivatedYou is wellness without the noise. Co-founded with actress Maggie Q and integrative-medicine physician Dr. Frank Lipman, the brand sits in a deliberate middle distance — more credible than a wellness-influencer line, more approachable than a clinical supplement. The visual identity has to do the same balancing act: science-backed enough to feel like medicine, warm enough to feel like ritual. Calm beats clever. Restraint beats decoration.

The palette anchors on **Cultivated Green (`#52744B`)** — a grown, botanical green that reads as plant-forward without slipping into "natural product" cliché. It is paired with **Deep Atlantic (`#004777`)**, a navy that does the credibility work — the doctor's office, the peer-reviewed study, the trust mark on the label — and **Golden Hour (`#F8A022`)**, a warm gold that delivers the moments of vitality and premium feel (highlighted phrases, accent badges, the "limited edition" feel). The neutral system is Tailwind's **Mist** — a cool, atmospheric blue-cyan whose subtle clinical lean reinforces the science backing without ever feeling sterile. Together they read as a wellness brand that respects your intelligence.

Typography is **Roboto**, used across the entire system. Roboto carries enough character to feel intentional but stays out of the way of the photography and the product. Pages breathe — generous whitespace, soft 12–20px corners, restrained shadows. The whole system biases toward a single emotion: _competent calm_.

**Key Characteristics**

- Botanical green primary signals plant-based formulation without being literal
- Deep navy secondary delivers the clinical credibility (Dr. Lipman, the science)
- Warm gold accent is reserved for moments of vitality and premium feel
- Mist neutrals add a soft cool atmosphere — wellness, not sterile
- Single typeface (Roboto) keeps the system unified and quiet
- Generous whitespace; the page is allowed to breathe
- Soft 12–20px radii — friendly without being playful
- Shadows are subtle and tonal; the system favors borders and tinted surfaces over heavy drop shadows

## 2. Color Palette & Roles

### Primary — Cultivated Green

The brand's anchor. A mid-tone botanical green that signals plants and grounded health without being a literal "leafy supplement" cue. The user's hex (`#52744B`) sits at step **500** — the natural anchor for a mid-saturation green.

| Step  | Token         | Hex       | Usage Guidance                                                                  |
| ----- | ------------- | --------- | ------------------------------------------------------------------------------- |
| 50    | `primary-50`  | `#F4F8F3` | Whisper tint — feature card backgrounds, subtle section dividers                |
| 100   | `primary-100` | `#E3EDE1` | Badge / pill backgrounds, "natural ingredient" tags                             |
| 200   | `primary-200` | `#C7DBC2` | Light tint — illustrations, decorative shapes, hover ghost backgrounds          |
| 300   | `primary-300` | `#A7C4A1` | Soft accent — focus rings (brand alternative), decorative dividers              |
| 400   | `primary-400` | `#81A37A` | Mid-tone — icon accents, secondary links, hero illustrations                    |
| 500 ★ | `primary-500` | `#52744B` | **Default — primary CTAs, brand moments, key icons**                            |
| 600   | `primary-600` | `#45653F` | Button hover state for primary                                                  |
| 700   | `primary-700` | `#334D2E` | Pressed/active state; outline button text on light surfaces                     |
| 800   | `primary-800` | `#263823` | Text on light primary tints (primary-50, primary-100)                           |
| 900   | `primary-900` | `#192616` | Deep brand surface — trust banners, footer accent bars                          |
| 950   | `primary-950` | `#0A1209` | Near-black with green undertone — dark theme background                         |

### Secondary — Deep Atlantic

The credibility color. A deep navy that lends the brand its medical/clinical authority — Dr. Lipman, the science, the peer-review trust. The user's hex (`#004777`) sits at step **700**.

| Step  | Token           | Hex       | Usage Guidance                                                                  |
| ----- | --------------- | --------- | ------------------------------------------------------------------------------- |
| 50    | `secondary-50`  | `#F0F8FF` | Whisper tint — info callout backgrounds, quote blocks                           |
| 100   | `secondary-100` | `#DDECFA` | Badge / pill backgrounds for "clinically studied" type marks                    |
| 200   | `secondary-200` | `#B7D8F8` | Soft tint — illustrations, decorative accents                                   |
| 300   | `secondary-300` | `#90C0ED` | Soft accent — secondary focus indicators                                        |
| 400   | `secondary-400` | `#659ED1` | Mid-tone — secondary icons, supporting links                                    |
| 500   | `secondary-500` | `#3E79AD` | Lighter navy — body copy links on light surfaces                                |
| 600   | `secondary-600` | `#265F8E` | Hover lighten step for secondary buttons                                        |
| 700 ★ | `secondary-700` | `#004777` | **Default — secondary CTAs, trust marks, doctor-led modules**                   |
| 800   | `secondary-800` | `#163550` | Pressed/active state; text on secondary-50/100                                  |
| 900   | `secondary-900` | `#0D2336` | Deep navy — dark sections, science-section headers                              |
| 950   | `secondary-950` | `#05101C` | Near-black with navy undertone — dark theme alternative                         |

### Tertiary — Golden Hour

The vitality color. A warm gold reserved for accents, highlights, and premium moments. The user's hex (`#F8A022`) sits at step **300** — its natural lightness anchor, and the only step where the gold should be used as a button surface (with dark text). The 400–950 steps render as deep amber/bronze and serve as text-on-tint, dark-theme accents, or limited-edition typography colors.

| Step  | Token          | Hex       | Usage Guidance                                                                  |
| ----- | -------------- | --------- | ------------------------------------------------------------------------------- |
| 50    | `tertiary-50`  | `#FFF5EB` | Whisper tint — limited-edition card backgrounds, premium callouts               |
| 100   | `tertiary-100` | `#FCE5CD` | Badge / pill backgrounds for "premium" or "bestseller" tags                     |
| 200   | `tertiary-200` | `#FBCA94` | Light tint — illustration shapes, decorative accents                            |
| 300 ★ | `tertiary-300` | `#F8A022` | **Default — accent CTAs (with dark text), highlight underlines, vitality icons**|
| 400   | `tertiary-400` | `#D38400` | Pressed step for accent; deep gold text on light surfaces                       |
| 500   | `tertiary-500` | `#A26500` | Active state; text on tertiary-50/100 tints                                     |
| 600   | `tertiary-600` | `#804E00` | Deep amber — text headings on tertiary-100 backgrounds                          |
| 700   | `tertiary-700` | `#623B00` | Text on tertiary-200 tints; dark theme amber accent                             |
| 800   | `tertiary-800` | `#4A2B00` | Deep bronze — dark theme typography                                             |
| 900   | `tertiary-900` | `#321C00` | Near-black bronze — dark theme deep accent                                      |
| 950   | `tertiary-950` | `#1A0C00` | Dark theme background alternative                                               |

### Secondary & Accent (Semantic)

Standardized across all Golden Hippo brands. Use these palettes for system messaging — never derive custom error/success/warning colors.

#### Error / Danger (Tailwind Red)

| Step | Hex       | Step | Hex       |
| ---- | --------- | ---- | --------- |
| 50   | `#FEF2F2` | 500  | `#EF4444` |
| 100  | `#FEE2E2` | 600  | `#DC2626` |
| 200  | `#FECACA` | 700  | `#B91C1C` |
| 300  | `#FCA5A5` | 800  | `#991B1B` |
| 400  | `#F87171` | 900  | `#7F1D1D` |
|      |           | 950  | `#450A0A` |

**Role mapping** — Light surfaces: text `error-600`, bg `error-50`, border `error-200`. Dark surfaces: text `error-400`, bg `error-950`, border `error-800`. Destructive button: `error-600` bg, white text.

#### Info (Tailwind Blue) — also drives Focus Ring (`#3B82F6`)

| Step | Hex       | Step | Hex       |
| ---- | --------- | ---- | --------- |
| 50   | `#EFF6FF` | 500  | `#3B82F6` |
| 100  | `#DBEAFE` | 600  | `#2563EB` |
| 200  | `#BFDBFE` | 700  | `#1D4ED8` |
| 300  | `#93C5FD` | 800  | `#1E40AF` |
| 400  | `#60A5FA` | 900  | `#1E3A8A` |
|      |           | 950  | `#172554` |

**Role mapping** — Light surfaces: text `info-600`, bg `info-50`, border `info-200`. Dark surfaces: text `info-400`, bg `info-950`, border `info-800`. Focus ring: `info-500` (`#3B82F6`).

#### Success (Tailwind Green)

| Step | Hex       | Step | Hex       |
| ---- | --------- | ---- | --------- |
| 50   | `#F0FDF4` | 500  | `#22C55E` |
| 100  | `#DCFCE7` | 600  | `#16A34A` |
| 200  | `#BBF7D0` | 700  | `#15803D` |
| 300  | `#86EFAC` | 800  | `#166534` |
| 400  | `#4ADE80` | 900  | `#14532D` |
|      |           | 950  | `#052E16` |

**Role mapping** — Light surfaces: text `success-600`, bg `success-50`, border `success-200`. Dark surfaces: text `success-400`, bg `success-950`, border `success-800`. Note: Success Green is intentionally distinct from the brand's primary Cultivated Green — confirmations should not be confused with brand moments.

#### Warning (Tailwind Yellow)

| Step | Hex       | Step | Hex       |
| ---- | --------- | ---- | --------- |
| 50   | `#FEFCE8` | 500  | `#EAB308` |
| 100  | `#FEF9C3` | 600  | `#CA8A04` |
| 200  | `#FEF08A` | 700  | `#A16207` |
| 300  | `#FDE047` | 800  | `#854D0E` |
| 400  | `#FACC15` | 900  | `#713F12` |
|      |           | 950  | `#422006` |

**Role mapping** — Light surfaces: text `warning-700` (600 fails AA on light), bg `warning-50`, border `warning-200`. Dark surfaces: text `warning-400`, bg `warning-950`, border `warning-800`.

### Surface & Background

The page background is **`#ffffff` (pure white)** — non-negotiable for the brand. White lets the photography, the product, and the Cultivated Green do the work. The Mist neutrals are reserved for surfaces _adjacent_ to the page: cards, recessed sections, dividers.

| Role                     | Token                       | Hex       |
| ------------------------ | --------------------------- | --------- |
| Page background          | `surface`                   | `#FFFFFF` |
| Card / elevated surface  | `surface-raised` (`neutral-50`) | `#F9FBFB` |
| Recessed / banded section| `surface-recessed` (`neutral-100`)| `#F1F3F3` |
| Interactive surface      | `neutral-100` → `neutral-200`   | `#F1F3F3` / `#E3E7E8` |
| Dark surface (testimonial / footer) | `neutral-800`     | `#22292B` |
| Deep dark / dark theme bg| `neutral-900` or `neutral-950`  | `#161B1D` / `#090B0C` |

### Neutrals & Text

The Mist palette runs the typographic hierarchy. Its faint blue-cyan lean reinforces the science backing without making the page feel clinical.

| Role               | Token         | Hex       |
| ------------------ | ------------- | --------- |
| Primary text       | `neutral-900` | `#161B1D` |
| Secondary text     | `neutral-700` | `#394447` |
| Tertiary / muted   | `neutral-500` | `#67787C` |
| Disabled text      | `neutral-400` | `#9CA8AB` |
| Text on dark surf. | `neutral-200` | `#E3E7E8` |

### Borders & Dividers

| Role                  | Token              | Hex       |
| --------------------- | ------------------ | --------- |
| Light border          | `border` (`neutral-200`) | `#E3E7E8` |
| Prominent border      | `border-strong` (`neutral-300`) | `#D0D6D8` |
| Dark theme border     | `neutral-700`      | `#394447` |
| Focus ring            | `focus-ring`       | `#3B82F6` |

### Gradient System

ActivatedYou is a gradient-light brand — most surfaces are flat. When a gradient is needed, use one of these two:

- **Botanical Wash** — `primary-50` → `#FFFFFF` (top-down). For section bands behind plant imagery.
- **Trust Bar** — `secondary-800` → `secondary-700` (left-to-right). For "Doctor-formulated" trust strips and dark testimonial bars.

Avoid multi-stop or hue-shifting gradients; they fight the calm.

## 3. Typography Rules

### Font Family

| Role     | Family                                                         |
| -------- | -------------------------------------------------------------- |
| Headline | `Roboto`, `system-ui`, `-apple-system`, sans-serif             |
| Body / UI| `Roboto`, `system-ui`, `-apple-system`, sans-serif             |
| Code     | `JetBrains Mono`, `Menlo`, `Consolas`, monospace               |

Roboto carries the entire system. The contrast in the hierarchy is built through **weight and size**, not family changes.

### Hierarchy

| Token           | Font           | Size          | Weight | Line-height | Letter-spacing | Notes                                       |
| --------------- | -------------- | ------------- | ------ | ----------- | -------------- | ------------------------------------------- |
| `display`       | Roboto         | 64px / 4rem   | 700    | 1.05        | -0.02em        | Hero on landing pages; reserved             |
| `headline-lg`   | Roboto         | 48px / 3rem   | 700    | 1.10        | -0.02em        | Top of major sections                       |
| `headline-md`   | Roboto         | 36px / 2.25rem| 700    | 1.15        | -0.01em        | Sub-section headings                        |
| `headline-sm`   | Roboto         | 24px / 1.5rem | 600    | 1.20        | 0              | Card titles, modal headers                  |
| `feature-title` | Roboto         | 20px / 1.25rem| 600    | 1.30        | 0              | Product tile names, callout titles          |
| `body-lg`       | Roboto         | 18px / 1.125rem| 400   | 1.65        | 0              | Lead paragraphs, product descriptions        |
| `body-md`       | Roboto         | 16px / 1rem   | 400    | 1.60        | 0              | Default body copy                           |
| `body-sm`       | Roboto         | 14px / 0.875rem| 400   | 1.55        | 0              | Secondary copy, helper text                 |
| `label-md`      | Roboto         | 14px / 0.875rem| 500   | 1.40        | 0              | Button text, form labels                    |
| `label-sm`      | Roboto         | 12px / 0.75rem | 500   | 1.40        | 0              | Badge text, table headers                   |
| `overline`      | Roboto         | 11px / 0.6875rem| 600  | 1.40        | 0.10em         | Eyebrow text above headlines                |
| `caption`       | Roboto         | 12px / 0.75rem | 400   | 1.40        | 0              | Image captions, footnotes                   |
| `micro`         | Roboto         | 10px / 0.625rem| 400   | 1.30        | 0              | Disclaimers, regulatory copy, fine print    |
| `code`          | JetBrains Mono | 14px / 0.875rem| 400   | 1.50        | 0              | Inline code, lab values, dosing tables      |

### Principles

1. **One typeface, earned hierarchy.** Roboto across the entire system. Contrast is built through weight (400 → 500 → 600 → 700) and size, not family changes.
2. **Tight headlines, loose body.** Display and headline-lg use negative letter-spacing (-0.02em) and tight line-height (1.05–1.15). Body copy gets a generous 1.60–1.65 line-height — important for the longer-form wellness/educational content.
3. **Overline carries the eyebrow.** Section eyebrows ("OUR SCIENCE", "INGREDIENT SPOTLIGHT") use the `overline` token with positive tracking and weight 600. This is the only place positive letter-spacing is used.
4. **Micro for regulatory.** The 10px `micro` token is reserved for FDA disclaimers, supplement-facts panels, and fine print. Never use it for product copy.
5. **Code is rare but available.** JetBrains Mono shows up in lab callouts, dosing strips, and ingredient lists — places where monospace alignment is functionally useful.

## 4. Layout Principles

### Spacing System

Standardized across all Golden Hippo brands. Use the named scale below for padding, margin, and gap.

`0px, 2px, 4px, 6px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px, 160px, 192px, 224px, 256px, 320px, 384px, 480px, 560px, 640px, 720px, 768px, 1024px, 1280px, 1440px, 1600px, 1920px`

**Common usage:**

- Component internal padding: 8–24px
- Button padding: 12px vertical, 24px horizontal (primary), 8–16px (ghost)
- Card padding: 20–32px (product tiles use 20, feature cards use 32)
- Section vertical rhythm: 64–128px between major sections; 96px is the default
- Stack gaps (small): 4–8px (label → input)
- Stack gaps (medium): 12–24px (paragraph → button)
- Stack gaps (large): 32–64px (between subsections)
- Page max-widths: 1280px for marketing, 1024px for editorial/long-form articles, 768px for legal/policy

### Grid & Container

- **Marketing pages**: 1280px max-width container, 24px horizontal gutter at lg+
- **Editorial / article pages**: 1024px max-width container, 720px reading column
- **Product detail / e-comm**: 1280px container with a 2-column split (product imagery / purchase panel) at lg, single column below
- **Section bands**: full-bleed background color with content constrained to the max-width

### Whitespace Philosophy

ActivatedYou treats whitespace as a feature, not a leftover. Sections are spaced to feel _considered_, not crammed. The premium signal here is restraint — if a layout feels tight, add 16px before you reach for more decoration.

## 5. Depth & Elevation

Standardized shadow scale used by all Golden Hippo brands.

| Token  | CSS Value                                                                | ActivatedYou Use                                                       |
| ------ | ------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| `2xs`  | `0 1px rgb(0 0 0 / 0.05)`                                                | Input borders at rest; barely-there separation                         |
| `xs`   | `0 1px 2px 0 rgb(0 0 0 / 0.05)`                                          | Resting product tiles, secondary buttons                               |
| `sm`   | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`          | Standard product cards, dropdowns                                      |
| `md`   | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`       | Hovered product tiles, sticky add-to-cart bar                          |
| `lg`   | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`     | Popovers (ingredient tooltips), floating reviews carousel              |
| `xl`   | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`    | Modals (add-to-cart confirmation, account dialogs)                     |
| `2xl`  | `0 25px 50px -12px rgb(0 0 0 / 0.25)`                                    | Reserved — hero product showcase, "shop the routine" feature blocks    |

### Shadow Philosophy

Shadows are quiet here. The brand favors **tonal separation** (neutral-50 cards on white pages) and **soft borders** (1px `neutral-200`) over heavy drop shadows. Most surfaces sit on `xs` or `sm`; `lg` and above are reserved for genuinely floating elements (modals, popovers). If a shadow is doing more work than the border alone, reach for the border first. The 2xl shadow exists for one or two hero moments per page — use sparingly.

## 6. Shapes

### Shape Language

Soft but not rounded into oblivion. The brand sits in a friendly middle: 8–20px on most components, 28px on hero feature cards, fully rounded only on badges and pills. Sharp 0px edges are reserved for system surfaces where geometry matters (tables, charts, image grids).

### Border Radius Scale

| Token        | Value   | Use Case                                                              |
| ------------ | ------- | --------------------------------------------------------------------- |
| `rounded.none`  | 0px     | Tables, charts, full-bleed image grids                              |
| `rounded.sm`    | 4px     | Inline tags, chip controls, small inputs                            |
| `rounded.md`    | 8px     | Form inputs, secondary buttons, dropdowns                           |
| `rounded.lg`    | 12px    | Primary buttons, accent buttons, default for interactive elements   |
| `rounded.xl`    | 20px    | Cards, product tiles, banded sections                               |
| `rounded.2xl`   | 28px    | Feature cards, premium callouts, hero "shop the routine" blocks     |
| `rounded.full`  | 9999px  | Badges, pills, avatars, icon-only circular buttons                  |

### Application Rules

- **Buttons** → `rounded.lg` (12px) for primary/secondary/outline/ghost/inverse and the gold scarcity CTA prose recipe; `rounded.full` for icon-only round buttons
- **Cards** → `rounded.xl` (20px) standard; `rounded.2xl` (28px) for feature/hero cards
- **Inputs** → `rounded.md` (8px) — slightly tighter than buttons to keep forms scannable
- **Badges / pills** → `rounded.full`
- **Modals & sheets** → `rounded.xl` (20px) on desktop; full-width sheets at mobile keep `rounded.xl` only on top corners
- **Images** → `rounded.xl` (20px) for editorial/product photos; `rounded.full` for circular avatars; `rounded.none` for grid mosaics

## 7. Component Stylings

### Buttons

Five canonical roles, defined in front matter. Each has uniform `-hover`, `-active`, and `-disabled` states.

| Variant       | Background                  | Text                       | Padding   | Radius              | Personality                                                          |
| ------------- | --------------------------- | -------------------------- | --------- | ------------------- | -------------------------------------------------------------------- |
| **Primary**   | `primary-500` (`#52744B`)   | `neutral-50` (`#F9FBFB`)   | 12 × 24px | `rounded.lg` (12px) | The main CTA — botanical green, confident, warm                      |
| **Secondary** | `secondary-700` (`#004777`) | `neutral-50`               | 12 × 24px | `rounded.lg`        | The credibility CTA — "Talk to a doctor", "See the science"          |
| **Outline**   | `#FFFFFF`                   | `primary-700` (`#334D2E`)  | 12 × 24px | `rounded.lg`        | Bordered green-text variant; paired with `button-primary` on a row   |
| **Ghost**     | `transparent`               | `neutral-900` (`#161B1D`)  | 10 × 16px | `rounded.lg`        | Tertiary action — "Learn more", in-card actions                      |
| **Inverse**   | `#FFFFFF`                   | `primary-700`              | 12 × 24px | `rounded.lg`        | Light treatment for use on dark hero bands / `card-inverse` surfaces |

State variants in the front matter:

- `button-primary` — hover `primary-600`; active `primary-700`; disabled `neutral-200` bg / `neutral-600` text (passes AA)
- `button-secondary` — hover `secondary-800`; active `secondary-900`; disabled `neutral-200` bg / `neutral-600` text
- `button-outline` — hover `primary-50` bg; active `primary-100` bg / `primary-800` text; disabled white bg / `neutral-400` text
- `button-ghost` — hover `neutral-100` bg; active `neutral-200` bg; disabled `neutral-400` text
- `button-inverse` — hover `primary-50` bg; active `primary-100` bg / `primary-800` text; disabled `neutral-200` bg / `neutral-500` text

All buttons default to 48px height (ghost drops to 44px to feel lighter). Use `xs` shadow on the primary button only; outline/ghost/inverse stay flat.

#### Prose recipes (brand-specific button patterns)

- **Gold scarcity CTA (premium / limited-edition).** ActivatedYou's reserved gold treatment for rare moments — "Limited Edition," "Save 20%," subscription-tier upgrades. Per CONTEXT.md ambiguity #2 ("the gold accent is a rare scarcity treatment — prose recipe, never a canonical role"), this is **not** a token. Build it as: `{colors.tertiary-300}` (`#F8A022`) background, `{colors.neutral-950}` (`#090B0C`) text (white text fails AA against gold), same shape as `button-primary` (`{rounded.lg}`, 12 × 24px, 48px height, `{typography.label-md}`). Hover steps the background to `{colors.tertiary-400}` (`#D38400`) and keeps `neutral-950` text. Active steps to `{colors.tertiary-500}` (`#A26500`) and flips text to `{colors.neutral-50}` because the background darkens past comfortable contrast for dark text. Use sparingly — once per page at most; gold loses meaning if it becomes a default.

### Cards & Containers

Four canonical roles, no state variants (clickable cards are prose recipes).

- **`card`** — `surface-raised` / `neutral-50` (`#F9FBFB`) background on a white page (visible separation), `rounded.xl` (20px), 24px padding, `xs` shadow.
- **`card-elevated`** — pure white background, `rounded.xl`, 24px padding, `sm` shadow. Use when the card sits on a tinted band where `neutral-50` would disappear into the surface.
- **`card-feature`** — `primary-50` (`#F4F8F3`) background, `rounded.2xl` (28px), 32px padding. Used for "Why ActivatedYou" benefits, ingredient spotlights, doctor-led explainers. Text is `primary-900` for AA contrast on the soft green tint.
- **`card-inverse`** — `primary-900` (`#192616`) background, `primary-50` text, `rounded.xl`, 24px padding. The deep botanical-green surface for trust strips, testimonial bands, and any dark moment that should still feel brand-anchored rather than generically dark.

#### Prose recipes (brand-specific card patterns)

- **Product tile.** White (`#FFFFFF`) background, `rounded.xl` (20px), 20px padding (tighter than `card`'s 24 to keep grids dense), `xs` shadow at rest. Square product image (1:1) at the top, then product name in `{typography.feature-title}`, price in `{typography.label-md}`, then a `button-primary` "Add to cart" stacked below. On hover, lift to `md` shadow and (if applicable) reveal a "Free Shipping" badge using the gold premium-badge prose recipe (below).
- **Doctor module.** `secondary-50` (`#F0F8FF`) background, `rounded.2xl` (28px), 32px padding — the brand's signature credibility block. Doctor headshot at `{rounded.full}`, 80px, on the left. Quote in `{typography.body-lg}` italic on the right. Signature in `{typography.headline-sm}` below the quote. Not a `card-feature` because the tint is `secondary-50` (clinical navy), not the canonical `primary-50` brand tint.

### Inputs & Forms

Five canonical states defined in front matter: `input` (base), `input-focus`, `input-disabled`, `input-error`, `input-inverse`.

- **`input`** — `#FFFFFF` background (always white, even inside `neutral-50` cards), 1px solid `neutral-300` border, `neutral-900` text, `neutral-500` placeholder, `rounded.md` (8px), 12 × 16px padding, 48px height.
- **`input-focus`** — Keeps the white background; the focus is carried by a 2px ring in `{colors.focus-ring}` (`#3B82F6`).
- **`input-disabled`** — `neutral-100` background, `neutral-600` text.
- **`input-error`** — White background, `neutral-900` text, but with a 2px solid `error-600` border and helper text in `error-600` directly below at `body-sm`.
- **`input-inverse`** — `neutral-900` background, `neutral-50` text, 1px solid `neutral-700` border. For form fields sitting inside a dark hero band or a `card-inverse` surface.

Labels use `label-md` (14px / weight 500) above the input; helper/error text uses `body-sm` (14px / 400).

### Navigation

Four canonical tokens: `nav` (the bar), `nav-link`, `nav-link-active`, `nav-inverse`.

- **`nav`** — White background, 1px `neutral-200` bottom border, 80px height on desktop, 24px horizontal padding. Logo on left, primary nav links centered or left-aligned, account + cart icons on right. Primary CTA ("Shop Now") uses `button-primary`.
- **`nav-link`** — `neutral-700` text, no background, `label-md` typography, 8 × 12px padding. Hover shifts text to `primary-700`.
- **`nav-link-active`** — `primary-700` text with a 2px `primary-500` bottom indicator. Avoid filled pill states for nav — too loud for the brand.
- **`nav-inverse`** — `primary-900` background, `primary-50` text, same 80px / 24px geometry. For dark sticky navs on long-form editorial pages. Inside `nav-inverse`, link text auto-adapts to `primary-50` (hover `primary-200`); the active indicator stays `primary-500`.

Mobile nav (`<md`) collapses to a hamburger that opens a full-screen white sheet — links stack at `headline-sm` size with 16px vertical padding, account/cart at the top of the sheet. Footer is `neutral-900` background with white text and a `micro` FDA disclaimer at the bottom.

### Badges

Six canonical role-based variants. All pill-shaped (`rounded.full`), `label-sm` typography, 4 × 10px padding.

- **`badge`** — `neutral-100` bg, `neutral-700` text. The neutral default; metadata pills, category tags, low-emphasis labels.
- **`badge-primary`** — `primary-100` bg, `primary-800` text. The high-emphasis brand label: "Bestseller," "New," "Plant-Based."
- **`badge-success`** / **`badge-warning`** / **`badge-error`** / **`badge-info`** — Standardized semantic statuses using the Tailwind green/yellow/red/blue palettes at the 100/800 tone pair.

#### Prose recipes (brand-specific badge patterns)

- **Gold premium badge.** For "Limited Edition" / "Bestseller Gold" / subscription-tier flags where the gold scarcity treatment is the point. Same pill shape as `badge`, but override background to `{colors.tertiary-100}` (`#FCE5CD`) and text to `{colors.tertiary-700}` (`#623B00`). Reserved for premium moments — don't replace `badge-primary` for general high-emphasis labels.

### Image Treatment

- Editorial/product photos: `rounded.xl` (20px) corner radius, no shadow on hero, `sm` shadow on product tiles
- Aspect ratios: 1:1 (product), 4:5 (lifestyle portrait), 16:9 (editorial banners)
- Circular avatars: `rounded.full`, optional 2px `neutral-200` border
- Image grids and full-bleed editorial: `rounded.none` — let the photograph carry the edge

### Distinctive Components

- **Trust banner** (prose recipe). `primary-900` background, `primary-50` text, sits above the footer or below the hero. Contains four short trust marks: "Doctor-Formulated", "Plant-Based", "3rd-Party Tested", "60-Day Guarantee". 12px vertical padding, `label-md` typography. Build from `card-inverse` geometry but stretch full-bleed and drop the `rounded.xl` to `rounded.none`.
- **Ingredient strip.** Horizontal scroll of pill-shaped ingredient names using `badge-primary`. Tap reveals a popover (uses `lg` shadow) with the ingredient story.

## 8. Do's and Don'ts

### Do's

1. **Do** keep the page background pure white. The brand colors only land cleanly on white.
2. **Do** use `primary-500` for the main CTA on every primary action — the green is the brand's signature.
3. **Do** reserve `tertiary-300` (gold) for moments of premium and vitality — limited editions, "save" CTAs, "bestseller" badges. It loses meaning if it's used as a default.
4. **Do** pair `secondary-700` (navy) with science/doctor content. It's the credibility color, not a generic alternate.
5. **Do** lean on `neutral-50` cards and 1px `neutral-200` borders for separation before reaching for shadows.
6. **Do** use the `overline` token for section eyebrows above headlines — it's the one place positive letter-spacing earns its keep.
7. **Do** apply `rounded.2xl` (28px) only on feature cards and hero callouts. The big radius is a moment, not a default.
8. **Do** keep `body-lg` line-height at 1.65 — the longer-form wellness content needs the breathing room.
9. **Do** show the FDA disclaimer in `micro` (10px) at the bottom of pages that mention health claims.
10. **Do** flatten state changes — hover should shift a single step in the palette (500 → 600), not introduce a new color or shadow level.

### Don'ts

1. **Don't** use the brand `primary` green for success messaging. The standardized `success-600` (Tailwind Green) is intentionally distinct so confirmations don't compete with brand moments.
2. **Don't** put white text on `tertiary-300` (gold) — contrast fails. Use `neutral-950` for text on the gold accent button.
3. **Don't** tint the page background. White is the brand's surface; `neutral-50` is for cards adjacent to the page.
4. **Don't** mix typefaces. Roboto runs the whole system; introducing a serif for "elegance" breaks the system's quiet cohesion.
5. **Don't** stack heavy shadows. If `sm` isn't enough separation, add a border or a tonal background — don't escalate to `lg`.
6. **Don't** use the warmth gradient hue-shifting across primary/secondary. Gradients should stay within a single hue family.
7. **Don't** drop letter-spacing into body copy. Negative tracking is for headlines only; body stays at 0.
8. **Don't** treat the disclaimer/micro text as a design afterthought — it's regulated content; keep it 10px, `neutral-700`, never lower contrast.
9. **Don't** apply `rounded.full` to anything larger than a 48px badge/avatar. Stadium-rounding a 200px button reads as kitsch, not premium.
10. **Don't** swap `error-600` for the brand red when something is broken — semantic palettes are universal across Golden Hippo brands and should not be re-styled.
11. **Don't** invent brand-named tokens like `button-accent`, `badge-accent`, `button-gold`, `product-tile`, or `banner-trust`. Component tokens are role-based per [CONTEXT.md](../../CONTEXT.md) Meta-rule 1 — the canonical 5 buttons (`primary`/`secondary`/`outline`/`ghost`/`inverse`), 4 cards (`card`/`elevated`/`feature`/`inverse`), 6 badges (neutral/primary/success/warning/error/info), 5 inputs, 4 nav tokens. The gold scarcity CTA, gold premium badge, product tile, doctor module, and trust banner are prose recipes in §7, not tokens.

## 9. Responsive Behavior

### Breakpoints

Standardized across all Golden Hippo brands.

| Token | Min Width | ActivatedYou Behavior                                                                                    |
| ----- | --------- | -------------------------------------------------------------------------------------------------------- |
| `sm`  | 640px     | Single column with restored padding (24px); product tiles in a 2-up grid                                 |
| `md`  | 768px     | 2-column hero (image + copy); product grid moves to 3-up; nav links visible (hamburger retires)          |
| `lg`  | 1024px    | Full nav, 4-up product grid on category pages, 2-column product detail (gallery / purchase panel)        |
| `xl`  | 1280px    | Maximum content width activates; editorial content uses 720px reading column with side margin            |
| `2xl` | 1536px    | Container holds at 1280–1440px; section padding expands to 128px for premium feel                        |

### Touch Targets

- Minimum tappable size: **44 × 44px** (Apple HIG). Buttons default to 48px height to comfortably exceed this.
- Inline links inside paragraphs get 6–8px vertical padding to ensure 44px effective tap area without breaking reading rhythm.
- Form inputs are 48px tall on all viewports.

### Collapsing Strategy

- **Nav** — Hamburger menu below `md` (768px). The full-screen sheet uses `headline-sm` link size and `body-md` for secondary items.
- **Hero** — 2-column (copy + image) at `md+`; image moves above copy at mobile, with no aspect-ratio change.
- **Product grid** — 1-up below `sm`, 2-up at `sm`, 3-up at `md`, 4-up at `lg+`.
- **Cards** — Card padding drops from 32px (feature cards) to 24px below `md`. Standard cards stay at 24px / 20px.
- **Section spacing** — 96px desktop → 64px tablet → 48px mobile.

### Image Behavior

- Hero images scale fluidly; the focal subject (typically Maggie Q or product) is composed in the central 60% to survive crops
- Product imagery uses 1:1 ratio consistently across breakpoints — no art-direction swaps
- Editorial/lifestyle banners use 16:9 at desktop, but switch to 4:5 below `sm` with a different crop sourced via `<picture>`
- All product imagery stays at `rounded.xl` (20px) regardless of size

## 10. Agent Prompt Guide

This section is the AI-coding-assistant interface for ActivatedYou. Use the token references below when generating components.

### Quick Color Reference

| Role / Token                       | Hex       |
| ---------------------------------- | --------- |
| ★ `primary-500` (Cultivated Green) | `#52744B` |
| `primary-50` (botanical wash)      | `#F4F8F3` |
| `primary-600` (primary hover)      | `#45653F` |
| `primary-700` (pressed / text)     | `#334D2E` |
| `primary-900` (trust banner bg)    | `#192616` |
| ★ `secondary-700` (Deep Atlantic)  | `#004777` |
| `secondary-50` (info tint)         | `#F0F8FF` |
| `secondary-800` (secondary hover)  | `#163550` |
| ★ `tertiary-300` (Golden Hour)     | `#F8A022` |
| `tertiary-50` (premium tint)       | `#FFF5EB` |
| `tertiary-400` (gold scarcity hover) | `#D38400` |
| `surface` (page background)        | `#FFFFFF` |
| `surface-raised` / `neutral-50`    | `#F9FBFB` |
| `neutral-100` (recessed surface)   | `#F1F3F3` |
| `neutral-200` (border)             | `#E3E7E8` |
| `neutral-700` (secondary text)     | `#394447` |
| `neutral-900` (primary text)       | `#161B1D` |
| `focus-ring`                       | `#3B82F6` |

### Token Reference Cheat Sheet

- Components reference colors as `{colors.primary-500}` — never as raw hex
- Components reference radii as `{rounded.lg}` (12px), `{rounded.xl}` (20px), `{rounded.2xl}` (28px)
- Components reference typography as `{typography.label-md}`, `{typography.body-md}`, etc.
- The front matter is the authoritative source for any value — when in doubt, check the YAML
- State variants are separate components with `-hover`, `-active`, `-disabled` suffixes

### Example Component Prompts

1. **Primary CTA button**: "Build the `button-primary` component spec — `{colors.primary-500}` background, `{colors.neutral-50}` text, `{rounded.lg}` corners, 12 × 24px padding, 48px height. On hover swap to `{colors.primary-600}`."
2. **Product tile** (prose recipe — not a token): "Build the §7 'product tile' prose recipe — `#FFFFFF` background, `{rounded.xl}` corners, 20px padding, `xs` shadow at rest. Include a square product image (1:1), `{typography.feature-title}` for the name, `{typography.label-md}` for price, and a `button-primary` 'Add to cart' button. On hover lift to `md` shadow."
3. **Doctor module** (prose recipe — not a token): "Build the §7 'doctor module' prose recipe — `{colors.secondary-50}` background, `{rounded.2xl}` corners, 32px padding. Place a 80px `{rounded.full}` portrait on the left, a quote in `{typography.body-lg}` italic on the right, and the doctor's name/title in `{typography.headline-sm}` below the quote."
4. **Feature card**: "Build a feature/benefit card using `card-feature` — `{colors.primary-50}` background, `{colors.primary-900}` text, `{rounded.2xl}` corners, 32px padding. Eyebrow uses `{typography.overline}`, title uses `{typography.headline-sm}`, body uses `{typography.body-md}`."
5. **Gold scarcity CTA** (prose recipe — not a token): "Build the §7 'gold scarcity CTA' prose recipe for a 'Limited Edition' button — `{colors.tertiary-300}` background, `{colors.neutral-950}` text (white fails AA on gold), `{rounded.lg}` corners, 12 × 24px padding, 48px height, `{typography.label-md}`. On hover swap to `{colors.tertiary-400}` keeping `neutral-950` text; on active swap to `{colors.tertiary-500}` and flip text to `{colors.neutral-50}`. Use sparingly — at most once per page."
6. **Dark trust band**: "Build the §7 'trust banner' prose recipe — `card-inverse` geometry but full-bleed with `{rounded.none}`. `{colors.primary-900}` background, `{colors.primary-50}` text, four trust marks ('Doctor-Formulated', 'Plant-Based', '3rd-Party Tested', '60-Day Guarantee') in `{typography.label-md}`, 12px vertical padding. Inside, use `button-inverse` for any embedded CTA so it reads correctly on the dark surface."
7. **Sticky top nav**: "Build the top nav using the `nav` token — `#FFFFFF` background, 1px `{colors.neutral-200}` bottom border, 80px height, 24px horizontal padding, sticky to viewport top. Logo on left; centered links use `nav-link` (`{typography.label-md}` in `{colors.neutral-700}`, hover shifts text to `{colors.primary-700}`). The current-page link uses `nav-link-active` (`{colors.primary-700}` text with a 2px `{colors.primary-500}` bottom indicator). Below `md` (768px), collapse to a hamburger opening a full-screen white sheet with `headline-sm` link sizing."

### Iteration Guide

1. **Default to white pages.** The page background is `#FFFFFF`. Don't tint it without a strong reason.
2. **Primary green for the main CTA, navy for credibility, gold for premium.** Don't mix the roles — each color has a meaning.
3. **Reach for borders before shadows.** A 1px `{colors.neutral-200}` border separates surfaces just as well as a drop shadow, and it's quieter.
4. **One typeface, three weights.** Roboto 400 for body, 500 for labels/buttons, 600–700 for headlines. Don't add a serif.
5. **Rounded.lg is the default radius for interactive elements; rounded.xl for cards; rounded.2xl for hero/feature blocks.** Don't apply `rounded.full` to anything larger than a 48px control.
6. **State changes shift one step in the palette.** `primary-500` → `primary-600` on hover, `primary-700` on active. Don't introduce new hues for state.
7. **Reference tokens, never hex.** If you find yourself typing `#52744B` into a component, replace it with `{colors.primary-500}`.
