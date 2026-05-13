---
version: alpha
name: DebtClear USA
description: A consumer debt relief brand that helps everyday Americans negotiate down unsecured debt — built to feel like the bank you actually trust, not the mailer you throw away.
colors:
  # Brand — Primary (Anchor Navy)
  primary-50: "#F2F7FE"
  primary-100: "#DFEBF8"
  primary-200: "#BDD7F4"
  primary-300: "#99BEE7"
  primary-400: "#719CCB"
  primary-500: "#4B78A7"
  primary-600: "#345D89"
  primary-700: "#26476A"
  primary-800: "#0D3B66"
  primary-900: "#122334"
  primary-950: "#07101B"

  # Brand — Secondary (Signal Azure)
  secondary-50: "#F0F8FF"
  secondary-100: "#D9ECFF"
  secondary-200: "#B1D9FF"
  secondary-300: "#7EC1FF"
  secondary-400: "#0197F6"
  secondary-500: "#0079C6"
  secondary-600: "#005E9D"
  secondary-700: "#004879"
  secondary-800: "#00355B"
  secondary-900: "#00233F"
  secondary-950: "#001022"

  # Brand — Tertiary (Liberty Ember)
  tertiary-50: "#FFF4EF"
  tertiary-100: "#FFE3D5"
  tertiary-200: "#FFC6A8"
  tertiary-300: "#FF9F6B"
  tertiary-400: "#F16E00"
  tertiary-500: "#B85200"
  tertiary-600: "#913F00"
  tertiary-700: "#702F00"
  tertiary-800: "#542200"
  tertiary-900: "#3A1500"
  tertiary-950: "#1F0800"

  # Neutral — Slate (Tailwind)
  neutral-50: "#F8FAFC"
  neutral-100: "#F1F5F9"
  neutral-200: "#E2E8F0"
  neutral-300: "#CBD5E1"
  neutral-400: "#94A3B8"
  neutral-500: "#64748B"
  neutral-600: "#475569"
  neutral-700: "#334155"
  neutral-800: "#1E293B"
  neutral-900: "#0F172A"
  neutral-950: "#020617"

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
  primary: "{colors.primary-800}"
  secondary: "{colors.secondary-400}"
  tertiary: "{colors.tertiary-400}"
  surface: "{colors.neutral-50}"
  surface-elevated: "#FFFFFF"
  on-surface: "{colors.neutral-900}"
  on-surface-muted: "{colors.neutral-600}"
  border: "{colors.neutral-200}"
  border-strong: "{colors.neutral-300}"
  focus-ring: "#3B82F6"

typography:
  display:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-md:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  feature-title:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 0.9375rem
    fontWeight: 600
    lineHeight: 1.4
  label-sm:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 0.8125rem
    fontWeight: 600
    lineHeight: 1.4
  caption:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 0.75rem
    fontWeight: 400
    lineHeight: 1.4
  overline:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.08em
  micro:
    fontFamily: "'Poppins', system-ui, sans-serif"
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1.3
  code:
    fontFamily: "Menlo, Consolas, 'Liberation Mono', monospace"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  "2xl": 24px
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
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 52px
  button-primary-hover:
    backgroundColor: "{colors.primary-700}"
    textColor: "{colors.neutral-50}"
  button-primary-active:
    backgroundColor: "{colors.primary-900}"
    textColor: "{colors.neutral-50}"
  button-primary-disabled:
    backgroundColor: "{colors.neutral-300}"
    textColor: "{colors.neutral-600}"

  button-cta:
    backgroundColor: "{colors.tertiary-400}"
    textColor: "{colors.primary-900}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 52px
  button-cta-hover:
    backgroundColor: "{colors.tertiary-500}"
    textColor: "{colors.neutral-50}"
  button-cta-active:
    backgroundColor: "{colors.tertiary-600}"
    textColor: "{colors.neutral-50}"

  button-secondary:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.primary-800}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 52px
  button-secondary-hover:
    backgroundColor: "{colors.neutral-200}"
    textColor: "{colors.primary-800}"

  button-outline:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.primary-800}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 14px 28px
    height: 52px
  button-outline-hover:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-800}"

  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary-800}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 44px
  button-ghost-hover:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-800}"

  card:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
    rounded: "{rounded.lg}"
    padding: 32px

  card-tinted:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-900}"
    rounded: "{rounded.lg}"
    padding: 32px

  card-dark:
    backgroundColor: "{colors.primary-900}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.lg}"
    padding: 32px

  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 14px 16px
    height: 52px
  input-focus:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
  input-disabled:
    backgroundColor: "{colors.neutral-100}"
    textColor: "{colors.neutral-600}"
  input-error:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"

  badge-success:
    backgroundColor: "{colors.success-50}"
    textColor: "{colors.success-700}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px

  badge-warning:
    backgroundColor: "{colors.warning-50}"
    textColor: "{colors.warning-800}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px

  badge-info:
    backgroundColor: "{colors.secondary-50}"
    textColor: "{colors.secondary-700}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px

  nav-bar:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.neutral-900}"
    padding: 16px 32px
    height: 80px

  nav-bar-dark:
    backgroundColor: "{colors.primary-800}"
    textColor: "{colors.neutral-50}"
    padding: 16px 32px
    height: 80px
---

# DebtClear USA

## 1. Visual Theme & Atmosphere

