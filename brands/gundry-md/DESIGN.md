# Gundry MD — Design System

## 1. Visual Theme & Atmosphere

Gundry MD occupies a distinctive space in health and wellness: the intersection of clinical authority and approachable vitality. The visual language must communicate that Dr. Gundry is a world-renowned cardiothoracic surgeon and NYT-bestselling author — someone whose recommendations carry the weight of decades of medical research — while simultaneously feeling modern, energetic, and accessible to the everyday consumer looking to improve their gut health. This is not a cold medical brand. It's a brand that says, "the science is rigorous, and the results feel good."

The palette anchors itself in **Gundry Blue** (`#2945b8`), a deep, saturated blue that reads as both trustworthy and bold — less corporate navy, more confident cobalt. It's the color of conviction. Against it, **Vitality Lime** (`#c2e329`) erupts with electric energy — a color that feels alive, healthy, and unapologetically modern. It's the visual equivalent of that gut-health glow. **Coral Bloom** (`#ffa082`) rounds out the triad as a warm, human counterpoint — soft enough for supportive messaging, vibrant enough to catch the eye on a product card or promotional banner. Together, these three colors create a system that can flex between authoritative editorial content and high-energy ecommerce conversion moments.

Typography reinforces the duality: **Lora** brings a refined, editorial gravity to headings — it's a serif that whispers "published author" and "peer-reviewed" without screaming "old institution." **Red Hat Text** handles the body and UI work with geometric clarity and excellent screen legibility. The pairing feels like a well-designed health magazine: credible at the top, clean and scannable in the details. All buttons are pill-shaped (`border-radius: 9999px`), giving every call-to-action a smooth, approachable, and distinctly modern feel — like a supplement capsule, fitting for the brand.

**Key Characteristics:**

- Deep blue foundation establishes medical credibility and trust
- Electric lime injects energy and signals vitality/results
- Soft coral provides warmth and humanizes clinical authority
- Serif headings (Lora) convey editorial weight and expertise
- Geometric sans body (Red Hat Text) keeps UI crisp and scannable
- Pill-shaped buttons feel modern, approachable, and on-brand
- Clean layouts with bold color accents — minimal but never boring
- The system flexes between clinical authority (deep blue + serif) and conversion energy (lime + coral + bold CTAs)

---

## 2. Color Palette & Roles

### Primary Brand Colors

Each brand color is expanded into a full 11-step perceptually balanced palette (generated in OKLCH color space). The user-defined hex value is marked with ★ at its natural weight. Use the default weight for primary usage; reach into lighter steps for backgrounds, tints, and hover states, and darker steps for text-on-brand, pressed states, and dark theme accents.

#### Gundry Blue — The Trust Anchor

Primary CTAs, navigation, hero backgrounds, and anywhere the brand needs to assert authority.

| Step  | Hex       | Usage Guidance                                                  |
| ----- | --------- | --------------------------------------------------------------- |
| 50    | `#F3F7FF` | Blue-tinted page backgrounds, selected row highlights           |
| 100   | `#E0E9FF` | Info banners on brand, light card tints, tag backgrounds        |
| 200   | `#C2D4FF` | Hover backgrounds for ghost buttons, active sidebar items       |
| 300   | `#9DB8FF` | Focus rings (brand alternative), progress bar tracks            |
| 400   | `#6B91FF` | Secondary links, icon accents, chart secondary series           |
| 500   | `#4569DF` | Hover state for primary buttons, active nav links               |
| 600 ★ | `#2945B8` | **Default — primary buttons, nav bar, hero backgrounds, links** |
| 700   | `#233B92` | Pressed/active state for primary buttons, dark-theme CTA        |
| 800   | `#1A2C6A` | Text on light blue backgrounds (50–200), dark header bars       |
| 900   | `#101D49` | Deep dark overlays, footer backgrounds (alternative to gray)    |
| 950   | `#060D27` | Near-black with blue undertone — dark theme body background     |

#### Vitality Lime — The Energy Spark

Secondary CTAs, badges, promotional highlights, success indicators, and "results" messaging.

