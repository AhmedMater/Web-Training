import {FormGroup} from "@angular/forms";
import { Injectable } from "@angular/core";
import {LocalStorageService} from "./local-storage.service";
import {Languages} from "../common/language.enum";

@Injectable()
export class UtilService {

  constructor(private localStService: LocalStorageService){}

  clone<T>(instance: T): T {
    const copy = new (instance.constructor as { new(): T })();
    Object.assign(copy, instance);
    return copy;
  }

  translate<T>(item: T, prefix: string) {
    let lang: Languages = this.localStService.getCurrentLanguage();
    item[prefix + 'Translated'] = item[prefix + lang.toUpperCase()];
    return item;
  }

  cloneList<T>(instance: T[]): T[] {
    let list: T[] = [];

    if (instance != null && instance.length != 0)
      for (let i = 0; i < instance.length; i++)
        list.push(this.clone<T>(instance[i]));

    return list;
  }

  markControlsDirty(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.controls[key];

      if (abstractControl instanceof FormGroup) {
        this.markControlsDirty(abstractControl);
      } else {
        abstractControl.markAsTouched();
        abstractControl.markAsDirty();
      }
    });
  }


  addIfNotFoundByID<T>(array: T[], item: T): T[] {
    let found: boolean = false;
    for (let i = 0; i < array.length; i++)
        if (array[i]['id'] == item['id']) {
            found = true;
            break;
        }

    if (!found)
        array.push(item);
    return array;
  }

   hasValue(value){
        return (value != null) && (typeof value === 'string' && value.trim() != '');
    }
  hasValueAndIsNumber(value){
      return this.hasValue(value) && !isNaN(parseInt(value));
  }

}



