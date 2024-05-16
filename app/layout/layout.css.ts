import { style, globalStyle } from "@vanilla-extract/css";

import { flexGrow } from "~/styles/misc.css";
import { blackPrimary, greenPrimary, whiteSecondary } from "~/styles/colors";

export const mainClass = style([
  flexGrow,
  {
    paddingTop: "60px",
    order: 1,
  },
]);

globalStyle("body", {
  margin: 0,
  padding: 0,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("#_root", {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  backgroundColor: whiteSecondary,
  color: blackPrimary,
  minHeight: "100vh",
});

globalStyle("img", {
  maxWidth: "100%",
});

globalStyle("a", {
  color: greenPrimary,
  textDecoration: "none",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontWeight: 600,
});

globalStyle("article, div, footer", {
  alignItems: "stretch",
  border: "0 solid #000",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  margin: 0,
  padding: 0,
  position: "relative",
});

globalStyle("li", {
  marginBottom: "8px",
});

globalStyle(".wp-caption-text", {
  fontSize: "11px",
  fontStyle: "italic",
  fontWeight: 400,
  marginBlockStart: "4px",
});
