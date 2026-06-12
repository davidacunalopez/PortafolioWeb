import React from 'react';

/** Input — glass text field with an uppercase label and morado focus ring. */
export function Input({ label, id, type = 'text', placeholder, value, onChange, required, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const wrap = { display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' };
  const lab = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-semibold)',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  };
  const field = {
    background: focus ? 'rgba(108,99,255,0.05)' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${focus ? 'var(--accent)' : 'var(--border)'}`,
    borderRadius: 'var(--radius)',
    padding: '0.9rem 1.2rem',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-sm)',
    outline: 'none',
    boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
    transition: 'var(--transition)',
    boxSizing: 'border-box',
  };
  return (
    <div style={wrap}>
      {label && <label htmlFor={id} style={lab}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={field}
        {...rest}
      />
    </div>
  );
}
