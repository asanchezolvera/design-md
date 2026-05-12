# Golden Hippo — Brand Design Systems

Comprehensive design system documentation for all Golden Hippo brands. Each brand's `DESIGN.md` is a self-contained reference covering visual identity, color, typography, components, layout, and AI agent prompt guidance.

## Brands

| Brand                 | Slug                    | Status   | Headline Font    | Body Font      | Primary Color            | Signature Shape         |
| --------------------- | ----------------------- | -------- | ---------------- | -------------- | ------------------------ | ----------------------- |
| Beverly Hills MD      | `bhmd`                  | Complete | Playfair Display | Libre Franklin | Surgeon's Navy `#233354` | 2px radius (sharp)      |
| Gundry MD             | `gundry-md`             | Complete | Lora             | Red Hat Text   | Gundry Blue `#2945b8`    | Pill (9999px)           |
| Terra Mare            | `terra-mare`            | Complete | Crimson Text     | Poppins        | Sienna Bloom `#B7500B`   | 8–16px (soft round)     |
| DebtClear USA         | `debt-clear-usa`        | Complete | Poppins          | Poppins        | Anchor Navy `#0D3B66`    | 8px (trustworthy)       |
| Power Life            | `power-life`            | Complete | Montserrat       | Montserrat     | Voltage Cobalt `#1C439B` | 10px (confidently soft) |
| Roundhouse Provisions | `roundhouse-provisions` | Complete | Antonio          | Barlow         | Ranger Ember `#EE5531`   | 8–14px (confident-grit) |
| Driven Entrepreneur   | `driven-entrepreneur`   | Complete | Albert Sans      | Inter          | Deep Forest `#154847`    | Pill (9999px)           |
| ActivatedYou          | `activated-you`         | Complete | Roboto           | Roboto         | Cultivated Green `#52744B` | 12–20px (soft botanical) |

## Directory Structure

```
design-md/
├── README.md
└── brands/
    ├── index.json                  # Registry of all brands (slug → DESIGN/SKILL paths)
    ├── bhmd/                       # Beverly Hills MD
    │   ├── DESIGN.md
    │   ├── SKILL.md                # AI-agent-loadable brand skill
    │   └── assets/
    ├── gundry-md/                  # Gundry MD
    │   └── DESIGN.md
    ├── terra-mare/                 # Terra Mare
    │   └── DESIGN.md
    ├── debt-clear-usa/             # DebtClear USA
    │   ├── DESIGN.md
    │   └── assets/
    ├── power-life/                 # Power Life
    │   └── DESIGN.md
    ├── roundhouse-provisions/      # Roundhouse Provisions
    │   └── DESIGN.md
    ├── driven-entrepreneur/        # Driven Entrepreneur
    │   └── DESIGN.md
    └── activated-you/              # ActivatedYou
        └── DESIGN.md
```

Each brand is registered in [`brands/index.json`](brands/index.json) with its slug, display name, and the canonical paths to its `DESIGN.md` and `SKILL.md`. New brands should be added to the registry when their DESIGN.md is created.

## Brand Skills

Each completed brand can be paired with a `SKILL.md` — a ~100-line, AI-agent-loadable summary derived from its `DESIGN.md`. Skills give coding agents the brand's color tokens, type scale, component patterns, and guardrails in a single compact file so they can produce on-brand UI without parsing the full spec.

Generate or refresh a skill with the `generate-brand-skill` skill:

- Pass a brand slug (e.g. `bhmd`) to process a single brand.
- Pass no arguments to regenerate skills for every brand listed in `brands/index.json`.

## Document Structure

`DESIGN.md` files are written in **spec format**: YAML front matter (version, name, description, full color/typography/spacing tokens) followed by prose documentation. Every document follows the same 9-section format:

1. **Visual Theme & Atmosphere** — Brand personality, mood, and key visual characteristics
2. **Color Palette & Roles** — Primary brand colors (11-step OKLCH palettes), semantic colors (error/info/success/warning), surface neutrals, borders, and gradients
3. **Typography Rules** — Font families, size/weight/line-height/tracking hierarchy, and typographic principles
4. **Component Stylings** — Buttons, cards, inputs, navigation, image treatment, and brand-distinctive components
5. **Layout Principles** — Spacing scale, grid/container specs, whitespace philosophy, and border radius scale
6. **Depth & Elevation** — Shadow scale with brand-specific usage guidance
7. **Do's and Don'ts** — Brand-specific guardrails for visual and interaction design
8. **Responsive Behavior** — Breakpoints, touch targets, collapsing strategies, and image behavior
9. **Agent Prompt Guide** — Quick-reference color tables, example component prompts, and AI iteration guidance

## Shared Standards

The following are standardized across all brands and appear identically in each document:

- **Semantic palettes** — Error (Red), Info (Blue), Success (Green), Warning (Yellow) use Tailwind default scales
- **Focus ring** — `Blue-500` (`#3b82f6`) for all accessibility focus states
- **Spacing scale** — Full standardized scale from 0px to 1920px
- **Shadow scale** — 7-tier system from `2xs` to `2xl`
- **Breakpoints** — `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)
- **Minimum touch targets** — 44px for tappable elements

Brand-specific decisions live in the primary color palettes, font families, border-radius defaults, and whitespace philosophy.
