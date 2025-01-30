import { ToggleButton } from "../src/ToggleButton/ToggleButton";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "ToggleButton",
};

export default meta;

export const Example = (args: any) => (
  <ToggleButton {...args}>Pin</ToggleButton>
);
