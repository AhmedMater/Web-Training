
export class OrderInfo {
  static readonly ORDER_BY_QUERY: string = 'orderBy';
  static readonly ORDER_DIR_QUERY: string = 'orderDir';
  orderBy: string;
  orderDir: string = 'asc';

  constructor(orderBy: string, orderDir: string){
    this.orderBy = orderBy;
    this.orderDir = orderDir;
  }
}
