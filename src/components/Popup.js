import PropTypes from "prop-types"
import Stack from "./Stack"
import Button from "./Button"

function Popup({
    isOpen,
    title,
    message,
    type = "info",
    confirmText = "OK",
    cancelText = "Cancel",
    onConfirm,
    onCancel,
    showCancel = false,
}) {
    if (!isOpen) return null

    const backdropStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
    }

    const getTypeColor = () => {
        switch (type) {
            case "success":
                return "#a5dc86"
            case "error":
                return "#f27474"
            case "warning":
                return "#f8bb86"
            case "info":
                return "#3fc3ee"
            case "question":
                return "#87adbd"
            default:
                return "#7066e0"
        }
    }

    const getIconContent = () => {
        switch (type) {
            case "success":
                return "✓"
            case "error":
                return "✕"
            case "warning":
                return "!"
            case "info":
                return "i"
            case "question":
                return "?"
            default:
                return ""
        }
    }

    const popupStyle = {
        backgroundColor: "#fff",
        borderRadius: "5px",
        padding: "2rem",
        width: "32rem",
        maxWidth: "90%",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "inherit",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const iconStyle = {
        width: "80px",
        height: "80px",
        border: `4px solid ${getTypeColor()}`,
        borderRadius: "50%",
        margin: "0 auto 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: getTypeColor(),
        fontSize: "3rem",
        fontWeight: "bold",
        boxSizing: "border-box",
    }

    const titleStyle = {
        color: "#545454",
        fontSize: "1.875rem",
        fontWeight: 600,
        margin: "0 0 1rem",
        textAlign: "center",
    }

    const messageStyle = {
        color: "#545454",
        fontSize: "1.125rem",
        margin: "0 0 2rem",
        fontWeight: 400,
        textAlign: "center",
    }

    return (
        <div style={backdropStyle}>
            <div style={popupStyle}>
                <div style={iconStyle}>{getIconContent()}</div>
                <h2 style={titleStyle}>{title}</h2>
                <div style={messageStyle}>{message}</div>
                <Stack spacing={4} direction="row" wrap={true}>
                    {showCancel && (
                        <Button
                            label={cancelText}
                            backgroundColor="#aaa"
                            handleClick={onCancel}
                            size="md"
                        />
                    )}
                    <Button
                        label={confirmText}
                        backgroundColor={getTypeColor()}
                        handleClick={onConfirm}
                        size="md"
                    />
                </Stack>
            </div>
        </div>
    )
}

Popup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    type: PropTypes.oneOf(["success", "error", "warning", "info", "question"]),
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    showCancel: PropTypes.bool,
}

export default Popup