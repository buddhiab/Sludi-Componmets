import React, { useState } from "react"
import Checkbox from "../components/Checkbox"

export default {
  title: "Components/Checkbox",
  component: Checkbox,
}

const Template = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked || false)
  return (
    <div style={{ padding: "20px" }}>
      <Checkbox 
        {...args} 
        checked={isChecked} 
        onChange={(e) => setIsChecked(e.target.checked)} 
      />
    </div>
  )
}

export const Standard = Template.bind({})
Standard.args = {
  label: "I agree to the Terms and Conditions",
  helperText: "You must accept the terms before proceeding.",
}

export const WithError = Template.bind({})
WithError.args = {
  label: "Subscribe to newsletter",
  error: "This field is required.",
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: "Admin Access",
  checked: true,
  disabled: true,
  helperText: "You do not have permission to change this setting.",
}