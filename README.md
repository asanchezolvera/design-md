# Golden Hippo — Brand Design Systems

Comprehensive design system documentation for all Golden Hippo brands. Each brand's `DESIGN.md` is a self-contained reference covering visual identity, color, typography, components, layout, and AI agent prompt guidance.

## Brands

| Brand                 | Slug                    | Status   | Headline Font    | Body Font      | Primary Color            | Signature Shape     |
| --------------------- | ----------------------- | -------- | ---------------- | -------------- | ------------------------ | ------------------- |
| Beverly Hills MD      | `bhmd`                  | Complete | Playfair Display | Libre Franklin | Surgeon's Navy `#233354` | 2px radius (sharp)  |
| Gundry MD             | `gundry-md`             | Complete | Lora             | Red Hat Text   | Gundry Blue `#2945b8`    | Pill (9999px)       |
| Terra Mare            | `terra-mare`            | Complete | Crimson Text     | Poppins        | Sienna Bloom `#B7500B`   | 8–16px (soft round) |
| ActivatedYou          | `activated-you`         | Pending  | —                | —              | —                        | —                   |
| Driven Entrepreneur   | `driven-entrepreneur`   | Pending  | —                | —              | —                        | —                   |
| Debt Clear USA        | `debt-clear-usa`        | Pending  | —                | —              | —                        | —                   |
| Roundhouse Provisions | `roundhouse-provisions` | Pending  | —                | —              | —                        | —                   |
| Power Life Nutrition  | `power-life`            | Pending  | —                | —              | —                        | —                   |
| Brand 9               | —                       | Pending  | —                | —              | —                        | —                   |
| Brand 10              | —                       | Pending  | —                | —              | —                        | —                   |

## Directory Structure

```
design-md/
├── README.md
└── brands/
    ├── bhmd/           # Beverly Hills MD
    │   └── DESIGN.md
    ├── gundry/         # Gundry MD
    │   └── DESIGN.md
    ├── terra-mare/     # Terra Mare
    │   └── DESIGN.md
    └── ...             # 7 remaining brands
```

## Document Structure

Every `DESIGN.md` follows the same 9-section format:

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
