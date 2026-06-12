import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { XIcon } from '@phosphor-icons/react';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/85 px-4 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={onClose}
    >
      <motion.img
        src={src}
        alt={alt}
        className="max-h-[88vh] max-w-full rounded-2xl object-contain shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-line bg-surface/90 text-muted backdrop-blur-sm transition-colors duration-150 hover:text-ink"
      >
        <XIcon size={18} aria-hidden />
      </button>
    </motion.div>
  );
}

export function LightboxPortal({
  open,
  src,
  alt,
  onClose,
}: {
  open: boolean;
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && <Lightbox key="lb" src={src} alt={alt} onClose={onClose} />}
    </AnimatePresence>
  );
}
