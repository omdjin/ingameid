import { style } from "@vanilla-extract/css";

import { white } from "./colors";
import { flexGrow, width100 } from "./misc.css";

export const mainContent = style([
  flexGrow,
  width100,
  {
    margin: "0 auto 30px",
    maxWidth: "935px",
    "@media": {
      "(min-width: 736px)": {
        boxSizing: "content-box",
        padding: "60px 20px 0",
        width: "calc(100% - 40px)"
      }
    }
  }
]);

export const gridContainer = style({
  flexDirection: "column",
  paddingBottom: 0,
  paddingTop: 0
});

export const gridRow = style({
  flexDirection: "row",
  "@media": {
    "(min-width: 736px)": {
      marginBottom: "28px"
    }
  }
});
