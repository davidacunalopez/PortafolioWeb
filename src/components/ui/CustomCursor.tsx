import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { isMax } from '../../config/effects';
import { useMediaQuery } from '../../lib/useMediaQuery';

/* Punto + anillo que siguen el puntero. El cursor nativo queda visible:
   esto es un acento, no un reemplazo (evita problemas en inputs y texto). */
export function CustomCursor() {
  const fine = useMediaQuery('(hover: hover) and (pointer: fine)');
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const rx = useSpring(mx, { stiffness: 320, damping: 28, mass: 0.6 });
  const ry = useSpring(my, { stiffness: 320, damping: 28, mass: 0.6 });

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
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed -left-[3px] -top-[3px] z-[80] size-1.5 rounded-full bg-accent"
        style={{ x: mx, y: my }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed -left-[17px] -top-[17px] z-[80] size-[34px] rounded-full border border-accent/40"
        style={{ x: rx, y: ry }}
        animate={{ opacity: visible ? 1 : 0, scale: active ? 1.55 : 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  );
}
