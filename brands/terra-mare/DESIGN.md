# Terra Mare — Design System

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

---

## 2. Color Palette & Roles

### Primary Brand Colors

#### Sienna Bloom — Primary

The brand's anchor. A deep, fired-clay burnt sienna that reads as confident and earthy. Used for primary CTAs, brand headlines, and key brand moments. Default usage sits at the **500** step.

| Step  | Hex       | Usage Guidance                                                                  |
| ----- | --------- | ------------------------------------------------------------------------------- |
| 50    | `#FFF4EF` | Tinted backgrounds, hero washes, success-tinted brand banners                   |
| 100   | `#FFE3D6` | Badge backgrounds, soft brand callouts, light card tints                        |
| 200   | `#FFC6AB` | Hover backgrounds for ghost/tertiary brand actions                              |
| 300   | `#FAA276` | Decorative accents, illustration mid-tones, subtle brand highlights             |
| 400   | `#DE7944` | Mid-tone brand color — illustration accents, secondary brand text on light tint |
| 500 ★ | `#B7500B` | **Default — primary buttons, brand logos, key brand moments**                   |
| 600   | `#933D00` | Pressed/active state for primary buttons; brand text on `Taupe-100` and lighter |
| 700   | `#722D00` | Dark-theme CTAs, deep brand text on `Taupe-50`                                  |
| 800   | `#562000` | Text on tinted brand backgrounds (`Sienna-50`–`Sienna-200`)                     |
| 900   | `#3B1501` | Deep brand overlays, dark-mode brand backgrounds                                |
| 950   | `#1F0801` | Near-black with sienna undertone — dark theme brand surfaces                    |

#### Marigold Glow — Secondary

The brand's vivid spark. A saturated golden-orange that adds vitality, sunlight, and warmth. Used for accent moments, hover states, badges, and energy-forward callouts. Default usage sits at the **400** step (anchor moved from 300 to 400 due to high chroma — Marigold belongs at a mid-tone where its saturation reads as intentional rather than overpowering).

| Step  | Hex       | Usage Guidance                                                                |
| ----- | --------- | ----------------------------------------------------------------------------- |
| 50    | `#FFF5ED` | Tinted accent backgrounds, sun-warmed wash                                    |
| 100   | `#FFE4CF` | Promotional banner fills, "save" pricing tags, badge backgrounds              |
| 200   | `#FFC79C` | Hover backgrounds for accent buttons, soft highlights                         |
| 300   | `#F9A45C` | Decorative accents, illustration highlights, focus-glow alternatives          |
| 400 ★ | `#F58C1C` | **Default — accent CTAs, badges, "Save up to 50%" callouts, highlight rules** |
| 500   | `#AB5E00` | Text on Marigold-tinted backgrounds, deep accent labels                       |
| 600   | `#874800` | Pressed/active state for accent buttons                                       |
| 700   | `#683600` | Dark-theme accent text                                                        |
| 800   | `#4E2700` | Text on tinted accent backgrounds (`Marigold-50`–`Marigold-200`)              |
| 900   | `#361900` | Deep accent overlays                                                          |
| 950   | `#1C0A00` | Near-black with marigold undertone — dark theme accent surfaces               |

#### Warm Clay — Tertiary

A muted earthen taupe that bridges the brand colors and the Taupe neutrals. Used for tertiary illustrations, soft brand highlights, supporting iconography, and any moment where Sienna and Marigold would feel too loud. Reads as sun-baked clay or unbleached linen. Default usage sits at the **500** step.

| Step  | Hex       | Usage Guidance                                                                |
| ----- | --------- | ----------------------------------------------------------------------------- |
| 50    | `#FAF6F3` | Page-level warm wash, alternate section backgrounds                           |
| 100   | `#F1E7E2` | Card surfaces in editorial sections, soft container fills                     |
| 200   | `#E4D0C3` | Light borders with warmth, divider lines on tinted sections                   |
| 300   | `#D0B4A2` | Decorative rules, illustration mid-tones, subtle iconography                  |
| 400   | `#B1917C` | Tertiary text on light surfaces, supporting icon color                        |
| 500 ★ | `#9C7B66` | **Default — tertiary buttons, supporting illustrations, muted brand accents** |
| 600   | `#715441` | Pressed state for tertiary buttons, deeper supporting text                    |
| 700   | `#573F30` | Dark-theme tertiary accents                                                   |
| 800   | `#402F24` | Text on tinted tertiary backgrounds (`Clay-50`–`Clay-200`)                    |
| 900   | `#2B1F17` | Deep neutral-warm overlays                                                    |
| 950   | `#150E09` | Near-black with warm clay undertone — alternative dark surface                |

