import { style } from "@vanilla-extract/css";

import { flexGrow, width100 } from "styles/misc.css";

export const heading = style({
  padding: "0 15px",
});

export const container = style([
  flexGrow,
  width100,
  {
    margin: "0 auto",
    maxWidth: "1080px",
    "@media": {
      "(max-width: 500px)": {
        padding: "0 8px",
      },
    },
  },
]);

export const row = style({
  flexDirection: "row",
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
});
