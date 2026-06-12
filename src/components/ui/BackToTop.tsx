import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpIcon } from '@phosphor-icons/react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.45);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick() {
    const hero = document.getElementById('top');
    if (hero) hero.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth' });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full border border-line bg-surface/80 text-muted backdrop-blur-sm transition-colors duration-150 hover:border-accent/40 hover:text-ink"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          <ArrowUpIcon size={17} aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
