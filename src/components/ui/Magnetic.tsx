import { useRef } from 'react';
import type { PointerEvent, ReactNode } from 'react';
import { motion, useReducedMotion, useSpring } from 'motion/react';
import { useMediaQuery } from '../../lib/useMediaQuery';

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/* El contenido se inclina suavemente hacia el cursor; solo en pointer fino. */
export function Magnetic({ children, strength = 0.3, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useMediaQuery('(hover: hover) and (pointer: fine)');
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 180, damping: 16, mass: 0.3 });
  const y = useSpring(0, { stiffness: 180, damping: 16, mass: 0.3 });

  const enabled = fine && !reduceMotion;

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className ?? ''}`}
      style={enabled ? { x, y } : undefined}
      onPointerMove={enabled ? onMove : undefined}
      onPointerLeave={enabled ? onLeave : undefined}
    >
      {children}
    </motion.div>
  );
}
