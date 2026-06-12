import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';
import { cancelFrame, frame, useReducedMotion } from 'motion/react';

/* Lenis corre dentro del frame loop de Motion para que el smooth scroll
   y las animaciones ligadas al scroll compartan el mismo tick. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }
    frame.update(update, true);
    return () => cancelFrame(update);
  }, [reduceMotion]);

  if (reduceMotion) return <>{children}</>;

  return (
    <ReactLenis root options={{ autoRaf: false, anchors: true, lerp: 0.12 }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
