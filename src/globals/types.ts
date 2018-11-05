import AppI from "./interfaces";

export type Tap = MouseEvent | TouchEvent;
export type Tick = null | number | NodeJS.Timer;
export type BodySectionFlag = undefined | AppI.SectionI;
export type imgObject = HTMLImageElement | HTMLImageElement[];
export type imgResources = {[key: string]: imgObject[]};
