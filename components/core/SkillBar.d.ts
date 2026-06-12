import React from 'react';

export interface SkillBarProps {
  /** Skill name, e.g. "JavaScript". */
  label: string;
  /** Proficiency 0–100; the fill animates to this on mount. */
  value?: number;
}

/** Labelled gradient progress bar that fills on mount. */
export function SkillBar(props: SkillBarProps): JSX.Element;
