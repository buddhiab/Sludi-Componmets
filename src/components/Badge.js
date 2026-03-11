import React from "react";
import PropTypes from "prop-types";

const tokens = {
  radius: "9999px",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontWeight: 500,
  transition: "background 0.15s ease, color 0.15s ease, border-color 0.15s ease",
};

const variantMap = {
  default: {
    background: "#111827",
    color: "#ffffff",
    border: "1px solid transparent",
  },
  secondary: {
    background: "transparent",
    color: "#374151",
    border: "1px solid #d1d5db",
  },
  destructive: {
    background: "#fff1f2",
    color: "#f43f5e",
    border: "1px solid transparent",
  },
  outline: {
    background: "transparent",
    color: "#374151",
    border: "1px solid #d1d5db",
  },
  ghost: {
    background: "transparent",
    color: "#6b7280",
    border: "1px solid transparent",
  },
  link: {
    background: "transparent",
    color: "#2563eb",
    border: "1px solid transparent",
    textDecoration: "underline",
    textUnderlineOffset: "2px",
    padding: 0,
  },
};

const sizeMap = {
  sm: { padding: "2px 10px", fontSize: "11px", gap: "4px" },
  md: { padding: "4px 12px", fontSize: "12px", gap: "6px" },
  lg: { padding: "6px 14px", fontSize: "13px", gap: "8px" },
};

const Spinner = ({ size }) => {
  const dim = { sm: 10, md: 12, lg: 14 }[size] || 12;
  return (
    <svg
      style={{ width: dim, height: dim, flexShrink: 0 }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <style>{`@keyframes bdg-spin { to { transform: rotate(360deg); } }`}</style>
      <g style={{ animation: "bdg-spin 0.8s linear infinite", transformOrigin: "center" }}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3.5" opacity="0.2" />
        <path
          d="M4 12a8 8 0 018-8"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.9"
        />
      </g>
    </svg>
  );
};

const Badge = ({
  variant = "default",
  size = "md",
  icon,
  loading = false,
  style: customStyle = {},
  children,
  ...props
}) => {
  const variantStyle = variantMap[variant] || variantMap.default;
  const sizeStyle = sizeMap[size] || sizeMap.md;

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tokens.radius,
    fontFamily: tokens.fontFamily,
    fontWeight: tokens.fontWeight,
    transition: tokens.transition,
    userSelect: "none",
    whiteSpace: "nowrap",
    cursor: "default",
    lineHeight: 1,
    ...sizeStyle,
    ...variantStyle,
    ...customStyle,
  };

  const iconWrapStyle = {
    display: "inline-flex",
    alignItems: "center",
    flexShrink: 0,
    width: "1em",
    height: "1em",
  };

  return (
    <span style={baseStyle} {...props}>
      {loading ? (
        <Spinner size={size} />
      ) : icon ? (
        <span style={iconWrapStyle} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children && <span>{children}</span>}
    </span>
  );
};

Badge.propTypes = {
  variant: PropTypes.oneOf(["default", "secondary", "destructive", "outline", "ghost", "link"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  icon: PropTypes.node,
  loading: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node,
};

export { Spinner };
export default Badge;