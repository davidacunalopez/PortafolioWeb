import React from 'react';

export interface StatBlockProps {
  /** Big number, e.g. "+10" or "100%". */
  value: React.ReactNode;
  /** Caption beneath, e.g. "Proyectos". */
  label: React.ReactNode;
}

/** A single hero stat: Space Grotesk numeral over a muted label. */
export function StatBlock(props: StatBlockProps): JSX.Element;
/** Thin vertical divider for between stats. */
export function StatDivider(): JSX.Element;
