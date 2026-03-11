import React from "react"
import Input from "../components/Input"

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    onChange: { action: "changed" },
  },
}

const Template = args => (
  <div style={{ maxWidth: "400px", padding: "20px" }}>
    <Input {...args} />
  </div>
)

export const StandardText = Template.bind({})
StandardText.args = {
  label: "Full Name",
  placeholder: "Enter your full name",
  type: "text",
  helperText: "This name will be displayed on your profile.",
}

export const Password = Template.bind({})
Password.args = {
  label: "Password",
  placeholder: "Enter your password",
  type: "password",
}

export const SearchWithIcon = Template.bind({})
SearchWithIcon.args = {
  placeholder: "Search for users, projects...",
  type: "search",
  icon: "🔍", 
}

export const NumberInput = Template.bind({})
NumberInput.args = {
  label: "Age",
  placeholder: "0",
  type: "number",
  width: "120px",
}

export const WithError = Template.bind({})
WithError.args = {
  label: "Email Address",
  placeholder: "name@company.com",
  type: "email",
  error: "Please enter a valid email address.",
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: "Username",
  value: "BUDDHI",
  disabled: true,
}