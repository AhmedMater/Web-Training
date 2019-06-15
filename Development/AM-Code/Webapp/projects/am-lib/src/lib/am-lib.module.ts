import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppConfigService} from "./services/app-init/app-config.service";
import {MAT_DATE_PICKER_CONFIG} from "./common/material-date-picker/material-date-picker-config";
import {LocalizedMomentDatePicker} from "./common/material-date-picker/localized-moment-date-picker";
import {AuthInterceptor} from "./interceptor/auth-interceptor";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {UtilService} from "./services/util.service";
import {LocalStorageService} from "./services/local-storage.service";
import {AuthorizationGuard} from "./generic/authorization/guards/authorization.guard";
import {AuthenticationGuard} from "./generic/authorization/guards/authentication.guard";
import {DateService} from "./services/date/date.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthorizeActionDirective} from "./generic/authorization/authorize-action.directive";
import {AuthorizeViewDirective} from "./generic/authorization/authorize-view.directive";
import {ValidatorDirective} from "./generic/validator/validator.directive";
import {AMLNoDataListComponent} from "./generic/abstract-list/components/aml-no-data/aml-no-data.component";
import {AMLPaginationComponent} from "./generic/abstract-list/components/aml-pagination/aml-pagination.component";
import {AMLOrderArrowsComponent} from "./generic/abstract-list/components/aml-order-arrows.component";
import {NotFoundComponent} from "./components/not-found.component";
import {UnauthorizedComponent} from "./components/unauthorized.component";
import {CollapseStrPipe} from "./pipes/collapse-str.pipe";
import {NgxPaginationModule} from "ngx-pagination";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDatepickerModule, MatInputModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AMLExportButtonComponent} from "./generic/abstract-list/components/aml-export-button.component";
import { AMLListSearchBtnComponent } from './generic/abstract-list/components/aml-list-search-btn.component';
import {AMLListClearBtnComponent} from "./generic/abstract-list/components/aml-list-clear-btn.component";
import {LookupTranslatePipe} from "./pipes/lookup-translate.pipe";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AMLDatePickerComponent } from './generic/form-components/aml-date-picker/aml-date-picker.component';


const PIPES = [CollapseStrPipe, LookupTranslatePipe];

const DIRECTIVES = [AuthorizeViewDirective, AuthorizeActionDirective, ValidatorDirective];

const MAT_MODULES = [
  MatDatepickerModule, MatInputModule
];

const SHARED_MODULES = [
  CommonModule, TranslateModule, ReactiveFormsModule, FormsModule, NgxPaginationModule, HttpClientModule,
  BrowserAnimationsModule, MAT_MODULES
];


const ABSTRACT_COMPONENTS = [
  AMLNoDataListComponent, AMLPaginationComponent, AMLOrderArrowsComponent, AMLExportButtonComponent, AMLListSearchBtnComponent,
  AMLListClearBtnComponent, AMLDatePickerComponent
];


const COMPONENTS = [NotFoundComponent, UnauthorizedComponent, ABSTRACT_COMPONENTS];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


// @dynamic
@NgModule({
  declarations: [DIRECTIVES, ABSTRACT_COMPONENTS, PIPES, COMPONENTS],
  imports: [SHARED_MODULES,
    TranslateModule.forRoot({loader: {provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient]}}),
  ],
  providers: [
      AuthenticationGuard, AuthorizationGuard, LocalStorageService,
      UtilService, DateService, AppConfigService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
      {provide: DateAdapter, useClass: LocalizedMomentDatePicker, deps: [MAT_DATE_LOCALE]},
      {provide: MAT_DATE_FORMATS, useValue: MAT_DATE_PICKER_CONFIG},
      {provide: APP_INITIALIZER, multi: true, deps: [AppConfigService],
        useFactory: (config: AppConfigService) => {return () => {return config.loadAppConfig(AppConfigService.DEV_ENV)}}}
  ],
  exports: [SHARED_MODULES, DIRECTIVES, ABSTRACT_COMPONENTS, PIPES, COMPONENTS]
})
export class AMLibModule { }
