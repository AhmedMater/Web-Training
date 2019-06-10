import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {LocalStorageService} from "../../../services/local-storage.service";

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private localStorageService: LocalStorageService, private router: Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!(this.localStorageService.getCurrentUser() != null && this.localStorageService.getCurrentUser().token != null))
      this.router.navigate(['/login']);
    return true;
  }
}
