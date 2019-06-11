import {AuthUser} from "../generic/authorization/data/auth-user.model";
import {ConfigParam} from "../common/config-param";

export class LocalStorageService {
  AUTH_USER: string = ConfigParam.CURRENT_PROJECT_NAME + '-AUTH-USER';
  SESSION: string = ConfigParam.CURRENT_PROJECT_NAME + '-Token';

  getCurrentUser(): AuthUser {
    let json: string = localStorage.getItem(this.AUTH_USER);
    let authUser: AuthUser;

    if(json != null)
      authUser = JSON.parse(json);

    return authUser;
  }

  setCurrentUser(authUser: AuthUser) {
    if(authUser.viewIDs == undefined)
      authUser.viewIDs = [];
    if(authUser.actionIDs == undefined)
      authUser.actionIDs = [];
    localStorage.setItem(this.AUTH_USER, JSON.stringify(authUser));
  }

  clearAuthData(){
    localStorage.removeItem(this.AUTH_USER);
  }

  getUserViews(): number[] {
    let authUser: AuthUser = this.getCurrentUser();
    if(authUser.viewIDs != undefined)
      return authUser.viewIDs;
  }

  getUserActions() : number[] {
    let authUser: AuthUser = this.getCurrentUser();
    if(authUser.actionIDs != undefined)
      return authUser.actionIDs;
  }
}
