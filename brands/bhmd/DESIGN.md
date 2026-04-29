---
version: alpha
name: Beverly Hills MD
description: A clinical-luxury skincare brand whose visual language reads like a Vogue spread — deep ink navy, blush silk, and editorial restraint over clinical chest-thumping.
colors:
  # Brand — Primary: Midnight Ink (anchor at 800)
  primary-50: "#F4F7FC"
  primary-100: "#E4EAF4"
  primary-200: "#C9D5EC"
  primary-300: "#AABBDC"
  primary-400: "#8599BE"
  primary-500: "#61749A"
  primary-600: "#495B7D"
  primary-700: "#374560"
  primary-800: "#233354"
  primary-900: "#1B222F"
  primary-950: "#0B0F18"

  # Brand — Secondary: Blush Silk (anchor at 300)
  secondary-50: "#FDF5F3"
  secondary-100: "#F6E5E2"
  secondary-200: "#EFCBC4"
  secondary-300: "#EAAB9F"
  secondary-400: "#C1887D"
  secondary-500: "#9C6359"
  secondary-600: "#7F4B41"
  secondary-700: "#623831"
  secondary-800: "#482A24"
  secondary-900: "#301B17"
  secondary-950: "#180C09"

  # Brand — Tertiary: Atelier Mist (anchor at 50)
  tertiary-50: "#EDF5F8"
  tertiary-100: "#E8EAEA"
  tertiary-200: "#D1D5D7"
  tertiary-300: "#B6BCBE"
  tertiary-400: "#939A9C"
  tertiary-500: "#6F7678"
  tertiary-600: "#565C5E"
  tertiary-700: "#414648"
  tertiary-800: "#303335"
  tertiary-900: "#1F2223"
  tertiary-950: "#0E1010"

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
  primary: "{colors.primary-800}"
  secondary: "{colors.secondary-300}"
  tertiary: "{colors.tertiary-50}"
  surface: "#FFFFFF"
  on-surface: "{colors.neutral-900}"
  border: "{colors.neutral-200}"
  focus-ring: "#3B82F6"

typography:
  display:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 5rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 3.5rem
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.015em
  headline-md:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 2.5rem
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 1.875rem
    fontWeight: 500
    lineHeight: 1.2
  feature-title:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 1.5rem
    fontWeight: 500
    lineHeight: 1.25
  body-lg:
    fontFamily: "'Libre Franklin', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: "'Libre Franklin', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "'Libre Franklin', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.55
  body-serif:
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.005em
  label-md:
    fontFamily: "'Libre Franklin', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.02em
  label-sm:
    fontFamily: "'Libre Franklin', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.04em
  caption:
    fontFamily: "'Libre Franklin', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.01em
  overline:
    fontFamily: "'Libre Franklin', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.16em
  micro:
    fontFamily: "'Libre Franklin', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 0.625rem
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0.04em
  code:
    fontFamily: "Menlo, Consolas, 'Courier New', monospace"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.55

rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 6px
  xl: 8px
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
    backgroundColor: "{colors.primary-800}"
    textColor: "{colors.neutral-50}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 14px 32px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.primary-900}"
    textColor: "{colors.neutral-50}"
  button-primary-active:
    backgroundColor: "{colors.primary-950}"
    textColor: "{colors.neutral-50}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-200}"
    textColor: "{colors.primary-700}"

  button-secondary:
    backgroundColor: "{colors.secondary-300}"
    textColor: "{colors.secondary-900}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 14px 32px
    height: 48px
  button-secondary-hover:
    backgroundColor: "{colors.secondary-400}"
    textColor: "{colors.secondary-950}"
  button-secondary-active:
    backgroundColor: "{colors.secondary-500}"
    textColor: "{colors.neutral-50}"

  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-800}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 14px 32px
    height: 48px
  button-light-hover:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.primary-900}"

  button-dark:
    backgroundColor: "{colors.neutral-900}"
    textColor: "{colors.neutral-50}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 14px 32px
    height: 48px
  button-dark-hover:
    backgroundColor: "{colors.neutral-950}"
    textColor: "{colors.neutral-50}"

  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-800}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 14px 32px
    height: 48px
  button-outline-hover:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-900}"

  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.md}"
    padding: 32px

  card-feature:
    backgroundColor: "{colors.tertiary-50}"
    textColor: "{colors.primary-800}"
    rounded: "{rounded.md}"
    padding: 48px

  card-dark:
    backgroundColor: "{colors.primary-800}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.md}"
    padding: 48px

  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 14px 16px
    height: 48px
  input-focus:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
  input-disabled:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-600}"

  navigation:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-800}"
    typography: "{typography.label-md}"
    padding: 24px 48px
    height: 80px

  badge:
    backgroundColor: "{colors.secondary-100}"
    textColor: "{colors.secondary-900}"
    typography: "{typography.overline}"
    rounded: "{rounded.full}"
    padding: 6px 12px

  badge-primary:
    backgroundColor: "{colors.primary-100}"
    textColor: "{colors.primary-900}"
    typography: "{typography.overline}"
    rounded: "{rounded.full}"
    padding: 6px 12px

  modal:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.md}"
    padding: 48px
---

# Beverly Hills MD

## 1. Visual Theme & Atmosphere

Beverly Hills MD inhabits the intersection of clinical authority and editorial luxury. The visual language draws from high-end fashion magazines and prestige skincare advertising — think full-bleed photography, generous whitespace, and typography that whispers rather than shouts. Every pixel should feel like it belongs on the glossy pages of _Vogue_ or _Harper's Bazaar_, not in a sterile medical catalog.

