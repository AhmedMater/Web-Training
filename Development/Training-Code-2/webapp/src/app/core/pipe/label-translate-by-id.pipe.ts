import {Pipe, PipeTransform} from "@angular/core";
import {LocalStorageService} from "../services/local-storage.service";

@Pipe({
  name: 'labelTranslateByID',
  pure: false
})
export class LabelTranslateByIdPipe implements PipeTransform{
  transform(id: number, list: any[]): any {
    // const LANGUAGES: typeof Languages = Languages;
    // let currentLang = localStorage.getItem(LocalStorageService.CURRENT_LANG);
	//
    // if(id == null || list == null || list.length == 0)
    //   return '';
    // else{
    //   for(let i=0; i< list.length; i++)
    //     if(id == list[i].id)
    //       return (currentLang == LANGUAGES.AR) ? list[i].labelAR : list[i].labelEN;
    // }
    return '';
  }

}
