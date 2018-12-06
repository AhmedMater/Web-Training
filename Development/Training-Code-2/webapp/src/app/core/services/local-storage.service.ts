import {getLang, Languages} from "../data/enums/languages.enum";


export class LocalStorageService {
  static CURRENT_LANG: string = 'AMT-LANG';


  static getCurrentLanguage(): Languages {
    return getLang(localStorage.getItem(LocalStorageService.CURRENT_LANG));
  }
  static setLanguage(lang: Languages) {
    localStorage.setItem(LocalStorageService.CURRENT_LANG, lang);
  }
}
