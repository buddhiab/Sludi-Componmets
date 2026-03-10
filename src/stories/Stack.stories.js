import React from "react"
import Stack from "../components/Stack"
import Card from "../components/Card"

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
}

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <Card
        key={n}
        title={`Example Card ${n + 1}`}
        content="This card is being automatically laid out by your Stack component."
        width="sm"
        footerText="View Details"
        interactive={true}
      />
    ))}
  </Stack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: "row",
  spacing: 4,
  wrap: false,
}

export const Vertical = Template.bind({})
Vertical.args = {
  direction: "column",
  spacing: 4,
  wrap: false,
}

export const NoSpacing = Template.bind({})
NoSpacing.args = {
  direction: "row",
  spacing: 0,
  wrap: false,
}

export const WrapOverflow = Template.bind({})
WrapOverflow.args = {
  numberOfChildren: 8,
  direction: "row",
  spacing: 6,
  wrap: true,
}

export const Empty = Template.bind({})
Empty.args = {
  numberOfChildren: 0,
  direction: "row",
  spacing: 2,
  wrap: false,
}