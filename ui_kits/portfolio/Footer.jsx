/* Footer — wordmark, credit, back-to-top. */
function Footer({ onNav }) {
  const back = { fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' };
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>DA<span style={{ color: 'var(--accent)' }}>.</span></span>
        <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>© 2026 David Acuña. Diseñado y desarrollado con ❤️</p>
        <button style={back} onClick={() => onNav('inicio')}>↑ Volver arriba</button>
      </div>
    </footer>
  );
}

window.Footer = Footer;
