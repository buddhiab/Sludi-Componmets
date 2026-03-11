import React, { useState } from "react"
import PropTypes from "prop-types"

function DatePicker({
  label,
  value,
  onChange,
  min,
  max,
  error,
  helperText,
  disabled = false,
  width = "100%",
}) {
  const [isFocused, setIsFocused] = useState(false)

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    width: width,
  }

  const labelStyle = {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#0f172a",
  }

  let borderColor = "#e2e8f0"
  let boxShadow = "none"

  if (error) {
    borderColor = "#ef4444"
    if (isFocused) boxShadow = "0 0 0 3px rgba(239, 68, 68, 0.1)"
  } else if (isFocused) {
    borderColor = "#2563eb"
    boxShadow = "0 0 0 3px rgba(37, 99, 235, 0.1)"
  }

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    fontSize: "0.95rem",
    color: disabled ? "#94a3b8" : "#0f172a",
    backgroundColor: disabled ? "#f8fafc" : "#ffffff",
    border: `1px solid ${borderColor}`,
    borderRadius: "8px",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.2s ease",
    boxShadow: boxShadow,
    cursor: disabled ? "not-allowed" : "text",
    fontFamily: "inherit",
  }

  const helperStyle = {
    fontSize: "0.75rem",
    color: error ? "#ef4444" : "#64748b",
    fontWeight: error ? "500" : "400",
    marginTop: "2px",
  }

  return (
    <div style={containerStyle}>
      {label && <label style={labelStyle}>{label}</label>}
      <input
        type="date"
        style={inputStyle}
        value={value}
        onChange={onChange}
        min={min} 
        max={max} 
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {(error || helperText) && (
        <span style={helperStyle}>{error || helperText}</span>
      )}
    </div>
  )
}

DatePicker.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string, 
  onChange: PropTypes.func,
  min: PropTypes.string,
  max: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  width: PropTypes.string,
}

export default DatePicker