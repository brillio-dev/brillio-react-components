import { RangeCalendar } from "../src/RangeCalendar/RangeCalendar";

import type { Meta } from "@storybook/react";

const meta: Meta<typeof RangeCalendar> = {
  component: RangeCalendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "RangeCalendar",
};

export default meta;

export const Example = (args: any) => (
  <RangeCalendar aria-label="Trip dates" {...args} />
);
