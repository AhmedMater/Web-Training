import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";


export class RESTInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // let username: string = 'ECMSAPP';
    // let password: string = 'ecms';
    // let username: string = 'yousef.shoair';
    // let password: string = '123456';

    // req = req.clone({ headers: req.headers.set("Authorization", "Basic " + btoa(username + ":" + password)) });
    req = req.clone({ headers: req.headers.set("Accept", "application/json") });
    // const tokenValue = localStorage.getItem(LocalStorageService.TOKEN);
    // if(tokenValue != null && tokenValue != undefined)
    //   req = req.clone({ headers: req.headers.set('token' , tokenValue) });

    // if(req.body instanceof FormData)
    //   req = req.clone({ headers: req.headers.set("Content-Type", "multipart/form-data") });
    // else if(req.method == "POST")
      req = req.clone({ headers: req.headers.set("Content-Type", "application/json") });
    // if(req.url == ConfigParam.JASPER_URL + "/export")
    //   req = req.clone({headers: req.headers.set("Content-Type", "application/json").set("Accept", "application/octet-stream")});


    // console.log(req);
    return next.handle(req);
    // .do((event: HttpEvent<any>) => {
    //   return event;
    // }, (err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     if (!navigator.onLine)
    //       return new HttpErrorResponse({
    //         error: "STC-0000",
    //         headers: err.headers,
    //         status: 400,
    //         statusText: "Bad Request",
    //         url: err.url
    //       });
    //   }
    //   return err;
    // });
  }

}
