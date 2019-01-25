import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullLayout } from './layout/full-layout/full-layout.component';
import { SimpleLayout } from './layout/simple-layout/simple-layout.component';
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {LabelTranslateByIdPipe} from "./core/pipe/label-translate-by-id.pipe";
import {LabelTranslatePipe} from "./core/pipe/label-translate.pipe";
import {LocalStorageService} from "./core/services/local-storage.service";
import {UniversalService} from "./core/services/universal.service";
import {RESTInterceptor} from "./core/interceptor/rest.interceptor";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HomeComponent } from './modules/home/home.component';
import {LoginComponent} from "./modules/authentication/components/login/login.component";
import {RegisterComponent} from "./modules/authentication/components/register/register.component";
import {FooterComponent} from "./layout/components/footer/footer.component";
import {SideBarComponent} from "./layout/components/side-bar/side-bar.component";
import {HeaderComponent} from "./layout/components/header/header.component";
import {AMValidatorDirective} from "./core/directive/validator/am-validator.directive";
import {RequestResponse} from "./core/directive/request-response/request-response.directive";
import {AlertComponent} from "./core/directive/alerts/alert.component";
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { MainDetailsComponent } from './modules/user-profile/components/main-details/main-details.component';
import { EducationDetailComponent } from './modules/user-profile/components/education-detail/education-detail.component';
import { ContactDetailsComponent } from './modules/user-profile/components/contact-details/contact-details.component';
import {UserService} from "./modules/user-profile/shared/user.service";


let AUTH_COMPONENTS = [LoginComponent, RegisterComponent];
let SHARED_COMPONENTS = [HeaderComponent, FooterComponent, SideBarComponent, FullLayout, SimpleLayout];
let PIPES = [LabelTranslateByIdPipe, LabelTranslatePipe];
let DIRECTIVES = [AMValidatorDirective, RequestResponse];

@NgModule({
  declarations: [
    AppComponent, SHARED_COMPONENTS, DIRECTIVES, PIPES,
    HomeComponent, AUTH_COMPONENTS, AlertComponent, UserProfileComponent, MainDetailsComponent,
    EducationDetailComponent, ContactDetailsComponent
  ],
  imports: [
    AppRoutingModule, BrowserModule, ReactiveFormsModule, BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient]}
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: RESTInterceptor, multi: true},
    UniversalService, LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
