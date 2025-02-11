import { initialize, mswLoader } from "msw-storybook-addon";
import { themes } from "@storybook/theming";

// Initialize MSW
initialize({ onUnhandledRequest: "bypass" });

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
  },
  loaders: [mswLoader],
};

export default preview;
