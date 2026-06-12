import React from 'react';

/** Card — the brand's translucent glass surface. Optional `accent` washes it
 *  with a soft gradient tint; `hover` enables the lift + glow on pointer. */
export function Card({ children, accent = false, hover = true, padding = '2rem', style: extra, ...rest }) {
  const base = {
    background: accent ? 'var(--gradient-soft)' : 'var(--surface)',
    border: `1px solid ${accent ? 'var(--accent-border)' : 'var(--border)'}`,
    borderRadius: 'var(--radius-lg)',
    padding,
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition)',
    boxSizing: 'border-box',
    ...extra,
  };
  const onEnter = (e) => {
    if (!hover) return;
    e.currentTarget.style.transform = 'var(--lift)';
    e.currentTarget.style.borderColor = 'var(--accent-border)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };
  const onLeave = (e) => {
    if (!hover) return;
    e.currentTarget.style.transform = '';
    e.currentTarget.style.borderColor = accent ? 'var(--accent-border)' : 'var(--border)';
    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
  };
  return (
    <div style={base} onMouseEnter={onEnter} onMouseLeave={onLeave} {...rest}>
      {children}
    </div>
  );
}
