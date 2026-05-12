---
version: alpha
name: Gundry MD
description: A clinical-luxury wellness brand sitting at the intersection of medical authority and approachable vitality — deep cobalt trust, electric lime energy, and warm coral humanity, with editorial serif headlines over crisp geometric sans UI.
colors:
  # Brand — Primary: Gundry Blue (anchor at 600)
  primary-50: "#F3F7FF"
  primary-100: "#E0E9FF"
  primary-200: "#C2D4FF"
  primary-300: "#9DB8FF"
  primary-400: "#6B91FF"
  primary-500: "#4569DF"
  primary-600: "#2945B8"
  primary-700: "#233B92"
  primary-800: "#1A2C6A"
  primary-900: "#101D49"
  primary-950: "#060D27"

  # Brand — Secondary: Vitality Lime (anchor at 400)
  secondary-50: "#F4F9E8"
  secondary-100: "#E5EFCB"
  secondary-200: "#CBDF8E"
  secondary-300: "#AEC947"
  secondary-400: "#C2E329"
  secondary-500: "#6B7F00"
  secondary-600: "#536300"
  secondary-700: "#3F4C00"
  secondary-800: "#2E3800"
  secondary-900: "#1E2500"
  secondary-950: "#0D1200"

  # Brand — Tertiary: Coral Bloom (anchor at 300)
  tertiary-50: "#FFF4F1"
  tertiary-100: "#FDE3DB"
  tertiary-200: "#FCC6B5"
  tertiary-300: "#FFA082"
  tertiary-400: "#D57E62"
  tertiary-500: "#AF583C"
  tertiary-600: "#8F3F26"
  tertiary-700: "#6F2F1A"
  tertiary-800: "#512415"
  tertiary-900: "#37170D"
  tertiary-950: "#1C0904"

  # Neutral — Tailwind Gray
  neutral-50: "#F9FAFB"
  neutral-100: "#F3F4F6"
  neutral-200: "#E5E7EB"
  neutral-300: "#D1D5DB"
  neutral-400: "#9CA3AF"
  neutral-500: "#6B7280"
  neutral-600: "#4B5563"
  neutral-700: "#374151"
  neutral-800: "#1F2937"
  neutral-900: "#111827"
  neutral-950: "#030712"

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
  secondary: "{colors.secondary-400}"
  tertiary: "{colors.tertiary-300}"
  surface: "#FFFFFF"
  on-surface: "{colors.neutral-900}"
  border: "{colors.neutral-200}"
  focus-ring: "#3B82F6"

typography:
  display:
    fontFamily: "Lora, Georgia, 'Times New Roman', serif"
    fontSize: 3.5rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: "Lora, Georgia, 'Times New Roman', serif"
    fontSize: 2.5rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.015em
  headline-md:
    fontFamily: "Lora, Georgia, 'Times New Roman', serif"
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: "Lora, Georgia, 'Times New Roman', serif"
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.005em
  headline-xs:
    fontFamily: "Lora, Georgia, 'Times New Roman', serif"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.35
  feature-title:
    fontFamily: "'Red Hat Text', Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.4
  body-lg:
    fontFamily: "'Red Hat Text', Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: "'Red Hat Text', Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'Red Hat Text', Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "'Red Hat Text', Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0.01em
  label-md:
    fontFamily: "'Red Hat Text', Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 0.8125rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.04em
  button-label:
    fontFamily: "'Red Hat Text', Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 0.9375rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.06em
  overline:
    fontFamily: "'Red Hat Text', Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 0.6875rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.1em
  micro:
    fontFamily: "'Red Hat Text', Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 0.625rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.05em
  code:
    fontFamily: "Menlo, Consolas, 'Courier New', monospace"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.6

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
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
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.primary-500}"
    textColor: "{colors.white}"
  button-primary-active:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.white}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-200}"
    textColor: "{colors.primary-800}"

  button-secondary:
    backgroundColor: "{colors.secondary-400}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 44px
  button-secondary-hover:
    backgroundColor: "{colors.secondary-300}"
    textColor: "{colors.neutral-900}"
  button-secondary-active:
    backgroundColor: "{colors.secondary-600}"
    textColor: "{colors.white}"

  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-600}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 44px
  button-light-hover:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-700}"

  button-dark:
    backgroundColor: "{colors.neutral-900}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 44px
  button-dark-hover:
    backgroundColor: "{colors.neutral-800}"
    textColor: "{colors.white}"

  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-600}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: 12px 28px
    height: 44px
  button-outline-hover:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-700}"

  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-feature:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-dark:
    backgroundColor: "{colors.primary-600}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: 32px

  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: 12px 20px
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
    rounded: "{rounded.lg}"
    padding: 12px 20px

  navigation:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-700}"
    typography: "{typography.label-md}"
    padding: 16px 48px
    height: 64px

  badge:
    backgroundColor: "{colors.secondary-100}"
    textColor: "{colors.secondary-700}"
    typography: "{typography.overline}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  badge-primary:
    backgroundColor: "{colors.primary-100}"
    textColor: "{colors.primary-800}"
    typography: "{typography.overline}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  badge-coral:
    backgroundColor: "{colors.tertiary-100}"
    textColor: "{colors.tertiary-700}"
    typography: "{typography.overline}"
    rounded: "{rounded.full}"
    padding: 4px 12px

  trust-bar:
    backgroundColor: "{colors.primary-600}"
    textColor: "{colors.white}"
    typography: "{typography.label-md}"
    padding: 16px 48px

  modal:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Gundry MD

## 1. Visual Theme & Atmosphere

