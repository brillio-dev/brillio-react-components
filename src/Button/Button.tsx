import { Button as RACButton, ButtonProps } from "react-aria-components";
import "./Button.css";
import * as stylex from "@stylexjs/stylex";
import type { StaticStyles } from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    appearance: "none",
    borderWidth: 0,
    borderRadius: "5px",
  },
});

const colorVariants = stylex.create({
  danger: {
    backgroundColor: {
      default: "darkred",
      ":hover": "red",
    },
    color: "white",
  },
  safe: {
    backgroundColor: {
      default: "darkgreen",
      ":hover": "green",
    },
    color: "white",
  },
});

const sizeVariants = stylex.create({
  small: {
    fontSize: "1rem",
    paddingBlock: 4,
    paddingInline: 8,
  },
  medium: {
    fontSize: "1.25rem",
    paddingBlock: 8,
    paddingInline: 16,
  },
});

type Props = {
  color: keyof typeof colorVariants;
  size: keyof typeof sizeVariants;
  style?: StaticStyles<{
    color?: string;
    backgroundColor?: "red" | "blue" | "green";
  }>;
  props: ButtonProps;
};

export function Button({ color = "safe", size = "small", ...props }: Props) {
  return (
    <RACButton
      {...props}
      {...stylex.props(
        styles.base,
        colorVariants[color],
        sizeVariants[size],
        props.style,
      )}
    />
  );
}
