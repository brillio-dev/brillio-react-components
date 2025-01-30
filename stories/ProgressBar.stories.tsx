import { ProgressBar } from "../src/ProgressBar/ProgressBar";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "ProgressBar",
};

export default meta;

export const Example = (args: any) => <ProgressBar {...args} />;

Example.args = {
  label: "Loading…",
  value: 80,
};
