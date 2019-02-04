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
import { LoginComponent } from './modules/security/components/login/login.component';

import {CreateReferenceComponent} from './modules/course/component/create-reference/create-reference.component';
import { CreateSectionComponent } from './modules/section/components/create-section/create-section.component';
import { CreateTutorialComponent } from './modules/tutorial/components/create-tutorial/create-tutorial.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { CourseComponent } from './modules/course/course.component';
import { UserProfileComponent } from './modules/user/components/user-profile/user-profile.component';
import { UserRoleComponent } from './modules/user/components/user-profile/user-role/user-role.component';

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

    LoginComponent,

    CreateReferenceComponent,
    CreateSectionComponent,
    CreateTutorialComponent,
    HomeComponent,
    CourseComponent,
    UserProfileComponent,
    UserRoleComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
