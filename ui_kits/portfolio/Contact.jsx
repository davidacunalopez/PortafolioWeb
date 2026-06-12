/* Contacto — centered glass form with working success state + social links. */
function Contact() {
  const { SectionLabel, GradientText, Input, Textarea, Button } = window.AcuAPortfolioDesignSystem_96f72c;
  const [sent, setSent] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); e.target.reset(); }, 3000);
  };

  const social = { color: 'var(--text-muted)', fontSize: 'var(--fs-sm)', fontWeight: 500, textDecoration: 'none' };

  return (
    <section id="contacto" style={{ padding: '7rem 2rem' }}>
      <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <span className="da-blob" style={{ width: 400, height: 400, background: 'var(--accent)', top: -100, right: -100, opacity: 0.1 }} />
        <SectionLabel>Contacto</SectionLabel>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700, margin: '1rem 0 1rem' }}>
          ¿Tienes un <GradientText>proyecto en mente?</GradientText>
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
          Disponible para proyectos freelance, colaboraciones y oportunidades de trabajo. ¡Hablemos!
        </p>
        <form onSubmit={submit} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', textAlign: 'left' }}>
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 600 ? '1fr 1fr' : '1fr', gap: '1rem' }}>
            <Input label="Nombre" id="nombre" placeholder="Tu nombre" required />
            <Input label="Email" id="email" type="email" placeholder="tu@email.com" required />
          </div>
          <Textarea label="Mensaje" id="mensaje" rows={5} placeholder="Cuéntame sobre tu proyecto..." required />
          <Button variant="primary" full type="submit">
            {sent ? '✓ Mensaje enviado' : 'Enviar mensaje →'}
          </Button>
        </form>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <a href="https://github.com/davidacunalopez" target="_blank" style={social}>GitHub</a>
          <span style={{ color: 'var(--border-strong)' }}>·</span>
          <a href="#" style={social}>LinkedIn</a>
          <span style={{ color: 'var(--border-strong)' }}>·</span>
          <a href="#" style={social}>Email</a>
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
