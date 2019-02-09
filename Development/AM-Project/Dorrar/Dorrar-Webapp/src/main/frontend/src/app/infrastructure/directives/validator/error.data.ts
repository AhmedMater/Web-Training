
export class ErrorData {
  error: string;
  arCreated: boolean;
  enCreated: boolean;
  arDivID: string;
  enDivID: string;

  constructor(error: string){
    this.error = error;
    this.arCreated = false;
    this.enCreated = false;
  }
}