The palette is built around a single declarative move: deep navy ink (`#233354`) sets the entire atmosphere, paired against a warm blush silk (`#EAAB9F`) that introduces skin-toned warmth without softening the brand's authority. A whisper of icy mist (`#EDF5F8`) provides atmospheric backgrounds — never bright, never clinical, always luminous. There is no primary-color punch here. The brand commits to restraint.

Layouts breathe. Sections sit on whitespace that would feel indulgent anywhere else — and that indulgence is the point. Photography is the editorial subject; UI is the chrome around it. Type pairs Playfair Display's high-contrast romantic serifs with Libre Franklin's quiet, modern grotesque, the same logic _T Magazine_ and editorial e-commerce houses use online: serifs declare, sans-serifs explain. Containers stay tight (2–6px radii) while interactive controls — buttons, badges — use full pill shapes, a deliberate softening note inside the otherwise architectural geometry. Shadows stay barely-there, and the entire system avoids any signal that reads as "tech," "SaaS," or "drugstore wellness."

**Key Characteristics:**

- Editorial restraint — full-bleed imagery, oversized headline serifs, oceanic whitespace
- Magazine pacing — sections feel like magazine spreads, not product modules
- Quiet luxury color discipline — deep navy, blush, mist, gray; no high-saturation accents
- Mixed shape language — tight architectural radii on containers (2–6px), pill-shaped buttons and badges (`rounded.full`)
- Typographic drama through scale and contrast, not weight
- Clinical authority signaled through composition, never through hospital-blue or doctor-coat-white motifs
- Product photography as the visual hero — UI serves the image
- Shadow-averse — depth comes from tonal layering and borders, not lift

## 2. Color Palette & Roles

### Primary — Midnight Ink

The brand's anchoring authority. A deep, almost-black navy that does the work of "luxury" without ever shouting. Used sparingly at full strength on hero CTAs, mastheads, footers, and dark editorial moments. Anchor lives at step 800 — meaning the brand color sits in the deep range of the scale, with the lighter steps reserved for soft tints, atmospheric backgrounds, and on-tint text.

| Step  | Token         | Hex       | Usage Guidance                                                                                                                       |
| ----- | ------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 50    | `primary-50`  | `#F4F7FC` | Coolest tinted background — section bands, hover surfaces for ghost elements                                                         |
| 100   | `primary-100` | `#E4EAF4` | Light card tints, banner fills, badge backgrounds                                                                                    |
| 200   | `primary-200` | `#C9D5EC` | Soft tinted dividers, decorative accents                                                                                             |
| 300   | `primary-300` | `#AABBDC` | Disabled-state text on light tints, illustration accents                                                                             |
| 400   | `primary-400` | `#8599BE` | Mid-tone — quiet links, secondary icon strokes                                                                                       |
| 500   | `primary-500` | `#61749A` | Hover-state text on tinted surfaces, supporting copy on dark photography                                                             |
| 600   | `primary-600` | `#495B7D` | Border emphasis on dark surfaces, secondary nav text                                                                                 |
| 700   | `primary-700` | `#374560` | Hover state for primary CTA when 800 is the resting state — wait, no: use 900 for hover (deeper). 700 is for soft secondary headers. |
| 800 ★ | `primary-800` | `#233354` | **Default — primary CTAs, brand mastheads, hero backgrounds, footer surfaces. The brand's anchoring color.**                         |
| 900   | `primary-900` | `#1B222F` | Pressed/active state for primary buttons, deep editorial overlays                                                                    |
| 950   | `primary-950` | `#0B0F18` | Near-black with navy undertone — dark theme backgrounds, deepest overlays                                                            |

### Secondary — Blush Silk

Warm peach, the romantic foil to the navy. This is the color of skin, of cosmetics, of an _Architectural Digest_ throw pillow. It carries the brand's femininity and its prestige-skincare DNA. Anchor at step 300 — the brand hex is naturally a soft tint, so the lighter steps stay nearly invisible while the deeper steps deepen into rich rose-browns suitable for text on blush surfaces.

| Step  | Token           | Hex       | Usage Guidance                                                                                                               |
| ----- | --------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 50    | `secondary-50`  | `#FDF5F3` | Whisper-soft background for editorial sections, full-bleed romance moments                                                   |
| 100   | `secondary-100` | `#F6E5E2` | Badge backgrounds, soft tinted bands, blush card tints                                                                       |
| 200   | `secondary-200` | `#EFCBC4` | Hover background for blush ghost elements, decorative accents                                                                |
| 300 ★ | `secondary-300` | `#EAAB9F` | **Default — accent buttons, hover highlights, decorative chrome, illustrative blush moments. The brand's secondary anchor.** |
| 400   | `secondary-400` | `#C1887D` | Hover state for secondary buttons, mid-tone illustration accents                                                             |
| 500   | `secondary-500` | `#9C6359` | Pressed state for secondary buttons, text on light blush tints                                                               |
| 600   | `secondary-600` | `#7F4B41` | Deep accent — used sparingly, on blush-200/300 backgrounds                                                                   |
| 700   | `secondary-700` | `#623831` | Editorial body text on blush-50 backgrounds                                                                                  |
| 800   | `secondary-800` | `#482A24` | Strong text on blush-100 surfaces                                                                                            |
| 900   | `secondary-900` | `#301B17` | Hero text on blush-300 backgrounds, secondary button text                                                                    |
| 950   | `secondary-950` | `#180C09` | Near-black with warm undertone — rare; used only for dramatic blush-on-dark moments                                          |

