import {FormGroup} from "@angular/forms";


export class ValidatorInput{
  localizationPrefix:string;
  formData: FormGroup;

  constructor(localizationPrefix:string, formData: FormGroup){
    this.localizationPrefix = localizationPrefix;
    this.formData = formData;
  }
}
