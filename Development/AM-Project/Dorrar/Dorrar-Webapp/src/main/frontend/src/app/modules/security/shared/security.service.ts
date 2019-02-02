import {Injectable} from "@angular/core";
import {LoginDto} from "./data/login-dto.data";
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "./data/login-dto.data";

@Injectable()
export class SecurityService{

  constructor(private http: HttpClient){}

  Login(data:LoginDto){
    console.log(data);

    return this.http.post("http://localhost:8080/api/user/login", data);
  }
}

