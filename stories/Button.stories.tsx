import { Button } from "../src/Button/Button";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
    status: {
      type: "locked", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate' | 'locked'
    },
  },
  tags: ["autodocs"],
  title: "Button",
};

export default meta;

export const Example = (args: any) => <Button {...args}>Press me</Button>;

Example.args = {
  size: "medium",
  onPress: () => alert("Hello world!"),
  style: { borderRadius: "20px", backgroundColor: "grey" },
};