### Tertiary — Atelier Mist

A cool, atmospheric near-white with the faintest hint of icy blue. The brand's "second neutral" — used for full-bleed background sections, gallery-style cards, and any moment that needs to read as luminous and aspirational without being literally white. Anchor at step 50 — the original hex IS the lightest tint, with the scale darkening into atmospheric, cool-leaning grays.

| Step | Token          | Hex       | Usage Guidance                                                                                                          |
| ---- | -------------- | --------- | ----------------------------------------------------------------------------------------------------------------------- |
| 50 ★ | `tertiary-50`  | `#EDF5F8` | **Default — full-bleed background sections, gallery cards, atmospheric editorial bands. The brand's atmospheric tint.** |
| 100  | `tertiary-100` | `#E8EAEA` | Light card tints, hover surfaces for ghost elements on white                                                            |
| 200  | `tertiary-200` | `#D1D5D7` | Subtle dividers, secondary borders on mist surfaces                                                                     |
| 300  | `tertiary-300` | `#B6BCBE` | Disabled-state UI on mist backgrounds, illustration mid-tones                                                           |
| 400  | `tertiary-400` | `#939A9C` | Caption text on mist backgrounds, secondary icon strokes                                                                |
| 500  | `tertiary-500` | `#6F7678` | Mid-tone body text alternative for mist sections                                                                        |
| 600  | `tertiary-600` | `#565C5E` | Strong secondary text on mist-50 surfaces                                                                               |
| 700  | `tertiary-700` | `#414648` | Body text on mist-100 surfaces                                                                                          |
| 800  | `tertiary-800` | `#303335` | Heading text on mist surfaces, dark editorial accents                                                                   |
| 900  | `tertiary-900` | `#1F2223` | Near-black with atmospheric undertone — text on light mist photography                                                  |
| 950  | `tertiary-950` | `#0E1010` | Deepest atmospheric dark — dark theme background alternative to neutral-950                                             |

### Secondary & Accent (Semantic — Standardized)

All Golden Hippo brands ship with the same semantic palettes. Used sparingly here — Beverly Hills MD's editorial restraint means errors and confirmations should not feel jarringly utility-toned against the navy/blush palette. Use the lightest tints for surfaces, the 600/700 steps for text, and let them stay quiet.

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

The selected Tailwind Gray palette provides the structural neutrals. Beverly Hills MD's editorial discipline means surfaces stay near-white or near-black with tonal variation, never mid-tone gray.

| Role                      | Token                   | Hex       |
| ------------------------- | ----------------------- | --------- |
| Page background           | `{colors.white}`        | `#FFFFFF` |
| Elevated surface (cards)  | `{colors.white}`        | `#FFFFFF` |
| Editorial section band    | `{colors.tertiary-50}`  | `#EDF5F8` |
| Romantic section band     | `{colors.secondary-50}` | `#FDF5F3` |
| Dark surface              | `{colors.primary-800}`  | `#233354` |
| Deep dark / dark theme bg | `{colors.neutral-950}`  | `#030712` |

### Neutrals & Text

Tailwind Gray, mapped to the typographic hierarchy.

| Role                          | Token                  | Hex       |
| ----------------------------- | ---------------------- | --------- |
| Primary text (light surfaces) | `{colors.neutral-900}` | `#111827` |
| Secondary text                | `{colors.neutral-700}` | `#374151` |
| Tertiary / muted text         | `{colors.neutral-500}` | `#6B7280` |
| Disabled text                 | `{colors.neutral-400}` | `#9CA3AF` |
| Text on dark surfaces         | `{colors.neutral-100}` | `#F3F4F6` |
| Inverse-emphasis text on dark | `{colors.neutral-50}`  | `#F9FAFB` |

### Borders & Dividers

| Role                              | Token                  | Hex       |
| --------------------------------- | ---------------------- | --------- |
| Light border (default)            | `{colors.neutral-200}` | `#E5E7EB` |
| Prominent border                  | `{colors.neutral-300}` | `#D1D5DB` |
| Editorial hairline (on tinted bg) | `{colors.primary-200}` | `#C9D5EC` |
| Dark theme border                 | `{colors.neutral-800}` | `#1F2937` |
| Focus ring shadow                 | `{colors.info-500}`    | `#3B82F6` |

### Gradient System

Beverly Hills MD is largely **gradient-free**. The editorial discipline rejects the digital-era gradient as a SaaS tell. Two restrained exceptions exist:

- **Atmospheric overlay** — a vertical gradient from `transparent` to `rgba(35, 51, 84, 0.6)` (primary-800 at 60%) for darkening the bottom of full-bleed product photography to ensure text legibility.
- **Romantic wash** — a soft horizontal gradient from `secondary-50` (`#FDF5F3`) to `tertiary-50` (`#EDF5F8`) for full-bleed editorial section backgrounds. Used sparingly, never on cards.

No vibrant gradients, no diagonal wash overlays, no color-mesh backgrounds.

## 3. Typography Rules

The serif/sans pairing is the system's most defining choice. Playfair Display's high-contrast moderns carry every editorial moment — display, headlines, feature titles, and one body-serif treatment for editorial pull-quotes. Libre Franklin handles everything else: body copy, labels, captions, UI chrome. The contrast between the two is doing all the work: serifs declare, sans-serifs explain.

**Font Families:**

