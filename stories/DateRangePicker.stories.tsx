import { DateRangePicker } from "../src/DateRangePicker/DateRangePicker";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "DateRangePicker",
};

export default meta;

export const Example = (args: any) => <DateRangePicker {...args} />;

Example.args = {
  label: "Event date",
};
