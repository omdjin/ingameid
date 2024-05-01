import { style } from "@vanilla-extract/css";

import { width100 } from "styles/misc.css";
import { grey, blackPrimary, orangePrimary } from "styles/colors";

export const footerStyle = style({
  order: 2,
  padding: "0 20px",
});

export const contentStyle = style([
  width100,
  {
    maxWidth: "1010px",
    fontSize: "12px",
    fontWeight: 600,
    margin: "0 auto",
    padding: "38px 0",
    borderTop: `1px solid ${grey}`,
    "@media": {
      "(min-width: 876px)": {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      },
    },
  },
]);

export const footerSpan = style({
  textTransform: "unset",
  color: "#4f4f4f",
  alignSelf: "center",
});

export const pagesStyle = style({
  display: "inline",
  a: {
    marginLeft: "8px",
    color: blackPrimary,
  },
  "a:hover": {
    color: orangePrimary,
  },
});
