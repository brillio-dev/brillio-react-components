import { DatePicker } from "../src/DatePicker/DatePicker";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "DatePicker",
};

export default meta;

export const Example = (args: any) => <DatePicker {...args} />;

Example.args = {
  label: "Event date",
};
