import { globalStyle, style } from "@vanilla-extract/css";

import {
  block,
  flexGrow,
  itemsCenter,
  pAbsolute,
  width100,
} from "styles/misc.css";
import { grey, whiteSecondary } from "styles/colors";

export const mainContent = style([
  flexGrow,
  width100,
  {
    margin: "0 auto 8px",
    maxWidth: "935px",
    "@media": {
      "(min-width: 736px)": {
        boxSizing: "content-box",
        justifyContent: "center",
        padding: "8px 20px",
        width: "calc(100% - 40px)",
      },
    },
  },
]);

export const ltEKP = style({
  "@media": {
    "(min-width: 736px)": {
      alignItems: "center",
      width: "100%",
      margin: "0 auto",
    },
  },
});

export const articleStyle = style([
  width100,
  {
    padding: 0,
    "@media": {
      "(min-width: 736px)": {
        backgroundColor: "white",
        border: "1px solid #e6e6e6",
        borderBottomRightRadius: "3px",
        borderTopRightRadius: "3px",
      },
    },
  },
]);

export const headerStyle = style([
  itemsCenter,
  {
    borderBottomWidth: "0.5px",
    padding: "16px",
    paddingRight: "40px",
    h1: {
      fontSize: "2em",
      margin: 0,
    },
    "@media": {
      "(min-width: 736px)": {
        borderBottom: `1px solid ${grey}`,
        padding: "20px",
        maxHeight: "78px",
        marginRight: 0,
      },
    },
  },
]);

export const imageHolder = style({
  "@media": {
    "(min-width: 736px)": {
      justifyContent: "center",
      marginRight: "335px",
      minHeight: "450px",
      backgroundColor: whiteSecondary,
    },
  },
});

export const imageContainer = style([
  block,
  width100,
  {
    backgroundColor: grey,
  },
]);

export const imageOverflow = style([
  block,
  {
    overflow: "hidden",
    paddingBottom: "100%",
  },
]);

export const imageStyle = style([
  pAbsolute,
  width100,
  {
    objectFit: "cover",
    height: "100%",
    userSelect: "none",
    left: 0,
    top: 0,
  },
]);

export const contentWrap = style({
  padding: "0 16px",
  "@media": {
    "(min-width: 736px)": {
      position: "absolute",
      bottom: 0,
      boxSizing: "border-box",
      paddingLeft: "24px",
      paddingRight: "24px",
      right: 0,
      top: "78px",
      width: "335px",
      padding: "0 16px 16px",
      wordWrap: "break-word",
      overflowX: "hidden",
      "::-webkit-scrollbar": {
        width: "6px",
        backgroundColor: "#f5f5f5",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "#f5f5f5",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#999",
        borderRadius: "4px",
      },
    },
  },
});

globalStyle(`${contentWrap} h3`, {
  marginBottom: 0,
});

globalStyle(`${contentWrap} ul`, {
  paddingLeft: "22px",
});

export const bodySEOStyle = style({
  marginTop: "8px",
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
      padding: "0 16px",
      iframe: {
        maxWidth: "100%",
        height: "60vw",
      },
    },
  },
});
