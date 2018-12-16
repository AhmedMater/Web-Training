import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";


export class RESTInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ headers: req.headers.set("Accept", "application/json") });
    req = req.clone({ headers: req.headers.set("Content-Type", "application/json") });

    return next.handle(req);
  }

}
