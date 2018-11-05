import * as React from "react";
import { Label } from "../../components/label/label";
import { aboutDescription } from "../../data-structures/about-data";
import { MyTableData } from "../../data-structures/my-table-data";
import { bodySections, menuActionEvents } from "../../globals/events-enum";
import AppI from "../../globals/interfaces";
import Services from "../../services/services";
import { BodyI, BodyStateI } from "./interface";
import { getAboutStyle, getAboutWrapperStyle, getBtnStyle,
         getBtnWrapperStyle, getHomeStyle, getMyTableItemWrapperStyle } from "./style";

export class ContentBody extends React.Component<BodyI, BodyStateI, any> {

  // Func add is common for ContentBody , Header and Footer class.
  // We import method from Services
  public add = Services.addElement;
  private myRef: React.RefObject<HTMLDivElement>;
  private myDOM: Element | Text;

  private providers: CustomEvent[];

  // Before you define Section you will need to declare enumerator
  // who represent Section name parameter.
  // Define Section home :
  private sectionHome: AppI.SectionI = {
    name: bodySections.home,
    elements: [],
  };

  // Define Section about :
  private sectionAbout: AppI.SectionI = {
    name: bodySections.about,
    elements: [],
  };

  // Adding new section
  private sectionMyTableData: AppI.SectionI = {
    name: bodySections.myTableData,
    elements: [],
  };

  // This is model for our finally element in our bodeContent
  private startTimerButton = <Label myStyle={getBtnStyle()}
                             name="timerStartBtn"
                             text="Make tittle active from bodyContent element child! "
                             onClick={this.clickEvent.bind(this)}
                             onMouseEnterHandler={null}
                             onMouseLeaveHandler={null} />;

  private aboutTitle = <div style={getAboutStyle()} > About astermedia.net </div>;
  private aboutDescription = <div style={getAboutStyle()} >{aboutDescription}</div>;

  private myTableElement = <div> name : {this} </div>;

  constructor(args: any) {

      super(args);
      this.state = {
        enabledComponent: true,
        visibility: true,
        debugView: false,
        sections: [this.sectionHome, this.sectionAbout, this.sectionMyTableData],
        activeSection: bodySections.home,
        elements: [],
        myStyle: getHomeStyle(),
      };
      this.myRef = React.createRef();
      this.add = this.add.bind(this);
      this.setActiveSection = this.setActiveSection.bind(this);

      // Provide all nessesery actions to the App top level
      const instance = {self: this};
      this.providers = [
        Services.createEvent(menuActionEvents.showHome, instance),
        Services.createEvent(menuActionEvents.showAbout, instance),
        Services.createEvent(menuActionEvents.showMyTableData, instance),
      ];

  }

  // Override func
  public componentDidMount() {

    // React staff REF
    this.myDOM  = this.myRef.current;
    // Add listeners
    this.addListeners();
    // Provide for outside
    this.props.broadcaster(this.providers);
    // Createing child elements
    this.CreateMyElements();

  }

  // Override func
  public render() {

      if (this.state.visibility === true) {
        return (
                <div ref={this.myRef} style={this.state.myStyle} >
                  {this.state.sections.map((sectionsItem: AppI.SectionI) => {
                    if (this.state.activeSection === sectionsItem.name) {
                      return sectionsItem.elements.map((element: React.ReactElement<any>, index: number) => {
                        return <span key={index} onClick={this.clickEvent.bind(this)} >{element}</span>;
                      });
                    }
                  })}
                </div>
               );
      }

  }

  // Override func
  public componentDidUpdate(prevProps: any, prevState: any) {
    // console.warn("prevProps name is: " + prevProps);
    // console.warn("prevState name is: " + prevState);
  }

  // Override func
  public componentWillUpdate(nextProps: any, nextState: any) {
    // console.log("BODY nextProps" + nextProps);
    // console.log("BODY nextState" + nextState);
  }

  private CreateMyElements() {

    const element1Args: AppI.NewElementArgsI = {
      key: "home.0001",
      onClick: null,
      myStyle: getBtnWrapperStyle(),
      content: this.startTimerButton,
      hoverIn: null,
      hoverOut: null,
    };

    const element2Args: AppI.NewElementArgsI = {
      key: "home.0002",
      onClick: null,
      myStyle: getBtnWrapperStyle(),
      content: this.startTimerButton,
      hoverIn: null,
      hoverOut: null,
    };

    this.add(element1Args, this.sectionHome);
    this.add(element2Args, this.sectionHome);

    /**
     * MyTableData
     * demo :
     */

    MyTableData.forEach ( (item, index) => {

      const tableItem: AppI.NewElementArgsI = {
        key: "table.00" + index,
        onClick: null,
        myStyle: getMyTableItemWrapperStyle(),
        content: <div> <span>Name:{item.name} Job title: {item.job} </span>
          <img src={item.image} style={getMyTableItemWrapperStyle()} /> </div>,
        hoverIn: null,
        hoverOut: null,
      };

      this.add(tableItem, this.sectionMyTableData);
      // console.log(item.name);

    });

    /**
     * If we use simple div element
     * no need for passing
     */
    const aboutTitleElement: AppI.NewElementArgsI = {
      key: "aboutTitle",
      onClick: null,
      myStyle: getAboutWrapperStyle(),
      content: this.aboutTitle,
      hoverIn: null,
      hoverOut: null,
    };

    // tslint:disable-next-line:no-shadowed-variable
    const aboutDescriptionElement: AppI.NewElementArgsI = {
      key: "aboutDes",
      onClick: null,
      myStyle: getAboutWrapperStyle(),
      content: this.aboutDescription,
      hoverIn: null,
      hoverOut: null,
    };

    this.add(aboutTitleElement, this.sectionAbout);
    this.add(aboutDescriptionElement, this.sectionAbout);
  }

  private setActiveSection = (sectionName: string) => {
    this.setState({activeSection: sectionName});
  }

  private addListeners() {
    (document as Document).addEventListener(menuActionEvents.showHome, this.eventListener);
    (document as Document).addEventListener(menuActionEvents.showAbout, this.eventListener);
    (document as Document).addEventListener(menuActionEvents.showMyTableData, this.eventListener);
  }

  private removeListeners() {
    (document as Document).addEventListener(menuActionEvents.showHome, this.eventListener);
    (document as Document).addEventListener(menuActionEvents.showAbout, this.eventListener);
    (document as Document).addEventListener(menuActionEvents.showMyTableData, this.eventListener);
  }

  private adaptCss(e: CustomEvent) {
    // Collect this
    const self = e.detail.data.self;
    // Make any changes in css
    self.myStyle.background = "blue";
    self.setState({
      myStyle: self.myStyle,
    });
  }

  private eventListener(event: CustomEvent) {
    // Collect instance this
    const self = event.detail.data.self;
    if (event.detail.eventName === menuActionEvents.showHome) {
      self.setActiveSection(bodySections.home);
    } else if (event.detail.eventName === menuActionEvents.showAbout) {
      self.setActiveSection(bodySections.about);
    } else if (event.detail.eventName === menuActionEvents.showMyTableData) {
      self.setActiveSection(bodySections.myTableData);
    }
  }

  private clickEvent(event: MouseEvent | TouchEvent) {
    this.props.provide({instruction: "MakeTitleActive"});
  }

}
