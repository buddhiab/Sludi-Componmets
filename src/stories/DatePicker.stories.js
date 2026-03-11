import React, { useState } from "react"
import DatePicker from "../components/DatePicker"

export default {
  title: "Components/DatePicker",
  component: DatePicker,
}

const Template = (args) => {
  const [date, setDate] = useState(args.value || "")
  
  return (
    <div style={{ maxWidth: "300px", padding: "20px" }}>
      <DatePicker 
        {...args} 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
    </div>
  )
}

export const Standard = Template.bind({})
Standard.args = {
  label: "Start Date",
  helperText: "Select when the project will begin.",
}

export const PreFilled = Template.bind({})
PreFilled.args = {
  label: "Date of Birth",
  value: "1995-08-15", 
}

export const WithError = Template.bind({})
WithError.args = {
  label: "Deadline",
  error: "Please select a valid deadline.",
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: "Account Created On",
  value: "2024-01-01",
  disabled: true,
  helperText: "This value cannot be modified.",
}

export const DateRangeRestricted = Template.bind({})
DateRangeRestricted.args = {
  label: "Schedule Meeting",
  min: "2026-03-11", 
  max: "2026-12-31", 
  helperText: "Please choose a date within the current year.",
}