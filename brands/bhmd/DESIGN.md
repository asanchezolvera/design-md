# Beverly Hills MD — Design System

## 1. Visual Theme & Atmosphere

Beverly Hills MD inhabits the intersection of clinical authority and editorial luxury. The visual language draws from high-end fashion magazines and prestige skincare advertising — think full-bleed photography, generous whitespace, and typography that whispers rather than shouts. Every pixel should feel like it belongs on the glossy pages of Vogue or Harper's Bazaar, not in a sterile medical catalog.

The palette anchors itself in **Surgeon's Navy** (`#233354`), a color as deep and assured as the expertise behind the brand. It's the color of a bespoke suit in a Beverly Hills consultation room — authoritative without being cold, refined without being unapproachable. Against this, **Rosé Petal** (`#eaab9f`) provides a warm, human counterpoint: the blush of healthy skin, the softness of a cashmere robe, the understated femininity that luxury skincare customers expect. The Slate neutral palette reinforces the editorial posture — distinctly blue-toned grays that feel like premium newsprint and polished chrome.

The overall atmosphere is one of restrained opulence. Nothing is loud. Nothing is cluttered. Every element earns its place on the page through generous spacing, deliberate hierarchy, and the quiet confidence that comes from knowing you're the best in the room.

**Key Characteristics:**

- Editorial whitespace — pages breathe like a magazine spread
- Serif headlines that convey medical authority and timeless elegance
- Muted, warm accent tones that feel skin-adjacent, never synthetic
- Photography-forward layouts where imagery does the heavy lifting
- Restrained color usage — the palette is a whisper, not a shout
- Deliberate vertical rhythm with generous section spacing
- Subtle depth through refined shadows, never heavy drop shadows
- Dark-mode-ready navy surfaces that feel like nighttime luxury

---

## 2. Color Palette & Roles

### Primary Brand Colors

Both brand colors are expanded into full 11-step palettes, generated in OKLCH color space for perceptual balance. The user-provided hex values are preserved at their natural weight and serve as the default for each color.

#### Surgeon's Navy

The brand's signature color. Deep, assured, authoritative — the color of a bespoke suit in a Beverly Hills consultation room. The default weight is **800** (`#233354`), which is used for primary CTAs, headlines, and hero backgrounds.

| Step    | Hex           | Role                                                                     |
| ------- | ------------- | ------------------------------------------------------------------------ |
| 50      | `#f2f5fc`     | Tinted page backgrounds, info-banner fills, subtle navy wash             |
| 100     | `#e6ebf6`     | Input focus backgrounds, selected-row highlights, navy-tinted surfaces   |
| 200     | `#ced8ec`     | Light borders on navy-context components, progress bar tracks            |
| 300     | `#b2bed7`     | Disabled button backgrounds, placeholder shimmer tint                    |
| 400     | `#8b98b4`     | Secondary icon color, inactive tab text, muted navy accents              |
| 500     | `#63728f`     | Secondary text in navy contexts, caption text on light surfaces          |
| 600     | `#465574`     | Hovered link text, secondary headings, sub-navigation text               |
| 700     | `#303f5f`     | Hovered primary buttons, active navigation states, emphasis borders      |
| **800** | **`#233354`** | **Default — primary CTAs, headlines, hero backgrounds, brand signature** |
| 900     | `#101a2e`     | Pressed/active button states, dark overlay backgrounds                   |
| 950     | `#050b19`     | Deepest backgrounds, dark-mode hero overlays, maximum depth              |

#### Rosé Petal

The warm, human counterpoint — the blush of healthy skin. The default weight is **300** (`#eaab9f`), which is used for secondary CTAs, accent highlights, and decorative warmth.

