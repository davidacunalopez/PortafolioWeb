# Portafolio | Rodolfo David Acuña López

Landing page de portafolio personal. Diseño oscuro "aurora" en negro-violeta con acentos violeta y azul eléctrico, bilingüe (ES/EN) y formulario de suscripción conectado a n8n.

**Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4 + Motion.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Variables de entorno

Copia `.env.example` a `.env` y completa:

| Variable | Descripción |
|---|---|
| `VITE_N8N_WEBHOOK_URL` | URL del webhook de n8n que recibe las suscripciones del formulario. Si está vacía, el formulario muestra un aviso de "disponible pronto" en lugar del input. |

## Conectar el formulario a n8n

1. En tu instancia de n8n: **Workflows → Import from File** y selecciona `docs/n8n-subscribe-workflow.json`.
2. Activa el workflow. Copia la **Production URL** del nodo Webhook (algo como `https://tu-n8n.com/webhook/portfolio-subscribe`).
3. Pega esa URL en `VITE_N8N_WEBHOOK_URL` (en `.env` local y en las variables de entorno de Vercel) y vuelve a desplegar.
4. Recomendado: en el nodo Webhook, cambia `Allowed Origins (CORS)` de `*` al dominio real del sitio.
5. A partir del nodo "Normalizar datos" puedes encadenar lo que quieras: guardar en Supabase o Google Sheets, notificarte por Telegram/correo, etc.

El formulario envía `POST` con JSON: `{ "email": "...", "lang": "es" | "en", "source": "portfolio" }`.

## Deploy en Vercel

1. Sube el repo a GitHub y en Vercel: **Add New → Project → Import** este repositorio.
2. Vercel detecta Vite automáticamente (build `npm run build`, output `dist/`). No necesita configuración extra.
3. Agrega `VITE_N8N_WEBHOOK_URL` en **Settings → Environment Variables** y redeploy.

## ¿Demasiados efectos? Volver a "Premium equilibrado"

La página corre en modo "wow máximo": cursor personalizado, tipografía gigante entre secciones, galería de Eventos con scroll horizontal y barra de progreso. Si lo prefieres más sobrio, cambia una línea en `src/config/effects.ts`:

```ts
export const EFFECTS_LEVEL: EffectsLevel = 'balanced';
```

Eso desactiva los efectos anteriores y deja los sobrios (smooth scroll, reveals, parallax, spotlight en cards, marquee del stack, botones magnéticos). La sección Eventos pasa a ser un carrusel deslizable normal.

## Optimizar fotos nuevas

Los originales viven en `Images/` y los WebP optimizados en `src/assets/photos/`. Si agregas o cambias fotos, edita la lista en `scripts/optimize-images.mjs` y corre:

```bash
node scripts/optimize-images.mjs
```

## Pendientes opcionales

- **Imagen Open Graph**: agregar `public/og.png` (1200×630) y la meta `og:image` en `index.html` para que el link se vea bien al compartirlo en redes.
- **Foto personal**: una foto real en la sección "Sobre mí" elevaría la página para reclutadores.
- **Enlaces de proyectos**: cuando Trackify o las contribuciones open source tengan URL pública, enlazar las tarjetas de la sección Proyectos.
