import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  /** Accent color. @default 'accent' */
  tone?: 'accent' | 'info' | 'pink';
  /** Show a pulsing status dot. @default false */
  dot?: boolean;
}

/** Soft tinted status pill; `dot` adds a pulsing availability indicator. */
export function Badge(props: BadgeProps): JSX.Element;
