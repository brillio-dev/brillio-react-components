import { ComboBox, ComboBoxItem } from "../src/ComboBox/ComboBox";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof ComboBox> = {
  component: ComboBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "ComboBox",
};

export default meta;

export const Example = (args: any) => (
  <ComboBox {...args}>
    <ComboBoxItem>Chocolate</ComboBoxItem>
    <ComboBoxItem>Mint</ComboBoxItem>
    <ComboBoxItem>Strawberry</ComboBoxItem>
    <ComboBoxItem>Vanilla</ComboBoxItem>
  </ComboBox>
);

Example.args = {
  label: "Ice cream flavor",
};
