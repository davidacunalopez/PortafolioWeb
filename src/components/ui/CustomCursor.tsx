import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { isMax } from '../../config/effects';
import { useMediaQuery } from '../../lib/useMediaQuery';

/* Orbe de luz difusa que sigue al puntero como una linterna (mix-blend screen).
   El cursor nativo queda visible: esto es luz ambiental, no un reemplazo. */
export function CustomCursor() {
  const fine = useMediaQuery('(hover: hover) and (pointer: fine)');
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const ox = useSpring(mx, { stiffness: 150, damping: 22, mass: 0.7 });
  const oy = useSpring(my, { stiffness: 150, damping: 22, mass: 0.7 });

  const enabled = isMax && fine && !reduceMotion;

  useEffect(() => {
    if (!enabled) return;

    function onMove(e: globalThis.PointerEvent) {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
      const target = e.target as Element | null;
      setActive(
        !!target?.closest('a, button, [role="button"], input, textarea, select, label'),
      );
    }
    function onLeave() {
      setVisible(false);
    }

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, [enabled, mx, my]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed -left-[70px] -top-[70px] z-[75] size-[140px] rounded-full"
      style={{
        x: ox,
        y: oy,
        mixBlendMode: 'screen',
        background:
          'radial-gradient(circle, color-mix(in oklab, var(--color-accent) 26%, transparent) 0%, color-mix(in oklab, var(--color-accent2) 11%, transparent) 38%, transparent 70%)',
      }}
      animate={{ opacity: visible ? (active ? 1 : 0.7) : 0, scale: active ? 1.5 : 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