| Step  | Hex       | Usage Guidance                                                         |
| ----- | --------- | ---------------------------------------------------------------------- |
| 50    | `#F4F9E8` | Subtle success/promo section backgrounds                               |
| 100   | `#E5EFCB` | Badge backgrounds, callout card tints, sale banners                    |
| 200   | `#CBDF8E` | Soft lime tint — hover backgrounds, light tag fills                    |
| 300   | `#AEC947` | Hover state for lime buttons, active toggle fills                      |
| 400 ★ | `#C2E329` | **Default — secondary buttons, promotional highlights, badges, icons** |
| 500   | `#6B7F00` | Text on lime-50/100 backgrounds, dark-theme lime accents               |
| 600   | `#536300` | High-contrast lime text on light surfaces                              |
| 700   | `#3F4C00` | Lime-on-white body text (passes WCAG AA at this step)                  |
| 800   | `#2E3800` | Deep olive — dark theme badge backgrounds                              |
| 900   | `#1E2500` | Near-black olive — dark theme section backgrounds                      |
| 950   | `#0D1200` | Darkest olive-black — rarely used, extreme contrast contexts           |

#### Coral Bloom — The Warm Accent

Tertiary actions, illustrative elements, testimonial highlights, and softening clinical content.

| Step  | Hex       | Usage Guidance                                                      |
| ----- | --------- | ------------------------------------------------------------------- |
| 50    | `#FFF4F1` | Warm section backgrounds, testimonial card tints                    |
| 100   | `#FDE3DB` | Quote block backgrounds, soft alert banners                         |
| 200   | `#FCC6B5` | Hover tint for coral elements, illustration fills                   |
| 300 ★ | `#FFA082` | **Default — quote borders, accent illustrations, tertiary buttons** |
| 400   | `#D57E62` | Hover/active state for coral elements                               |
| 500   | `#AF583C` | Coral text on light backgrounds (50–100), icon color on white       |
| 600   | `#8F3F26` | High-contrast coral text, dark-theme coral accent                   |
| 700   | `#6F2F1A` | Deep terracotta — dark theme warm accents                           |
| 800   | `#512415` | Dark warm surface, footer accent on dark backgrounds                |
| 900   | `#37170D` | Near-black warm — dark theme deep background alternative            |
| 950   | `#1C0904` | Darkest warm black — extreme contrast contexts                      |

### Secondary & Accent (Semantic)

These semantic palettes are standardized across all brands. They handle system-level feedback and should never be replaced by brand colors for error, success, warning, or info states.

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

| Role               | Light Surface      | Dark Surface       |
| ------------------ | ------------------ | ------------------ |
| Text               | 600 (`#dc2626`)    | 400 (`#f87171`)    |
| Background         | 50 (`#fef2f2`)     | 950 (`#450a0a`)    |
| Border             | 200 (`#fecaca`)    | 800 (`#991b1b`)    |
| Destructive button | 600 bg, white text | 500 bg, white text |

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

| Role       | Light Surface   | Dark Surface    |
| ---------- | --------------- | --------------- |
| Text       | 600 (`#2563eb`) | 400 (`#60a5fa`) |
| Background | 50 (`#eff6ff`)  | 950 (`#172554`) |
| Border     | 200 (`#bfdbfe`) | 800 (`#1e40af`) |
| Focus Ring | 500 (`#3b82f6`) | 500 (`#3b82f6`) |

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

| Role       | Light Surface   | Dark Surface    |
| ---------- | --------------- | --------------- |
| Text       | 600 (`#16a34a`) | 400 (`#4ade80`) |
| Background | 50 (`#f0fdf4`)  | 950 (`#052e16`) |
| Border     | 200 (`#bbf7d0`) | 800 (`#166534`) |

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

| Role       | Light Surface   | Dark Surface    |
| ---------- | --------------- | --------------- |
| Text       | 700 (`#a16207`) | 400 (`#facc15`) |
| Background | 50 (`#fefce8`)  | 950 (`#422006`) |
| Border     | 200 (`#fef08a`) | 800 (`#854d0e`) |

**Focus Ring:** Blue-500 (`#3b82f6`) for all interactive focus states (accessibility).

