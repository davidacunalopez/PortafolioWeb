import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Magnetic } from './ui/Magnetic';
import { SplitText } from './ui/SplitText';

/* La escena three.js vive en su propio chunk: el bundle inicial no la paga. */
const HeroScene = lazy(() => import('./three/HeroScene'));

export function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const idle = (cb: () => void) =>
      typeof window.requestIdleCallback === 'function'
        ? window.requestIdleCallback(cb, { timeout: 1200 })
        : window.setTimeout(cb, 350);
    const id = idle(() => setSceneReady(true));
    return () => {
      if (typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, [reduceMotion]);

  /* Parallax de salida: el contenido sube mas lento que el scroll y se desvanece. */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    visible: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
    >
      {sceneReady && (
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      )}

      <motion.div
        className="relative mx-auto w-full max-w-6xl px-5 pt-16 md:px-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.07 }}
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-3xl">
          <motion.p
            variants={item}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-base font-medium text-accent"
          >
            {t.hero.name}
          </motion.p>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            <SplitText text={t.hero.title} mode="mount" delay={0.12} />
          </h1>

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
            <Magnetic>
              <a href="#contact" className="btn btn-primary">
                {t.hero.ctaPrimary}
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#projects" className="btn btn-ghost">
                {t.hero.ctaSecondary}
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
