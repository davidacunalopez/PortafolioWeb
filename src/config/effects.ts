/*
  Nivel de intensidad de los efectos "wow" de la página.

  - 'max': cursor personalizado, tipografía gigante entre secciones,
    galería de Eventos con scroll horizontal y barra de progreso.
  - 'balanced': desactiva los anteriores y deja solo los efectos sobrios
    (smooth scroll, reveals, parallax, spotlight, marquee, magnetic).

  Cambiar a 'balanced' aquí es lo único necesario para volver al modo sobrio.
*/
export type EffectsLevel = 'max' | 'balanced';

export const EFFECTS_LEVEL: EffectsLevel = 'max';

export const isMax = EFFECTS_LEVEL === 'max';