| Role             | Family           | Fallback Stack                                     |
| ---------------- | ---------------- | -------------------------------------------------- |
| Headline (serif) | Playfair Display | `Georgia, 'Times New Roman', serif`                |
| Body / UI (sans) | Libre Franklin   | `system-ui, -apple-system, 'Segoe UI', sans-serif` |
| Code (mono)      | Menlo, Consolas  | `'Courier New', monospace`                         |

**Hierarchy:**

| Token           | Font           | Size (px / rem) | Weight | Line-height | Letter-spacing | Notes                                                     |
| --------------- | -------------- | --------------- | ------ | ----------- | -------------- | --------------------------------------------------------- |
| `display`       | Playfair       | 80 / 5rem       | 500    | 1.05        | -0.02em        | Hero mastheads. Use sparingly — one per page max.         |
| `headline-lg`   | Playfair       | 56 / 3.5rem     | 500    | 1.1         | -0.015em       | Section openers. Magazine-spread scale.                   |
| `headline-md`   | Playfair       | 40 / 2.5rem     | 500    | 1.15        | -0.01em        | Standard subheads, feature headlines.                     |
| `headline-sm`   | Playfair       | 30 / 1.875rem   | 500    | 1.2         | —              | Small headings, card titles.                              |
| `feature-title` | Playfair       | 24 / 1.5rem     | 500    | 1.25        | —              | Editorial card titles, feature callouts.                  |
| `body-lg`       | Libre Franklin | 18 / 1.125rem   | 400    | 1.7         | —              | Hero body, opening paragraphs. Generous leading.          |
| `body-md`       | Libre Franklin | 16 / 1rem       | 400    | 1.65        | —              | Standard body. Default for prose blocks.                  |
| `body-sm`       | Libre Franklin | 14 / 0.875rem   | 400    | 1.55        | —              | Secondary text, metadata, dense UI.                       |
| `body-serif`    | Playfair       | 18 / 1.125rem   | 400    | 1.7         | 0.005em        | Editorial pull-quotes, romantic copy moments. Use rarely. |
| `label-md`      | Libre Franklin | 14 / 0.875rem   | 500    | 1.4         | 0.02em         | Buttons, navigation links, form labels.                   |
| `label-sm`      | Libre Franklin | 12 / 0.75rem    | 500    | 1.4         | 0.04em         | Compact buttons, tag labels.                              |
| `caption`       | Libre Franklin | 12 / 0.75rem    | 400    | 1.5         | 0.01em         | Image captions, supporting metadata.                      |
| `overline`      | Libre Franklin | 11 / 0.6875rem  | 500    | 1.3         | 0.16em         | Eyebrow text, category labels — ALWAYS UPPERCASE.         |
| `micro`         | Libre Franklin | 10 / 0.625rem   | 400    | 1.3         | 0.04em         | Legal text, footnotes, regulatory disclosures.            |
| `code`          | Menlo          | 14 / 0.875rem   | 400    | 1.55        | —              | Inline code, technical references.                        |

**Principles:**

1. **Weight stays restrained.** Playfair Display ships at weight 500 across the headline scale — never 700 or 800. Editorial typography earns drama through scale and contrast, not bold weight. The serif's natural high-contrast strokes carry the visual interest.
2. **Line-height runs generous.** Body copy at 1.65–1.7. This is _Vogue_ online leading — readable, paced, never cramped. Tight line-heights signal SaaS dashboards; generous line-heights signal editorial luxury.
3. **Letter-spacing is intentional, not default.** Display and headline serifs use slight negative tracking (-0.01 to -0.02em) to compact the optical rhythm at large sizes. Overlines and small labels use wide positive tracking (0.04–0.16em) for refinement and breathing room.
4. **Serif vs. sans is structural, not decorative.** Playfair declares (every heading, every editorial moment). Libre Franklin explains (every paragraph, every UI element). Don't mix them within a single role — UI labels never go serif, paragraph text never goes Playfair (except the rare pull-quote via `body-serif`).
5. **Overline text is always uppercase.** The `overline` token's wide tracking is calibrated for caps. Lowercase overlines look careless; uppercase overlines look intentional.

## 4. Layout Principles

Beverly Hills MD's layout philosophy is _magazine pacing_. Each section gets the breathing room of an editorial spread. Density is the enemy.

### Spacing System

The standardized Golden Hippo scale, used for all padding, margin, gap, and size values:

`0px, 2px, 4px, 6px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px, 160px, 192px, 224px, 256px, 320px, 384px, 480px, 560px, 640px, 720px, 768px, 1024px, 1280px, 1440px, 1600px, 1920px`

**Common usage patterns for this brand:**

| Use case                       | Spacing                                                                   |
| ------------------------------ | ------------------------------------------------------------------------- |
| Component internal padding     | 8px–24px                                                                  |
| Button padding                 | 14px vertical / 32px horizontal — wider than default for editorial weight |
| Card padding                   | 32px–48px — generous, magazine-margin feel                                |
| Section vertical spacing       | 96px–160px on desktop, 64px on mobile                                     |
| Editorial hero section spacing | 128px–192px — never less                                                  |
| Stack gaps (small)             | 4px–8px                                                                   |
| Stack gaps (medium)            | 16px–24px                                                                 |
| Stack gaps (large)             | 48px–80px                                                                 |
| Page max-widths                | 1280px (default), 1440px (full-bleed editorial), 768px (long-form prose)  |

### Grid & Container

Default content max-width is **1280px** with 48px horizontal gutters at desktop. Long-form editorial content (about pages, founder stories) drops to **768px max-width** for optimal reading line-length. Full-bleed photographic sections break the container entirely and run edge-to-edge of viewport.

