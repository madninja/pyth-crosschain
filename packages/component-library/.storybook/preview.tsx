import { sans } from "@pythnetwork/fonts";
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, Decorator } from "@storybook/react";
import { useEffect } from "react";

import "./tailwind.css";

const preview = {
  parameters: {
    backgrounds: { disable: true },
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
} satisfies Preview;

export default preview;

const withRootClasses =
  (...classes: string[]): Decorator =>
  (storyFn) => {
    useEffect(() => {
      const root = document.querySelector("html");
      const classList = classes
        .flatMap((cls) => cls.split(" "))
        .filter(Boolean);
      if (root) {
        root.classList.add(...classList);
        return () => {
          root.classList.remove(...classList);
        };
      } else {
        return;
      }
    }, []);
    return storyFn();
  };

export const decorators: Decorator[] = [
  withRootClasses("font-sans antialiased", sans.variable),
  withThemeByClassName({
    themes: {
      white: "light bg-white",
      light: "light bg-beige-50",
      dark: "dark bg-steel-800",
      darker: "dark bg-steel-900",
    },
    defaultTheme: "light",
  }),
];
