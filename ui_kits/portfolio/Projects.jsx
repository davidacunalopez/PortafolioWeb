/* Proyectos — 3-D tilt cards with shine overlay, scroll-reveal with stagger. */
function Projects() {
  const { SectionLabel, GradientText, Tag, Button } = window.AcuAPortfolioDesignSystem_96f72c;
  const { ref: sectionRef, visible } = window.useScrollReveal();

  const data = [
    { img: '../../assets/photo-1792.jpg', tags: ['Odoo', 'OpenAI'], title: 'Agentes IA en Odoo', desc: 'Automatización de procesos de negocio con agentes en producción integrados a Odoo.' },
    { img: '../../assets/photo-1411.jpg', tags: ['React', 'Supabase'], title: 'Plataforma full-stack', desc: 'Aplicación web moderna con autenticación, datos en tiempo real y diseño responsivo.' },
    { img: null, tags: ['n8n', 'API'], title: 'Pipeline de automatización', desc: 'Orquestación de flujos con n8n e integraciones a APIs externas y modelos de IA.' },
  ];

  function ProjectCard({ p, index }) {
    const [hover, setHover] = React.useState(false);
    const tilt = window.use3DTilt(10);

    const cardReveal = {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(32px)',
      transition: `opacity 0.65s ease ${index * 130}ms, transform 0.65s ease ${index * 130}ms`,
    };

    return (
      <div style={cardReveal}>
        <article
          ref={tilt.ref}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={(e) => { setHover(false); tilt.tiltHandlers.onMouseLeave(e); }}
          onMouseMove={tilt.tiltHandlers.onMouseMove}
          style={{
            position: 'relative', background: 'var(--surface)',
            border: `1px solid ${hover ? 'var(--accent-border)' : 'var(--border)'}`,
            borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            boxShadow: hover ? 'var(--shadow-xl)' : 'none',
            willChange: 'transform',
          }}
        >
          <div style={tilt.shineStyle} />
          <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: p.img ? 'transparent' : 'var(--gradient-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {p.img
              ? <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.08)' : 'none', transition: 'var(--transition-slow)' }} />
              : <span style={{ fontSize: '3.5rem' }}>🚀</span>}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,11,18,0.7)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hover ? 1 : 0, transition: 'var(--transition)' }}>
              <Button variant="primary" size="sm">Ver proyecto →</Button>
            </div>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.8rem' }}>
              {p.tags.map((t) => <Tag key={t} size="sm">{t}</Tag>)}
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)', fontWeight: 600, marginBottom: '0.5rem' }}>{p.title}</h3>
            <p style={{ fontSize: 'var(--fs-xs)', color: 'var(--text-muted)', lineHeight: 'var(--lh-body)' }}>{p.desc}</p>
          </div>
        </article>
      </div>
    );
  }

  return (
    <section id="proyectos" ref={sectionRef} style={{ padding: '7rem 2rem', maxWidth: 'var(--container)', margin: '0 auto' }}>
      <SectionLabel>Proyectos</SectionLabel>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700, margin: '1rem 0 2rem',
        opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.65s ease, transform 0.65s ease',
      }}>
        Trabajo <GradientText>reciente</GradientText>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr', gap: '1.5rem' }}>
        {data.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
      </div>
    </section>
  );
}

window.Projects = Projects;
