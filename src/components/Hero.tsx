import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
  };

  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(56rem 36rem at 78% 8%, oklch(85% 0.124 195 / 9%), transparent 65%)',
        }}
      />

      <motion.div
        className="mx-auto w-full max-w-6xl px-5 pt-16 md:px-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.07 }}
      >
        <div className="max-w-3xl">
          <motion.p
            variants={item}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-base font-medium text-accent"
          >
            {t.hero.name}
          </motion.p>

          <motion.h1
            variants={item}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            variants={item}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            variants={item}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn btn-primary">
              {t.hero.ctaPrimary}
            </a>
            <a href="#projects" className="btn btn-ghost">
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
