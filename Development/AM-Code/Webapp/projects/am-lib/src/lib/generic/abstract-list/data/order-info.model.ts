
export class OrderInfo {
  static readonly ORDER_BY_QUERY: string = 'orderBy';
  static readonly ORDER_DIR_QUERY: string = 'orderDir';
  static readonly ASC: string = 'asc';
  static readonly DESC: string = 'desc';
  
  orderBy: string;
  orderDir: string = OrderInfo.ASC;

  constructor(orderBy: string, orderDir: string){
    this.orderBy = orderBy;
    this.orderDir = orderDir;
  }
}
