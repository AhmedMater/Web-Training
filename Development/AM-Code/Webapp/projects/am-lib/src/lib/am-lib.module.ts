import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppConfigService} from "./services/app-init/app-config.service";
import {MAT_DATE_PICKER_CONFIG} from "./common/material-date-picker/material-date-picker-Config";
import {LocalizedMomentDatePicker} from "./common/material-date-picker/localized-moment-date-picker";
import {AuthInterceptor} from "./interceptor/auth-interceptor";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {UtilService} from "./services/util.service";
import {LocalStorageService} from "./services/local-storage.service";
import {AuthorizationGuard} from "./generic/authorization/guards/authorization.guard";
import {AuthenticationGuard} from "./generic/authorization/guards/authentication.guard";
import {DateService} from "./services/date.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthorizeActionDirective} from "./generic/authorization/authorize-action.directive";
import {AuthorizeViewDirective} from "./generic/authorization/authorize-view.directive";
import {ValidatorDirective} from "./generic/validator/validator.directive";
import {NoDataListComponent} from "./generic/abstract-list/components/no-data.component";
import {PaginationComponent} from "./generic/abstract-list/components/page-size.component";
import {SortArrowsComponent} from "./generic/abstract-list/components/sort-arrows.component";
import {NotFoundComponent} from "./components/not-found.component";
import {DatePickerRemoveComponent} from "./components/date-picker-remove.component";
import {UnauthorizedComponent} from "./components/unauthorized.component";
import {CollapseStrPipe} from "./pipes/collapse-str.pipe";
import {NgxPaginationModule} from "ngx-pagination";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material";
import {CommonModule} from "@angular/common";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

const appInitializerFn = (appConfig: AppConfigService) => {
    return () => {return appConfig.loadAppConfig(AppConfigService.DEV_ENV)};
};

const PIPES = [CollapseStrPipe];
const COMPONENTS = [NotFoundComponent, DatePickerRemoveComponent, UnauthorizedComponent];
const DIRECTIVES = [AuthorizeViewDirective, AuthorizeActionDirective, ValidatorDirective];
const SHARED_MODULES = [CommonModule, TranslateModule, ReactiveFormsModule, FormsModule, NgxPaginationModule, HttpClientModule];
const ABSTRACT_COMPONENTS = [NoDataListComponent, PaginationComponent, SortArrowsComponent];

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
      {provide: APP_INITIALIZER, useFactory: appInitializerFn, multi: true, deps: [AppConfigService]}
  ],
  exports: [SHARED_MODULES, DIRECTIVES, ABSTRACT_COMPONENTS, PIPES, COMPONENTS]
})
export class AMLibModule { }
