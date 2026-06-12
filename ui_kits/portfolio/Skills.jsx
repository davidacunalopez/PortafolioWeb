/* Habilidades — bento grid with scroll-reveal and skill bars that animate on entry. */
function Skills() {
  const { SectionLabel, GradientText, Card, SkillBar } = window.AcuAPortfolioDesignSystem_96f72c;
  const { ref: sectionRef, visible } = window.useScrollReveal();
  const wide = window.innerWidth > 768;

  const labelStyle = { fontSize: 'var(--fs-label)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '1.2rem' };
  const chips = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' };
  const chip = { background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '0.6rem 0.8rem', fontSize: 'var(--fs-xs)', fontWeight: 500, color: 'var(--text-muted)', textAlign: 'center' };

  /* Returns staggered fade+slide style driven by section visibility */
  const appear = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}, transform 0.65s ease ${delay}`,
  });

  const tile = (title, items, delay) => (
    <div style={appear(delay)}>
      <Card style={{ height: '100%' }}>
        <div style={labelStyle}>{title}</div>
        <div style={chips}>{items.map((item) => <div key={item} style={chip}>{item}</div>)}</div>
      </Card>
    </div>
  );

  return (
    <section id="habilidades" ref={sectionRef} style={{ padding: '7rem 2rem', maxWidth: 'var(--container)', margin: '0 auto' }}>
      <div style={appear('0ms')}><SectionLabel>Habilidades</SectionLabel></div>
      <h2 style={{ ...appear('100ms'), fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', fontWeight: 700, margin: '1rem 0 2rem' }}>
        Stack <GradientText>tecnológico</GradientText>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: wide ? 'repeat(3, 1fr)' : '1fr', gap: '1.2rem' }}>
        {/* Frontend — spans 2 cols; SkillBars animate from 0 → value when section enters view */}
        <div style={{ ...appear('200ms'), gridColumn: wide ? 'span 2' : 'auto' }}>
          <Card>
            <div style={labelStyle}>Frontend</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <SkillBar label="React / Next.js" value={visible ? 90 : 0} />
              <SkillBar label="TypeScript"       value={visible ? 85 : 0} />
              <SkillBar label="HTML / CSS"       value={visible ? 95 : 0} />
            </div>
          </Card>
        </div>
        {tile('IA & Agentes', ['OpenAI', 'n8n', 'Odoo', 'LangChain'], '300ms')}
        {tile('Backend',      ['Node.js', 'Python', 'Supabase', 'REST API'], '370ms')}
        {tile('Herramientas', ['Git', 'Docker', 'VS Code', 'Figma'], '440ms')}
        <div style={appear('510ms')}>
          <Card accent style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <GradientText as="div" style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 800, lineHeight: 1 }}>
              100<span style={{ fontSize: '2rem' }}>%</span>
            </GradientText>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--fs-sm)', marginTop: '0.5rem' }}>Compromiso con cada proyecto que tomo</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

window.Skills = Skills;
