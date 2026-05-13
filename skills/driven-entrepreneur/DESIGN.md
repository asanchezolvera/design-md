---
version: alpha
name: Driven Entrepreneur
description: Robert Herjavec's premium business-education brand — Deep Forest teal, Terracotta, and Solar Gold set on a warm beige Olive neutral, with Albert Sans display, Inter body, and Caveat for handwritten accent moments. Built to read as mentor-led, earned-wisdom luxury rather than hype-driven funnel.
colors:
  # Brand — Primary: Deep Forest (anchor at 700)
  primary-50: "#F2F8F8"
  primary-100: "#E0ECEC"
  primary-200: "#BFDBD9"
  primary-300: "#9CC4C2"
  primary-400: "#74A3A1"
  primary-500: "#4E7F7D"
  primary-600: "#366463"
  primary-700: "#154847"
  primary-800: "#1E3837"
  primary-900: "#132525"
  primary-950: "#071211"

  # Brand — Secondary: Terracotta (anchor at 400)
  secondary-50: "#FFF4F0"
  secondary-100: "#FBE4DB"
  secondary-200: "#F9C8B5"
  secondary-300: "#EDA88D"
  secondary-400: "#D58261"
  secondary-500: "#AB5C3C"
  secondary-600: "#8B4325"
  secondary-700: "#6C321A"
  secondary-800: "#4F2615"
  secondary-900: "#36180D"
  secondary-950: "#1B0A04"

  # Brand — Tertiary: Solar Gold (anchor at 300)
  tertiary-50: "#FBF7E7"
  tertiary-100: "#F3EAC8"
  tertiary-200: "#E9D487"
  tertiary-300: "#FFD50B"
  tertiary-400: "#B49600"
  tertiary-500: "#8A7200"
  tertiary-600: "#6C5900"
  tertiary-700: "#534400"
  tertiary-800: "#3E3200"
  tertiary-900: "#2A2100"
  tertiary-950: "#140F00"

  # Neutral — Tailwind Olive (yellow-green tinted undertone)
  neutral-50: "#FBFBF9"
  neutral-100: "#F4F4F0"
  neutral-200: "#E8E8E3"
  neutral-300: "#D8D8D0"
  neutral-400: "#ABAB9C"
  neutral-500: "#7C7C67"
  neutral-600: "#5B5B4B"
  neutral-700: "#474739"
  neutral-800: "#2B2B22"
  neutral-900: "#1D1D16"
  neutral-950: "#0C0C09"

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
  tertiary: "{colors.tertiary-300}"
  surface: "{colors.neutral-100}"
  surface-spotlight: "{colors.white}"
  surface-dark: "{colors.primary-700}"
  surface-raised: "{colors.white}"
  on-surface: "{colors.neutral-900}"
  on-surface-dark: "{colors.neutral-50}"
  border: "{colors.neutral-300}"
  border-dark: "{colors.primary-800}"
  focus-ring: "#3B82F6"

typography:
  display:
    fontFamily: "'Albert Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: "'Albert Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "'Albert Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: "'Albert Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  feature-title:
    fontFamily: "'Albert Sans', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.3
  accent-script:
    fontFamily: "'Caveat', 'Brush Script MT', cursive"
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -0.005em
  accent-script-md:
    fontFamily: "'Caveat', 'Brush Script MT', cursive"
    fontSize: 2.5rem
    fontWeight: 600
    lineHeight: 1.05
  pull-quote:
    fontFamily: "'Caveat', 'Brush Script MT', cursive"
    fontSize: 1.75rem
    fontWeight: 500
    lineHeight: 1.3
  body-lg:
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.01em
  label-sm:
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.04em
  button-label:
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 1rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.02em
  overline:
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.18em
  micro:
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1.3
  code:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.55

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
  # Primary CTA — Solar Gold pill with Deep Forest text. The conversion CTA across the brand. The signature hover is a color inversion to forest bg + gold text.
  button-primary:
    backgroundColor: "{colors.tertiary-300}"
    textColor: "{colors.primary-700}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: 14px 32px
    height: 52px
  button-primary-hover:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.tertiary-300}"
  button-primary-active:
    backgroundColor: "{colors.primary-800}"
    textColor: "{colors.tertiary-300}"
  button-primary-disabled:
    backgroundColor: "{colors.tertiary-100}"
    textColor: "{colors.neutral-600}"

  # Secondary CTA — Deep Forest pill with white text. Workaday non-headline action: "Continue", "Save", form submits. Used when the gold primary would compete (e.g., on the gold-tinted hero, on alternate sections).
  button-secondary:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.white}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: 14px 32px
    height: 52px
  button-secondary-hover:
    backgroundColor: "{colors.primary-800}"
    textColor: "{colors.tertiary-300}"
  button-secondary-active:
    backgroundColor: "{colors.primary-900}"
    textColor: "{colors.tertiary-300}"
  button-secondary-disabled:
    backgroundColor: "{colors.primary-200}"
    textColor: "{colors.primary-500}"

  # Outline button — forest stroke + text on transparent fill. For tertiary actions on beige.
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.primary-700}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: 14px 30px
    height: 52px
  button-outline-hover:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.tertiary-300}"
  button-outline-active:
    backgroundColor: "{colors.primary-800}"
    textColor: "{colors.tertiary-300}"
  button-outline-disabled:
    backgroundColor: transparent
    textColor: "{colors.neutral-400}"

  # Ghost button — transparent fill, no stroke. Inline links-as-buttons, very low-priority actions, in-nav CTAs.
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary-700}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: 14px 20px
    height: 52px
  button-ghost-hover:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-800}"
  button-ghost-active:
    backgroundColor: "{colors.primary-100}"
    textColor: "{colors.primary-900}"
  button-ghost-disabled:
    backgroundColor: transparent
    textColor: "{colors.neutral-400}"

  # Inverse button — white pill with forest text. For use on dark forest sections / `card-inverse` / hero bands where a gold or forest button would not read.
  button-inverse:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary-700}"
    typography: "{typography.button-label}"
    rounded: "{rounded.full}"
    padding: 14px 32px
    height: 52px
  button-inverse-hover:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.primary-800}"
  button-inverse-active:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.primary-900}"
  button-inverse-disabled:
    backgroundColor: "{colors.primary-800}"
    textColor: "{colors.primary-500}"

  # Cards — white default on beige, off-white elevated, gold-tinted feature, deep-forest inverse.
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: 32px

  card-elevated:
    backgroundColor: "{colors.neutral-50}"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: 32px

  card-feature:
    backgroundColor: "{colors.tertiary-50}"
    textColor: "{colors.primary-900}"
    rounded: "{rounded.lg}"
    padding: 32px

  card-inverse:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.lg}"
    padding: 32px

  # Badges — pill labels. Neutral base + forest-emphasis primary + four status variants.
  badge:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.neutral-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    height: 24px

  badge-primary:
    backgroundColor: "{colors.primary-100}"
    textColor: "{colors.primary-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    height: 24px

  badge-success:
    backgroundColor: "{colors.success-100}"
    textColor: "{colors.success-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    height: 24px

  badge-warning:
    backgroundColor: "{colors.warning-100}"
    textColor: "{colors.warning-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    height: 24px

  badge-error:
    backgroundColor: "{colors.error-100}"
    textColor: "{colors.error-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    height: 24px

  badge-info:
    backgroundColor: "{colors.info-100}"
    textColor: "{colors.info-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    height: 24px

  # Inputs — pill-leaning radius (md) on white over beige page; forest inverse for forest sections; error uses a 2px error-600 border (see §7 prose).
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 14px 16px
    height: 52px
  input-focus:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
  input-disabled:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-500}"
  input-error:
    backgroundColor: "{colors.white}"
    textColor: "{colors.neutral-900}"
  input-inverse:
    backgroundColor: "{colors.primary-800}"
    textColor: "{colors.neutral-50}"

  # Nav — beige bar at rest (transparent over hero, solid-beige when scrolled); deep-forest inverse for forest-section sticky nav.
  nav:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.primary-700}"
    typography: "{typography.label-md}"
    height: 80px
    padding: 0 32px
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.primary-700}"
    typography: "{typography.label-md}"
    padding: 8px 12px
  nav-link-active:
    backgroundColor: transparent
    textColor: "{colors.primary-900}"
    typography: "{typography.label-md}"
    padding: 8px 12px
  nav-inverse:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.neutral-50}"
    typography: "{typography.label-md}"
    height: 80px
    padding: 0 32px
