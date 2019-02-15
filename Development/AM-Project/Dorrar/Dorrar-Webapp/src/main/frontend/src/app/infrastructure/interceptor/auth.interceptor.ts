import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // req = req.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ` + localStorage.getItem('token')
    //   }
    // });
    req = req.clone({
      headers:
        req.headers.set("Authorization", "Bearer " + localStorage.getItem('token'))
    });
    req = req.clone({ headers: req.headers.set("Content-Type", "application/json") });
    console.log(req);
    return next.handle(req);
  }

}
