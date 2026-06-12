import React from 'react';

export interface GradientTextProps {
  children: React.ReactNode;
  /** Element to render. @default 'span' */
  as?: keyof JSX.IntrinsicElements;
}

/** Fills its text with the brand's tri-stop gradient. */
export function GradientText(props: GradientTextProps): JSX.Element;
