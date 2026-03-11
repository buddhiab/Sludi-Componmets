import React, { useState } from "react"
import Popup from "../components/Popup"
import Button from "../components/Button"
import Stack from "../components/Stack"

export default {
    title: "Components/Popup",
    component: Popup,
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["success", "error", "warning", "info", "question"],
        },
        onConfirm: { action: "onConfirm" },
        onCancel: { action: "onCancel" },
    },
}

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div style={{ padding: "2rem" }}>
            <Stack spacing={2} direction="row">
                <Button
                    label="Show Popup"
                    backgroundColor="#007bff"
                    handleClick={() => setIsOpen(true)}
                />
            </Stack>

            <Popup
                {...args}
                isOpen={args.isOpen !== undefined ? args.isOpen : isOpen}
                onConfirm={(e) => {
                    if (args.onConfirm) args.onConfirm(e)
                    setIsOpen(false)
                }}
                onCancel={(e) => {
                    if (args.onCancel) args.onCancel(e)
                    setIsOpen(false)
                }}
            />
        </div>
    )
}

export const Success = Template.bind({})
Success.args = {
    title: "Success!",
    message: "Your action has been completed successfully.",
    type: "success",
    confirmText: "Great",
}

export const Error = Template.bind({})
Error.args = {
    title: "Error!",
    message: "Something went wrong. Please try again.",
    type: "error",
    confirmText: "Close",
}

export const Warning = Template.bind({})
Warning.args = {
    title: "Are you sure?",
    message: "You won't be able to revert this action!",
    type: "warning",
    confirmText: "Yes, delete it!",
    cancelText: "Cancel",
    showCancel: true,
}

export const Info = Template.bind({})
Info.args = {
    title: "Did you know?",
    message: "You can customize the colors and text of this popup.",
    type: "info",
    confirmText: "Got it",
}

export const Question = Template.bind({})
Question.args = {
    title: "Save changes?",
    message: "Do you want to save the changes you've made?",
    type: "question",
    confirmText: "Save",
    cancelText: "Don't save",
    showCancel: true,
}

export const StaticOpenState = Template.bind({})
StaticOpenState.args = {
    isOpen: true,
    title: "Static Open Popup",
    message: "This popup is set to be open by default in the story args.",
    type: "info",
    confirmText: "Close",
}