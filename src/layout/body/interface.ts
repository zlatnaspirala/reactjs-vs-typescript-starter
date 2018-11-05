import { CSSProperties } from "react";
import IApp from "../../globals/interfaces";
import AppI from "../../globals/interfaces";
import { imgObject } from "../../globals/types";

export interface BodyI {
  asset: imgObject;
  provide(args: any): void;
  broadcaster(args: CustomEvent[]): void;
}

export interface BodyStateI extends IApp.ElementI {
  elements: any[];
  myStyle: CSSProperties;
  sections: AppI.SectionI[];
  activeSection: string;
}
