import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Counter } from './ui/Counter';
import { Reveal } from './ui/Reveal';
import { SplitText } from './ui/SplitText';
import perfil from '../assets/photos/perfil.webp';

export function About() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const portraitRef = useRef<HTMLDivElement>(null);

  /* Parallax interno del retrato: la imagen se desplaza dentro de su marco. */
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              <SplitText text={t.about.heading} />
            </h2>

            <div
              ref={portraitRef}
              className="relative mt-10 max-w-sm overflow-hidden rounded-2xl border border-line"
            >
              <div className="aspect-[4/5]">
                <motion.img
                  src={perfil}
                  alt={t.about.portraitAlt}
                  loading="lazy"
                  decoding="async"
                  className="size-full scale-[1.14] object-cover"
                  style={reduceMotion ? undefined : { y: imageY }}
                />
              </div>
              {/* Cortina que se retira hacia abajo y revela el retrato (solo transform) */}
              <motion.div
                aria-hidden
                className="absolute inset-0 origin-bottom bg-bg"
                initial={reduceMotion ? { opacity: 1 } : { scaleY: 1 }}
                whileInView={reduceMotion ? { opacity: 0 } : { scaleY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          <div>
            <Reveal>
              <dl className="mb-10 grid grid-cols-3 gap-6 border-b border-line pb-10">
                {t.about.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-4xl font-semibold tracking-tight text-ink">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </dt>
                    <dd className="mt-1 text-sm leading-snug text-muted">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {t.about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className={`max-w-[65ch] text-lg leading-relaxed text-muted ${i > 0 ? 'mt-5' : ''}`}>
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.15}>
              <dl className="mt-10 flex flex-wrap gap-x-14 gap-y-6">
                {t.about.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm text-muted">{fact.label}</dt>
                    <dd className="mt-1 font-medium text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