---

# Driven Entrepreneur

## 1. Visual Theme & Atmosphere

Driven Entrepreneur is the personal-knowledge brand of Robert Herjavec — the Shark Tank investor who built a cybersecurity company from a basement to a quarter-billion-dollar valuation, then a second one to a $30M+ exit. Every visual decision in this design system has to read as **earned authority**: not the loud "10X your business" hype-funnel of digital-marketing land, but the considered, premium feel of someone who already won and is now teaching others how to think.

The palette is unusual on purpose. Most business-education brands default to black-and-orange or navy-and-gold. Driven Entrepreneur reaches for **Deep Forest** (`#154847`) — a near-black teal that reads as old-money library, leather-bound, the green of a private-club wall — paired with **Terracotta** (`#D58261`), the warm clay of a Tuscan villa or a roasted-coffee jacket, and offset by **Solar Gold** (`#FFD50B`), saturated and demanding, used surgically for CTAs and the moments that need to win the eye. The neutral is Tailwind's Olive — a yellow-green tinted near-white that gives every "beige" section a subtle earthen warmth that pure gray would flatten.

Layout-wise, the brand alternates **beige sections** and **deep-forest sections** down the page, with occasional **white "spotlight" cards** floating up off the beige for testimonials and product CTAs. White is the exception, not the rule — the page is alive with warm tone. Typography is **Albert Sans** for headlines (a humanist sans with just enough character to feel mentor-ish rather than corporate), **Inter** for body copy (clean, neutral, gets out of the way of the message), and **Caveat** — a handwritten script — for emphasized keywords inside headlines, mimicking the gesture of Robert marking up a workbook in the margins. The script accents are sparing but signature.

### Key Characteristics

- Deep, near-black forest-teal primary — not corporate navy, not athletic green
- Warm terracotta secondary and saturated solar-gold tertiary, used at very different volumes
- Olive-tinted neutral palette as the foundational beige — never pure white pages
- Section-level alternation: beige → forest → beige → spotlight — visible identity from 30 ft away
- **All CTA buttons are pill-shaped (`rounded-full`)** — non-negotiable across the system
- **Primary CTA is solar gold with deep-forest text** — yellow as the action color, forest as the brand
- Headlines in Albert Sans, body in Inter, **Caveat script** on emphasized keywords for mentor warmth
- Premium spacing — generous vertical rhythm, refined elevation, restrained shadow use

---

## 2. Color Palette & Roles

### Primary — Deep Forest (★ anchor at 700: `#154847`)

The brand's foundational identity color. Used for headlines on beige, large dark section backgrounds, primary text, button text on yellow CTAs. Reads as serious, earned, library-like. Never replaced by a generic black.

| Step | Token         | Hex       | Usage |
|------|---------------|-----------|-------|
| 50   | `primary-50`  | `#F2F8F8` | Tinted page accents on beige; selected-state highlights for forest-themed UI |
| 100  | `primary-100` | `#E0ECEC` | Soft surface tint, callout backgrounds, side-panel fills |
| 200  | `primary-200` | `#BFDBD9` | Quiet brand chip backgrounds; tag fills on forest cards |
| 300  | `primary-300` | `#9CC4C2` | Decorative accents — icon backgrounds, illustration mid-tones |
| 400  | `primary-400` | `#74A3A1` | Secondary text on forest sections; subtle dividers on dark surfaces |
| 500  | `primary-500` | `#4E7F7D` | Mid-tone — secondary brand accents, icon strokes |
| 600  | `primary-600` | `#366463` | Hover for forest-on-beige links; text on `primary-50` tints |
| 700 ★ | `primary-700` | `#154847` | **Default. Dark section backgrounds, primary headlines, primary CTA text on the yellow pill** |
| 800  | `primary-800` | `#1E3837` | Hover/pressed deepening for `forest` button; nav scroll-state |
| 900  | `primary-900` | `#132525` | Active/pressed deepening; footer-deep variant |
| 950  | `primary-950` | `#071211` | Near-black with green undertone — overlays on hero imagery |

