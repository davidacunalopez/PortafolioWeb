import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import type { EventItem } from '../i18n/content';
import { isMax } from '../config/effects';
import { useMediaQuery } from '../lib/useMediaQuery';
import { Chip } from './ui/Chip';
import { LightboxPortal } from './ui/Lightbox';
import { Reveal } from './ui/Reveal';
import { SplitText } from './ui/SplitText';
import charla1 from '../assets/photos/charla-1.webp';
import charla2 from '../assets/photos/charla-2.webp';
import dev3pack from '../assets/photos/evento-dev3pack.webp';
import piazzaDao from '../assets/photos/evento-piazza-dao.webp';
import ticoblockchain from '../assets/photos/evento-ticoblockchain.webp';
import teamWork from '../assets/photos/team-work.webp';

/* Mismo orden que t.events.items en content.ts */
const photos = [charla1, charla2, dev3pack, piazzaDao, ticoblockchain, teamWork];

function EventCard({
  item,
  photo,
  onClick,
}: {
  item: EventItem;
  photo: string;
  onClick: () => void;
}) {
  return (
    <figure
      className="group w-[78vw] max-w-[440px] shrink-0 snap-center cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-200 hover:border-accent/30"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={photo}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <figcaption className="p-5 md:p-6">
        <Chip>{item.type}</Chip>
        <h3 className="mt-3 font-display text-lg font-medium tracking-tight md:text-xl">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{item.place}</p>
      </figcaption>
    </figure>
  );
}

export function Events() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const desktopFine = useMediaQuery('(min-width: 768px) and (hover: hover) and (pointer: fine)');
  const horizontal = isMax && !reduceMotion && desktopFine;

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!horizontal) return;
    function measure() {
      const track = trackRef.current;
      if (!track) return;
      setShift(Math.max(0, track.scrollWidth - window.innerWidth));
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [horizontal]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -shift]);

  const openLightbox = (i: number) =>
    setLightbox({ src: photos[i], alt: t.events.items[i].title });

  if (horizontal) {
    /* El scroll vertical empuja la cinta horizontalmente (sticky de 100vh + shift). */
    return (
      <>
        <section
          id="events"
          ref={sectionRef}
          style={{ height: `calc(100vh + ${shift}px)` }}
        >
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
            <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                <SplitText text={t.events.heading} />
              </h2>
              <Reveal delay={0.08}>
                <p className="mt-4 max-w-[55ch] text-lg leading-relaxed text-muted">
                  {t.events.intro}
                </p>
              </Reveal>
            </div>
            <motion.div
              ref={trackRef}
              className="mt-10 flex w-max gap-6 pl-5 pr-5 md:pl-8 md:pr-8"
              style={{ x }}
            >
              {t.events.items.map((item, i) => (
                <EventCard key={item.title} item={item} photo={photos[i]} onClick={() => openLightbox(i)} />
              ))}
            </motion.div>
          </div>
        </section>
        <LightboxPortal
          open={!!lightbox}
          src={lightbox?.src ?? ''}
          alt={lightbox?.alt ?? ''}
          onClose={() => setLightbox(null)}
        />
      </>
    );
  }

  return (
    <>
      <section id="events" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 pt-24 md:px-8 md:pt-32">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            <SplitText text={t.events.heading} />
          </h2>
          <Reveal delay={0.08}>
            <p className="mt-4 max-w-[55ch] text-lg leading-relaxed text-muted">{t.events.intro}</p>
          </Reveal>
        </div>
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-24 md:px-8 md:pb-32">
          {t.events.items.map((item, i) => (
            <EventCard key={item.title} item={item} photo={photos[i]} onClick={() => openLightbox(i)} />
          ))}
        </div>
      </section>
      <LightboxPortal
        open={!!lightbox}
        src={lightbox?.src ?? ''}
        alt={lightbox?.alt ?? ''}
        onClose={() => setLightbox(null)}
      />
    </>
  );
}
