/* @ds-bundle: {"format":3,"namespace":"AcuAPortfolioDesignSystem_96f72c","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"GradientText","sourcePath":"components/core/GradientText.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"SkillBar","sourcePath":"components/core/SkillBar.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"StatDivider","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"591c1a68de5f","components/core/Badge.jsx":"78050bfec51f","components/core/Button.jsx":"9eb945b58a08","components/core/Card.jsx":"cda84272984d","components/core/GradientText.jsx":"2e201cef0c02","components/core/Input.jsx":"3c514fa1397f","components/core/SectionLabel.jsx":"33d59cce7122","components/core/SkillBar.jsx":"28bb5e32a4af","components/core/StatBlock.jsx":"fe64fadbc50b","components/core/Tag.jsx":"48b1127b4cac","components/core/Textarea.jsx":"c7847810c83e","ui_kits/portfolio/About.jsx":"ed41a58fc15f","ui_kits/portfolio/App.jsx":"7118b95748c2","ui_kits/portfolio/Atmosphere.jsx":"4844ed62a863","ui_kits/portfolio/Contact.jsx":"3288e3e3e5cf","ui_kits/portfolio/Footer.jsx":"a641472a5021","ui_kits/portfolio/Hero.jsx":"7c9c218258fb","ui_kits/portfolio/Nav.jsx":"8896afe793ce","ui_kits/portfolio/Projects.jsx":"e9cd974e5a1d","ui_kits/portfolio/Skills.jsx":"0539b3295ee5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AcuAPortfolioDesignSystem_96f72c = window.AcuAPortfolioDesignSystem_96f72c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — a rounded photo frame. `ring` wraps it in the rotating gradient
 *  ring used around the hero portrait. */
