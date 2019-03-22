import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SimpleLayoutComponent} from "./layout/components/simple-layout/simple-layout.component";
import {MainLayoutComponent} from "./layout/components/main-layout/main-layout.component";
import {RegisterComponent} from "./modules/security/components/register/register.component";
import {LoginComponent} from "./modules/security/components/login/login.component";
import {HomeComponent} from "./modules/home/home.component";
import {CreateCourseComponent} from "./modules/create-course/create-course.component";
import {AuthorizationGuard} from "./infrastructure/interceptor/authorization.guard";
import {AuthViews} from "./infrastructure/directives/authorization/data/auth-views.enum";
import {UnAuthorizedComponent} from "./modules/un-authorized/un-authorized.component";
import {ViewCourseComponent} from "./modules/view-course/view-course.component";
import {AuthenticationGuard} from "./infrastructure/interceptor/authentication.guard";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: ''},
  {
    path: '', component: SimpleLayoutComponent, children: [
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent}

    ]
  },
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard]},
      {path: '403', component: UnAuthorizedComponent},
      {path: 'course', children: [
          {path:'new', component: CreateCourseComponent, data: {viewID: AuthViews.CREATE_COURSE}, canActivate:[AuthenticationGuard, AuthorizationGuard]},
          {path:'view', component: ViewCourseComponent, data: {viewID: AuthViews.VIEW_COURSE}, canActivate:[AuthenticationGuard, AuthenticationGuard]}
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
