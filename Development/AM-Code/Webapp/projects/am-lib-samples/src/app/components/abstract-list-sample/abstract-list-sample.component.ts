import { Component, OnInit } from '@angular/core';
import {AbstractList} from "../../../../../am-lib/src/lib/generic/abstract-list/list.abstract";
import {ListItemVto} from "./data/list-item-vto.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {OrderInfo} from "../../../../../am-lib/src/lib/generic/abstract-list/data/order-info.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {LanguageService} from "../../../../../am-lib/src/lib/services/language/language.service";
import {Title} from "@angular/platform-browser";
import {UtilService} from "../../../../../am-lib/src/lib/services/util.service";
import {TranslateService} from "@ngx-translate/core";
import {DateService} from "../../../../../am-lib/src/lib/services/date.service";

@Component({
  selector: 'app-abstract-list-sample',
  templateUrl: 'abstract-list-sample.component.html',
  providers: [FormBuilder]
})
export class AbstractListSampleComponent extends AbstractList<ListItemVto> {
  
  filters: FormGroup = this.formBuilder.group({
   name: null
  });
  orderInfo: OrderInfo;
  
  constructor(public translate: TranslateService,
              public languageService: LanguageService,
              public utilService: UtilService,
              public titleService: Title,
              public activatedRoute: ActivatedRoute,
              public formBuilder: FormBuilder,
              public router: Router,
              public dateService: DateService){
    super('amLibSamples.abstractList.pageTitle', translate, languageService, utilService,
      titleService, activatedRoute, router, dateService);
  }
  
  ngOnInit() {
  }
  findAll() {
  }
  
  initializeFilters() {
  }
  
  loadFromDataIntoQueryParameters(queryParams: Params) {
  }
  
  loadQueryParametersIntoForm(changes) {
  }

}
