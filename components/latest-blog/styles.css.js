import { globalStyle, style } from "@vanilla-extract/css";

export const sectionStyle = style({
  padding: "8px 20px",
  maxWidth: "1010px",
  margin: "0 auto",
});

export const row = style({
  flexDirection: "row",
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
});