Gundry MD occupies a distinctive space in health and wellness: the intersection of clinical authority and approachable vitality. The visual language must communicate that Dr. Gundry is a world-renowned cardiothoracic surgeon and NYT-bestselling author — someone whose recommendations carry the weight of decades of medical research — while simultaneously feeling modern, energetic, and accessible to the everyday consumer looking to improve their gut health. This is not a cold medical brand. It's a brand that says, "the science is rigorous, and the results feel good."

The palette anchors itself in **Gundry Blue** (`#2945B8`), a deep, saturated blue that reads as both trustworthy and bold — less corporate navy, more confident cobalt. It's the color of conviction. Against it, **Vitality Lime** (`#C2E329`) erupts with electric energy — a color that feels alive, healthy, and unapologetically modern. It's the visual equivalent of that gut-health glow. **Coral Bloom** (`#FFA082`) rounds out the triad as a warm, human counterpoint — soft enough for supportive messaging, vibrant enough to catch the eye on a product card or promotional banner. Together, these three colors create a system that can flex between authoritative editorial content and high-energy ecommerce conversion moments.

Typography reinforces the duality: **Lora** brings a refined, editorial gravity to headings — it's a serif that whispers "published author" and "peer-reviewed" without screaming "old institution." **Red Hat Text** handles the body and UI work with geometric clarity and excellent screen legibility. The pairing feels like a well-designed health magazine: credible at the top, clean and scannable in the details. All buttons are pill-shaped (`rounded.full` / `9999px`), giving every call-to-action a smooth, approachable, and distinctly modern feel — like a supplement capsule, fitting for the brand.

**Key Characteristics:**

- Deep blue foundation establishes medical credibility and trust
- Electric lime injects energy and signals vitality/results
- Soft coral provides warmth and humanizes clinical authority
- Serif headings (Lora) convey editorial weight and expertise
- Geometric sans body (Red Hat Text) keeps UI crisp and scannable
- Pill-shaped buttons and inputs feel modern, approachable, and on-brand
- Clean layouts with bold color accents — minimal but never boring
- The system flexes between clinical authority (deep blue + serif) and conversion energy (lime + coral + bold CTAs)

## 2. Color Palette & Roles

Each brand color is expanded into a full 11-step perceptually balanced palette (generated in OKLCH color space). The user-defined hex value is marked with ★ at its natural weight. Use the default weight for primary usage; reach into lighter steps for backgrounds, tints, and hover states, and darker steps for text-on-brand, pressed states, and dark theme accents.

### Primary — Gundry Blue

The trust anchor. Primary CTAs, navigation, hero backgrounds, and anywhere the brand needs to assert authority. Anchor lives at step 600 — the user's brand hex sits in the mid-deep range, with the lighter steps reserved for atmospheric tints and the darker steps for pressed states and dark-theme surfaces.

| Step  | Token         | Hex       | Usage Guidance                                                  |
| ----- | ------------- | --------- | --------------------------------------------------------------- |
| 50    | `primary-50`  | `#F3F7FF` | Blue-tinted page backgrounds, selected row highlights           |
| 100   | `primary-100` | `#E0E9FF` | Info banners on brand, light card tints, tag backgrounds        |
| 200   | `primary-200` | `#C2D4FF` | Hover backgrounds for ghost buttons, active sidebar items       |
| 300   | `primary-300` | `#9DB8FF` | Focus rings (brand alternative), progress bar tracks            |
| 400   | `primary-400` | `#6B91FF` | Secondary links, icon accents, chart secondary series           |
| 500   | `primary-500` | `#4569DF` | Hover state for primary buttons, active nav links               |
| 600 ★ | `primary-600` | `#2945B8` | **Default — primary buttons, nav bar, hero backgrounds, links** |
| 700   | `primary-700` | `#233B92` | Pressed/active state for primary buttons, dark-theme CTA        |
| 800   | `primary-800` | `#1A2C6A` | Text on light blue backgrounds (50–200), dark header bars       |
| 900   | `primary-900` | `#101D49` | Deep dark overlays, footer backgrounds (alternative to gray)    |
| 950   | `primary-950` | `#060D27` | Near-black with blue undertone — dark theme body background     |

### Secondary — Vitality Lime

The energy spark. Secondary CTAs, badges, promotional highlights, success-feel "results" messaging. Anchor lives at step 400 — the brand lime sits at the bright, high-chroma end of the scale; steps 500–950 darken into rich olive territory suitable for high-contrast text and dark-theme accents.

| Step  | Token           | Hex       | Usage Guidance                                                         |
| ----- | --------------- | --------- | ---------------------------------------------------------------------- |
| 50    | `secondary-50`  | `#F4F9E8` | Subtle success/promo section backgrounds                               |
| 100   | `secondary-100` | `#E5EFCB` | Badge backgrounds, callout card tints, sale banners                    |
| 200   | `secondary-200` | `#CBDF8E` | Soft lime tint — hover backgrounds, light tag fills                    |
| 300   | `secondary-300` | `#AEC947` | Hover state for lime buttons, active toggle fills                      |
| 400 ★ | `secondary-400` | `#C2E329` | **Default — secondary buttons, promotional highlights, badges, icons** |
| 500   | `secondary-500` | `#6B7F00` | Text on lime-50/100 backgrounds, dark-theme lime accents               |
| 600   | `secondary-600` | `#536300` | High-contrast lime text on light surfaces, pressed lime-button bg      |
| 700   | `secondary-700` | `#3F4C00` | Lime-on-white body text (passes WCAG AA at this step)                  |
| 800   | `secondary-800` | `#2E3800` | Deep olive — dark theme badge backgrounds                              |
| 900   | `secondary-900` | `#1E2500` | Near-black olive — dark theme section backgrounds                      |
| 950   | `secondary-950` | `#0D1200` | Darkest olive-black — rarely used, extreme contrast contexts           |

