/* Hero — intro, available badge, gradient title, CTAs, stat strip, ringed portrait.
   Load animations stagger in on mount; text parallaxes slightly faster than image. */
function Hero({ onNav }) {
  const { Badge, Button, StatBlock, StatDivider, Avatar, GradientText } = window.AcuAPortfolioDesignSystem_96f72c;
  const [loaded, setLoaded] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const avatarTilt = window.use3DTilt(8);

  /* Trigger load animations shortly after mount */
  React.useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* Parallax: listen on the custom scroll container */
  React.useEffect(() => {
    const el = document.querySelector('.da-scroll');
    if (!el) return;
    const onScroll = () => setScrollY(el.scrollTop);
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  /* Returns styles for a staggered fade+slide-up load animation */
  const appear = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
  });

  const wrap = {
    minHeight: '88vh', display: 'flex', alignItems: 'center', gap: '4rem',
    maxWidth: 'var(--container)', margin: '0 auto', padding: '7rem 2rem 4rem',
    flexWrap: 'wrap',
  };
  const chip = {
    position: 'absolute', display: 'flex', alignItems: 'center', gap: '0.6rem',
    background: 'var(--surface-float)', backdropFilter: 'blur(20px)',
    border: '1px solid var(--border)', borderRadius: 12, padding: '0.8rem 1.2rem',
    fontSize: 'var(--fs-xs)', fontWeight: 600, zIndex: 10, boxShadow: 'var(--shadow-md)',
  };

  return (
    <section id="inicio" style={wrap}>
      {/* Content — parallaxes upward slightly faster than the portrait */}
      <div style={{ flex: 1, minWidth: 320, maxWidth: 580, transform: `translateY(${scrollY * 0.08}px)` }}>
        <div style={appear('0ms')}>
          <Badge tone="info" dot>Disponible para trabajar</Badge>
        </div>
        <h1 style={{ ...appear('150ms'), fontFamily: 'var(--font-display)', fontSize: 'var(--fs-hero)', fontWeight: 800, lineHeight: 'var(--lh-tight)', margin: '1.5rem 0 1.2rem' }}>
          Hola, soy<br /><GradientText>David Acuña</GradientText>
        </h1>
        <p style={{ ...appear('300ms'), fontSize: 'var(--fs-lead)', color: 'var(--text-muted)', lineHeight: 'var(--lh-relaxed)', maxWidth: 460, marginBottom: '2rem' }}>
          Desarrollador full-stack e ingeniero de IA. Construyo agentes en producción y
          experiencias digitales modernas, funcionales y bien diseñadas.
        </p>
        <div style={{ ...appear('450ms'), display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <Button variant="primary" onClick={() => onNav('proyectos')}>Ver proyectos</Button>
          <Button variant="ghost" onClick={() => onNav('contacto')}>Hablemos →</Button>
        </div>
        <div style={{ ...appear('600ms'), display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.2rem 1.5rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', width: 'fit-content' }}>
          <StatBlock value="+10" label="Proyectos" />
          <StatDivider />
          <StatBlock value="3+" label="Años exp." />
          <StatDivider />
          <StatBlock value="100%" label="Dedicación" />
        </div>
      </div>

      {/* Portrait — parallaxes upward slightly slower, fades in independently */}
      <div style={{ flex: 1, minWidth: 300, display: 'flex', justifyContent: 'center', position: 'relative', transform: `translateY(${scrollY * 0.04}px)` }}>
        <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 200ms' }}>
          <div
            ref={avatarTilt.ref}
            {...avatarTilt.tiltHandlers}
            style={{ position: 'relative', display: 'inline-block', willChange: 'transform' }}
          >
            <div style={avatarTilt.shineStyle} />
            <Avatar src="../../assets/perfil.jpg" alt="David Acuña" size={340} radius="30px" ring />
            <div style={{ ...chip, bottom: 30, left: -40, animation: 'da-float 3s ease-in-out infinite alternate' }}>
              <span style={{ fontSize: '1.2rem' }}>⚡</span> Agentes de IA
            </div>
            <div style={{ ...chip, top: 30, right: -40, animation: 'da-float 3s ease-in-out -1.5s infinite alternate' }}>
              <span style={{ fontSize: '1.2rem' }}>🛠️</span> Full-stack
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
