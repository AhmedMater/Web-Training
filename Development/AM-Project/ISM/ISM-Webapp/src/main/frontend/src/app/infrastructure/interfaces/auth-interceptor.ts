import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {LocalStorageService} from "../services/local-storage.service";
import {AuthUserVTO} from "../../modules/security/shared/data/auth-user-vto.data";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private localStorageService: LocalStorageService){

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authUser: AuthUserVTO = this.localStorageService.getCurrentUser();
    if(authUser != null) {
      req = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + authUser.token)});
    }

    return next.handle(req);
  }

}
