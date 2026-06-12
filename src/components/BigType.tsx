import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { isMax } from '../config/effects';

/* Tipografía gigante en outline que cruza la pantalla con el scroll,
   con un skew sutil según la velocidad. Decorativa (aria-hidden). */
export function BigType() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['3%', '-28%']);

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const skewRaw = useTransform(velocity, [-1600, 1600], [3, -3], { clamp: true });
  const skewX = useSpring(skewRaw, { stiffness: 250, damping: 40 });

  if (!isMax) return null;

  const phrase = `${t.ticker} `.repeat(3);

  return (
    <div ref={ref} aria-hidden className="overflow-hidden py-8 md:py-14">
      <motion.p
        className="whitespace-nowrap font-display text-[clamp(4.5rem,11vw,8.5rem)] font-bold leading-none tracking-tight text-transparent"
        style={{
          WebkitTextStroke: '1px oklch(93% 0.012 240 / 22%)',
          ...(reduceMotion ? {} : { x, skewX }),
        }}
      >
        {phrase}
      </motion.p>
    </div>
  );
}
