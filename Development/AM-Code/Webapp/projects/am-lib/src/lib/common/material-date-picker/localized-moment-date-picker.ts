import {MomentDateAdapter} from "@angular/material-moment-adapter";
import * as momentNs from 'moment';
import {Moment} from "moment";


export class LocalizedMomentDatePicker extends MomentDateAdapter{
  moment = momentNs;
  parse(value: any, parseFormat: any): Moment {
    return this.moment(value, parseFormat);
  }
}
