import React from 'react';

/**
 * Tag — a pill chip for tech/skill labels. Border + muted text by default;
 * shifts to the morado accent on hover.
 */
export function Tag({ children, size = 'md', ...rest }) {
  const style = {
    display: 'inline-block',
    padding: size === 'sm' ? '0.2rem 0.6rem' : '0.35rem 0.9rem',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-body)',
    fontSize: size === 'sm' ? 'var(--fs-2xs)' : 'var(--fs-xs)',
    color: 'var(--text-muted)',
    transition: 'var(--transition)',
    cursor: 'default',
  };
  const onEnter = (e) => {
    e.currentTarget.style.borderColor = 'var(--accent)';
    e.currentTarget.style.color = 'var(--accent)';
  };
  const onLeave = (e) => {
    e.currentTarget.style.borderColor = 'var(--border)';
    e.currentTarget.style.color = 'var(--text-muted)';
  };
  return (
    <span style={style} onMouseEnter={onEnter} onMouseLeave={onLeave} {...rest}>
      {children}
    </span>
  );
}
