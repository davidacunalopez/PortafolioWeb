import React from 'react';

/** SectionLabel — the uppercase, pill-bordered eyebrow that opens every
 *  section ("SOBRE MÍ", "PROYECTOS"). */
export function SectionLabel({ children, ...rest }) {
  const style = {
    display: 'inline-block',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-label)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    border: '1px solid var(--accent-border)',
    padding: '0.3rem 0.9rem',
    borderRadius: 'var(--radius-pill)',
    background: 'var(--accent-soft)',
  };
  return (
    <span style={style} {...rest}>
      {children}
    </span>
  );
}