### Secondary — Terracotta (★ anchor at 400: `#D58261`)

Used for warmth-injection moments — accent CTAs, illustration highlights, eyebrow labels, the script-emphasis color on selected keywords. Never the primary action color; that role belongs to gold.

| Step | Token            | Hex       | Usage |
|------|------------------|-----------|-------|
| 50   | `secondary-50`   | `#FFF4F0` | Soft warm tint background — testimonial cards, intro modules |
| 100  | `secondary-100`  | `#FBE4DB` | Badge/tag backgrounds for warm-labeled content |
| 200  | `secondary-200`  | `#F9C8B5` | Decorative shape fills, illustration mid-tones |
| 300  | `secondary-300`  | `#EDA88D` | Hover state for `secondary-400` surfaces |
| 400 ★ | `secondary-400`  | `#D58261` | **Default. Terracotta accent CTAs, illustration anchors, eyebrow underlines** |
| 500  | `secondary-500`  | `#AB5C3C` | **Caveat script keyword color** (default highlight color for emphasized words) |
| 600  | `secondary-600`  | `#8B4325` | Eyebrow label text on beige; alternate keyword color |
| 700  | `secondary-700`  | `#6C321A` | Deep accent — chart bars, icon strokes |
| 800  | `secondary-800`  | `#4F2615` | Text on `secondary-50`/`secondary-100` tinted cards |
| 900  | `secondary-900`  | `#36180D` | Deep overlay on terracotta imagery |
| 950  | `secondary-950`  | `#1B0A04` | Near-black with warm undertone |

### Tertiary — Solar Gold (★ anchor at 300: `#FFD50B`)

The brand's attention currency. Reserved for primary CTAs and the rare "this is the thing you must see" moment. Used sparingly — gold loses its meaning if every element wears it.

| Step | Token            | Hex       | Usage |
|------|------------------|-----------|-------|
| 50   | `tertiary-50`    | `#FBF7E7` | Gold-tinted alternate section background; subtle module fills |
| 100  | `tertiary-100`   | `#F3EAC8` | Tag/chip backgrounds, disabled-state CTA background |
| 200  | `tertiary-200`   | `#E9D487` | Hover-tint surfaces, illustration mid-tones |
| 300 ★ | `tertiary-300`   | `#FFD50B` | **Default. Primary CTA pill background, hero highlight rings, the saturated brand yellow** |
| 400  | `tertiary-400`   | `#B49600` | Darker gold — used when text needs to sit on a yellow surface and contrast matters |
| 500  | `tertiary-500`   | `#8A7200` | Mustard text for warnings (when warning yellow feels off-brand) |
| 600  | `tertiary-600`   | `#6C5900` | Deep mustard — icon strokes on gold-tinted surfaces |
| 700  | `tertiary-700`   | `#534400` | Heavy accent for chart fills |
| 800  | `tertiary-800`   | `#3E3200` | Near-olive text on `tertiary-50` tinted surfaces |
| 900  | `tertiary-900`   | `#2A2100` | Deep overlay |
| 950  | `tertiary-950`   | `#140F00` | Near-black with gold undertone |

### Neutrals — Olive (Tailwind v4.2)

The default page surface lives in this palette. Olive's barely-there yellow-green tint harmonizes with both the deep teal and the warm secondaries — picking neutral or gray here would leave the brand feeling cold. The 100 step is the **default page background** for Driven Entrepreneur, not white.

| Step | Token         | Hex       | Role |
|------|---------------|-----------|------|
| 50   | `neutral-50`  | `#FBFBF9` | Spotlight card backgrounds; lightest tier above the beige page |
| 100  | `neutral-100` | `#F4F4F0` | **Default page background ("beige sections")** |
| 200  | `neutral-200` | `#E8E8E3` | Subtle divider fills, recessed input surfaces |
| 300  | `neutral-300` | `#D8D8D0` | Default border color on beige surfaces |
| 400  | `neutral-400` | `#ABAB9C` | Disabled text; muted iconography |
| 500  | `neutral-500` | `#7C7C67` | Tertiary text, muted timestamps |
| 600  | `neutral-600` | `#5B5B4B` | Secondary text on beige |
| 700  | `neutral-700` | `#474739` | Body text alternative when full-black feels too heavy |
| 800  | `neutral-800` | `#2B2B22` | Heading text fallback when primary teal is contextually wrong |
| 900  | `neutral-900` | `#1D1D16` | **Primary body text on beige and spotlight surfaces** |
| 950  | `neutral-950` | `#0C0C09` | Deepest text — used rarely; primary-900 usually preferred for tonal consistency |

### Surface & Background Roles

This brand inverts the typical white-default. Page backgrounds rotate between three surface tokens:

| Role                   | Token / Hex                            | When to use |
|------------------------|----------------------------------------|-------------|
| `surface` (page bg)    | `{neutral-100}` = `#F4F4F0`            | **Default.** The beige canvas the brand lives on |
| `surface-dark`         | `{primary-700}` = `#154847`            | Dark "forest" sections — every 2nd or 3rd module, plus footer |
| `surface-spotlight`    | `{white}` = `#FFFFFF`                  | Spotlight modules — featured testimonials, hero product card, signup form |
| `surface-raised`       | `{white}` = `#FFFFFF`                  | Cards sitting on beige; lift via shadow + radius |
| `surface-gold-tint`    | `{tertiary-50}` = `#FBF7E7`            | Occasional accent section — bonus modules, offer reveal |

The intentional **rhythm** of these surfaces — beige → forest → beige → spotlight — is the brand's structural signature. A page that's all-white reads as generic SaaS; a page that alternates beige and forest reads unmistakably as Driven Entrepreneur from across the room.

### Borders & Dividers

| Role                          | Token           | Hex       |
|-------------------------------|-----------------|-----------|
| Default border (on beige)     | `neutral-300`   | `#D8D8D0` |
| Subtle divider                | `neutral-200`   | `#E8E8E3` |
| Border on dark forest section | `primary-800`   | `#1E3837` |
| Border on spotlight card      | `neutral-200`   | `#E8E8E3` |
| Focus ring                    | `info-500`      | `#3B82F6` |

### Semantic Colors (standardized)

Error, Info, Success, Warning use the full Tailwind Red / Blue / Green / Yellow palettes (see front matter for hex values). Role mappings:

