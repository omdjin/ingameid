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
  "@media": {
    "(max-width: 500px)": {
      flex: "0 0 100%",
      maxWidth: "100%",
    },
  },
});

export const styExcerpt = style({
  overflow: "hidden",
  display: "-webkit-box",
  "-webkit-line-clamp": "6",
  "-webkit-box-orient": "vertical",
});
