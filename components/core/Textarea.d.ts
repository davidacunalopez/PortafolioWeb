import React from 'react';

export interface TextareaProps {
  label?: string;
  id?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

/** Multi-line glass field matching Input. */
export function Textarea(props: TextareaProps): JSX.Element;
