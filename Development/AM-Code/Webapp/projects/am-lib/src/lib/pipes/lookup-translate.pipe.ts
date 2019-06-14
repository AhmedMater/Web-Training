import {Pipe, PipeTransform} from "@angular/core";
import {LanguageService} from "../services/language/language.service";
import {Languages} from "../services/language/language.enum";

@Pipe({
  name: 'lookupTranslate',
  pure: false
})

export class LookupTranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService){
  
  }
  transform(item: any, attribute: string) {
    // console.log(item);
    const LANGUAGES: typeof Languages = Languages;
    let currentLang = this.languageService.getCurrentLanguage();

    if(item != null) {
      if(item[attribute + 'AR'] == null && item[attribute + 'EN'] == null)
        return '';
      else
        item[attribute + 'Translated'] = (currentLang == LANGUAGES.AR) ?
          item[attribute + 'AR'] : item[attribute + 'EN'];
        return item[attribute + 'Translated'];
    }else
      return '';
  }
}
