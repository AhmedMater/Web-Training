import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'lookupTranslate',
  pure: false
})

export class LabelTranslatePipe implements PipeTransform {
  transform(item: any, attribute: string) {
    // const LANGUAGES: typeof Languages = Languages;
    // let currentLang = localStorage.getItem(LocalStorageService.CURRENT_LANG);
    // if(item != null) {
    //   item.labelTranslated = (currentLang == LANGUAGES.AR) ?
    //     item[attribute + 'AR'] : item[attribute + 'EN'];
    //   return item.labelTranslated;
    // }else
      return '';
  }
}
