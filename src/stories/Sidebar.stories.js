import React from "react"
import Sidebar from "../components/Sidebar"

export default {
    title: "Components/Sidebar",
    component: Sidebar,
    argTypes: {
        onLinkClick: { action: "navigated to" },
        onClose: { action: "overlay clicked to close" }
    },
}

const standardLinks = [
    { label: "Dashboard", icon: "📊" },
    { label: "Analytics", icon: "📈" },
    { label: "Projects", icon: "📁" },
]


const nestedLinks = [
    ...standardLinks,
    {
        label: "Settings",
        icon: "⚙️",
        subLinks: [
            { label: "Profile" },
            { label: "Security" },
            { label: "Notifications" }
        ]
    },
]


const Template = args => (
    <div style={{ backgroundColor: "#f8fafc", height: "100vh", padding: "0" }}>
        <Sidebar {...args} />
    </div>
)


export const Static = Template.bind({})
Static.args = {
    logoText: "StaticApp",
    links: standardLinks,
    activeLink: "Dashboard",
    collapsed: false,
}


export const Collapsible = Template.bind({})
Collapsible.args = {
    logoText: "CollapseApp",
    links: standardLinks,
    activeLink: "Projects",
    collapsed: true, 
}


export const DrawerSlide = Template.bind({})
DrawerSlide.args = {
    logoText: "Drawer Sidebar",
    links: standardLinks,
    variant: "drawer",
    isOpen: true, 
}

export const MiniHover = Template.bind({})
MiniHover.args = {
    logoText: "Mini Sidebar",
    links: standardLinks,
    activeLink: "Analytics",
    variant: "mini",
}

export const MultiLevel = Template.bind({})
MultiLevel.args = {
    logoText: "Multi Level Sidebar",
    links: nestedLinks,
    activeLink: "Security",
    collapsed: false,
}