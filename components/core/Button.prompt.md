Pill-shaped action button — use `primary` for the main call-to-action (gradient fill + morado glow), `ghost` for secondary actions, `secondary` for soft glass actions.

```jsx
<Button variant="primary" href="#proyectos">Ver proyectos</Button>
<Button variant="ghost">Hablemos →</Button>
<Button variant="primary" full type="submit">Enviar mensaje →</Button>
```

Variants: `primary | ghost | secondary`. Sizes: `sm | md`. Props: `full`, `disabled`, `href` (renders an `<a>`). Append `→` to forward CTAs.