| Step    | Hex           | Role                                                                                   |
| ------- | ------------- | -------------------------------------------------------------------------------------- |
| 50      | `#fdf3ef`     | Promotional banner backgrounds, warm-tinted page sections                              |
| 100     | `#f8e7e2`     | Testimonial card backgrounds, hover fills on light surfaces                            |
| 200     | `#fccbbb`     | Active/selected state backgrounds, badge fills, warm borders                           |
| **300** | **`#eaab9f`** | **Default — secondary CTAs, accent highlights, hover underlines, decorative elements** |
| 400     | `#c08978`     | Hovered secondary buttons, warm icon color, active accents                             |
| 500     | `#936455`     | Rosé text on light surfaces (meets contrast requirements), warm secondary text         |
| 600     | `#724a3c`     | Small text in Rosé contexts, footer accent links                                       |
| 700     | `#58362a`     | Dark-mode Rosé accents, heading text on warm backgrounds                               |
| 800     | `#42251b`     | Dark surface Rosé borders, deep warm emphasis                                          |
| 900     | `#2b130b`     | Dark-mode Rosé text backgrounds, extreme depth                                         |
| 950     | `#180502`     | Rosé-tinted dark overlays, deepest warm surface                                        |

> **Note:** There is no tertiary brand color by design. The restraint is intentional — luxury is defined as much by what you leave out as by what you include. When a third color is needed, pull from the lighter or darker steps of these two palettes, or from the Slate neutrals.

### Secondary & Accent (Semantic)

These palettes are standardized across all Golden Hippo brands and are not customizable.

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
| Destructive button | 600 bg, white text | 600 bg, white text |

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

**Focus Ring:** Blue-500 (`#3b82f6`) — used for all accessibility focus states.

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

### Surface & Background (Slate)

| Role                      | Step  | Hex       | Usage                                                                                        |
| ------------------------- | ----- | --------- | -------------------------------------------------------------------------------------------- |
| Page background           | 50    | `#f8fafc` | Default light page canvas — cool, blue-tinted white                                          |
| Card / elevated surface   | white | `#ffffff` | Cards, modals, and elevated panels on the slate canvas                                       |
| Subtle surface            | 100   | `#f1f5f9` | Alternating sections, sidebar backgrounds, input fills                                       |
| Interactive surface       | 200   | `#e2e8f0` | Button hover backgrounds, toggle tracks, selected states                                     |
| Dark surface              | 800   | `#1e293b` | Footer, dark sections, inverted hero blocks                                                  |
| Deep dark / dark theme bg | 900   | `#0f172a` | Full dark theme background — nearly indistinguishable from Surgeon's Navy for brand cohesion |
| Deepest dark              | 950   | `#020617` | Dark theme contrast panels, overlays                                                         |

### Neutrals & Text (Slate)

| Role                         | Step | Hex       |
| ---------------------------- | ---- | --------- |
| Primary text                 | 900  | `#0f172a` |
| Secondary text               | 600  | `#475569` |
| Tertiary / muted text        | 500  | `#64748b` |
| Placeholder text             | 400  | `#94a3b8` |
| Disabled text                | 400  | `#94a3b8` |
| Text on dark surfaces        | 200  | `#e2e8f0` |
| Bright text on dark surfaces | 50   | `#f8fafc` |

### Borders & Dividers (Slate)

| Role                        | Step | Hex       |
| --------------------------- | ---- | --------- |
| Light border                | 200  | `#e2e8f0` |
| Prominent border            | 300  | `#cbd5e1` |
| Dark theme border           | 700  | `#334155` |
| Ring / focus shadow (light) | 300  | `#cbd5e1` |
| Ring / focus shadow (dark)  | 400  | `#94a3b8` |

### Gradient System

Beverly Hills MD uses gradients sparingly — they're reserved for hero moments and high-impact sections, never for general UI.

| Name              | Value                                               | Usage                                                                             |
| ----------------- | --------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Navy Depth**    | `linear-gradient(135deg, #233354 0%, #101a2e 100%)` | Hero sections, premium feature backgrounds — Navy-800 deepening into Navy-900     |
| **Rosé Glow**     | `linear-gradient(135deg, #eaab9f 0%, #fccbbb 100%)` | Decorative accents, promotional banners — Rosé-300 blooming into Rosé-200         |
| **Navy to Slate** | `linear-gradient(180deg, #233354 0%, #0f172a 100%)` | Full-page dark backgrounds — Navy-800 into Slate-900 for seamless dark-mode depth |

---

## 3. Typography Rules

### Font Families

