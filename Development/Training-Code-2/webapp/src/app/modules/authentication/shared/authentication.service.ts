import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {RegisterDTO} from "./data/dto/register-dto.data";
import {ConfigParam} from "../../../core/common/config-param";
import {LoginDTO} from "./data/dto/login-dto.data";
import {AuthUser} from "./data/vto/auth-use.data";


@Injectable()
export class AuthenticationService {
  private BASE_URL: string = ConfigParam.BASE_URL + "security/";

  constructor(private http: HttpClient) {
  }

  register(data: RegisterDTO): Observable<RegisterDTO> {
    return this.http.post<RegisterDTO>(this.BASE_URL + 'register', data);
  }

  login(data: LoginDTO): Observable<AuthUser> {
    return this.http.post<AuthUser>(this.BASE_URL + 'login', data);
  }
}
