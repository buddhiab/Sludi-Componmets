import React from "react"
import Textarea from "../components/Textarea"

export default {
    title: "Components/Textarea",
    component: Textarea,
    argTypes: {
        onChange: { action: "changed" },
    },
}

const Template = args => (
    <div style={{ maxWidth: "500px", padding: "20px" }}>
        <Textarea {...args} />
    </div>
)

export const Standard = Template.bind({})
Standard.args = {
    label: "Project Description",
    placeholder: "Briefly describe the goals of this project...",
    helperText: "Maximum 500 characters.",
    rows: 4,
}

export const Tall = Template.bind({})
Tall.args = {
    label: "System Logs",
    placeholder: "Paste the crash logs here...",
    rows: 8,
}

export const WithError = Template.bind({})
WithError.args = {
    label: "Feedback",
    placeholder: "Write your feedback here...",
    error: "Feedback cannot be empty.",
    rows: 3,
}

export const Disabled = Template.bind({})
Disabled.args = {
    label: "Read-Only Notes",
    value: "These notes were automatically generated and cannot be edited.",
    disabled: true,
    rows: 3,
}