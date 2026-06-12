import { useState } from 'react';
import type { PointerEvent, ReactNode } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react';
import { useMediaQuery } from '../../lib/useMediaQuery';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

/* Tilt 3D sutil + spotlight cian que sigue el cursor. Solo pointer fino. */
export function TiltCard({ children, className }: TiltCardProps) {
  const fine = useMediaQuery('(hover: hover) and (pointer: fine)');
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(0, { stiffness: 200, damping: 20, mass: 0.4 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20, mass: 0.4 });
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(35);
  const spotlight = useMotionTemplate`radial-gradient(26rem circle at ${spotX}% ${spotY}%, color-mix(in oklab, var(--color-accent) 8%, transparent), transparent 65%)`;

  const enabled = fine && !reduceMotion;

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 6);
    rotateX.set((0.5 - py) * 6);
    spotX.set(px * 100);
    spotY.set(py * 100);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      className={`relative ${className ?? ''}`}
      style={enabled ? { rotateX, rotateY, transformPerspective: 1100 } : undefined}
      onPointerMove={enabled ? onMove : undefined}
      onPointerEnter={enabled ? () => setHovered(true) : undefined}
      onPointerLeave={enabled ? onLeave : undefined}
    >
      {children}
      {enabled && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
          style={{ background: spotlight, opacity: hovered ? 1 : 0 }}
        />
      )}
    </motion.div>
  );
}