DebtClear USA looks the way trust _should_ look — institutional posture, modern bones, no theatrics. The visual identity is anchored by a deep, almost-black navy (`#0D3B66`) that does most of the heavy lifting: it shows up in nav bars, primary buttons, hero backgrounds, and statements of authority. Against that navy, a confident azure (`#0197F6`) carries the digital, forward-looking side of the brand — links, info states, secondary actions — while a warm orange (`#F16E00`) serves as the human element. The orange isn't decoration. It's reserved for moments where a real person is being asked to take action: "Get my plan," "See if I qualify," "Start now." When the orange shows up, something is being offered.

The brand sits next to a Slate neutral palette, which is the most opinionated Tailwind neutral — distinctly blue-toned, polished, and reminiscent of financial platforms and serious newspapers. This is intentional. A warmer neutral (Stone, Taupe) would soften the brand into something cozy and forgettable; Slate keeps DebtClear USA reading as substantial. Typography is Poppins everywhere — geometric, friendly, and wide enough to be legible at small sizes for users who may be reading numbers and disclosures with reading glasses on. The aesthetic is bold and expressive within the constraints of the financial category: large numbers, confident headlines, generous whitespace, and CTAs that don't whisper.

The brand's job is to sit somewhere between a Chase ad and a Wealthfront product page. More credible than the late-night debt-relief mailer, less corporate than a Big Four bank. A debt-relief brand has to clear a higher trust bar than almost any other consumer category, and every visual choice here is in service of that bar.

**Key Characteristics**

- Deep navy authority (`#0D3B66`) as the primary visual signal of trust and stability
- Warm orange (`#F16E00`) reserved exclusively for human-action moments
- Azure (`#0197F6`) for digital affordances — links, info, secondary buttons
- Slate neutrals for cool, editorial polish — never warm or beige
- Poppins everywhere, with confident weight contrast (400 body, 600/700 headlines)
- Generous whitespace; dense layouts read as desperate in this category
- Large, readable numbers — financial figures are the hero of every layout
- Bold but never loud; expressive but never playful

## 2. Color Palette & Roles

### Primary — Anchor Navy

The institutional voice of the brand. Used for nav bars, primary buttons, hero sections, footers, and any moment that needs to read as substantial. The anchor sits at step 800 because the user-supplied hex is genuinely dark — using it lower in the scale would have made the palette feel anemic at deep steps.

| Step  | Token         | Hex       | Usage Guidance                                                                          |
| ----- | ------------- | --------- | --------------------------------------------------------------------------------------- |
| 50    | `primary-50`  | `#F2F7FE` | Tinted card backgrounds, selected-state highlights, subtle banner fills                 |
| 100   | `primary-100` | `#DFEBF8` | Badge backgrounds, navy-tinted info banners, hover background for ghost links           |
| 200   | `primary-200` | `#BDD7F4` | Soft tints, dividers on tinted surfaces, disabled-state navy fills                      |
| 300   | `primary-300` | `#99BEE7` | Focus rings (brand alternative to default blue), illustration mid-tones                 |
| 400   | `primary-400` | `#719CCB` | Mid-tone navy — used sparingly; works as a quiet text accent on dark surfaces           |
| 500   | `primary-500` | `#4B78A7` | Secondary navy text on light tints, illustration shadows                                |
| 600   | `primary-600` | `#345D89` | Secondary buttons on dark surfaces, hover-from-anchor lightening                        |
| 700   | `primary-700` | `#26476A` | **Hover state for primary buttons** — one step lighter than anchor for visible feedback |
| 800 ★ | `primary-800` | `#0D3B66` | **Default — primary buttons, nav, hero backgrounds, brand wordmark**                    |
| 900   | `primary-900` | `#122334` | Pressed/active state for primary buttons; deep dark surfaces; footer alternative        |
| 950   | `primary-950` | `#07101B` | Near-black with navy undertone — dark theme backgrounds, deepest overlays               |

### Secondary — Signal Azure

The digital, modern voice. Pairs with the navy anywhere a layer of energy is needed — links, secondary CTAs, info states, illustrative accents. Anchored at step 400 because the source hex is genuinely vivid and the chroma belongs at a mid-tone step.

| Step  | Token           | Hex       | Usage Guidance                                                            |
| ----- | --------------- | --------- | ------------------------------------------------------------------------- |
| 50    | `secondary-50`  | `#F0F8FF` | Info banner backgrounds, badge fills, tinted info cards                   |
| 100   | `secondary-100` | `#D9ECFF` | Soft info tints, hover-state backgrounds for info-keyed elements          |
| 200   | `secondary-200` | `#B1D9FF` | Decorative borders on info components, illustration mid-lights            |
| 300   | `secondary-300` | `#7EC1FF` | Focus rings on dark surfaces, decorative accents                          |
| 400 ★ | `secondary-400` | `#0197F6` | **Default — text links, secondary CTAs, info icons, key digital accents** |
| 500   | `secondary-500` | `#0079C6` | **Hover state for azure links and secondary CTAs**                        |
| 600   | `secondary-600` | `#005E9D` | Pressed state; readable azure text on white surfaces                      |
| 700   | `secondary-700` | `#004879` | Azure text on tinted backgrounds (50–100); deep info text                 |
| 800   | `secondary-800` | `#00355B` | Strong azure text on light tints; navigation accents                      |
| 900   | `secondary-900` | `#00233F` | Deep azure overlays, dark-theme accent surfaces                           |
| 950   | `secondary-950` | `#001022` | Near-black azure — rarely used; reserved for layered dark themes          |

### Tertiary — Liberty Ember