| Role      | Family           | Fallbacks                                                 |
| --------- | ---------------- | --------------------------------------------------------- |
| Headlines | Playfair Display | Georgia, "Times New Roman", serif                         |
| Body / UI | Libre Franklin          | -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif |
| Code      | System monospace | Menlo, Consolas, "Courier New", monospace                 |

### Hierarchy

| Level                | Font             | Size (px/rem)    | Weight | Line Height | Letter Spacing | Notes                                                                    |
| -------------------- | ---------------- | ---------------- | ------ | ----------- | -------------- | ------------------------------------------------------------------------ |
| Display / Hero       | Playfair Display | 64px / 4rem      | 700    | 1.1         | -0.02em        | Magazine covers, hero headlines. Always Surgeon's Navy or white on dark. |
| Section Heading      | Playfair Display | 48px / 3rem      | 700    | 1.15        | -0.015em       | Major page sections. The workhorse editorial heading.                    |
| Sub-heading Large    | Playfair Display | 36px / 2.25rem   | 600    | 1.2         | -0.01em        | Feature blocks, product category headers.                                |
| Sub-heading Standard | Playfair Display | 28px / 1.75rem   | 600    | 1.25        | -0.005em       | Card titles, sidebar section headers.                                    |
| Sub-heading Small    | Libre Franklin          | 22px / 1.375rem  | 600    | 1.3         | 0              | Minor headings where serif feels too heavy.                              |
| Feature Title        | Libre Franklin          | 18px / 1.125rem  | 700    | 1.4         | 0              | Ingredient callouts, benefit highlights.                                 |
| Body Large           | Libre Franklin          | 18px / 1.125rem  | 400    | 1.7         | 0              | Lead paragraphs, introductory text. More room to breathe.                |
| Body Standard        | Libre Franklin          | 16px / 1rem      | 400    | 1.7         | 0              | Default body copy. The backbone of all long-form content.                |
| Body Small           | Libre Franklin          | 14px / 0.875rem  | 400    | 1.6         | 0              | Secondary descriptions, metadata, fine print.                            |
| Caption              | Libre Franklin          | 13px / 0.8125rem | 500    | 1.5         | 0.01em         | Image captions, timestamps, helper text.                                 |
| Label                | Libre Franklin          | 12px / 0.75rem   | 600    | 1.4         | 0.04em         | Form labels, navigation items, button text. Always uppercase-ready.      |
| Overline             | Libre Franklin          | 11px / 0.6875rem | 700    | 1.4         | 0.08em         | Category tags, section labels. Always uppercase.                         |
| Micro                | Libre Franklin          | 10px / 0.625rem  | 500    | 1.4         | 0.04em         | Legal disclaimers, footnotes, badge text.                                |
| Code                 | System mono      | 14px / 0.875rem  | 400    | 1.6         | 0              | Inline code, ingredient lists with scientific names.                     |

### Typographic Principles

1. **Serif headlines, sans-serif everything else.** Playfair Display creates instant editorial authority. Libre Franklin provides the clean, geometric clarity needed for UI elements and body copy. The two never swap roles — serifs stay above the fold, sans-serifs carry the content.

2. **Generous line height for body text.** 1.7 line-height on body copy is deliberate — it creates the airy, magazine-like readability that luxury brands require. Tighter leading (1.1–1.2) is reserved for headlines where visual impact outweighs scannability.

3. **Letter-spacing tightens as size increases.** Display and heading sizes pull letters closer together for visual density and impact. Small sizes (overline, label) push letters apart for legibility. Body sizes sit at 0 — neutral and natural.

4. **Weight restraint.** The system primarily uses 400 (body), 600 (subheadings), and 700 (headlines/emphasis). There is no 300/light weight — luxury is built through spacing and size, not by making text thinner. Bold (700) in body copy is used sparingly to highlight key claims and ingredients.

5. **Uppercase is earned.** Only Overline, Label (when contextually appropriate), and navigation items use uppercase. Headlines and body text are always sentence case. All-caps body text is never acceptable — it reads as shouting, which contradicts the brand's restrained confidence.

---

## 4. Component Stylings

### Buttons