The grid is **12-column with 24px gutters** at desktop. Most layouts use simple 1, 2, or 3-column splits — avoid asymmetric grids that read as digital/contemporary. The brand's editorial DNA prefers symmetric compositions with generous white margins.

### Whitespace Philosophy

Whitespace is not negative space — it _is_ the design. Sections should feel under-populated by SaaS standards. If a layout looks "empty," it's probably right. The whitespace is the luxury signal; cramming it with content destroys the aesthetic immediately.

## 5. Depth & Elevation

Beverly Hills MD is a **shadow-averse** brand. The editorial luxury aesthetic rejects floaty cards, soft drop shadows, and SaaS-style elevation. Depth comes from **tonal layering** (mist on white, navy on blush) and **hairline borders**, not from lift.

The standardized Golden Hippo shadow scale exists in the system for the rare cases that need it (modals, popovers, dropdowns):

| Token | Value                                                                 | Use                                                                         |
| ----- | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `2xs` | `0 1px rgb(0 0 0 / 0.05)`                                             | Card hairlines — preferred over visible borders for the lightest separation |
| `xs`  | `0 1px 2px 0 rgb(0 0 0 / 0.05)`                                       | Resting state for elevated cards (used sparingly)                           |
| `sm`  | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`       | Dropdowns, hover state for cards                                            |
| `md`  | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`    | Active dropdowns, popovers — **upper limit for everyday UI**                |
| `lg`  | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`  | Floating toolbars (rare)                                                    |
| `xl`  | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Modals, command palettes                                                    |
| `2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)`                                 | Avoided — too dramatic for the brand voice                                  |

**Shadow Philosophy:** Default to `none`. Reach for `2xs` or `xs` for the rare card that genuinely needs separation from its background. Stop at `md` for everyday UI. The `lg` and above tokens are reserved for layered overlays (modals, popovers) where depth is functional, not decorative. The `2xl` token effectively does not exist for this brand — it reads too contemporary, too "lifestyle app."

When separation is needed without shadow, prefer:

1. **Tonal contrast** — card on a tinted background (`tertiary-50` or `secondary-50` panel against the white page background).
2. **Hairline borders** — `1px solid {colors.neutral-200}` is the editorial-restraint solution.
3. **Generous spacing** — letting whitespace do the visual separation work shadows usually do.

## 6. Shapes

**Shape Language:** Mixed — sharp and architectural for containers, fully rounded for interactive controls. Cards, inputs, modals, and editorial frames stay tight (2–6px range) to preserve the magazine-column gravity. Buttons and badges break that rule entirely with `rounded.full` pill shapes, introducing a softer, more approachable interactive language inside the otherwise architectural system.

### Border Radius Scale

| Token          | Value    | Use Case                                                                                                         |
| -------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `rounded.none` | `0px`    | Editorial image frames, full-bleed sections, dividers — anywhere "magazine" needs to read literally.             |
| `rounded.sm`   | `2px`    | Inputs, form controls, hairline-edged surfaces. The default radius for non-button interactive elements.          |
| `rounded.md`   | `4px`    | Cards, modals, image containers. Refined without being playful.                                                  |
| `rounded.lg`   | `6px`    | Larger feature cards, editorial callout boxes. The upper limit for general containers.                           |
| `rounded.xl`   | `8px`    | Reserved — used only for the rare hero-asset container that needs slight visual softening.                       |
| `rounded.full` | `9999px` | **Buttons (all variants)**, badges, pills, avatars, circular icon buttons. The default for interactive controls. |

### Application Rules

- **Buttons** → `rounded.full` (pill). Per design lead direction, all button variants use full pill shapes — the warmer, more approachable counterpoint to the system's otherwise architectural geometry.
- **Inputs** → `rounded.sm` (2px). Tight architectural corners; do _not_ match the button shape. Inputs read as containers, not interactive accents.
- **Cards** → `rounded.md` (4px). Default. `rounded.lg` for feature cards.
- **Images** → `rounded.none` (0px) for editorial photography (preserve the magazine feel). `rounded.md` (4px) only for product thumbnail grids.
- **Modals** → `rounded.md` (4px).
- **Badges/Tags** → `rounded.full` (pills). Same shape language as buttons.
- **Avatars** → `rounded.full` (circles).

## 7. Component Stylings

Every component below is mirrored in the front matter `components` block using token references. The prose specs are the human-readable explanation; the YAML is the contract.

### Buttons

Five variants. All share `rounded.full` (pill) corners, `label-md` typography, 48px height, and 14px × 32px padding — wider than the SaaS norm to give buttons editorial weight. The pill shape is a deliberate softening note inside the system's otherwise architectural geometry.

| Variant            | Background                         | Text                               | Hover Background                   | Active Background                  | Personality                                                              |
| ------------------ | ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ------------------------------------------------------------------------ |
| `button-primary`   | `{colors.primary-800}` `#233354`   | `{colors.neutral-50}` `#F9FAFB`    | `{colors.primary-900}` `#1B222F`   | `{colors.primary-950}` `#0B0F18`   | The default CTA. Deep, declarative, magazine-masthead authority.         |
| `button-secondary` | `{colors.secondary-300}` `#EAAB9F` | `{colors.secondary-900}` `#301B17` | `{colors.secondary-400}` `#C1887D` | `{colors.secondary-500}` `#9C6359` | Romantic, skin-toned. For warmer brand moments — newsletters, lifestyle. |
| `button-light`     | `{colors.white}` `#FFFFFF`         | `{colors.primary-800}` `#233354`   | `{colors.neutral-100}` `#F3F4F6`   | —                                  | For dark/photographic backgrounds. White-on-image legibility.            |
| `button-dark`      | `{colors.neutral-900}` `#111827`   | `{colors.neutral-50}` `#F9FAFB`    | `{colors.neutral-950}` `#030712`   | —                                  | For non-brand-anchored CTAs (utility actions, secondary site sections).  |
| `button-outline`   | `{colors.white}` `#FFFFFF`         | `{colors.primary-800}` `#233354`   | `{colors.primary-50}` `#F4F7FC`    | —                                  | The quietest button. 1px navy border. For tertiary actions.              |

