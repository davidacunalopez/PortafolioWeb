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
import { DatabaseIcon } from '@phosphor-icons/react';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './ui/Reveal';

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

function BrandIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden>
      <path d={icon.path} />
    </svg>
  );
}

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {t.stack.heading}
          </h2>
          <p className="mt-4 max-w-[55ch] text-lg leading-relaxed text-muted">{t.stack.note}</p>
        </Reveal>

        <div className="mt-12 flex max-w-4xl flex-wrap gap-3">
          {techs.map((tech, i) => (
            <Reveal key={tech.label} delay={i * 0.035}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-medium text-ink">
                <span className="text-muted">
                  {tech.icon ? <BrandIcon icon={tech.icon} /> : <DatabaseIcon size={18} aria-hidden />}
                </span>
                {tech.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
