import React from 'react';

/** GradientText — fills text with the signature 135° tri-stop gradient.
 *  Use on the emphasised half of a heading or large numerals. */
export function GradientText({ children, as = 'span', ...rest }) {
  const Tag = as;
  const style = {
    background: 'var(--gradient)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
  };
  return (
    <Tag style={style} {...rest}>
      {children}
    </Tag>
  );
}
