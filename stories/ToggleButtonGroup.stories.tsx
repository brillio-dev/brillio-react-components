import { ToggleButtonGroup } from "../src/ToggleButtonGroup/ToggleButtonGroup";
import { ToggleButton } from "react-aria-components";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof ToggleButtonGroup> = {
  component: ToggleButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "ToggleButtonGroup",
};

export default meta;

export const Example = (args: any) => (
  <ToggleButtonGroup {...args}>
    <ToggleButton id="left">Left</ToggleButton>
    <ToggleButton id="center">Center</ToggleButton>
    <ToggleButton id="right">Right</ToggleButton>
  </ToggleButtonGroup>
);
