import Select from "../components/Select";

export default {
  title: "Components/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Options = Template.bind({});
Options.args = {
  options: [
    { label: "Apple", value: "apple" },
    { label: "Orange", value: "orange" },
    { label: "Mango", value: "mango" },
  ],
};

export const SelectGroups = Template.bind({});
SelectGroups.args = {
  groups: [
    {
      label: "Fruits",
      options: [
        { label: "Apple", value: "apple" },
        { label: "Mango", value: "mango" },
      ],
    },
    {
      label: "Vegetables",
      options: [
        { label: "Carrot", value: "carrot" },
        { label: "Broccoli", value: "broccoli" },
      ],
    },
  ],
};

export const Scrollable = Template.bind({});
Scrollable.args = {
  scrollable: true,
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
    { label: "Option 4", value: "4" },
    { label: "Option 5", value: "5" },
    { label: "Option 6", value: "6" },

  ],
};


export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  options: [
    { label: "Apple", value: "apple" },
    { label: "Orange", value: "orange" },
  ],
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
  options: [
    { label: "Apple", value: "apple" },
    { label: "Orange", value: "orange" },
  ],
}; 