### Secondary & Accent (Semantic)

Standardized across the Golden Hippo stack — these palettes ship identically in every brand and are not customized.

#### Error / Danger (Tailwind Red)

| Step | Hex       |
| ---- | --------- |
| 50   | `#fef2f2` |
| 100  | `#fee2e2` |
| 200  | `#fecaca` |
| 300  | `#fca5a5` |
| 400  | `#f87171` |
| 500  | `#ef4444` |
| 600  | `#dc2626` |
| 700  | `#b91c1c` |
| 800  | `#991b1b` |
| 900  | `#7f1d1d` |
| 950  | `#450a0a` |

**Role mapping:** Error text → `600` on light, `400` on dark. Error background → `50` on light, `950` on dark. Error border → `200` on light, `800` on dark. Destructive button → `600` background, white text.

#### Info (Tailwind Blue)

| Step | Hex       |
| ---- | --------- |
| 50   | `#eff6ff` |
| 100  | `#dbeafe` |
| 200  | `#bfdbfe` |
| 300  | `#93c5fd` |
| 400  | `#60a5fa` |
| 500  | `#3b82f6` |
| 600  | `#2563eb` |
| 700  | `#1d4ed8` |
| 800  | `#1e40af` |
| 900  | `#1e3a8a` |
| 950  | `#172554` |

**Role mapping:** Info text → `600` on light, `400` on dark. Info background → `50` on light, `950` on dark. Info border → `200` on light, `800` on dark. **Focus ring → `500` (`#3b82f6`)** for accessibility focus states across the entire system.

#### Success (Tailwind Green)

| Step | Hex       |
| ---- | --------- |
| 50   | `#f0fdf4` |
| 100  | `#dcfce7` |
| 200  | `#bbf7d0` |
| 300  | `#86efac` |
| 400  | `#4ade80` |
| 500  | `#22c55e` |
| 600  | `#16a34a` |
| 700  | `#15803d` |
| 800  | `#166534` |
| 900  | `#14532d` |
| 950  | `#052e16` |

**Role mapping:** Success text → `600` on light, `400` on dark. Success background → `50` on light, `950` on dark. Success border → `200` on light, `800` on dark.

#### Warning (Tailwind Yellow)

| Step | Hex       |
| ---- | --------- |
| 50   | `#fefce8` |
| 100  | `#fef9c3` |
| 200  | `#fef08a` |
| 300  | `#fde047` |
| 400  | `#facc15` |
| 500  | `#eab308` |
| 600  | `#ca8a04` |
| 700  | `#a16207` |
| 800  | `#854d0e` |
| 900  | `#713f12` |
| 950  | `#422006` |

**Role mapping:** Warning text → `700` on light (600 lacks contrast), `400` on dark. Warning background → `50` on light, `950` on dark. Warning border → `200` on light, `800` on dark.

### Surface & Background (Taupe Neutrals)

Taupe is Tailwind's warmest neutral — distinctly earthy with a sandy, clay-like undertone. It pairs beautifully with the Sienna and Marigold brand palette and reinforces Terra Mare's grounded, artisanal character. The OKLCH-defined hue runs slightly redder than Stone, giving surfaces a touch more skin-warmth than a typical neutral.

| Step | Hex       | OKLCH                     |
| ---- | --------- | ------------------------- |
| 50   | `#fbfaf9` | `oklch(98.6% 0.002 67.8)` |
| 100  | `#f3f1f1` | `oklch(96% 0.002 17.2)`   |
| 200  | `#e8e4e3` | `oklch(92.2% 0.005 34.3)` |
| 300  | `#d8d2d0` | `oklch(86.8% 0.007 39.5)` |
| 400  | `#aba09c` | `oklch(71.4% 0.014 41.2)` |
| 500  | `#7c6d67` | `oklch(54.7% 0.021 43.1)` |
| 600  | `#5b4f4b` | `oklch(43.8% 0.017 39.3)` |
| 700  | `#473c39` | `oklch(36.7% 0.016 35.7)` |
| 800  | `#2b2422` | `oklch(26.8% 0.011 36.5)` |
| 900  | `#1d1816` | `oklch(21.4% 0.009 43.1)` |
| 950  | `#0c0a09` | `oklch(14.7% 0.004 49.3)` |

