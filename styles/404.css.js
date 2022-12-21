import { style } from "@vanilla-extract/css";

import { flexGrow, justifyCenter } from "styles/misc.css";

export const mainContent = style([
  flexGrow,
  justifyCenter,
  {
    padding: "16px 40px"
  }
]);
