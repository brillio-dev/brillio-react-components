import { ColorArea } from "../src/ColorArea/ColorArea";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof ColorArea> = {
  component: ColorArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "ColorArea",
};

export default meta;

export const Example = (args: any) => <ColorArea {...args} />;

Example.args = {
  defaultValue: "hsl(30, 100%, 50%)",
};
