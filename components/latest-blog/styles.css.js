import { style } from "@vanilla-extract/css";

import { orangePrimary } from "styles/colors";

export const sectionStyle = style({
  padding: "8px 20px",
  maxWidth: "1000px",
  margin: "0 auto",
});

export const row = style({
  flexDirection: "row",
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
});

export const headingStyle = style({
  paddingLeft: "16px",
  borderLeft: `2px solid ${orangePrimary}`,
});
