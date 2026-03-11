import React, { useState } from "react"
import PropTypes from "prop-types"

function FileUpload({
  label,
  onChange,
  error,
  helperText,
  disabled = false,
  accept,
  multiple = false,
  width = "100%",
}) {
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map(file => file.name)
      setSelectedFiles(fileNames)
    } else {
      setSelectedFiles([])
    }
    
    if (onChange) {
      onChange(e)
    }
  }

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

  let borderColor = "#cbd5e1"
  let backgroundColor = disabled ? "#f8fafc" : "#ffffff"
  
  if (error) {
    borderColor = "#ef4444"
    if (isHovered && !disabled) backgroundColor = "#fef2f2" 
  } else if (isFocused || (isHovered && !disabled)) {
    borderColor = "#2563eb"
    backgroundColor = "#f0fdfa" 
  }

  let boxShadow = "none"
  if (isFocused) {
    boxShadow = error ? "0 0 0 3px rgba(239, 68, 68, 0.1)" : "0 0 0 3px rgba(37, 99, 235, 0.1)"
  }

  const dropzoneStyle = {
    width: "100%",
    padding: "32px 20px",
    border: `2px dashed ${borderColor}`,
    borderRadius: "8px",
    backgroundColor: backgroundColor,
    textAlign: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
    boxShadow: boxShadow,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  }

  const hiddenInputStyle = {
    position: "absolute",
    opacity: 0,
    width: 0,
    height: 0,
    margin: 0,
  }

  const iconStyle = {
    fontSize: "2rem",
    color: disabled ? "#94a3b8" : (error ? "#ef4444" : "#64748b"),
  }

  const mainTextStyle = {
    fontSize: "0.95rem",
    color: disabled ? "#94a3b8" : "#0f172a",
    fontWeight: "500",
  }

  const subTextStyle = {
    fontSize: "0.8rem",
    color: "#64748b",
  }

  const helperStyle = {
    fontSize: "0.75rem",
    color: error ? "#ef4444" : "#64748b",
    fontWeight: error ? "500" : "400",
    marginTop: "2px",
  }

  return (
    <div style={containerStyle}>
      {label && <span style={labelStyle}>{label}</span>}
      
      <label 
        style={dropzoneStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          type="file"
          onChange={handleFileChange}
          disabled={disabled}
          accept={accept}
          multiple={multiple}
          style={hiddenInputStyle}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        
        {selectedFiles.length > 0 ? (
          <>
            <span style={iconStyle}>📄</span>
            <span style={mainTextStyle}>
              {selectedFiles.length === 1 ? selectedFiles[0] : `${selectedFiles.length} files selected`}
            </span>
            <span style={subTextStyle}>Click to change</span>
          </>
        ) : (
          <>
            <span style={iconStyle}>📁</span>
            <span style={mainTextStyle}>Click to upload a file</span>
            <span style={subTextStyle}>or drag and drop it here</span>
          </>
        )}
      </label>

      {(error || helperText) && (
        <span style={helperStyle}>{error || helperText}</span>
      )}
    </div>
  )
}

FileUpload.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  width: PropTypes.string,
}

export default FileUpload