### Tertiary — Coral Bloom

The warm accent. Tertiary actions, illustrative elements, testimonial highlights, and softening clinical content. Anchor lives at step 300 — the brand coral is naturally a soft warm tint, with lighter steps for atmospheric backgrounds and darker steps for terracotta text and dark-theme warm accents.

| Step  | Token          | Hex       | Usage Guidance                                                      |
| ----- | -------------- | --------- | ------------------------------------------------------------------- |
| 50    | `tertiary-50`  | `#FFF4F1` | Warm section backgrounds, testimonial card tints                    |
| 100   | `tertiary-100` | `#FDE3DB` | Quote block backgrounds, soft alert banners                         |
| 200   | `tertiary-200` | `#FCC6B5` | Hover tint for coral elements, illustration fills                   |
| 300 ★ | `tertiary-300` | `#FFA082` | **Default — quote borders, accent illustrations, tertiary buttons** |
| 400   | `tertiary-400` | `#D57E62` | Hover/active state for coral elements                               |
| 500   | `tertiary-500` | `#AF583C` | Coral text on light backgrounds (50–100), icon color on white       |
| 600   | `tertiary-600` | `#8F3F26` | High-contrast coral text, dark-theme coral accent                   |
| 700   | `tertiary-700` | `#6F2F1A` | Deep terracotta — dark theme warm accents                           |
| 800   | `tertiary-800` | `#512415` | Dark warm surface, footer accent on dark backgrounds                |
| 900   | `tertiary-900` | `#37170D` | Near-black warm — dark theme deep background alternative            |
| 950   | `tertiary-950` | `#1C0904` | Darkest warm black — extreme contrast contexts                      |

### Secondary & Accent (Semantic — Standardized)

These semantic palettes are standardized across all Paravel Labs brands. They handle system-level feedback and should never be replaced by brand colors for error, success, warning, or info states.

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

The selected Tailwind Gray palette provides the structural neutrals. Gundry MD's surfaces stay near-white with the occasional blue-tinted band for editorial breathing room.

| Role                        | Token                  | Hex       |
| --------------------------- | ---------------------- | --------- |
| Page background             | `{colors.white}`       | `#FFFFFF` |
| Card / elevated surface     | `{colors.white}`       | `#FFFFFF` |
| Blue-tinted section band    | `{colors.primary-50}`  | `#F3F7FF` |
| Warm-tinted section band    | `{colors.tertiary-50}` | `#FFF4F1` |
| Interactive surface (hover) | `{colors.neutral-200}` | `#E5E7EB` |
| Dark surface                | `{colors.neutral-800}` | `#1F2937` |
| Deep dark / dark theme bg   | `{colors.neutral-900}` | `#111827` |
| Darkest (footers, overlays) | `{colors.neutral-950}` | `#030712` |

### Neutrals & Text

Tailwind Gray, mapped to the typographic hierarchy.

| Role                          | Token                  | Hex       |
| ----------------------------- | ---------------------- | --------- |
| Primary text (light surfaces) | `{colors.neutral-900}` | `#111827` |
| Secondary text                | `{colors.neutral-600}` | `#4B5563` |
| Tertiary / muted text         | `{colors.neutral-500}` | `#6B7280` |
| Disabled text                 | `{colors.neutral-400}` | `#9CA3AF` |
| Text on dark surfaces         | `{colors.neutral-200}` | `#E5E7EB` |
| Inverse-emphasis text on dark | `{colors.neutral-50}`  | `#F9FAFB` |

### Borders & Dividers

| Role                   | Token                  | Hex       |
| ---------------------- | ---------------------- | --------- |
| Light border (default) | `{colors.neutral-200}` | `#E5E7EB` |
| Prominent border       | `{colors.neutral-300}` | `#D1D5DB` |
| Dark theme border      | `{colors.neutral-700}` | `#374151` |
| Focus ring shadow      | `{colors.info-500}`    | `#3B82F6` |

### Gradient System

Gundry MD uses gradients sparingly — the system's energy comes from solid color blocks, not blends. Two restrained patterns exist:

- **Hero darken overlay** — a vertical gradient from `transparent` to `rgba(16, 29, 73, 0.55)` (primary-900 at 55%) for darkening the bottom of full-bleed hero photography to ensure headline legibility on top of imagery.
- **Vitality wash** — a soft horizontal gradient from `secondary-50` (`#F4F9E8`) to `tertiary-50` (`#FFF4F1`) for promo section backgrounds where lime energy meets coral warmth. Use sparingly; never on cards.

No vibrant gradient buttons, no mesh backgrounds, no color-blend hero washes.

## 3. Typography Rules

The serif/sans pairing is the system's most defining choice. Lora carries every headline; Red Hat Text handles everything else. Serifs declare, sans-serifs explain — the brand reads as editorial at the top, scannable in the details.

### Font Families

| Role             | Family       | Fallback Stack                                                         |
| ---------------- | ------------ | ---------------------------------------------------------------------- |
| Headline (serif) | Lora         | `Lora, Georgia, 'Times New Roman', serif`                              |
| Body / UI (sans) | Red Hat Text | `'Red Hat Text', Inter, -apple-system, BlinkMacSystemFont, sans-serif` |
| Code (mono)      | System Mono  | `Menlo, Consolas, 'Courier New', monospace`                            |

### Hierarchy

