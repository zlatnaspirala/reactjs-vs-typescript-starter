import { CSSProperties } from "react";
import IApp from "../../globals/interfaces";

export function getMyStyle(): IApp.MyMinimumCssInterface {
  return {
    display: "block",
    background: "url('assets/images/astermedia-logo.png') no-repeat fixed ",
    minHeight: "20vh",
    height: "auto",
    textAlign: "center",
  } as  IApp.MyMinimumCssInterface;
}

export function getMenuStyle(): IApp.MyMinimumCssInterface {
  return {
    willChange: "color",
    display: "block",
    background: "#445566",
    height: "30px",
    width: "100%",
    textAlign: "center",
    color: "initial",
  } as IApp.MyMinimumCssInterface;
}

export function getMenuHoverStyle(): CSSProperties {
  return {
    color: "red",
  } as IApp.MyMinimumCssInterface;
}
