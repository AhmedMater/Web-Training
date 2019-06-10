import {Component, Input, OnInit} from "@angular/core";
import {OrderInfo} from "../data/order-info.model";

@Component({
  selector: 'aml-sort-arrow',
  template: `
    <span class="fa fa-sort-asc"
          *ngIf="(currentOrder.orderBy == orderName )&& currentOrder.orderDir == 'asc'"></span>
    <span class="fa fa-sort-desc"
          *ngIf="(currentOrder.orderBy == orderName) && currentOrder.orderDir == 'desc'"></span>
    <span class="fa fa-unsorted"
          *ngIf="currentOrder.orderBy != orderName"></span>
  `
})
export class SortArrowsComponent implements OnInit {

  @Input() orderName : string;
  @Input() currentOrder: OrderInfo;
  constructor(){}
  ngOnInit(){}
}
