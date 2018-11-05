import { imgObject, imgResources } from "../globals/types";

export class Resources {
    /**
     * This is containner for all images.
     * This is our custom type for image or image array.
     * Definition :
     * export type imageObject = HTMLImageElement | HTMLImageElement[];
     * export type imgResources = { [key: string]: imageObject[] };
     */
    private imgs: imgResources = {};

    constructor() {
      this.loadInitialImages();
    }

    public getImg = (name: string): imgObject => {

      return this.imgs[name] as imgObject;

    }

    private loadInitialImages = () => {

      // Register for images :
      const name = "myAlgoImg";
      this.imgs[name] = require("./images/algoritam.png");

    }

}