function Avatar({
  src,
  alt = '',
  size = 64,
  radius = 'var(--radius-md)',
  ring = false,
  ...rest
}) {
  const img = {
    display: 'block',
    width: size,
    height: size,
    objectFit: 'cover',
    borderRadius: radius,
    border: '1px solid var(--border)',
    position: 'relative',
    zIndex: 2
  };
  if (!ring) return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    style: img
  }, rest));
  const wrap = {
    position: 'relative',
    width: size,
    height: size,
    display: 'inline-block'
  };
  const ringStyle = {
    position: 'absolute',
    inset: -6,
    borderRadius: `calc(${typeof radius === 'string' ? radius : radius + 'px'} + 6px)`,
    background: 'var(--gradient)',
    opacity: 0.4,
    zIndex: 1,
    animation: 'da-ring-rotate 6s linear infinite'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: ringStyle
  }), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: img
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes da-ring-rotate{to{transform:rotate(360deg)}}@media (prefers-reduced-motion: reduce){span [style*="da-ring-rotate"]{animation:none}}`));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status pill with a soft tinted background. Use `tone` to pick
 * the accent. The `dot` variant adds a pulsing status dot (e.g. "available").
 */
function Badge({
  children,
  tone = 'accent',
  dot = false,
  ...rest
}) {
  const tones = {
    accent: {
      c: 'var(--accent)',
      bg: 'var(--accent-soft)',
      b: 'var(--accent-border)'
    },
    info: {
      c: 'var(--accent-3)',
      bg: 'var(--accent-3-soft)',
      b: 'var(--accent-3-border)'
    },
    pink: {
      c: 'var(--accent-2)',
      bg: 'var(--accent-2-soft)',
      b: 'rgba(247,37,133,0.25)'
    }
  };
  const t = tones[tone] || tones.accent;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.4rem 1rem',
    background: t.bg,
    border: `1px solid ${t.b}`,
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-medium)',
    color: t.c,
    lineHeight: 1
  };
  const dotStyle = {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: t.c,
    animation: 'da-pulse-dot 2s ease infinite'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: dotStyle
  }), children, dot && /*#__PURE__*/React.createElement("style", null, `@keyframes da-pulse-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}`));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's primary action control.
 * Pill-shaped. `primary` carries the signature gradient fill + morado glow;
 * `ghost` is a hairline outline; `secondary` is a soft glass fill.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  full = false,
  disabled = false,
  href,
  onClick,
  type = 'button',
  ...rest
}) {
  const pad = size === 'sm' ? '0.5rem 1.2rem' : '0.8rem 1.8rem';
  const fontSize = size === 'sm' ? 'var(--fs-xs)' : 'var(--fs-sm)';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: pad,
    width: full ? '100%' : 'auto',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-semibold)',
    fontSize,
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    border: 'none',
    textDecoration: 'none',
    transition: 'var(--transition)',
    boxSizing: 'border-box'
  };
  const variants = {
    primary: {
      background: 'var(--gradient)',
      color: '#fff',
      boxShadow: 'var(--glow-accent)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text)',
      border: '1px solid var(--border)'
    },
    secondary: {
      background: 'var(--surface-hover)',
      color: 'var(--text)',
      border: '1px solid var(--border)'
    }
  };
  const style = {
    ...base,
    ...variants[variant]
  };
  const onEnter = e => {
    if (disabled) return;
    if (variant === 'primary') {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--glow-accent-strong)';
    } else {
      e.currentTarget.style.background = 'var(--surface-strong)';
      e.currentTarget.style.borderColor = 'var(--border-strong)';
    }
  };
  const onLeave = e => {
    e.currentTarget.style.transform = '';
    e.currentTarget.style.boxShadow = variant === 'primary' ? 'var(--glow-accent)' : '';
    if (variant !== 'primary') {
      e.currentTarget.style.background = variants[variant].background;
      e.currentTarget.style.borderColor = 'var(--border)';
    }
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    onClick: onClick,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, tagProps, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — the brand's translucent glass surface. Optional `accent` washes it
 *  with a soft gradient tint; `hover` enables the lift + glow on pointer. */
function Card({
  children,
  accent = false,
  hover = true,
  padding = '2rem',
  style: extra,
  ...rest
}) {
  const base = {
    background: accent ? 'var(--gradient-soft)' : 'var(--surface)',
    border: `1px solid ${accent ? 'var(--accent-border)' : 'var(--border)'}`,
    borderRadius: 'var(--radius-lg)',
    padding,
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition)',
    boxSizing: 'border-box',
    ...extra
  };
  const onEnter = e => {
    if (!hover) return;
    e.currentTarget.style.transform = 'var(--lift)';
    e.currentTarget.style.borderColor = 'var(--accent-border)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  };
  const onLeave = e => {
    if (!hover) return;
    e.currentTarget.style.transform = '';
    e.currentTarget.style.borderColor = accent ? 'var(--accent-border)' : 'var(--border)';
    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/GradientText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** GradientText — fills text with the signature 135° tri-stop gradient.
 *  Use on the emphasised half of a heading or large numerals. */
function GradientText({
  children,
  as = 'span',
  ...rest
}) {
  const Tag = as;
  const style = {
    background: 'var(--gradient)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { GradientText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GradientText.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Input — glass text field with an uppercase label and morado focus ring. */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1.2rem'
  };
  const lab = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-semibold)',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };
  const field = {
    background: focus ? 'rgba(108,99,255,0.05)' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${focus ? 'var(--accent)' : 'var(--border)'}`,
    borderRadius: 'var(--radius)',
    padding: '0.9rem 1.2rem',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-sm)',
    outline: 'none',
    boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
    transition: 'var(--transition)',
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: lab
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** SectionLabel — the uppercase, pill-bordered eyebrow that opens every
 *  section ("SOBRE MÍ", "PROYECTOS"). */
