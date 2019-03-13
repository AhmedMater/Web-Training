import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './layout/components/main-layout/main-layout.component';
import { SimpleLayoutComponent } from './layout/components/simple-layout/simple-layout.component';
import { LayoutComponent } from './layout/layout.component';
import { MainHeaderComponent } from './layout/components/main-layout/components/main-header/main-header.component';
import { MainSidebarComponent } from './layout/components/main-layout/components/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './layout/components/main-layout/components/main-footer/main-footer.component';
import { SimpleFooterComponent } from './layout/components/simple-layout/components/simple-footer/simple-footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { RegisterComponent } from './modules/security/components/register/register.component';
import { LoginComponent } from './modules/security/components/login/login.component';
import {LocalStorageService} from "./infrastructure/services/local-storage.service";
import { HomeComponent } from './modules/home/home.component';
import {AuthInterceptor} from "./infrastructure/interfaces/auth-interceptor";

@NgModule({
  declarations: [
    MainLayoutComponent,
    SimpleLayoutComponent,
    LayoutComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    SimpleFooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule,
    AppRoutingModule
  ],
  providers: [LocalStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
