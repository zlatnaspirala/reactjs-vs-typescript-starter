import * as React from "react";
import IApp from "../globals/interfaces";
import AppI from "../globals/interfaces";
import { Program } from "../globals/program";
import { BodySectionFlag } from "../globals/types";

export namespace Services {

  export function createEvent(name: string, myDetails: any ) {
      return new CustomEvent(name, {
          detail: {
            eventName: name,
            data: myDetails,
          },
          bubbles: true,
        });
  }

  export function addElement(args: IApp.NewElementArgsI, bodySection?: BodySectionFlag ) {

    let localArr: any[] = [];
    const localArrHover: boolean[] = [];
    let currentIndex: number = 0;
    let currentSectionsState;
    let mEvent: any = null;

    if (event !== undefined) {
      mEvent = event;
    } else {
      mEvent = null;
    }

    // if bodySection is not set like argument
    // just import in this.state.elements!
    if (!bodySection) {

    localArr = this.state.elements;

    if (args.hoverIn === null || args.hoverOut === null) {

      localArr.push(React.createElement("div",
        {key: args.key,
          onClick: args.onClick,
          style: args.myStyle,
        }, args.content));

      localArrHover.push(false);

    } else {

      localArr.push(React.createElement("div",
        {
          key: args.key,
          onClick: args.onClick,
          style: args.myStyle,
          onMouseEnter: args.hoverIn,
          onMouseLeave: args.hoverOut,
        },
        args.content));

      localArrHover.push(false);

    }

    this.setState(
      {
        elements: localArr,
        visibility : true,
        hovered: localArrHover,
      },
    );

    // console.log ( this.state.hovered[0] + "HHHHH this.state.hovered[0] HHHH");

    } else {

      currentSectionsState = this.state.sections;

      // Found current body section.
      this.state.sections.forEach((sectionElement: AppI.SectionI, index: number) => {
        if (bodySection.name === sectionElement.name) {
          localArr = sectionElement.elements;
          currentIndex = index;
        }
      });

      localArr.push(React.createElement("div",
       { key: args.key, onClick: args.onClick, style: args.myStyle }, args.content));

      localArrHover.push(false);

      currentSectionsState[currentIndex].elements = localArr;
      this.setState(
        {
          sections: currentSectionsState,
        },
      );

    }

  }

  /**
   * loadImage
   * @param filename Path to the image
   */
  export function loadImage(filename: string) {

    const img = new Image();
    img.addEventListener("load", incrementTotalLoadedImages, false);
    img.addEventListener("error", errorOnImageLoad, false);
    img.src = filename;

  }

  function incrementTotalLoadedImages() {
    Program.totalLoadedImage++;
  }

  function errorOnImageLoad(e: Event) {
    console.warn("Error on image load method ! Err : ", e);
  }

}

export default Services;
