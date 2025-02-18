import { Meter } from "../src/Meter/Meter";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof Meter> = {
  component: Meter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Meter",
};

export default meta;

export const Example = (args: any) => <Meter {...args} />;

Example.args = {
  label: "Storage space",
  value: 80,
};
