import { Button } from "../src/Button/Button";
import { fn } from "@storybook/test";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Button",
};

export default meta;

export const Example = (args: any) => <Button {...args}>Press me</Button>;

Example.args = {
  onPress: fn(),
};
