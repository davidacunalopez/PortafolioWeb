import React from 'react';

/**
 * Pill button with the brand gradient (primary), outline (ghost) or glass (secondary).
 * @startingPoint section="Core" subtitle="Gradient pill button + variants" viewport="700x140"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'ghost' | 'secondary';
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Stretch to full container width. @default false */
  full?: boolean;
  disabled?: boolean;
  /** Render as an anchor when set. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Pill button with the brand gradient (primary), outline (ghost) or glass (secondary).
 */
export function Button(props: ButtonProps): JSX.Element;
