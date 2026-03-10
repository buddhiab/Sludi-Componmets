import Navbar from "../components/Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark",  value: "#ffffff" },
        { name: "light", value: "#f5f5f5" },
      ],
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "gradient", "glass"],
    },
    backgroundColor: { control: "color" },
    gradientFrom:    { control: "color" },
    gradientTo:      { control: "color" },
    activeIndex:     { control: { type: "number", min: -1, max: 5 } },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: "Logo",
  backgroundColor: "#f850ba",
  links: [
    { label: "Home",     url: "#" },
    { label: "About",    url: "#" },
    { label: "Services", url: "#" },
    { label: "Contact",  url: "#" },
  ],
  ctaLabel: "Get Started",
  activeIndex: 0,
  variant: "solid",
};



export const LightNavbar = Template.bind({});
LightNavbar.storyName = "Light ";
LightNavbar.args = {
  logo: "logo",
  backgroundColor: "#c084fc",
  links: [
    { label: "Home",     url: "#" },
    { label: "Products", url: "#" },
    { label: "Pricing",  url: "#" },
    { label: "Login",    url: "#" },
  ],
  ctaLabel: "Join Now",
  activeIndex: 0,
  variant: "solid",
};


export const DarkSlate = Template.bind({});
DarkSlate.args = {
  logo: "logo",
  backgroundColor: "#1e293b",
  links: [
    { label: "Dashboard", url: "#" },
    { label: "Profile",   url: "#" },
    { label: "Settings",  url: "#" },
    { label: "Logout",    url: "#" },
  ],
  ctaLabel: "Upgrade",
  activeIndex: 0,
  variant: "solid",
};

export const NoLinks = Template.bind({});
NoLinks.args = {
  logo: "Brand",
  backgroundColor: "#f850ba",
  links: [],
  ctaLabel: "Get Started",
  variant: "solid",
};

export const NoLogo = Template.bind({});
NoLogo.args = {
  backgroundColor: "#7c3aed",
  links: [
    { label: "Home",     url: "#" },
    { label: "About",    url: "#" },
    { label: "Services", url: "#" },
    { label: "Contact",  url: "#" },
  ],
  ctaLabel: "Contact Us",
  variant: "solid",
};

export const CustomLinks = Template.bind({});
CustomLinks.args = {
  logo: "MySite",
  gradientFrom: "#f850ba",
  gradientTo:   "#a855f7",
  links: [
    { label: "Dashboard", url: "#" },
    { label: "Profile",   url: "#" },
    { label: "Settings",  url: "#" },
    { label: "Logout",    url: "#" },
  ],
  ctaLabel: "New Project",
  activeIndex: 0,
  variant: "gradient",
};

