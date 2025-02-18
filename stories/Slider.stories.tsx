import { Slider } from "../src/Slider/Slider";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof Slider> = {
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Slider",
};

export default meta;

export const Example = (args: any) => <Slider {...args} />;

Example.args = {
  label: "Range",
  defaultValue: [30, 60],
  thumbLabels: ["start", "end"],
};
