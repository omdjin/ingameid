import { style } from "@vanilla-extract/css";

import { blackPrimary, orangePrimary } from "styles/colors";

export const postItem = style({
  display: "block",
  flex: "0 0 50%",
  maxWidth: "50%",
  position: "relative",
  width: "100%",
  paddingRight: 15,
  paddingLeft: 15,
  marginBottom: "1.33em",
  "*": {
    display: "block",
  },
  h2: {
    marginBlockStart: "0.33em",
    marginBlockEnd: "0em",
    fontSize: "1.2rem",
    a: {
      color: "#14171a",
    },
  },
  ":hover": {
    "h2 > a": {
      color: orangePrimary,
    },
    img: {
      transform: "scale(1.15)",
    },
  },
  img: {
    height: "auto",
    maxHeight: "265px",
    objectFit: "cover",
    transition: "all .4s ease-in-out 0s",
  },
  ".meta": {
    fontSize: "0.7rem",
    color: blackPrimary,
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

export const styImgContainer = style({
  width: "auto",
  height: "265px",
  overflow: "hidden",

  "@media": {
    "(max-width: 500px)": {
      height: "auto",
    },
  },
});
