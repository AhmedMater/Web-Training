import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleLayoutComponent} from "./layout/components/simple-layout/simple-layout.component";
import {MainLayoutComponent} from "./layout/components/main-layout/main-layout.component";
import {HomeComponent} from "./modules/home/home.component";
import {CreateReferenceComponent} from "./modules/course/component/create-reference/create-reference.component";
// import * as path from "path";
import {LoginComponent} from "./modules/security/components/login/login.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '', component: SimpleLayoutComponent, children:[
      {path: 'login', component: LoginComponent},
      {path: 'reference', component: CreateReferenceComponent},

    ]},
  {
    path: '', component: MainLayoutComponent, children: [
      {path:'home', component: HomeComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
