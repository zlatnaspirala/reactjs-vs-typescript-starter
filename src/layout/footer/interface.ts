import { CSSProperties } from "react";
import AppI from "../../globals/interfaces";

// tslint:disable-next-line:no-empty-interface
export interface FooterI extends AppI.NameTextI {}

export interface FooterStateI extends AppI.ElementI {
  elements: any[];
  myStyle: CSSProperties;
}