| Role                         | Step  | Hex       | Notes                                                   |
| ---------------------------- | ----- | --------- | ------------------------------------------------------- |
| Page background              | 50    | `#fbfaf9` | Default body background — feels like fine paper         |
| Card / elevated surface      | white | `#ffffff` | Crisp surfaces for product cards and primary content    |
| Alt section background       | 100   | `#f3f1f1` | Section dividers, alternate row fills                   |
| Button / interactive surface | 200   | `#e8e4e3` | Light interactive surfaces, secondary button rest state |
| Dark surface                 | 800   | `#2b2422` | Footers, dark mode cards, inverse heroes                |
| Deep dark / dark theme bg    | 900   | `#1d1816` | Dark mode page background                               |
| Near-black (rare)            | 950   | `#0c0a09` | Reserved for high-contrast moments only                 |

### Neutrals & Text

| Role                              | Step | Hex       | Notes                                                        |
| --------------------------------- | ---- | --------- | ------------------------------------------------------------ |
| Primary text                      | 900  | `#1d1816` | Body and headline color on light surfaces — never pure black |
| Secondary text                    | 700  | `#473c39` | Subheadings, supporting paragraphs                           |
| Tertiary / muted text             | 500  | `#7c6d67` | Captions, timestamps, supporting metadata                    |
| Disabled text                     | 400  | `#aba09c` | Muted enough to recede but still legible                     |
| Text on dark surfaces (primary)   | 50   | `#fbfaf9` | Body copy on Taupe-800/900 backgrounds                       |
| Text on dark surfaces (secondary) | 300  | `#d8d2d0` | Subdued copy on dark surfaces                                |

### Semantic & Borders

| Role                      | Step       | Hex       |
| ------------------------- | ---------- | --------- |
| Light border / divider    | 200        | `#e8e4e3` |
| Prominent border          | 300        | `#d8d2d0` |
| Dark theme border         | 700        | `#473c39` |
| Focus ring (always)       | Blue 500   | `#3b82f6` |
| Ring/glow (subtle, brand) | Sienna 300 | `#FAA276` |

### Gradient System

Terra Mare is restrained with gradients — the brand's warmth comes from solid color and material textures, not glow. When gradients appear, they're **sun-warmed** and **directional**, not radial neon washes.

- **Sunrise Wash** — `linear-gradient(180deg, #FFF5ED 0%, #FBFAF9 100%)` — for hero section backgrounds, subtle vertical warmth that fades into the page.
- **Ember Brand** — `linear-gradient(135deg, #B7500B 0%, #F58C1C 100%)` — used sparingly for premium moments (subscription banners, hero text fills, brand seals). Never on body buttons.

---

## 3. Typography Rules

### Font Family

- **Headline:** `'Crimson Text', Georgia, 'Times New Roman', serif` — classical book serif. Brings editorial gravitas, heritage, and the trust of a published voice.
- **Body / UI:** `'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` — geometric sans-serif. Modern, clean, friendly without being casual.
- **Code:** `ui-monospace, Menlo, Consolas, 'Courier New', monospace` — system monospace for any technical content, ingredient codes, or developer documentation.

Both Crimson Text and Poppins are available via Google Fonts and should be loaded with `font-display: swap` to prevent invisible text during webfont load.

### Hierarchy

| Level                  | Font         | Size (px / rem) | Weight | Line-height | Tracking | Notes                                                        |
| ---------------------- | ------------ | --------------- | ------ | ----------- | -------- | ------------------------------------------------------------ |
| Display / Hero         | Crimson Text | 72 / 4.5rem     | 600    | 1.05        | -0.02em  | Hero moments, brand statements. Use sparingly.               |
| Section Heading (H1)   | Crimson Text | 48 / 3rem       | 600    | 1.1         | -0.015em | Page titles, major section openers                           |
| Sub-heading L (H2)     | Crimson Text | 36 / 2.25rem    | 600    | 1.15        | -0.01em  | Section sub-titles                                           |
| Sub-heading M (H3)     | Crimson Text | 28 / 1.75rem    | 500    | 1.2         | -0.005em | Card titles, product names                                   |
| Sub-heading S (H4)     | Crimson Text | 22 / 1.375rem   | 500    | 1.3         | 0        | Inline section markers, list group titles                    |
| Feature Title          | Poppins      | 18 / 1.125rem   | 600    | 1.4         | 0        | Component-level titles, modal headers                        |
| Body L                 | Poppins      | 18 / 1.125rem   | 400    | 1.6         | 0        | Lead paragraphs, hero body copy                              |
| Body Standard          | Poppins      | 16 / 1rem       | 400    | 1.6         | 0        | Default body text                                            |
| Body S                 | Poppins      | 14 / 0.875rem   | 400    | 1.55        | 0        | Supporting copy, dense UI sections                           |
| Body Serif (editorial) | Crimson Text | 18 / 1.125rem   | 400    | 1.65        | 0        | Long-form editorial paragraphs (founder story, charity page) |
| Caption                | Poppins      | 13 / 0.8125rem  | 400    | 1.5         | 0.005em  | Image captions, metadata                                     |
| Label                  | Poppins      | 13 / 0.8125rem  | 500    | 1.4         | 0.01em   | Form labels, badges                                          |
| Overline               | Poppins      | 11 / 0.6875rem  | 600    | 1.3         | 0.12em   | Eyebrows, section pre-titles — UPPERCASE                     |
| Micro                  | Poppins      | 11 / 0.6875rem  | 400    | 1.4         | 0.01em   | Legal text, footnotes, daggers                               |
| Code                   | System mono  | 14 / 0.875rem   | 400    | 1.5         | 0        | Inline code, technical references                            |