function SectionLabel({
  children,
  ...rest
}) {
  const style = {
    display: 'inline-block',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-label)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    border: '1px solid var(--accent-border)',
    padding: '0.3rem 0.9rem',
    borderRadius: 'var(--radius-pill)',
    background: 'var(--accent-soft)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/SkillBar.jsx
try { (() => {
/** SkillBar — labelled progress bar with a gradient fill that animates to
 *  `value`% on mount. Used in the "Frontend" bento tile. */
function SkillBar({
  label,
  value = 0,
  ...rest
}) {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const t = setTimeout(() => setW(value), 80);
    return () => clearTimeout(t);
  }, [value]);
  const info = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.4rem',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-xs)',
    color: 'var(--text-muted)'
  };
  const track = {
    background: 'rgba(255,255,255,0.06)',
    borderRadius: 'var(--radius-pill)',
    height: 6,
    overflow: 'hidden'
  };
  const fill = {
    height: '100%',
    width: `${w}%`,
    borderRadius: 'var(--radius-pill)',
    background: 'var(--gradient)',
    transition: 'width 1.2s var(--ease)'
  };
  return /*#__PURE__*/React.createElement("div", rest, /*#__PURE__*/React.createElement("div", {
    style: info
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, value, "%")), /*#__PURE__*/React.createElement("div", {
    style: track
  }, /*#__PURE__*/React.createElement("div", {
    style: fill
  })));
}
Object.assign(__ds_scope, { SkillBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SkillBar.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** StatBlock — a single hero stat (big Space Grotesk number + muted label).
 *  Render several inside a glass strip, separated by <StatDivider/>. */
function StatBlock({
  value,
  label,
  ...rest
}) {
  const wrap = {
    textAlign: 'center'
  };
  const num = {
    display: 'block',
    fontFamily: 'var(--font-display)',
    fontSize: '1.6rem',
    fontWeight: 'var(--fw-bold)',
    color: 'var(--text-strong)',
    lineHeight: 1.1
  };
  const lab = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-label)',
    color: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: num
  }, value), /*#__PURE__*/React.createElement("span", {
    style: lab
  }, label));
}

/** Thin vertical rule between StatBlocks. */
function StatDivider() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 40,
      background: 'var(--border)'
    }
  });
}
Object.assign(__ds_scope, { StatBlock, StatDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a pill chip for tech/skill labels. Border + muted text by default;
 * shifts to the morado accent on hover.
 */
function Tag({
  children,
  size = 'md',
  ...rest
}) {
  const style = {
    display: 'inline-block',
    padding: size === 'sm' ? '0.2rem 0.6rem' : '0.35rem 0.9rem',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-body)',
    fontSize: size === 'sm' ? 'var(--fs-2xs)' : 'var(--fs-xs)',
    color: 'var(--text-muted)',
    transition: 'var(--transition)',
    cursor: 'default'
  };
  const onEnter = e => {
    e.currentTarget.style.borderColor = 'var(--accent)';
    e.currentTarget.style.color = 'var(--accent)';
  };
  const onLeave = e => {
    e.currentTarget.style.borderColor = 'var(--border)';
    e.currentTarget.style.color = 'var(--text-muted)';
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multi-line glass field matching Input. */
function Textarea({
  label,
  id,
  placeholder,
  rows = 5,
  value,
  onChange,
  required,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1.2rem'
  };
  const lab = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-xs)',
    fontWeight: 'var(--fw-semibold)',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };
  const field = {
    background: focus ? 'rgba(108,99,255,0.05)' : 'rgba(255,255,255,0.04)',
    border: `1px solid ${focus ? 'var(--accent)' : 'var(--border)'}`,
    borderRadius: 'var(--radius)',
    padding: '0.9rem 1.2rem',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--fs-sm)',
    outline: 'none',
    resize: 'none',
    boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
    transition: 'var(--transition)',
    boxSizing: 'border-box'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: lab
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
/* Sobre mí — overlapping photo stack + bio + tag cloud. */
function About({
  onNav
}) {
  const {
    SectionLabel,
    GradientText,
    Tag,
    Button
  } = window.AcuAPortfolioDesignSystem_96f72c;
  const photo = {
    position: 'absolute',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    border: '2px solid var(--border)',
    boxShadow: 'var(--shadow-sm)'
  };
  const tags = ['React', 'Node.js', 'TypeScript', 'Python', 'Odoo', 'n8n', 'Supabase', 'OpenAI'];
  return /*#__PURE__*/React.createElement("section", {
    id: "sobre-mi",
    style: {
      padding: '7rem 2rem',
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Sobre m\xED"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1.2fr' : '1fr',
      gap: '5rem',
      alignItems: 'center',
      marginTop: '2rem'
    }
  }, window.innerWidth > 1024 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 450
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...photo,
      width: 250,
      height: 320,
      top: 0,
      left: 0,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-1251.jpg",
    alt: "David",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...photo,
      width: 200,
      height: 250,
      bottom: 0,
      right: 0,
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-1344.jpg",
    alt: "David",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...photo,
      width: 160,
      height: 200,
      top: 60,
      right: 20,
      zIndex: 1,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-1411.jpg",
    alt: "David",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 700,
      lineHeight: 'var(--lh-heading)',
      marginBottom: '1.5rem'
    }
  }, "Creando con", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(GradientText, null, "pasi\xF3n y prop\xF3sito")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-relaxed)',
      marginBottom: '1rem'
    }
  }, "Ingeniero en Computaci\xF3n (TEC Costa Rica) especializado en agentes de IA en producci\xF3n y desarrollo full-stack. Me apasiona la intersecci\xF3n entre tecnolog\xEDa y automatizaci\xF3n de procesos."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-relaxed)',
      marginBottom: '1rem'
    }
  }, "Trabajo con el ecosistema moderno \u2014 React, Node.js, Python, Odoo, n8n y OpenAI \u2014 para entregar soluciones r\xE1pidas, escalables y bien dise\xF1adas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginTop: '1.5rem'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('contacto')
  }, "Trabajemos juntos \u2192")))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