| Variant              | Background  | Text      | Padding   | Radius | Shadow    | Personality                                                                                                               |
| -------------------- | ----------- | --------- | --------- | ------ | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Primary (Navy)**   | `#233354`   | `#ffffff` | 12px 32px | 2px    | shadow-xs | The confident recommendation — "Shop Now," "Book Consultation." Authoritative and unambiguous.                            |
| **Secondary (Rosé)** | `#eaab9f`   | `#233354` | 12px 32px | 2px    | shadow-xs | The warm invitation — "Learn More," "See Results." Approachable without losing polish.                                    |
| **White / Light**    | `#ffffff`   | `#233354` | 12px 32px | 2px    | shadow-sm | The ghost on dark backgrounds — used in hero sections and navy panels. Border: 1px `#e2e8f0`.                             |
| **Dark**             | `#0f172a`   | `#f8fafc` | 12px 32px | 2px    | shadow-xs | The premium upsell — "Join the Waitlist," "Exclusive Access." Deeper than navy for emphasis.                              |
| **Outline / Ghost**  | transparent | `#233354` | 12px 32px | 2px    | none      | The understated option — "View All," secondary navigation actions. Border: 1px `#cbd5e1`. On hover, fills with Slate-100. |

**Button notes:** All buttons use Libre Franklin 14px/600 weight with `0.04em` letter-spacing. Hover states use the adjacent palette step: Navy primary buttons hover to Navy-700 (`#303f5f`), Rosé secondary buttons hover to Rosé-400 (`#c08978`). Active/pressed states go one step darker: Navy-900 (`#101a2e`) and Rosé-500 (`#936455`). Transitions are 200ms ease-out. Minimum touch target: 44px height. Border-radius is intentionally minimal (2px) — sharp edges convey surgical precision.

### Cards & Containers

| Context              | Surface   | Border        | Radius | Shadow                        |
| -------------------- | --------- | ------------- | ------ | ----------------------------- |
| Product card (light) | `#ffffff` | none          | 4px    | shadow-sm, shadow-md on hover |
| Content card (light) | `#ffffff` | 1px `#e2e8f0` | 4px    | shadow-2xs                    |
| Feature card (dark)  | `#1e293b` | 1px `#334155` | 4px    | none                          |
| Testimonial card     | `#f8fafc` | 1px `#e2e8f0` | 4px    | none                          |

**Card notes:** Cards use a 24px–32px internal padding. Product cards are image-forward — the image bleeds to the card edge with content padded below. Hover transitions are 200ms ease-out. On dark backgrounds, card borders are subtle Slate-700 rather than shadows.

### Inputs & Forms

| Property       | Value                                          |
| -------------- | ---------------------------------------------- |
| Text color     | Slate-900 (`#0f172a`)                          |
| Placeholder    | Slate-400 (`#94a3b8`)                          |
| Background     | `#ffffff`                                      |
| Padding        | 10px 16px                                      |
| Border         | 1px Slate-300 (`#cbd5e1`)                      |
| Border (focus) | 2px Surgeon's Navy (`#233354`)                 |
| Focus ring     | 3px `rgba(35, 51, 84, 0.15)`                   |
| Radius         | 2px                                            |
| Label          | Libre Franklin 12px/600, Slate-700, 6px margin-bottom |

**Form notes:** Inputs are tall and spacious (44px minimum height) to match the brand's generous spacing. Error states use the semantic Red palette. Success validation uses a subtle green checkmark icon, never a green border (to avoid clashing with the warm brand palette).

### Navigation

The navigation is a masterclass in restraint. Fixed header with white background and a 1px Slate-200 bottom border. Left-aligned logo, centered navigation links (Libre Franklin 13px/600, Slate-700, uppercase, `0.06em` tracking), right-aligned utility actions (cart, account) and a primary CTA button. On scroll, the nav gains a shadow-sm for subtle elevation. Hover states on links use Surgeon's Navy with a 2px bottom underline offset by 4px.

### Image Treatment

