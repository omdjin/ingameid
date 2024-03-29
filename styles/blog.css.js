import { globalStyle, style } from "@vanilla-extract/css";

import {
  block,
  flexGrow,
  itemsCenter,
  pAbsolute,
  width100
} from "styles/misc.css";
import { grey, whiteSecondary } from "styles/colors";

export const mainContent = style([
  flexGrow,
  width100,
  {
    margin: "0 auto",
    maxWidth: "616px",
    "@media": {
      "(max-width: 500px)": {
        padding: "0 8px"
      }
    }
  }
]);

export const bodyStyle = style({
  lineHeight: "1.75",
  fontSize: "1rem"
});

globalStyle(`${bodyStyle} img`, {
  maxWidth: "100%",
  height: "auto"
});

globalStyle(`${bodyStyle} ol`, {
  paddingInlineStart: "20px"
});
