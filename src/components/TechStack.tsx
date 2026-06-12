import {
  siDocker,
  siGithub,
  siJavascript,
  siN8n,
  siNodedotjs,
  siOdoo,
  siPython,
  siReact,
  siSolidity,
  siSupabase,
  siTypescript,
} from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';
import { useReducedMotion } from 'motion/react';
import { DatabaseIcon } from '@phosphor-icons/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './ui/Reveal';
import { SplitText } from './ui/SplitText';

interface Tech {
  label: string;
  icon: SimpleIcon | null;
}

const techs: Tech[] = [
  { label: 'Python', icon: siPython },
  { label: 'JavaScript', icon: siJavascript },
  { label: 'TypeScript', icon: siTypescript },
  { label: 'React', icon: siReact },
  { label: 'Node.js', icon: siNodedotjs },
  { label: 'SQL & NoSQL', icon: null },
  { label: 'Docker', icon: siDocker },
  { label: 'GitHub', icon: siGithub },
  { label: 'Solidity', icon: siSolidity },
  { label: 'Odoo', icon: siOdoo },
  { label: 'n8n', icon: siN8n },
  { label: 'Supabase', icon: siSupabase },
];

const half = Math.ceil(techs.length / 2);
const rows = [techs.slice(0, half), techs.slice(half)];

function BrandIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden>
      <path d={icon.path} />
    </svg>
  );
}

function Pill({ tech }: { tech: Tech }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink">
      <span className="text-muted">
        {tech.icon ? <BrandIcon icon={tech.icon} /> : <DatabaseIcon size={18} aria-hidden />}
      </span>
      {tech.label}
    </span>
  );
}

export function TechStack() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section id="stack" className="scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          <SplitText text={t.stack.heading} />
        </h2>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-[55ch] text-lg leading-relaxed text-muted">{t.stack.note}</p>
        </Reveal>

        {reduceMotion ? (
          <div className="mt-12 flex max-w-4xl flex-wrap gap-3">
            {techs.map((tech) => (
              <Pill key={tech.label} tech={tech} />
            ))}
          </div>
        ) : (
          <Reveal delay={0.12}>
            <div className="mt-12 space-y-3">
              {rows.map((row, ri) => (
                <div key={ri} className="marquee">
                  <div className={`marquee-track ${ri === 1 ? 'marquee-reverse' : ''}`}>
                    {[0, 1, 2, 3].map((copy) => (
                      <div key={copy} aria-hidden={copy > 0} className="flex shrink-0 gap-3 pr-3">
                        {row.map((tech) => (
                          <Pill key={tech.label} tech={tech} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
