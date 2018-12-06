import { Component, OnInit } from '@angular/core';
import {FullRoutes} from "../../../../core/data/enums/full-routes.enum";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorInput} from "../../../../core/directive/validator/data/validator-input.data";
import {AmValidators} from "../../../../core/common/am-validators";
import {AlertInput} from "../../../../core/directive/alerts/data/alert-input";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../shared/authentication.service";
import {RegisterDTO} from "../../shared/data/dto/register-dto.data";
import {LoginDTO} from "../../shared/data/dto/login-dto.data";
import {FailureAlert} from "../../../../core/directive/alerts/data/failure-alert";

@Component({
  selector: 'amt-login',
  templateUrl: './login.component.html',
  providers: [AuthenticationService, FormBuilder]
})
export class LoginComponent implements OnInit {
  formData: FormGroup = this.formBuilder.group({
    username: [null, [
      Validators.required,
      AmValidators.emptyStr,
      Validators.pattern(/^[A-Za-z][A-Za-z0-9\.\-_]+$/),
      Validators.minLength(5),
      Validators.maxLength(25)]
    ],
    password: [null, [
          Validators.required,
          AmValidators.emptyStr,
          Validators.minLength(8),
          Validators.maxLength(25)]
    ]
  });

  ROUTES: typeof FullRoutes = FullRoutes;

  alertInput: AlertInput;
  validatorInput: ValidatorInput = new ValidatorInput('authentication.login', this.formData);


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    let data: LoginDTO = new LoginDTO();
    data.username = this.formData.get('username').value;
    data.password = this.formData.get('password').value;

    this.authService.login(data).subscribe(
      res => {
        console.log(res);
        this.router.navigate([this.ROUTES.HOME])
      },
      err => this.alertInput = new FailureAlert(err.error.message)
    );
  }

}
