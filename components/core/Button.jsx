import React from 'react';

/**
 * Button — the brand's primary action control.
 * Pill-shaped. `primary` carries the signature gradient fill + morado glow;
 * `ghost` is a hairline outline; `secondary` is a soft glass fill.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  href,
  onClick,
  type = 'button',
  ...rest
}) {
  const pad = size === 'sm' ? '0.5rem 1.2rem' : '0.8rem 1.8rem';
  const fontSize = size === 'sm' ? 'var(--fs-xs)' : 'var(--fs-sm)';

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: pad,
    width: full ? '100%' : 'auto',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    fontSize,
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    border: 'none',
    textDecoration: 'none',
    transition: 'var(--transition)',
    boxSizing: 'border-box',
  };

  const variants = {
    primary: {
      background: 'var(--gradient)',
      color: '#fff',
      boxShadow: 'var(--glow-accent)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text)',
      border: '1px solid var(--border)',
    },
    secondary: {
      background: 'var(--surface-hover)',
      color: 'var(--text)',
      border: '1px solid var(--border)',
    },
  };

  const style = { ...base, ...variants[variant] };

  const onEnter = (e) => {
    if (disabled) return;
    if (variant === 'primary') {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--glow-accent-strong)';
    } else {
      e.currentTarget.style.background = 'var(--surface-strong)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    }
  };
  const onLeave = (e) => {
    e.currentTarget.style.transform = '';
    e.currentTarget.style.boxShadow = variant === 'primary' ? 'var(--glow-accent)' : '';
    if (variant !== 'primary') {
      e.currentTarget.style.background = variants[variant].background;
      e.currentTarget.style.borderColor = 'var(--border)';
    }
  };

  const Tag = href ? 'a' : 'button';
  const tagProps = href ? { href } : { type, disabled };

  return (
    <Tag style={style} onClick={onClick} onMouseEnter={onEnter} onMouseLeave={onLeave} {...tagProps} {...rest}>
      {children}
    </Tag>
  );
}