### Surface & Background (Gray)

| Role                        | Step  | Hex       |
| --------------------------- | ----- | --------- |
| Page background             | —     | `#ffffff` |
| Card / elevated surface     | white | `#ffffff` |
| Interactive surface (hover) | 200   | `#e5e7eb` |
| Dark surface                | 800   | `#1f2937` |
| Deep dark / dark theme bg   | 900   | `#111827` |
| Darkest (footers, overlays) | 950   | `#030712` |

### Neutrals & Text (Gray)

| Role                  | Step | Hex       |
| --------------------- | ---- | --------- |
| Primary text          | 900  | `#111827` |
| Secondary text        | 600  | `#4b5563` |
| Tertiary / muted text | 500  | `#6b7280` |
| Text on dark surfaces | 200  | `#e5e7eb` |
| Disabled text         | 400  | `#9ca3af` |

### Borders & Dividers (Gray)

| Role                | Step | Hex       |
| ------------------- | ---- | --------- |
| Light border        | 200  | `#e5e7eb` |
| Prominent border    | 300  | `#d1d5db` |
| Dark theme border   | 700  | `#374151` |
| Ring / focus shadow | 300  | `#d1d5db` |

---

## 3. Typography Rules

### Font Families

| Role      | Font             | Fallback Stack                                                         |
| --------- | ---------------- | ---------------------------------------------------------------------- |
| Headlines | Lora             | `Lora, Georgia, 'Times New Roman', serif`                              |
| Body / UI | Red Hat Text     | `'Red Hat Text', Inter, -apple-system, BlinkMacSystemFont, sans-serif` |
| Code      | System Monospace | `Menlo, Consolas, 'Courier New', monospace`                            |

### Type Hierarchy

| Level                    | Font         | Size (px / rem)  | Weight | Line Height | Letter Spacing | Notes                                                  |
| ------------------------ | ------------ | ---------------- | ------ | ----------- | -------------- | ------------------------------------------------------ |
| **Display / Hero**       | Lora         | 56px / 3.5rem    | 600    | 1.1         | -0.02em        | Homepage hero, landing page headlines. Maximum impact. |
| **Section Heading**      | Lora         | 40px / 2.5rem    | 600    | 1.2         | -0.015em       | Major page sections, collection headers.               |
| **Sub-heading Large**    | Lora         | 32px / 2rem      | 600    | 1.25        | -0.01em        | Product feature blocks, editorial section intros.      |
| **Sub-heading Standard** | Lora         | 24px / 1.5rem    | 600    | 1.3         | -0.005em       | Card titles, sidebar headers.                          |
| **Sub-heading Small**    | Lora         | 20px / 1.25rem   | 600    | 1.35        | 0              | Sub-section headers, FAQ questions.                    |
| **Feature Title**        | Red Hat Text | 18px / 1.125rem  | 600    | 1.4         | 0              | Feature callouts, benefit lists, tab labels.           |
| **Body Large**           | Red Hat Text | 18px / 1.125rem  | 400    | 1.65        | 0              | Long-form editorial, Dr. Gundry's articles.            |
| **Body Standard**        | Red Hat Text | 16px / 1rem      | 400    | 1.6         | 0              | Default paragraph text, product descriptions.          |
| **Body Small**           | Red Hat Text | 14px / 0.875rem  | 400    | 1.55        | 0              | Secondary descriptions, supplementary info.            |
| **Caption**              | Red Hat Text | 13px / 0.8125rem | 400    | 1.45        | 0.01em         | Image captions, timestamps, meta info.                 |
| **Label**                | Red Hat Text | 13px / 0.8125rem | 600    | 1.3         | 0.04em         | Form labels, badge text, navigation items.             |
| **Overline**             | Red Hat Text | 11px / 0.6875rem | 700    | 1.2         | 0.1em          | Category tags, section identifiers. Always uppercase.  |
| **Micro**                | Red Hat Text | 10px / 0.625rem  | 500    | 1.2         | 0.05em         | Legal text, footnotes, smallest disclaimers.           |
| **Code**                 | System Mono  | 14px / 0.875rem  | 400    | 1.6         | 0              | Ingredient codes, supplement facts, technical specs.   |

