
import Button from "../components/Button"
import { CircleFadingArrowUpIcon } from "lucide-react"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const Pink = Template.bind({})
Pink.args = {
  backgroundColor: "#ff5dbe",
  label: "Press Me",
  size: "md",
}

export const Purple = Template.bind({})
Purple.args = {
  backgroundColor: "#f2a9ff",
  label: "Press Me",
  size: "md",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "#ff5dbe",
  label: "Press Me",
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "#ff5dbe",
  label: "Press Me",
  size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "#ff5dbe",
  label: "This is a very looooooooooooong button ",
  size: "md",
}
export const IconButton = args => (
  <Button {...args}>
    <CircleFadingArrowUpIcon />
  </Button>
)

IconButton.args = {
  backgroundColor: "#ff5dbe",
  size: "md",
}

export const CustomRadius = Template.bind({})
CustomRadius.args = {
  backgroundColor: "#ff5dbe",
  label: "Press Me",
  size: "md",
  radius: "50rem",
}

export const CustomTextColor = Template.bind({})    
CustomTextColor.args = {
  backgroundColor: "#e7f1c4",
  textColor: "#ff5dbe",  
  label: "Press Me",
  size: "md",
}


export const ButtonWithIcon = args => (
  <Button {...args}>
    <CircleFadingArrowUpIcon /> 
    <span>Click Me</span>
  </Button>
) 
ButtonWithIcon.args = {
  backgroundColor: "#ff5dbe",
  size: "md",
}   

export const LoadingButton = Template.bind({})
LoadingButton.args = {
  backgroundColor: "#ff5dbe",
  label: "spinning",
  size: "md",
  loading: true
}