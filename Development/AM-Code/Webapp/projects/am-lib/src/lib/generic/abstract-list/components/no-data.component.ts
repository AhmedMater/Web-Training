import {Component, Input, OnInit} from "@angular/core";
import {ConfigParam} from "../../../common/config-param";

@Component({
  selector: 'aml-no-data-list',
  template: `
    <div *ngIf="list == null || list.length == 0" class="alert no-result mt-3">
      <img [src]="imgPath">
      <h3>{{'emptyPage.noData' | translate}}</h3>
    </div>

  `
})
export class NoDataListComponent implements OnInit {
  imgPath: string = '../../../../..' + ConfigParam.ASSETS_IMG + '/no-data.svg';
  @Input() list : any[];

  constructor(){}
  ngOnInit(){}
}
