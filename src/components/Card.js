import PropTypes from "prop-types"
import Button from "./Button"

function Card({
  title,
  content,
  imageUrl,
  footerText,
  badgeText,
  buttonLabel,
  onButtonClick,
  buttonColor,
  width = "md",
  interactive = false,
  isProfile = false,
  handleClick
}) {
  let cardWidth = "300px"
  if (width === "sm") cardWidth = "240px"
  if (width === "lg") cardWidth = "400px"

  const cardStyle = {
    width: cardWidth,
    border: "1px solid #eaeaea",
    borderRadius: "12px",
    overflow: "hidden",
    fontFamily: "system-ui, -apple-system, sans-serif",
    backgroundColor: "#ffffff",
    boxShadow: interactive ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "0 2px 4px rgba(0,0,0,0.05)",
    cursor: interactive ? "pointer" : "default",
    transition: "transform 0.2s, box-shadow 0.2s",
  }

  const imgStyle = isProfile ? {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "24px auto 0 auto",
    display: "block",
  } : {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  }

  const bodyStyle = {
    padding: "20px",
    textAlign: isProfile ? "center" : "left",
  }

  const badgeStyle = {
    display: "inline-block",
    padding: "4px 10px",
    backgroundColor: "#f1f5f9",
    color: "#475569",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "600",
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  }

  const titleStyle = {
    margin: "0 0 8px 0",
    fontSize: "1.25rem",
    color: "#0f172a",
    fontWeight: "600",
  }

  const contentStyle = {
    margin: "0",
    color: "#475569",
    fontSize: "0.95rem",
    lineHeight: "1.5",
  }

  const footerStyle = {
    padding: "16px 20px",
    backgroundColor: "#f8fafc",
    borderTop: "1px solid #eaeaea",
    fontSize: "0.875rem",
    color: "#64748b",
    fontWeight: "600",
    display: "flex",
    justifyContent: (isProfile || (!footerText && buttonLabel)) ? "center" : "space-between",
    alignItems: "center"
  }

  return (
    <div style={cardStyle} onClick={handleClick}>
      {imageUrl && <img src={imageUrl} alt={title || "Card media"} style={imgStyle} />}

      <div style={bodyStyle}>
        {badgeText && <span style={badgeStyle}>{badgeText}</span>}
        {title && <h3 style={titleStyle}>{title}</h3>}
        {content && <p style={contentStyle}>{content}</p>}
      </div>

      {(footerText || buttonLabel) && (
        <div style={footerStyle}>
          {footerText && <span>{footerText}</span>}
          {buttonLabel && (
            <Button
              label={buttonLabel}
              size="sm"
              backgroundColor={buttonColor}
              handleClick={(e) => {
                if (e && e.stopPropagation) e.stopPropagation();
                if (onButtonClick) onButtonClick();
              }}
            />
          )}
        </div>
      )}
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  footerText: PropTypes.string,
  badgeText: PropTypes.string,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  buttonColor: PropTypes.string,  
  width: PropTypes.oneOf(["sm", "md", "lg"]),
  interactive: PropTypes.bool,
  isProfile: PropTypes.bool,
  handleClick: PropTypes.func,
}

export default Card