


export interface AlertInput {
  status: string;
  message: string;
  localizationKey: string;
  appear: boolean;

  // constructor(status?: string, localizationKey?: string){
  //   this.status = status;
  //   this.localizationKey = localizationKey;
  //
  //   if(this.status != null && this.localizationKey != null)
  //     this.appear = true;
  // }
}
