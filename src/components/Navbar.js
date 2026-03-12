import React, { useState } from "react";
import PropTypes from "prop-types";

// ─── Spinner keyframes injected once ─────────────────────────────────────────
const GLOBAL_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  * { box-sizing: border-box; }

  .navbar-link {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 6px 4px;
    transition: color 0.2s ease;
    position: relative;
    font-family: 'Poppins', sans-serif;
  }

  .navbar-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    border-radius: 2px;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  .navbar-link:hover::after,
  .navbar-link.active::after {
    transform: scaleX(1);
  }

  .navbar-cta {
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 24px;
    border-radius: 9999px;
    transition: opacity 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
    white-space: nowrap;
  }

  .navbar-cta:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }

  .navbar-cta:active {
    transform: translateY(0);
  }

  .navbar-login-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;
    padding: 10px 16px;
    border-radius: 9999px;
    transition: background 0.2s ease;
  }

  .navbar-login-btn:hover {
    background: rgba(0,0,0,0.05);
  }

  .navbar-hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 4px;
  }

  .navbar-hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 2px;
    transition: background 0.2s;
  }

  @media (max-width: 768px) {
    .navbar-links-wrap {
      display: none !important;
    }
    .navbar-actions {
      display: none !important;
    }
    .navbar-hamburger {
      display: flex !important;
    }
    .navbar-mobile-open .navbar-links-wrap {
      display: flex !important;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      padding: 16px 24px 24px;
      gap: 4px !important;
      z-index: 999;
    }
    .navbar-mobile-open .navbar-actions {
      display: flex !important;
      padding: 0 24px 20px;
      position: absolute;
      top: auto;
      left: 0;
      right: 0;
    }
  }
`;

// ─── Variant resolvers ────────────────────────────────────────────────────────
const resolveNavBg = ({ variant, backgroundColor, gradientFrom, gradientTo }) => {
  if (variant === "gradient") {
    return `linear-gradient(135deg, ${gradientFrom || "#2dd4bf"} 0%, ${gradientTo || "#0ea5e9"} 100%)`;
  }
  if (variant === "glass") {
    return "rgba(255,255,255,0.7)";
  }
  return backgroundColor || "#ffffff";
};

const resolveLinkColor = ({ variant, backgroundColor }) => {
  if (variant === "glass") return "#1e293b";
  if (!backgroundColor || backgroundColor === "#ffffff" || backgroundColor === "#fff") return "#374151";
  // detect if bg is light or dark
  const hex = backgroundColor.replace("#", "");
  if (hex.length === 6) {
    const r = parseInt(hex.slice(0,2),16);
    const g = parseInt(hex.slice(2,4),16);
    const b = parseInt(hex.slice(4,6),16);
    const luminance = (0.299*r + 0.587*g + 0.114*b) / 255;
    return luminance > 0.55 ? "#374151" : "#ffffff";
  }
  return "#374151";
};

// ─── Logo SVG (matches reference wave icon) ──────────────────────────────────
const WaveLogo = ({ color = "#2dd4bf" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill={color} fillOpacity="0.15" />
    <path d="M8 20c2-4 4-6 8-6s6 2 8 6" stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <path d="M8 15c2-5 4-7 8-7s6 2 8 7" stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <path d="M8 25c2-3 4-4 8-4s6 1 8 4" stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="none"/>
  </svg>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = ({
  logo = "Brand",
  logoIcon = true,
  links = [],
  ctaLabel = "Sign Up",
  loginLabel = "Log In",
  showLogin = true,
  activeIndex = 0,
  variant = "solid",
  backgroundColor = "#ffffff",
  gradientFrom,
  gradientTo,
  accentColor = "#2dd4bf",
  ctaTextColor = "#ffffff",
  onCtaClick,
  onLoginClick,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navBg = resolveNavBg({ variant, backgroundColor, gradientFrom, gradientTo });
  const linkColor = resolveLinkColor({ variant, backgroundColor });
  const isLight = linkColor === "#374151";
  const borderColor = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.15)";

  const navStyle = {
    background: navBg,
    backdropFilter: variant === "glass" ? "blur(12px)" : undefined,
    WebkitBackdropFilter: variant === "glass" ? "blur(12px)" : undefined,
    borderBottom: `1px solid ${borderColor}`,
    padding: "0 40px",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
    boxShadow: isLight
      ? "0 1px 12px rgba(0,0,0,0.06)"
      : "0 1px 12px rgba(0,0,0,0.2)",
  };

  return (
    <>
      <style>{GLOBAL_STYLE}</style>
      <nav style={navStyle} className={mobileOpen ? "navbar-mobile-open" : ""}>

        {/* ── Logo ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          {logoIcon && <WaveLogo color={accentColor} />}
          {logo && (
            <span style={{
              fontWeight: 700,
              fontSize: "18px",
              color: accentColor,
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "-0.3px",
            }}>
              {logo}
            </span>
          )}
        </div>

        {/* ── Nav links ── */}
        <ul
          className="navbar-links-wrap"
          style={{
            listStyle: "none",
            display: "flex",
            gap: "8px",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          {links.map((link, i) => (
            <li key={i}>
              <a
                href={link.url || "#"}
                className={`navbar-link${i === activeIndex ? " active" : ""}`}
                style={{
                  color: i === activeIndex ? accentColor : linkColor,
                  fontWeight: i === activeIndex ? 700 : 500,
                  padding: "6px 14px",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Actions ── */}
        <div
          className="navbar-actions"
          style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}
        >
          {showLogin && (
            <button
              className="navbar-login-btn"
              style={{ color: linkColor }}
              onClick={onLoginClick}
            >
              {loginLabel}
            </button>
          )}
          <button
            className="navbar-cta"
            style={{
              background: accentColor,
              color: ctaTextColor,
              boxShadow: `0 4px 14px ${accentColor}55`,
            }}
            onClick={onCtaClick}
          >
            {ctaLabel}
          </button>
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button
          className="navbar-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span style={{ background: linkColor }} />
          <span style={{ background: linkColor }} />
          <span style={{ background: linkColor }} />
        </button>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string,
  logoIcon: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, url: PropTypes.string })),
  ctaLabel: PropTypes.string,
  loginLabel: PropTypes.string,
  showLogin: PropTypes.bool,
  activeIndex: PropTypes.number,
  variant: PropTypes.oneOf(["solid", "gradient", "glass"]),
  backgroundColor: PropTypes.string,
  gradientFrom: PropTypes.string,
  gradientTo: PropTypes.string,
  accentColor: PropTypes.string,
  ctaTextColor: PropTypes.string,
  onCtaClick: PropTypes.func,
  onLoginClick: PropTypes.func,
};

export default Navbar; 