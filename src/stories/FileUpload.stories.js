import React from "react"
import FileUpload from "../components/FileUpload"

export default {
    title: "Components/FileUpload",
    component: FileUpload,
    argTypes: {
        onChange: { action: "file selected" },
    },
}

const Template = (args) => (
    <div style={{ maxWidth: "500px", padding: "20px" }}>
        <FileUpload {...args} />
    </div>
)

export const Standard = Template.bind({})
Standard.args = {
    label: "Upload Document",
    helperText: "PDF, DOCX, or TXT up to 10MB.",
}

export const ImagesOnly = Template.bind({})
ImagesOnly.args = {
    label: "Profile Picture",
    accept: "image/png, image/jpeg",
    helperText: "PNG or JPG formats only.",
}

export const MultipleFiles = Template.bind({})
MultipleFiles.args = {
    label: "Project Assets",
    multiple: true,
    helperText: "You can select multiple files at once.",
}

export const WithError = Template.bind({})
WithError.args = {
    label: "Tax Return Document",
    error: "File size exceeds the 10MB limit. Please upload a smaller file.",
}

export const Disabled = Template.bind({})
Disabled.args = {
    label: "Legacy System Upload",
    disabled: true,
    helperText: "Uploading is temporarily disabled during maintenance.",
}