| Token           | Font         | Size (px / rem)  | Weight | Line-height | Letter-spacing | Notes                                                          |
| --------------- | ------------ | ---------------- | ------ | ----------- | -------------- | -------------------------------------------------------------- |
| `display`       | Lora         | 56 / 3.5rem      | 600    | 1.1         | -0.02em        | Homepage hero, landing page headlines. Maximum impact.         |
| `headline-lg`   | Lora         | 40 / 2.5rem      | 600    | 1.2         | -0.015em       | Major page sections, collection headers.                       |
| `headline-md`   | Lora         | 32 / 2rem        | 600    | 1.25        | -0.01em        | Product feature blocks, editorial section intros.              |
| `headline-sm`   | Lora         | 24 / 1.5rem      | 600    | 1.3         | -0.005em       | Card titles, sidebar headers.                                  |
| `headline-xs`   | Lora         | 20 / 1.25rem     | 600    | 1.35        | —              | Sub-section headers, FAQ questions.                            |
| `feature-title` | Red Hat Text | 18 / 1.125rem    | 600    | 1.4         | —              | Feature callouts, benefit lists, tab labels.                   |
| `body-lg`       | Red Hat Text | 18 / 1.125rem    | 400    | 1.65        | —              | Long-form editorial, Dr. Gundry's articles.                    |
| `body-md`       | Red Hat Text | 16 / 1rem        | 400    | 1.6         | —              | Default paragraph text, product descriptions.                  |
| `body-sm`       | Red Hat Text | 14 / 0.875rem    | 400    | 1.55        | —              | Secondary descriptions, supplementary info.                    |
| `caption`       | Red Hat Text | 13 / 0.8125rem   | 400    | 1.45        | 0.01em         | Image captions, timestamps, meta info.                         |
| `label-md`      | Red Hat Text | 13 / 0.8125rem   | 600    | 1.3         | 0.04em         | Form labels, badge text, navigation items.                     |
| `button-label`  | Red Hat Text | 15 / 0.9375rem   | 600    | 1.2         | 0.06em         | All button text. Always uppercase via `text-transform`.        |
| `overline`      | Red Hat Text | 11 / 0.6875rem   | 700    | 1.2         | 0.1em          | Category tags, section identifiers. Always uppercase.          |
| `micro`         | Red Hat Text | 10 / 0.625rem    | 500    | 1.2         | 0.05em         | Legal text, footnotes, smallest disclaimers.                   |
| `code`          | System Mono  | 14 / 0.875rem    | 400    | 1.6         | —              | Ingredient codes, supplement facts, technical specs.           |

### Principles

1. **Lora owns the hierarchy, Red Hat Text owns the interface.** Every heading from `display` down to `headline-xs` is set in Lora. Everything else — body, labels, captions, buttons — is Red Hat Text. Never mix this. The serif/sans split is what gives the brand its editorial-meets-modern tension.

2. **Weight is deliberate.** Lora uses 600 (semi-bold) exclusively — it provides enough presence at large sizes without the heaviness of bold. Red Hat Text ranges from 400 (body) to 600 (labels, feature titles, buttons) to 700 (overlines). Never use 300/light weights — Gundry MD is a brand of conviction, not whispers.

3. **Line heights loosen as text gets smaller.** Display (1.1) is tight and punchy. Body (1.6) is open and readable. This creates a natural visual rhythm where headlines feel impactful and paragraphs feel comfortable for long-form health content.

4. **Letter spacing tightens for large sizes, opens for small.** Display pulls letters together (-0.02em) for density. Overlines and buttons push them apart (0.06–0.1em) for scannability. Body text sits at 0 — no adjustment needed at standard sizes.

5. **Uppercase is reserved for two contexts.** Button labels (`button-label`) and overline text (`overline`) are set in all-caps — buttons for CTA punch, overlines for structural hierarchy. Headlines and navigation are sentence case or title case. Outside of those two contexts, avoid capitalization.

## 4. Layout Principles

Gundry MD leans generous with whitespace — the brand sells premium health products, and the page should breathe like a well-designed magazine, not a cluttered marketplace.

### Spacing System

The standardized Paravel Labs scale, used for all padding, margin, gap, and size values:

`0px, 2px, 4px, 6px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px, 160px, 192px, 224px, 256px, 320px, 384px, 480px, 560px, 640px, 720px, 768px, 1024px, 1280px, 1440px, 1600px, 1920px`

**Common usage patterns for this brand:**

| Use case                            | Value                          |
| ----------------------------------- | ------------------------------ |
| Button padding                      | 12px vertical / 28px horizontal |
| Card padding                        | 24px (standard), 32px (featured) |
| Input padding                       | 12px vertical / 20px horizontal |
| Stack gaps (tight — icon + label)   | 6px–8px                        |
| Stack gaps (standard — form fields) | 16px                           |
| Stack gaps (loose — card grids)     | 24px–32px                      |
| Section vertical spacing            | 80px–128px                     |
| Page max-width (content)            | 1280px                         |
| Page max-width (narrow / editorial) | 768px                          |

### Grid & Container

| Property     | Value                                                         |
| ------------ | ------------------------------------------------------------- |
| Max width    | 1280px (standard), 768px (editorial/blog)                     |
| Side padding | 24px (mobile), 32px (tablet), 48px (desktop)                  |
| Product grid | 4 columns (desktop), 2 columns (tablet), 1–2 columns (mobile) |
| Column gap   | 24px                                                          |
| Row gap      | 32px                                                          |

### Whitespace Philosophy

Sections are separated by 80px–128px of vertical space, giving each content block room to land before the next begins. Within sections, spacing is tighter and more purposeful (16px–32px), keeping related content grouped. The net effect: each scroll feels intentional, not overwhelming.

## 5. Depth & Elevation

The standardized Paravel Labs shadow scale, with brand-specific application guidance. Gundry MD uses shadow conservatively — the brand's clean, minimal aesthetic means most surfaces sit flat or at the `sm` level, just enough depth to define boundaries without creating visual noise.

