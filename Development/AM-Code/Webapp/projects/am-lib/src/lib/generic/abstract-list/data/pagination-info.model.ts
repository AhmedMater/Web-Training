
export class PaginationInfo {
  static readonly PAGE_NUM_QUERY: string = 'pageNum';
  static readonly PAGE_SIZE_QUERY: string = 'pageSize';

  pageNum: number = 0; // Current Page number
  pageSize: number = 5; // Num of Records per Page
  offset: number = 0; //Total num of records before this Page = (pageNum * pageSize)
}