Disabled state: `button-primary-disabled` uses `primary-200` background with `primary-700` text — readable but unmistakably inactive.

### Cards & Containers

Three card variants, all with tight radii and zero default shadow.

| Variant        | Background                       | Text                             | Padding | Border                                                |
| -------------- | -------------------------------- | -------------------------------- | ------- | ----------------------------------------------------- |
| `card`         | `{colors.white}` `#FFFFFF`       | `{colors.neutral-900}` `#111827` | 32px    | `1px solid {colors.neutral-200}` (`#E5E7EB`) hairline |
| `card-feature` | `{colors.tertiary-50}` `#EDF5F8` | `{colors.primary-800}` `#233354` | 48px    | None — tonal separation from the page bg              |
| `card-dark`    | `{colors.primary-800}` `#233354` | `{colors.neutral-50}` `#F9FAFB`  | 48px    | None                                                  |

All cards use `rounded.md` (4px). For a dark card on a light page, no border — the tonal contrast is the separation. For a light card on a light page, the hairline border (or `tertiary-50` background) does the work shadow usually would.

### Inputs & Forms

| Spec           | Value                                        |
| -------------- | -------------------------------------------- |
| Background     | `{colors.white}` `#FFFFFF`                   |
| Text           | `{colors.neutral-900}` `#111827`             |
| Placeholder    | `{colors.neutral-500}` `#6B7280`             |
| Border         | `1px solid {colors.neutral-300}` (`#D1D5DB`) |
| Border (focus) | `2px solid {colors.primary-800}` (`#233354`) |
| Focus ring     | `0 0 0 3px {colors.info-500}` at 20% opacity |
| Radius         | `rounded.sm` (2px)                           |
| Padding        | 14px × 16px                                  |
| Height         | 48px                                         |
| Typography     | `body-md` (Libre Franklin 16px)              |

Disabled inputs use `neutral-100` background with `neutral-600` text. Error inputs add a `2px solid {colors.error-600}` border with `error-600` helper text below.

### Navigation

The site nav stays understated to keep the brand voice editorial. White background, 80px tall on desktop, with 48px horizontal padding. Logo left, nav links centered or right-aligned, primary CTA right-aligned. Nav links use `label-md` (Libre Franklin 14px, weight 500, +0.02em tracking). Hover state: text color shifts from `neutral-900` to `primary-800` — no underline animation, no chip background. The brand whispers; the nav whispers.

A 1px hairline border at `neutral-200` separates the nav from the page content. Sticky nav uses the same treatment, no shadow added on scroll.

### Image Treatment

Editorial photography is the visual hero. Default treatment:

- **Radius:** `rounded.none` (0px) for editorial / hero / lifestyle imagery. The magazine-frame look is non-negotiable for hero photography.
- **Radius:** `rounded.md` (4px) only for product thumbnails in dense grids (e.g., a category listing with 12+ products).
- **Container:** Full-bleed where possible. Force aspect ratios (16:9 hero, 4:5 portrait, 1:1 product) rather than letting natural image dimensions dictate layout.
- **Shadow:** None. The image is the visual; lifting it with shadow undermines the editorial flatness.
- **Caption typography:** `caption` token, `neutral-500`, italic, with a 8px top margin from the image.

### Distinctive Components

**Editorial Pull-Quote.** Used in long-form content (founder stories, ingredient deep-dives). Playfair Display at `body-serif` (18px, italicized via the body-serif treatment), color `primary-800`, with a 1px navy left border (`primary-800`) and 24px left padding. No quotation marks — the typographic shift is the only signal needed.

**Eyebrow Label.** A small typographic motif used above many headlines. `overline` token, uppercase, `secondary-500` or `neutral-500`, with a 24px bottom margin. The single most-used "branding" element across editorial pages.

**Badge.** Pill-shaped (`rounded.full`), `secondary-100` background with `secondary-900` text, `overline` typography. For "New," "Bestseller," "Limited Edition" labels on product cards. Use sparingly — cluttering products with badges contradicts the restraint.

## 8. Do's and Don'ts

### Do

- Treat whitespace as a brand asset — when in doubt, add more vertical space.
- Use Playfair Display at scale (40px+) for every editorial moment; the font earns its keep at large sizes.
- Pair `primary-800` (navy) with `secondary-300` (blush) generously — this is the brand's signature tonal pairing.
- Use `rounded.full` (pill) for all button variants and `rounded.sm` (2px) for inputs and containers — the deliberate shape mismatch is part of the system's voice.
- Use the `overline` token (uppercase, wide tracking) above headlines as the brand's primary "branding" motif.
- Default to no shadow; reach for `2xs` or `xs` only when tonal contrast can't carry separation.
- Let product photography go full-bleed. Force editorial aspect ratios (16:9, 4:5, 1:1).
- Reach for `tertiary-50` (mist) and `secondary-50` (blush) for full-bleed section backgrounds — they're the brand's atmospheric tints.
- Use `body-md` at 1.65 line-height for prose. Generous leading is a brand signal.
- Keep weight at 500 across the headline scale. Avoid 700+ on Playfair Display.

