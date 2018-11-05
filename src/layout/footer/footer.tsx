import * as React from "react";
import { Label } from "../../components/label/label";
import { myEventsList } from "../../globals/events-enum";
import IApp from "../../globals/interfaces";
import Services from "../../services/services";
import { FooterI, FooterStateI } from "./interface";
import { getFooterTitleStyle, getMyStyle } from "./style";

export class Footer extends React.Component<FooterI, FooterStateI, any> {

  public nativeCssAproach = require("./css.css");
  public add = Services.addElement;

  private myRef: React.RefObject<HTMLDivElement>;
  private myDOM: Element | Text;

  constructor(args: any) {

    super(args);

    this.state = {
      enabledComponent : true,
      visibility: true,
      debugView: false,
      elements: [],
      myStyle: getMyStyle(),
    };

    this.myRef = React.createRef();
    this.add = this.add.bind(this);
  }

  // Override func
  public componentDidMount() {

    this.myDOM  = this.myRef.current;

    this.addInitElements();

  }

  // Override func
  public componentDidUpdate(prevProps: any) {
    // console.log("prevProps is: " + prevProps);
  }

  public render() {

    if ( this.state.visibility === true ) {

      return (
        <div ref={this.myRef} style={this.state.myStyle} >
          <Label myStyle={getFooterTitleStyle()}
                 name="Footer title"
                 text="copyright astermedia.net 2018"
                 onClick={this.clickEvent.bind(this)}
                 onMouseEnterHandler={null}
                 onMouseLeaveHandler={null} />
          {this.state.elements.map((element, index: any) => {
            return <span className={"menuItem2"} key={index} >{element}</span>;
          })}
        </div>
      );

    }

  }

  private addInitElements() {

    const myKey = "footer.yuotube";
    const element1Args: IApp.NewElementArgsI = {
      key: myKey,
      onClick: null,
      myStyle: null,
      content: "Go to youtube",
      hoverIn: null,
      hoverOut: null,
    };
    const myKey2 = "footer.address";
    const element2Args: IApp.NewElementArgsI = {
      key: myKey2,
      onClick: null,
      myStyle: null,
      content: "Nis serbia",
      hoverIn: null,
      hoverOut: null,
    };

    this.add(element1Args);
    this.add(element2Args);
  }

  private clickEvent(event: MouseEvent) {

    // this.myDOM.dispatchEvent(this.myEvent);
    console.log("test");
    this.adaptCss();

  }

  private adaptCss() {
    // Collect this
    const myStyle = getMyStyle();
    myStyle.height = "110px";
    myStyle.bottom = "0px";
    this.setState({
      myStyle,
    });
  }

  private printMe() {
    // console.log("Layout Header is active and update is on");
  }

}
