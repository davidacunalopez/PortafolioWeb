import React from 'react';

/**
 * Badge — small status pill with a soft tinted background. Use `tone` to pick
 * the accent. The `dot` variant adds a pulsing status dot (e.g. "available").
 */
export function Badge({ children, tone = 'accent', dot = false, ...rest }) {
  const tones = {
    accent: { c: 'var(--accent)', bg: 'var(--accent-soft)', b: 'var(--accent-border)' },
    info: { c: 'var(--accent-3)', bg: 'var(--accent-3-soft)', b: 'var(--accent-3-border)' },
    pink: { c: 'var(--accent-2)', bg: 'var(--accent-2-soft)', b: 'rgba(247,37,133,0.25)' },
  };
  const t = tones[tone] || tones.accent;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.4rem 1rem',
    background: t.bg,
    border: `1px solid ${t.b}`,
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-medium)',
    color: t.c,
    lineHeight: 1,
  };
  const dotStyle = {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: t.c,
    animation: 'da-pulse-dot 2s ease infinite',
  };
  return (
    <span style={style} {...rest}>
      {dot && <span style={dotStyle} />}
      {children}
      {dot && (
        <style>{`@keyframes da-pulse-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}`}</style>
      )}
    </span>
  );
}
