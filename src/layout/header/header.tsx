import * as React from "react";
import { Label } from "../../components/label/label";
import { menuActionEvents } from "../../globals/events-enum";
import IApp from "../../globals/interfaces";
import { Tap } from "../../globals/types";
import Services from "../../services/services";
import { HeaderI, HeaderStateI } from "./interface";
import { getMenuHoverStyle, getMenuStyle, getMyStyle } from "./style";

/**
 * Test native css
 * We can implement any other css files like this
 */
require("./css.css");

export class Header extends React.Component<HeaderI, HeaderStateI, any> {

  public add = Services.addElement;
  private myRef: React.RefObject<HTMLDivElement>;
  private myDOM: Element | Text;

  constructor(args: any) {

      super(args);

      this.state = {
        enabledComponent: true,
        hovered: [],
        visibility: true,
        debugView: false,
        elements: [],
        myStyle: getMyStyle(),
        menuStyle: getMenuStyle(),
        menuItemStyle: getMenuStyle(),
        menuItemStyleHover: getMenuHoverStyle(),
        menuIsOpen: false,
        myEvent: null,
      };

      this.myRef = React.createRef();
      this.add = this.add.bind(this);
  }

  // Override func
  public componentDidMount() {
    this.myDOM  = this.myRef.current;
  }

  public render() {

    if ( this.state.visibility === true ) {

      return (
            <div ref={this.myRef} style={this.state.myStyle} >
            <Label myStyle={this.state.menuStyle}
                   name="headerName"
                   text="MENU"
                   onClick={this.clickEvent.bind(this)}
                   onMouseEnterHandler={this.hoverIn.bind(this)}
                   onMouseLeaveHandler={this.hoverOut.bind(this)} />
             {this.state.elements.map((element: React.ReactElement<any>, index) => {
               return <span /*className={"menuItem"}*/ ref={this.myRef} key={index} style={this.getStyle(index)}
                           onClick={this.clickMenuItem.bind(this)}>{element}</span>;
             })}
            </div>
          );

    }

  }

  // Override func
  public componentDidUpdate(prevProps: any, prevState: any) {
      // Typical usage (don't forget to compare props):
  }

  // Override func
  public componentWillUpdate(nextProps: any, nextState: any) {
    // We should not call setState !
    // if (nextState.open == true && this.state.open == false) {
    //   this.props.onWillOpen();
    // }
  }

  private getStyle(index: number): React.CSSProperties {

    if (this.state.hovered[index] === true) {
      return getMenuStyle();
    } else {
      return getMenuHoverStyle();
    }

  }

  private adaptCss(e: CustomEvent) {
    // DEMO for css changes :
    // Collect (this of class instance)
    const self = e.detail.data.self;
    // Make any changes in css
    // Collect base or initial css
    const myStyle = getMyStyle();
    // Make changes
    myStyle.background = "yellow";
    // Setup state and nothing more
    self.setState({
      myStyle,
    });

  }

  private clickEvent(event: MouseEvent | TouchEvent) {

    if (this.state.menuIsOpen === false) {

      const myKey = "header.home";
      const element1Args: IApp.NewElementArgsI = {
        key: myKey,
        onClick: null,
        myStyle: null,
        content: "HOME",
        hoverIn: ((e) => this.hoverIn(e, myKey)),
        hoverOut: ((e) => this.hoverOut(e, myKey)),
      };
      const myKey2 = "header.about";
      const element2Args: IApp.NewElementArgsI = {
        key: myKey2,
        onClick: null,
        myStyle: null,
        content: "ABOUT",
        hoverIn: ((e) => this.hoverIn(e, myKey2)),
        hoverOut: ((e) => this.hoverOut(e, myKey2)),
      };

      const myKey3 = "table.programmers";
      const element3Args: IApp.NewElementArgsI = {
        key: myKey3,
        onClick: null,
        myStyle: null,
        content: "MY TABLE DATA",
        hoverIn: ((e) => this.hoverIn(e, myKey3)),
        hoverOut: ((e) => this.hoverOut(e, myKey3)),
      };

      this.add(element1Args);
      this.add(element3Args);
      this.add(element2Args);

      const helper = [false, false, false];

      // Set new state for menu
      this.setState(
        {menuIsOpen: !this.state.menuIsOpen,
        hovered: helper},
      );

    } else {

      // Menu is already visible , delete menu items
      this.setState (
        {
          menuIsOpen: !this.state.menuIsOpen,
          elements: [],
        },
      );

    }

  }

  private clickMenuItem(event: MouseEvent | TouchEvent | any) {

    // console.warn(" cleckMenuItem in bodyCOntent class!");
    // const t = event.target as HTMLDivElement;
    // Also possible to call event.target.textContent !
    // React store by him self key data to the -> event._targetInst.key
    switch (event._targetInst.key) {
      case "header.home":
        this.props.provide({instruction: menuActionEvents.showHome});
        break;
      case "header.about":
        this.props.provide({instruction: menuActionEvents.showAbout});
        break;
      case "table.programmers":
        this.props.provide({instruction: menuActionEvents.showMyTableData });
        break;
      default:
        console.warn("No case for cleckMenuItem in bodyCOntent class!");

    }

  }

  private hoverIn = (e: Tap, id: any) => {

    const local: boolean[] = [];
    this.state.elements.forEach((element: React.ReactElement<any>, index: number) => {
      if (id === element.key) {
        local.push(true);
      } else {
        local.push(false);
      }
    });

    if (this.state.elements.length === 0) {

        const test = getMenuStyle();
        test.color = "lime";
        this.setState({
          menuStyle: test,
        });

    }

  }

  private hoverOut = (e: Tap, id: any) => {

    const local: boolean[] = [];
    this.state.elements.forEach((element: React.ReactElement<any>) => {
    if (id === element.key) {
      local.push(true);
    } else {
      local.push(false);
    }
    });
    this.setState({
      hovered: local,
    });

 }
}
