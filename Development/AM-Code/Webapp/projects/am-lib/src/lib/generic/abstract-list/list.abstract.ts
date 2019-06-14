import {OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {TranslateService} from "@ngx-translate/core";
import * as FileSaver from "file-saver";
import {startWith, distinctUntilChanged} from 'rxjs/operators';

import {ExportTypes} from "./data/export-types.enum";
import {Languages} from "../../services/language/language.enum";
import {ResultSet} from "./data/result-set.model";
import {OrderInfo} from "./data/order-info.model";
import {PaginationInfo} from "./data/pagination-info.model";
import {LanguageService} from "../../services/language/language.service";
import {UtilService} from "../../services/util.service";
import {DateService} from "../../services/date/date.service";
import {Moment} from "moment";
import {DateFormats} from "../../services/date/date-formats.enum";


export abstract class AbstractList<U> implements OnInit{
  public resultSet: ResultSet<U> =  new ResultSet<U>();
  abstract filters: FormGroup;
  abstract orderInfo: OrderInfo;
  paginationInfo: PaginationInfo = new PaginationInfo();
  
  public CURRENT_LANG: Languages;
  
  protected constructor(pageTitle: string, public translate: TranslateService,
                        public languageService: LanguageService,
                        public utilService: UtilService,
                        public dateService: DateService,
                        public titleService: Title,
                        public activatedRoute: ActivatedRoute,
                        public router: Router){
    this.translate.get(pageTitle).subscribe(res => this.titleService.setTitle(res));
    this.CURRENT_LANG = this.languageService.getCurrentLanguage();
  
    this.translate.onLangChange.subscribe(lang => {
      this.translate.get(pageTitle).subscribe(res => this.titleService.setTitle(res));
      this.CURRENT_LANG = this.languageService.getLang(lang);
    });
  }
  
  ngOnInit(): void {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    
    if (queryParams.pageNum == null || queryParams.pageSize == null) {
      queryParams[PaginationInfo.PAGE_NUM_QUERY] = +this.paginationInfo.pageNum;
      queryParams[PaginationInfo.PAGE_SIZE_QUERY] = this.paginationInfo.pageSize;
    }
    
    if(queryParams.orderBy == null && this.orderInfo != null) {
      queryParams[OrderInfo.ORDER_BY_QUERY] = this.orderInfo.orderBy;
      queryParams[OrderInfo.ORDER_DIR_QUERY] = this.orderInfo.orderDir;
    }
    
    this.initializeFilters(queryParams);
    this.activatedRoute.queryParams.pipe(startWith(queryParams),distinctUntilChanged()).subscribe(changes => {
      this.onRouteChange(changes);
    });
  }
  
  public onChangePage(pageNum: number) {
    this.paginationInfo.pageNum = pageNum;
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams[PaginationInfo.PAGE_NUM_QUERY] = pageNum.toString();
    this.router.navigate([window.location.pathname], {queryParams: queryParams});
  }
  public onChangePageSize(pageSize: number) {
    this.paginationInfo.pageSize = pageSize;
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams[PaginationInfo.PAGE_NUM_QUERY] = '0';
    queryParams[PaginationInfo.PAGE_SIZE_QUERY] = this.paginationInfo.pageSize;
    this.router.navigate([window.location.pathname], {queryParams: queryParams});
  }
  public onClear() {
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
      this.router.navigate([window.location.pathname], {queryParams: queryParams});
    }
  }
  public onSearch() {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    this.loadFormDataIntoQueryParams(queryParams);
    queryParams[PaginationInfo.PAGE_NUM_QUERY] = 0;
    this.router.navigate([window.location.pathname], {queryParams: queryParams});
  }
  public onExport(exportType: ExportTypes) {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    this.loadFormDataIntoQueryParams(queryParams);
    queryParams[PaginationInfo.PAGE_NUM_QUERY] = 0;
    this.onRouteChange(queryParams, exportType);
  }
  
  abstract initializeFilters(queryParams: Params);
  abstract findAll(exportType: ExportTypes);
  
  private onRouteChange(changes: Params, exportType?: ExportTypes){
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
    if(this.filters != null) {
      this.loadQueryParamsIntoForm(changes);
      this.findAll(exportType);
    }
  }
  private loadQueryParamsIntoForm(changes: Params){
    Object.keys(changes).forEach((key: string) => {
      if(this.filters.controls[key] != null) {
        if (this.utilService.hasValue(changes[key])) {
          let value = (/^.Date.$/.test(key)) ? this.dateService.toMoment(changes[key], DateFormats.M_DASH_DD_MM_YYYY) : changes[key];
          this.filters.controls[key].setValue(value);
        }
      }
    });
  }
  private loadFormDataIntoQueryParams(queryParams: Params){
    Object.keys(this.filters.controls).forEach((key: string) => {
      let value = (/^.Date.$/.test(key)) ? this.dateService.toStr(<Moment>this.filters.get(key).value, DateFormats.M_DASH_DD_MM_YYYY) :
        this.filters.get(key).value;
      
      if (this.utilService.hasValue(value))
        queryParams[key] = value;
      else
        delete queryParams[key];
    });
  }
  
  protected saveExportedFile(exportType: ExportTypes, fileName: string, fileData){
    if (exportType == this.EXPORT_TYPES.CSV) {
      let b: any = new Blob(['\ufeff', fileData], {type: 'text/csv'});
      FileSaver.saveAs(b, fileName + '.csv');
    }
    else if (exportType == this.EXPORT_TYPES.PDF) {
      let b: any = new Blob([fileData], {type: 'application/pdf'});
      FileSaver.saveAs(b, fileName + '.pdf');
    }
    else if (exportType == this.EXPORT_TYPES.WORD) {
      let b: any = new Blob([fileData], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
      FileSaver.saveAs(b, fileName + '.docx');
    }
    else if (exportType == this.EXPORT_TYPES.EXCEL) {
      let b: any = new Blob([fileData], {type: 'application/vnd.ms-excel'});
      FileSaver.saveAs(b, fileName + '.xlsx');
    }
  }
}
