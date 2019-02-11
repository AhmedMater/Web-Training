import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SecurityService} from "../../shared/security.service";
import {AuthVto} from "../../shared/data/auth-vto.data";
import {LoginDTO} from "../../shared/data/login-dto.data";

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FormBuilder, SecurityService]
})
export class LoginComponent implements OnInit {

  authVto: AuthVto;
  formData: FormGroup = this.formBuilder.group({
    username: [null, [Validators.required, Validators.maxLength(25), Validators.minLength(5)]],
    password: [null, [Validators.required, Validators.minLength(7)]]
  });

  constructor(private formBuilder: FormBuilder,
              private userService: SecurityService) { }

  ngOnInit() {
  }

  login(){
    let data: LoginDTO = new LoginDTO();
    data.username = this.formData.get('username').value;
    data.password = this.formData.get('password').value;
    //TODO: Aya - use formData.valid instead
    if(this.formData.valid){
      this.userService.Login(data).subscribe(
        res=>{
          this.authVto = res;
          console.log("Success");
          console.log(this.authVto);
          localStorage.setItem('token', this.authVto.token);
        },
        err => {console.log(err);}
      );
    }else{
      console.log("Invalid user name or/and password");
    }
  }

}
