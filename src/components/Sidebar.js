import React, { useState } from "react"
import PropTypes from "prop-types"

function Sidebar({
    logoText,
    links,
    activeLink,
    collapsed = false,
    variant = "default",
    isOpen = false,
    onClose,
    onLinkClick
}) {
    const [expandedMenus, setExpandedMenus] = useState({})
    const [isHovered, setIsHovered] = useState(false)

    let isEffectivelyCollapsed = collapsed
    if (variant === "mini") {
        isEffectivelyCollapsed = !isHovered
    }

    const isDrawer = variant === "drawer"
    const sidebarWidth = isEffectivelyCollapsed ? "80px" : "250px"

    const containerStyle = {
        width: sidebarWidth,
        height: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #eaeaea",
        display: "flex",
        flexDirection: "column",
        fontFamily: "system-ui, -apple-system, sans-serif",
        transition: "width 0.3s ease, transform 0.3s ease",
        boxSizing: "border-box",
        position: isDrawer ? "fixed" : "relative",
        top: 0,
        left: 0,
        zIndex: isDrawer ? 50 : 1,
        transform: isDrawer && !isOpen ? "translateX(-100%)" : "translateX(0)",
    }

    const overlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: 40,
        display: isDrawer && isOpen ? "block" : "none",
        transition: "opacity 0.3s ease",
    }

    const headerStyle = {
        padding: "24px",
        fontSize: isEffectivelyCollapsed ? "1.25rem" : "1.5rem",
        fontWeight: "700",
        color: "#0f172a",
        textAlign: isEffectivelyCollapsed ? "center" : "left",
        borderBottom: "1px solid #eaeaea",
        whiteSpace: "nowrap",
        overflow: "hidden",
    }

    const handleMenuToggle = (label, e) => {
        e.stopPropagation()
        setExpandedMenus(prev => ({ ...prev, [label]: !prev[label] }))
    }

    return (
        <>
            {isDrawer && <div style={overlayStyle} onClick={onClose}></div>}

            <div
                style={containerStyle}
                onMouseEnter={() => variant === "mini" && setIsHovered(true)}
                onMouseLeave={() => variant === "mini" && setIsHovered(false)}
            >
                <div style={headerStyle}>
                    {isEffectivelyCollapsed ? (logoText ? logoText.charAt(0) : "S") : logoText || "Logo"}
                </div>

                <div style={{ flexGrow: 1, padding: "24px 0", overflowY: "auto", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {links.map((link, index) => {
                        const hasSubLinks = link.subLinks && link.subLinks.length > 0
                        const isActive = activeLink === link.label || (hasSubLinks && link.subLinks.some(sub => sub.label === activeLink))
                        const isExpanded = expandedMenus[link.label]

                        return (
                            <div key={index}>
                                <div
                                    style={{
                                        padding: "12px 20px",
                                        margin: "0 16px",
                                        borderRadius: "8px",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: isEffectivelyCollapsed ? "center" : "space-between",
                                        backgroundColor: isActive && !hasSubLinks ? "#f1f5f9" : "transparent",
                                        color: isActive ? "#0f172a" : "#64748b",
                                        fontWeight: isActive ? "600" : "500",
                                        transition: "all 0.2s ease",
                                        whiteSpace: "nowrap",
                                    }}
                                    onClick={(e) => {
                                        if (hasSubLinks && !isEffectivelyCollapsed) {
                                            handleMenuToggle(link.label, e)
                                        } else if (onLinkClick) {
                                            onLinkClick(link.label)
                                        }
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                        <span style={{ fontSize: "1.25rem" }}>{link.icon}</span>
                                        {!isEffectivelyCollapsed && <span>{link.label}</span>}
                                    </div>
                                    {!isEffectivelyCollapsed && hasSubLinks && (
                                        <span style={{ fontSize: "0.8rem", transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>▼</span>
                                    )}
                                </div>

                                {!isEffectivelyCollapsed && hasSubLinks && isExpanded && (
                                    <div style={{ display: "flex", flexDirection: "column", marginTop: "4px" }}>
                                        {link.subLinks.map((subLink, subIndex) => {
                                            const isSubActive = activeLink === subLink.label
                                            return (
                                                <div
                                                    key={subIndex}
                                                    style={{
                                                        padding: "10px 20px 10px 52px", // Indented text
                                                        margin: "0 16px",
                                                        borderRadius: "8px",
                                                        cursor: "pointer",
                                                        color: isSubActive ? "#0f172a" : "#64748b",
                                                        backgroundColor: isSubActive ? "#f8fafc" : "transparent",
                                                        fontSize: "0.9rem",
                                                        fontWeight: isSubActive ? "600" : "500",
                                                    }}
                                                    onClick={() => onLinkClick && onLinkClick(subLink.label)}
                                                >
                                                    {subLink.label}
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

Sidebar.propTypes = {
    logoText: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeLink: PropTypes.string,
    collapsed: PropTypes.bool,
    variant: PropTypes.oneOf(["default", "drawer", "mini"]),
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onLinkClick: PropTypes.func,
}

export default Sidebar