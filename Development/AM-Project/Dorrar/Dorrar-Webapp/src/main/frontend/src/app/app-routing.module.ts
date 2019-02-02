import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleLayoutComponent} from "./layout/components/simple-layout/simple-layout.component";
import {MainLayoutComponent} from "./layout/components/main-layout/main-layout.component";
import {HomeComponent} from "./modules/home/home.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '', component: SimpleLayoutComponent},
  {
    path: '', component: MainLayoutComponent, children: [
      {path:'home', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
