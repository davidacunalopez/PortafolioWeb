/* Floating pill nav — glass bar centered at top, gains shadow on scroll.
   Renders a fixed gradient progress bar at the very top of the viewport. */
function Nav({ onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const el = document.querySelector('.da-scroll');
    const target = el || window;
    const onScroll = () => {
      const top = el ? el.scrollTop : window.scrollY;
      setScrolled(top > 50);
      if (el) {
        const max = el.scrollHeight - el.clientHeight;
        setProgress(max > 0 ? (top / max) * 100 : 0);
      }
    };
    target.addEventListener('scroll', onScroll, { passive: true });
    return () => target.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Sobre mí', 'sobre-mi'], ['Habilidades', 'habilidades'],
    ['Proyectos', 'proyectos'], ['Contacto', 'contacto'],
  ];

  const nav = {
    position: 'sticky', top: '1.5rem', zIndex: 1000,
    width: 'calc(100% - 4rem)', maxWidth: 1100, margin: '1.5rem auto 0',
    display: 'flex', alignItems: 'center', gap: '2rem',
    background: scrolled ? 'rgba(8,11,18,0.92)' : 'var(--surface-nav)',
    backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid var(--border)', borderRadius: 'var(--radius-pill)',
    padding: '0.9rem 2rem', boxShadow: scrolled ? 'var(--shadow-nav)' : 'none',
    transition: 'var(--transition)', boxSizing: 'border-box',
  };
  const logo = { fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginRight: 'auto', cursor: 'pointer' };
  const linkStyle = { fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', cursor: 'pointer', transition: 'var(--transition)', background: 'none', border: 'none', fontFamily: 'inherit' };

  return (
    <>
      <div id="da-progress" style={{ width: `${progress}%`, opacity: progress > 1 ? 1 : 0 }} />
      <nav style={nav}>
        <span style={logo} onClick={() => onNav('inicio')}>DA<span style={{ color: 'var(--accent)' }}>.</span></span>
        <ul style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map(([label, id]) => (
            <li key={id}>
              <button style={linkStyle} onClick={() => onNav(id)}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}>{label}</button>
            </li>
          ))}
        </ul>
        <button onClick={() => onNav('contacto')} style={{
          display: window.innerWidth > 768 ? 'inline-flex' : 'none',
          padding: '0.55rem 1.4rem', background: 'var(--gradient)', color: '#fff',
          border: 'none', borderRadius: 'var(--radius-pill)', fontWeight: 600,
          fontSize: 'var(--fs-xs)', cursor: 'pointer',
        }}>Contáctame</button>
      </nav>
    </>
  );
}

window.Nav = Nav;