| Token | Value                                                                 | Gundry MD Usage                                                                        |
| ----- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `2xs` | `0 1px rgb(0 0 0 / 0.05)`                                             | Input resting state, subtle card edges on white-on-white layouts.                      |
| `xs`  | `0 1px 2px 0 rgb(0 0 0 / 0.05)`                                       | Resting buttons, secondary cards, product thumbnails.                                  |
| `sm`  | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`       | Primary cards at rest, navigation bar on scroll, dropdown menus. The workhorse shadow. |
| `md`  | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`    | Hovered product cards, active dropdowns, expanded accordions.                          |
| `lg`  | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`  | Floating cart preview, popovers, sticky "Add to Cart" bar.                             |
| `xl`  | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Modals, full-screen overlays, mobile nav drawer.                                       |
| `2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)`                                 | Hero product showcase, "As Seen On" feature blocks. Reserved for maximum drama.        |

**Shadow Philosophy.** The primary interaction pattern is `sm → md` on hover, giving product cards a gentle lift that feels responsive without being theatrical. Shadows at `lg` and above are reserved for overlays, modals, and floating UI elements that genuinely sit above the page. The `2xl` shadow is a special weapon — used only for hero product images or featured content blocks where a single element needs to command the entire viewport. When in doubt, use less shadow. The brand's boldness comes from color and typography, not from depth.

## 6. Shapes

**Shape Language:** Mixed — pill-shaped interactive controls inside an otherwise architectural geometry. Buttons, inputs, search bars, and badges all live at `rounded.full` (9999px), giving every CTA the smooth supplement-capsule silhouette that's become Gundry MD's signature interactive shape. Cards, modals, and image containers stay in the moderate 8px–16px range to keep the editorial composure intact.

### Border Radius Scale

| Token          | Value    | Use Case                                                                          |
| -------------- | -------- | --------------------------------------------------------------------------------- |
| `rounded.none` | `0px`    | Divider lines, full-bleed sections.                                               |
| `rounded.sm`   | `4px`    | Badges (when not pill-shaped), small tags, inline code.                           |
| `rounded.md`   | `8px`    | Product images, thumbnails, small containers.                                     |
| `rounded.lg`   | `12px`   | Cards, textareas, modals, dropdowns.                                              |
| `rounded.xl`   | `16px`   | Hero images (contained), featured sections.                                       |
| `rounded.full` | `9999px` | **All buttons, inputs, search bars, badges, avatars, circular icon buttons.**     |

### Application Rules

- **Buttons** → `rounded.full` (pill). Non-negotiable across every variant.
- **Inputs** → `rounded.full` (pill) for single-line inputs; `rounded.lg` (12px) for textareas (which can't be pill-shaped).
- **Cards** → `rounded.lg` (12px). Default for all card variants.
- **Product image containers within cards** → `rounded.md` (8px) — slightly less than the parent card, per visual nesting.
- **Hero images** → `rounded.xl` (16px) for contained heroes; full-bleed otherwise.
- **Modals & dropdowns** → `rounded.lg` (12px).
- **Badges/Tags** → `rounded.full` (pill) for in-product badges, `rounded.sm` (4px) for inline tags in dense data contexts.
- **Avatars / Dr. Gundry portrait** → `rounded.full` (50% / circle) for testimonial contexts, `rounded.lg` (12px) for editorial crops.

## 7. Component Stylings

Every component below is mirrored in the front matter `components` block using token references. The prose specs are the human-readable explanation; the YAML is the contract.

### Buttons

Five variants. All share `rounded.full` (pill) corners, `button-label` typography (Red Hat Text 15px / weight 600 / 0.06em tracking / **uppercase via `text-transform: uppercase`**), 44px height, and 12px × 28px padding. The pill shape is non-negotiable.

| Variant            | Background                         | Text                             | Hover Background                | Active Background                | Personality                                                                  |
| ------------------ | ---------------------------------- | -------------------------------- | ------------------------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| `button-primary`   | `{colors.primary-600}` `#2945B8`   | `{colors.white}` `#FFFFFF`       | `{colors.primary-500}` `#4569DF` | `{colors.primary-700}` `#233B92` | The confident CTA — "Add to Cart," "Subscribe," "Shop Now."                  |
| `button-secondary` | `{colors.secondary-400}` `#C2E329` | `{colors.neutral-900}` `#111827` | `{colors.secondary-300}` `#AEC947` | `{colors.secondary-600}` `#536300` (white text) | The energetic push — "Learn More," "See Results," promotional actions.       |
| `button-light`     | `{colors.white}` `#FFFFFF`         | `{colors.primary-600}` `#2945B8` | `{colors.primary-50}` `#F3F7FF` | —                                | For use on dark or colored backgrounds. Border: 1px solid `{colors.neutral-200}`. |
| `button-dark`      | `{colors.neutral-900}` `#111827`   | `{colors.white}` `#FFFFFF`       | `{colors.neutral-800}` `#1F2937` | —                                | Footer CTAs, dark-section actions.                                           |
| `button-outline`   | `transparent`                      | `{colors.primary-600}` `#2945B8` | `{colors.primary-50}` `#F3F7FF` | —                                | Minimal emphasis — filters, toggles, secondary navigation. Border: 1.5px solid `{colors.primary-600}`. |

Disabled state: `button-primary-disabled` uses `primary-200` background with `primary-800` text — readable but unmistakably inactive.

**Icon buttons** use the same pill shape. When icon-only, apply equal padding (12px) for a circular result.

### Cards & Containers

