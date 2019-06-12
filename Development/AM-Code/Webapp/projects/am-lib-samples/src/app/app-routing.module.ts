import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AbstractListSampleComponent} from "./components/abstract-list-sample/abstract-list-sample.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'abstractList'},
  {path:'samples', children: [
      {path: 'abstractList', component: AbstractListSampleComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
