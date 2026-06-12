---
name: acuna-portfolio-design
description: Use this skill to generate well-branded interfaces and assets for the Acuña Portfolio (Rodolfo David Acuña López — developer & AI portfolio), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand:** modern dark developer portfolio. Near-black blue-tinted canvas, lit by three accents that travel together as one 135° gradient.
- **Colors:** morado `#6c63ff` (primary) · rosa `#f72585` · cyan `#4cc9f0`. Canvas `#080b12` / `#0d1117`. Text `#e8eaf0` / muted `#8892a4`. Never pure black/white/gray.
- **Type:** Space Grotesk (display/headings, 700–800, tight) + Inter (body/UI) + JetBrains Mono (code). All on Google Fonts.
- **Surfaces:** translucent glass (`rgba(255,255,255,0.04)`, 1px hairline, `blur(20px)`), 24px radii on cards, 99px pills on interactive elements.
- **Motion:** one easing `cubic-bezier(0.4,0,0.2,1)`; fade+rise reveals, drifting blobs, rotating gradient rings, lift+glow on hover. No bounce. Respect reduced-motion.
- **Language:** Spanish, first-person, warm + technical. Forward CTAs end with `→`.
- **Tokens:** link `styles.css`; use the CSS custom properties (see `tokens/`).
- **Components:** `components/core` — Button, Tag, Badge, Card, Input, Textarea, SectionLabel, GradientText, StatBlock, SkillBar, Avatar.
- **UI kit:** `ui_kits/portfolio` — full interactive single-page recreation.
- **Iconography:** no icon set in the brand; uses Unicode glyphs (`→ ↑ · ✓`) and a few decorative emoji. If a real icon set is needed, use Lucide via CDN and flag it.
