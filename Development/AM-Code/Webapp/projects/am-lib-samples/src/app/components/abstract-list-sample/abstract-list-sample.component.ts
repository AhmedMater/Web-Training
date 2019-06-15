import { Component, OnInit } from '@angular/core';
import {AbstractList} from "../../../../../am-lib/src/lib/generic/abstract-list/list.abstract";
import {UserVTO} from "./data/user-vto.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderInfo} from "../../../../../am-lib/src/lib/generic/abstract-list/data/order-info.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {LanguageService} from "../../../../../am-lib/src/lib/generic/language/language.service";
import {Title} from "@angular/platform-browser";
import {UtilService} from "../../../../../am-lib/src/lib/services/util.service";
import {TranslateService} from "@ngx-translate/core";
import {DateService} from "../../../../../am-lib/src/lib/generic/date/date.service";
import {AbstractListService} from "./abstract-list.service";
import {ListOptions} from "../../../../../am-lib/src/lib/generic/abstract-list/data/list-options.model";
import {ExportTypes} from "../../../../../am-lib/src/lib/generic/abstract-list/data/export-types.enum";

@Component({
  selector: 'app-abstract-list-sample',
  templateUrl: 'abstract-list-sample.component.html',
  providers: [FormBuilder, AbstractListService]
})
export class AbstractListSampleComponent extends AbstractList<UserVTO> {
  
  filters: FormGroup = this.formBuilder.group({
    fullName: null,
    username: null,
    email: null,
    isActive: null,
    expiryDateFrom: [null, [Validators.required]]
  });
  orderInfo: OrderInfo;
  
  constructor(public translate: TranslateService,
              public languageService: LanguageService,
              public utilService: UtilService,
              public dateService: DateService,
              public titleService: Title,
              public activatedRoute: ActivatedRoute,
              public formBuilder: FormBuilder,
              public router: Router,
              private abstractListService: AbstractListService){
    super('amLibSamples.abstractList.pageTitle', translate, languageService, utilService, dateService,
      titleService, activatedRoute, router);
  }
  
  findAll(exportType: ExportTypes) {
    console.log(this.filters.get('expiryDateFrom'));
    
    this.abstractListService.findAll({
    
    }, new ListOptions(this.paginationInfo, this.orderInfo, exportType)).subscribe(
      res=> this.resultSet = res
    );
  }
  
  initializeFilters() {
  
  }
}
