import React, { useState } from "react"
import PropTypes from "prop-types"

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  helperText,
  disabled = false,
  icon,
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

  const inputWrapperStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
  }

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    paddingLeft: icon ? "36px" : "14px", 
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
  }

  const iconStyle = {
    position: "absolute",
    left: "12px",
    color: "#64748b",
    display: "flex",
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
      <div style={inputWrapperStyle}>
        {icon && <span style={iconStyle}>{icon}</span>}
        <input
          type={type}
          style={inputStyle}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}   
          onBlur={() => setIsFocused(false)}   
        />
      </div>
      {(error || helperText) && (
        <span style={helperStyle}>{error || helperText}</span>
      )}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number", "search"]),
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  width: PropTypes.string,
}

export default Input