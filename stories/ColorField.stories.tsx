import { ColorField } from "../src/ColorField/ColorField";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof ColorField> = {
  component: ColorField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "ColorField",
};

export default meta;

export const Example = (args: any) => <ColorField {...args} />;

Example.args = {
  label: "Color",
};
