import React from "react";
import Navbar from "../components/Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "gradient", "glass"],
    },
    backgroundColor: { control: "color" },
    accentColor:     { control: "color" },
    gradientFrom:    { control: "color" },
    gradientTo:      { control: "color" },
    ctaTextColor:    { control: "color" },
    activeIndex:     { control: { type: "number", min: -1, max: 5 } },
    showLogin:       { control: "boolean" },
    logoIcon:        { control: "boolean" },
    logo:            { control: "text" },
    ctaLabel:        { control: "text" },
    loginLabel:      { control: "text" },
  },
};

const Template = (args) => <Navbar {...args} />;

// ─── Default (matches reference image) ───────────────────────────────────────

export const Default = Template.bind({});

Default.args = {
  logo: "Logo",
  logoIcon: true,
  links: [
    { label: "Home",          url: "#" },
    { label: "Discover",      url: "#" },
    { label: "Special Deals", url: "#" },
    { label: "Contact",       url: "#" },
  ],
  ctaLabel: "Sign Up",
  loginLabel: "Log In",
  showLogin: true,
  activeIndex: 0,
  variant: "solid",
  backgroundColor: "#ffffff",
  accentColor: "#2dd4bf",
  ctaTextColor: "#ffffff",
};




// ─── Dark Slate ───────────────────────────────────────────────────────────────

export const Dark = Template.bind({});
Dark.storyName = "Dark Theme";
Dark.args = {
  logo: "Logo",
  logoIcon: true,
  links: [
    { label: "Dashboard", url: "#" },
    { label: "Profile",   url: "#" },
    { label: "Settings",  url: "#" },
    { label: "Docs",      url: "#" },
  ],
  ctaLabel: "Upgrade",
  loginLabel: "Log In",
  showLogin: true,
  activeIndex: 0,
  variant: "solid",
   backgroundColor: "#1e1b4b",
  accentColor: "#a78bfa",
  ctaTextColor: "#1e1b4b",
};




export const Gradient = Template.bind({});
Gradient.args = {
  logo: "Logo",
  logoIcon: true,
  links: [
    { label: "Home",      url: "#" },
    { label: "Features",  url: "#" },
    { label: "Docs",      url: "#" },
    { label: "Contact",   url: "#" },
  ],
  ctaLabel: "Sign up",
  loginLabel: "Log In",
  showLogin: true,
  activeIndex: 0,
  variant: "gradient",
  gradientFrom: "#0f766e",
  gradientTo: "#0ea5e9",
  accentColor: "#ffffff",
  ctaTextColor: "#0f766e",
};


export const NoLogo = Template.bind({});
NoLogo.storyName = "No Logo";
NoLogo.args = {
  logo: "",
  logoIcon: false,
  links: [
    { label: "Home",     url: "#" },
    { label: "About",    url: "#" },
    { label: "Services", url: "#" },
    { label: "Contact",  url: "#" },
  ],
  ctaLabel: "Contact Us",
  showLogin: true,
  activeIndex: 0,
  variant: "solid",
  backgroundColor: "#ffffff",
  accentColor: "#10b981",
  ctaTextColor: "#ffffff",
};


export const NoLinks = Template.bind({});
NoLinks.storyName = "No Links";
NoLinks.args = {
  logo: "Logo",
  logoIcon: true,
  links: [],
  showLogin: true,
  variant: "solid",
  backgroundColor: "#ffffff",
  accentColor: "#2dd4bf",
  ctaTextColor: "#ffffff",
}; 