The human-action color. This is the brand's only warm note and it's deliberately rationed: any time the user is being invited to _do something_ — qualify, enroll, claim, start — the ember shows up. Anchored at step 400 to preserve the source hex's vibrancy.

| Step  | Token          | Hex       | Usage Guidance                                                           |
| ----- | -------------- | --------- | ------------------------------------------------------------------------ |
| 50    | `tertiary-50`  | `#FFF4EF` | Banner backgrounds for promotional callouts, soft warm tints             |
| 100   | `tertiary-100` | `#FFE3D5` | Badge fills for "limited time" or "new" markers                          |
| 200   | `tertiary-200` | `#FFC6A8` | Soft warm tints, illustration highlights                                 |
| 300   | `tertiary-300` | `#FF9F6B` | Decorative accents, illustration mid-tones                               |
| 400 ★ | `tertiary-400` | `#F16E00` | **Default — high-conversion CTA buttons, action callouts, hero accents** |
| 500   | `tertiary-500` | `#B85200` | **Hover state for ember CTAs** — visibly darker, signals press-readiness |
| 600   | `tertiary-600` | `#913F00` | Pressed/active state for ember CTAs                                      |
| 700   | `tertiary-700` | `#702F00` | Ember text on light tints (50–200); readable warm text on white          |
| 800   | `tertiary-800` | `#542200` | Deep ember text on tinted backgrounds                                    |
| 900   | `tertiary-900` | `#3A1500` | Dark ember overlays, footer warm accents                                 |
| 950   | `tertiary-950` | `#1F0800` | Near-black warm — reserved for dark-theme illustrations                  |

### Secondary & Accent (Semantic)

Standardized across all Golden Hippo brands. Use these for system feedback, never derive custom variants.

#### Error / Danger (Tailwind Red)

| Step | Hex       | Step | Hex       |
| ---- | --------- | ---- | --------- |
| 50   | `#FEF2F2` | 600  | `#DC2626` |
| 100  | `#FEE2E2` | 700  | `#B91C1C` |
| 200  | `#FECACA` | 800  | `#991B1B` |
| 300  | `#FCA5A5` | 900  | `#7F1D1D` |
| 400  | `#F87171` | 950  | `#450A0A` |
| 500  | `#EF4444` |      |           |

| Role               | Light Surface      | Dark Surface       |
| ------------------ | ------------------ | ------------------ |
| Text               | 600                | 400                |
| Background         | 50                 | 950                |
| Border             | 200                | 800                |
| Destructive button | 600 bg, white text | 600 bg, white text |

#### Info (Tailwind Blue)

| Step | Hex       | Step | Hex       |
| ---- | --------- | ---- | --------- |
| 50   | `#EFF6FF` | 600  | `#2563EB` |
| 100  | `#DBEAFE` | 700  | `#1D4ED8` |
| 200  | `#BFDBFE` | 800  | `#1E40AF` |
| 300  | `#93C5FD` | 900  | `#1E3A8A` |
| 400  | `#60A5FA` | 950  | `#172554` |
| 500  | `#3B82F6` |      |           |

| Role       | Light Surface   | Dark Surface |
| ---------- | --------------- | ------------ |
| Text       | 600             | 400          |
| Background | 50              | 950          |
| Border     | 200             | 800          |
| Focus ring | 500 (`#3B82F6`) | 500          |

> Note: DebtClear USA's brand secondary (`secondary-400`, `#0197F6`) is its own azure separate from the Tailwind Info palette. Use the Info palette only for system "info" UI (banners, tooltips, info icons) — not for brand accents.

#### Success (Tailwind Green)

| Step | Hex       | Step | Hex       |
| ---- | --------- | ---- | --------- |
| 50   | `#F0FDF4` | 600  | `#16A34A` |
| 100  | `#DCFCE7` | 700  | `#15803D` |
| 200  | `#BBF7D0` | 800  | `#166534` |
| 300  | `#86EFAC` | 900  | `#14532D` |
| 400  | `#4ADE80` | 950  | `#052E16` |
| 500  | `#22C55E` |      |           |

| Role       | Light Surface | Dark Surface |
| ---------- | ------------- | ------------ |
| Text       | 600           | 400          |
| Background | 50            | 950          |
| Border     | 200           | 800          |

#### Warning (Tailwind Yellow)

| Step | Hex       | Step | Hex       |
| ---- | --------- | ---- | --------- |
| 50   | `#FEFCE8` | 600  | `#CA8A04` |
| 100  | `#FEF9C3` | 700  | `#A16207` |
| 200  | `#FEF08A` | 800  | `#854D0E` |
| 300  | `#FDE047` | 900  | `#713F12` |
| 400  | `#FACC15` | 950  | `#422006` |
| 500  | `#EAB308` |      |           |

| Role       | Light Surface | Dark Surface |
| ---------- | ------------- | ------------ |
| Text       | 700           | 400          |
| Background | 50            | 950          |
| Border     | 200           | 800          |

### Surface & Background

Built from Tailwind Slate. The Slate undertone reinforces the navy primary instead of fighting it.

