import { globalStyle, style } from "@vanilla-extract/css";

import { block, width100, justifyCenter, pAbsolute } from "styles/misc.css";
import { grey, white } from "styles/colors";

const pullLeft = style([
  pAbsolute,
  {
    left: 0,
    top: 0
  }
]);

export const gridItem = style([
  block,
  width100,
  {
    flex: "1 0 0%",
    position: "relative",
    "@media": {
      "(min-width: 736px)": {
        marginRight: "28px"
      },
      "(max-width: 735px)": {
        marginRight: "3px",
        marginBottom: "3px"
      }
    }
  }
]);

export const itemOverlay = style([
  justifyCenter,
  pAbsolute,
  {
    display: "none",
    flexDirection: "column",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    selectors: {
      [`${gridItem}:hover &`]: {
        display: "flex"
      }
    }
  }
]);

globalStyle(`${itemOverlay} h2`, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  textAlign: "center",
  color: white,
  fontWeight: 600,
  height: "100%"
});

export const itemWrapper = style([
  block,
  width100,
  {
    backgroundColor: grey
  }
]);

export const itemContainer = style([
  block,
  {
    overflow: "hidden",
    paddingBottom: "100%"
  }
]);

export const itemClear = style([
  pullLeft,
  {
    bottom: 0,
    right: 0
  }
]);

export const itemImage = style([
  width100,
  pullLeft,
  {
    objectFit: "cover",
    height: "100%",
    userSelect: "none"
  }
]);
