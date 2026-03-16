import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

// ─── Styles (aligned with Navbar / Badge design language) ────────────────────
const SELECT_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  .sludi-select-wrap {
    position: relative;
    display: inline-block;
  }

  .sludi-select {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #111827;
    padding: 10px 40px 10px 14px;
    background-color: #ffffff;
    border: 1.5px solid #d1d5db;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    line-height: 1.4;
  }

  .sludi-select:hover:not(:disabled) {
    border-color: #9ca3af;
    box-shadow: 0 2px 8px rgba(0,0,0,0.09);
  }

  .sludi-select:focus:not(:disabled) {
    border-color: #ec4cac;
    box-shadow: 0 0 0 3px rgba(236,76,172,0.15), 0 2px 8px rgba(0,0,0,0.08);
  }

  .sludi-select:disabled {
    background-color: #f3f4f6;
    color: #9ca3af;
    cursor: not-allowed;
    border-color: #e5e7eb;
    box-shadow: none;
  }

  /* invalid state */
  .sludi-select-invalid {
    border-color: #f43f5e !important;
    box-shadow: 0 0 0 3px rgba(244,63,94,0.12) !important;
  }

  /* ── sizes ── */
  .sludi-select-sm {
    font-size: 12px;
    padding: 6px 34px 6px 10px;
    border-radius: 8px;
  }
  .sludi-select-md {
    font-size: 14px;
    padding: 10px 40px 10px 14px;
    border-radius: 10px;
  }
  .sludi-select-lg {
    font-size: 16px;
    padding: 13px 46px 13px 16px;
    border-radius: 12px;
  }

  /* ── custom chevron icon container ── */
  .sludi-select-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    display: flex;
    align-items: center;
    color: #6b7280;
    transition: color 0.2s ease, transform 0.2s ease;
  }

  .sludi-select-wrap:focus-within .sludi-select-icon {
    color: #ec4cac;
  }

  /* ── helper text ── */
  .sludi-select-helper {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    margin-top: 5px;
    display: block;
  }

  .sludi-select-helper-invalid {
    color: #f43f5e;
  }

  .sludi-select-helper-hint {
    color: #6b7280;
  }

  /* ── label ── */
  .sludi-select-label {
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    margin-bottom: 6px;
    display: block;
    letter-spacing: 0.01em;
  }
`;

// ─── Chevron SVG ─────────────────────────────────────────────────────────────
function ChevronIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Select ───────────────────────────────────────────────────────────────────
const Select = ({
  options = [],
  groups = [],
  placeholder = "Select an option",
  disabled = false,
  invalid = false,
  scrollable = false,
  size = "md",
  label,
  helperText,
  width = "220px",
  style: customStyle = {},
  onChange,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  const sizeClass = `sludi-select-${size}`;
  const invalidClass = invalid ? "sludi-select-invalid" : "";
  const classes = ["sludi-select", sizeClass, invalidClass].filter(Boolean).join(" ");

  const handleFocus = () => {
    if (scrollable) setOpen(true);
  };

  const handleBlur = () => {
    if (scrollable) setOpen(false);
  };

  const handleChange = (e) => {
    if (scrollable) setOpen(false);
    if (onChange) onChange(e);
  };

  return (
    <>
      <style>{SELECT_STYLES}</style>
      <div style={{ display: "inline-flex", flexDirection: "column", width }}>
        {label && (
          <label className="sludi-select-label">
            {label}
          </label>
        )}

        <div className="sludi-select-wrap" style={{ width: "100%" }}>
          <select
            ref={selectRef}
            className={classes}
            disabled={disabled}
            size={scrollable ? (open ? 5 : 1) : 1}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            style={customStyle}
            aria-invalid={invalid}
            {...props}
          >
            <option value="">{placeholder}</option>

            {options.map((opt, i) => (
              <option key={i} value={opt.value}>
                {opt.label}
              </option>
            ))}

            {groups.map((group, i) => (
              <optgroup key={i} label={group.label}>
                {group.options.map((opt, j) => (
                  <option key={j} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>

          {/* Custom chevron – hidden when scrollable list is open */}
          {!open && (
            <span className="sludi-select-icon">
              <ChevronIcon />
            </span>
          )}
        </div>

        {helperText && (
          <span
            className={[
              "sludi-select-helper",
              invalid ? "sludi-select-helper-invalid" : "sludi-select-helper-hint",
            ].join(" ")}
          >
            {helperText}
          </span>
        )}
      </div>
    </>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })
  ),
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })
      ),
    })
  ),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  scrollable: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  label: PropTypes.string,
  helperText: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
};

export default Select;