| Family   | Text (light)       | Text (dark)        | Background (light) | Background (dark)  | Border (light)    | Border (dark)     |
|----------|--------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| Error    | `error-600`        | `error-400`        | `error-50`         | `error-950`        | `error-200`        | `error-800`        |
| Info     | `info-600`         | `info-400`         | `info-50`          | `info-950`         | `info-200`         | `info-800`         |
| Success  | `success-600`      | `success-400`      | `success-50`       | `success-950`      | `success-200`      | `success-800`      |
| Warning  | `warning-700`      | `warning-400`      | `warning-50`       | `warning-950`      | `warning-200`      | `warning-800`      |

For brand-cohesive "warnings" (e.g., scarcity / urgency callouts), prefer the gold tertiary palette over warning-yellow — solar gold reads as on-brand where the standard `warning-500` reads as system-UI.

### Gradients

Driven Entrepreneur is mostly gradient-free — surfaces are flat color, and elevation comes from shadow, not from gradient washes. Two exceptions are sanctioned:

- **Hero overlay gradient**: top-to-bottom `primary-950` at 0% opacity → `primary-950` at 70% opacity, layered over hero photography to recover headline contrast.
- **Gold highlight ring**: a thin radial glow using `tertiary-300` at 30% opacity behind hero CTAs to draw the eye. Optional, not required.

Avoid using gradients to fake a brand color (e.g., gradients across primary and secondary) — they cheapen the palette.

---

## 3. Typography Rules

### Font Families

- **Headlines**: `Albert Sans` (Google Fonts) — humanist sans with subtle warmth, weight range 400–800. Fallback: `system-ui, -apple-system, 'Segoe UI', sans-serif`.
- **Body / UI**: `Inter` (Google Fonts) — weight range 400–700, with InterVariable preferred for performance. Fallback: `system-ui, -apple-system, 'Segoe UI', sans-serif`.
- **Accent script**: `Caveat` (Google Fonts) — weight 500–700. Used **only** for emphasized keywords inside headlines and for pull quotes. Never used for full headlines, body, or UI. Fallback: `'Brush Script MT', cursive`.
- **Code**: `JetBrains Mono` (Google Fonts) — weight 400–500. Fallback: `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`.

### Hierarchy

| Token              | Font        | Size (px / rem)   | Weight | Line-height | Letter-spacing | Notes |
|--------------------|-------------|--------------------|--------|-------------|----------------|-------|
| `display`          | Albert Sans | 72px / 4.5rem      | 700    | 1.05        | -0.025em       | Hero headline |
| `headline-lg`      | Albert Sans | 48px / 3rem        | 700    | 1.1         | -0.02em        | Section opener |
| `headline-md`      | Albert Sans | 36px / 2.25rem     | 600    | 1.15        | -0.015em       | Subsection heading |
| `headline-sm`      | Albert Sans | 24px / 1.5rem      | 600    | 1.2         | -0.01em        | Card title |
| `feature-title`    | Albert Sans | 20px / 1.25rem     | 600    | 1.3         | —              | List-item title |
| `accent-script`    | Caveat      | 72px / 4.5rem      | 600    | 0.95        | -0.005em       | **Hero-scale handwritten keyword.** Slightly oversized vs Albert at the same level — Caveat's optical size runs small |
| `accent-script-md` | Caveat      | 40px / 2.5rem      | 600    | 1.05        | —              | Section-headline keyword |
| `pull-quote`       | Caveat      | 28px / 1.75rem     | 500    | 1.3         | —              | Margin pull-quotes in long-form copy |
| `body-lg`          | Inter       | 18px / 1.125rem    | 400    | 1.6         | —              | Lede paragraphs, intro copy |
| `body-md`          | Inter       | 16px / 1rem        | 400    | 1.6         | —              | Default body |
| `body-sm`          | Inter       | 14px / 0.875rem    | 400    | 1.55        | —              | Dense lists, footer copy |
| `caption`          | Inter       | 13px / 0.8125rem   | 400    | 1.5         | —              | Image captions, fine print |
| `label-md`         | Inter       | 14px / 0.875rem    | 600    | 1.4         | 0.01em         | Form labels, inline labels |
| `label-sm`         | Inter       | 12px / 0.75rem     | 600    | 1.4         | 0.04em         | Tag/badge labels |
| `button-label`     | Inter       | 16px / 1rem        | 700    | 1.2         | 0.02em         | CTA pill labels |
| `overline`         | Inter       | 12px / 0.75rem     | 600    | 1.3         | 0.18em         | Uppercase eyebrows above headlines |
| `micro`            | Inter       | 11px / 0.6875rem   | 500    | 1.3         | —              | Legal copy, timestamps |
| `code`             | JetBrains Mono | 14px / 0.875rem | 400    | 1.55        | —              | Inline code, dashboards |

### Principles

1. **Caveat is a paint, not a font.** Use it on one or two keywords per headline, never the full headline. Default keyword color is `secondary-500` (terracotta). Caveat in body copy is forbidden — its purpose is editorial gesture, not running text.
2. **Headlines are tight.** Albert Sans gets negative letter-spacing across all display sizes (`-0.01em` at smaller, `-0.025em` at hero) and line-heights below 1.2. This gives the type the confident, sculptural quality the brand needs.
3. **Body is generous.** Inter at 1.6 line-height and 16px base, with `body-lg` reserved for opening paragraphs and high-emphasis copy. Don't shrink body below 14px for narrative content.
4. **Eyebrows over headlines.** Most section openers use a `overline` eyebrow (12px, uppercase, 0.18em tracked, terracotta `secondary-600`) above the headline. This is a signature pacing device — never skip it on a major section.
5. **Weight ladder is narrow.** Inter uses 400 for body, 600 for labels, 700 for buttons and emphasis. Albert Sans uses 600 for most headlines, 700 only for display sizes. Resist using 800/900 — the brand's authority doesn't need shouting weights.

---

## 4. Layout Principles

### Spacing System

Driven Entrepreneur uses the standardized Golden Hippo spacing scale. The full scale lives in the front matter `spacing` map; this is the practical map for the brand:

