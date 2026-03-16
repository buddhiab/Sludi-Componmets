import React, { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

// ─── Global styles ─────────────────────────────────────────────────────────────
const MENUBAR_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  /* ── Root bar ── */
  .sludi-menubar {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 4px 6px;
    border-radius: 12px;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    position: relative;
    user-select: none;
  }

  /* ── Trigger button ── */
  .sludi-menubar-trigger {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    border: none;
    border-radius: 8px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    background: transparent;
    transition: background 0.15s ease, color 0.15s ease;
    outline: none;
    white-space: nowrap;
    line-height: 1;
  }

  .sludi-menubar-trigger:focus-visible {
    box-shadow: 0 0 0 2px rgba(236,76,172,0.45);
  }

  .sludi-menubar-trigger[aria-expanded="true"] {
    background: rgba(236,76,172,0.1) !important;
  }

  /* chevron inside trigger */
  .sludi-menubar-trigger-chevron {
    display: inline-flex;
    align-items: center;
    opacity: 0.55;
    transition: transform 0.2s ease, opacity 0.15s ease;
  }
  .sludi-menubar-trigger[aria-expanded="true"] .sludi-menubar-trigger-chevron {
    transform: rotate(180deg);
    opacity: 0.85;
  }

  /* ── Dropdown panel ── */
  .sludi-menu-panel {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    min-width: 200px;
    border-radius: 12px;
    padding: 6px;
    z-index: 9999;
    outline: none;
    transform-origin: top left;
    animation: menu-in 0.15s ease forwards;
  }

  @keyframes menu-in {
    from { opacity: 0; transform: scale(0.95) translateY(-6px); }
    to   { opacity: 1; transform: scale(1)    translateY(0); }
  }

  /* ── Menu items ── */
  .sludi-menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 12px;
    border-radius: 8px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    background: transparent;
    width: 100%;
    text-align: left;
    transition: background 0.12s ease, color 0.12s ease;
    outline: none;
    white-space: nowrap;
    position: relative;
  }

  .sludi-menu-item:focus-visible {
    box-shadow: 0 0 0 2px rgba(236,76,172,0.35);
  }

  .sludi-menu-item[aria-disabled="true"] {
    opacity: 0.38;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* icon slot */
  .sludi-menu-item-icon {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    opacity: 0.75;
  }

  /* submenu arrow */
  .sludi-menu-item-arrow {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    opacity: 0.45;
    flex-shrink: 0;
  }

  /* keyboard shortcut hint */
  .sludi-menu-item-shortcut {
    margin-left: auto;
    font-size: 11px;
    opacity: 0.45;
    letter-spacing: 0.04em;
    font-weight: 500;
  }

  /* ── Divider ── */
  .sludi-menu-divider {
    height: 1px;
    margin: 5px 8px;
  }

  /* ── Submenu ── */
  .sludi-submenu-wrap {
    position: relative;
  }

  .sludi-submenu-panel {
    position: absolute;
    top: -6px;
    left: calc(100% + 6px);
    min-width: 180px;
    border-radius: 12px;
    padding: 6px;
    z-index: 10000;
    outline: none;
    transform-origin: top left;
    animation: menu-in 0.15s ease forwards;
  }

  /* ── Variants ── */

  /* solid (default) */
  .sludi-menubar-solid {
    background: #ffffff;
    border: 1.5px solid #e5e7eb;
    box-shadow: 0 1px 6px rgba(0,0,0,0.06);
  }
  .sludi-menubar-solid .sludi-menubar-trigger { color: #374151; }
  .sludi-menubar-solid .sludi-menubar-trigger:hover { background: #f3f4f6; }
  .sludi-menu-panel-solid,
  .sludi-submenu-panel-solid {
    background: #ffffff;
    border: 1.5px solid #e5e7eb;
    box-shadow: 0 8px 28px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.07);
  }
  .sludi-menu-panel-solid .sludi-menu-item  { color: #374151; }
  .sludi-menu-panel-solid .sludi-menu-item:hover:not([aria-disabled="true"])  { background: #f9fafb; color: #111827; }
  .sludi-menu-panel-solid .sludi-menu-divider { background: #e5e7eb; }

  /* dark */
  .sludi-menubar-dark {
    background: #1e1b4b;
    border: 1.5px solid rgba(255,255,255,0.1);
    box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  }
  .sludi-menubar-dark .sludi-menubar-trigger { color: #e2e8f0; }
  .sludi-menubar-dark .sludi-menubar-trigger:hover { background: rgba(255,255,255,0.08); }
  .sludi-menu-panel-dark,
  .sludi-submenu-panel-dark {
    background: #1e1b4b;
    border: 1.5px solid rgba(255,255,255,0.1);
    box-shadow: 0 12px 32px rgba(0,0,0,0.45);
  }
  .sludi-menu-panel-dark .sludi-menu-item  { color: #e2e8f0; }
  .sludi-menu-panel-dark .sludi-menu-item:hover:not([aria-disabled="true"])  { background: rgba(255,255,255,0.08); color: #ffffff; }
  .sludi-menu-panel-dark .sludi-menu-divider { background: rgba(255,255,255,0.1); }

  /* glass */
  .sludi-menubar-glass {
    background: rgba(255,255,255,0.65);
    border: 1.5px solid rgba(255,255,255,0.4);
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
  .sludi-menubar-glass .sludi-menubar-trigger { color: #1e293b; }
  .sludi-menubar-glass .sludi-menubar-trigger:hover { background: rgba(0,0,0,0.05); }
  .sludi-menu-panel-glass,
  .sludi-submenu-panel-glass {
    background: rgba(255,255,255,0.75);
    border: 1.5px solid rgba(255,255,255,0.45);
    box-shadow: 0 12px 32px rgba(0,0,0,0.14);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
  .sludi-menu-panel-glass .sludi-menu-item  { color: #1e293b; }
  .sludi-menu-panel-glass .sludi-menu-item:hover:not([aria-disabled="true"]) { background: rgba(0,0,0,0.05); color: #0f172a; }
  .sludi-menu-panel-glass .sludi-menu-divider { background: rgba(0,0,0,0.1); }

  /* accent hover row */
  .sludi-menu-item-accent:hover:not([aria-disabled="true"]) {
    background: rgba(236,76,172,0.1) !important;
    color: #ec4cac !important;
  }
`;

// ─── Small SVG icons ────────────────────────────────────────────────────────────
function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── SubMenu item ───────────────────────────────────────────────────────────────
function SubMenuItem({ item, variant }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const panelClass = `sludi-submenu-panel sludi-submenu-panel-${variant}`;

  return (
    <div
      ref={wrapRef}
      className="sludi-submenu-wrap"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`sludi-menu-item sludi-menu-item-accent`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-disabled={item.disabled || false}
      >
        {item.icon && <span className="sludi-menu-item-icon">{item.icon}</span>}
        <span style={{ flex: 1 }}>{item.label}</span>
        <span className="sludi-menu-item-arrow"><ChevronRight /></span>
      </button>

      {open && (
        <div className={panelClass} role="menu">
          {item.items.map((sub, i) =>
            sub.divider
              ? <hr key={i} className="sludi-menu-divider" />
              : (
                <button
                  key={i}
                  className="sludi-menu-item sludi-menu-item-accent"
                  role="menuitem"
                  aria-disabled={sub.disabled || false}
                  onClick={() => { if (!sub.disabled && sub.onClick) sub.onClick(); }}
                >
                  {sub.icon && <span className="sludi-menu-item-icon">{sub.icon}</span>}
                  <span style={{ flex: 1 }}>{sub.label}</span>
                  {sub.shortcut && <span className="sludi-menu-item-shortcut">{sub.shortcut}</span>}
                </button>
              )
          )}
        </div>
      )}
    </div>
  );
}

// ─── Dropdown panel ─────────────────────────────────────────────────────────────
function MenuPanel({ items, variant, onClose }) {
  const panelRef = useRef(null);
  const panelClass = `sludi-menu-panel sludi-menu-panel-${variant}`;

  // close on outside click
  useEffect(() => {
    function handler(e) {
      if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  // close on Escape
  useEffect(() => {
    function handler(e) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div ref={panelRef} className={panelClass} role="menu" tabIndex={-1}>
      {items.map((item, i) => {
        if (item.divider) return <hr key={i} className="sludi-menu-divider" />;
        if (item.items)   return <SubMenuItem key={i} item={item} variant={variant} />;
        return (
          <button
            key={i}
            className="sludi-menu-item sludi-menu-item-accent"
            role="menuitem"
            aria-disabled={item.disabled || false}
            onClick={() => {
              if (!item.disabled) {
                if (item.onClick) item.onClick();
                onClose();
              }
            }}
          >
            {item.icon && <span className="sludi-menu-item-icon">{item.icon}</span>}
            <span style={{ flex: 1 }}>{item.label}</span>
            {item.shortcut && <span className="sludi-menu-item-shortcut">{item.shortcut}</span>}
          </button>
        );
      })}
    </div>
  );
}

// ─── Single top-level menu entry ────────────────────────────────────────────────
function MenuEntry({ menu, variant }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const close = useCallback(() => setOpen(false), []);

  return (
    <div style={{ position: "relative" }}>
      <button
        ref={triggerRef}
        className="sludi-menubar-trigger"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        disabled={menu.disabled}
      >
        {menu.icon && <span className="sludi-menu-item-icon">{menu.icon}</span>}
        {menu.label}
        <span className="sludi-menubar-trigger-chevron">
          <ChevronDown />
        </span>
      </button>

      {open && (
        <MenuPanel items={menu.items} variant={variant} onClose={close} />
      )}
    </div>
  );
}

// ─── MenuBar (root) ─────────────────────────────────────────────────────────────
function MenuBar({
  menus = [],
  variant = "solid",
  style: customStyle = {},
}) {
  return (
    <>
      <style>{MENUBAR_STYLES}</style>
      <div
        className={`sludi-menubar sludi-menubar-${variant}`}
        role="menubar"
        aria-label="Menu bar"
        style={customStyle}
      >
        {menus.map((menu, i) => (
          <MenuEntry key={i} menu={menu} variant={variant} />
        ))}
      </div>
    </>
  );
}

// ─── PropTypes ──────────────────────────────────────────────────────────────────
const itemShape = {
  label: PropTypes.string,
  icon: PropTypes.node,
  shortcut: PropTypes.string,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  onClick: PropTypes.func,
};
// items can nest one level
itemShape.items = PropTypes.arrayOf(PropTypes.shape(itemShape));

MenuBar.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
      items: PropTypes.arrayOf(PropTypes.shape(itemShape)).isRequired,
    })
  ),
  variant: PropTypes.oneOf(["solid", "dark", "glass"]),
  style: PropTypes.object,
};

export default MenuBar;
