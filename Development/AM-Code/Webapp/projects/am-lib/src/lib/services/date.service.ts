
import * as momentNs from 'moment';
import {Moment} from "moment";

export class DateService {
    DISPLAY_MOMENT_DF: string = "YYYY-MM-DD";
    MOMENT_DATE_FORMAT: string = 'DD/MM/YYYY';
    SQL_DATE_FORMAT: string = 'yyyy-MM-dd';

    private moment = momentNs;
    changeDateFormat(dateStr: string, fromFormat: string, toFormat: string){
        if(fromFormat == this.MOMENT_DATE_FORMAT){
            let day = dateStr.split('/')[0];
            let month = dateStr.split('/')[1];
            let year = dateStr.split('/')[2];
            if(toFormat == this.SQL_DATE_FORMAT)
                return year + '-' + month + '-' + day;
        }
        return dateStr;
    }

    dateStrToMoment(dateStr: string){
        return dateStr != null ? this.moment(new Date(dateStr)) : null;
    }
    momentToDateStr(dateMoment: Moment){
        return dateMoment != null ? dateMoment.format(this.DISPLAY_MOMENT_DF) : null;
    }
    dateToMoment(date: Date){
        return date != null ? this.moment(date): null;
    }
}