| Variant         | Background                         | Text                             | Padding | Radius          | Border / Shadow                                       |
| --------------- | ---------------------------------- | -------------------------------- | ------- | --------------- | ----------------------------------------------------- |
| `card`          | `{colors.white}` `#FFFFFF`         | `{colors.neutral-900}` `#111827` | 24px    | `rounded.lg`    | `1px solid {colors.neutral-200}` + shadow `sm`        |
| `card-feature`  | `{colors.white}` `#FFFFFF`         | `{colors.neutral-900}` `#111827` | 32px    | `rounded.lg`    | `1px solid {colors.neutral-200}` + shadow `sm`        |
| `card-dark`     | `{colors.primary-600}` `#2945B8`   | `{colors.white}` `#FFFFFF`       | 32px    | `rounded.lg`    | None — tonal separation from the page background      |

Cards in dark contexts (`bg: {colors.neutral-800}`) swap their border to `{colors.neutral-700}` (`#374151`).

**Product cards** get a subtle hover lift: `translateY(-2px)` + shadow transition to `md`. Product image containers within a card use `rounded.md` (8px) — slightly less than the card itself.

### Inputs & Forms

| Spec           | Value                                          |
| -------------- | ---------------------------------------------- |
| Background     | `{colors.white}` `#FFFFFF`                     |
| Text           | `{colors.neutral-900}` `#111827`               |
| Placeholder    | `{colors.neutral-400}` `#9CA3AF`               |
| Border         | `1px solid {colors.neutral-300}` (`#D1D5DB`)   |
| Border (focus) | `2px solid {colors.primary-600}` (`#2945B8`)   |
| Focus ring     | `0 0 0 3px rgba(41, 69, 184, 0.15)`            |
| Radius         | `rounded.full` (9999px) — pill, matches buttons |
| Padding        | 12px × 20px                                    |
| Height         | 48px                                           |
| Typography     | `body-md` (Red Hat Text 16px)                  |

