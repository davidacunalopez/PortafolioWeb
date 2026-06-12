import React from 'react';

export interface AvatarProps {
  src: string;
  alt?: string;
  /** Pixel size. @default 64 */
  size?: number;
  /** Corner radius (CSS). @default 'var(--radius-md)' */
  radius?: string;
  /** Wrap in the rotating gradient ring. @default false */
  ring?: boolean;
}

/** Rounded photo frame; `ring` adds the hero's rotating gradient ring. */
export function Avatar(props: AvatarProps): JSX.Element;
