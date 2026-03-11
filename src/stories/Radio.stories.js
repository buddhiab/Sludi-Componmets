import React, { useState } from "react"
import Radio from "../components/Radio"

export default {
  title: "Components/Radio",
  component: Radio,
}

const TemplateGroup = (args) => {
  const [selectedValue, setSelectedValue] = useState("option1")

  const handleChange = (e) => {
    setSelectedValue(e.target.value)
  }

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <Radio 
        name="exampleGroup"
        value="option1"
        label="Standard Delivery" 
        helperText="3-5 business days."
        checked={selectedValue === "option1"}
        onChange={handleChange}
      />
      <Radio 
        name="exampleGroup"
        value="option2"
        label="Express Delivery" 
        helperText="1-2 business days."
        checked={selectedValue === "option2"}
        onChange={handleChange}
      />
    </div>
  )
}

export const StandardGroup = TemplateGroup.bind({})