Pill-shaped inputs match the button system for visual consistency. For textareas (which can't be pill-shaped), use `rounded.lg` (12px) to match card radius. Disabled inputs use `neutral-100` background with `neutral-600` text. Error inputs add a `2px solid {colors.error-600}` border with `error-600` helper text below.

### Navigation

| Property       | Value                                                              |
| -------------- | ------------------------------------------------------------------ |
| Background     | `{colors.white}` `#FFFFFF`                                         |
| Border bottom  | `1px solid {colors.neutral-200}` (`#E5E7EB`)                       |
| Height         | 64px (desktop), 56px (mobile)                                      |
| Logo placement | Left-aligned                                                       |
| Nav links      | `label-md` typography (Red Hat Text 13px / 600 / +0.04em), `{colors.neutral-700}` resting |
| Active link    | `{colors.primary-600}` (`#2945B8`)                                 |
| Hover          | `{colors.primary-600}` (`#2945B8`)                                 |
| CTA button     | `button-primary`, right-aligned                                    |
| Mobile         | Hamburger menu, full-screen overlay on `{colors.neutral-900}` bg   |

Sticky on scroll. On scroll past 8px, apply shadow `sm` to the nav bar for subtle depth.

### Image Treatment

| Property            | Value                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Product images      | `rounded.md` (8px), no shadow, contained within card                                                    |
| Hero images         | Full-bleed or `rounded.xl` (16px) for contained heroes                                                  |
| Thumbnails          | `rounded.md` (8px), `1px solid {colors.neutral-200}` border                                             |
| Dr. Gundry portrait | `rounded.full` (50% / circle) for testimonial/authority contexts, `rounded.lg` (12px) for editorial    |
| Aspect ratios       | Product: 1:1 or 4:5. Hero: 16:9 or 3:1. Editorial: 3:2.                                                 |

### Distinctive Components

**Trust Badge Bar** (`trust-bar`). A horizontal strip (typically below the hero or above the footer) with a `{colors.primary-600}` (`#2945B8`) background displaying trust signals — "90-Day Money Back Guarantee," "Doctor Formulated," "GMP Certified." Text in white, `label-md` typography, uppercase. Icons in `{colors.secondary-400}` (`#C2E329`) for contrast.

**Supplement Facts Card.** A specialized card with a `{colors.neutral-50}` (`#F9FAFB`) background, `1px solid {colors.neutral-300}` border, and a `{colors.primary-600}` header strip. Typography uses Red Hat Text throughout with tabular number alignment. This card intentionally looks more clinical than the rest of the UI to reinforce ingredient transparency.

**Dr. Gundry Quote Block.** A blockquote with a 4px left border in `{colors.tertiary-300}` (`#FFA082`), Lora italic at 20px / weight 600 for the quote text, and `body-sm` weight 500 for the attribution. Background: transparent or `{colors.neutral-50}`.

**Badge** variants:
- `badge` — `{colors.secondary-100}` bg with `{colors.secondary-700}` text. "Promo," "Save."
- `badge-primary` — `{colors.primary-100}` bg with `{colors.primary-800}` text. "Bestseller," "New."
- `badge-coral` — `{colors.tertiary-100}` bg with `{colors.tertiary-700}` text. "Limited," "Featured."

All badge variants use `rounded.full` and `overline` typography.

## 8. Do's and Don'ts

### Do

1. **Do** use Gundry Blue (`{colors.primary-600}`) as the dominant CTA color on every page — consistency builds trust across the buying journey.
2. **Do** pair Lora headings with Red Hat Text body copy in every layout — the serif/sans tension is the brand's typographic signature.
3. **Do** use Vitality Lime (`{colors.secondary-400}`) to draw attention to results, benefits, and promotional offers — it's the "good news" color.
4. **Do** maintain generous whitespace between sections (80px–128px) — the premium feel comes from letting content breathe.
5. **Do** use pill-shaped (`rounded.full`) buttons and inputs for every interactive element — buttons, inputs, search bars, filter toggles.
6. **Do** use Dr. Gundry's name and image as an authority anchor — circular portraits (`rounded.full`) in testimonial contexts, editorial crops (`rounded.lg`) in long-form content.
7. **Do** keep product photography clean and on white/neutral backgrounds — the color system provides enough energy without busy imagery.
8. **Do** use the Trust Badge Bar pattern on high-conversion pages — the blue strip with lime icons is a distinctive Gundry MD element.
9. **Do** use Coral Bloom (`{colors.tertiary-300}`) sparingly — it's most effective as an accent for quotes, illustrations, and warm supportive messaging.

### Don't

1. **Don't** use Vitality Lime (`{colors.secondary-400}`) for body text — it fails WCAG contrast on light backgrounds. Reserve it for backgrounds, badges, and icons. For lime text on white, use `secondary-700` or darker.
2. **Don't** mix Lora into body paragraphs or UI elements — Lora is strictly for headings and pull quotes.
3. **Don't** use square or slightly rounded buttons (`rounded.sm`–`rounded.md`) — the pill shape is a system-wide commitment, not a suggestion.
4. **Don't** place Coral Bloom on dark backgrounds without testing contrast — at `{colors.tertiary-300}`, it can wash out against `neutral-800/900`.
5. **Don't** stack more than two brand colors in a single component — pick one dominant, one accent. Three brand colors in one card is a circus.
6. **Don't** use shadows heavier than `sm` for standard cards and containers — heavy shadows undermine the clean, minimal aesthetic.
7. **Don't** set type smaller than 13px (`caption`) for any user-facing text (excluding legal/footnotes via `micro`) — health content demands readability.
8. **Don't** use uppercase on headings or body text — only the `button-label` and `overline` tokens get all-caps treatment. The brand speaks with calm confidence everywhere except its CTAs.
9. **Don't** allow product grids to exceed 4 columns — denser grids reduce each product's visual impact and hurt conversion.
10. **Don't** replace semantic error/success/warning colors with brand colors — a lime "success" message or coral "error" creates confusion.

## 9. Responsive Behavior

### Breakpoints

| Token | Min Width | Gundry MD Behavior                                                                                                                                         |
| ----- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sm`  | 640px     | Product grid shifts from 1 to 2 columns. Hero headline drops from `display` to `headline-lg`. Side padding increases to 24px.                              |
| `md`  | 768px     | Two-column layouts activate for product + description. Navigation shows full link set. Editorial content centered at 768px max-width.                      |
| `lg`  | 1024px    | Full desktop nav with CTA button. Product grid goes to 3–4 columns. Hero sections use full `display` typography. Trust Badge Bar goes single-row horizontal. |
| `xl`  | 1280px    | Maximum content width reached. Product grid locks at 4 columns with 24px gaps. Section spacing reaches full 128px.                                         |
| `2xl` | 1536px    | Content remains at 1280px max-width, centered. Extra space becomes margin. Hero images may expand beyond content width for cinematic effect.               |

### Touch Targets

| Element            | Minimum Size                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| Buttons            | 44px height minimum (pill shape with 12px vertical padding + 15px text comfortably exceeds)   |
| Nav links (mobile) | 48px tap target height                                                                         |
| Form inputs        | 48px height                                                                                    |
| Icon buttons       | 44px × 44px                                                                                    |
| Checkbox / radio   | 24px visual, 44px tap area                                                                     |

### Collapsing Strategy

| Component        | Desktop (`lg`+)                                  | Tablet (`md`)           | Mobile (<`md`)                      |
| ---------------- | ------------------------------------------------ | ----------------------- | ----------------------------------- |
| Navigation       | Horizontal links + CTA button                    | Hamburger with dropdown | Hamburger with full-screen overlay  |
| Product grid     | 4 columns                                        | 2 columns               | 1–2 columns (stacked)               |
| Hero             | Large image + text side-by-side                  | Stacked (image on top)  | Stacked, reduced text sizes         |
| Cards            | Horizontal (image left, text right) for featured | Vertical stack          | Vertical stack, full-width          |
| Section spacing  | 128px                                            | 96px                    | 64px                                |
| Supplement Facts | Side panel or tab                                | Accordion below product | Accordion, full-width               |
| Trust Badge Bar  | Single horizontal row                            | 2-row grid              | Vertical stack or horizontal scroll |

### Image Behavior

| Context          | Behavior                                                                                                         |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| Product images   | Maintain 1:1 or 4:5 aspect ratio at all sizes. Use `object-fit: contain` on white background.                    |
| Hero images      | 16:9 on desktop, crop to 4:3 or 1:1 on mobile. Art-direct: ensure Dr. Gundry's face or product is never cropped. |
| Thumbnails       | Fixed size per breakpoint: 80px (mobile), 96px (tablet), 120px (desktop).                                        |
| Editorial images | 3:2 default, full-width on mobile, contained (max 768px) on desktop.                                             |

## 10. Agent Prompt Guide

This section equips AI coding tools (Claude, Cursor, GitHub Copilot, etc.) to implement Gundry MD components correctly. Reference token names, not raw hex values — the front matter is the authoritative source.

### Quick Color Reference

| Token             | Hex       | Note                                                          |
| ----------------- | --------- | ------------------------------------------------------------- |
| `primary-50`      | `#F3F7FF` | Blue-tinted backgrounds, selected states                      |
| `primary-100`     | `#E0E9FF` | Light card tints, tag backgrounds                             |
| `primary-500`     | `#4569DF` | Primary button hover state                                    |
| `primary-600` ★   | `#2945B8` | **Anchor — primary CTAs, nav, hero backgrounds, links**       |
| `primary-700`     | `#233B92` | Primary button pressed/active state                           |
| `primary-800`     | `#1A2C6A` | Text on blue-tinted backgrounds                               |
| `secondary-100`   | `#E5EFCB` | Badge/callout backgrounds, sale banners                       |
| `secondary-300`   | `#AEC947` | Lime button hover state                                       |
| `secondary-400` ★ | `#C2E329` | **Anchor — secondary CTAs, badges, promotions, icons**        |
| `secondary-600`   | `#536300` | Pressed state for lime buttons (white text); lime text on white |
| `tertiary-50`     | `#FFF4F1` | Warm section backgrounds, testimonial tints                   |
| `tertiary-300` ★  | `#FFA082` | **Anchor — quote borders, accent illustrations, tertiary CTAs** |
| `tertiary-500`    | `#AF583C` | Coral text on white backgrounds                               |
| `white`           | `#FFFFFF` | Page background, card surface                                 |
| `neutral-200`     | `#E5E7EB` | Default border / hairline                                     |
| `neutral-500`     | `#6B7280` | Tertiary / muted text, placeholders                           |
| `neutral-600`     | `#4B5563` | Secondary text                                                |
| `neutral-900`     | `#111827` | Primary text on light surfaces; dark surface bg              |
| `info-500`        | `#3B82F6` | Focus ring (always)                                           |

### Token Reference Cheat Sheet

- All component definitions reference tokens via `{colors.primary-600}`, `{rounded.full}`, `{typography.body-md}`. Never hardcode hex values in component specs.
- The front matter YAML block is the **authoritative source** for any token-level value. If the prose disagrees with the YAML, the YAML wins.
- State variants follow the `-hover`, `-active`, `-disabled` suffix convention as separate component entries (`button-primary` and `button-primary-hover` are sibling definitions).
- Brand color anchors: primary at **600**, secondary at **400**, tertiary at **300**. The user's original hex values live at these specific steps.

### Example Component Prompts

1. **"Build a primary CTA using the `button-primary` spec — `{colors.primary-600}` background, `{colors.white}` text, `{rounded.full}` (pill, 9999px) corners, 12px × 28px padding, 44px height, `{typography.button-label}` (Red Hat Text 15px / weight 600 / +0.06em tracking / `text-transform: uppercase`). Hover state shifts background to `{colors.primary-500}`. Active state shifts to `{colors.primary-700}`. Resting shadow `xs`; hover shadow `sm`."**

2. **"Build a hero section. Background `{colors.primary-600}` with `{colors.white}` text. Headline uses `{typography.display}` (Lora 56px / weight 600 / -0.02em). Subheadline uses `{typography.body-lg}` in `{colors.neutral-200}`, max-width 560px. CTA uses the `button-secondary` spec — `{colors.secondary-400}` background with `{colors.neutral-900}` text. Max content width 1280px, centered, 48px side padding."**

3. **"Build a trust bar matching the `trust-bar` spec. Full-width horizontal bar with `{colors.primary-600}` background. Content centered, max-width 1280px, flex row with 32px gap. Each badge has an icon in `{colors.secondary-400}` (24px) and text in `{colors.white}` using `{typography.label-md}` (Red Hat Text 13px / weight 600 / uppercase / +0.04em). On mobile, stack vertically with 16px gap."**

4. **"Build a newsletter form. Section background `{colors.neutral-50}`, 80px vertical padding. Heading uses `{typography.headline-md}` (Lora 32px / 600) in `{colors.neutral-900}`. Description uses `{typography.body-md}` in `{colors.neutral-600}`. Email input matches the `input` spec — `{colors.white}` background, 1px solid `{colors.neutral-300}` border, `{rounded.full}` (pill) corners, 12px × 20px padding, 48px height, `{typography.body-md}`. On focus, swap border to 2px solid `{colors.primary-600}` and add `0 0 0 3px rgba(41, 69, 184, 0.15)` ring. Submit uses `button-primary`."**

5. **"Build a Dr. Gundry quote block. 4px left border in `{colors.tertiary-300}` (`#FFA082`), 24px left padding. Quote text in Lora italic 20px / weight 600, `{colors.neutral-900}`, line-height 1.5. Attribution below in `{typography.body-sm}` weight 500, `{colors.neutral-600}`. Optional circular portrait (48px, `{rounded.full}`) to the left of the attribution."**

### Iteration Guide

1. **Reference tokens, not raw hex.** When asking an agent to build or modify a component, always say `{colors.primary-600}` rather than `#2945B8`. The token name carries semantic meaning the hex doesn't.
2. **Always specify `{rounded.full}` for interactive elements.** Buttons, inputs, search bars, badges — if you forget, you'll get the AI's default radius. The pill shape is a system-wide commitment.
3. **Name the typography token.** Say `{typography.display}` or `{typography.button-label}` — don't say "the brand serif" or "the UI font." Token names map deterministically to font, size, weight, and tracking.
4. **Specify state variants explicitly.** AI tools often skip hover and focus states. Always reference the relevant `-hover` / `-active` / `-disabled` component entries when building interactive elements.
5. **Quote spacing values from the standardized scale.** Don't say "generous padding" — say "24px padding" or "32px gap." The full scale lives in the YAML `spacing` block.
6. **For new components not in this spec, derive from existing tokens.** Don't introduce new color tokens, new radii, or new typography sizes. If a component genuinely needs something the system doesn't have, escalate to design — don't let an agent silently expand the scale.
7. **The YAML front matter is the contract.** When an agent's output disagrees with the prose specs, the front matter YAML wins. Engineers can copy the YAML's component definitions directly into a Tailwind theme config or DTCG `tokens.json`.