### Principles

1. **Serif for soul, sans for function.** Crimson Text owns headlines, editorial pull-quotes, and any moment where the brand voice should sound considered or literary. Poppins handles everything functional — buttons, inputs, body copy, navigation. Don't blend the two within a single hierarchy level.
2. **Tighten as you scale up.** Display and hero sizes use negative letter-spacing (`-0.015em` to `-0.02em`) to keep large serif text from looking airy. Body sizes stay at zero tracking.
3. **Line-height inversely scales with size.** Hero (1.05), H1 (1.1), body (1.6). Tight headlines, generous body — that's the editorial rhythm.
4. **Italics belong to the brand.** The Terra Mare site uses italic emphasis (`*first*`, `*Instantly save*`) as a brand voice. Reserve italic Crimson Text for editorial emphasis in headlines — never italicize Poppins body copy for emphasis (use weight instead).
5. **Overlines are uppercase, tracked, and small.** They establish hierarchy without competing with serif headlines. Use them to label sections (`OUR FOUNDER`, `OUR PROMISE`).

---

## 4. Component Stylings

### Buttons

All buttons share: `border-radius: 8px`, `font-family: Poppins`, `font-weight: 500`, `font-size: 15px`, `letter-spacing: 0.01em`, `padding: 12px 24px`, `transition: 150ms ease`.

- **Primary (Sienna)** — `background: #B7500B` (Sienna-500), `color: #ffffff`, `shadow: xs`. Hover: `background: #DE7944` (Sienna-400). Pressed: `background: #933D00` (Sienna-600). The brand's default CTA — confident, warm, unambiguous.
- **Accent (Marigold)** — `background: #F58C1C` (Marigold-400), `color: #4E2700` (Marigold-800), `shadow: xs`. Hover: `background: #F9A45C` (Marigold-300). Pressed: `background: #874800` (Marigold-600). For sun-forward moments — subscription banners, "Save" CTAs, promotional flags. Use when energy and savings need to be communicated together.
- **Secondary / Neutral** — `background: #e8e4e3` (Taupe-200), `color: #2b2422` (Taupe-800), `shadow: 2xs`. Hover: `background: #d8d2d0` (Taupe-300). Pressed: `background: #aba09c` (Taupe-400). For supporting actions — "Learn more," "Add to comparison."
- **Ghost / Outline** — `background: transparent`, `color: #B7500B` (Sienna-500), `border: 1px solid #d8d2d0` (Taupe-300). Hover: `background: #FFF4EF` (Sienna-50), `border-color: #B7500B`. Pressed: `background: #FFE3D6` (Sienna-100). Lowest visual weight — text links upgraded to button shape.
- **Inverse / On-dark** — `background: #ffffff`, `color: #B7500B` (Sienna-500), `shadow: sm`. Hover: `background: #FFF4EF` (Sienna-50). For CTAs sitting on dark hero backgrounds (`Taupe-800`, `Sienna-900`).

### Cards & Containers

- **Default Card** — `background: #ffffff`, `border: 1px solid #e8e4e3` (Taupe-200), `border-radius: 12px`, `padding: 24px`, `shadow: xs`. Hover: `shadow: sm`, `border-color: #d8d2d0` (Taupe-300).
- **Editorial Card** — `background: #FAF6F3` (Clay-50), `border: none`, `border-radius: 16px`, `padding: 32px`, `shadow: none`. Used for founder story, charity, and any narrative-led content blocks.
- **Product Card** — `background: #ffffff`, `border-radius: 16px`, `padding: 24px`, `shadow: sm`. Image area uses `border-radius: 12px` and a soft `Sunrise Wash` gradient background. Hover: `shadow: md`, slight image scale (1.02).
- **Dark / Inverse Card** — `background: #2b2422` (Taupe-800), `color: #fbfaf9` (Taupe-50), `border: 1px solid #473c39` (Taupe-700), `border-radius: 12px`. Used for footer modules and high-contrast feature blocks.

