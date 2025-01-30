import { TextField } from "../src/TextField/TextField";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof TextField> = {
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "TextField",
};

export default meta;

export const Example = (args: any) => <TextField {...args} />;

Example.args = {
  label: "Name",
};
