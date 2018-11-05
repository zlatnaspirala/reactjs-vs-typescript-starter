import * as React from "react";
import * as ReactDOM from "react-dom";
import { Resources } from "./assets/resources";
import { loadResponseStyle } from "./controllers/response-style";
import { menuActionEvents, myEventsList } from "./globals/events-enum";
import { imgObject } from "./globals/types";
import { ContentBody } from "./layout/body/body";
import { Footer } from "./layout/footer/footer";
import { Header } from "./layout/header/header";
import { Title } from "./layout/title/title";
import { Browser } from "./services/browser";

/**
 * Start page
 * HTML Template collections
 * also main program strated from this file.
 */

class App extends React.Component<{}, {appEvents: CustomEvent[]}, {}> {

  private appEvents: CustomEvent[];
  private res: Resources;
  private browser: Browser;

  private IamTitle: React.ReactElement<any>;
  private IamHeader: React.ReactElement<any>;
  private IamFooter: React.ReactElement<any>;
  private IamContentBody: React.ReactElement<any>;

  constructor(args: any) {
    super(args);
    this.res = new Resources();
    this.browser = new Browser();

    loadResponseStyle(this.browser);

    this.state = {
      appEvents: [],
    };

    const injectImg = this.res.getImg("myAlgoImg") as imgObject;

    this.IamTitle =  <Title name="title" text="i am title" broadcaster={this.broadcaster}/>;
    this.IamHeader = <Header name="Header" text="no-render" provide={this.listener} broadcaster={this.broadcaster}/>;
    this.IamFooter = <Footer name="Footer" text="no-render"/>;
    this.IamContentBody = <ContentBody provide={this.listener} asset={injectImg} broadcaster={this.broadcaster}/>;

    this.broadcaster = this.broadcaster.bind(this);

  }

  public listener = (args: any) => {

    let localIndex: number = -1;
    // Write listener - just a basic for now
    if (args.instruction === "MakeTitleActive") {
      // Custom solution
      localIndex = this.getEventId(myEventsList.startTimer);
      (document as Document).dispatchEvent(this.state.appEvents[localIndex]);

    }  else {
      // When event name is equal with instruction
      localIndex = this.getEventId(args.instruction);
      (document as Document).dispatchEvent(this.state.appEvents[localIndex]);

    }

  }

  public broadcaster = (args: CustomEvent[]) => {
    // Getting values from children class
    let local: CustomEvent[];
    local = this.state.appEvents;
    args.forEach((item) => {
      local.push(item);
    });

    this.setState( {appEvents: local} );
    console.log("broadcasted events:", local);

  }

  public render() {
    return (
      <>
        {this.IamTitle}
        {this.IamHeader}
          {this.IamContentBody}
        {this.IamFooter}
      </>
    );
  }

  // Override func
  public componentDidMount() {
    // console.log("APPLICATION ROOT CLASS LOADED...");
  }

  private getEventId(name: string): number {
    let id = -1;
    this.state.appEvents.forEach((customEventItem, index) => {
      if (customEventItem.type === name) {
        id = index;
      }
    });
    if (id === -1) {
      throw new Error("Whoops! There is no registered event with name : " + name);
    }
    return id;
  }

}

// Finally create main instance.
ReactDOM.render(
  <App />,
  document.getElementById("root"),
);
