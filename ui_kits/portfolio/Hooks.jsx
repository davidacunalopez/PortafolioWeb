/* Shared animation hooks — must be loaded before all section components. */

/* Fade + slide up when element enters the viewport.
   Returns { ref, visible, style } — attach ref to the element, spread style onto it. */
function useScrollReveal(delay) {
  delay = delay || '0ms';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(reduced);

  React.useEffect(() => {
    if (reduced) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.75s ease ${delay}, transform 0.75s ease ${delay}`,
  };

  return { ref, visible, style };
}

/* 3-D perspective tilt on hover with a moving light-sheen effect.
   Returns { ref, tiltHandlers, shineStyle } — spread tiltHandlers as event props,
   render a <div style={shineStyle} /> as first child of the tilt wrapper. */
function use3DTilt(intensity) {
  intensity = intensity || 12;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ref = React.useRef(null);
  const [shine, setShine] = React.useState({ x: 50, y: 50, opacity: 0 });

  const onMouseMove = React.useCallback((e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (x - 0.5) * intensity;
    const ry = (y - 0.5) * intensity;
    ref.current.style.transform =
      `perspective(900px) rotateY(${rx}deg) rotateX(${-ry}deg) scale3d(1.03,1.03,1.03)`;
    ref.current.style.transition = 'transform 0.1s ease';
    setShine({ x: x * 100, y: y * 100, opacity: 0.13 });
  }, [intensity]);

  const onMouseLeave = React.useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform =
      'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
    ref.current.style.transition = 'transform 0.6s ease';
    setShine(s => ({ ...s, opacity: 0 }));
  }, []);

  const shineStyle = {
    position: 'absolute', inset: 0, pointerEvents: 'none', borderRadius: 'inherit', zIndex: 10,
    background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,${shine.opacity}) 0%, transparent 60%)`,
    transition: 'background 0.12s ease',
  };

  return { ref, tiltHandlers: { onMouseMove, onMouseLeave }, shineStyle };
}

window.useScrollReveal = useScrollReveal;
window.use3DTilt = use3DTilt;
