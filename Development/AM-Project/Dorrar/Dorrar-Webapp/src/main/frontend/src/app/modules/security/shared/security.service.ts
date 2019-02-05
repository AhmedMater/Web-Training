import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "./data/login-dto.data";
import {AuthVto} from "./data/auth-vto.data";
@Injectable()
export class SecurityService{

  constructor(private http: HttpClient){}

  Login(data:LoginDto){
    console.log(data);

    return this.http.post<AuthVto>("http://localhost:8080/api/security/login", data);
  }
}
