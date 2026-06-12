# Acuña Portfolio — Design System

A living design system extracted from the personal developer & AI portfolio of
**Rodolfo David Acuña López** — Ingeniero en Computación (TEC Costa Rica),
specialised in production AI agents (Odoo, n8n, Supabase, OpenAI), full-stack
development (React, Node.js, TypeScript, Python) and process automation.

The brand is a **modern dark portfolio**: a near-black, blue-tinted canvas lit
by three vibrant accents — **morado `#6c63ff`**, **rosa `#f72585`**, **cyan
`#4cc9f0`** — that almost always travel together as a single 135° gradient.
Glassmorphism (blurred translucent surfaces), fluid motion, and the Space
Grotesk + Inter type pairing define every surface.

The portfolio is organised into the sections: **Hero · Sobre mí · Experiencia
(timeline) · Habilidades (bento grid) · Proyectos · Educación · Contacto.**

---

## Sources

This system was reverse-engineered from real source code and design-craft
references. You may not have access, but they are recorded here in case you do:

- **Primary product (source of truth):**
  [`davidacunalopez/PortafolioWeb`](https://github.com/davidacunalopez/PortafolioWeb)
  — the original static portfolio (`index.html`, `styles.css`, `script.js`,
  `Imagenes/`). All tokens, components and the UI kit below were lifted from its
  actual CSS, not from screenshots. **Explore this repo further** to refine or
  extend designs built with this system.
- **Design-craft skills (referenced for technique, not branding):**
  [`pbakaus/impeccable`](https://github.com/pbakaus/impeccable) — anti-pattern
  rules and typography/color/motion references;
  [`alchaincyf/huashu-design`](https://github.com/alchaincyf/huashu-design) —
  design guidance. These informed *how carefully* the system is built (tinted
  neutrals, purposeful single-easing motion, restrained type scale), within
  David's established brand.

> Note: the brand intentionally embraces vibrant gradients + glassmorphism. That
> is the owner's chosen aesthetic — applied here with discipline (one easing,
> one gradient, cool-tinted neutrals) rather than as generic slop.

Real photography (David presenting, candid portraits) was imported from the
repo into [`assets/`](assets/).

---

## Content Fundamentals

How copy is written across the portfolio:

- **Language: Spanish (es).** All UI and prose are in Spanish. Keep it that way
  unless a consumer explicitly needs another locale. Example labels: *"Sobre
  mí", "Habilidades", "Proyectos", "Contáctame", "Ver proyectos", "Hablemos →".*
- **Voice: first person, warm and confident.** David speaks as *"yo"* —
  *"Hola, soy David Acuña"*, *"Soy un desarrollador web con enfoque en…"*,
  *"Me apasiona la intersección entre tecnología y creatividad."* When
  addressing the visitor it shifts to an inviting *"tú"*: *"¿Tienes un proyecto
  en mente?"*, *"Cuéntame sobre tu proyecto…"*
- **Tone: enthusiastic but professional.** Phrases lean on craft and passion —
  *"creando con pasión y propósito"*, *"código limpio con un diseño
  impactante"*, *"rápidas, accesibles y escalables."* Avoid corporate
  buzzwords; favour concrete craft language.
- **Casing:**
  - Eyebrow / section labels are **UPPERCASE** with wide tracking
    (*"SOBRE MÍ", "HABILIDADES"*).
  - Headings use **sentence case** (*"Stack tecnológico", "Trabajo reciente"*),
    often splitting a phrase so the second half lands in the gradient.
  - Buttons use **sentence case**, frequently closed with an arrow glyph
    (*"Ver proyectos", "Hablemos →", "Enviar mensaje →"*).
- **The arrow `→`** is the brand's call-to-action signature — append it to
  forward/primary actions, not to neutral ones.
- **Stats are short and punchy:** *"+10 Proyectos", "3+ Años exp.", "100%
  Dedicación."* Numbers carry a `+` / `%` flourish.
- **Emoji:** used *sparingly and decoratively only* — a ⚡ / 🎨 on a floating
  hero chip, a 🚀 placeholder tile, a ❤️ in the footer credit. Never inside body
  copy or as functional iconography. When in doubt, omit.
- **Vibe:** a young, technical, design-minded builder who is *disponible para
  trabajar* — approachable, energetic, proud of the craft.

---

## Visual Foundations

**Color & background.** A near-black, blue-tinted canvas (`--bg #080b12`,
`--bg-2 #0d1117`). Alternate sections are washed an almost-imperceptible
`rgba(255,255,255,0.01)`. The three accents (morado / rosa / cyan) are *never*
used as flat fills on large areas — they appear as the **135° tri-stop
gradient** (`--gradient`) on text, buttons, rings and thin bars, or as
**low-opacity tints** (10%) behind pills and soft cards. Neutrals are cool, not
gray — text is `#e8eaf0` (never pure `#fff` for body), muted text is the
blue-leaning `#8892a4`.

**Backgrounds & atmosphere.** No photographic full-bleeds behind content.
Instead: large **blurred color "blobs"** (`filter: blur(80px)`, opacity
~0.15) drift slowly behind the hero and contact sections, plus a **faint 60px
grid overlay** (`rgba(255,255,255,0.025)` lines). A desktop-only **cursor glow**
(300px radial, 6% morado) follows the pointer. The mood is a dark studio lit by
neon — calm, deep, with soft colored light.

**Typography.** `Space Grotesk` for everything display — hero (800),
section titles (700), stat numbers, big bento numerals — tight line-height
(1.05–1.15). `Inter` for body/UI (300–900 available; body at 400, labels at
600). Lead/body copy is airy (1.6–1.8). Gradient text is reserved for the
emphasised half of a heading and large numerals.

**Spacing & layout.** 8px rhythm; sections breathe at `7rem` vertical padding.
Content is capped at `1200px` (`700px` for centered contact). The **nav is a
fixed, floating, pill-shaped glass bar** centered at the top (`top: 1.5rem`),
not a full-width header. Layouts favour asymmetric grids — overlapping stacked
photos in *Sobre mí*, a `repeat(3, …)` bento with one wide + one accent tile in
*Habilidades*.

**Borders, cards & glass.** Cards are translucent glass: `--surface`
(`rgba(255,255,255,0.04)`) fill, `1px` `--border` (`rgba(255,255,255,0.08)`)
hairline, `--radius-lg` (24px) corners, soft `--shadow-sm`. Inputs use 16px
radius. Interactive pills (buttons, tags, nav, eyebrows) are fully rounded
(99px). Glass surfaces carry `backdrop-filter: blur(20px)`.

**Corner radii.** `10px` chips · `16px` inputs/small cards · `20px` photos ·
`24px` feature cards · `99px` pills.

**Shadows & glows.** Two systems: neutral black shadows for depth
(`0 4px 30px` → `0 30px 60px` as elevation rises on hover), and **accent
glows** (`0 0 30px rgba(108,99,255,0.3)` → `0 0 50px …0.5`) that make primary
buttons feel lit. Glows belong to the morado accent only.

**Motion.** One easing everywhere: `cubic-bezier(0.4,0,0.2,1)` via
`--transition` (0.3s). Patterns: scroll-reveal **fade + 30px rise** (0.7s,
staggered 100ms), skill bars that **fill width** on enter (1.2s), slowly
**drifting blobs** and **floating glass chips** (3–8s ease-in-out alternate),
**rotating gradient rings** around the hero photo (6s / 10s reverse), a
**pulsing "disponible" dot** (2s). No bounce, no elastic — smooth and confident.
Respect `prefers-reduced-motion`.

**Hover & press states.**
- Buttons / cards **lift** (`translateY(-2px … -8px)`) and deepen their shadow;
  primary buttons intensify their glow.
- Glass surfaces brighten fill (`0.04 → 0.08`) and border
  (`0.08 → 0.16/0.20`).
- Tags & skill chips shift their text + border to the morado accent on hover.
- Ghost buttons gain a brighter border + faint fill.
- Project cards reveal a blurred dark overlay with a centered CTA.
- No distinct "shrink on press"; the lift + brightness *is* the feedback.

**Transparency & blur** are used deliberately — for the floating nav, floating
hero chips, hover overlays and all glass cards. Blur is `20px` for surfaces,
`4px` for overlays.

**Imagery vibe.** Real, candid, warm-neutral photography of David working /
presenting — natural indoor light, slight grain, true-to-life color (not graded
cool or B&W). Photos sit in rounded frames (20px) with a subtle border and, in
the hero, an animated gradient ring.

---

## Iconography

The source portfolio is **almost icon-free by design** — it leans on type,
color and the gradient rather than an icon set. What exists:

- **No icon font, no SVG icon sprite** ships in the original repo. Do not invent
  one or hand-draw decorative SVGs.
- **Decorative emoji**, used sparingly, stand in for the few "icons": ⚡ and 🎨
  on floating hero chips, 🚀 as a project placeholder, ❤️ in the footer. Treat
  these as brand flavour, not a system.
- **Unicode glyphs as UI marks:** the arrow `→` (every forward CTA), `↑`
  ("volver arriba"), `·` (social-link dividers), `✓` (form success state). These
  *are* part of the vocabulary — prefer them over importing an icon library for
  simple marks.
- **The "logo"** is a pure-type wordmark: `DA` in Space Grotesk bold with a
  morado period — `DA<span class="accent">.</span>`. There is no image logo.

**If a build genuinely needs an icon set** (e.g. a richer dashboard UI not
present in the source), substitute **[Lucide](https://lucide.dev)** via CDN —
its thin, rounded 1.5–2px stroke matches the light, modern feel — and **flag the
substitution to the user**, since no icon system exists in the original brand.

---

## Index / Manifest

Root files:

- **`styles.css`** — global entry point (import manifest only). Consumers link
  this. Reaches every token + font file.
- **`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `effects.css`.
- **`assets/`** — real photography (`perfil.jpg`, `photo-1251/1344/1411/1792`).
- **`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Brand)
  shown in the Design System tab.
- **`components/`** — reusable React primitives (see below).
- **`ui_kits/portfolio/`** — full interactive recreation of the portfolio.
- **`SKILL.md`** — makes this system installable as an Agent Skill.

### Components
`core/` — **Button**, **Tag**, **Badge**, **Card**, **Input**, **Textarea**,
**SectionLabel**, **GradientText**, **StatBlock**, **SkillBar**, **Avatar**.

### UI Kit
`ui_kits/portfolio/` — interactive single-page portfolio recreation
(floating nav · hero · sobre mí · habilidades bento · proyectos · contacto)
composed from the components above, using the real photography and a working
contact form.

---

*Built from real source. Explore the linked repositories above to go deeper.*
