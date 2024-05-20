import { style } from "@vanilla-extract/css";

import {
  flex,
  itemsCenter,
  justifyCenter,
  whiteBg,
  width100,
} from "~/styles/misc.css";
import { blackPrimary, borderBlack, orangePrimary } from "~/styles/colors";

export const headerClass = style([
  flex,
  itemsCenter,
  justifyCenter,
  whiteBg,
  width100,
  {
    order: 0,
    position: "fixed",
    zIndex: 1,
    borderBottom: "1px solid rgba(0, 0, 0, 0.0975)",
    margin: 0,
    padding: 0,
  },
]);

export const headerWrapper = style([
  justifyCenter,
  itemsCenter,
  width100,
  {
    height: "52px",
    padding: "0 20px",
    flexDirection: "row",
    maxWidth: "1010px",
  },
]);

export const headerLogoContainer = style({
  flex: "1 9999 0%",
  minWidth: "40px",
  // selectors: {
  //   "& a": {
  //     width: "330px",
  //   },
  // },
});

export const headerLogo = style({
  flex: "0 0 auto",
  justifyContent: "flex-start",
  flexDirection: "row",
});

export const headerBrandLogo = style({
  backgroundImage: 'url("/static/img/logo.webp")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "24px",
  width: "24px",
  marginTop: "2px",
});

export const headerSepatator = style({
  height: "28px",
  margin: "0 4px",
  width: "1px",
  "@media": {
    "(min-width: 736px)": {
      backgroundColor: borderBlack,
      margin: "0 16px",
    },
  },
});

export const headerBrandLabel = style({
  marginTop: "3px",
  fontWeight: 600,
  color: blackPrimary,
  ":hover": {
    color: orangePrimary,
  },
});

export const styNavDefault = style({
  "@media": {
    "(max-width: 500px)": {
      visibility: "hidden",
    },
  },
});

export const styNavLink = style({
  paddingLeft: "6px",
  paddingRight: "6px",
  color: blackPrimary,
  fontWeight: 600,
  borderLeft: `2px solid ${orangePrimary}`,

  ":hover": {
    color: orangePrimary,
  },
  ":first-child": {
    border: 0,
  },
});
