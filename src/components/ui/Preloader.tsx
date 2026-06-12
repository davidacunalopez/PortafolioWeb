import { useEffect } from 'react';
import { motion } from 'motion/react';

export function Preloader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex w-40 flex-col items-start gap-3">
        <div className="overflow-hidden">
          <motion.p
            className="font-display text-xl font-semibold tracking-tight text-ink"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            David Acuña
          </motion.p>
        </div>
        <motion.div
          className="h-px w-full bg-accent/50"
          style={{ transformOrigin: 'left' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        />
      </div>
    </motion.div>
  );
}