| Property      | Value                                                                       |
| ------------- | --------------------------------------------------------------------------- |
| Corner radius | 4px for contained images, 0px for full-bleed hero/editorial                 |
| Shadow        | shadow-md for floating product shots, none for editorial layouts            |
| Aspect ratios | 4:5 for product portraits, 16:9 for editorial/lifestyle, 1:1 for thumbnails |
| Container     | Product images sit on Slate-50 or white backgrounds, never transparent      |

### Distinctive Components

**Before/After Slider:** A signature Beverly Hills MD component. Two product images separated by a draggable divider in Surgeon's Navy with a circular handle (32px, white fill, shadow-md, navy border). Handle uses Rosé Petal on hover.

**Ingredient Spotlight:** A card variant featuring a large circular ingredient image (1:1, 160px, shadow-sm), a Playfair Display heading, and Libre Franklin body text. Background is Slate-50 with no border. Used extensively on product pages.

**Doctor Credential Badge:** A horizontal pill showing a doctor's name, title, and small circular headshot. Background white, border 1px Slate-200, radius 999px. Conveys medical authority in a compact, trustworthy format.

---

## 5. Layout Principles

### Spacing System

The full standardized spacing scale:

`0px, 2px, 4px, 6px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px, 160px, 192px, 224px, 256px, 320px, 384px, 480px, 560px, 640px, 720px, 768px, 1024px, 1280px, 1440px, 1600px, 1920px`

**Common usage patterns for Beverly Hills MD:**

- Component internal padding: 16px–32px (generous, never cramped)
- Button padding: 12px vertical, 32px horizontal
- Card padding: 24px–32px
- Section vertical spacing: 96px–160px (editorial breathing room)
- Stack gaps (small): 8px (form fields, list items)
- Stack gaps (medium): 16px–24px (card grids, content blocks)
- Stack gaps (large): 48px–80px (between content groups)
- Page max-width: 1280px (standard), 1440px (wide editorial layouts)

### Grid & Container

| Property                   | Value                                                |
| -------------------------- | ---------------------------------------------------- |
| Max width (standard)       | 1280px                                               |
| Max width (wide)           | 1440px                                               |
| Max width (narrow/article) | 768px                                                |
| Gutter                     | 24px (mobile), 32px (tablet+)                        |
| Columns                    | 12-column grid on desktop, collapsing to 4 on mobile |
| Page margin                | 16px (mobile), 32px (tablet), 48px (desktop)         |

### Whitespace Philosophy

Beverly Hills MD treats whitespace as a luxury material — it's the visual equivalent of the marble counter space in a Beverly Hills dermatology office. Sections are separated by 96px–160px of vertical space, and content never crowds the edges of its container. When in doubt, add more space. A page that feels "empty" is working correctly — it means the content that _is_ present commands full attention. This is the single most important differentiator between Beverly Hills MD and a generic ecommerce template.

### Border Radius Scale

| Name    | Value | Usage                                                                        |
| ------- | ----- | ---------------------------------------------------------------------------- |
| Sharp   | 0px   | Full-bleed images, editorial photo blocks, dividers                          |
| Subtle  | 2px   | Buttons, inputs, default interactive elements — the brand's workhorse radius |
| Soft    | 4px   | Cards, containers, contained images                                          |
| Rounded | 8px   | Tooltips, badges, notification banners                                       |
| Pill    | 999px | Tags, doctor credential badges, filter chips                                 |

**Radius philosophy:** Beverly Hills MD skews sharp. The 2px default radius is barely perceptible — it softens hard corners just enough to feel intentional without introducing the roundness associated with casual or playful brands. Full circles (pill/999px) are reserved for small, badge-like elements.

---

## 6. Depth & Elevation

### Shadow Scale (Standardized)