| Use case                     | Token / Value             |
|------------------------------|---------------------------|
| Tight component internal     | `4` (8px)                 |
| Standard component padding   | `5–6` (12–16px)           |
| Button padding (vertical)    | `5` (12–14px) — see button spec |
| Button padding (horizontal)  | `9` (32px) — generous, pill-friendly |
| Card padding                 | `9` (32px) default, `10` (40px) for spotlight |
| Stack gap (small)            | `4` (8px) |
| Stack gap (standard)         | `8` (24px) |
| Stack gap (section-internal) | `11` (48px) |
| Section vertical padding     | `14` (96px) default, `15` (128px) for hero |
| Page max content width       | `28` (1280px) |
| Wide layout max              | `29` (1440px) |
| Read-width column            | `26` (768px) for long-form copy |

### Grid & Container

- **Default page max-width**: 1280px (`spacing.28`), centered with 32px (`spacing.9`) gutters at desktop, 16px (`spacing.6`) at mobile.
- **Section vertical rhythm**: 96px top + 96px bottom on desktop (`py-24`), 64px / 64px on mobile (`py-16`). Spotlight modules can push to 128px.
- **Column structure**: 12-column grid at lg+; collapses to 6-col at md, 4-col at sm.
- **Long-form copy**: clamp text columns to 720–768px max-width (`spacing.25`–`spacing.26`) for readability.

### Whitespace Philosophy

This brand uses **generous vertical whitespace** as a status signal. Cramped pages read as funnel; spacious pages read as premium. The single most important spatial decision is to keep section padding ≥ 96px and never let CTAs share a row with body copy — they get their own vertical air.

> Border radius is documented in the **Shapes** section.

---

## 5. Depth & Elevation

Driven Entrepreneur uses elevation **sparingly and softly**. The page already has visual structure from section-color alternation; piling shadow on top of that flattens the typographic hierarchy. Most cards on beige use either a 1px `neutral-300` border OR a single soft `sm` shadow — rarely both.

### Shadow Scale (Golden Hippo standardized)