| Role                                    | Token              | Hex       | Notes                                                     |
| --------------------------------------- | ------------------ | --------- | --------------------------------------------------------- |
| Page background                         | `neutral-50`       | `#F8FAFC` | Default app and marketing background                      |
| Card / elevated surface                 | `surface-elevated` | `#FFFFFF` | Cards, modals, sheets — rises off the page                |
| Subtle interactive surface              | `neutral-100`      | `#F1F5F9` | Secondary buttons, hover backgrounds                      |
| Selected / pressed surface              | `neutral-200`      | `#E2E8F0` | Pressed states, selected list items                       |
| Dark surface (footer / inverted blocks) | `primary-800`      | `#0D3B66` | Brand-tinted dark; preferred over neutral-800 for footers |
| Deep dark / dark theme bg               | `neutral-900`      | `#0F172A` | Dark-theme app backgrounds                                |
| Deepest overlay                         | `neutral-950`      | `#020617` | Modal scrims, deepest layers                              |

### Neutrals & Text

| Role                              | Token         | Hex       | Use                                         |
| --------------------------------- | ------------- | --------- | ------------------------------------------- |
| Primary text                      | `neutral-900` | `#0F172A` | Default body and headings on light surfaces |
| Secondary text                    | `neutral-600` | `#475569` | Supporting copy, metadata, helper text      |
| Tertiary / muted text             | `neutral-500` | `#64748B` | De-emphasized labels, timestamps            |
| Disabled text                     | `neutral-400` | `#94A3B8` | Disabled inputs, disabled button labels     |
| Text on dark surfaces (primary)   | `neutral-50`  | `#F8FAFC` | Body text on navy/dark blocks               |
| Text on dark surfaces (secondary) | `neutral-300` | `#CBD5E1` | Supporting copy on navy/dark blocks         |

### Borders & Dividers

| Role              | Token         | Hex       | Use                                                |
| ----------------- | ------------- | --------- | -------------------------------------------------- |
| Light border      | `neutral-200` | `#E2E8F0` | Default card borders, dividers, input borders      |
| Prominent border  | `neutral-300` | `#CBD5E1` | Hover-state input borders, focused dividers        |
| Dark theme border | `neutral-700` | `#334155` | Dividers on navy/dark surfaces                     |
| Focus ring        | `focus-ring`  | `#3B82F6` | Keyboard focus indicator (2px outline, 2px offset) |

### Gradient System

Two sanctioned gradients. Anything outside this list breaks the brand.

- **Authority gradient** — `linear-gradient(135deg, primary-900 0%, primary-800 100%)` (`#122334` → `#0D3B66`). Used on hero sections and dark feature blocks.
- **Conversion gradient** — `linear-gradient(135deg, tertiary-400 0%, tertiary-500 100%)` (`#F16E00` → `#B85200`). Used sparingly on the highest-intent CTA in a layout.

No three-color gradients. No rainbow gradients. No mid-stop pinks or purples — this is a financial brand, not a startup landing page.

## 3. Typography Rules

**Font Family**

- **Headline / Display:** `'Poppins', system-ui, sans-serif` — geometric, modern, friendly. Reads warm without being soft.
- **Body / UI:** `'Poppins', system-ui, sans-serif` — same family for visual unity. Poppins holds up well at small sizes.
- **Code / Data:** `Menlo, Consolas, 'Liberation Mono', monospace` — system stack for tabular data, account numbers, and any monospaced display.

### Hierarchy

| Token           | Font    | Size (px / rem) | Weight | Line-height | Letter-spacing | Notes                                       |
| --------------- | ------- | --------------- | ------ | ----------- | -------------- | ------------------------------------------- |
| `display`       | Poppins | 72 / 4.5rem     | 700    | 1.05        | -0.03em        | Hero headlines only — one per page max      |
| `headline-lg`   | Poppins | 48 / 3rem       | 700    | 1.1         | -0.02em        | Page-level H1s, major section openers       |
| `headline-md`   | Poppins | 36 / 2.25rem    | 600    | 1.15        | -0.015em       | Section headings, modal titles              |
| `headline-sm`   | Poppins | 24 / 1.5rem     | 600    | 1.25        | -0.01em        | Sub-sections, card titles in feature lists  |
| `feature-title` | Poppins | 20 / 1.25rem    | 600    | 1.3         | —              | Feature card titles, list-item primary text |
| `body-lg`       | Poppins | 18 / 1.125rem   | 400    | 1.6         | —              | Lead paragraphs, hero subcopy               |
| `body-md`       | Poppins | 16 / 1rem       | 400    | 1.6         | —              | **Default body text**                       |
| `body-sm`       | Poppins | 14 / 0.875rem   | 400    | 1.5         | —              | Helper text, dense UI copy                  |
| `label-md`      | Poppins | 15 / 0.9375rem  | 600    | 1.4         | —              | Button labels, form labels                  |
| `label-sm`      | Poppins | 13 / 0.8125rem  | 600    | 1.4         | —              | Secondary button labels, badge text         |
| `caption`       | Poppins | 12 / 0.75rem    | 400    | 1.4         | —              | Captions, metadata, fine print              |
| `overline`      | Poppins | 12 / 0.75rem    | 600    | 1.2         | 0.08em         | Eyebrow labels above headlines, ALL CAPS    |
| `micro`         | Poppins | 11 / 0.6875rem  | 500    | 1.3         | —              | Disclosures, footnote markers               |
| `code`          | Menlo   | 14 / 0.875rem   | 400    | 1.5         | —              | Account IDs, inline code, tabular numbers   |

**Principles**

