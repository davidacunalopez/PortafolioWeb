import React from 'react';

export interface TagProps {
  children: React.ReactNode;
  /** @default 'md' */
  size?: 'sm' | 'md';
}

/** Pill chip for tech / skill labels; hovers to the morado accent. */
export function Tag(props: TagProps): JSX.Element;
