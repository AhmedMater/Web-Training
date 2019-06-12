import {Component, Input, OnInit} from "@angular/core";
import {ConfigParam} from "../../../../common/config-param";

@Component({
  selector: 'aml-no-data-list',
  styleUrls: ['./aml-no-data.component.scss'],
  template: `
    <div *ngIf="list == null || list.length == 0" class="alert no-data mt-3">
      <img [src]="imgPath">
      <h3>{{'amLib.emptyPage.noData' | translate}}</h3>
    </div>

  `
})
export class AMLNoDataListComponent implements OnInit {
  imgPath: string = '../../../../..' + ConfigParam.ASSETS_IMG + '/no-data.svg';
  @Input() list : any[];

  constructor(){}
  ngOnInit(){}
}
