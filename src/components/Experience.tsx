import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Chip } from './ui/Chip';
import { Reveal } from './ui/Reveal';
import { SplitText } from './ui/SplitText';

export function Experience() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);

  /* La linea del timeline se dibuja conforme el scroll avanza por la seccion. */
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 0.8', 'end 0.5'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          <SplitText text={t.experience.heading} />
        </h2>

        <div className="relative mt-14 max-w-3xl">
          <span aria-hidden className="absolute left-0 top-0 h-full w-px bg-line" />
          <motion.span
            aria-hidden
            className="absolute left-0 top-0 h-full w-px origin-top bg-accent/60"
            style={{ scaleY: reduceMotion ? 1 : lineScale }}
          />

          <ol ref={listRef}>
            {t.experience.items.map((item, i) => (
              <li key={item.role} className="relative pb-14 pl-8 last:pb-0">
                <motion.span
                  aria-hidden
                  className="absolute -left-[4px] top-2 size-[9px] rounded-full border border-accent bg-bg"
                  initial={reduceMotion ? { opacity: 0 } : { scale: 0, opacity: 0 }}
                  whileInView={reduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                />
                <Reveal delay={i * 0.06}>
                  <p className="text-sm text-muted">
                    {item.company}, {item.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium tracking-tight md:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-3 max-w-[65ch] leading-relaxed text-muted">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
