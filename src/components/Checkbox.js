import React, { useState } from "react"
import PropTypes from "prop-types"

function Checkbox({ 
  label, 
  checked, 
  onChange, 
  disabled = false, 
  error, 
  helperText 
}) {
  const [isFocused, setIsFocused] = useState(false)

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  }

  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: disabled ? "not-allowed" : "pointer",
    position: "relative",
  }

  const hiddenInputStyle = {
    position: "absolute",
    opacity: 0,
    width: 0,
    height: 0,
    margin: 0,
  }

  let borderColor = checked ? "#2563eb" : "#e2e8f0"
  let backgroundColor = checked ? "#2563eb" : "#ffffff"
  
  if (error) {
    borderColor = "#ef4444"
    if (checked) backgroundColor = "#ef4444"
  }
  
  if (disabled) {
    borderColor = "#cbd5e1"
    backgroundColor = checked ? "#94a3b8" : "#f8fafc"
  }

  let boxShadow = "none"
  if (isFocused) {
    boxShadow = error ? "0 0 0 3px rgba(239, 68, 68, 0.1)" : "0 0 0 3px rgba(37, 99, 235, 0.1)"
  }

  const customBoxStyle = {
    width: "18px",
    height: "18px",
    borderRadius: "4px",
    border: `1px solid ${borderColor}`,
    backgroundColor: backgroundColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
    boxShadow: boxShadow,
    flexShrink: 0,
  }

  const labelStyle = {
    fontSize: "0.875rem",
    color: disabled ? "#94a3b8" : "#0f172a",
    userSelect: "none", 
  }

  const helperStyle = {
    fontSize: "0.75rem",
    color: error ? "#ef4444" : "#64748b",
    fontWeight: error ? "500" : "400",
    marginLeft: "28px", 
  }

  return (
    <div style={containerStyle}>
      <label style={wrapperStyle}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          style={hiddenInputStyle}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div style={customBoxStyle}>
          {checked && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        {label && <span style={labelStyle}>{label}</span>}
      </label>
      {(error || helperText) && (
        <span style={helperStyle}>{error || helperText}</span>
      )}
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
}

export default Checkbox