### Don't

- Don't apply `rounded.full` to containers (cards, modals, inputs, image frames). The pill shape is reserved for interactive controls (buttons, badges, avatars) — using it on containers breaks the editorial discipline.
- Don't reach for `2xl` shadow — it reads as "lifestyle app," not luxury.
- Don't use Playfair Display in body copy at sizes under 18px. The high-contrast strokes don't render well below 16px and read as "bad font choice."
- Don't introduce vibrant gradients, color-mesh backgrounds, or diagonal washes. Beverly Hills MD is gradient-restrained.
- Don't mix Playfair into UI labels or buttons. The serif/sans split is structural — UI is always Libre Franklin.
- Don't use mid-tone gray (neutral-500) as a surface or background. Surfaces stay near-white or near-black.
- Don't pack content into cards. Card padding starts at 32px; cramming a card with 12px padding makes it read as "SaaS dashboard."
- Don't use bold weight (700+) on body copy. If emphasis is needed, italicize via `body-serif` or use weight 500 sparingly.
- Don't apply shadow to editorial photography. Flat is the look.
- Don't use the success/warning/error palettes in marketing surfaces — they're for utility states only (form errors, order confirmations, system alerts).

## 9. Responsive Behavior

| Breakpoint | Min Width | Layout Behavior                                                                                                                                                                       |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (base)     | 0px       | Single column. Stacked nav with hamburger. Section vertical padding 64px. Headlines drop one tier (display → headline-lg). Card padding 24px. Container 100% width with 16px gutters. |
| `sm`       | 640px     | Single column with more breathing room. Container 100% with 24px gutters. Navigation may show 1–2 inline links.                                                                       |
| `md`       | 768px     | Two-column splits begin (image-text alternating sections). Long-form content max-width activates at 768px. Card padding scales to 32px. Section padding 96px.                         |
| `lg`       | 1024px    | Full nav (no hamburger). 3-column product grids. Side-by-side hero compositions. Card padding 40px. Section padding 128px.                                                            |
| `xl`       | 1280px    | Default desktop. Container max-width 1280px with 48px gutters. Editorial layouts hit their full pacing.                                                                               |
| `2xl`      | 1536px    | Full-bleed editorial sections push to 1440px max-width. Section padding can reach 160px–192px for hero spreads.                                                                       |

### Touch Targets

- Minimum interactive target size: **44px × 44px** (Apple HIG / WCAG 2.5.5 baseline).
- Default button height of 48px exceeds this comfortably.
- Inputs at 48px height also meet the threshold.
- Icon-only buttons should size to 44px minimum, even when their visual icon is smaller.

### Collapsing Strategy

- **Navigation:** Inline links collapse to hamburger below `lg` (1024px). Mobile nav is full-screen overlay with `primary-800` background and `neutral-50` text — full editorial impact, not a side drawer.
- **Hero sections:** Two-column hero (image + text) stacks below `md` (768px), with image first, text second. Headlines drop one size tier (`display` → `headline-lg`).
- **Product grids:** 4 columns at `xl`, 3 at `lg`, 2 at `md`, 1 below `md`.
- **Cards:** Padding scales: 24px (mobile) → 32px (`md`) → 40px (`lg`) → 48px (feature cards on desktop).
- **Section vertical spacing:** 64px (mobile) → 96px (`md`) → 128px (`lg`) → 160–192px (`2xl` editorial heroes).

### Image Behavior

- Hero images use `aspect-ratio: 16/9` on desktop, `aspect-ratio: 4/5` on mobile — vertical compositions read better on phones.
- Product photography preserves natural aspect ratios (typically 4:5) across breakpoints.
- Full-bleed sections always go edge-to-edge of viewport regardless of container width.
- Art direction: mobile may use a tighter crop than desktop. When budget permits, ship separate mobile/desktop image assets rather than letting one crop serve both.

## 10. Agent Prompt Guide

This section equips AI coding tools (Claude, Cursor, GitHub Copilot, etc.) to implement Beverly Hills MD components correctly. Reference token names, not raw hex values — the front matter is the authoritative source.

### Quick Color Reference

| Token             | Hex       | Note                                                          |
| ----------------- | --------- | ------------------------------------------------------------- |
| `primary-50`      | `#F4F7FC` | Lightest navy tint — section backgrounds                      |
| `primary-100`     | `#E4EAF4` | Soft tint — badges, banner fills                              |
| `primary-700`     | `#374560` | Soft navy — secondary headers                                 |
| `primary-800` ★   | `#233354` | **Anchor — primary CTAs, hero backgrounds, footer**           |
| `primary-900`     | `#1B222F` | Hover state for primary CTA                                   |
| `primary-950`     | `#0B0F18` | Active/pressed state for primary CTA                          |
| `secondary-50`    | `#FDF5F3` | Romantic full-bleed section bg                                |
| `secondary-100`   | `#F6E5E2` | Badge backgrounds, soft blush tints                           |
| `secondary-300` ★ | `#EAAB9F` | **Anchor — accent buttons, decorative blush moments**         |
| `secondary-400`   | `#C1887D` | Hover for secondary buttons                                   |
| `secondary-900`   | `#301B17` | Text on blush surfaces                                        |
| `tertiary-50` ★   | `#EDF5F8` | **Anchor — atmospheric editorial backgrounds, gallery cards** |
| `white`           | `#FFFFFF` | Page background, card surfaces, light buttons                 |
| `neutral-50`      | `#F9FAFB` | Inverse text on dark surfaces                                 |
| `neutral-200`     | `#E5E7EB` | Default border / hairline                                     |
| `neutral-500`     | `#6B7280` | Muted text, captions                                          |
| `neutral-900`     | `#111827` | Primary text on light surfaces                                |
| `neutral-950`     | `#030712` | Dark theme background                                         |
| `info-500`        | `#3B82F6` | Focus ring (always)                                           |

