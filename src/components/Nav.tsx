import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from 'motion/react';
import { ListIcon, XIcon } from '@phosphor-icons/react';
import { useLanguage } from '../i18n/LanguageContext';

const sections = ['about', 'experience', 'projects', 'events', 'stack', 'contact'] as const;

export function Nav() {
  const { t, lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 16));

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const labels: Record<(typeof sections)[number], string> = {
    about: t.nav.about,
    experience: t.nav.experience,
    projects: t.nav.projects,
    events: t.nav.events,
    stack: t.nav.stack,
    contact: t.nav.contact,
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled ? 'glass border-x-0 border-t-0' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-base font-semibold tracking-tight">
          David Acuña
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-muted transition-colors duration-150 hover:text-ink"
            >
              {labels[id]}
            </a>
          ))}
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.toggleLang}
            className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink transition-colors duration-150 hover:border-accent/50"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggle}
            aria-label={t.nav.toggleLang}
            className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t.nav.openMenu}
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-full border border-line text-ink"
          >
            <ListIcon size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-bg/95 px-5 pt-3 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="flex h-16 items-center justify-between">
              <span className="font-display text-base font-semibold tracking-tight">David Acuña</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.nav.closeMenu}
                className="flex size-10 items-center justify-center rounded-full border border-line text-ink"
              >
                <XIcon size={20} />
              </button>
            </div>
            <div className="mt-10 flex flex-col gap-2">
              {sections.map((id, i) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-3 py-4 font-display text-3xl font-medium tracking-tight text-ink"
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  {labels[id]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
