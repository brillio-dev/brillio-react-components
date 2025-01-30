import { ColorSwatch } from "../src/ColorSwatch/ColorSwatch";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof ColorSwatch> = {
  component: ColorSwatch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "ColorSwatch",
};

export default meta;

export const Example = (args: any) => <ColorSwatch {...args} />;

Example.args = {
  color: "#f00a",
};