| Token   | Value                                                                | Brand Use |
|---------|----------------------------------------------------------------------|-----------|
| `2xs`   | `0 1px rgb(0 0 0 / 0.05)`                                            | Input borders on beige — barely-there definition |
| `xs`    | `0 1px 2px 0 rgb(0 0 0 / 0.05)`                                      | Resting state for secondary cards |
| `sm`    | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`      | **Default for cards** on beige — quiet lift |
| `md`    | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`   | Hovered cards, primary CTA hover |
| `lg`    | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Popovers, dropdown menus, sticky CTA bars |
| `xl`    | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`| Modals — used rarely, mostly for offer reveal |
| `2xl`   | `0 25px 50px -12px rgb(0 0 0 / 0.25)`                                | Hero spotlight card lift — single dramatic use per page max |

### Shadow Philosophy

- **Prefer borders over shadows on forest (dark) sections.** Shadow disappears on dark; a 1px `primary-800` border is the right separation device there.
- **Spotlight cards earn the strongest shadow.** When a white card sits on beige and needs to *announce* itself, use `2xl`. But only one of these per page — overuse erodes the brand's restraint.
- **CTAs do not shadow at rest.** Pill CTAs are flat at rest; they pick up `md` shadow on hover as a tactile feedback signal.
- **No inner shadows, no glow effects.** The single gold-glow exception on hero CTAs (see Gradients) is decorative, not a UI elevation device.

---

## 6. Shapes

### Shape Language

Driven Entrepreneur lives at the **soft-rounded** end of the spectrum. The brand wants approachable warmth — not architectural sharpness, not playful pillow-roundness, but the considered curve of a leather-bound book corner. The signature shape is the **pill CTA** — every button, badge, and chip is fully rounded.

### Border Radius Scale

| Token           | Value    | Use |
|-----------------|----------|-----|
| `rounded.none`  | 0px      | Section dividers, image-strip elements |
| `rounded.sm`    | 4px      | Tooltips, micro-tags within data displays |
| `rounded.md`    | 10px     | Inputs, dropdowns, small cards within composites |
| `rounded.lg`    | 16px     | Standard cards (`card`, `card-elevated`, `card-feature`, `card-inverse`) |
| `rounded.xl`    | 24px     | Spotlight cards, hero modules, modal containers |
| `rounded.full`  | 9999px   | **All buttons, all tags, all chips, avatar masks** |

### Application Rules

- **Every CTA is `rounded.full`**. Outline buttons, terracotta accent buttons, dark-section buttons — all pill. This is the brand's most non-negotiable shape rule. A square-cornered button on this brand reads as broken.
- **Cards step up in radius with importance**: `rounded.lg` (16px) for standard cards, `rounded.xl` (24px) for spotlight/hero cards.
- **Inputs are `rounded.md` (10px)** — softer than a sharp corner but not pill. Pill inputs read as search-box, which is wrong for course-purchase forms.
- **Images**: `rounded.lg` for cards-with-image, `rounded.full` for circular avatar/founder portraits, `rounded.none` for full-bleed hero strips.
- **Modal containers**: `rounded.xl` (24px) — friendly but not loose.

---

## 7. Component Stylings

> All component definitions live in the front matter `components` block. The specs below explain the design intent; the YAML is the contract. Brand-specific patterns outside the canonical taxonomy live in the **Prose recipes** subsections below — they are never added to the front matter as tokens (CONTEXT.md Meta-rule 5).

### Buttons

Five canonical roles, each with `default / hover / active / disabled`. **All buttons are pill-shaped (`rounded.full`)** and 52px tall.

| Variant            | Background      | Text          | Padding   | Use |
|--------------------|-----------------|---------------|-----------|-----|
| `button-primary`   | `tertiary-300`  | `primary-700` | 14px 32px | **The** brand button — gold-pill conversion CTA. Hero, primary form submit, headline moment. |
| `button-secondary` | `primary-700`   | `white`       | 14px 32px | Workaday non-headline button — "Continue", "Save", secondary form actions. Used when gold primary would compete. |
| `button-outline`   | transparent     | `primary-700` | 14px 30px | Tertiary actions on beige — "skip", "see all modules", footer-as-buttons. |
| `button-ghost`     | transparent     | `primary-700` | 14px 20px | Very low-priority — inline links-as-buttons, nav CTAs, "back" affordances. No stroke. |
| `button-inverse`   | `white`         | `primary-700` | 14px 32px | Light treatment for dark forest sections / `card-inverse` / hero bands. |

The signature interaction is **`button-primary`'s color-inversion hover** — bg flips to `primary-700` deep forest and text flips to `tertiary-300` yellow. Read as the brand confidently reasserting its identity color when the user engages. The forest hover used on `button-secondary` / `button-outline` adds a small `tertiary-300` text shift on hover as a subtler yellow nudge.

#### Prose recipes — brand-specific button patterns

- **Terracotta accent CTA** — `secondary-400` background, `primary-900` text, pill shape (`rounded.full`), 52px height. Hover deepens to `secondary-500` with white text. For warm secondary actions: affiliate links, bonus reveals, "learn more" on terracotta-tinted modules. Use sparingly — this is not a primary action color and isn't a canonical role.
- **Outline on forest sections** — Adapt `button-outline` for `card-inverse` / `section-forest` backgrounds: transparent fill with `tertiary-300` gold stroke and text. Hover fills to `tertiary-300` gold with `primary-700` text. Same dimensions as `button-outline`; the inverse-surface adaptation is a styling override, not a separate token (CONTEXT.md: "Links inside [nav-inverse] auto-adapt").

### Cards & Containers

Four canonical roles. Cards do not have states (`hover`/`active`/`disabled`); clickable card patterns are documented as prose recipes.

| Variant          | Background       | Text          | Radius      | Shadow / Border | Use |
|------------------|------------------|---------------|-------------|-----------------|-----|
| `card`           | `white`          | `neutral-900` | `lg` (16px) | `sm` shadow or 1px `neutral-300` border (not both) | Default card on the beige page. |
| `card-elevated`  | `neutral-50`     | `neutral-900` | `lg`        | `md` shadow at rest | More prominent variant — lifts off the beige with a subtle off-white tonal step plus a slightly deeper shadow. For cards on tinted bands or competing with surrounding content. |
| `card-feature`   | `tertiary-50`    | `primary-900` | `lg`        | none            | Tinted-emphasis card — "Why X" benefit blocks, offer reveals, bonus modules. Gold tint is brand-aligned and matches `section-gold-tint`. |
| `card-inverse`   | `primary-700`    | `neutral-50`  | `lg`        | 1px `primary-800` border (no shadow) | Card on forest sections, or a dark card on the beige page. Border-only separation per the brand's shadow-on-dark prohibition. |

#### Prose recipes — brand-specific card patterns

- **Spotlight card** — `card`-shaped but `rounded.xl` (24px), `2xl` shadow, 40px padding (vs the default 32px), `white` background. Reserved for **one** card per page maximum — the hero spotlight for a flagship testimonial, the headline product CTA, or the offer-reveal moment. Drops to `rounded.lg` and `lg` shadow at md and below. This is the brand's single permitted dramatic-elevation moment; overuse erodes the brand's restraint.

- **Section backgrounds (beige / forest / spotlight / gold-tint)** — Section-rhythm is a brand signature, but section surfaces are page-layout patterns, not component tokens (Meta-rule 5). Apply them as wrappers using the surface aliases:
    - `surface` → `neutral-100` beige — **default page**, most sections, 96px top/bottom padding.
    - `surface-dark` → `primary-700` forest — every 2nd or 3rd section, plus footer.
    - `surface-spotlight` → `white` — the rare "stop and read this" module.
    - `surface-gold-tint` → `tertiary-50` — bonus modules, offer reveals.

  The intentional rhythm — beige → forest → beige → spotlight — is the brand's structural signature; plan it before writing components.

### Badges

Six canonical roles. Pill (`rounded.full`), `label-sm` typography, 4px/12px padding, 24px height. Status tones map to the standardized semantic palette.

| Variant          | Background       | Text          | Use |
|------------------|------------------|---------------|-----|
| `badge`          | `neutral-200`    | `neutral-800` | Base / neutral. Default muted label. |
| `badge-primary`  | `primary-100`    | `primary-800` | Forest-tinted brand label — high-emphasis non-status label. |
| `badge-success`  | `success-100`    | `success-800` | Tailwind green — system success state. |
| `badge-warning`  | `warning-100`    | `warning-800` | Tailwind yellow — system warning. |
| `badge-error`    | `error-100`      | `error-800`   | Tailwind red — system error. |
| `badge-info`     | `info-100`       | `info-800`    | Tailwind blue — system info. |

#### Prose recipes — brand-specific badge patterns

- **Gold module tag** — `tertiary-100` background, `primary-800` text, `label-sm`, pill, 6px/14px padding. For "8-week intensive," course module labels, structured-content tags where the gold accent reads as the brand's attention currency. Distinct from `badge-primary` (forest-tinted brand emphasis) and `badge-warning` (system yellow). One per row maximum; this is a salient label, not running metadata.
- **Brand-cohesive scarcity callouts** — For scarcity / urgency badges that need brand alignment (instead of system `warning`), use a `tertiary-300` background with `primary-900` text at `label-sm`. Reserved for headline-adjacent moments only.

### Inputs & Forms

Five canonical roles. Inputs share `52px` height with CTAs for tidy form alignment.

| Variant          | Background        | Text          | Radius      | Notes |
|------------------|-------------------|---------------|-------------|-------|
| `input`          | `white`           | `neutral-900` | `md` (10px) | 1px `neutral-300` border at rest. |
| `input-focus`    | `white`           | `neutral-900` | `md`        | 3px `info-500` (`#3B82F6`) outer focus ring + `primary-700` border. |
| `input-disabled` | `neutral-100`     | `neutral-500` | `md`        | 1px `neutral-200` border; placeholder fades to `neutral-400`. |
| `input-error`    | `white`           | `neutral-900` | `md`        | **2px `error-600` border**, helper text in `error-700` below the input. |
| `input-inverse`  | `primary-800`     | `neutral-50`  | `md`        | For forest signup modules / hero bands; placeholder in `neutral-300`, focus ring stays `info-500`. |

- Labels use `label-md` above the input — never inside as floating labels. This brand reads as premium, not Material Design.
- Inputs and CTAs share `52px` height for tidy form alignment.

### Navigation

Four canonical roles. The bar itself, the links inside, the active state of those links, and the inverse-surface variant.

