import PropTypes from "prop-types"

function Button({
  label,
  children,
  backgroundColor = "#ec4cac",
  textColor = "white",
  size = "md",
  radius = "0.50rem",
  handleClick,
  loading = false
}) {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5

  const style = {
    backgroundColor,
    color: textColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius: radius,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    cursor: "pointer",
    opacity: loading ? 0.7 : 1
  }

  const spinnerStyle = {
    width: "16px",
    height: "16px",
    border: "2px solid white",
    borderTop: "2px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  }

  return (
    <>
      <style>
        {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        `}
      </style>

      <button onClick={handleClick} style={style} disabled={loading}>
  {loading && <span style={spinnerStyle}></span>}
{!loading && (children ? children : label)}
      </button>
    </>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
  loading: PropTypes.bool
}

export default Button