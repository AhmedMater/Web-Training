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
import { HomeComponent } from './modules/home/home.component';
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';
import { HamadaComponent } from './modules/hamada/hamada.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SimpleLayoutComponent,
    LayoutComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    SimpleFooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HamadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
