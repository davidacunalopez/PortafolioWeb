# Portfolio — UI Kit

An interactive, high-fidelity recreation of Rodolfo David Acuña López's personal
developer & AI portfolio — a single scrolling page built entirely from this
system's core components and tokens.

## Screens / sections
- **Nav** (`Nav.jsx`) — floating glass pill, sticky, gains shadow on scroll;
  smooth-scrolls to sections.
- **Hero** (`Hero.jsx`) — "disponible" badge, gradient title, dual CTAs, stat
  strip, ringed portrait with floating glass chips.
- **Sobre mí** (`About.jsx`) — overlapping photo stack + bio + tech tag cloud.
- **Habilidades** (`Skills.jsx`) — bento grid: a wide animated skill-bars tile,
  three stack tiles, one accent tile.
- **Proyectos** (`Projects.jsx`) — three project cards with hover overlay CTA.
- **Contacto** (`Contact.jsx`) — centered glass form with a working success
  state and social links.
- **Footer** (`Footer.jsx`) — wordmark, credit, back-to-top.
- **Atmosphere** (`Atmosphere.jsx`) — drifting blobs, faint grid, cursor glow.

`App.jsx` composes them; `index.html` loads React + Babel + the compiled
`_ds_bundle.js`, then each `.jsx` (each assigns its component to `window`).

## Interactions
Smooth-scroll nav, scroll-reactive nav shadow, animated skill bars, project-card
hover overlays, and a contact form that shows **"✓ Mensaje enviado"** on submit.

## Notes
Content reflects the fuller portfolio described by David (AI agents, Odoo, n8n,
Supabase, full-stack) rather than the placeholder copy in the original repo.
All primitives come from `components/core` via `window.AcuAPortfolioDesignSystem_96f72c`.
