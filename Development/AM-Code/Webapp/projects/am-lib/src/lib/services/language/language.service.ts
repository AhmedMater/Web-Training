import {Languages} from "./language.enum";
import {ConfigParam} from "../../common/config-param";


export class LanguageService {
  CURRENT_LANG: string = ConfigParam.CURRENT_PROJECT_NAME + '-LANG';
  
  getLang(lang: string): Languages {
    if(lang == 'ar')
      return Languages.AR;
    else if(lang == 'en')
      return Languages.EN;
    else
      return Languages.AR;
  }
  
  setLanguage(lang: Languages) {
    localStorage.setItem(this.CURRENT_LANG, lang);
  }
  
  getCurrentLanguage(): Languages {
    return this.getLang(localStorage.getItem(this.CURRENT_LANG));
  }
  
  translate<T>(item: T, prefix: string) {
    let lang: Languages = this.getCurrentLanguage();
    item[prefix + 'Translated'] = item[prefix + lang.toUpperCase()];
    return item;
  }
}