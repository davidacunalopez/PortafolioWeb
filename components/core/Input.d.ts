import React from 'react';

export interface InputProps {
  /** Uppercase field label. */
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

/** Glass text field with uppercase label and morado focus ring. */
export function Input(props: InputProps): JSX.Element;
