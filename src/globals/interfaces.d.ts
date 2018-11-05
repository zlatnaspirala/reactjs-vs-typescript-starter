import { CSSProperties } from "react";
import { Tick, Tap } from "./types";

/**
 * Main global interface file
 * Put here only common staff
 * IApp is namespace of interfaces collections.
 */

declare namespace AppI {

  export interface HoverI {
    onMouseEnterHandler(event: React.TouchEvent | React.MouseEvent): void;
    onMouseLeaveHandler(event: React.TouchEvent | React.MouseEvent): void;
  }

  export interface MyMinimumCssInterface extends CSSProperties {
    display: string;
  }

  export interface TickI {
    myTimer: Tick;
  }

  export interface NewElementArgsI {
    key: string;
    onClick: (event: MouseEvent | TouchEvent) => void;
    myStyle: CSSProperties | null;
    content: React.ReactElement<any> | string;
    hoverIn(e: Tap): undefined | null | void;
    hoverOut(e: Tap): undefined | null | void;
  }

  export interface SectionI {
    name: string;
    elements: React.ReactElement<any>[];
  }

  export interface NameTextI {
    name: string;
    text: string;
  }

  export interface TimerI {
    timeInterval: number;
    tCount: number;
  }

  export interface ElementI {
    enabledComponent : boolean;
    debugView : boolean;
    visibility: boolean;
  }

  export interface AccountI { 
    nickname: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
  }

}

export default AppI;
