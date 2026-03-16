import React from "react";
import MenuBar from "../components/MenuBar";

// ─── Shared icon set ───────────────────────────────────────────────────────────
const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);
const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const ViewIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const HelpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);
const SaveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);
const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const ZoomInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);
const ZoomOutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

// ─── Shared menu data ──────────────────────────────────────────────────────────
const defaultMenus = [
  {
    label: "File",
    icon: <FileIcon />,
    items: [
      { label: "New File",       icon: <FileIcon />,  shortcut: "⌘N",  onClick: () => alert("New File") },
      { label: "Open…",          icon: <FileIcon />,  shortcut: "⌘O",  onClick: () => alert("Open") },
      { label: "Save",           icon: <SaveIcon />,  shortcut: "⌘S",  onClick: () => alert("Save") },
      { divider: true },
      { label: "Export as…",     icon: <CopyIcon />,  items: [
          { label: "PDF",          onClick: () => alert("Export PDF") },
          { label: "PNG",          onClick: () => alert("Export PNG") },
          { label: "SVG",          onClick: () => alert("Export SVG") },
        ]
      },
      { divider: true },
      { label: "Delete",         icon: <TrashIcon />, disabled: true },
    ],
  },
  {
    label: "Edit",
    icon: <EditIcon />,
    items: [
      { label: "Undo",  shortcut: "⌘Z",   onClick: () => alert("Undo") },
      { label: "Redo",  shortcut: "⌘⇧Z",  onClick: () => alert("Redo") },
      { divider: true },
      { label: "Cut",   shortcut: "⌘X",   onClick: () => alert("Cut") },
      { label: "Copy",  icon: <CopyIcon />, shortcut: "⌘C", onClick: () => alert("Copy") },
      { label: "Paste", shortcut: "⌘V",   onClick: () => alert("Paste") },
      { divider: true },
      { label: "Preferences", icon: <SettingsIcon />, onClick: () => alert("Preferences") },
    ],
  },
  {
    label: "View",
    icon: <ViewIcon />,
    items: [
      { label: "Zoom In",       icon: <ZoomInIcon />,  shortcut: "⌘+",  onClick: () => alert("Zoom In") },
      { label: "Zoom Out",      icon: <ZoomOutIcon />, shortcut: "⌘-",  onClick: () => alert("Zoom Out") },
      { label: "Reset Zoom",    shortcut: "⌘0",      onClick: () => alert("Reset Zoom") },
      { divider: true },
      { label: "Toggle Sidebar", shortcut: "⌘B",     onClick: () => alert("Sidebar") },
    ],
  },
  {
    label: "Help",
    icon: <HelpIcon />,
    items: [
      { label: "Documentation",  onClick: () => alert("Docs") },
      { label: "Keyboard Shortcuts", shortcut: "⌘/", onClick: () => alert("Shortcuts") },
      { divider: true },
      { label: "About",          onClick: () => alert("About") },
    ],
  },
];

// ─── Storybook meta ──────────────────────────────────────────────────────────────
export default {
  title: "Components/MenuBar",
  component: MenuBar,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "dark", "glass"],
    },
  },
};

const Template = (args) => <MenuBar {...args} />;

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default = Template.bind({});
Default.args = {
  menus: defaultMenus,
  variant: "solid",
};

export const DarkVariant = Template.bind({});
DarkVariant.storyName = "Dark";
DarkVariant.args = {
  menus: defaultMenus,
  variant: "dark",
};
DarkVariant.parameters = {
  backgrounds: { default: "dark", values: [{ name: "dark", value: "#0f0c29" }] },
};

export const GlassVariant = () => (
  <div
    style={{
      background: "linear-gradient(135deg, #667eea 0%, #ec4cac 100%)",
      padding: "60px 40px",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <MenuBar menus={defaultMenus} variant="glass" />
  </div>
);
GlassVariant.storyName = "Glass (on gradient)";

export const NoIcons = Template.bind({});
NoIcons.storyName = "No Icons";
NoIcons.args = {
  variant: "solid",
  menus: [
    {
      label: "File",
      items: [
        { label: "New",   shortcut: "⌘N", onClick: () => alert("New") },
        { label: "Open",  shortcut: "⌘O", onClick: () => alert("Open") },
        { label: "Save",  shortcut: "⌘S", onClick: () => alert("Save") },
        { divider: true },
        { label: "Exit",  onClick: () => alert("Exit") },
      ],
    },
    {
      label: "Edit",
      items: [
        { label: "Undo",  shortcut: "⌘Z" },
        { label: "Redo",  shortcut: "⌘⇧Z" },
        { divider: true },
        { label: "Copy",  shortcut: "⌘C" },
        { label: "Paste", shortcut: "⌘V" },
      ],
    },
    {
      label: "View",
      items: [
        { label: "Zoom In",     shortcut: "⌘+" },
        { label: "Zoom Out",    shortcut: "⌘-" },
        { label: "Full Screen", shortcut: "⌘⇧F" },
      ],
    },
  ],
};

export const WithDisabledItems = Template.bind({});
WithDisabledItems.storyName = "Disabled Items";
WithDisabledItems.args = {
  variant: "solid",
  menus: [
    {
      label: "File",
      items: [
        { label: "New",    shortcut: "⌘N", onClick: () => alert("New") },
        { label: "Save",   shortcut: "⌘S", disabled: true },
        { label: "Delete", icon: <TrashIcon />, disabled: true },
        { divider: true },
        { label: "Quit",   onClick: () => alert("Quit") },
      ],
    },
    {
      label: "Locked Menu",
      disabled: true,
      items: [],
    },
  ],
};

export const WithSubmenus = Template.bind({});
WithSubmenus.storyName = "Nested Submenus";
WithSubmenus.args = {
  variant: "solid",
  menus: [
    {
      label: "File",
      items: [
        { label: "New",  shortcut: "⌘N", onClick: () => alert("New") },
        {
          label: "Export as…",
          icon: <CopyIcon />,
          items: [
            { label: "PDF",  onClick: () => alert("PDF") },
            { label: "PNG",  onClick: () => alert("PNG") },
            { label: "SVG",  onClick: () => alert("SVG") },
            { divider: true },
            { label: "CSV",  disabled: true },
          ],
        },
        {
          label: "Share with…",
          items: [
            { label: "Email Link",   onClick: () => alert("Email") },
            { label: "Copy Link",    icon: <CopyIcon />, onClick: () => alert("Copy") },
          ],
        },
        { divider: true },
        { label: "Close", onClick: () => alert("Close") },
      ],
    },
    {
      label: "View",
      items: [
        { label: "Zoom In",  icon: <ZoomInIcon />,  shortcut: "⌘+",  onClick: () => alert("Zoom In") },
        { label: "Zoom Out", icon: <ZoomOutIcon />, shortcut: "⌘-",  onClick: () => alert("Zoom Out") },
      ],
    },
  ],
};

export const Minimal = Template.bind({});
Minimal.args = {
  variant: "solid",
  menus: [
    {
      label: "Actions",
      items: [
        { label: "Refresh", onClick: () => alert("Refresh") },
        { label: "Settings", icon: <SettingsIcon />, onClick: () => alert("Settings") },
        { divider: true },
        { label: "Logout", onClick: () => alert("Logout") },
      ],
    },
  ],
};
