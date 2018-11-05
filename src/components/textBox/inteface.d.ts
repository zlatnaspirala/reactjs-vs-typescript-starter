import IApp from "../../globals/interfaces";

export interface TextBoxI { name: string, text: string }
export interface TextBoxStateI extends TextBoxI , IApp.ElementI {}
