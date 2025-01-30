import { Switch } from "../src/Switch/Switch";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof Switch> = {
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Switch",
};

export default meta;

export const Example = (args: any) => <Switch {...args}>Wi-Fi</Switch>;
