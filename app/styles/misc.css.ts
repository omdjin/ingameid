import { style } from "@vanilla-extract/css";

import { white } from "./colors";

export const block = style({ display: "block" });
export const flex = style({ display: "flex" });
export const flexGrow = style({ flexGrow: 1 });
export const itemsCenter = style({ alignItems: "center" });
export const justifyCenter = style({ justifyContent: "center" });
export const pAbsolute = style({ position: "absolute" });
export const whiteBg = style({ backgroundColor: white });
export const width100 = style({ width: "100%" });
