/**
 * Input params go to super call 
 * and fill this.props values (read only)
 * this.stage is also populeted with values.
 */
import IApp from '../../globals/interfaces';
import { CSSProperties } from 'react';
import AppI from '../../globals/interfaces';

export interface LabelI extends AppI.HoverI { 
  name: string;
  text: string;
  onClick(): void | undefined | null;
  myStyle: CSSProperties;
}

export interface LabelStateI extends IApp.ElementI {
    name: string,
    text: string,
}
