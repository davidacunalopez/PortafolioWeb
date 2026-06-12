import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './ui/Reveal';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {t.about.heading}
            </h2>
          </Reveal>

          <div>
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
