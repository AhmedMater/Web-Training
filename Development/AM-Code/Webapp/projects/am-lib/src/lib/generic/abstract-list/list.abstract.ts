import {OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {TranslateService} from "@ngx-translate/core";
import * as FileSaver from "file-saver";
import {startWith, distinctUntilChanged} from 'rxjs/operators';

import {ExportTypes} from "./data/export-types.enum";
import {AuthActions} from "../authorization/data/auth-actions.enum";
import {Languages} from "../../services/language/language.enum";
import {ListRS} from "./data/list-result-set.model";
import {OrderInfo} from "./data/order-info.model";
import {PaginationInfo} from "./data/pagination-info.model";
import {LanguageService} from "../../services/language/language.service";
import {UtilService} from "../../services/util.service";
import {DateService} from "../../services/date.service";


export abstract class AbstractList<U> implements OnInit{
  AUTH_ACTIONS: typeof AuthActions = AuthActions;
  EXPORT_TYPES: typeof ExportTypes = ExportTypes;
  LANG: typeof Languages = Languages;
  public resultSet: ListRS<U> =  new ListRS<U>();
  abstract filters: FormGroup;
  abstract orderInfo: OrderInfo;
  paginationInfo: PaginationInfo = new PaginationInfo();

  public CURRENT_LANG: Languages;
  public readonly DATE_FORMAT: string;

  protected constructor(pageTitle: string, public translate: TranslateService,
                        public languageService: LanguageService,
                        public utilService: UtilService,
                        public titleService: Title,
                        public activatedRoute: ActivatedRoute,
                        public router: Router,
                        public dateService: DateService){
    this.translate.get(pageTitle).subscribe(res => this.titleService.setTitle(res));
    this.CURRENT_LANG = this.languageService.getCurrentLanguage();
    
    this.translate.onLangChange.subscribe(lang => {
      this.translate.get(pageTitle).subscribe(res => this.titleService.setTitle(res));
      this.CURRENT_LANG = this.languageService.getLang(lang);
    });
    this.DATE_FORMAT = this.dateService.HTML_DATE_FORMAT;
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
    this.activatedRoute.queryParams.pipe(startWith(queryParams),distinctUntilChanged()).subscribe(changes => {
      if (this.utilService.hasValueAndIsNumber(changes.pageSize))
        this.paginationInfo.pageSize = parseInt(changes.pageSize);
      if (this.utilService.hasValueAndIsNumber(changes.pageNum)) {
        this.paginationInfo.pageNum = parseInt(changes.pageNum);
        this.paginationInfo.offset = this.paginationInfo.pageNum * this.paginationInfo.pageSize;
      }
      if(this.orderInfo != null) {
        if (this.utilService.hasValue(changes.orderBy))
          this.orderInfo.orderBy = changes.orderBy;
        if (this.utilService.hasValue(changes.orderDirection))
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
