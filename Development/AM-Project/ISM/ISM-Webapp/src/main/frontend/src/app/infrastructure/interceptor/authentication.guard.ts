import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService} from "../services/local-storage.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private localStorageService: LocalStorageService, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.localStorageService.getCurrentUser() != null &&
        this.localStorageService.getCurrentUser().token != null)
      return true;
    else
      this.router.navigate(['/login']);
  }
}