| Variant           | Background         | Text          | Notes |
|-------------------|--------------------|---------------|-------|
| `nav`             | `neutral-100`      | `primary-700` | 80px desktop / 64px mobile. Transparent over hero, solidifies to `neutral-100` on scroll. |
| `nav-link`        | transparent        | `primary-700` | `label-md`, 8px/12px padding. Hover deepens to `primary-600`. |
| `nav-link-active` | transparent        | `primary-900` | Current-page state. The brand also pairs a 2px `secondary-500` terracotta underline mark with the active link as an editorial gesture (styling override, not a separate token). |
| `nav-inverse`     | `primary-700`      | `neutral-50`  | Forest-section sticky nav / footer-anchored nav. Active link inside flips to `tertiary-300` gold to pop against the dark. |

Layout: logo on the left, links centered or right-aligned at desktop, primary `button-primary` CTA on the far right. Mobile: hamburger left, logo center, no CTA in collapsed bar (CTA shows in the slide-out menu).

### Image Treatment

- **Hero photography**: full-bleed, `rounded.none`. Robert portrait images use a subtle `primary-950` overlay gradient bottom-up to recover headline contrast.
- **Card images**: `rounded.lg`, with object-cover, 16:9 default crop, 4:5 for portrait modules.
- **Avatars** (testimonials, instructor cards): `rounded.full`, 56–80px diameter, optional 2px `primary-700` ring for emphasis.

### Distinctive: The "Highlight Keyword" Pattern

Headlines often contain one emphasized word rendered in **Caveat** at a similar visual weight to the surrounding Albert Sans — mimicking the gesture of an instructor circling a word on a whiteboard:

```
The Difference Between [Driven] and Just Busy
       (Albert Sans 600)  (Caveat 600, secondary-500)
```