### Typography Principles

1. **Lora owns the hierarchy, Red Hat Text owns the interface.** Every heading from Display down to Sub-heading Small is set in Lora. Everything else — body, labels, captions, buttons — is Red Hat Text. Never mix this. The serif/sans split is what gives the brand its editorial-meets-modern tension.

2. **Weight is deliberate.** Lora uses 600 (semi-bold) exclusively — it provides enough presence at large sizes without the heaviness of bold. Red Hat Text ranges from 400 (body) to 600 (labels, feature titles) to 700 (overlines). Never use 300/light weights — Gundry MD is a brand of conviction, not whispers.

3. **Line heights loosen as text gets smaller.** Display (1.1) is tight and punchy. Body (1.6) is open and readable. This creates a natural visual rhythm where headlines feel impactful and paragraphs feel comfortable for long-form health content.

4. **Letter spacing tightens for large sizes, opens for small.** Display pulls letters together (-0.02em) for density. Overlines and labels push them apart (0.04–0.1em) for scanability. Body text sits at 0 — no adjustment needed at standard sizes.

5. **Uppercase is reserved for two contexts.** Overline text and button labels are set in all-caps — overlines for structural hierarchy, buttons for CTA punch. Headlines and navigation are sentence case or title case. Outside of those two contexts, avoid capitalization.

---

## 4. Component Stylings

### Buttons

All buttons use `border-radius: 9999px` (pill shape). This is non-negotiable across the entire system.

| Variant              | Background         | Text               | Padding   | Shadow    | Personality                                                                                                                                 |
| -------------------- | ------------------ | ------------------ | --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Primary (Brand)**  | Blue-600 `#2945B8` | `#ffffff`          | 12px 28px | shadow-xs | The confident CTA — "Add to Cart," "Subscribe," "Shop Now." Hover: Blue-500 `#4569DF`. Pressed: Blue-700 `#233B92`.                         |
| **Secondary (Lime)** | Lime-400 `#C2E329` | `#111827`          | 12px 28px | shadow-xs | The energetic push — "Learn More," "See Results," promotional actions. Hover: Lime-300 `#AEC947`. Pressed: Lime-500 `#6B7F00` (white text). |
| **Light / White**    | `#ffffff`          | Blue-600 `#2945B8` | 12px 28px | shadow-sm | For use on dark or colored backgrounds. Border: 1px solid `#e5e7eb`. Hover bg: Blue-50 `#F3F7FF`.                                           |
| **Dark**             | `#111827`          | `#ffffff`          | 12px 28px | shadow-xs | Footer CTAs, dark-section actions. Hover lightens to `#1f2937`.                                                                             |
| **Ghost / Outline**  | transparent        | Blue-600 `#2945B8` | 12px 28px | none      | Minimal emphasis — filters, toggles, secondary navigation. Border: 1.5px solid `#2945B8`. Hover fills with Blue-50 `#F3F7FF`.               |

**Button Typography:** Red Hat Text, 15px, weight 600, letter-spacing 0.06em, `text-transform: uppercase`. Buttons never use Lora. Buttons are always uppercase — the wider letter-spacing ensures readability at small sizes.

**Icon Buttons:** Same pill shape. When icon-only, use equal padding (12px) for a circular result.

### Cards & Containers

| Property         | Light Context                    | Dark Context                     |
| ---------------- | -------------------------------- | -------------------------------- |
| Surface          | `#ffffff`                        | `#1f2937`                        |
| Border           | 1px solid `#e5e7eb`              | 1px solid `#374151`              |
| Border Radius    | 12px                             | 12px                             |
| Shadow (resting) | shadow-sm                        | shadow-sm                        |
| Shadow (hover)   | shadow-md                        | shadow-md                        |
| Padding          | 24px (standard), 32px (featured) | 24px (standard), 32px (featured) |

**Product cards** get a subtle hover lift: translate -2px on Y axis + shadow transition to shadow-md. The interaction should feel light, not dramatic. Product image containers use `border-radius: 8px` (slightly less than the card itself).

