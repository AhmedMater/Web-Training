import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {LocalStorageService} from "../services/local-storage.service";
import {Observable} from "rxjs/internal/Observable";
import {AuthUser} from "../generic/authorization/data/auth-user.model";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private localStorageService: LocalStorageService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authUser: AuthUser = this.localStorageService.getCurrentUser();
    if(authUser != null) {
      req = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + authUser.token)});
    }

    return next.handle(req);
  }

}
