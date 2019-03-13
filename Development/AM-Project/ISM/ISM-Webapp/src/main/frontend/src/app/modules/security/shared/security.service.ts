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

  test(){
    return this.http.get('http://localhost:8080/api/test');
  }
}