### Inputs & Forms

| Property       | Value                             |
| -------------- | --------------------------------- |
| Text color     | Gray-900 (`#111827`)              |
| Placeholder    | Gray-400 (`#9ca3af`)              |
| Background     | `#ffffff`                         |
| Border         | 1px solid Gray-300 (`#d1d5db`)    |
| Border (focus) | 2px solid `#2945b8`               |
| Focus ring     | 0 0 0 3px rgba(41, 69, 184, 0.15) |
| Border radius  | 9999px (pill, matching buttons)   |
| Padding        | 12px 20px                         |
| Font           | Red Hat Text, 16px, weight 400    |

Pill-shaped inputs match the button system for visual consistency. For textareas (which can't be pill-shaped), use `border-radius: 12px` to match card radius.

### Navigation

| Property       | Value                                                |
| -------------- | ---------------------------------------------------- |
| Background     | `#ffffff`                                            |
| Border bottom  | 1px solid Gray-200 (`#e5e7eb`)                       |
| Height         | 64px (desktop), 56px (mobile)                        |
| Logo placement | Left-aligned                                         |
| Nav links      | Red Hat Text, 15px, weight 500, Gray-700 (`#374151`) |
| Active link    | Gundry Blue (`#2945b8`), weight 600                  |
| Hover          | Gundry Blue (`#2945b8`)                              |
| CTA button     | Primary pill button, right-aligned                   |
| Mobile         | Hamburger menu, full-screen overlay on Gray-900 bg   |

Sticky on scroll. On scroll past 8px, apply shadow-sm to the nav bar for subtle depth.

### Image Treatment

| Property            | Value                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Product images      | `border-radius: 8px`, no shadow, contained within card                                                  |
| Hero images         | Full-bleed or `border-radius: 16px` for contained heroes                                                |
| Thumbnails          | `border-radius: 8px`, 1px solid Gray-200 border                                                         |
| Dr. Gundry portrait | `border-radius: 50%` (circular) for testimonial/authority contexts, `border-radius: 12px` for editorial |
| Aspect ratios       | Product: 1:1 or 4:5. Hero: 16:9 or 3:1. Editorial: 3:2.                                                 |

### Distinctive Components

**Trust Badge Bar:** A horizontal strip (typically below the hero or above the footer) with a Gundry Blue (`#2945b8`) background displaying trust signals — "90-Day Money Back Guarantee," "Doctor Formulated," "GMP Certified." Text in white, Red Hat Text 13px weight 600, uppercase, letter-spacing 0.06em. Icons in Vitality Lime (`#c2e329`) for contrast.

**Supplement Facts Card:** A specialized card with a Gray-50 (`#f9fafb`) background, 1px Gray-300 border, and a Gundry Blue header strip. Typography uses Red Hat Text throughout with tabular number alignment. This card intentionally looks more clinical than the rest of the UI to reinforce ingredient transparency.

**Dr. Gundry Quote Block:** A blockquote component with a 4px left border in Coral Bloom (`#ffa082`), Lora italic at 20px for the quote text, and Red Hat Text 14px weight 500 for the attribution. Background: transparent or Gray-50.

---

## 5. Layout Principles

### Spacing System

The full standardized spacing scale:

`0px, 2px, 4px, 6px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px, 160px, 192px, 224px, 256px, 320px, 384px, 480px, 560px, 640px, 720px, 768px, 1024px, 1280px, 1440px, 1600px, 1920px`

**Common usage for Gundry MD:**

| Context                             | Value                          |
| ----------------------------------- | ------------------------------ |
| Button padding (vertical)           | 12px                           |
| Button padding (horizontal)         | 28px                           |
| Card padding                        | 24px                           |
| Featured card padding               | 32px                           |
| Input padding                       | 12px vertical, 20px horizontal |
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

Gundry MD leans generous with whitespace — the brand sells premium health products, and the page should breathe like a well-designed magazine, not a cluttered marketplace. Sections are separated by 80px–128px of vertical space, giving each content block room to land before the next begins. Within sections, spacing is tighter and more purposeful (16px–32px), keeping related content grouped. The net effect: each scroll feels intentional, not overwhelming.

### Border Radius Scale

| Name         | Value  | Use                                           |
| ------------ | ------ | --------------------------------------------- |
| **None**     | 0px    | Divider lines, full-bleed sections            |
| **Subtle**   | 4px    | Badges, small tags, inline code               |
| **Standard** | 8px    | Product images, thumbnails, small containers  |
| **Medium**   | 12px   | Cards, textareas, modals, dropdowns           |
| **Large**    | 16px   | Hero images (contained), featured sections    |
| **Pill**     | 9999px | Buttons, inputs, search bars, toggle pills    |
| **Circle**   | 50%    | Avatars, icon containers, Dr. Gundry portrait |

The pill radius (`9999px`) is the signature shape of Gundry MD's interactive elements. It should be used for all buttons, primary inputs, and search fields without exception. Containers and content blocks use the more moderate 8px–16px range.

---

## 6. Depth & Elevation

### Shadow Scale

| Token   | CSS Value                                                             | Gundry MD Usage                                                                        |
| ------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **2xs** | `0 1px rgb(0 0 0 / 0.05)`                                             | Input resting state, subtle card edges on white-on-white layouts.                      |
| **xs**  | `0 1px 2px 0 rgb(0 0 0 / 0.05)`                                       | Resting buttons, secondary cards, product thumbnails.                                  |
| **sm**  | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`       | Primary cards at rest, navigation bar on scroll, dropdown menus. The workhorse shadow. |
| **md**  | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`    | Hovered product cards, active dropdowns, expanded accordions.                          |
| **lg**  | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`  | Floating cart preview, popovers, sticky "Add to Cart" bar.                             |
| **xl**  | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Modals, full-screen overlays, mobile nav drawer.                                       |
| **2xl** | `0 25px 50px -12px rgb(0 0 0 / 0.25)`                                 | Hero product showcase, "As Seen On" feature blocks. Reserved for maximum drama.        |

### Shadow Philosophy

Gundry MD uses shadow conservatively. The brand's clean, minimal aesthetic means most surfaces sit flat or at the sm level — just enough depth to define boundaries without creating visual noise. The primary interaction pattern is sm → md on hover, giving product cards a gentle lift that feels responsive without being theatrical. Shadows at lg and above are reserved for overlays, modals, and floating UI elements that genuinely sit above the page. The 2xl shadow is a special weapon — used only for hero product images or featured content blocks where a single element needs to command the entire viewport. When in doubt, use less shadow. The brand's boldness comes from color and typography, not from depth.

---

## 7. Do's and Don'ts

### Do

1. **Do** use Gundry Blue (`#2945b8`) as the dominant CTA color on every page — consistency builds trust across the buying journey.
2. **Do** pair Lora headings with Red Hat Text body copy in every layout — the serif/sans tension is the brand's typographic signature.
3. **Do** use Vitality Lime (`#c2e329`) to draw attention to results, benefits, and promotional offers — it's the "good news" color.
4. **Do** maintain generous whitespace between sections (80px–128px) — the premium feel comes from letting content breathe.
5. **Do** use pill-shaped buttons (`border-radius: 9999px`) for every interactive element — buttons, inputs, search bars, filter toggles.
6. **Do** use Dr. Gundry's name and image as an authority anchor — circular portraits in testimonial contexts, editorial crops in long-form content.
7. **Do** keep product photography clean and on white/neutral backgrounds — the color system provides enough energy without busy imagery.
8. **Do** use the Trust Badge Bar pattern on high-conversion pages — the blue strip with lime icons is a distinctive Gundry MD element.
9. **Do** use Coral Bloom (`#ffa082`) sparingly — it's most effective as an accent for quotes, illustrations, and warm supportive messaging.

### Don't

1. **Don't** use Vitality Lime (`#c2e329`) for body text — it fails WCAG contrast on light backgrounds. Reserve it for backgrounds, badges, and icons.
2. **Don't** mix Lora into body paragraphs or UI elements — Lora is strictly for headings and pull quotes.
3. **Don't** use square or slightly rounded buttons (`border-radius: 4px–8px`) — the pill shape is a system-wide commitment, not a suggestion.
4. **Don't** place Coral Bloom on dark backgrounds without testing contrast — at `#ffa082`, it can wash out against Gray-800/900.
5. **Don't** stack more than two brand colors in a single component — pick one dominant, one accent. Three brand colors in one card is a circus.
6. **Don't** use shadows heavier than sm for standard cards and containers — heavy shadows undermine the clean, minimal aesthetic.
7. **Don't** set type smaller than 13px for any user-facing text (excluding legal/footnotes) — health content demands readability.
8. **Don't** use uppercase on headings or body text — only Overline text and button labels get all-caps treatment. The brand speaks with calm confidence everywhere except its CTAs.
9. **Don't** allow product grids to exceed 4 columns — denser grids reduce each product's visual impact and hurt conversion.
10. **Don't** replace semantic error/success/warning colors with brand colors — a lime "success" message or coral "error" creates confusion.

---

## 8. Responsive Behavior

### Breakpoints

| Name    | Min Width | Gundry MD Behavior                                                                                                                                         |
| ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **sm**  | 640px     | Product grid shifts from 1 to 2 columns. Hero headline drops from Display to Section Heading size. Side padding increases to 24px.                         |
| **md**  | 768px     | Two-column layouts activate for product + description. Navigation shows full link set. Editorial content centered at 768px max-width.                      |
| **lg**  | 1024px    | Full desktop nav with CTA button. Product grid goes to 3–4 columns. Hero sections use full Display typography. Trust Badge Bar goes single-row horizontal. |
| **xl**  | 1280px    | Maximum content width reached. Product grid locks at 4 columns with 24px gaps. Section spacing reaches full 128px.                                         |
| **2xl** | 1536px    | Content remains at 1280px max-width, centered. Extra space becomes margin. Hero images may expand beyond content width for cinematic effect.               |

### Touch Targets

| Element            | Minimum Size                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| Buttons            | 44px height minimum (pill shape naturally exceeds this with 12px vertical padding + 16px text) |
| Nav links (mobile) | 48px tap target height                                                                         |
| Form inputs        | 48px height                                                                                    |
| Icon buttons       | 44px × 44px                                                                                    |
| Checkbox / radio   | 24px visual, 44px tap area                                                                     |

### Collapsing Strategy

| Component        | Desktop (lg+)                                    | Tablet (md)             | Mobile (<md)                        |
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

---

## 9. Agent Prompt Guide

This section helps AI coding assistants (Cursor, Claude, Copilot, etc.) build correctly styled Gundry MD components without guessing.

### Quick Color Reference

| Name                | Hex       | Use It For                                            |
| ------------------- | --------- | ----------------------------------------------------- |
| Gundry Blue 50      | `#F3F7FF` | Blue-tinted backgrounds, selected states              |
| Gundry Blue 500     | `#4569DF` | Primary button hover state                            |
| Gundry Blue 600 ★   | `#2945B8` | Primary CTAs, nav, hero backgrounds, links            |
| Gundry Blue 700     | `#233B92` | Primary button pressed/active state                   |
| Gundry Blue 800     | `#1A2C6A` | Text on blue-tinted backgrounds                       |
| Vitality Lime 100   | `#E5EFCB` | Badge/callout backgrounds, sale banners               |
| Vitality Lime 200   | `#CBDF8E` | Soft lime tint, hover backgrounds, light tag fills    |
| Vitality Lime 400 ★ | `#C2E329` | Secondary CTAs, badges, promotions, icons             |
| Vitality Lime 300   | `#AEC947` | Lime button hover state                               |
| Vitality Lime 600   | `#536300` | Lime text on light surfaces                           |
| Coral Bloom 50      | `#FFF4F1` | Warm section backgrounds, testimonial tints           |
| Coral Bloom 300 ★   | `#FFA082` | Quote borders, accent illustrations, tertiary actions |
| Coral Bloom 500     | `#AF583C` | Coral text on white backgrounds                       |
| Page Background     | `#ffffff` | Default body background (white)                       |
| Card Surface        | `#ffffff` | Card and elevated surface background                  |
| Primary Text        | `#111827` | Headings and body text (Gray-900)                     |
| Secondary Text      | `#4b5563` | Supporting text (Gray-600)                            |
| Muted Text          | `#6b7280` | Tertiary labels, placeholders alt (Gray-500)          |
| Light Border        | `#e5e7eb` | Card borders, dividers (Gray-200)                     |
| Dark Background     | `#111827` | Footer, dark sections (Gray-900)                      |

### Example Component Prompts

1. **Product Card:** "Build a product card with a white background, 12px border-radius, 1px solid `#e5e7eb` border, 24px padding, and shadow-sm (`0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`). Product image has 8px border-radius and 1:1 aspect ratio. Title in Lora 20px weight 600 in `#111827`. Price in Red Hat Text 18px weight 600 in `#2945B8`. 'Add to Cart' is a pill button (`border-radius: 9999px`) with `#2945B8` background, white text, Red Hat Text 15px weight 600 uppercase, 12px 28px padding. On hover, button bg becomes `#4569DF` (Blue-500). On active/pressed, button bg becomes `#233B92` (Blue-700). Card shadow transitions to shadow-md and translates -2px on Y on hover."

2. **Hero Section:** "Create a hero section with a `#2945B8` background and white text. Headline in Lora 56px weight 600, line-height 1.1, letter-spacing -0.02em. Subheadline in Red Hat Text 18px weight 400, `#e5e7eb` color, max-width 560px. CTA is a pill button with `#C2E329` background, `#111827` text, Red Hat Text 15px weight 600 uppercase, 12px 28px padding. Max content width 1280px, centered, 48px side padding."

3. **Trust Badge Bar:** "Build a full-width horizontal bar with `#2945b8` background. Content is centered, max-width 1280px, with 3–4 trust badges in a flex row with 32px gap. Each badge has an icon in `#c2e329` (24px) and text in white, Red Hat Text 13px weight 600, uppercase, letter-spacing 0.06em. On mobile, badges stack vertically with 16px gap."

4. **Newsletter Signup:** "Create an inline newsletter form with a Gray-50 (`#f9fafb`) background section, 80px vertical padding. Heading in Lora 32px weight 600 `#111827`. Description in Red Hat Text 16px `#4b5563`. Email input is pill-shaped (`border-radius: 9999px`), 1px solid `#d1d5db` border, 12px 20px padding, Red Hat Text 16px. Submit button is a pill with `#2945b8` background, white text. On focus, input gets 2px solid `#2945b8` border and `0 0 0 3px rgba(41, 69, 184, 0.15)` ring."

5. **Dr. Gundry Quote Block:** "Build a blockquote with a 4px left border in `#ffa082`, 24px left padding. Quote text in Lora italic 20px weight 400, `#111827`, line-height 1.5. Attribution below in Red Hat Text 14px weight 500, `#4b5563`. Optional circular portrait (48px, 50% border-radius) to the left of the attribution."

### Iteration Guide

1. **Always specify pill radius for interactive elements.** If you're asking the AI to build a button, input, or search bar, include `border-radius: 9999px`. If you forget, you'll get the AI's default radius.
2. **Name the fonts explicitly.** Say "Lora" for headings and "Red Hat Text" for body — don't say "the brand serif" or "the UI font." AI tools respond better to specific font names.
3. **Reference shadows by token name AND value.** Say "shadow-sm (`0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`)" so the AI can implement it regardless of whether it has access to your CSS variables.
4. **Specify colors as hex, not names.** Say `#2945b8`, not "Gundry Blue." The creative names are for humans reading the design system — AI tools need the hex value.
5. **Include hover and focus states in your prompt.** AI tools often skip interaction states. Always specify: "On hover, background darkens to X. On focus, show a 3px ring in rgba(41, 69, 184, 0.15)."
6. **Describe the spacing in pixels.** Don't say "generous padding" — say "24px padding" or "32px gap." AI tools are precise when you're precise.
7. **When in doubt, reference this file.** Tell your AI tool: "Read DESIGN.md for the Gundry MD design system before building this component." This gives it the full context in one shot.