1. **Weight contrast does the heavy lifting.** Body is 400, labels are 600, headlines are 600–700. There's no 500. The jump between weights is intentional — it's what makes the typography feel decisive instead of mushy.
2. **Negative letter-spacing on large type.** Display and headline-lg get `-0.03em` and `-0.02em` respectively. This tightens optical spacing at large sizes where Poppins can otherwise feel airy.
3. **Generous line-height on body.** Body sits at `1.6` because users read disclosures, FAQs, and process explanations carefully — they need air between lines to scan.
4. **Numbers are first-class.** When showing dollar amounts, percentages, or timelines, use `headline-md` or `headline-lg` weight. Money is the hero of every layout.
5. **No italics for emphasis.** Use weight (`600`) or color (`primary-800`) instead. Italics in geometric sans-serifs read as accidental.

## 4. Layout Principles

### Spacing System

DebtClear USA uses the standardized Golden Hippo spacing scale:

`0px, 2px, 4px, 6px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px, 160px, 192px, 224px, 256px, 320px, 384px, 480px, 560px, 640px, 720px, 768px, 1024px, 1280px, 1440px, 1600px, 1920px`

**Common patterns**

- Component internal padding: 16px–32px
- Button padding: 14px vertical, 28px horizontal (large CTAs); 12px / 20px (small)
- Card padding: 24px–32px (32px for hero cards)
- Stack gaps (small): 8px (tight UI clusters); 12px (form rows)
- Stack gaps (medium): 16px–24px (related content blocks)
- Stack gaps (large): 48px–80px (between major page sections)
- Section vertical spacing: 96px–128px (marketing pages); 64px (app surfaces)
- Page max-widths: 1280px (default marketing); 1024px (long-form content); 768px (forms and onboarding)

### Grid & Container

- **Default container max-width:** 1280px, centered, with 24px horizontal padding on mobile growing to 64px at `lg`.
- **Form container max-width:** 768px. Forms and onboarding flows collapse to a narrower column to keep eye-travel manageable.
- **Long-form content max-width:** 720px. Disclosures, FAQs, and educational pages.
- **Column system:** 12-column grid on desktop with 32px gutters; 4-column on tablet (24px gutters); single column on mobile.

### Whitespace Philosophy

This category competes with predatory players who jam every pixel with urgency. DebtClear USA does the opposite — generous whitespace is a trust signal. Sections breathe at 96–128px vertical spacing on marketing pages. Hero blocks claim real estate. The visual hierarchy does the persuading; the layout never crowds the user.

## 5. Depth & Elevation

| Token | Value                                                                 | Use                                            |
| ----- | --------------------------------------------------------------------- | ---------------------------------------------- |
| `2xs` | `0 1px rgb(0 0 0 / 0.05)`                                             | Hairline divider on white-on-white cards; rare |
| `xs`  | `0 1px 2px 0 rgb(0 0 0 / 0.05)`                                       | Resting input fields, secondary buttons        |
| `sm`  | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`       | **Default card resting elevation**             |
| `md`  | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`    | Hovered cards, active dropdowns                |
| `lg`  | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`  | Popovers, floating navigation, sticky CTAs     |
| `xl`  | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Modals, command palettes, drawer overlays      |
| `2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)`                                 | Hero showcase blocks, marquee testimonials     |

**Shadow Philosophy**

DebtClear USA uses shadows as confirmation, not decoration. The `sm` token does 80% of the work — it's the resting state for almost every card. Hover lifts go to `md`. The big shadows (`xl`, `2xl`) are reserved for genuine elevation moments (modals, hero showcase blocks) and should appear at most once per visible viewport.

The brand also uses **tonal layering** as a depth strategy independent of shadows: a `neutral-50` page sits behind a white card with a `neutral-200` border, which is often clearer than a shadow on a financial dashboard. When in doubt, prefer a 1px border in `neutral-200` over a shadow — borders read as "structured" and shadows read as "promotional," and DebtClear USA is more of a structured brand.

## 6. Shapes

**Shape Language**

DebtClear USA's geometry is _moderately rounded_ — soft enough to feel modern and approachable, sharp enough to read as serious. Buttons and inputs sit at 8px (`md`); cards and modals at 12px (`lg`); badges and pills go fully rounded for a friendly counterpoint. Nothing in the system is a hard 0px rectangle except hero images and content dividers.

### Border Radius Scale

| Token          | Value  | Use Case                                             |
| -------------- | ------ | ---------------------------------------------------- |
| `rounded.none` | 0px    | Hero images at full-bleed; inline content dividers   |
| `rounded.sm`   | 4px    | Inline tags, compact badges                          |
| `rounded.md`   | 8px    | **Default — buttons, inputs, dropdowns**             |
| `rounded.lg`   | 12px   | Cards, modals, sheets                                |
| `rounded.xl`   | 16px   | Hero cards, feature showcase blocks                  |
| `rounded.2xl`  | 24px   | Marquee blocks, testimonial cards                    |
| `rounded.full` | 9999px | Avatars, status pills, badges, circular icon buttons |

### Application Rules

- **Buttons & form inputs:** `rounded.md` (8px) — recognizable as interactive without feeling toy-like
- **Cards & containers:** `rounded.lg` (12px) — the workhorse for any contained surface
- **Hero / feature blocks:** `rounded.xl` (16px) — slightly more dramatic, used at top of hierarchy
- **Modals & sheets:** `rounded.lg` (12px) on desktop; `rounded.xl` top-only on mobile sheets
- **Badges & status pills:** `rounded.full` — friendly, readable at small sizes
- **Avatars & icon buttons:** `rounded.full`
- **Images in cards:** Match the parent card's radius (typically `rounded.lg`)
- **Hero / banner images:** `rounded.none` — full-bleed, edge-to-edge

## 7. Component Stylings

Every component below has a matching front-matter entry under `components`. The prose specs are the human-readable explanation; the YAML is the contract.

### Buttons

Five variants, all sharing the same height and corner radius for visual consistency.

**Primary — Authority**

- Background: `{colors.primary-800}` (`#0D3B66`)
- Text: `{colors.neutral-50}` (`#F8FAFC`)
- Padding: 14px / 28px, height 52px
- Radius: `rounded.md` (8px)
- Hover: `{colors.primary-700}` (`#26476A`) — visibly lighter
- Active: `{colors.primary-900}` (`#122334`) — pressed-into-the-page
- The default action when there's no warm-action moment. Used for "Sign in," "Continue," "Save."

