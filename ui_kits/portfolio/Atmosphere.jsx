/* Atmosphere — drifting blurred blobs, faint grid, smooth cursor glow.
   Renders behind all content (fixed, z-index -1). */
function Atmosphere() {
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth <= 768) return;

    const glow = document.createElement('div');
    glow.style.cssText =
      'position:fixed;pointer-events:none;z-index:9998;width:520px;height:520px;border-radius:50%;' +
      'background:radial-gradient(circle, rgba(108,99,255,0.09) 0%, rgba(247,37,133,0.04) 45%, transparent 70%);' +
      'transform:translate(-50%,-50%);left:-999px;top:-999px;will-change:left,top;';
    document.body.appendChild(glow);

    let lastX = -999, lastY = -999, raf = null;
    const move = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          glow.style.left = lastX + 'px';
          glow.style.top = lastY + 'px';
          raf = null;
        });
      }
    };
    document.addEventListener('mousemove', move);
    return () => {
      document.removeEventListener('mousemove', move);
      if (raf) cancelAnimationFrame(raf);
      glow.remove();
    };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
      <span className="da-blob" style={{ width: 650, height: 650, background: 'var(--accent)', top: -250, left: -250 }} />
      <span className="da-blob" style={{ width: 550, height: 550, background: 'var(--accent-2)', bottom: -120, right: -120, animationDelay: '-3s' }} />
      <span className="da-blob" style={{ width: 450, height: 450, background: 'var(--accent-3)', top: '45%', left: '45%', animationDelay: '-6s' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--grid-overlay)', backgroundSize: 'var(--grid-size)' }} />
    </div>
  );
}

window.Atmosphere = Atmosphere;
