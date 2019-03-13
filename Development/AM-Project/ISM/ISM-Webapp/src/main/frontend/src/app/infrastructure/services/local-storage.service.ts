import { Injectable } from '@angular/core';
import {AuthUserVTO} from "../../modules/security/shared/data/auth-user-vto.data";

@Injectable()
export class LocalStorageService {

  static AUTH_USER: string = 'ISM-Auth-User';

  constructor() { }

  setAuthUser(user: AuthUserVTO){
    let json: string = JSON.stringify(user);
    localStorage.setItem(LocalStorageService.AUTH_USER, json);
  }

  getCurrentUser(): AuthUserVTO{
    let json: string = localStorage.getItem(LocalStorageService.AUTH_USER);
    let authUser: AuthUserVTO = JSON.parse(json);
    return authUser;
  }
}
