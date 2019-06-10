import {AbstractControl, ValidatorFn} from '@angular/forms';
import * as momentNs from 'moment';

/**
 * Created by ahmed.motair on 4/2/2018.
 */

export class FormValidators {

    static moment = momentNs;

    constructor() {

    }

    static fromToDates = (control: AbstractControl): { [key: string]: boolean } => {
        let startDate: string = null;
        let startYear: string = control.get('start').value != null ? control.get('start').value.year : '';
        let startMonth: string = control.get('start').value != null ? control.get('start').value.month : '';
        let startDay: string = control.get('start').value != null ? control.get('start').value.day : '';

        let endDate: string = null;
        let endYear: string = control.get('end').value != null ? control.get('end').value.year : '';
        let endMonth: string = control.get('end').value != null ? control.get('end').value.month : '';
        let endDay: string = control.get('end').value != null ? control.get('end').value.day : '';

        if (parseInt(startDay) < 10)
            startDay = '0' + startDay;
        if (parseInt(startMonth) < 10)
            startMonth = '0' + startMonth;

        if (parseInt(endDay) < 10)
            endDay = '0' + endDay;
        if (parseInt(endMonth) < 10)
            endMonth = '0' + endMonth;

        if (control.get('start').value != null)
            startDate = startYear + '-' + startMonth + '-' + startDay;

        if (control.get('end').value != null)
            endDate = endYear + '-' + endMonth + '-' + endDay;

        let valid: boolean = startDate <= endDate;
        if (control.get('start').value == null || control.get('end').value == null)
            valid = true;
        return (!valid) ? {notInSequence: true} : null;
    };

    static emptyStr = (control: AbstractControl): { [key: string]: boolean } => {
        let content: string = control.value;
        let valid: boolean = true;

        if (content != null)
            valid = !/^( |&nbsp;|\n|\r|\t)+$/.test(content);

        return (!valid) ? {emptyStr: true} : null;
    };

    static minDateValidator(min: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            let isValid = false;
            if (control != null && control.value != null) {
                let controlDate = momentNs(control.value);
                let minDate = momentNs(min);
                isValid = controlDate.isSameOrAfter(minDate);
            }
            return isValid ?
                null : {'minDate': true};
        };
    }

    static maxDateValidator(max: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            let isValid = false;
            if (control != null && control.value != null) {
                let controlDate = momentNs(control.value);
                let maxDate = momentNs(max);
                isValid = controlDate.isSameOrBefore(maxDate);
            }
            return isValid ?
                null : {'maxDate': true};
        };
    }
    static isInteger = (control: AbstractControl): { [key: string]: any } => {
            let isValid = false;
            if (control != null && control.value != null && control.value != '') {
                console.log(control.value);
                let x;
                isValid = isNaN(control.value) ? !1 : (x = parseFloat(control.value), (0 | x) === x);
                return isValid ?
                    null : {'invalidInteger': true};
            }
        };

    static notDecimal = (control: AbstractControl): { [key: string]: boolean } => {
        let content: string = control.value;
        let valid: boolean = true;
        let contentNum: number = parseFloat(content);
        if (isNaN(contentNum))
            valid = false;
        if (contentNum % 1 != 0)
            valid = false;

        return (!valid) ? {decimal: true} : null;
    };

    static validEmail = (control: AbstractControl): { [key: string]: boolean } => {
        let content: string = control.value;
        let valid: boolean = true;

        if (content != null) {
            valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(content);
            if (!valid)
                return {invalidEmail: true};
        }
        return null;
    };

    static inFuture = (control: AbstractControl): { [key: string]: boolean } => {
        let startVal = FormValidators.moment(new Date());
        let endVal = control.value;
        if (endVal != null)
            endVal = FormValidators.moment(new Date(endVal.format('l')));

        let valid: boolean = true;


        if (startVal != null && endVal != null) {
            valid = ((startVal <= endVal) ||
                (startVal.format("DD-MM-YYYY") == endVal.format("DD-MM-YYYY")));
        }

        return (!valid) ? {notInFuture: true} : null;
    };

    static inPast = (control: AbstractControl): { [key: string]: boolean } => {
        let startVal = FormValidators.moment(new Date());
        let endVal = control.value;
        if (endVal != null)
            endVal = FormValidators.moment(new Date(endVal.format('l')));

        let valid: boolean = true;
        if (startVal != null && endVal != null)
            valid = startVal >= endVal;

        return (!valid) ? {notInPast: true} : null;
    };
}