/* App — composes the full portfolio. Scroll happens inside .da-scroll. */
function App() {
  const {
    Atmosphere,
    Nav,
    Hero,
    About,
    Skills,
    Projects,
    Contact,
    Footer
  } = window;
  const onNav = id => {
    const el = document.getElementById(id);
    const scroller = document.querySelector('.da-scroll');
    if (!el || !scroller) return;
    const top = el.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop - 90;
    scroller.scrollTo({
      top: id === 'inicio' ? 0 : top,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Atmosphere, null), /*#__PURE__*/React.createElement(Nav, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.01)'
    }
  }, /*#__PURE__*/React.createElement(About, {
    onNav: onNav
  })), /*#__PURE__*/React.createElement(Skills, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.01)'
    }
  }, /*#__PURE__*/React.createElement(Projects, null)), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Atmosphere.jsx
try { (() => {
/* Atmosphere — drifting blurred blobs, faint grid, desktop cursor glow.
   Renders behind all content (fixed, z-index -1). */
function Atmosphere() {
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth <= 768) return;
    const glow = document.createElement('div');
    glow.style.cssText = 'position:fixed;pointer-events:none;z-index:9999;width:300px;height:300px;border-radius:50%;' + 'background:radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%);' + 'transform:translate(-50%,-50%);transition:left .15s ease, top .15s ease;left:-999px;top:-999px';
    document.body.appendChild(glow);
    const move = e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    document.addEventListener('mousemove', move);
    return () => {
      document.removeEventListener('mousemove', move);
      glow.remove();
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "da-blob",
    style: {
      width: 600,
      height: 600,
      background: 'var(--accent)',
      top: -200,
      left: -200
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "da-blob",
    style: {
      width: 500,
      height: 500,
      background: 'var(--accent-2)',
      bottom: -100,
      right: -100,
      animationDelay: '-3s'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "da-blob",
    style: {
      width: 400,
      height: 400,
      background: 'var(--accent-3)',
      top: '50%',
      left: '50%',
      animationDelay: '-6s'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--grid-overlay)',
      backgroundSize: 'var(--grid-size)'
    }
  }));
}
window.Atmosphere = Atmosphere;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Atmosphere.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
/* Contacto — centered glass form with working success state + social links. */
function Contact() {
  const {
    SectionLabel,
    GradientText,
    Input,
    Textarea,
    Button
  } = window.AcuAPortfolioDesignSystem_96f72c;
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      e.target.reset();
    }, 3000);
  };
  const social = {
    color: 'var(--text-muted)',
    fontSize: 'var(--fs-sm)',
    fontWeight: 500,
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      padding: '7rem 2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "da-blob",
    style: {
      width: 400,
      height: 400,
      background: 'var(--accent)',
      top: -100,
      right: -100,
      opacity: 0.1
    }
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Contacto"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 700,
      margin: '1rem 0 1rem'
    }
  }, "\xBFTienes un ", /*#__PURE__*/React.createElement(GradientText, null, "proyecto en mente?")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginBottom: '2.5rem'
    }
  }, "Disponible para proyectos freelance, colaboraciones y oportunidades de trabajo. \xA1Hablemos!"), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '2.5rem',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 600 ? '1fr 1fr' : '1fr',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    id: "nombre",
    placeholder: "Tu nombre",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    id: "email",
    type: "email",
    placeholder: "tu@email.com",
    required: true
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Mensaje",
    id: "mensaje",
    rows: 5,
    placeholder: "Cu\xE9ntame sobre tu proyecto...",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    type: "submit"
  }, sent ? '✓ Mensaje enviado' : 'Enviar mensaje →')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/davidacunalopez",
    target: "_blank",
    style: social
  }, "GitHub"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--border-strong)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: social
  }, "LinkedIn"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--border-strong)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: social
  }, "Email"))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
