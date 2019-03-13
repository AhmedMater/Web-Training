import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SecurityService} from "../../shared/security.service";
import {LoginDTO} from "../../shared/data/login-dto.data";
import {AuthUserVTO} from "../../shared/data/auth-user-vto.data";
import {LocalStorageService} from "../../../../infrastructure/services/local-storage.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FormBuilder, SecurityService]
})
export class LoginComponent implements OnInit {

  formData: FormGroup = this.formBuilder.group({
    username: [null],
    password: [null]
  });

  constructor(private formBuilder: FormBuilder,
              private securityService: SecurityService,
              private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  onLogin(){
    let data: LoginDTO = new LoginDTO();
    data.username = this.formData.get('username').value;
    data.password = this.formData.get('password').value;

    this.securityService.login(data).subscribe(
      res=> {
        // let authUser: AuthUserVTO = new AuthUserVTO();
        // authUser = res;
        // console.log(res);

        this.localStorageService.setAuthUser(res);
      },
      err=>console.log(err)
    );
  }
}
