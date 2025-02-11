import {
  Button,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateRangePicker as AriaDateRangePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  DateSegment,
  DateValue,
  Dialog,
  FieldError,
  Group,
  Heading,
  Label,
  Popover,
  RangeCalendar,
  Text,
  ValidationResult,
  DateRangePickerContext,
  DateRangePickerStateContext,
  ListStateContext,
} from "react-aria-components";

import "./DateRangePicker.css";
import React from "react";

export interface DateRangePickerProps<T extends DateValue>
  extends AriaDateRangePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function DateRangeClearButton() {
  let state = React.useContext(DateRangePickerStateContext)!;
  return (
    <Button
      slot={null}
      className="clear-range"
      aria-label="Clear"
      onPress={() => state?.setValue(null)}
    >
      x
    </Button>
  );
}

export function DateRangePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  firstDayOfWeek,
  ...props
}: DateRangePickerProps<T>) {
  return (
    <AriaDateRangePicker {...props}>
      <Label>{label}</Label>
      <Group>
        <DateInput slot="start">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <span aria-hidden="true">–</span>
        <DateInput slot="end">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <DateRangeClearButton />
        <Button>▼</Button>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Dialog>
          <RangeCalendar firstDayOfWeek={firstDayOfWeek}>
            <header>
              <Button slot="previous">◀</Button>
              <Heading />
              <Button slot="next">▶</Button>
            </header>
            <CalendarGrid>
              {(date) => <CalendarCell date={date} />}
            </CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>
    </AriaDateRangePicker>
  );
}
