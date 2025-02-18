import { Disclosure } from "../src/Disclosure/Disclosure";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof Disclosure> = {
  component: Disclosure,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Disclosure",
};

export default meta;

export const Example = (args: any) => (
  <Disclosure {...args}>Details on managing your account</Disclosure>
);

Example.args = {
  title: "Manage your account",
};
