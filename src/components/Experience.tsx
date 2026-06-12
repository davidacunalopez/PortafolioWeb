import { useLanguage } from '../i18n/LanguageContext';
import { Chip } from './ui/Chip';
import { Reveal } from './ui/Reveal';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {t.experience.heading}
          </h2>
        </Reveal>

        <ol className="mt-14 max-w-3xl">
          {t.experience.items.map((item, i) => (
            <li key={item.role} className="relative border-l border-line pb-14 pl-8 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[5px] top-2 size-[9px] rounded-full border border-accent bg-bg"
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
    </section>
  );
}
