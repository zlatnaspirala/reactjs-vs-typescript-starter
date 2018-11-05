import { CSSProperties } from "react";
import IApp from "../../globals/interfaces";

// Default css class is myStyle
// We can made iOSStyle , android , mobile ...
export const myStyle: IApp.MyMinimumCssInterface = {
  display: "block",
  WebkitBoxSizing: "content-box",
  MozBoxSizing: "content-box",
  boxSizing: "content-box",
  border: "none",
  font: "normal 16px/1 Arial Black, Gadget, sans-serif",
  color: "black",
  OTextOverflow: "ellipsis",
  textOverflow: "ellipsis",
  textShadow: "4px 4px 6px rgba(0,0,0,0.5)",
};

// Add bonus classes
export const hackerText: CSSProperties = {
  color: "lime",
  backgroundColor: "black",
};
