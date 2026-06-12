import React from 'react';

/** StatBlock — a single hero stat (big Space Grotesk number + muted label).
 *  Render several inside a glass strip, separated by <StatDivider/>. */
export function StatBlock({ value, label, ...rest }) {
  const wrap = { textAlign: 'center' };
  const num = {
    display: 'block',
    fontFamily: 'var(--font-display)',
    fontSize: '1.6rem',
    fontWeight: 'var(--fw-bold)',
    color: 'var(--text-strong)',
    lineHeight: 1.1,
  };
  const lab = { fontFamily: 'var(--font-body)', fontSize: 'var(--fs-label)', color: 'var(--text-muted)' };
  return (
    <div style={wrap} {...rest}>
      <span style={num}>{value}</span>
      <span style={lab}>{label}</span>
    </div>
  );
}

/** Thin vertical rule between StatBlocks. */
export function StatDivider() {
  return <div style={{ width: 1, height: 40, background: 'var(--border)' }} />;
}
