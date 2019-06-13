
import * as moment from 'moment';
import {Moment} from "moment";
import {DateFormats} from "./date-formats.enum";

export class DateService {
    
    changeFormat(dateStr: string, fromFormat: DateFormats, toFormat: DateFormats): Moment | string{
      
      if(dateStr == null || !moment(dateStr, fromFormat, true).isValid())
        return dateStr;
      else {
        return moment(dateStr, fromFormat).format(toFormat);
      }
    }

    toMoment(dateStr: string, dateFormat: DateFormats): Moment{
      if(dateStr == null || !moment(dateStr, dateFormat, true).isValid())
        return null;
      else
        return moment(dateStr, dateFormat);
    }
    toStr(dateMoment: Moment, format: DateFormats): string{
        return dateMoment != null ? dateMoment.format(format) : null;
    }
}