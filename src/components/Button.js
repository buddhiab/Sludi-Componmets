import PropTypes from "prop-types";

// ─── Design tokens (aligned with Navbar / Badge) ──────────────────────────────
const BUTTON_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  @keyframes btn-spin {
    to { transform: rotate(360deg); }
  }

  .sludi-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 600;
    letter-spacing: 0.01em;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    user-select: none;
    text-decoration: none;
    line-height: 1;
    transition:
      opacity 0.18s ease,
      transform 0.15s ease,
      box-shadow 0.2s ease,
      background 0.2s ease,
      color 0.15s ease,
      border-color 0.15s ease;
  }

  /* ── ripple pseudo-element ── */
  .sludi-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0);
    transition: background 0.2s ease;
    pointer-events: none;
    border-radius: inherit;
  }

  .sludi-btn:hover:not(:disabled)::after {
    background: rgba(255,255,255,0.1);
  }

  .sludi-btn:active:not(:disabled) {
    transform: scale(0.97) translateY(1px);
  }

  .sludi-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* ── sizes ── */
  .sludi-btn-sm {
    font-size: 12px;
    padding: 6px 14px;
    border-radius: 8px;
  }
  .sludi-btn-md {
    font-size: 14px;
    padding: 10px 22px;
    border-radius: 10px;
  }
  .sludi-btn-lg {
    font-size: 16px;
    padding: 13px 30px;
    border-radius: 12px;
  }

  /* ── variants ── */
  .sludi-btn-solid {
    color: #ffffff;
    box-shadow: 0 4px 14px rgba(0,0,0,0.18);
  }
  .sludi-btn-solid:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 8px 22px rgba(0,0,0,0.22);
  }

  .sludi-btn-outline {
    background: transparent !important;
    box-shadow: none;
  }
  .sludi-btn-outline:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  .sludi-btn-ghost {
    background: transparent !important;
    box-shadow: none;
    border: none !important;
  }
  .sludi-btn-ghost:hover:not(:disabled) {
    opacity: 0.75;
  }

  .sludi-btn-soft {
    box-shadow: none;
  }
  .sludi-btn-soft:hover:not(:disabled) {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  /* ── spinner ── */
  .sludi-btn-spinner {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    border: 2px solid currentColor;
    border-top-color: transparent;
    flex-shrink: 0;
    animation: btn-spin 0.75s linear infinite;
  }
`;

// ─── Variant style resolvers ──────────────────────────────────────────────────
function resolveVariantStyle(variant, backgroundColor, textColor) {
  const bg = backgroundColor || "#ec4cac";
  const fg = textColor || "#ffffff";

  // Derive a soft tint (~15% opacity) from the bg for soft/outline variants
  const softBg = bg.startsWith("#") && bg.length === 7
    ? bg + "26" // ~15% opacity via hex alpha
    : bg;

  switch (variant) {
    case "outline":
      return {
        border: `2px solid ${bg}`,
        color: bg,
        background: "transparent",
      };
    case "ghost":
      return {
        border: "2px solid transparent",
        color: bg,
        background: "transparent",
      };
    case "soft":
      return {
        border: "2px solid transparent",
        color: bg,
        background: softBg,
      };
    case "solid":
    default:
      return {
        background: bg,
        color: fg,
        border: "2px solid transparent",
      };
  }
}

// ─── Spinner (matches Badge's svg approach but simpler css ring) ──────────────
function Spinner() {
  return <span className="sludi-btn-spinner" aria-hidden="true" />;
}

// ─── Button ───────────────────────────────────────────────────────────────────
function Button({
  label,
  children,
  backgroundColor = "#ec4cac",
  textColor = "white",
  size = "md",
  radius,          // optional override
  variant = "solid",
  handleClick,
  loading = false,
  style: customStyle = {},
  ...props
}) {
  const variantStyle = resolveVariantStyle(variant, backgroundColor, textColor);

  const computedStyle = {
    ...variantStyle,
    ...(radius ? { borderRadius: radius } : {}),
    ...customStyle,
  };

  const classes = [
    "sludi-btn",
    `sludi-btn-${size}`,
    `sludi-btn-${variant}`,
  ].join(" ");

  return (
    <>
      <style>{BUTTON_STYLES}</style>
      <button
        className={classes}
        style={computedStyle}
        onClick={handleClick}
        disabled={loading}
        aria-busy={loading}
        {...props}
      >
        {loading && <Spinner />}
        {!loading && (children ? children : label)}
      </button>
    </>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  radius: PropTypes.string,
  variant: PropTypes.oneOf(["solid", "outline", "ghost", "soft"]),
  handleClick: PropTypes.func,
  loading: PropTypes.bool,
  style: PropTypes.object,
};

export default Button;