Specs (prose recipe — not a front-matter component token; this is a typography pattern applied as a `<span class="highlight-keyword">` or similar inline wrapper):
- Albert Sans `headline-lg` at 48px → Caveat at 64px for visual parity (Caveat's optical size runs small)
- Color: `secondary-500` (`#AB5C3C`) by default, occasionally `tertiary-300` for high-contrast moments on forest sections
- One keyword per headline. Two is loud. Three breaks the brand.

---

## 8. Do's and Don'ts

### Do

1. **Default the page to beige** (`neutral-100` `#F4F4F0`), not white. Reserve white for spotlight cards and the rare "spotlight section" pattern.
2. **Make CTAs pill-shaped, always.** `rounded.full` on every button — no exceptions.
3. **Use the gold CTA sparingly.** One or two solar-gold pills per viewport; more than that and gold loses its meaning.
4. **Pair gold backgrounds with deep-forest text.** `tertiary-300` background + `primary-700` text is the canonical CTA contrast.
5. **Alternate beige and forest sections** down the page. The rhythm is the brand.
6. **Use Caveat surgically.** One emphasized keyword per headline, terracotta `secondary-500` by default. Treat it like a brand-issued highlighter.
7. **Eyebrow every major section** with an uppercase tracked overline label (`secondary-600` terracotta) above the headline.
8. **Use generous vertical spacing** — section padding 96px minimum, push to 128px for hero modules.
9. **Apply soft elevation** — most cards get `sm` shadow + a 1px `neutral-300` border; only spotlight cards earn `2xl`.
10. **Use borders, not shadows, on forest sections.** Shadow disappears on dark; a 1px `primary-800` border defines edges instead.

### Don't

1. **Don't use pure black for text.** Use `neutral-900` (`#1D1D16`) or `primary-700` (`#154847`) — both preserve the olive/forest tonal warmth.
2. **Don't put yellow text on yellow.** Gold-on-gold has terrible contrast. CTA text is always `primary-700` deep forest.
3. **Don't square-corner buttons.** Pill or it's not a Driven Entrepreneur button.
4. **Don't run Caveat as body copy or full headlines.** It exists for keyword emphasis only.
5. **Don't gradient the brand colors together.** Flat color, sharp transitions — gradients across primary/secondary/tertiary cheapen the palette.
6. **Don't pair white CTAs with white pages.** This brand doesn't have a white-on-white pattern; if you need a low-volume CTA on white, use `button-outline` with a `primary-700` stroke.
7. **Don't use `warning-500` Tailwind yellow** for brand-aligned scarcity/urgency callouts — use `tertiary-300` gold or `tertiary-50` tinted background. The Tailwind warning yellow reads as system UI, not Robert.
8. **Don't shadow the dark forest sections.** Use borders or tonal-layer separation (`primary-800` on `primary-700`).
9. **Don't stack two yellow CTAs vertically.** If two actions need to share a column, one is gold (`button-primary`) and the other is forest (`button-secondary`) or outline.
10. **Don't add a fourth brand color.** Three is the system. New accents come from extending the existing palettes via numbered steps.
11. **Don't invent brand-named tokens** like `button-forest`, `card-beige`, `tag`, or `section-gold-tint`. Per CONTEXT.md Meta-rule 1, component tokens are role-based (`button-primary`, `card-feature`, `badge`, `card-inverse`), not color-named. Brand-specific patterns — terracotta accent CTAs, outline-on-forest, the spotlight card, section backgrounds, the gold module tag, the highlight-keyword span — live in §7 as **prose recipes**, never as front-matter tokens.

---

## 9. Responsive Behavior

### Breakpoints (Golden Hippo standardized)

| Token | Min Width | What changes for Driven Entrepreneur |
|-------|-----------|----------------------------------------|
| sm    | 640px     | Hero headline drops from `display` (72px) to `headline-lg` (48px); nav stays mobile-style |
| md    | 768px     | 2-column module layouts begin; cards step from full-width to 50/50; sticky CTA bar appears on long pages |
| lg    | 1024px    | Full desktop nav with center links; 3-column feature grids; hero copy column constrains to 720px |
| xl    | 1280px    | Default desktop layout; max content width hits 1280px |
| 2xl   | 1536px    | Hero modules can expand to 1440px; spotlight cards get extra horizontal padding |

### Touch Targets

- Minimum interactive size: 48 × 48px on mobile, 44 × 44px tolerated for inline links.
- Primary buttons run 52px tall by default — comfortable for thumb taps.
- Spacing between adjacent tap targets ≥ 8px (`spacing.4`).

### Collapsing Strategy

- **Nav**: full desktop → hamburger at <lg. CTA pulls into the slide-out menu, not the collapsed bar.
- **Hero**: side-by-side image+copy at lg+ → stacked image-above-copy at md → copy-only with smaller image at sm.
- **Section padding**: 96px desktop → 80px md → 64px sm.
- **Card grids**: 3-up at lg → 2-up at md → 1-up at sm. Spotlight cards stay 1-up across all breakpoints.
- **Headline scaling**: `display` 72px → 56px at md → 40px at sm; line-height loosens by 0.05 at each step down.

### Image Behavior

- Hero photography uses `object-cover` with focal-point art-direction for portrait vs landscape crops.
- Robert-as-mentor portraits: prefer square or 4:5 crops on mobile, 3:2 or 16:9 on desktop.
- Course thumbnails: 16:9 fixed crop across breakpoints, with `rounded.lg`.
- Decorative illustrations stay vector (SVG); raster only for photography.

---

## 10. Agent Prompt Guide

### Quick Color Reference

| Token             | Hex       | Use |
|-------------------|-----------|-----|
| `primary-700` ★   | `#154847` | Deep forest — text, dark sections, CTA hover bg |
| `primary-800`     | `#1E3837` | Forest pressed state, dark borders |
| `primary-900`     | `#132525` | Deepest text, footer-deep |
| `primary-50`      | `#F2F8F8` | Soft tint for forest-themed accents |
| `secondary-400` ★ | `#D58261` | Terracotta accent CTA, illustration anchor |
| `secondary-500`   | `#AB5C3C` | Caveat keyword color (default) |
| `secondary-600`   | `#8B4325` | Eyebrow label text on beige |
| `tertiary-300` ★  | `#FFD50B` | Solar gold — primary CTA bg |
| `tertiary-50`     | `#FBF7E7` | Gold-tinted accent section |
| `neutral-100`     | `#F4F4F0` | **Default page background (beige)** |
| `neutral-50`      | `#FBFBF9` | Spotlight cards above beige |
| `neutral-300`     | `#D8D8D0` | Default border on beige |
| `neutral-900`     | `#1D1D16` | Body text on beige/white |
| `white`           | `#FFFFFF` | Spotlight cards, spotlight sections (exception) |
| `info-500`        | `#3B82F6` | Focus ring |

### Token Reference Cheat Sheet

- Components reference tokens via `{colors.primary-700}`, `{rounded.full}`, `{typography.button-label}` — **never raw hex** in component specs.
- The front matter `colors`, `typography`, `rounded`, `spacing`, and `components` blocks are the authoritative source. If prose and YAML disagree, the YAML wins.
- Aliases (`primary`, `surface`, `surface-dark`) point at numbered steps — use the alias when the *role* matters, use the numbered step when the *exact shade* matters.

### Example Component Prompts

1. **"Build a hero section on the forest section background (`surface-dark` = `primary-700` — apply as a layout wrapper per §7 'Section backgrounds' prose recipe), a `display` headline in `neutral-50` white with one keyword styled via the highlight-keyword prose recipe (Caveat at `tertiary-300` gold), `body-lg` subhead in `neutral-200`, and a `button-primary` pill CTA (`tertiary-300` background, `primary-700` text, `rounded.full`)."**
2. **"Create a 3-up testimonial grid on the beige page (`surface` = `neutral-100` — default background) using the `card` component (white background, `rounded.lg` 16px, `sm` shadow, 32px padding). Each card has a 56px circular avatar, `headline-sm` quote, and `caption` attribution in `neutral-600`."**
3. **"Build a course-modules list using `card-inverse` (background `primary-700`, text `neutral-50`, `rounded.lg`, 1px `primary-800` border, no shadow). Each module has an `overline` eyebrow ('MODULE 01'), `headline-sm` title, and `body-md` description."**
4. **"Add an offer-reveal block using `card-feature` (`tertiary-50` gold-tint bg, `primary-900` text, `rounded.lg`, 32px padding), `headline-lg` headline, a single `button-primary` solar-gold CTA, and a `pull-quote` Caveat line below the CTA in `secondary-600` terracotta. Wrap the section in `surface-gold-tint` for a full-bleed gold-tinted band per the section-backgrounds prose recipe."**
5. **"Style the email signup form: `input` component (white bg, `neutral-300` border, `rounded.md`, 52px height) plus `button-primary` CTA on the right, both 52px tall, with a 12px gap. Add a `label-sm` privacy line below in `neutral-500`. For the validation-error state, swap the input to `input-error` (2px `error-600` border with `error-700` helper text)."**
6. **"Build a sticky nav using the `nav` token (`neutral-100` bg, `primary-700` text, 80px) with `nav-link` items and a single active link styled via `nav-link-active` (`primary-900` text plus 2px `secondary-500` terracotta underline). For the forest-section variant, swap to `nav-inverse` (`primary-700` bg, `neutral-50` links) and let the active link inside flip to `tertiary-300` gold."**
7. **"Add a dark testimonial band: wrap in `surface-dark` (`primary-700`), place a `card-inverse` testimonial with a `button-inverse` 'Read more' CTA, and pair an `input-inverse` newsletter capture (`primary-800` bg, `neutral-50` text) with a `button-primary` gold submit pill."**

### Iteration Guide

1. **Beige is the default canvas.** If a screen is all-white, you've probably missed the brand. Reach for `neutral-100` first.
2. **Pill-shape every button.** If a designer hands you a square CTA, change it to `rounded.full` — that's the brand's most-violated rule when starting from generic templates.
3. **Yellow is the action, forest is the identity.** Gold CTAs get attention; deep-forest defines brand. Don't invert this (no forest-bg button with yellow text *unless* it's a hover state of `button-primary`).
4. **Use Caveat like a highlighter, not a font.** One keyword per headline, terracotta color by default. Three Caveat words in one viewport is too many.
5. **Section-color alternation is the structural signature.** When laying out a long page, plan the rhythm — beige → forest → beige → spotlight → forest — before writing any component.
6. **Eyebrow + headline + subhead is the standard module opener.** Don't skip the eyebrow on a major section; it's part of the pacing identity.
7. **Refer to the YAML for exact values.** If you're tempted to use a hex that isn't in the front matter, you're probably about to break the system — go find the nearest token instead.
