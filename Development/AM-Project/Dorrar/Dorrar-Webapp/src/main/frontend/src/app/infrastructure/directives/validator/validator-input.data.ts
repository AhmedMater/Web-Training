import {FormGroup} from "@angular/forms";


export class ValidatorInputData{
  localizationPrefix:string;
  formData: FormGroup;

  constructor(localizationPrefix:string, formData: FormGroup){
    this.localizationPrefix = localizationPrefix;
    this.formData = formData;
  }

  clone(): ValidatorInputData{
    return new ValidatorInputData(this.localizationPrefix, this.formData);
  }
}
