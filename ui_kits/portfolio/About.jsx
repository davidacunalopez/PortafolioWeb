/* Sobre mí — overlapping photo stack with 3-D tilt + bio with scroll-reveal. */
function About({ onNav }) {
  const { SectionLabel, GradientText, Tag, Button } = window.AcuAPortfolioDesignSystem_96f72c;
  const { ref: sectionRef, visible } = window.useScrollReveal();
  const photoTilt = window.use3DTilt(5);

  const tags = ['React', 'Node.js', 'TypeScript', 'Python', 'Odoo', 'n8n', 'Supabase', 'OpenAI'];

  /* Returns staggered fade+slide style driven by section visibility */
  const appear = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.75s ease ${delay}, transform 0.75s ease ${delay}`,
  });

  const photo = {
    position: 'absolute', borderRadius: 'var(--radius-md)', overflow: 'hidden',
    border: '2px solid var(--border)', boxShadow: 'var(--shadow-sm)',
  };

  return (
    <section id="sobre-mi" style={{ padding: '7rem 2rem', maxWidth: 'var(--container)', margin: '0 auto' }}>
      <SectionLabel>Sobre mí</SectionLabel>
      <div
        ref={sectionRef}
        style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1.2fr' : '1fr', gap: '5rem', alignItems: 'center', marginTop: '2rem' }}
      >
        {window.innerWidth > 1024 && (
          <div
            ref={photoTilt.ref}
            {...photoTilt.tiltHandlers}
            style={{ position: 'relative', height: 450, willChange: 'transform' }}
          >
            <div style={{ ...photo, width: 250, height: 320, top: 0, left: 0, zIndex: 3 }}>
              <img src="../../assets/photo-1251.jpg" alt="David" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ ...photo, width: 200, height: 250, bottom: 0, right: 0, zIndex: 2 }}>
              <img src="../../assets/photo-1344.jpg" alt="David" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ ...photo, width: 160, height: 200, top: 60, right: 20, zIndex: 1, opacity: 0.7 }}>
              <img src="../../assets/photo-1411.jpg" alt="David" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        )}

        <div>
          <h2 style={{ ...appear('0ms'), fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700, lineHeight: 'var(--lh-heading)', marginBottom: '1.5rem' }}>
            Creando con<br /><GradientText>pasión y propósito</GradientText>
          </h2>
          <p style={{ ...appear('150ms'), color: 'var(--text-muted)', lineHeight: 'var(--lh-relaxed)', marginBottom: '1rem' }}>
            Ingeniero en Computación (TEC Costa Rica) especializado en agentes de IA en
            producción y desarrollo full-stack. Me apasiona la intersección entre tecnología
            y automatización de procesos.
          </p>
          <p style={{ ...appear('280ms'), color: 'var(--text-muted)', lineHeight: 'var(--lh-relaxed)', marginBottom: '1rem' }}>
            Trabajo con el ecosistema moderno — React, Node.js, Python, Odoo, n8n y OpenAI —
            para entregar soluciones rápidas, escalables y bien diseñadas.
          </p>
          <div style={{ ...appear('400ms'), display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
            {tags.map((t, i) => (
              <div key={t} style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'scale(1)' : 'scale(0.8)',
                transition: `opacity 0.4s ease ${480 + i * 55}ms, transform 0.4s ease ${480 + i * 55}ms`,
              }}>
                <Tag>{t}</Tag>
              </div>
            ))}
          </div>
          <div style={{ ...appear('600ms'), marginTop: '2rem' }}>
            <Button variant="primary" onClick={() => onNav('contacto')}>Trabajemos juntos →</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

window.About = About;
