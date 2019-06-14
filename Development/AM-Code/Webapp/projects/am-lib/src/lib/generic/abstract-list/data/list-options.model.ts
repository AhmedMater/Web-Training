import {PaginationInfo} from "./pagination-info.model";
import {OrderInfo} from "./order-info.model";
import {ExportTypes} from "./export-types.enum";

export class ListOptions {
  pagination: PaginationInfo;
  orderInfo: OrderInfo;
  exportAs: ExportTypes;
  
  constructor(pagination: PaginationInfo, orderInfo: OrderInfo, exportAs: ExportTypes) {
    this.pagination = pagination;
    this.orderInfo = orderInfo;
    this.exportAs = exportAs;
  }
}