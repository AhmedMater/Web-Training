
export class AMError {
  error: string;
  isCreated: {
    // AR: boolean;
    EN: boolean;
  };
  isENCreated: boolean;
  divID: {
    // AR: string;
    EN: string;
  };

  constructor(error: string){
    this.error = error;
    this.isCreated = {
      // AR: false,
      EN: false
    };
    this.divID = {
      // AR: null,
      EN: null
    }
  }
}
