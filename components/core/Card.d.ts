import React from 'react';

/**
 * Translucent glass surface — the base container for bento tiles, project and
 * feature cards.
 * @startingPoint section="Core" subtitle="Glass card surface (+ accent wash)" viewport="700x220"
 */
export interface CardProps {
  children: React.ReactNode;
  /** Wash with the soft gradient tint (the "accent" bento tile). @default false */
  accent?: boolean;
  /** Lift + glow on hover. @default true */
  hover?: boolean;
  /** CSS padding. @default '2rem' */
  padding?: string;
  style?: React.CSSProperties;
}

/**
 * Translucent glass surface — the base container for bento tiles, project and
 * feature cards.
 */
export function Card(props: CardProps): JSX.Element;