### Token Reference Cheat Sheet

- All component definitions reference tokens via `{colors.primary-800}`, `{rounded.md}`, `{typography.body-md}`. Never hardcode hex values in component specs.
- The front matter YAML block is the **authoritative source** for any token-level value. If the prose disagrees with the YAML, the YAML wins.
- State variants follow the `-hover`, `-active`, `-disabled` suffix convention as separate component entries (`button-primary` and `button-primary-hover` are sibling definitions).
- Brand color anchors: primary at **800**, secondary at **300**, tertiary at **50**. The user's original hex values live at these specific steps.

### Example Component Prompts

1. **"Build a primary CTA button using the `button-primary` spec — `{colors.primary-800}` background, `{colors.neutral-50}` text, `{rounded.full}` (pill) corners, 14px × 32px padding, 48px height, `{typography.label-md}` (Libre Franklin 14px / weight 500 / 0.02em tracking). Hover state shifts background to `{colors.primary-900}`. Active state shifts to `{colors.primary-950}`. No box-shadow."**

2. **"Build an editorial hero section. Use a 16:9 full-bleed background image with a `linear-gradient(to bottom, transparent, rgba(35,51,84,0.6))` overlay on the lower half. Above the image, place an `overline` (uppercase, +0.16em tracking, `{colors.secondary-300}` color) eyebrow label, followed by a `display` headline (Playfair Display 80px / weight 500 / -0.02em tracking, `{colors.neutral-50}` color), followed by a single `body-lg` paragraph. CTA below uses the `button-primary` spec. Section vertical padding is 160px on desktop, 64px on mobile."**

3. **"Build a product card matching the `card` spec — `{colors.white}` (`#FFFFFF`) background, `{rounded.md}` (4px) corners, 32px padding, with a 1px hairline border in `{colors.neutral-200}`. No shadow. Inside: a 4:5 aspect-ratio image (full-bleed within the card, no radius), a `caption` overline above the title in `{colors.secondary-500}`, a `feature-title` (Playfair 24px / weight 500) product name, a `body-sm` description in `{colors.neutral-700}`, and a price in `body-md` weight 500."**

4. **"Build a form input matching the `input` spec — `{colors.white}` (`#FFFFFF`) background, `{colors.neutral-900}` text, 1px solid `{colors.neutral-300}` border, `{rounded.sm}` (2px) corners, 14px × 16px padding, 48px height, `{typography.body-md}` (Libre Franklin 16px). On focus, swap the border to 2px solid `{colors.primary-800}` and add a focus ring of `0 0 0 3px {colors.info-500}` at 20% opacity. Disabled state uses `{colors.neutral-100}` background with `{colors.neutral-600}` text."**

5. **"Build the site navigation. 80px tall, `{colors.white}` (`#FFFFFF`) background, 48px horizontal padding, with a 1px hairline bottom border in `{colors.neutral-200}`. Logo on the left, nav links centered using `{typography.label-md}` (Libre Franklin 14px / weight 500 / 0.02em tracking) in `{colors.neutral-900}`, primary CTA on the right using the `button-primary` spec. Nav link hover state shifts text color to `{colors.primary-800}` — no underline, no background chip. Below `lg` (1024px), nav collapses to a hamburger that opens a full-screen overlay with `{colors.primary-800}` background and `{colors.neutral-50}` text."**

### Iteration Guide

1. **Reference tokens, not raw hex.** When asking an agent to build or modify a component, always say `{colors.primary-800}` rather than `#233354`. The token name carries semantic meaning the hex doesn't.
2. **State the editorial discipline explicitly.** For any new component, include a clause like "no shadow, generous padding, pill buttons, sharp container corners" — the brand voice's mixed shape language and restraint are unusual for AI-generated UI and need to be reinforced every prompt.
3. **Lock typography per role.** When asking for text styling, name the typography token (`{typography.headline-md}`, `{typography.label-md}`) — don't let the agent invent sizes. Especially important for Playfair Display, which most agents will default to weight 700 unless told otherwise.
4. **Quote the radius value inline.** Say "`{rounded.sm}` (2px)" — agents often interpret "small radius" as 4–8px, which exceeds the brand's tight-corner discipline. Showing the value prevents drift.
5. **For new components not in this spec, derive from existing tokens.** Don't introduce new color tokens, new radii, or new typography sizes. If a component genuinely needs something the system doesn't have, escalate to design — don't let an agent silently expand the scale.
6. **Test against the Don'ts list.** After any new build, mentally walk through Section 8's Don'ts. If the result trips even one ("did it use a shadow?" "is the radius over 6px?" "did the body copy go bold?"), ask the agent to revise.
7. **The YAML front matter is the contract.** When an agent's output disagrees with the prose specs, the front matter YAML wins. Engineers can copy the YAML's component definitions directly into a Tailwind theme config or DTCG `tokens.json`.
