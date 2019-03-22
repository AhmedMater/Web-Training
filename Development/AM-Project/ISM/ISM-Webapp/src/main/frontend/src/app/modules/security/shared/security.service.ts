import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterDTO} from "./data/register-dto.data";
import {Injectable} from "@angular/core";
import {LoginDTO} from "./data/login-dto.data";
import {AuthUserVTO} from "./data/auth-user-vto.data";

@Injectable()
export class SecurityService {
  constructor(private http: HttpClient){

  }

  register(data: RegisterDTO){
    return this.http.post('http://localhost:8080/api/register', data);
  }

  login(data: LoginDTO){
    return this.http.post<AuthUserVTO>('http://localhost:8080/api/login', data);
  }

  testAuthentication(){
    return this.http.get('http://localhost:8080/api/test');
  }

  testAction(){
    return this.http.get('http://localhost:8080/api/test-action');
  }

  testView(){
    return this.http.get('http://localhost:8080/api/test-view');
  }
}