/* Footer — wordmark, credit, back-to-top. */
function Footer({
  onNav
}) {
  const back = {
    fontSize: 'var(--fs-sm)',
    color: 'var(--text-muted)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border)',
      padding: '2rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.4rem',
      fontWeight: 700,
      color: '#fff'
    }
  }, "DA", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 David Acu\xF1a. Dise\xF1ado y desarrollado con \u2764\uFE0F"), /*#__PURE__*/React.createElement("button", {
    style: back,
    onClick: () => onNav('inicio')
  }, "\u2191 Volver arriba")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
/* Hero — intro, available badge, gradient title, CTAs, stat strip, ringed
   portrait with floating glass chips. */
function Hero({
  onNav
}) {
  const {
    Badge,
    Button,
    StatBlock,
    StatDivider,
    Avatar,
    GradientText
  } = window.AcuAPortfolioDesignSystem_96f72c;
  const wrap = {
    minHeight: '88vh',
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '7rem 2rem 4rem',
    flexWrap: 'wrap'
  };
  const content = {
    flex: 1,
    minWidth: 320,
    maxWidth: 580
  };
  const chip = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    background: 'var(--surface-float)',
    backdropFilter: 'blur(20px)',
    border: '1px solid var(--border)',
    borderRadius: 12,
    padding: '0.8rem 1.2rem',
    fontSize: 'var(--fs-xs)',
    fontWeight: 600,
    zIndex: 10,
    boxShadow: 'var(--shadow-md)'
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "inicio",
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: content
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "info",
    dot: true
  }, "Disponible para trabajar"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-hero)',
      fontWeight: 800,
      lineHeight: 'var(--lh-tight)',
      margin: '1.5rem 0 1.2rem'
    }
  }, "Hola, soy", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(GradientText, null, "David Acu\xF1a")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--lh-relaxed)',
      maxWidth: 460,
      marginBottom: '2rem'
    }
  }, "Desarrollador full-stack e ingeniero de IA. Construyo agentes en producci\xF3n y experiencias digitales modernas, funcionales y bien dise\xF1adas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      marginBottom: '2.5rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav('proyectos')
  }, "Ver proyectos"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => onNav('contacto')
  }, "Hablemos \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      padding: '1.2rem 1.5rem',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "+10",
    label: "Proyectos"
  }), /*#__PURE__*/React.createElement(StatDivider, null), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3+",
    label: "A\xF1os exp."
  }), /*#__PURE__*/React.createElement(StatDivider, null), /*#__PURE__*/React.createElement(StatBlock, {
    value: "100%",
    label: "Dedicaci\xF3n"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 300,
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/perfil.jpg",
    alt: "David Acu\xF1a",
    size: 340,
    radius: "30px",
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...chip,
      bottom: 30,
      left: -40,
      animation: 'da-float 3s ease-in-out infinite alternate'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.2rem'
    }
  }, "\u26A1"), " Agentes de IA"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...chip,
      top: 30,
      right: -40,
      animation: 'da-float 3s ease-in-out -1.5s infinite alternate'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.2rem'
    }
  }, "\uD83D\uDEE0\uFE0F"), " Full-stack"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
