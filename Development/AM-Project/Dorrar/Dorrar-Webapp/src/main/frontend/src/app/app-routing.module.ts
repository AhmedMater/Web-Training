import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleLayoutComponent} from "./layout/components/simple-layout/simple-layout.component";
import {MainLayoutComponent} from "./layout/components/main-layout/main-layout.component";
import {HomeComponent} from "./modules/home/home.component";
import {CreateReferenceComponent} from "./modules/course/component/create-reference/create-reference.component";
// import * as path from "path";
import {LoginComponent} from "./modules/security/components/login/login.component";
import {CourseComponent} from "./modules/course/course.component";
import {UserProfileComponent} from "./modules/user/components/user-profile/user-profile.component";
import {UserRoleComponent} from "./modules/user/components/user-profile/user-role/user-role.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '', component: SimpleLayoutComponent, children:[
      {path: 'login', component: LoginComponent}

    ]},
  {
    path: '', component: MainLayoutComponent, children: [
      {path:'home', component: HomeComponent},
      {path: 'course', component: CourseComponent} ,
      {path:'user/profile', component:UserProfileComponent,children:[
          {path:'role',component:UserRoleComponent}
        ]}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
