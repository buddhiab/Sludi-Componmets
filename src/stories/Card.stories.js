import Card from "../components/Card"

export default {
    title: "Components/Card",
    component: Card,
    argTypes: {
        handleClick: { action: "handleClick" },
        width: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
        }
    },
}

const Template = args => <Card {...args} />

export const Basic = Template.bind({})
Basic.args = {
    title: "Example Title",
    content: "This is an example content area where you can place placeholder text.",
    width: "md",
    interactive: false,
}

export const WithImage = Template.bind({})
WithImage.args = {
    title: "Example Product",
    content: "Example content",
    imageUrl: "https://via.placeholder.com/300x200",
    footerText: "Rs xxx",
    width: "md",
    interactive: true,
}

export const SmallMetric = Template.bind({})
SmallMetric.args = {
    title: "Example metric title",
    content: "Rs xxx",
    footerText: "Example text",
    width: "sm",
    interactive: false,
}

export const LargeAlert = Template.bind({})
LargeAlert.args = {
    title: "Example large title",
    content: "Example content",
    footerText: "Example text",
    width: "lg",
    interactive: true,
}

export const ProfileCard = Template.bind({})
ProfileCard.args = {
    title: "Example Profile Name",
    content: "Example Role or Short Biography",
    imageUrl: "https://via.placeholder.com/150",
    footerText: "View Full Profile",
    width: "sm",
    interactive: true,
    isProfile: true,
}

export const TaskCard = Template.bind({})
TaskCard.args = {
    badgeText: "Example Status",
    title: "Example Task Name",
    content: "Example description of the task requirements and acceptance criteria.",
    footerText: "Due: Example Date",
    width: "md",
    interactive: true,
}

export const ActionCard = Template.bind({})
ActionCard.args = {
    title: "Example Action",
    content: "Click this card to trigger a specific example action or workflow.",
    footerText: "→ Proceed",
    width: "sm",
    interactive: true,
}

export const WithButtonCard = Template.bind({})
WithButtonCard.args = {
  title: "Example Action Required",
  content: "Please review the attached example documentation and approve the changes.",
  footerText: "Pending Review",
  buttonLabel: "Approve",
  buttonColor: "#2563eb",
  width: "md",
  interactive: true,
}
