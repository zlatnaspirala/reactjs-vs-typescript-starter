import { CSSProperties } from "react";
import AppI from "../../globals/interfaces";

// tslint:disable-next-line:no-empty-interface
export interface HeaderI extends AppI.NameTextI {
  provide(args: any): void;
  broadcaster(args: CustomEvent[]): void;
}

export interface HeaderStateI extends AppI.ElementI {
  elements: any[];
  hovered: boolean[];
  myStyle: CSSProperties;
  menuStyle: CSSProperties;
  menuItemStyle: CSSProperties;
  menuItemStyleHover: CSSProperties;
  menuIsOpen: boolean;
  myEvent: CustomEvent;
}
