import {Component, OnChanges, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../shared/authentication.service";
import {validate} from "codelyzer/walkerFactory/walkerFn";
import {AmValidators} from "../../../../core/common/am-validators";
import {ValidatorInput} from "../../../../core/directive/validator/data/validator-input.data";
import {RegisterDTO} from "../../shared/data/dto/register-dto.data";
import {Router, RouterLink} from "@angular/router";
import {FullRoutes} from "../../../../core/data/enums/full-routes.enum";
import {AlertInput} from "../../../../core/directive/alerts/data/alert-input";
import {FailureAlert} from "../../../../core/directive/alerts/data/failure-alert";

@Component({
  selector: 'amt-register',
  templateUrl: './register.component.html',
  providers: [FormBuilder, AuthenticationService]
})
export class RegisterComponent implements OnInit {
  formData: FormGroup = this.formBuilder.group({
    username: [null, [
      Validators.required,
      AmValidators.emptyStr,
      Validators.pattern(/^[A-Za-z][A-Za-z0-9\.\-_]+$/),
      Validators.minLength(5),
      Validators.maxLength(25)]
    ],
    email: [null, [
      Validators.required,
      AmValidators.emptyStr,
      Validators.email,
      Validators.minLength(15),
      Validators.maxLength(50)]
    ],
    subscribeEmail: false,
    pass: this.formBuilder.group({
      password: [null, [
        Validators.required,
        AmValidators.emptyStr,
        Validators.minLength(8),
        Validators.maxLength(25)]
      ],
      confirmPassword: [null, [Validators.required]]
    }, {validator: AmValidators.confirmPasswords}
    )
  });

  ROUTES: typeof FullRoutes = FullRoutes;

  alertInput: AlertInput;
  validatorInput: ValidatorInput = new ValidatorInput('authentication.register', this.formData);

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  onSubmit(){
    let data: RegisterDTO = new RegisterDTO();
    data.username = this.formData.get('username').value;
    data.email = this.formData.get('email').value;
    data.password = this.formData.get('pass').get('password').value;
    data.subscribeEmail = this.formData.get('subscribeEmail').value;

    this.authService.register(data).subscribe(
      res => this.router.navigate([this.ROUTES.LOGIN]),
      err => console.log(err)
    );
  }

}
