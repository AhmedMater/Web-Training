import {OnInit} from "@angular/core";
import {ExportTypes} from "../../../modules/correspondence/shared/enums/export-types-enum";
import {ListRS} from "./data/list-result-set.model";
import {AuthActions} from "../authorization/data/auth-action.data";
import {getLang, Languages} from "../../data/enums/Languages";
import {FormGroup} from "@angular/forms";
import {PaginationInfo} from "./data/pagination-info.model";
import {OrderInfo} from "./data/order-info.model";
import {ConfigParam} from "../../common/ConfigParam";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {LocalStorageService} from "../../../services/local-storage.service";
import {TranslateService} from "@ngx-translate/core";
import {Utils} from "../../common/utils";
import * as FileSaver from "file-saver";


export abstract class AbstractList<U> implements OnInit{
  AUTH_ACTIONS: typeof AuthActions = AuthActions;
  EXPORT_TYPES: typeof ExportTypes = ExportTypes;
  LANG: typeof Languages = Languages;
  public resultSet: ListRS<U> =  new ListRS<U>();
  abstract filters: FormGroup;
  abstract orderInfo: OrderInfo;
  paginationInfo: PaginationInfo = new PaginationInfo();

  public CURRENT_LANG: Languages;
  public readonly DATE_FORMAT: string = ConfigParam.HTML_DISPLAY_DATE;

  protected constructor(pageTitle: string, public translate: TranslateService,
                        public localStorageService: LocalStorageService,
                        public titleService: Title,
                        public activatedRoute: ActivatedRoute,
                        public router: Router){
    this.translate.get(pageTitle).subscribe(res => this.titleService.setTitle(res));
    this.translate.onLangChange.subscribe(lang => {
      this.translate.get(pageTitle).subscribe(res => this.titleService.setTitle(res));
      this.CURRENT_LANG = getLang(lang);
    });
    this.CURRENT_LANG = this.localStorageService.getCurrentLanguage();
  }

  onRouteChange(){
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);

    if (queryParams.pageNum == null || queryParams.pageSize == null || queryParams.orderBy == null) {
      queryParams[PaginationInfo.PAGE_NUM_QUERY] = +this.paginationInfo.pageNum;
      queryParams[PaginationInfo.PAGE_SIZE_QUERY] = this.paginationInfo.pageSize;
      if(this.orderInfo != null) {
        queryParams[OrderInfo.ORDER_BY_QUERY] = this.orderInfo.orderBy;
        queryParams[OrderInfo.ORDER_DIR_QUERY] = this.orderInfo.orderDir;
      }
      this.router.navigate([window.location.pathname], {queryParams: queryParams});
    }
    this.activatedRoute.queryParams.startWith(queryParams).distinctUntilChanged().subscribe(changes => {
      if (Utils.hasValueAndIsNumber(changes.pageSize))
        this.paginationInfo.pageSize = parseInt(changes.pageSize);
      if (Utils.hasValueAndIsNumber(changes.pageNum)) {
        this.paginationInfo.pageNum = parseInt(changes.pageNum);
        this.paginationInfo.offset = this.paginationInfo.pageNum * this.paginationInfo.pageSize;
      }
      if(this.orderInfo != null) {
        if (Utils.hasValue(changes.orderBy))
          this.orderInfo.orderBy = changes.orderBy;
        if (Utils.hasValue(changes.orderDirection))
          this.orderInfo.orderDir = changes.orderDirection;
      }
      this.loadQueryParametersIntoForm(changes);
      this.findAll();
    });
  }

  public onChangePage(pageNum: number) {
    this.paginationInfo.pageNum = pageNum;
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams[PaginationInfo.PAGE_NUM_QUERY] = pageNum.toString();
    this.resetExport(queryParams);
    this.router.navigate([window.location.pathname], {queryParams: queryParams});
  }
  public onChangePageSize(pageSize: number) {
    this.paginationInfo.pageSize = pageSize;
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams[PaginationInfo.PAGE_NUM_QUERY] = '0';
    queryParams[PaginationInfo.PAGE_SIZE_QUERY] = this.paginationInfo.pageSize;
    this.resetExport(queryParams);
    this.router.navigate([window.location.pathname], {queryParams: queryParams});
  }
  public onListClear() {
    this.filters.reset();
    this.onListSearch();
  }
  public onOrder(orderBy: string) {
    if(this.orderInfo != null) {
      this.orderInfo.orderBy = orderBy;
      if (this.orderInfo.orderBy == orderBy && this.orderInfo.orderDir == 'asc')
        this.orderInfo.orderDir = 'desc';
      else if (this.orderInfo.orderBy == orderBy)
        this.orderInfo.orderDir = 'asc';
      else
        this.orderInfo.orderDir = 'desc';

      const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
      queryParams[OrderInfo.ORDER_BY_QUERY] = this.orderInfo.orderBy;
      queryParams[OrderInfo.ORDER_DIR_QUERY] = this.orderInfo.orderDir;
      queryParams[PaginationInfo.PAGE_NUM_QUERY] = 0;
      this.resetExport(queryParams);
      this.router.navigate([window.location.pathname], {queryParams: queryParams});
    }
  }
  public onListSearch() {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    this.loadFromDataIntoQueryParameters(queryParams);
    queryParams[PaginationInfo.PAGE_NUM_QUERY] = 0;
    this.resetExport(queryParams);
    this.router.navigate([window.location.pathname], {queryParams: queryParams});
  }
  public onExport(exportType: ExportTypes) {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    this.loadFromDataIntoQueryParameters(queryParams);
    queryParams[PaginationInfo.PAGE_NUM_QUERY] = 0;

    this.filters.get('exportAs').setValue(exportType);
    queryParams['exportAs'] = exportType;

    this.router.navigate([window.location.pathname], {queryParams: queryParams});
  }

  abstract loadFromDataIntoQueryParameters(queryParams: Params);
  abstract loadQueryParametersIntoForm(changes);
  abstract initializeFilters();
  abstract findAll();

  saveExportedFile(exportType: ExportTypes, fileData){
    if (exportType == this.EXPORT_TYPES.EXCEL) {
      let b: any = new Blob(['\ufeff', fileData], {type: 'text/csv'});
      FileSaver.saveAs(b, 'report.csv');
    }
    else if (exportType == this.EXPORT_TYPES.PDF) {
      let b: any = new Blob([fileData], {type: 'application/pdf'});
      FileSaver.saveAs(b, 'report.pdf');
    }
    else if (exportType == this.EXPORT_TYPES.WORD) {
      let b: any = new Blob([fileData], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
      FileSaver.saveAs(b, 'report.docx');
    }
    else if (exportType == this.EXPORT_TYPES.XLSX) {
      let b: any = new Blob([fileData], {type: 'application/vnd.ms-excel'});
      FileSaver.saveAs(b, 'report.xlsx');
    }
  }

  private resetExport(queryParams){
    if(this.filters.get('exportAs').value != null) {
      this.filters.get('exportAs').reset();
      delete queryParams['exportAs'];
    }
  }

  ngOnInit(): void {
    this.onRouteChange();
    this.initializeFilters();
  }

}
