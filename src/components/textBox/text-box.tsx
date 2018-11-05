import * as React from "react";
import { TextBoxI } from "./inteface";
import { TextBoxStateI } from "./inteface";
import { hackerText } from "./style";

export class TextBox extends React.Component<TextBoxI, TextBoxStateI> {

  public myStyle: any;

  constructor(args: TextBoxI) {
    super(args);
    this.state = {
      enabledComponent: true,
      debugView: false,
      visibility: true,
      name: args.name,
      text: args.text,
    };
  }

  public printMe() {
    console.log("Ok this is just a test simple print method.");
  }

  public setText = (e: React.ChangeEvent) => {

    this.setState(
      { enabledComponent: true, name: this.state.name, text: (e.target as HTMLInputElement).value });

  }

  public render() {

    if (this.state.visibility === true) {
      return (
        <div>
          <input type="text" value={this.state.text} onChange={(e) => {this.setText(e); }}/>
        </div>
      );
    }

  }

  public componentDidUpdate(prevProps: any) {

    // Typical usage (don't forget to compare props):
    console.warn("prevProps name is: " + prevProps.name);
    if (this.props.name !== prevProps.name) {
      this.printMe();
    } else {
      console.log("Name is same no update.");
    }
  }

}
