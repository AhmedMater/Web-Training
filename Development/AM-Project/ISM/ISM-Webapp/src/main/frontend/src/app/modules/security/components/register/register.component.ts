import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SecurityService} from "../../shared/security.service";
import {RegisterDTO} from "../../shared/data/register-dto.data";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [FormBuilder, SecurityService]
})
export class RegisterComponent implements OnInit {

  formData: FormGroup = this.formBuilder.group({
    firstName: [null],
    lastName: [null],
    username: [null],
    password: [null],
    confirmPassword: [null],
    email: [null]
  });

  constructor(private formBuilder: FormBuilder,
              private securityService: SecurityService) { }

  ngOnInit() {

  }

  onSubmit(){
    let data: RegisterDTO = new RegisterDTO();
    data.firstName = this.formData.get('firstName').value;
    data.lastName = this.formData.get('lastName').value;
    data.username = this.formData.get('username').value;
    data.password = this.formData.get('password').value;
    data.email = this.formData.get('email').value;

    this.securityService.register(data).subscribe(
      res => {},
      err => {console.log(err);}
    )
  }

}
