import AppI from "../../globals/interfaces";

export interface TitleI extends AppI.NameTextI {
    broadcaster(args: CustomEvent[]): void 
}
export interface TitleStateI extends AppI.NameTextI, AppI.TimerI {
    myEvent: CustomEvent[]
}
