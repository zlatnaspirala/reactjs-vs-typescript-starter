import * as React from "react";
import AppI from "../../globals/interfaces";
import { LabelStateI } from "./interface";
import { LabelI } from "./interface";
import { myStyle } from "./style";

export class Label extends React.Component<LabelI, LabelStateI> implements AppI.HoverI {

  private myStyle: React.CSSProperties;
  // NameI can be anything
  constructor(args: LabelI) {

    // Extends just like native ES6 or TS
    super(args);

    // State , We dont need always all args to be indentical with class properties.
    // For now we need only name !
    this.state = {
      enabledComponent: true,
      visibility: true,
      debugView: false,
      name: args.name,
      text: args.text,
    };

    if (args.onMouseEnterHandler !== null) {
      this.onMouseEnterHandler = args.onMouseEnterHandler;
    }
    if (args.onMouseLeaveHandler !== null) {
      this.onMouseLeaveHandler = args.onMouseLeaveHandler;
    }

  }

  public printMe() {
    console.log("Component name :" + this.state.name + " Component text: " + this.state.text);
  }

  public setText = (e: React.ChangeEvent) => {
    this.setState({ enabledComponent: true, text: (e.target as HTMLInputElement).value });
  }

  public render() {

    if (this.state.visibility === true) {

      return (
        <div style={this.props.myStyle}
          onClick={this.props.onClick}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}>
          {this.state.text}
        </div>
      );

    }

  }

  // Override func
  public componentDidUpdate(prevProps: any, prevState: any) {
    // Typical usage (don't forget to compare props)
  }

  public onMouseEnterHandler = (event: React.TouchEvent | React.MouseEvent) => {
    // console.log("default in");
  }

  public onMouseLeaveHandler = (event: React.TouchEvent | React.MouseEvent) => {
    // console.log("default out");
  }

}
