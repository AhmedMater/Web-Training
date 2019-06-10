import {AuthUser} from "../generic/authorization/data/auth-user.model";
import {getLang, Languages} from "../common/language.enum";

export class LocalStorageService {
  PREFIX: string = "ISAD-";
  AUTH_USER: string = this.PREFIX + 'AUTH-USER';
  CURRENT_LANG: string = this.PREFIX + 'LANG';
  static SESSION: string = 'ISAD-Token';


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

  getCurrentLanguage(): Languages {
    return getLang(localStorage.getItem(this.CURRENT_LANG));
  }
  setLanguage(lang: Languages) {
    localStorage.setItem(this.CURRENT_LANG, lang);
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