### Inputs & Forms

- `background: #ffffff`, `border: 1px solid #d8d2d0` (Taupe-300), `border-radius: 8px`, `padding: 12px 16px`, `font-family: Poppins`, `font-size: 15px`, `color: #1d1816` (Taupe-900).
- **Focus state** — `border-color: #B7500B` (Sienna-500), `box-shadow: 0 0 0 3px rgba(183, 80, 11, 0.15)`. The ring is brand-tinted; the underlying focus indicator is `Blue-500` for accessibility tooling that intercepts.
- **Disabled state** — `background: #f3f1f1` (Taupe-100), `color: #aba09c` (Taupe-400), `border-color: #e8e4e3` (Taupe-200).
- **Error state** — `border-color: #dc2626` (Red-600), `color: #1d1816`, helper text `color: #dc2626`.
- Labels use Poppins 13px / weight 500 / `letter-spacing: 0.01em`, sit above inputs with `margin-bottom: 6px`.

### Navigation

- **Top nav** — sticky, `background: rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(12px)`, `border-bottom: 1px solid #e8e4e3` (Taupe-200), `height: 80px`, `padding: 0 32px`.
- **Logo** — left-aligned, Crimson Text or wordmark.
- **Links** — Poppins 15px / weight 500, `color: #473c39` (Taupe-700). Hover: `color: #B7500B` (Sienna-500). Active: `color: #B7500B`, with a 2px underline using Marigold-400.
- **Primary CTA in nav** — Marigold accent button (Sign Up / Subscribe), right-aligned.
- **Mobile** — collapses to hamburger at `<lg` (1024px). Drawer slides from right, full-height, Taupe-50 background.

### Image Treatment

- **Default radius:** 12px
- **Hero/feature images:** 16px radius, optional `shadow: 2xl` for premium product shots
- **Product images:** sit on a `Sunrise Wash` gradient or solid Taupe-50 background; never on pure white in product cards (it flattens the image)
- **Aspect ratios:** prefer 4:5 (portrait) for product photography, 16:9 for editorial banners, 1:1 for ingredient and lifestyle squares
- **Tone:** photography is warm-graded — golden hour, natural light, never cool/clinical

### Distinctive Components

- **Editorial Pullquote** — Crimson Text 36px italic, indented with a 4px Marigold-400 left rule, used for founder quotes and brand statements.
- **Account Pricing Tag** — pill-shaped badge with `background: #FFE4CF` (Marigold-100), `color: #4E2700` (Marigold-800), Poppins 13px weight 600, `padding: 4px 12px`, `border-radius: 999px`. Used to highlight account-only savings.
- **Daggered Disclaimer** — small Poppins 11px text in Taupe-500, prefixed with `†` for FDA-required statements. Always lives at the bottom of product blocks.

---

## 5. Layout Principles

### Spacing System

Standardized Golden Hippo spacing scale (use these values exclusively):

`0px, 2px, 4px, 6px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px, 160px, 192px, 224px, 256px, 320px, 384px, 480px, 560px, 640px, 720px, 768px, 1024px, 1280px, 1440px, 1600px, 1920px`

**Common usage patterns for Terra Mare:**

- Component internal padding: 8px–24px
- Button padding: 12px vertical / 24px horizontal (slightly more generous than default)
- Card padding: 24px standard, 32px editorial
- Section vertical spacing: 96px–128px (Terra Mare leans generous — luxury wellness sites breathe)
- Stack gaps (small): 4px–8px (label-to-input, icon-to-text)
- Stack gaps (medium): 16px–24px (paragraph rhythm, list items)
- Stack gaps (large): 48px–64px (sub-section separation)
- Page max-widths: 1280px for default content, 1440px for hero/wide layouts, 768px for editorial long-form

### Grid & Container

- **Max content width:** 1280px (default), 768px (editorial long-form), 1440px (hero/full-bleed)
- **Section padding:** 96px vertical on desktop, scaling to 48px on mobile
- **Grid:** 12-column on desktop with 24px gutters, collapses to single column at `<md` (768px)
- **Product grid:** 4 columns at `xl`, 3 at `lg`, 2 at `md`, 1 at base

### Whitespace Philosophy

Terra Mare treats whitespace as a luxury material. Sections breathe. Cards have room. Headlines don't crowd body copy. The mental model: a well-designed magazine spread, not a dense ecommerce grid. When in doubt between 64px and 96px of vertical spacing, choose 96px.