**CTA — Conversion (Liberty Ember)**

- Background: `{colors.tertiary-400}` (`#F16E00`)
- Text: `{colors.primary-900}` (`#122334`) — dark navy, not white. The bright ember doesn't clear WCAG AA against white text, but the deep navy clears it at 5.3:1 and looks intentional, not compromised. Hover and active states _do_ use white text because the darker oranges underneath have enough contrast.
- Padding: 14px / 28px, height 52px
- Radius: `rounded.md` (8px)
- Hover: Background `{colors.tertiary-500}` (`#B85200`), text `{colors.neutral-50}`
- Active: Background `{colors.tertiary-600}` (`#913F00`), text `{colors.neutral-50}`
- The single highest-intent action on a page. "See if I qualify," "Get my plan," "Start now." Use at most once per visible viewport — its power comes from rarity.

**Secondary — Neutral**

- Background: `{colors.neutral-100}` (`#F1F5F9`)
- Text: `{colors.primary-800}`
- Padding: 14px / 28px, height 52px
- Radius: `rounded.md`
- Hover: `{colors.neutral-200}` (`#E2E8F0`)
- For "Cancel," "Back," "Learn more" — quiet next-to-primary.

**Outline — Light**

- Background: `#FFFFFF` with `1px solid {colors.neutral-300}`
- Text: `{colors.primary-800}`
- Padding: 14px / 28px, height 52px
- Hover: Background `{colors.primary-50}` (`#F2F7FE`)
- Used on tinted hero backgrounds where a solid neutral button would compete with the primary CTA.

**Ghost — Tertiary**

- Background: transparent
- Text: `{colors.primary-800}`
- Padding: 12px / 20px, height 44px
- Hover: Background `{colors.primary-50}`
- Inline links-as-buttons, navigation items, low-priority actions.

**Disabled (any variant)**

- Background: `{colors.neutral-300}` (`#CBD5E1`)
- Text: `{colors.neutral-500}` (`#64748B`)
- Cursor: `not-allowed`

### Cards & Containers

**Default card (light)**

- Background: `#FFFFFF`
- Border: `1px solid {colors.neutral-200}` (`#E2E8F0`)
- Radius: `rounded.lg` (12px)
- Padding: 32px (24px on mobile)
- Shadow: `sm` at rest; `md` on hover for interactive cards

**Tinted card**

- Background: `{colors.primary-50}` (`#F2F7FE`)
- Text: `{colors.primary-900}`
- Radius: `rounded.lg`
- Padding: 32px
- No border, no shadow — the tint is the structural cue

**Dark card (testimonial / feature)**

- Background: `{colors.primary-900}` (`#122334`)
- Text: `{colors.neutral-50}`
- Radius: `rounded.lg` (or `rounded.xl` for hero feature blocks)
- Padding: 32px–48px

### Inputs & Forms

**Text input — default**

- Background: `#FFFFFF`
- Text: `{colors.neutral-900}`
- Border: `1px solid {colors.neutral-300}` (`#CBD5E1`)
- Padding: 14px / 16px, height 52px
- Radius: `rounded.md` (8px)
- Typography: `body-md`
- Placeholder: `{colors.neutral-400}` (`#94A3B8`)

**Focus state**

- Border: `2px solid {colors.focus-ring}` (`#3B82F6`)
- Outline: `2px solid {colors.focus-ring}` with 2px offset (for keyboard users)

**Error state**

- Border: `2px solid {colors.error-600}` (`#DC2626`)
- Helper text below: `{colors.error-700}`, `body-sm`

**Disabled**

- Background: `{colors.neutral-100}`
- Text: `{colors.neutral-500}`
- Cursor: `not-allowed`

**Form labels**

- Typography: `label-md`, color `{colors.neutral-900}`
- Margin: 8px below label, 6px above helper text

### Navigation

**Desktop nav (light)**

- Background: `#FFFFFF`
- Height: 80px
- Border-bottom: `1px solid {colors.neutral-200}`
- Logo on left; nav links center or right; CTA pinned right
- Active link: text color `{colors.primary-800}`, weight 600, with a 2px `{colors.tertiary-400}` underline

**Desktop nav (dark / inverted)**

- Background: `{colors.primary-800}` (`#0D3B66`)
- Text: `{colors.neutral-50}`
- Active link: 2px `{colors.tertiary-400}` underline
- Used on landing pages where the nav sits on top of a hero image

**Mobile nav**

- Hamburger menu collapses to a sheet from the right
- Sheet background: `#FFFFFF`
- Sheet radius: `rounded.xl` top-only
- Nav links: `feature-title` typography, 56px tap height each

### Image Treatment

