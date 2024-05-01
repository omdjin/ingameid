import { globalStyle, style } from "@vanilla-extract/css";

import { flexGrow, width100 } from "styles/misc.css";

export const mainContent = style([
  flexGrow,
  width100,
  {
    margin: "0 auto",
    maxWidth: "935px",
    padding: "0 20px",
    "@media": {
      "(max-width: 500px)": {
        padding: "0 16px",
      },
    },
  },
]);

export const titleStyle = style({
  fontSize: "2em",
});

export const bodyStyle = style({
  lineHeight: "1.75",
  fontSize: "1.17rem",
  "h2, h3, h4, h5": {
    margin: 0,
  },
  p: {
    marginBottom: "1rem",
    marginTop: 0,
  },
  ".wp-caption, img": {
    maxWidth: "100%",
    height: "auto",
  },
  ol: {
    paddingInlineStart: "20px",
  },
  "@media": {
    "(max-width: 500px)": {
      iframe: {
        maxWidth: "100%",
        height: "60vw",
      },
    },
  },
});

globalStyle(`${bodyStyle} ol`, {
  paddingInlineStart: "20px",
});
