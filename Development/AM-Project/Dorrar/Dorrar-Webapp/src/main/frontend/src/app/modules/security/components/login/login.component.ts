import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginDto} from "../../shared/data/login-dto.data";
import {SecurityService} from "../../shared/security.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FormBuilder, SecurityService]
})
export class LoginComponent implements OnInit {

 // valid: boolean;
  formData: FormGroup = this.formBuilder.group({
    username: [null, [Validators.required, Validators.maxLength(25), Validators.minLength(5)]],
    password: [null, [Validators.required, Validators.minLength(7)]]
  });

  constructor(private formBuilder: FormBuilder,
              private securityService: SecurityService) { }

  ngOnInit() {
  }

  login(){
    let data: LoginDto = new LoginDto();
    data.userName = this.formData.get('username').value;
    data.password = this.formData.get('password').value;

    console.log(data);
    //let valid: boolean;
    // if(this.validateUserDataService.validateUserLoginData(data)){
    if(this.formData.get('username').valid && this.formData.get('password').valid){
      //this.valid = true;
      this.securityService.Login(data).subscribe(
        res=>{console.log("Success");},
        err => {console.log(err);}
      );
    }else{
      //this.valid = false;
    }
  }

}
