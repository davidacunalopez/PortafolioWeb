import { motion, useScroll, useSpring } from 'motion/react';
import { isMax } from '../../config/effects';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  if (!isMax) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent/80"
      style={{ scaleX }}
    />
  );
}
