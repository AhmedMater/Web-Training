import {PaginationInfo} from "./pagination-info.data";


export class ListRS<T> {
  data: T[] = [];
  pagination: PaginationInfo = new PaginationInfo();
}
