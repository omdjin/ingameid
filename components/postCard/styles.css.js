import { style } from "@vanilla-extract/css";

export const postItem = style({
  display: "block",
  flex: "0 0 50%",
  maxWidth: "50%",
  position: "relative",
  width: "100%",
  paddingRight: 15,
  paddingLeft: 15,
  "*": {
    display: "block",
  },
  img: {
    height: "auto",
  },
});
