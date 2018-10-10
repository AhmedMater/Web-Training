import {AlertInput} from "./alert-input";


export class FailureAlert implements AlertInput{
  appear: boolean = false;
  status: string = 'f';
  localizationKey: string;
  message: string;

  constructor(localizationKey: string){
    this.localizationKey = "backend.error." +  localizationKey;
    this.appear = true;
  }

}