- **Hero images:** Full-bleed, `rounded.none`, no shadow
- **Card images:** Match parent card radius (typically `rounded.lg`), shadow inherits from card
- **Avatars:** `rounded.full`, sized at 32px / 40px / 48px / 64px (no in-between)
- **Illustrations:** Limited palette — only navy, azure, ember, and Slate neutrals. No off-brand colors, no gradients beyond the two sanctioned ones.

### Distinctive Components

**Trust block**
A horizontal strip showing partner logos, accreditation marks (BBB rating, security badges), and review-star summary. Background: `{colors.neutral-100}`, padding 32px vertical, content max-width 1024px. Sits directly under the hero on every marketing page — it's load-bearing for trust in this category.

**Number callout**
A large stat (e.g., "$3 BILLION DEBT RELIEVED") with an `overline` eyebrow above it.

- Eyebrow: `overline` typography, color `{colors.tertiary-400}`
- Number: `display` or `headline-lg`, color `{colors.primary-800}`
- Caption below: `body-md`, color `{colors.neutral-600}`

**Status badge**

- Success: `badge-success` — `{colors.success-50}` bg, `{colors.success-700}` text
- Warning: `badge-warning` — `{colors.warning-50}` bg, `{colors.warning-800}` text
- Info: `badge-info` — `{colors.secondary-50}` bg, `{colors.secondary-700}` text
- Radius: `rounded.full`, padding 4px / 12px, typography `label-sm`

## 8. Do's and Don'ts

**Do**

- Use `{colors.primary-800}` (`#0D3B66`) as the dominant brand color across nav, hero, and primary buttons.
- Reserve `{colors.tertiary-400}` (`#F16E00`) for the single highest-intent CTA in a viewport.
- Lead marketing pages with a Trust block directly under the hero — partner logos, accreditation, review-star summary.
- Use Slate neutrals (`{colors.neutral-50}` page, `{colors.neutral-200}` borders) — they reinforce the cool brand palette.
- Set body copy at `{typography.body-md}` (16px / 1rem) with 1.6 line-height for legibility on disclosures and FAQs.
- Treat numbers as the hero — render dollar amounts and percentages at `{typography.headline-md}` or larger.
- Apply `{rounded.md}` (8px) to buttons and inputs; `{rounded.lg}` (12px) to cards.
- Use the `sm` shadow as the default card resting state; reserve `xl`/`2xl` for genuine elevation moments.
- Pair a `1px` `{colors.neutral-200}` border with a white card whenever the layout sits on a `neutral-50` page — the structural clarity beats a shadow alone.
- Use `{colors.focus-ring}` (`#3B82F6`) with a 2px outline and 2px offset for keyboard focus on every interactive element.

**Don't**

- Don't use the ember (`{colors.tertiary-400}`) as a decorative accent. It is exclusively an action color.
- Don't let two ember CTAs compete in the same viewport — power comes from rarity.
- Don't substitute Stone, Taupe, or any warm neutral for `neutral-*` (Slate). The cool undertone is intentional.
- Don't pair the brand azure (`{colors.secondary-400}`) with the Tailwind Info palette in the same component — they read as the same color and create ambiguity.
- Don't use italics for emphasis. Use weight `600` or color `{colors.primary-800}` instead.
- Don't use radii larger than `{rounded.2xl}` (24px) — the brand is moderately rounded, not playful.
- Don't introduce gradients beyond the two sanctioned ones (Authority navy and Conversion ember).
- Don't crowd layouts. Section spacing of `64px–128px` is non-negotiable on marketing pages.
- Don't use shadow `xl` or `2xl` more than once per visible viewport — they lose meaning when stacked.
- Don't render legally-required disclosures below `{typography.caption}` (12px). Compliance text must remain readable.

## 9. Responsive Behavior

### Breakpoints

| Name  | Min Width | Behavior in DebtClear USA                                                 |
| ----- | --------- | ------------------------------------------------------------------------- |
| `sm`  | 640px     | Hero subcopy expands; CTA stays full-width but gains breathing room       |
| `md`  | 768px     | Two-column form layouts emerge; nav remains stacked-collapsed             |
| `lg`  | 1024px    | Full horizontal nav appears with CTA pinned right; 3-column feature grids |
| `xl`  | 1280px    | Default marketing max-width hits its ceiling; container stops growing     |
| `2xl` | 1536px    | Generous gutters around 1280px container; no further content scaling      |

### Touch Targets

- Minimum tap target: 44px × 44px (per WCAG)
- Default button height: 52px on mobile and desktop — meets target with margin to spare
- Form inputs: 52px height on all viewports
- Icon-only buttons: 44px × 44px minimum, with at least 8px of padding around the icon glyph

### Collapsing Strategy

- **Navigation:** Desktop horizontal nav at `lg` and up; below `lg`, collapses to a hamburger that opens a right-side sheet.
- **Hero:** Side-by-side text + image at `lg` and up; stacks vertically below `lg` with image moving below the text block.
- **Feature grids:** 3-column at `lg`, 2-column at `md`, single column below `md`. Cards keep their `rounded.lg` radius and 32px padding regardless.
- **Forms:** Two-column field layouts at `md` and up (e.g., First Name / Last Name); single column below.
- **Footers:** 4-column link grid at `lg`; 2-column at `md`; accordion-collapsed below `md` to save vertical space.
- **Section spacing:** 128px vertical on `lg+`; 96px on `md`; 64px on mobile.
- **Page padding:** 64px horizontal at `lg+`; 32px at `md`; 24px on mobile.

### Image Behavior

