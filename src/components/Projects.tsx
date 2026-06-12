import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Chip } from './ui/Chip';
import { Reveal } from './ui/Reveal';
import { SplitText } from './ui/SplitText';
import { TiltCard } from './ui/TiltCard';

export function Projects() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [trackify, openSource] = t.projects.items;
  const sectionRef = useRef<HTMLElement>(null);

  /* Parallax sutil: la card secundaria flota a otra velocidad que la principal. */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const sideY = useTransform(scrollYProgress, [0, 1], [44, -44]);

  return (
    <section id="projects" ref={sectionRef} className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          <SplitText text={t.projects.heading} />
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <TiltCard className="h-full">
              <article
                className="h-full rounded-2xl border border-line p-7 md:p-9"
                style={{
                  background:
                    'linear-gradient(135deg, oklch(85% 0.124 195 / 8%), transparent 55%), var(--color-surface)',
                }}
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight">{trackify.name}</h3>
                <p className="mt-4 max-w-[60ch] leading-relaxed text-muted">{trackify.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {trackify.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </article>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.08} className="md:col-span-2">
            <motion.div className="h-full" style={reduceMotion ? undefined : { y: sideY }}>
              <TiltCard className="h-full">
                <article className="h-full rounded-2xl border border-line bg-surface p-7 md:p-9">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {openSource.name}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">{openSource.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {openSource.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
