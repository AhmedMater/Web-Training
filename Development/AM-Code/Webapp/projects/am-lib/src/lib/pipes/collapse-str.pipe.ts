import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: 'collapseStr',
  pure: false
})
export class CollapseStrPipe implements PipeTransform{
  transform(value: string, maxLength:number, isTooltip: boolean = false): any {
    if(value != null && maxLength != null) {
      if(isTooltip)
        return (value.length > maxLength) ? value : '';
      else
        return (value.length > maxLength) ? value.substr(0, maxLength) + '...' : value;
    } else
      return '';
  }

}
