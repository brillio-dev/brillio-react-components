import { themes } from "@storybook/theming";
import { fn } from "@storybook/test";
import "../src/stylex.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
    docs: {
      theme: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? themes.dark
        : themes.light,
    },
    status: {
      statuses: {
        locked: {
          background: "#ff0000",
          color: "#ffffff",
          description:
            "Some of the styles on this component is locked and cannot be overriden for consistent look and feel",
        },
      },
    },
  },
};

export default preview;