/* Floating pill nav — glass bar centered at top, gains shadow on scroll. */
function Nav({
  onNav
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const el = document.querySelector('.da-scroll');
    const target = el || window;
    target.addEventListener('scroll', onScroll);
    return () => target.removeEventListener('scroll', onScroll);
  }, []);
  const links = [['Sobre mí', 'sobre-mi'], ['Habilidades', 'habilidades'], ['Proyectos', 'proyectos'], ['Contacto', 'contacto']];
  const nav = {
    position: 'sticky',
    top: '1.5rem',
    zIndex: 1000,
    width: 'calc(100% - 4rem)',
    maxWidth: 1100,
    margin: '1.5rem auto 0',
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    background: scrolled ? 'rgba(8,11,18,0.92)' : 'var(--surface-nav)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-pill)',
    padding: '0.9rem 2rem',
    boxShadow: scrolled ? 'var(--shadow-nav)' : 'none',
    transition: 'var(--transition)',
    boxSizing: 'border-box'
  };
  const logo = {
    fontFamily: 'var(--font-display)',
    fontSize: '1.4rem',
    fontWeight: 700,
    color: '#fff',
    marginRight: 'auto',
    cursor: 'pointer'
  };
  const linkStyle = {
    fontSize: 'var(--fs-sm)',
    color: 'var(--text-muted)',
    cursor: 'pointer',
    transition: 'var(--transition)',
    background: 'none',
    border: 'none',
    fontFamily: 'inherit'
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: nav
  }, /*#__PURE__*/React.createElement("span", {
    style: logo,
    onClick: () => onNav('inicio')
  }, "DA", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: window.innerWidth > 768 ? 'flex' : 'none',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, links.map(([label, id]) => /*#__PURE__*/React.createElement("li", {
    key: id
  }, /*#__PURE__*/React.createElement("button", {
    style: linkStyle,
    onClick: () => onNav(id),
    onMouseEnter: e => e.currentTarget.style.color = '#fff',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-muted)'
  }, label)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav('contacto'),
    style: {
      display: window.innerWidth > 768 ? 'inline-flex' : 'none',
      padding: '0.55rem 1.4rem',
      background: 'var(--gradient)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 600,
      fontSize: 'var(--fs-xs)',
      cursor: 'pointer'
    }
  }, "Cont\xE1ctame"));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Projects.jsx
