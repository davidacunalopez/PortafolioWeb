import React from 'react';

/** Avatar — a rounded photo frame. `ring` wraps it in the rotating gradient
 *  ring used around the hero portrait. */
export function Avatar({ src, alt = '', size = 64, radius = 'var(--radius-md)', ring = false, ...rest }) {
  const img = {
    display: 'block',
    width: size,
    height: size,
    objectFit: 'cover',
    borderRadius: radius,
    border: '1px solid var(--border)',
    position: 'relative',
    zIndex: 2,
  };
  if (!ring) return <img src={src} alt={alt} style={img} {...rest} />;

  const wrap = { position: 'relative', width: size, height: size, display: 'inline-block' };
  const ringStyle = {
    position: 'absolute',
    inset: -6,
    borderRadius: `calc(${typeof radius === 'string' ? radius : radius + 'px'} + 6px)`,
    background: 'var(--gradient)',
    opacity: 0.4,
    zIndex: 1,
    animation: 'da-ring-rotate 6s linear infinite',
  };
  return (
    <span style={wrap} {...rest}>
      <span style={ringStyle} />
      <img src={src} alt={alt} style={img} />
      <style>{`@keyframes da-ring-rotate{to{transform:rotate(360deg)}}@media (prefers-reduced-motion: reduce){span [style*="da-ring-rotate"]{animation:none}}`}</style>
    </span>
  );
}
