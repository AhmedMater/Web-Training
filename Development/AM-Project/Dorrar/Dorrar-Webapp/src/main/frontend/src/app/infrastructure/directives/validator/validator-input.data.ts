import {FormGroup} from "@angular/forms";


export class ValData{
  localPrefix:string;
  formData: FormGroup;

  constructor(localPrefix:string, formData: FormGroup){
    this.localPrefix = localPrefix;
    this.formData = formData;
  }

  clone(): ValData{
    return new ValData(this.localPrefix, this.formData);
  }
}