| Token      | CSS Value                                                             | Beverly Hills MD Usage                                      |
| ---------- | --------------------------------------------------------------------- | ----------------------------------------------------------- |
| shadow-2xs | `0 1px rgb(0 0 0 / 0.05)`                                             | Active/pressed button states, resting input fields          |
| shadow-xs  | `0 1px 2px 0 rgb(0 0 0 / 0.05)`                                       | Default button elevation, resting card state                |
| shadow-sm  | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`       | Scrolled navigation, hovered secondary elements             |
| shadow-md  | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`    | Hovered product cards, floating product photography         |
| shadow-lg  | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`  | Dropdown menus, the before/after slider handle              |
| shadow-xl  | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Modals, cart drawer, quick-view overlays                    |
| shadow-2xl | `0 25px 50px -12px rgb(0 0 0 / 0.25)`                                 | Hero product showcase images — the "this is special" signal |

### Shadow Philosophy

Beverly Hills MD lives in the shadow-2xs to shadow-md range for 95% of its interface. Shadows are never the focal point — they're the quiet mechanism that creates the layered, magazine-like depth of premium editorial layouts. Think of shadows here the way a luxury hotel uses ambient lighting: you don't notice it, but you'd notice if it were gone. The xl and 2xl shadows are reserved for overlay elements (modals, drawers) and hero-level product photography where a single item floats dramatically above the page. Dark surfaces (navy, slate-800+) use no shadows — depth on dark is achieved through border color variation and background lightness shifts.

---

## 7. Do's and Don'ts

### Do

- **Do** use Playfair Display for all headlines h1–h3, and Libre Franklin for everything at h4 and below.
- **Do** maintain at least 96px of vertical spacing between major page sections — more is better.
- **Do** let product photography be the star. Full-bleed images, large hero blocks, and generous image containers are the brand's visual signature.
- **Do** use Surgeon's Navy (`#233354`) as the primary action color on every page. It should be the most prominent interactive color.
- **Do** apply Rosé Petal (`#eaab9f`) sparingly — it's a highlight, not a flood. One or two Rosé elements per viewport is the sweet spot.
- **Do** keep border radius at 2px for interactive elements and 4px for containers. Consistency here is what makes the brand feel cohesive.
- **Do** use the Slate neutral palette for all grays — never use pure gray (#808080) or neutral grays without the blue undertone.
- **Do** set body copy at 16px/1.7 line-height minimum. Luxury brands earn trust through readability.
- **Do** leverage whitespace as a design element. If a layout feels sparse, it's probably right.
- **Do** provide hover state transitions at 200ms ease-out across all interactive elements for a smooth, unhurried feel.

### Don't

- **Don't** use more than two brand colors (Navy + Rosé) in any single component. If you need a third color, it should come from the Slate palette.
- **Don't** use rounded corners above 8px on any non-badge element. No 12px, 16px, or fully rounded cards — they undermine the surgical precision.
- **Don't** set body copy below 14px. Small text reads as discount, not luxury.
- **Don't** use pure black (`#000000`) for text. Always use Slate-900 (`#0f172a`) for maximum contrast text — it's softer and more editorial.
- **Don't** stack multiple shadows. One shadow token per element. Layered shadows read as cheap depth simulation.
- **Don't** use gradients on buttons or interactive elements. Gradients are reserved for background sections and hero moments only.
- **Don't** use italic Libre Franklin for emphasis. Use weight 600 or 700 instead. Italic sans-serif reads as informal, which contradicts the brand's authority.
- **Don't** use colored backgrounds (beyond Slate-50/100) for content sections. The brand's color lives in accents and images, not in background fills.
- **Don't** crowd navigation with more than 6 top-level items. Luxury is about curation — if the nav feels busy, the brand feels mass-market.
- **Don't** use stock photography that looks like stock photography. Every image should feel shot for this brand — clinical quality, warm lighting, real skin texture.

---

## 8. Responsive Behavior

### Breakpoints (Standardized)

| Name | Min Width | Beverly Hills MD Behavior                                                                                                                                                                  |
| ---- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sm   | 640px     | Single column layout with wider margins. Product grids shift from 1-col to 2-col. Navigation remains hamburger. Hero text scales down to 36px Display.                                     |
| md   | 768px     | Two-column layouts begin. Product grids become 2-col with more generous gaps. Sidebar filters appear as a slide-out drawer. Article content hits its max-width (768px) and centers.        |
| lg   | 1024px    | Full desktop navigation replaces hamburger. Product grids expand to 3-col. Hero sections reach full editorial impact with 48px–64px Display type. Before/after sliders reach optimal size. |
| xl   | 1280px    | Standard max-width container engages. Product grids can go 4-col. Section spacing reaches full 128px–160px. All typographic sizes hit their design targets.                                |
| 2xl  | 1536px    | Wide editorial layouts engage (1440px container). Generous side margins create the magazine-spread effect. Hero images can bleed wider.                                                    |

### Touch Targets

| Element          | Minimum Size  | Padding                        |
| ---------------- | ------------- | ------------------------------ |
| Buttons          | 44px height   | 12px vertical, 32px horizontal |
| Navigation links | 44px tap area | 12px all sides                 |
| Form inputs      | 44px height   | 10px 16px                      |
| Icon buttons     | 44px × 44px   | 10px                           |

### Collapsing Strategy

- **Navigation:** Full horizontal nav collapses to a hamburger menu below lg (1024px). Menu slides in from the right as a full-height drawer with Slate-900 background and white text. Close button uses Rosé Petal.
- **Product grids:** 4-col → 3-col at lg, 2-col at md, 1-col below sm. Gap reduces from 32px to 24px to 16px.
- **Hero sections:** Stacked layout below md — image on top, text below. Text alignment shifts from left to center. Display font scales: 64px → 48px → 36px.
- **Cards:** Maintain their internal padding (24px minimum) at all sizes. Width becomes 100% below md. Shadow behavior remains consistent.
- **Section spacing:** Scales from 160px (2xl) → 128px (xl) → 96px (lg) → 64px (md) → 48px (sm/mobile). Never below 48px.

### Image Behavior

| Aspect              | Desktop                                                                   | Mobile                                          |
| ------------------- | ------------------------------------------------------------------------- | ----------------------------------------------- |
| Hero images         | Full-bleed or constrained to max-width, 16:9 or custom art-directed crops | Full-width, 4:5 or 1:1 crop for tighter framing |
| Product images      | 4:5 portrait in grid, centered in container                               | 4:5 maintained, full-width                      |
| Editorial/lifestyle | 16:9 in content flow, can span full container width                       | 16:9 or 4:3, full-width                         |
| Thumbnails          | 1:1, 80px–120px                                                           | 1:1, 64px–80px                                  |

All images use `object-fit: cover` and load with a Slate-100 placeholder background. Lazy loading is mandatory for all below-fold images.

---

## 9. Agent Prompt Guide

This section is written for AI coding assistants (Claude, Cursor, Copilot, etc.) building Beverly Hills MD interfaces.

### Quick Color Reference

| Name         | Hex           | When to use                                              |
| ------------ | ------------- | -------------------------------------------------------- |
| Navy-50      | `#f2f5fc`     | Navy-tinted backgrounds, info banner fills               |
| Navy-100     | `#e6ebf6`     | Input focus backgrounds, selected-row highlights         |
| Navy-200     | `#ced8ec`     | Navy-context light borders, progress bar tracks          |
| Navy-400     | `#8b98b4`     | Muted navy icons, inactive tab text                      |
| Navy-600     | `#465574`     | Hovered links, sub-navigation text                       |
| Navy-700     | `#303f5f`     | Hovered primary buttons, active nav states               |
| **Navy-800** | **`#233354`** | **Default — primary CTAs, headlines, hero backgrounds**  |
| Navy-900     | `#101a2e`     | Pressed buttons, dark overlays                           |
| Rosé-50      | `#fdf3ef`     | Promotional banners, warm section backgrounds            |
| Rosé-100     | `#f8e7e2`     | Testimonial cards, warm hover fills                      |
| Rosé-200     | `#fccbbb`     | Active state backgrounds, badge fills, warm borders      |
| **Rosé-300** | **`#eaab9f`** | **Default — secondary CTAs, accents, decorative warmth** |
| Rosé-400     | `#c08978`     | Hovered secondary buttons, warm active accents           |
| Rosé-500     | `#936455`     | Rosé text on light surfaces (contrast-safe)              |
| Slate-50     | `#f8fafc`     | Page background, subtle section fills                    |
| Slate-200    | `#e2e8f0`     | Borders (light), hover backgrounds, dividers             |
| Slate-600    | `#475569`     | Secondary text, descriptions                             |
| Slate-900    | `#0f172a`     | Primary body text, maximum contrast                      |
| White        | `#ffffff`     | Card surfaces, input backgrounds, text on dark           |

### Example Component Prompts

1. **Product Card:** "Build a product card with a 4:5 aspect-ratio image container (Slate-100 background, 4px border-radius on the card, 0px on the image — it bleeds to the card edges), a Playfair Display 22px/600 product name in Slate-900, a Libre Franklin 14px/400 description in Slate-600, a Libre Franklin 18px/700 price in Surgeon's Navy (#233354), and a full-width primary button (navy background, white text, 2px radius, 12px 32px padding, shadow-xs: `0 1px 2px 0 rgb(0 0 0 / 0.05)`). Card padding is 0px on the image, 24px on the text content. Hover lifts the card to shadow-md."

2. **Hero Section:** "Create a hero section with a full-bleed background image, a dark overlay (linear-gradient from rgba(35,51,84,0.7) to rgba(15,23,42,0.85)), centered text with a Playfair Display 64px/700 headline in white, a Libre Franklin 18px/400 subheadline in Slate-200 (#e2e8f0) with max-width 640px, and two buttons side-by-side: primary (white background, Surgeon's Navy text, 2px radius) and outline (transparent background, white text, 1px white border). Section height is 80vh minimum."

3. **Ingredient Spotlight Card:** "Build a card with no border, Slate-50 (#f8fafc) background, 32px padding, 4px radius. Inside: a 160px circular image (1:1, shadow-sm: `0 1px 3px 0 rgb(0 0 0 / 0.1)`, 50% border-radius), a Playfair Display 28px/600 ingredient name in Slate-900, a Libre Franklin 11px/700 overline in Rosé Petal (#eaab9f) with 0.08em letter-spacing and uppercase, and Libre Franklin 16px/400 body text in Slate-600 with 1.7 line-height."

4. **Navigation Bar:** "Build a fixed navigation with white background, 1px bottom border in Slate-200 (#e2e8f0), 64px height, max-width 1280px centered. Left: logo. Center: 5 nav links in Libre Franklin 13px/600, Slate-700 (#334155), uppercase, 0.06em letter-spacing, 32px horizontal gap. Right: cart icon, account icon, and a small primary button (Surgeon's Navy background, white text, 10px 24px padding, 2px radius). On scroll, add shadow-sm. Nav links hover to Surgeon's Navy with a 2px underline."

5. **Before/After Slider:** "Create a before/after image comparison component with two side-by-side images, a vertical divider line in Surgeon's Navy (#233354) 2px wide, and a draggable circular handle (32px diameter, white fill, 2px Surgeon's Navy border, shadow-md: `0 4px 6px -1px rgb(0 0 0 / 0.1)`). Handle hover changes border to Rosé Petal (#eaab9f). Images use object-fit: cover, 4:5 aspect ratio, 0px border-radius. Container has 4px radius and overflow hidden."

### Iteration Guide

1. **Always specify hex codes by name and value.** Say "Surgeon's Navy (`#233354`)" — never just "the brand blue" or "primary color." Agents need exact values.

2. **Reference the shadow scale by token name AND value.** Say "shadow-sm (`0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`)." Token names alone aren't enough for agents that don't have the full design system loaded.

3. **Specify font details completely.** Always include family, size (px), weight, and color for every text element. "A heading" is too vague — "Playfair Display 36px/600 in Slate-900" is buildable.

4. **Be explicit about spacing.** Say "32px padding" not "generous padding." Say "96px section gap" not "lots of space between sections."

5. **Describe hover and focus states.** Every interactive element needs: default state, hover state (color/shadow change + 200ms ease-out transition), focus state (2px Surgeon's Navy outline or 3px rgba(35,51,84,0.15) ring), and active/pressed state.

6. **Dark mode pairs.** When building components for dark backgrounds, pair Slate-900/800 backgrounds with Slate-50/200 text and Slate-700 borders. Navy and Rosé both work on dark surfaces — navy as a lighter accent, Rosé as the primary warmth.

7. **When in doubt, add more whitespace.** If a layout looks crowded, increase padding and gaps before adjusting font sizes or removing elements. The brand's luxury positioning depends on spatial generosity.
