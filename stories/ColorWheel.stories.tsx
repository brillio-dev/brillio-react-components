import { ColorWheel } from "../src/ColorWheel/ColorWheel";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof ColorWheel> = {
  component: ColorWheel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "ColorWheel",
};

export default meta;

export const Example = (args: any) => <ColorWheel {...args} />;

Example.args = {
  defaultValue: "hsl(30, 100%, 50%)",
};