### Border Radius Scale

| Name   | Value | Use                                                  |
| ------ | ----- | ---------------------------------------------------- |
| `none` | 0px   | Image edges in editorial layouts (rare), data tables |
| `sm`   | 4px   | Tight UI — inline tags, very small badges            |
| `md`   | 8px   | **Default — buttons, inputs, small cards**           |
| `lg`   | 12px  | Standard cards, image containers                     |
| `xl`   | 16px  | Editorial cards, product cards, hero images          |
| `2xl`  | 24px  | Premium feature panels, modal dialogs                |
| `full` | 999px | Pills, badges, avatars, circular icon buttons        |

The brand sits at the **rounded-but-architectural** end of the spectrum — never sharp-edged Brutalist, never bubbly cartoon. 8–16px is the sweet spot for most components.

---

## 6. Depth & Elevation

Standardized Golden Hippo shadow scale:

| Token | Value                                                                 | Terra Mare Usage                                                                |
| ----- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `2xs` | `0 1px rgb(0 0 0 / 0.05)`                                             | Input borders, subtle card edges. Used heavily — most cards rest at this level. |
| `xs`  | `0 1px 2px 0 rgb(0 0 0 / 0.05)`                                       | Default for primary buttons and resting product cards.                          |
| `sm`  | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`       | Standard card elevation, dropdown rest state, hover lift on default cards.      |
| `md`  | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`    | Hovered product cards, active dropdowns. Sweet spot for interactive lift.       |
| `lg`  | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`  | Popovers, tooltips, sticky CTAs.                                                |
| `xl`  | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Modal dialogs, command palettes, signup overlays.                               |
| `2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)`                                 | Used very rarely — hero product photography, premium feature showcases.         |

### Shadow Philosophy

Terra Mare is a **soft shadow** brand. The luxury-organic aesthetic depends on ambient, low-contrast elevation rather than dramatic drop shadows. **Default to `2xs` and `xs`** for most resting components. Reserve `md` and `lg` for genuine interactive feedback (hover, dropdown open). `2xl` is almost never used — it reads as too aggressive for the editorial register. When in doubt, go softer; the brand's depth comes from typography, color, and whitespace, not from heavy shadows.

---

## 7. Do's and Don'ts

**Do:**

- Use Sienna-500 (`#B7500B`) for primary CTAs and brand-critical moments, full stop. It's the anchor.
- Pair Crimson Text headlines with Poppins body — never reverse the roles.
- Lean on Taupe-50 and Taupe-100 for section backgrounds to create warm rhythm.
- Reserve Marigold-400 for energy/savings moments — it's the spark, not the foundation.
- Use the `Sunrise Wash` gradient (`#FFF5ED → #FBFAF9`) for hero section backgrounds.
- Italicize Crimson Text in headlines to echo the brand voice (`Putting women's health *first*`).
- Default to 96px vertical section spacing on desktop — Terra Mare breathes.
- Use `xs` shadows as the default elevation; reserve `md+` for actual interactivity.
- Use account pricing badges (Marigold-100 fill, Marigold-800 text) consistently for member-only pricing callouts.
- Set body copy at 16px Poppins / 1.6 line-height — don't compress for density.

**Don't:**

- Don't use pure black (`#000000`) anywhere — primary text is Taupe-900 (`#1d1816`).
- Don't use Marigold-400 as a primary CTA color — that's Sienna's job. Marigold supports.
- Don't introduce cool grays (Slate, Zinc) — they break the warm-palette coherence.
- Don't apply heavy drop shadows (`2xl`) on standard UI — it kills the editorial feel.
- Don't use Crimson Text below 18px — small serifs lose readability and look fragile.
- Don't italicize Poppins for emphasis — use weight (500/600) instead.
- Don't gradient-wash everything — Terra Mare uses gradients sparingly and intentionally.
- Don't drop section spacing below 64px on desktop — cramped layouts read as low-rent.
- Don't put product images on pure white inside product cards — use Taupe-50 or Sunrise Wash.
- Don't use border-radius `2xl` (24px) on small components like buttons — it reads as toy-like.

---

## 8. Responsive Behavior

### Breakpoints

Standardized Golden Hippo breakpoints:

| Name   | Min Width | Terra Mare Behavior                                                                        |
| ------ | --------- | ------------------------------------------------------------------------------------------ |
| (base) | 0px       | Single-column, hamburger nav, 24px horizontal padding, headlines scale down to 32px H1     |
| `sm`   | 640px     | Larger phones — 32px horizontal padding, slight type bump for body (15px → 16px)           |
| `md`   | 768px     | Tablet — product grid goes 2-column, secondary CTAs sit inline rather than stacked         |
| `lg`   | 1024px    | Full nav appears, product grid goes 3-column, hero serif headlines use full Display sizing |
| `xl`   | 1280px    | Standard desktop — content max-width caps at 1280px, product grid goes 4-column            |
| `2xl`  | 1536px    | Wide desktop — hero sections expand to 1440px, increased generous whitespace               |

### Touch Targets

- **Minimum hit area:** 44×44px for any tappable element on mobile (iOS HIG standard).
- **Buttons on mobile:** minimum 48px height, 16px horizontal padding bumped to 20px.
- **Form inputs on mobile:** minimum 48px height to prevent iOS zoom (paired with `font-size: 16px`).
- **Icon-only buttons:** 40×40px minimum with hit area extended to 44×44 via padding.

### Collapsing Strategy

- **Navigation:** full horizontal nav at `lg+`, hamburger drawer at `<lg`.
- **Product grid:** 4 cols (`xl`) → 3 cols (`lg`) → 2 cols (`md`) → 1 col (base).
- **Hero:** two-column hero (image + copy) at `lg+` collapses to stacked at `<lg`, with image first on mobile.
- **Cards:** padding scales from 32px (`lg+`) to 24px (`md`) to 20px (base).
- **Section spacing:** vertical padding scales from 128px (`xl`) to 96px (`lg`) to 64px (`md`) to 48px (base).
- **Editorial long-form:** stays at 768px max-width regardless of breakpoint — readability over width.

### Image Behavior

- **Hero images:** full-bleed at base, contained within max-width at `lg+`. Aspect ratio shifts from 4:5 (mobile) to 16:9 (desktop) for editorial heroes.
- **Product images:** square (1:1) on grid, 4:5 portrait on product detail.
- **Lifestyle/founder images:** crop tighter on mobile (face/hands) and wider on desktop (full scene).
- **Art direction:** consider `<picture>` element with mobile-cropped variants for hero shots — don't just scale desktop crops down.

---

## 9. Agent Prompt Guide

### Quick Color Reference

Use these exact hex values when prompting AI tools or writing CSS by hand. Anchor steps marked with ★.

