import React from 'react';

/** SkillBar — labelled progress bar with a gradient fill that animates to
 *  `value`% on mount. Used in the "Frontend" bento tile. */
export function SkillBar({ label, value = 0, ...rest }) {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const t = setTimeout(() => setW(value), 80);
    return () => clearTimeout(t);
  }, [value]);
  const info = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.4rem',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-xs)',
    color: 'var(--text-muted)',
  };
  const track = { background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-pill)', height: 6, overflow: 'hidden' };
  const fill = {
    height: '100%',
    width: `${w}%`,
    borderRadius: 'var(--radius-pill)',
    background: 'var(--gradient)',
    transition: 'width 1.2s var(--ease)',
  };
  return (
    <div {...rest}>
      <div style={info}><span>{label}</span><span>{value}%</span></div>
      <div style={track}><div style={fill} /></div>
    </div>
  );
}
