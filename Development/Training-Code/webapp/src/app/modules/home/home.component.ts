import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // showTitle: boolean = false;
  // names: string[] = ["Ahmed", "Amr", "Manal", "Hala"];

  isSuccess: boolean = false;
  isFailure: boolean = false;
  constructor() {
    // let item: string = "Ahmed";
  }

  ngOnInit() {
  }

  // onClickShowTitle(){
  //   this.showTitle = !this.showTitle;
  // }

  makeFieldSuccess(){
    this.isSuccess = true;
    this.isFailure = false;
  }

  makeFieldFailed(){
    this.isSuccess = false;
    this.isFailure = true;
  }

  makeFieldNormal(){
    this.isFailure = false;
    this.isSuccess = false;
  }
  onClick(){
    console.log('Finished');

  }
  validateText(text: string){
    console.log(text);

    if(text.length == 0)
      this.makeFieldNormal();
    else if(text.length < 5)
      this.makeFieldFailed();
    else
      this.makeFieldSuccess();
  }
}
