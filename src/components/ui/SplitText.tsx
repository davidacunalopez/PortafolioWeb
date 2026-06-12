import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';

interface SplitTextProps {
  text: string;
  /* 'inview' anima al entrar al viewport; 'mount' anima al montar (hero). */
  mode?: 'inview' | 'mount';
  delay?: number;
  className?: string;
}

export function SplitText({ text, mode = 'inview', delay = 0, className }: SplitTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04, delayChildren: delay } },
  };

  const word: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
      }
    : {
        hidden: { y: '115%' },
        visible: { y: '0%', transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
      };

  return (
    <motion.span
      key={text}
      aria-label={text}
      role="text"
      className={className}
      variants={container}
      initial="hidden"
      {...(mode === 'mount'
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: { once: true, amount: 0.6 } })}
    >
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden align-bottom">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