| Token            | Hex       | Use                                  |
| ---------------- | --------- | ------------------------------------ |
| `sienna-50`      | `#FFF4EF` | Light brand tint background          |
| `sienna-100`     | `#FFE3D6` | Brand badge fill                     |
| `sienna-400`     | `#DE7944` | Primary button hover                 |
| `sienna-500` ★   | `#B7500B` | **Default primary brand / CTA**      |
| `sienna-600`     | `#933D00` | Primary button pressed               |
| `sienna-800`     | `#562000` | Brand text on tinted bg              |
| `marigold-100`   | `#FFE4CF` | Account pricing tag bg               |
| `marigold-300`   | `#F9A45C` | Accent button hover                  |
| `marigold-400` ★ | `#F58C1C` | **Default accent / "save" callouts** |
| `marigold-600`   | `#874800` | Accent button pressed                |
| `marigold-800`   | `#4E2700` | Text on Marigold tints               |
| `clay-100`       | `#F1E7E2` | Editorial card surface               |
| `clay-500` ★     | `#9C7B66` | **Default tertiary / muted brand**   |
| `taupe-50`       | `#fbfaf9` | Page background                      |
| `taupe-100`      | `#f3f1f1` | Alt section background               |
| `taupe-200`      | `#e8e4e3` | Light border / Secondary button bg   |
| `taupe-700`      | `#473c39` | Secondary text                       |
| `taupe-900`      | `#1d1816` | Primary text (never use #000)        |
| `focus-ring`     | `#3b82f6` | Accessibility focus (Blue-500)       |

### Example Component Prompts

**1. Primary product card**

> Build a product card using Terra Mare's design system. White background (`#ffffff`), 1px border in `#e8e4e3` (Taupe-200), 16px border-radius, 24px padding, `xs` shadow at rest (`0 1px 2px 0 rgb(0 0 0 / 0.05)`), hovering to `md` shadow (`0 4px 6px -1px rgb(0 0 0 / 0.1)`). Product image sits in a 1:1 container with 12px radius and a `Sunrise Wash` gradient background (`linear-gradient(180deg, #FFF5ED 0%, #FBFAF9 100%)`). Title in Crimson Text 28px / weight 500 / line-height 1.2 / color `#1d1816`. Description in Poppins 14px / weight 400 / `#473c39`. Price in Poppins 18px / weight 600 / `#1d1816`. Account pricing badge: pill-shaped, `#FFE4CF` background, `#4E2700` text, Poppins 13px weight 600, `padding: 4px 12px`, `border-radius: 999px`. Primary "Learn More" button in Sienna-500 (`#B7500B`), white text, 8px radius, 12×24px padding, hover state `#DE7944`.

**2. Editorial founder section**

> Build a founder spotlight section in Terra Mare's editorial style. Background: Clay-50 (`#FAF6F3`). Two-column layout at `lg+` (1024px), stacking to single column below. Left column: founder portrait, 4:5 aspect ratio, 16px border-radius, no shadow. Right column: overline "OUR FOUNDER, MARISA TOMEI" in Poppins 11px / weight 600 / uppercase / letter-spacing 0.12em / color `#9C7B66` (Clay-500). H2 in Crimson Text 36px / weight 600 / line-height 1.15 / color `#1d1816`, with selective italics for emphasis. Body copy in Crimson Text 18px / weight 400 / line-height 1.65 / color `#473c39`. "Learn More" CTA as ghost button: transparent bg, `#B7500B` text, 1px border in `#d8d2d0`, hover bg `#FFF4EF`. Section padding 96px vertical on desktop.

**3. Subscription save banner**

> Build a "Subscribe & Save" promotional banner. Background: `Ember Brand` gradient `linear-gradient(135deg, #B7500B 0%, #F58C1C 100%)`. Padding: 48px vertical, 32px horizontal. Border-radius: 16px. Headline in Crimson Text 36px / weight 600 / italic / color `#ffffff`, with the savings copy bolded. Sub-copy in Poppins 16px / weight 400 / color `#FFE3D6` (Sienna-100). Inverse CTA: white background, Sienna-500 text (`#B7500B`), 8px radius, `sm` shadow, hover bg `#FFF4EF` (Sienna-50).

**4. Product detail input + add to cart**

> Build a quantity selector and add-to-cart form. Quantity input: 48px height, `#ffffff` bg, 1px border `#d8d2d0` (Taupe-300), 8px radius, Poppins 16px (prevents iOS zoom), color `#1d1816`. Focus state: border `#B7500B`, 3px ring `rgba(183, 80, 11, 0.15)`. Label "Quantity" in Poppins 13px / weight 500 / `#473c39` / letter-spacing 0.01em. Add to cart button: full-width, Sienna-500 (`#B7500B`) bg, white text, 8px radius, 48px height, Poppins 15px weight 500. Hover: bg `#DE7944`. Pressed: bg `#933D00`. Below the button, a small daggered disclaimer in Poppins 11px / `#7c6d67` (Taupe-500): "†These statements have not been evaluated by the FDA."

**5. Sticky top navigation**

> Build a sticky top nav for Terra Mare. Height 80px, sticky to viewport top. Background: `rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(12px)`. Bottom border 1px in `#e8e4e3`. Horizontal padding 32px, max-width 1280px centered. Left: wordmark logo. Center: nav links in Poppins 15px / weight 500 / color `#473c39`. Hover state: color `#B7500B`. Active link: color `#B7500B` with 2px underline in `#F58C1C` (Marigold-400). Right: Marigold accent CTA "Sign Up" — `#F58C1C` bg, `#4E2700` text, 8px radius, 10×20px padding, hover bg `#F9A45C`. Below `lg` (1024px), collapse to hamburger menu opening a right-side drawer with `#fbfaf9` (Taupe-50) background.

### Iteration Guide

1. **Always reference exact hex values** — don't rely on color names alone. AI tools are more accurate when given `#B7500B` than "burnt sienna."
2. **Specify both font family and fallbacks** — `'Crimson Text', Georgia, serif` not just "Crimson Text" — fallbacks matter for early renders.
3. **Use shadow tokens by name AND raw value** — say `xs (0 1px 2px 0 rgb(0 0 0 / 0.05))` so the AI can match the system without lookup.
4. **State the breakpoint when describing layout shifts** — "at `lg+` (1024px)" is unambiguous; "on desktop" is not.
5. **Anchor the anchor steps** — when in doubt, default colors are Sienna-500, Marigold-400, Taupe-50/100/700/900. Don't invent new shades.
6. **Lean on Crimson Text for character, Poppins for clarity** — prompts should explicitly assign serif vs sans roles, not leave it to the model.
7. **Generous spacing > dense spacing** — when prompting, default to the higher value in any range (96px > 64px, 32px > 24px). Terra Mare is a luxury wellness brand; cramped layouts will misrepresent it.
