import {AlertInput} from "./alert-input";


export class SuccessAlert implements AlertInput{
  appear: boolean = false;
  localizationKey: string;
  message: string;
  status: string = 's';

  constructor(localizationKey?: string){
    this.localizationKey = (localizationKey != null) ? localizationKey : "backend.success";
    this.appear = true;
  }
}
