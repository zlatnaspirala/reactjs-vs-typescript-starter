import * as React from "react";
import { myEventsList } from "../../globals/events-enum";
import AppI from "../../globals/interfaces";
import { Tick } from "../../globals/types";
import Services from "../../services/services";
import { TitleI, TitleStateI } from "./title.d";

export class Title extends React.Component<TitleI, TitleStateI> implements AppI.TickI {

  public myTimer: Tick = null;

  constructor(props: TitleI) {
    super(props);

    this.state = {
        myEvent: [Services.createEvent(myEventsList.startTimer, {self: this})],
        timeInterval: 50,
        tCount: 0,
        name: this.props.name,
        text: this.props.text,
    };

    this.tick = this.tick.bind(this);

  }

  public setTitle = (newValue: string) => {

      const head = document.head;
      this.setState (
        {
          text : newValue,
        },
      );
      if ("title" in document) {
        document.title = this.state.text;
      } else if ("title" in head) {
        (document as Document).head.title = this.state.text;
      }

  }

  // Override func
  public componentDidMount() {

    const root = this;
    (document as Document).addEventListener(myEventsList.startTimer, root.MakeTitleActive);
    this.setTitle(this.props.text);

    // Event register
    this.props.broadcaster(this.state.myEvent);

  }

  public render() {
      return <></>;
  }

  public MakeTitleActive = (e: any) => {
    const self = e.detail.data.self;
    this.myTimer = setInterval(self.tick , 50);
  }

  public tick = () => {
    this.setState({tCount: this.state.tCount + 1});
    this.setTitle( "Time machine:" + this.state.tCount);
  }

  public stopTimer = () => {
    clearInterval(this.myTimer as any);
  }

  // Override func
  public componentDidUpdate(prevProps: any, prevState: any) {
    // console.log("prevProps:", prevProps, " prevState:", prevState);
  }

  // Override func
  public componentWillUpdate(nextProps: any, nextState: any) {
    // console.log("nextProps:", nextProps, " nextState:", nextState);
  }

}