- **Hero images:** Full-bleed at all sizes; aspect ratio shifts from 16:9 (desktop) to 4:5 (mobile) to keep important focal areas visible.
- **Card images:** Lock to 16:9 aspect ratio across all viewports; `object-fit: cover`.
- **Avatars and icons:** Fixed pixel sizes, never percentage-scaled.
- **Illustrations:** Use SVG; viewBox preserves aspect ratio. Illustrations may simplify (drop background details) at smaller viewports via media-query-conditional layers.

## 10. Agent Prompt Guide

### Quick Color Reference

| Token              | Hex       | Role                                                 |
| ------------------ | --------- | ---------------------------------------------------- |
| `primary-800` ★    | `#0D3B66` | Primary buttons, nav, hero — the default brand color |
| `primary-700`      | `#26476A` | Primary button hover                                 |
| `primary-900`      | `#122334` | Primary button pressed; dark cards                   |
| `primary-50`       | `#F2F7FE` | Tinted card backgrounds, ghost-button hover          |
| `secondary-400` ★  | `#0197F6` | Brand azure — links, info accents, secondary CTAs    |
| `secondary-500`    | `#0079C6` | Azure hover state                                    |
| `secondary-50`     | `#F0F8FF` | Info badge backgrounds                               |
| `tertiary-400` ★   | `#F16E00` | Conversion CTAs only — the action color              |
| `tertiary-500`     | `#B85200` | CTA hover state                                      |
| `tertiary-600`     | `#913F00` | CTA pressed state                                    |
| `neutral-50`       | `#F8FAFC` | Page background                                      |
| `neutral-100`      | `#F1F5F9` | Secondary button background                          |
| `neutral-200`      | `#E2E8F0` | Default border / divider                             |
| `neutral-300`      | `#CBD5E1` | Input border, prominent divider                      |
| `neutral-600`      | `#475569` | Secondary text                                       |
| `neutral-900`      | `#0F172A` | Primary body text                                    |
| `surface-elevated` | `#FFFFFF` | Card / modal background                              |
| `focus-ring`       | `#3B82F6` | Keyboard focus indicator                             |

### Token Reference Cheat Sheet

- Component definitions reference tokens, never raw hex codes. Use `{colors.primary-800}`, `{colors.tertiary-400}`, `{rounded.md}`, `{typography.body-md}`.
- The YAML front matter is the authoritative source for any token-level value. If a value isn't there, it's not part of the system.
- State variants use suffix naming: `button-primary`, `button-primary-hover`, `button-primary-active`, `button-primary-disabled`.
- Color aliases (`primary`, `secondary`, `tertiary`, `surface`, `on-surface`) point at specific numbered steps. Use the aliases for general references and the numbered steps when a specific shade matters.
- The brand secondary (`secondary-400`) is _not_ the same as the Tailwind Info palette (`info-500`) even though both are blue. Use `secondary-*` for brand accents; use `info-*` only for system info messaging.

### Example Component Prompts

1. "Build a primary CTA button using the `button-cta` component spec — `{colors.tertiary-400}` background, `{colors.primary-900}` text (dark navy, not white — required for WCAG AA), `{typography.label-md}`, `{rounded.md}` corners, 14px / 28px padding, hover state `{colors.tertiary-500}` background with `{colors.neutral-50}` text."

2. "Build a hero section with a `{colors.primary-800}` background, `{typography.display}` headline in `{colors.neutral-50}`, and a `button-cta` pinned bottom-left. Add a 2px `{colors.tertiary-400}` underline accent under the eyebrow `{typography.overline}`."

3. "Build a feature card using the `card` component spec — white background, `1px solid {colors.neutral-200}` border, `{rounded.lg}` corners, 32px padding, `sm` shadow at rest, `md` shadow on hover. Title uses `{typography.headline-sm}`, body uses `{typography.body-md}`."

4. "Build a number-callout block: eyebrow `{typography.overline}` in `{colors.tertiary-400}`, then a stat at `{typography.display}` in `{colors.primary-800}`, then a caption at `{typography.body-md}` in `{colors.neutral-600}`."

5. "Build a Trust strip directly under the hero: `{colors.neutral-100}` background, 32px vertical padding, max-width 1024px, with a row of grayscale partner logos at 32px height and a star-rating summary on the right using `{typography.label-md}` text in `{colors.neutral-700}`."

### Iteration Guide

1. **Always start from the front matter.** When generating any component, resolve every value back to a token in the YAML. If you can't, the request needs a new token defined first.
2. **Respect the action-color rule.** `tertiary-400` is the conversion color. Don't use it for icons, decoration, illustrations, or non-action accents — those should use `secondary-400` or neutrals.
3. **Use one ember CTA per viewport.** If a layout needs two prominent buttons, the second one is `button-primary` (navy), not a second ember.
4. **When in doubt on neutrals, lean cool.** This brand uses Slate. Anything that introduces warm gray (Stone, Taupe) is a deviation.
5. **Check WCAG AA before shipping any new component.** Body text (`body-md`) on `neutral-50` should clear 4.5:1; `label-md` on tinted backgrounds (50–100 steps) should clear 4.5:1 against the tint, not against white.
6. **Match radius to component class.** Buttons and inputs are `md`; cards and modals are `lg`; hero blocks are `xl`. Mixing levels within the same hierarchy is a smell.
7. **Borders before shadows on dense UI.** App surfaces (dashboards, account pages) use `neutral-200` borders for structure; shadows are reserved for moments of genuine elevation. Marketing pages may invert this — shadows for warmth, borders for restraint.
