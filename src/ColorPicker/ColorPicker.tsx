import {
  Button,
  ColorPicker as AriaColorPicker,
  ColorPickerProps as AriaColorPickerProps,
  Dialog,
  DialogTrigger,
  Popover,
} from "react-aria-components";
import { MyColorSwatch } from "../ColorSwatch/ColorSwatch";
import { MyColorSlider } from "../ColorSlider/ColorSlider";
import { MyColorArea } from "../ColorArea/ColorArea";
import { MyColorField } from "../ColorField/ColorField";

import "./ColorPicker.css";

export interface ColorPickerProps extends AriaColorPickerProps {
  label?: string;
  children?: React.ReactNode;
}

export function ColorPicker({ label, children, ...props }: ColorPickerProps) {
  return (
    <AriaColorPicker {...props}>
      <DialogTrigger>
        <Button className="color-picker">
          <MyColorSwatch />
          <span>{label}</span>
        </Button>
        <Popover placement="bottom start">
          <Dialog className="color-picker-dialog">
            {children || (
              <>
                <MyColorArea
                  colorSpace="hsb"
                  xChannel="saturation"
                  yChannel="brightness"
                />
                <MyColorSlider colorSpace="hsb" channel="hue" />
                <MyColorField label="Hex" />
              </>
            )}
          </Dialog>
        </Popover>
      </DialogTrigger>
    </AriaColorPicker>
  );
}
