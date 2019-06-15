import {Component, Input, OnInit} from "@angular/core";
import {OrderInfo} from "../data/order-info.model";

@Component({
  selector: 'aml-order-arrow',
  template: `
    <span class="fa" [ngClass]="{
         'fa-sort-asc': (currentOrder.orderBy == orderName ) && currentOrder.orderDir == OrderInfo.ASC,
         'fa-sort-desc': (currentOrder.orderBy == orderName ) && currentOrder.orderDir == OrderInfo.DESC,
         'fa-unsorted': currentOrder.orderBy != orderName}"></span>
  `
})
export class AMLOrderArrowsComponent implements OnInit {

  @Input() orderName : string;
  @Input() currentOrder: OrderInfo;
  constructor(){}
  ngOnInit(){}
}
