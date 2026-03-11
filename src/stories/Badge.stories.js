import React from "react";
import Badge from "../components/Badge";


const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const TagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);


const font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const mono = "ui-monospace, 'Cascadia Code', 'Fira Mono', monospace";

const Code = ({ children }) => (
  <code style={{
    background: "#f1f5f9",
    color: "#0f172a",
    borderRadius: "4px",
    padding: "1px 6px",
    fontSize: "13px",
    fontFamily: mono,
    border: "1px solid #e2e8f0",
  }}>
    {children}
  </code>
);



const Section = ({ title, description, children }) => (
  <div style={{ marginBottom: "48px" }}>
    <h2 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 6px 0", color: "#0f172a", fontFamily: font }}>
      {title}
    </h2>
    {description && (
      <p style={{ fontSize: "14px", color: "#475569", margin: "0 0 20px 0", lineHeight: 1.6, fontFamily: font }}>
        {description}
      </p>
    )}
    <div style={{
      border: "0",
      borderRadius: "10px",
      padding: "48px 32px",
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      alignItems: "center",
      justifyContent: "center",
      background: "#ffffff",
    }}>
      {children}
    </div>
  </div>
);




export default {
  title: "Components/Badge",
  component: Badge,
  parameters: { layout: "fullscreen" },
  argTypes: {

    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    loading: { control: "boolean" },
    children: { control: "text" },
  },
};


const Template = (args) => (
  <div style={{
    background: "#fff",
    padding: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "120px",
    fontFamily: font,
  }}>
    <Badge {...args} />
  </div>
);



export const Variants = () => (
  
    <Section>
    
      <Badge style={{ background: "#fdf2f8", color: "#db2777", border: "1px solid #f9a8d4" }}>Default</Badge>
      <Badge style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }}>Secondary</Badge>
      <Badge style={{ background: "#fff1f2", color: "#e11d48", border: "1px solid #fecdd3" }}>Destructive</Badge>
      <Badge style={{ background: "#eff6ff", color: "#2563eb", border: "1px solid #bfdbfe" }}>Outline</Badge>
      <Badge style={{ background: "#faf5ff", color: "#9333ea", border: "1px solid #e9d5ff" }}>Ghost</Badge>
    </Section>
);



export const Sizes = () => (

    <Section>
      <Badge style={{ background: "#fdf2f8", color: "#db2777", border: "1px solid #f9a8d4" }} size="sm">Small</Badge>
      <Badge style={{background: "#fdf2f8", color: "#db2777", border: "1px solid #f9a8d4" }} size="md">Medium</Badge>
      <Badge style={{ background: "#fdf2f8", color: "#db2777", border: "1px solid #f9a8d4" }} size="lg">Large</Badge>
    </Section>
 
);

export const CustomColors = () => (
  
   

      <Section >
        <Badge style={{ background: "#eff6ff", color: "#2563eb", border: "1px solid #bfdbfe" }}>Blue</Badge>
        <Badge style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }}>Green</Badge>
        <Badge style={{ background: "#f0f9ff", color: "#0284c7", border: "1px solid #bae6fd" }}>Sky</Badge>
        <Badge style={{ background: "#faf5ff", color: "#9333ea", border: "1px solid #e9d5ff" }}>Purple</Badge>
        <Badge style={{ background: "#fff1f2", color: "#e11d48", border: "1px solid #fecdd3" }}>Red</Badge>
        <Badge style={{ background: "#fffbeb", color: "#d97706", border: "1px solid #fde68a" }}>Amber</Badge>
        <Badge style={{ background: "#f0fdfa", color: "#0d9488", border: "1px solid #99f6e4" }}>Teal</Badge>
        <Badge style={{ background: "#fdf2f8", color: "#db2777", border: "1px solid #f9a8d4" }}>Pink</Badge>
      </Section>

      

      
);
CustomColors.storyName = "Custom Colors";

export const WithIcon = () => (
  
    <Section>
     
        <Badge style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }} icon={<CheckIcon />}>Success</Badge>
        <Badge style={{ background: "#fffbeb", color: "#d97706", border: "1px solid #fde68a" }} icon={<ZapIcon />}>Warning</Badge>
        <Badge style={{ background: "#eff6ff", color: "#2563eb", border: "1px solid #bfdbfe" }} icon={<BellIcon />}>Info</Badge>
        <Badge style={{ background: "#fff1f2", color: "#e11d48", border: "1px solid #fecdd3" }} icon={<ZapIcon />}>Error</Badge>
        <Badge style={{ background: "#faf5ff", color: "#9333ea", border: "1px solid #e9d5ff" }} icon={<StarIcon />}>Premium</Badge>
    </Section>

   
  
);
WithIcon.storyName = "With Icon";

export const IconOnly = () => (
     <Section>
      
      <Badge style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }} icon={<CheckIcon />}></Badge>
        <Badge style={{ background: "#fffbeb", color: "#d97706", border: "1px solid #fde68a" }} icon={<ZapIcon />}></Badge>
        <Badge style={{ background: "#eff6ff", color: "#2563eb", border: "1px solid #bfdbfe" }} icon={<BellIcon />}></Badge>
        <Badge style={{ background: "#fff1f2", color: "#e11d48", border: "1px solid #fecdd3" }} icon={<ZapIcon />}></Badge>
        <Badge style={{ background: "#faf5ff", color: "#9333ea", border: "1px solid #e9d5ff" }} icon={<StarIcon />}></Badge>
    

    </Section>
);
IconOnly.storyName = "Icon Only";


export const WithSpinner = () => (
  
    <Section>
        <Badge style={{ background: "#eff6ff", color: "#2563eb", border: "1px solid #bfdbfe" }} loading>Uploading</Badge>
        <Badge style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }} loading>Saving</Badge>
        <Badge style={{ background: "#faf5ff", color: "#9333ea", border: "1px solid #e9d5ff" }} loading>Processing</Badge>

    </Section>

   
);
WithSpinner.storyName = "With Spinner";





