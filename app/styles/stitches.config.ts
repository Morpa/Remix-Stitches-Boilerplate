import { createStitches } from "@stitches/react";

export const { styled, createTheme, globalCss, getCssText, theme } =
  createStitches({
    theme: {
      fontSizes: {
        global: "62.5%"
      },
      colors: {
        mainBg: "#06092b",
        text: "#fff",
      }
    },
  });

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },
  html: {
    fontSize: "$global",
    height: "100%"
  },
  body: {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    backgroundColor: "$mainBg",
    color: "$text",
    fontFamily:
      '-apple-system, "Segoe UI", Helvetica Neue, Helvetica, Roboto, Arial, sans-serif, system-ui, "Apple Color Emoji", "Segoe UI Emoji"'
  },
});
