import {AbstractControl} from "@angular/forms";


export class AmValidators {


  static confirmPasswords = (control: AbstractControl): {[key: string]: boolean} => {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    let valid:boolean = password == confirmPassword;
    return (!valid) ? {noMatch: true} : null;
  };
  static sequenceDates = (control: AbstractControl): {[key: string]: boolean} => {
    const start = control.get('from').value;
    const end = control.get('to').value;
    let valid:boolean = start <= end;
    return (!valid) ? {notInSequence: true} : null;
  };

  static emptyStr = (control: AbstractControl): {[key: string]: boolean} => {
    let content: string = control.value;
    let valid:boolean = true;

    if(content != null)
      valid = !/^ +$/.test(content);

    return (!valid) ? {emptyStr: true} : null;
  };
}