try { (() => {
/* Proyectos — three project cards with hover overlay CTA. */
function Projects() {
  const {
    SectionLabel,
    GradientText,
    Tag,
    Button
  } = window.AcuAPortfolioDesignSystem_96f72c;
  const data = [{
    img: '../../assets/photo-1792.jpg',
    tags: ['Odoo', 'OpenAI'],
    title: 'Agentes IA en Odoo',
    desc: 'Automatización de procesos de negocio con agentes en producción integrados a Odoo.'
  }, {
    img: '../../assets/photo-1411.jpg',
    tags: ['React', 'Supabase'],
    title: 'Plataforma full-stack',
    desc: 'Aplicación web moderna con autenticación, datos en tiempo real y diseño responsivo.'
  }, {
    img: null,
    tags: ['n8n', 'API'],
    title: 'Pipeline de automatización',
    desc: 'Orquestación de flujos con n8n e integraciones a APIs externas y modelos de IA.'
  }];
  function ProjectCard({
    p
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("article", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        background: 'var(--surface)',
        border: `1px solid ${hover ? 'var(--accent-border)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'var(--transition)',
        transform: hover ? 'var(--lift-lg)' : 'none',
        boxShadow: hover ? 'var(--shadow-xl)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 200,
        overflow: 'hidden',
        background: p.img ? 'transparent' : 'var(--gradient-soft)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, p.img ? /*#__PURE__*/React.createElement("img", {
      src: p.img,
      alt: p.title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: hover ? 'scale(1.08)' : 'none',
        transition: 'var(--transition-slow)'
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '3.5rem'
      }
    }, "\uD83D\uDE80"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'rgba(8,11,18,0.7)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: hover ? 1 : 0,
        transition: 'var(--transition)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Ver proyecto \u2192"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '0.4rem',
        marginBottom: '0.8rem'
      }
    }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      size: "sm"
    }, t))), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-h3)',
        fontWeight: 600,
        marginBottom: '0.5rem'
      }
    }, p.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-xs)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--lh-body)'
      }
    }, p.desc)));
  }
  return /*#__PURE__*/React.createElement("section", {
    id: "proyectos",
    style: {
      padding: '7rem 2rem',
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Proyectos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 700,
      margin: '1rem 0 2rem'
    }
  }, "Trabajo ", /*#__PURE__*/React.createElement(GradientText, null, "reciente")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
      gap: '1.5rem'
    }
  }, data.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.title,
    p: p
  }))));
}
window.Projects = Projects;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Skills.jsx
try { (() => {
/* Habilidades — bento grid: wide skill-bars tile, three stack tiles, accent tile. */
function Skills() {
  const {
    SectionLabel,
    GradientText,
    Card,
    SkillBar
  } = window.AcuAPortfolioDesignSystem_96f72c;
  const wide = window.innerWidth > 768;
  const label = {
    fontSize: 'var(--fs-label)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--accent)',
    marginBottom: '1.2rem'
  };
  const chips = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0.6rem'
  };
  const chip = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-sm)',
    padding: '0.6rem 0.8rem',
    fontSize: 'var(--fs-xs)',
    fontWeight: 500,
    color: 'var(--text-muted)',
    textAlign: 'center'
  };
  const tile = (title, items) => /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: label
  }, title), /*#__PURE__*/React.createElement("div", {
    style: chips
  }, items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: chip
  }, i))));
  return /*#__PURE__*/React.createElement("section", {
    id: "habilidades",
    style: {
      padding: '7rem 2rem',
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Habilidades"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 700,
      margin: '1rem 0 2rem'
    }
  }, "Stack ", /*#__PURE__*/React.createElement(GradientText, null, "tecnol\xF3gico")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: wide ? 'repeat(3, 1fr)' : '1fr',
      gap: '1.2rem'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      gridColumn: wide ? 'span 2' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: label
  }, "Frontend"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem'
    }
  }, /*#__PURE__*/React.createElement(SkillBar, {
    label: "React / Next.js",
    value: 90
  }), /*#__PURE__*/React.createElement(SkillBar, {
    label: "TypeScript",
    value: 85
  }), /*#__PURE__*/React.createElement(SkillBar, {
    label: "HTML / CSS",
    value: 95
  }))), tile('IA & Agentes', ['OpenAI', 'n8n', 'Odoo', 'LangChain']), tile('Backend', ['Node.js', 'Python', 'Supabase', 'REST API']), tile('Herramientas', ['Git', 'Docker', 'VS Code', 'Figma']), /*#__PURE__*/React.createElement(Card, {
    accent: true,
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(GradientText, {
    as: "div",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '4rem',
      fontWeight: 800,
      lineHeight: 1
    }
  }, "100", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '2rem'
    }
  }, "%")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--fs-sm)',
      marginTop: '0.5rem'
    }
  }, "Compromiso con cada proyecto que tomo"))));
}
window.Skills = Skills;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Skills.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GradientText = __ds_scope.GradientText;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.SkillBar = __ds_scope.SkillBar;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StatDivider = __ds_scope.StatDivider;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
