import { globalStyle, style } from "@vanilla-extract/css";

export const contactWrapper = style({
  padding: "16px 0"
});

globalStyle(`${contactWrapper} p`, {
  marginBottom: 0
});
