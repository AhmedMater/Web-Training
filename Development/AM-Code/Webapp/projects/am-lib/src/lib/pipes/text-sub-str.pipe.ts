import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: 'textSubStr'
})
export class textSubStrPipe implements PipeTransform {
  transform(value: string, mazLength: number): string {
    if(value != null){
      if(value.length > mazLength)
        return value.substr(0, mazLength) + " ...";
      else
        return value;
    }else
      return "";
  }

}
